import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
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
    example: 'UUIDMADAILY',
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  maDaiLy: string;

  @ApiProperty({
    description: 'Tổng giá trị của phiếu xuất',
    example: 2750000,
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
    example: 'UUIDMAHANGHOA',
  })
  maHangHoa: string;

  @IsString()
  @ApiProperty({
    description: 'Mã Phiếu Xuất',
    example: 'UUIDMAPHIEUXUAT',
    required: true,
  })
  ma: string;

  @ApiProperty({
    type: [CreateBillXuatDto],
    description: 'Danh sách các chi tiết hàng hóa xuất',
  })
  @ValidateNested({ each: true })
  @Type(() => CreateBillXuatDto)
  billXuatList?: CreateBillXuatDto[];
}
