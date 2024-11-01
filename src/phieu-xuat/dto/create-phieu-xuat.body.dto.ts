import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  Allow,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateBillXuatDto } from 'src/bill-xuat/dto/create-bill-xuat-body.dto';

export class CreatePhieuXuatDto {
  @ApiProperty({
    description: 'UUID của đại lý',
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  maDaiLy: string;

  @ApiProperty({
    description: 'Tổng giá trị của phiếu xuất',
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  totalAmount: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({
    description: 'UUID của Hang Hoa',
  })
  maHangHoa: string;

  @IsString()
  @ApiProperty({
    description: 'Mã Phiếu Xuất',
    required: true,
  })
  ma: string;

  @ApiProperty({
    type: [CreateBillXuatDto],
    description: 'Danh sách các chi tiết hàng hóa xuất',
  })
  @Allow()
  @ValidateNested({ each: true })
  @Type(() => CreateBillXuatDto)
  billXuatList?: CreateBillXuatDto[];
}
