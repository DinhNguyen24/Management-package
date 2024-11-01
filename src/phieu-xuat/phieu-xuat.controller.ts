import {
  Controller,
  Post,
  Body,
  Param,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { PhieuXuatService } from './phieu-xuat.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.body.dto';
import { PhieuXuat } from './model/phieu-xuat-model';
@ApiTags('Phieu Xuat')
@Controller('phieuxuat')
export class PhieuXuatController {
  constructor(private readonly phieuXuatService: PhieuXuatService) {}

  @Post('create')
  async createInvoice(
    @Body() createPhieuXuatDto: CreatePhieuXuatDto,
  ): Promise<any> {
    return await this.phieuXuatService.createPhieuXuat(createPhieuXuatDto);
  }

  @Post('submit')
  async submitPhieuXuat(@Body('maPhieuXuat') maPhieuXuat: string) {
    return this.phieuXuatService.submitPhieuXuat(maPhieuXuat);
  }
  @Post()
  async create(@Body() createPhieuXuatDto: CreatePhieuXuatDto) {
    try {
      const phieuXuat = await this.phieuXuatService.createPhieuXuatV1(
        createPhieuXuatDto,
      );
      return { success: true, data: phieuXuat };
    } catch (error) {
      console.error('Lỗi khi tạo Phiếu Xuất:', error.message);
      throw new BadRequestException('Lỗi khi tạo Phiếu Xuất');
    }
  }
}
