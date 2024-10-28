import { Controller, Post, Body } from '@nestjs/common';
import { PhieuXuatService } from './phieu-xuat.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';
import { PhieuXuat } from './model/phieu-xuat-model';
@ApiTags('Phieu Xuat')
@Controller('phieuxuat')
export class PhieuXuatController {
  constructor(private readonly phieuXuatService: PhieuXuatService) {}

  @Post('create')
  async createPhieuXuat(
    @Body() createPhieuXuatDto: CreatePhieuXuatDto,
  ): Promise<PhieuXuat> {
    return this.phieuXuatService.createPhieuXuat(createPhieuXuatDto);
  }

  @Post('submit')
  async submitPhieuXuat(@Body('maPhieuXuat') maPhieuXuat: string) {
    return this.phieuXuatService.submitPhieuXuat(maPhieuXuat);
  }
}
