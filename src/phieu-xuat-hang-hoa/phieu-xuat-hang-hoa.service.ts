import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PhieuXuatHangHoa } from './model/phieu-xuat-hang-hoa.model';
import { CreatePhieuXuatHangHoaDto } from './dto/create-phieu-xuat-hang-hoa.dto';

@Injectable()
export class PhieuXuatHangHoaService {
  constructor(
    @InjectModel(PhieuXuatHangHoa)
    private phieuXuatHangHoaRepository: typeof PhieuXuatHangHoa,
  ) {}

  async createHangHoa(
    createPhieuXuatHangHoaDto: CreatePhieuXuatHangHoaDto,
    phieuXuatId: string,
  ): Promise<PhieuXuatHangHoa> {
    const hangHoa = await this.phieuXuatHangHoaRepository.create({
      ...createPhieuXuatHangHoaDto,
      phieuXuatId,
    });

    return hangHoa;
  }
}
