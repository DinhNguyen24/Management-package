import { IsOptional, IsString } from 'class-validator';
import { CreateDaiLyDto } from 'src/dai-ly/dto/create-dai-ly.dto';

export class CreatePhieuXuatDaiLyDto {
  @IsString()
  @IsOptional()
  maPhieuXuat: string;

  @IsString()
  @IsOptional()
  maDaiLy: string;

  @IsOptional()
  daiLyList?: CreateDaiLyDto;
}
