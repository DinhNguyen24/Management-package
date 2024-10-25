import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDaiLyDto {
  @ApiProperty({
    description: 'UUID của đại lý, được hệ thống tự động tạo',
    example: 'e72e1b94-92a1-4b89-b8b8-d2eb17f3b3e1',
    readOnly: true,
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Mã của đại lý, phải là duy nhất',
    example: 'DL001',
  })
  @IsNotEmpty()
  @IsString()
  ma: string;

  @ApiProperty({
    description: 'Tên của đại lý',
    example: 'Đại lý ABC',
  })
  @IsNotEmpty()
  @IsString()
  ten: string;

  @ApiProperty({
    description: 'Địa chỉ của đại lý',
    example: '123 Đường ABC, Quận 1, TP. HCM',
    required: false,
  })
  @IsOptional()
  @IsString()
  diaChi?: string;

  @ApiProperty({
    description: 'Số điện thoại của đại lý',
    example: '0909123456',
    required: false,
  })
  @IsOptional()
  @IsString()
  phone?: string;
}
