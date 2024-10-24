import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BillXuat } from 'src/bill-xuat/model/bill-xuat-model';
import { PhieuXuat } from './model/phieu-xuat-model';

@Injectable()
export class PhieuXuatService {
  constructor(
    @InjectModel(PhieuXuat)
    private readonly phieuXuatModel: typeof PhieuXuat,
    @InjectModel(BillXuat)
    private readonly billXuatModel: typeof BillXuat,
  ) {}

  // Tạo phiếu xuất
  async createPhieuXuat(daiLyId: string, bills: any[]): Promise<PhieuXuat> {
    // Tạo phiếu xuất
    const phieuXuat = await this.phieuXuatModel.create({
      daiLyId,
      totalAmount: 0,
    });

    // Tạo danh sách bill xuất cho phiếu xuất
    let totalAmount = 0;
    for (const bill of bills) {
      const createdBill = await this.billXuatModel.create({
        idPhieuXuat: phieuXuat.id,
        idHangHoa: bill.idHangHoa,
        productName: bill.productName,
        quantity: bill.quantity,
        unitPrice: bill.unitPrice,
        totalPrice: bill.quantity * bill.unitPrice,
      });
      totalAmount += createdBill.totalPrice;
    }

    // Cập nhật tổng số tiền cho phiếu xuất
    await phieuXuat.update({ totalAmount });

    return phieuXuat;
  }
}
