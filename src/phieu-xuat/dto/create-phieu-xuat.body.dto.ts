import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { CreateBillXuatDto } from './create-chi-tiet-phieu-xuat.dto';

export class CreatePhieuXuatDto {
  @ApiProperty({
    description: 'UUID của đại lý',
    example: 'f23c9d3d-6a5f-4df9-9839-4a4b70bcb1e4',
  })
  @IsNotEmpty()
  daiLyId: string;

  @ApiProperty({
    description: 'Tổng giá trị của phiếu xuất',
    example: 2750000,
  })
  @IsNumber()
  @IsPositive()
  tongGiaTri: number;

  @ApiProperty({
    type: [CreateBillXuatDto],
    description: 'Danh sách các chi tiết hàng hóa xuất',
  })
  @ValidateNested({ each: true })
  @Type(() => CreateBillXuatDto)
  chiTiet: CreateBillXuatDto[];
}
