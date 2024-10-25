import { IsString, IsNotEmpty, IsInt, IsDecimal } from 'class-validator';

export class CreateBillXuatDto {
  @IsString()
  @IsNotEmpty()
  maPhieuXuat: string;

  @IsString()
  @IsNotEmpty()
  maHangHoa: string;

  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsInt()
  quantity: number;

  @IsDecimal()
  unitPrice: number;
}
