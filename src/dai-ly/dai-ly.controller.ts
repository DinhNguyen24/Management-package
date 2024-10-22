import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DaiLyService } from './dai-ly.service';
import { DaiLy } from './model/dai-ly-model';

@Controller('dai-ly')
export class DaiLyController {
  constructor(private daiLyService: DaiLyService) {}

  @Get('search')
  async searchDaiLy(@Query('keyword') keyword: string) {
    return await this.daiLyService.searchDaiLy(keyword);
  }

  @Post('create')
  async createDaiLy(@Body() createDaiLyDto: DaiLy) {
    return await this.daiLyService.createDaiLy(createDaiLyDto);
  }

  @Post('add')
  async createphieuNhap(dto: DaiLy): Promise<DaiLy> {
    return await this.daiLyService.createDaiLy(dto);
  }
}
