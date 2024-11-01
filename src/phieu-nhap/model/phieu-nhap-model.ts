import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';
import { Entity } from 'src/common/constants';
import { HangHoa } from 'src/hang-hoa/model/hang-hoa.model';
import { NhaCungCap } from 'src/nha-cung-cap/model/nha-cung-cap.model';
import { CreatePhieuNhapDto } from '../dto/create-phieu-nhap.dto';

@Table({ tableName: Entity.PHIEUNHAP })
export class PhieuNhap extends Model implements CreatePhieuNhapDto {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => NhaCungCap)
  @Column({ type: DataType.UUID, allowNull: false })
  maNhaCungCap: string;

  @BelongsTo(() => NhaCungCap, {
    targetKey: 'ma',
    foreignKey: 'maNhaCungCap',
  })
  nhaCungCapList?: NhaCungCap;

  @ForeignKey(() => HangHoa)
  @Column({ type: DataType.STRING, allowNull: false })
  maHangHoa: string;

  @BelongsTo(() => HangHoa, {
    targetKey: 'ma',
    foreignKey: 'maHangHoa',
  })
  hangHoaList?: HangHoa;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  totalAmount: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ma: string;
}
