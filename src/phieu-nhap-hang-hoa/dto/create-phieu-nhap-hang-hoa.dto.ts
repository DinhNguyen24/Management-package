import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateHangHoaDto } from 'src/hang-hoa/dto/create-hang-hoa-body';

export class CreatePhieuNhapHangHoaDto {
  @ApiProperty({
    description: 'Mã Phiếu Nhập',
  })
  @IsString()
  @IsOptional()
  maPhieuNhap: string;

  @ApiProperty({
    description: 'Mã Hàng Hóa',
  })
  @IsString()
  @IsOptional()
  maHangHoa: string;

  @IsOptional()
  hangHoaList?: CreateHangHoaDto;
}
