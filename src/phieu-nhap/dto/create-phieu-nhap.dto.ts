// create-phieu-nhap.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { CreatePhieuNhapNhaCungCapDto } from 'src/phieu-nhap-nha-cung-cap/dto/phieu-nhap-nha-cung-cap.dto';
import { CreatePhieuNhapHangHoaDto } from 'src/phieu-nhap-hang-hoa /dto/create-phieu-nhap-hang-hoa.dto';

export class CreatePhieuNhapDto {
  @IsString()
  @ApiProperty({
    description: 'Mã Phiếu Nhap',
    required: true,
  })
  ma: string;

  @IsString()
  @ApiProperty({
    required: true,
  })
  totalAmount: number;

  listPhieuNhapNhaCungCap: CreatePhieuNhapNhaCungCapDto[];

  listPhieuNhapHangHoa: CreatePhieuNhapHangHoaDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePhieuNhapNhaCungCapDto)
  @ApiProperty({})
  danhSachNhaCungCap: CreatePhieuNhapNhaCungCapDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePhieuNhapHangHoaDto)
  @ApiProperty({})
  danhSachHangHoa: CreatePhieuNhapHangHoaDto[];
}
