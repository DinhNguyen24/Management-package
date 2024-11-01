import { Controller, Post, Body, Put, Param, Get } from '@nestjs/common';
import { NhaCungCapService } from './nha-cung-cap.service';
import { NhaCungCap } from './model/nha-cung-cap.model';
import { CreateNhaCungCapDto } from './dto/create-nha-cung-cap.dto';
import { UpdateNhaCungCapDto } from './dto/update-nha-cung-cap.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Nha Cung Cap')
@Controller('nha-cung-cap')
export class NhaCungCapController {
  constructor(private readonly nhaCungCapService: NhaCungCapService) {}

  // Thêm mới nhà cung cấp
  @Post('create-nha-cung-cap')
  async create(
    @Body() createNhaCungCapDto: CreateNhaCungCapDto,
  ): Promise<NhaCungCap> {
    return this.nhaCungCapService.createNhaCungCap(createNhaCungCapDto);
  }

  // Cập nhật thông tin nhà cung cấp
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNhaCungCapDto: UpdateNhaCungCapDto,
  ): Promise<[number, NhaCungCap[]]> {
    return this.nhaCungCapService.updateNhaCungCap(id, updateNhaCungCapDto);
  }

  // Lấy thông tin nhà cung cấp theo id
  @Get(':id')
  async findById(@Param('id') id: string): Promise<NhaCungCap> {
    return this.nhaCungCapService.findById(id);
  }

  // Lấy danh sách tất cả các nhà cung cấp
  @Get('get-du-lieu')
  async findAll(): Promise<NhaCungCap[]> {
    return this.nhaCungCapService.findAll();
  }

  // Tìm nhà cung cấp theo mã
  @Get('search/:ma')
  async findByMa(@Param('ma') ma: string): Promise<NhaCungCap> {
    return this.nhaCungCapService.findByMa(ma);
  }
}
