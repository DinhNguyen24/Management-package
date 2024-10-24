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

@Controller('hanghoa')
export class HangHoaController {
  constructor(private readonly hangHoaService: HangHoaService) {}

  @Post()
  create(@Body() createHangHoaDto: any) {
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
}
