import { Injectable } from '@nestjs/common';
import { PhieuNhap } from './model/phieu-nhap-model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PhieuNhapService {
  constructor(
    @InjectModel(PhieuNhap) private phieuNhapRepository: typeof PhieuNhap,
  ) {}

  async createDaiLy(createPhieuNhapDto: PhieuNhap): Promise<PhieuNhap> {
    return await this.phieuNhapRepository.create(createPhieuNhapDto);
  }
}
