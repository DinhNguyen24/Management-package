import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';

export class CreateHangHoaDto {
  @ApiProperty({
    description: 'Unique ide5ntifier for the item',
    example: 'D@&@$72UYSSSTGP',
    required: false,
  })
  @ApiProperty({ description: 'Item code', example: 'HH5123', required: true })
  @IsNotEmpty()
  @IsString()
  ma: string;

  @ApiProperty({ description: 'Item name', example: 'Laptop', required: true })
  @IsNotEmpty()
  @IsString()
  ten: string;

  @ApiProperty({
    description: 'Item description',
    example: 'High-end ga5ming laptop',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Quantity in stock',
    example: 1050,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  soLuong: number;

  @ApiProperty({
    description: 'Purchase price of the item',
    example: 15500.0,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  giaNhap: number;
}
