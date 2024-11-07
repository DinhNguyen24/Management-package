import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePhieuXuatHangHoaDto {
  @IsString()
  @ApiProperty({ description: 'Mã Hàng Hóa' })
  maHangHoa: string;

  @IsString()
  @ApiProperty({ description: 'Mã Phiếu Xuất' })
  maPhieuXuat: string;
}
