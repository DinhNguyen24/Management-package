import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { User } from './model/user.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User]), // Đảm bảo bạn có mô hình User
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' }, // Thời gian hết hạn cho token
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
