import { Module, forwardRef } from '@nestjs/common';
import { PhieuXuatController } from './phieu-xuat.controller';
import { PhieuXuatService } from './phieu-xuat.service';
import { PhieuXuat } from './model/phieu-xuat-model';
import { SequelizeModule } from '@nestjs/sequelize';
import { HangHoaModule } from 'src/hang-hoa/hang-hoa.module';
import { BillXuatModule } from 'src/bill-xuat/bill-xuat.module';
import { HangHoa } from 'src/hang-hoa/model/hang-hoa.model';
import { BillXuat } from 'src/bill-xuat/model/bill-xuat-model';
import { DaiLyModule } from 'src/dai-ly/dai-ly.module';
import { DaiLy } from 'src/dai-ly/model/dai-ly-model';

@Module({
  imports: [
    SequelizeModule.forFeature([PhieuXuat]),
    SequelizeModule.forFeature([HangHoa]),
    SequelizeModule.forFeature([BillXuat]),
    SequelizeModule.forFeature([DaiLy]),
    HangHoaModule,
    DaiLyModule,
    forwardRef(() => BillXuatModule),
  ],
  controllers: [PhieuXuatController],
  providers: [PhieuXuatService],
  exports: [PhieuXuatService],
})
export class PhieuXuatModule {}
