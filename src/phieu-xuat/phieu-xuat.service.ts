import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BillXuat } from 'src/bill-xuat/model/bill-xuat-model';
import { PhieuXuat } from './model/phieu-xuat-model';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';
import { HangHoaService } from 'src/hang-hoa/service/hang-hoa.service';
import { HangHoa } from 'src/hang-hoa/model/hang-hoa.model';
import { BillXuatService } from 'src/bill-xuat/bill-xuat.service';

@Injectable()
export class PhieuXuatService {
  constructor(
    @InjectModel(PhieuXuat)
    private readonly phieuXuatModel: typeof PhieuXuat,
    @InjectModel(BillXuat)
    private readonly billXuatModel: typeof BillXuat,
    private readonly hangHoaSerVice: HangHoaService,
    @InjectModel(HangHoa)
    private readonly hangHoaModel: typeof HangHoa,
    private readonly billXuatService: BillXuatService,
  ) {}

  async submitPhieuXuat(maPhieuXuat: string) {
    const billItems = await BillXuat.findAll({ where: { maPhieuXuat } });
    const totalAmount = billItems.reduce(
      (sum, item) => sum + item.totalPrice,
      0,
    );

    return PhieuXuat.update({ totalAmount }, { where: { maPhieuXuat } });
  }

  async createPhieuXuat(dto: CreatePhieuXuatDto): Promise<any> {
    const { maDaiLy, billXuatList } = dto;

    let totalAmount = 0;
    const billItems = [];

    // Kiểm tra và cập nhật số lượng hàng hóa
    for (const item of billXuatList) {
      const hangHoa = await this.hangHoaModel.findOne({
        where: { ma: item.maHangHoa },
      });
      if (!hangHoa || hangHoa.soLuong < item.quantity) {
        throw new HttpException(
          `Sản phẩm ${item.maHangHoa} không đủ số lượng`,
          HttpStatus.BAD_REQUEST,
        );
      }

      // Tính giá trị tổng của sản phẩm trong hóa đơn
      const totalPrice = item.quantity * hangHoa.giaNhap;
      totalAmount += totalPrice;

      // Lưu sản phẩm vào billItems để tạo BillXuat sau
      billItems.push({
        maHangHoa: item.maHangHoa,
        productName: hangHoa.ten,
        quantity: item.quantity,
        unitPrice: hangHoa.giaNhap,
        totalPrice,
      });

      // Cập nhật lại số lượng tồn kho
      await this.hangHoaModel.update(
        { soLuong: hangHoa.soLuong - item.quantity },
        { where: { ma: item.maHangHoa } },
      );
    }

    // Tạo mới phiếu xuất
    const phieuXuat = await this.phieuXuatModel.create({
      maDaiLy,
      totalAmount,
      ma: `PX-${new Date().getTime()}`, // Tạo mã phiếu xuất tự động
    });

    // Lưu chi tiết của phiếu xuất vào BillXuat
    for (const billItem of billItems) {
      await this.billXuatModel.create({
        maPhieuXuat: phieuXuat.ma,
        ...billItem,
      });
    }

    // Lấy thông tin chi tiết phiếu xuất vừa tạo và trả về
    const invoiceDetails = await this.phieuXuatModel.findOne({
      where: { id: phieuXuat.id },
      include: [this.billXuatModel],
    });

    return invoiceDetails;
  }

  async createPhieuXuatV1(
    createPhieuXuatDto: CreatePhieuXuatDto,
  ): Promise<PhieuXuat> {
    // Kiểm tra nếu bất kỳ trường nào bị thiếu
    if (
      !createPhieuXuatDto.maDaiLy ||
      !createPhieuXuatDto.maHangHoa ||
      createPhieuXuatDto.totalAmount === null
    ) {
      throw new BadRequestException(
        'Các trường maDaiLy, maHangHoa, và totalAmount là bắt buộc.',
      );
    }

    const newPhieuXuat = await this.phieuXuatModel.create({
      maDaiLy: createPhieuXuatDto.maDaiLy,
      maHangHoa: createPhieuXuatDto.maHangHoa,
      totalAmount: createPhieuXuatDto.totalAmount,
    });

    return newPhieuXuat;
  }
}
