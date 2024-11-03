import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Entity } from 'src/common/constants';
import { DaiLy } from 'src/dai-ly/model/dai-ly-model';
import { PhieuXuat } from 'src/phieu-xuat/model/phieu-xuat-model';
import { CreatePhieuXuatDaiLyDto } from '../dto/phieu-xuat-dai-ly.dto';
import { CreateDaiLyDto } from 'src/dai-ly/dto/create-dai-ly.dto';
import { CreatePhieuXuatDto } from 'src/phieu-xuat/dto/create-phieu-xuat.body.dto';

@Table({ tableName: Entity.PHIEUXUATDAILY })
export class PhieuXuatDaiLy extends Model implements CreatePhieuXuatDaiLyDto {
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

  @ForeignKey(() => DaiLy)
  @Column({ type: DataType.STRING, allowNull: false })
  maDaiLy: string; // Product code

  @BelongsTo(() => DaiLy, {
    targetKey: 'ma',
    foreignKey: 'maDaiLy',
  })
  daiLyList?: CreateDaiLyDto;
}
