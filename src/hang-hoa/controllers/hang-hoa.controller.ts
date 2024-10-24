import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { HangHoaService } from '../service/hang-hoa.service';
import { HangHoa } from '../model/hang-hoa.model';

@Controller('hang-hoa')
export class HangHoaController {
  constructor(private hangHoaService: HangHoaService) {}

  @Get('search')
  async searchHangHoa(@Query('keyword') keyword: string) {
    return await this.hangHoaService.searchHangHoa(keyword);
  }
  @Post('create-hang-hoa')
  async create(@Body('hanghoa') hangHoa: HangHoa) {
    return await this.hangHoaService.createHangHoa(hangHoa);
  }
  @Get('xem-tat-ca-hang-hoa')
  async findHangHoa() {
    return await this.hangHoaService.findAll();
  }
}
