import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { HangHoaService } from '../service/hang-hoa.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateHangHoaDto } from '../dto/create-hang-hoa-body';
import { HangHoa } from '../model/hang-hoa.model';

@Controller('hanghoa')
@ApiTags('Hang Hoa')
export class HangHoaController {
  constructor(private readonly hangHoaService: HangHoaService) {}

  @Post()
  create(@Body() createHangHoaDto: CreateHangHoaDto) {
    return this.hangHoaService.createHangHoa(createHangHoaDto);
  }

  @Get()
  findAll() {
    return this.hangHoaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hangHoaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHangHoaDto: any) {
    return this.hangHoaService.updateHangHoa(id, updateHangHoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hangHoaService.deleteHangHoa(id);
  }

  @Get('find/:ma')
  async findByMa(@Param('ma') ma: string): Promise<HangHoa> {
    return this.hangHoaService.findHangHoaByMa(ma);
  }

  @Get('find/:maDaiLy')
  async findHangHoaByMaDaiLy(
    @Param('ma dai ly') maDaiLy: string,
  ): Promise<HangHoa> {
    return this.hangHoaService.findHangHoaByMaDaiLy(maDaiLy);
  }
}
