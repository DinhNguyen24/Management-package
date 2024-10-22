import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HangHoa } from 'src/hang-hoa/model/hang-hoa.model';
import { PhieuXuat } from './model/phieu-xuat-model';
import { BillXuat } from 'src/bill-xuat/model/bill-xuat-model';

@Injectable()
export class PhieuXuatService {
  constructor(
    @InjectModel(PhieuXuat)
    private readonly phieuXuatRepository: typeof PhieuXuat,
    @InjectModel(HangHoa)
    private readonly hangHoaRepository: typeof HangHoa,
  ) {}

  async addHangHoaToPhieuXuat(
    idPhieuXuat: string,
    body: { idHangHoa: string; soLuong: number; donGia: number },
  ) {
    const phieuXuat = await this.phieuXuatRepository.findByPk(idPhieuXuat);
    if (!phieuXuat) {
      throw new NotFoundException('Phiếu xuất không tồn tại');
    }

    const hangHoa = await this.hangHoaRepository.findByPk(body.idHangHoa);
    if (!hangHoa) {
      throw new NotFoundException('Hàng hóa không tồn tại');
    }

    if (hangHoa.soLuong < body.soLuong) {
      throw new BadRequestException('Số lượng yêu cầu vượt quá tồn kho');
    }

    // Giảm số lượng tồn kho
    hangHoa.soLuong -= body.soLuong;
    await hangHoa.save();

    // // Thêm vào BillXuất
    // const billXuat: Partial<BillXuat> = await this.billXuatRepository.create({
    //   idPhieuXuat,
    //   idHangHoa: body.idHangHoa,
    //   productName: hangHoa.ten,
    //   quantity: body.soLuong,
    //   unitPrice: body.donGia,
    //   phieuXuat: new PhieuXuat(),
    //   hangHoa: '',
    //   totalPrice: 0,
    // });

    // return billXuat; // return the created BillXuat instance
  }

  async getDanhSachHangHoaXuat(idPhieuXuat: string) {
    const phieuXuat = await this.phieuXuatRepository.findByPk(idPhieuXuat, {
      include: [BillXuat],
    });

    if (!phieuXuat) {
      throw new NotFoundException('Phiếu xuất không tồn tại');
    }

    return phieuXuat.billXuatList;
  }
}
