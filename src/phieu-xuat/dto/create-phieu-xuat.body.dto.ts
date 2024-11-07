import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreatePhieuXuatHangHoaDto } from 'src/phieu-xuat-hang-hoa/dto/create-phieu-xuat-hang-hoa.dto';

export class CreatePhieuXuatDto {
  @IsString()
  @ApiProperty({
    description: 'Mã Phiếu Xuất',
    required: true,
  })
  ma: string;

  @IsNumber()
  @ApiProperty({
    description: 'Total amount of the Phieu Xuat',
  })
  totalAmount: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePhieuXuatHangHoaDto)
  @ApiProperty({ type: [CreatePhieuXuatHangHoaDto] })
  danhSachHangHoa: CreatePhieuXuatHangHoaDto[];
}
