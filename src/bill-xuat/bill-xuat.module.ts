import { Module } from '@nestjs/common';
import { BillXuatService } from './bill-xuat.service';
import { BillXuatController } from './bill-xuat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BillXuat } from './model/bill-xuat-model';

@Module({
  imports: [SequelizeModule.forFeature([BillXuat])],
  controllers: [BillXuatController],
  providers: [BillXuatService],
})
export class BillXuatModule {}
