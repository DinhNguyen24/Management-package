import { IsString } from 'class-validator';

export class createHangHoaBodyDto {
  @IsString()
  idHangHoa: string;
  @IsString()
  soLuong: number;

  @IsString()
  donGia: number;
}
