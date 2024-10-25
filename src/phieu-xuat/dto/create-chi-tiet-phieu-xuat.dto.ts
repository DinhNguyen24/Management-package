import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateBillXuatDto {
  @ApiProperty({
    description: 'UUID của hàng hóa',
    example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  })
  @IsUUID()
  @IsNotEmpty()
  hangHoaId: string;

  @ApiProperty({
    description: 'Số lượng xuất',
    example: 10,
  })
  @IsNumber()
  @IsPositive()
  soLuongXuat: number;

  @ApiProperty({
    description: 'Đơn giá xuất',
    example: 200000,
  })
  @IsNumber()
  @IsPositive()
  giaXuat: number;
}
