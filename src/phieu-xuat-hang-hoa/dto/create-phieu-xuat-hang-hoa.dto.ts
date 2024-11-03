import { IsOptional, IsString } from 'class-validator';
import { CreateHangHoaDto } from 'src/hang-hoa/dto/create-hang-hoa-body';

export class CreatePhieuXuatHangHoaDto {
  @IsString()
  @IsOptional()
  maPhieuXuat: string;

  @IsString()
  @IsOptional()
  maHangHoa: string;

  @IsOptional()
  hangHoaList?: CreateHangHoaDto;
}
