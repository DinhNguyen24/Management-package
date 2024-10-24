import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Entity } from 'src/common/constants';
import { NhaCungCap } from 'src/nha-cung-cap/model/nha-cung-cap.model';

@Table({ tableName: Entity.PHIEUNHAP })
export class PhieuNhap extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => NhaCungCap)
  @Column({ type: DataType.UUID, allowNull: false })
  nhaCungCapId: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  totalAmount: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
