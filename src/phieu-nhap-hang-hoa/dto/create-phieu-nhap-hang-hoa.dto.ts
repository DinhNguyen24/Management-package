import { IsOptional, IsString } from 'class-validator';
import { CreateHangHoaDto } from 'src/hang-hoa/dto/create-hang-hoa-body';

export class CreatePhieuNhapHangHoaDto {
  @IsString()
  @IsOptional()
  maPhieuNhap: string;

  @IsString()
  @IsOptional()
  maHangHoa: string;

  @IsOptional()
  hangHoaList?: CreateHangHoaDto;
}
