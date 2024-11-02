import { IsOptional, IsString } from 'class-validator';

export class CreatePhieuXuatHangHoaDto {
  @IsString()
  @IsOptional()
  maPhieuXuat: string;

  @IsString()
  @IsOptional()
  maHangHoa: string;
}
