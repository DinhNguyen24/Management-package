import { IsOptional, IsString } from 'class-validator';
import { CreateNhaCungCapDto } from 'src/nha-cung-cap/dto/create-nha-cung-cap.dto';

export class CreatePhieuNhapNhaCungCapDto {
  @IsString()
  @IsOptional()
  maPhieuNhap: string;

  @IsString()
  @IsOptional()
  maNhaCungCap: string;

  @IsOptional()
  nhaCungCapList?: CreateNhaCungCapDto;
}
