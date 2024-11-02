import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BillXuat } from 'src/bill-xuat/model/bill-xuat-model';
import { PhieuXuat } from './model/phieu-xuat-model';
import { HangHoaService } from 'src/hang-hoa/service/hang-hoa.service';
import { HangHoa } from 'src/hang-hoa/model/hang-hoa.model';
import { BillXuatService } from 'src/bill-xuat/bill-xuat.service';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';

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
  async create(dto: CreatePhieuXuatDto) {
    return await this.phieuXuatModel.create(dto);
  }
}
