import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BillXuat } from 'src/bill-xuat/model/bill-xuat-model';
import { PhieuXuat } from './model/phieu-xuat-model';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';
import { HangHoaService } from 'src/hang-hoa/service/hang-hoa.service';

@Injectable()
export class PhieuXuatService {
  constructor(
    @InjectModel(PhieuXuat)
    private readonly phieuXuatModel: typeof PhieuXuat,
    @InjectModel(BillXuat)
    private readonly billXuatModel: typeof BillXuat,
    private readonly hangHoaSerVice: HangHoaService,
  ) {}

  async createPhieuXuat(
    createPhieuXuatDto: CreatePhieuXuatDto,
  ): Promise<PhieuXuat> {
    const phieuXuat = await this.phieuXuatModel.create(createPhieuXuatDto);
    const hangHoaList = await this.hangHoaSerVice.findHangHoaByMa(
      createPhieuXuatDto.maHangHoa,
    );
    createPhieuXuatDto.billXuatList.map((res) => {
      return this.billXuatModel.create({
        phieuXuatId: phieuXuat.id,
        ...res,
      });
    });
    // Cập nhật tổng số tiền cho phiếu xuất
    await phieuXuat.update({ hangHoaList });
    return phieuXuat;
  }

  async submitPhieuXuat(maPhieuXuat: string) {
    const billItems = await BillXuat.findAll({ where: { maPhieuXuat } });
    const totalAmount = billItems.reduce(
      (sum, item) => sum + item.totalPrice,
      0,
    );

    return PhieuXuat.update({ totalAmount }, { where: { maPhieuXuat } });
  }
}
