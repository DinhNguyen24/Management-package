import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PhieuXuat } from './model/phieu-xuat-model';

@Injectable()
export class PhieuXuatService {
  constructor(
    @InjectModel(PhieuXuat) private phieuXuatRepository: typeof PhieuXuat,
  ) {}

  async createDaiLy(createPhieuXuatDto: PhieuXuat): Promise<PhieuXuat> {
    return await this.phieuXuatRepository.create(createPhieuXuatDto);
  }

  async findAll(): Promise<PhieuXuat[]> {
    return await this.phieuXuatRepository.findAll();
  }

  async findOne(id: string): Promise<PhieuXuat> {
    return await this.phieuXuatRepository.findOne({
      where: {
        id,
      },
    });
  }
}
