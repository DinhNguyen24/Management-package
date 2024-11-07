import {
  Controller,
  Post,
  Body,
  Query,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PhieuXuatService } from './phieu-xuat.service';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';

@ApiTags('PhieuXuat')
@Controller('phieu-xuat')
export class PhieuXuatController {
  constructor(private readonly phieuXuatService: PhieuXuatService) {}

  @Post('create')
  @ApiResponse({ status: 200, description: 'Taọ Phiếu Xuất Thành Công.' })
  @ApiResponse({ status: 400, description: 'Không Đủ Số Lượng Để Xuất Hàng.' })
  async placeOrder(
    @Body() createPhieuXuatDto: CreatePhieuXuatDto,
    @Query() maDaiLy: string,
  ): Promise<{ maPhieuXuat: string }> {
    const maPhieuXuat = await this.phieuXuatService.placeOrder(
      createPhieuXuatDto,
      maDaiLy,
    );
    return { maPhieuXuat };
  }

  @Get('/get-du-lieu')
  findAll() {
    return this.phieuXuatService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phieuXuatService.deletePhieuXuat(id);
  }
}
