import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HangHoa } from 'src/hang-hoa/model/hang-hoa.model';
import { PhieuXuatHangHoa } from 'src/phieu-xuat-hang-hoa/model/phieu-xuat-hang-hoa.model';
import { PhieuXuat } from './model/phieu-xuat-model';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';

@Injectable()
export class PhieuXuatService {
  constructor(
    @InjectModel(PhieuXuat) private readonly phieuXuatModel: typeof PhieuXuat,
    @InjectModel(HangHoa) private readonly hangHoaModel: typeof HangHoa,
    @InjectModel(PhieuXuatHangHoa)
    private readonly phieuXuatHangHoaModel: typeof PhieuXuatHangHoa,
  ) {}

  async placeOrder(
    createPhieuXuatDto: CreatePhieuXuatDto,
    maDaiLy: string,
  ): Promise<string> {
    const { danhSachHangHoa } = createPhieuXuatDto;

    for (const item of danhSachHangHoa) {
      const hangHoa = await this.hangHoaModel.findOne({
        where: { ma: item.maHangHoa },
      });
      if (!hangHoa || hangHoa.soLuong < item.soLuong) {
        throw new BadRequestException(
          `Insufficient stock for item: ${item.maHangHoa}`,
        );
      }
    }

    // Step 2: Deduct stock and create an export receipt
    const phieuXuat = await this.phieuXuatModel.create({
      ma: createPhieuXuatDto.ma,
      totalAmount: 0, // to be calculated
    });

    let totalAmount = 0;
    for (const item of danhSachHangHoa) {
      const hangHoa = await this.hangHoaModel.findOne({
        where: { ma: item.maHangHoa },
      });

      // Deduct the quantity
      hangHoa.soLuong -= item.soLuong;
      await hangHoa.save();

      // Create a record in the PhieuXuatHangHoa table
      await this.phieuXuatHangHoaModel.create({
        maPhieuXuat: phieuXuat.ma,
        maHangHoa: item.maHangHoa,
        soLuong: item.soLuong,
        // Add any additional relevant information here
      });

      // Update total amount
      totalAmount += hangHoa.giaNhap * item.soLuong;
    }

    // Step 3: Update the total amount of the receipt
    phieuXuat.totalAmount = totalAmount;
    await phieuXuat.save();

    // Step 4: Create association with the agency (maDaiLy)
    // (Assuming there is a field to store agency ID)
    await phieuXuat.update({ maDaiLy });

    return phieuXuat.ma;
  }
  async createPhieuXuat(
    createPhieuXuatDto: CreatePhieuXuatDto,
  ): Promise<PhieuXuat> {
    return await this.phieuXuatModel.create(createPhieuXuatDto);
  }
}
