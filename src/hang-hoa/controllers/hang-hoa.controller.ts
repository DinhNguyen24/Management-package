import { Controller, Get, Query } from '@nestjs/common';
import { HangHoaService } from '../service/hang-hoa.service';

@Controller('hang-hoa')
export class HangHoaController {
  constructor(private hangHoaService: HangHoaService) {}

  @Get('search')
  async searchHangHoa(@Query('keyword') keyword: string) {
    return await this.hangHoaService.searchHangHoa(keyword);
  }
}
