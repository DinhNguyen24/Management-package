import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateDaiLyDto } from 'src/dai-ly/dto/create-dai-ly.dto';

export class CreatePhieuXuatDaiLyDto {
  @ApiProperty({
    description: 'Mã Phiếu Xuất',
  })
  @IsString()
  @IsOptional()
  maPhieuXuat: string;

  @ApiProperty({
    description: 'Mã Đại Lý',
  })
  @IsString()
  @IsOptional()
  maDaiLy: string;

  @IsOptional()
  daiLyList?: CreateDaiLyDto;
}
