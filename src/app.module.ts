import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config'; // Thêm import ConfigModule
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
import { AuthModule } from './auth/auth.module';
import { PhieuXuatHangHoaModule } from './phieu-xuat-hang-hoa/phieu-xuat-hang-hoa.module';
import { PhieuXuatDaiLyModule } from './phieu-xuat-dai-ly/phieu-xuat-dai-ly.module';
import { PhieuNhapNhaCungCapModule } from './phieu-nhap-nha-cung-cap/phieu-nhap-nha-cung-cap.module';
import { PhieuNhapHangHoaModule } from './phieu-nhap-hang-hoa/phieu-nhap-hang-hoa.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.SQL_HOST,
      port: parseInt(process.env.SQL_PORT, 10),
      username: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DB,
      autoLoadModels: true,
      synchronize: false,
    }),
    HangHoaModule,
    NhaCungCapModule,
    PhieuXuatModule,
    PhieuNhapModule,
    DaiLyModule,
    BillNhapModule,
    BillXuatModule,
    AuthModule,
    PhieuXuatHangHoaModule,
    PhieuXuatDaiLyModule,
    PhieuNhapNhaCungCapModule,
    PhieuNhapHangHoaModule,
  ],
  controllers: [AppController, BillXuatController],
  providers: [AppService, BillXuatService],
})
export class AppModule {}
