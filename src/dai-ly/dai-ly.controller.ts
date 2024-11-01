import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DaiLyService } from './dai-ly.service';
import { CreateDaiLyDto } from './dto/create-dai-ly.dto';
import { DaiLy } from './model/dai-ly-model';
import { UpdateDaiLyDto } from './dto/update-dai-ly-body';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Dai Ly')
@Controller('daily')
export class DaiLyController {
  constructor(private readonly daiLyService: DaiLyService) {}

  // API: Tìm đại lý theo tên
  @Get('search')
  searchDaiLy(@Query('ten') ten: string): Promise<DaiLy[]> {
    return this.daiLyService.searchDaiLy(ten);
  }

  // API: Lấy đại lý theo id
  @Get(':id')
  findDaiLyById(@Param('id') id: string): Promise<DaiLy> {
    return this.daiLyService.findById(id);
  }

  // API: Lấy danh sách tất cả các đại lý
  @Get()
  findAllDaiLy(): Promise<DaiLy[]> {
    return this.daiLyService.findAll();
  }

  // API: Thêm mới đại lý
  @Post()
  createDaiLy(@Body() createDaiLyDto: CreateDaiLyDto): Promise<DaiLy> {
    return this.daiLyService.createDaiLy(createDaiLyDto);
  }

  // API: Cập nhật đại lý theo id
  @Put(':id')
  updateDaiLy(
    @Param('id') id: string,
    @Body() updateDaiLyDto: UpdateDaiLyDto,
  ): Promise<[number, DaiLy[]]> {
    return this.daiLyService.updateDaiLy(id, updateDaiLyDto);
  }

  // API: Xóa đại lý theo id
  @Delete(':id')
  deleteDaiLy(@Param('id') id: string): Promise<void> {
    return this.daiLyService.deleteDaiLy(id);
  }
}
