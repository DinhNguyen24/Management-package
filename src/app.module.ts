import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HangHoaModule } from './hang-hoa/hang-hoa.module';
import { NhaCungCapModule } from './nha-cung-cap/nha-cung-cap.module';
import { PhieuXuatModule } from './phieu-xuat/phieu-xuat.module';
import { PhieuNhapModule } from './phieu-nhap/phieu-nhap.module';
import { DaiLyModule } from './dai-ly/dai-ly.module';
import { BillNhapModule } from './bill-nhap/bill-nhap.module';
import { BillXuatService } from './bill-xuat/bill-xuat.service';
import { BillXuatController } from './bill-xuat/bill-xuat.controller';
import { BillXuatModule } from './bill-xuat/bill-xuat.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tvh25082004',
      database: 'qlykho',
      autoLoadModels: true,
      synchronize: true,
    }),
    HangHoaModule,
    NhaCungCapModule,
    PhieuXuatModule,
    PhieuNhapModule,
    DaiLyModule,
    BillNhapModule,
    BillXuatModule,
  ],
  controllers: [AppController, BillXuatController],
  providers: [AppService, BillXuatService],
})
export class AppModule {}
