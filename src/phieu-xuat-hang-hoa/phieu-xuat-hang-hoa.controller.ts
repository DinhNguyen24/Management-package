import { Controller, Post, Body, Param } from '@nestjs/common';
import { PhieuXuatHangHoaService } from './phieu-xuat-hang-hoa.service';
import { CreatePhieuXuatHangHoaDto } from './dto/create-phieu-xuat-hang-hoa.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PhieuXuatHangHoa } from './model/phieu-xuat-hang-hoa.model';

@ApiTags('PhieuXuatHangHoa')
@Controller('phieu-xuat-hang-hoa')
export class PhieuXuatHangHoaController {
  constructor(
    private readonly phieuXuatHangHoaService: PhieuXuatHangHoaService,
  ) {}

  @Post(':phieuXuatId')
  @ApiOperation({ summary: 'Tạo mới hàng hóa cho phiếu xuất' })
  @ApiResponse({ status: 201, type: PhieuXuatHangHoa })
  async createHangHoa(
    @Param('phieuXuatId') phieuXuatId: string,
    @Body() createPhieuXuatHangHoaDto: CreatePhieuXuatHangHoaDto,
  ) {
    return this.phieuXuatHangHoaService.createHangHoa(
      createPhieuXuatHangHoaDto,
      phieuXuatId,
    );
  }
}
