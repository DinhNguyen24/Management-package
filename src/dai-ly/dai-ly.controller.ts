import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { DaiLyService } from './dai-ly.service';

@Controller('daily')
export class DaiLyController {
  constructor(private readonly daiLyService: DaiLyService) {}

  // API tìm kiếm đại lý
  @Get('search')
  search(@Query('ten') ten: string) {
    return this.daiLyService.searchDaiLy(ten);
  }

  // API lấy thông tin chi tiết đại lý
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.daiLyService.findById(id);
  }

  // API thêm mới đại lý
  @Post()
  create(@Body() createDaiLyDto: any) {
    return this.daiLyService.createDaiLy(createDaiLyDto);
  }
}
