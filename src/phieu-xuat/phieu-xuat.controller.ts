import { Controller, Post, Body } from '@nestjs/common';
import { PhieuXuatService } from './phieu-xuat.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateBillXuatDto } from './dto/create-chi-tiet-phieu-xuat.dto';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';
import { PhieuXuat } from './model/phieu-xuat-model';
@ApiTags('Phieu Xuat')
@Controller('phieuxuat')
export class PhieuXuatController {
  constructor(private readonly phieuXuatService: PhieuXuatService) {}

  // API tạo phiếu xuất
  @Post()
  create(@Body() createPhieuXuatDto: any) {
    const { daiLyId, bills } = createPhieuXuatDto;
    return this.phieuXuatService.createPhieuXuat(daiLyId, bills);
  }

  @Post('create-phieu-xuat-from-to-hh')
  async createPhieuXuat(
    @Body() createPhieuXuatDto: CreatePhieuXuatDto,
    @Body('chiTiet') chiTiet: CreateBillXuatDto[],
  ): Promise<PhieuXuat> {
    return this.phieuXuatService.createPhieuXuat(createPhieuXuatDto, chiTiet);
  }
}
