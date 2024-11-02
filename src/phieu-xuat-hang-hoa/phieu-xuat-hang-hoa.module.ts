import { Module } from '@nestjs/common';
import { PhieuXuatHangHoaController } from './phieu-xuat-hang-hoa.controller';
import { PhieuXuatHangHoaService } from './phieu-xuat-hang-hoa.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PhieuXuatHangHoa } from './model/phieu-xuat-hang-huoa.model';

@Module({
  imports: [SequelizeModule.forFeature([PhieuXuatHangHoa])],
  controllers: [PhieuXuatHangHoaController],
  providers: [PhieuXuatHangHoaService],
})
export class PhieuXuatHangHoaModule {}
