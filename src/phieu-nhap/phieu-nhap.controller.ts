import { Controller, Get, Param, Post } from '@nestjs/common';
import { PhieuNhapService } from './phieu-nhap.service';
import { PhieuNhap } from './model/phieu-nhap-model';

@Controller('phieu-nhap')
export class PhieuNhapController {
  constructor(private phieuNhapService: PhieuNhapService) {}

  @Post('search')
  async searchphieuNhap(@Param('id') id: string) {
    return await this.phieuNhapService.findOne(id);
  }

  @Get('find')
  async timKiemTT() {
    return await this.phieuNhapService.findAll();
  }

  @Post('create')
  async createphieuNhap(phieuNhap: PhieuNhap): Promise<PhieuNhap> {
    return await this.phieuNhapService.createPhieuNhap(phieuNhap);
  }
}
