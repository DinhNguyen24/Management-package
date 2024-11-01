// create-phieu-nhap.dto.ts
import { IsUUID, IsString, IsDecimal, IsNotEmpty } from 'class-validator';

export class CreatePhieuNhapDto {
  @IsUUID()
  @IsNotEmpty()
  maNhaCungCap: string;

  @IsString()
  @IsNotEmpty()
  maHangHoa: string;

  @IsDecimal()
  @IsNotEmpty()
  totalAmount: number;

  @IsString()
  @IsNotEmpty()
  ma: string;
}
