import { Module } from '@nestjs/common';
import { PhieuXuatController } from './phieu-xuat.controller';
import { PhieuXuatService } from './phieu-xuat.service';
import { PhieuXuat } from './model/phieu-xuat-model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([PhieuXuat])],
  controllers: [PhieuXuatController],
  providers: [PhieuXuatService],
})
export class PhieuXuatModule {}
