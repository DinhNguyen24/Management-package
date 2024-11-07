import { Controller, Post, Body, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PhieuXuatService } from './phieu-xuat.service';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';
import { query } from 'express';

@ApiTags('PhieuXuat')
@Controller('phieu-xuat')
export class PhieuXuatController {
  constructor(private readonly phieuXuatService: PhieuXuatService) {}

  @Post()
  async create(@Body() createPhieuXuatDto: CreatePhieuXuatDto) {
    return this.phieuXuatService.createPhieuXuat(createPhieuXuatDto);
  }

  @Post('place')
  @ApiResponse({ status: 200, description: 'Order placed successfully.' })
  @ApiResponse({ status: 400, description: 'Insufficient stock for an item.' })
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
}
