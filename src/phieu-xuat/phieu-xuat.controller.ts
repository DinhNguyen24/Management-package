import { Controller, Post, Body } from '@nestjs/common';
import { PhieuXuatService } from './phieu-xuat.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';
@ApiTags('Phieu Xuat')
@Controller('phieuxuat')
export class PhieuXuatController {
  constructor(private readonly phieuXuatService: PhieuXuatService) {}

  @Post('submit')
  async submitPhieuXuat(@Body('maPhieuXuat') maPhieuXuat: string) {
    return this.phieuXuatService.submitPhieuXuat(maPhieuXuat);
  }

  @Post('create')
  async create(@Body() dto: CreatePhieuXuatDto) {
    return this.phieuXuatService.create(dto);
  }
}
