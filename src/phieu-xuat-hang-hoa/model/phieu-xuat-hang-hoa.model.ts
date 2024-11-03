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
import { PhieuXuat } from 'src/phieu-xuat/model/phieu-xuat-model';
import { CreatePhieuXuatHangHoaDto } from '../dto/create-phieu-xuat-hang-hoa.dto';
import { CreateHangHoaDto } from 'src/hang-hoa/dto/create-hang-hoa-body';
import { CreatePhieuXuatDto } from 'src/phieu-xuat/dto/create-phieu-xuat.body.dto';

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
  phieuXuatList?: CreatePhieuXuatDto;

  @ForeignKey(() => HangHoa)
  @Column({ type: DataType.STRING, allowNull: false })
  maHangHoa: string;

  @BelongsTo(() => HangHoa, {
    targetKey: 'ma',
    foreignKey: 'maHangHoa',
  })
  hangHoaList?: CreateHangHoaDto;
}
