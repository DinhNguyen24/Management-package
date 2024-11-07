import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PhieuXuatService } from './phieu-xuat.service';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';

@ApiTags('PhieuXuat')
@Controller('phieu-xuat')
export class PhieuXuatController {
  constructor(private readonly phieuXuatService: PhieuXuatService) {}

  @Post()
  async create(@Body() createPhieuXuatDto: CreatePhieuXuatDto) {
    return this.phieuXuatService.createPhieuXuat(createPhieuXuatDto);
  }
}
