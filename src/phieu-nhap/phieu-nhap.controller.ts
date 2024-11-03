import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PhieuNhapService } from './phieu-nhap.service';
import { PhieuNhap } from './model/phieu-nhap-model';
import { ApiTags } from '@nestjs/swagger';
import { CreatePhieuNhapDto } from './dto/create-phieu-nhap.dto';
@ApiTags('Phieu Nhap')
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
  async createphieuNhap(@Body() phieuNhap: PhieuNhap): Promise<PhieuNhap> {
    return await this.phieuNhapService.createPhieuNhap(phieuNhap);
  }

  @Post('create')
  async create(@Body() dto: CreatePhieuNhapDto) {
    return this.phieuNhapService.create(dto);
  }
}
