import { Controller, Get, Param, Post } from '@nestjs/common';
import { NhaCungCapService } from './nha-cung-cap.service';
import { NhaCungCap } from './model/nha-cung-cap.model';

@Controller('nha-cung-cap')
export class NhaCungCapController {
  constructor(private nhaCungCapService: NhaCungCapService) {}

  @Post('search')
  async searchnhaCungCap(@Param('id') id: string) {
    return await this.nhaCungCapService.findOne(id);
  }

  @Get('find')
  async timKiemTT() {
    return await this.nhaCungCapService.findAll();
  }

  @Post('create')
  async createNhaCungCap(NhaCungCap: NhaCungCap): Promise<NhaCungCap> {
    return await this.nhaCungCapService.createNhaCungCap(NhaCungCap);
  }
}
