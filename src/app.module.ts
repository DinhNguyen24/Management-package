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

@Module({
  imports: [
    ConfigModule.forRoot(), // Khởi tạo ConfigModule
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.SQL_HOST, // Sử dụng biến môi trường
      port: parseInt(process.env.SQL_PORT, 10), // Chuyển đổi thành số
      username: process.env.SQL_USER, // Sử dụng biến môi trường
      password: process.env.SQL_PASSWORD, // Sử dụng biến môi trường
      database: process.env.SQL_DB, // Sử dụng biến môi trường
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
