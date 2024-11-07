import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PhieuXuatDaiLy } from 'src/phieu-xuat-dai-ly/model/phieu-xuat-dai-ly.model';
import { PhieuXuatHangHoaService } from 'src/phieu-xuat-hang-hoa/phieu-xuat-hang-hoa.service';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';
import { PhieuXuat } from './model/phieu-xuat-model';

@Injectable()
export class PhieuXuatService {
  constructor(
    @InjectModel(PhieuXuat)
    private phieuXuatRepository: typeof PhieuXuat,
    @InjectModel(PhieuXuatDaiLy)
    private phieuXuatDaiLyRepository: typeof PhieuXuatDaiLy,
    private readonly phieuXuatHangHoaService: PhieuXuatHangHoaService,
  ) {}

  async createPhieuXuat(
    createPhieuXuatDto: CreatePhieuXuatDto,
  ): Promise<PhieuXuat> {
    return await this.phieuXuatRepository.create(createPhieuXuatDto);
  }
}
