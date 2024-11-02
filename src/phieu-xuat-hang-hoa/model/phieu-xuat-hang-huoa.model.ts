import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Entity } from 'src/common/constants';
import { HangHoa } from 'src/hang-hoa/model/hang-hoa.model';
import { PhieuNhap } from 'src/phieu-nhap/model/phieu-nhap-model';
import { PhieuXuat } from 'src/phieu-xuat/model/phieu-xuat-model';
import { CreatePhieuXuatHangHoaDto } from '../dto/create-phieu-xuat-hang-hoa.dto';

@Table({ tableName: Entity.PHIEUXUATHANGHOA })
export class PhieuXuatHangHoa
  extends Model
  implements CreatePhieuXuatHangHoaDto
{
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => PhieuXuat)
  @Column({ type: DataType.UUID, allowNull: false })
  maPhieuXuat: string;

  @BelongsTo(() => PhieuXuat, {
    targetKey: 'ma',
    foreignKey: 'maPhieuXuat',
  })
  phieuXuatList?: PhieuNhap;

  @ForeignKey(() => HangHoa)
  @Column({ type: DataType.STRING, allowNull: false })
  maHangHoa: string; // Product code

  @BelongsTo(() => HangHoa, {
    targetKey: 'ma',
    foreignKey: 'maHangHoa',
  })
  hangHoaList?: HangHoa;
}
