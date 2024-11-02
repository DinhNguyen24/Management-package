import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreatePhieuXuatDaiLyDto } from 'src/phieu-xuat-dai-ly/dto/phieu-xuat-dai-ly.dto';
import { CreatePhieuXuatHangHoaDto } from 'src/phieu-xuat-hang-hoa/dto/create-phieu-xuat-hang-hoa.dto';

export class CreatePhieuXuatDto {
  @IsString()
  @ApiProperty({
    description: 'Mã Phiếu Xuất',
    required: true,
  })
  ma: string;

  @IsString()
  @ApiProperty({
    required: true,
  })
  totalAmount: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePhieuXuatDaiLyDto)
  listPhieuXuatDaiLy: CreatePhieuXuatDaiLyDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePhieuXuatHangHoaDto)
  listPhieuXuatHangHoa: CreatePhieuXuatHangHoaDto[];
}
