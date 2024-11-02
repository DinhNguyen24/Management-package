import { IsOptional, IsString } from 'class-validator';

export class CreatePhieuXuatDaiLyDto {
  @IsString()
  @IsOptional()
  maPhieuXuat: string;

  @IsString()
  @IsOptional()
  maDaiLy: string;
}
