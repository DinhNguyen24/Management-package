import { Controller, Post, Body } from '@nestjs/common';
import { PhieuXuatService } from './phieu-xuat.service';

@Controller('phieuxuat')
export class PhieuXuatController {
  constructor(private readonly phieuXuatService: PhieuXuatService) {}

  // API tạo phiếu xuất
  @Post()
  create(@Body() createPhieuXuatDto: any) {
    const { daiLyId, bills } = createPhieuXuatDto;
    return this.phieuXuatService.createPhieuXuat(daiLyId, bills);
  }
}
