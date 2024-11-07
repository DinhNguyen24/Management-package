import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePhieuXuatDaiLyDto {
  @IsString()
  @ApiProperty({ description: 'Mã Đại Lý' })
  maDaiLy: string;
}
