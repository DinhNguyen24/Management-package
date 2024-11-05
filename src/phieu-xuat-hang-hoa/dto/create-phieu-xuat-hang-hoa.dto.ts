import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateHangHoaDto } from 'src/hang-hoa/dto/create-hang-hoa-body';

export class CreatePhieuXuatHangHoaDto {
  @ApiProperty({
    description: 'Mã Phiếu Xuất',
  })
  @IsString()
  @IsOptional()
  maPhieuXuat: string;

  @ApiProperty({
    description: 'Mã Hàng Hóa',
  })
  @IsString()
  @IsOptional()
  maHangHoa: string;

  @IsOptional()
  hangHoaList?: CreateHangHoaDto;
}
