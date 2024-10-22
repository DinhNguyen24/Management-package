// PhieuNhap model
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { BillNhap } from 'src/bill-nhap/model/bill-nhap-model';
import { Entity } from 'src/common/constants';
import { NhaCungCap } from 'src/nha-cung-cap/model/nha-cung-cap.model';

@Table({
  tableName: Entity.PHIEUNHAP,
  timestamps: true,
})
export class PhieuNhap extends Model<PhieuNhap> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => NhaCungCap)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  nhaCungCapId: string;
  @BelongsTo(() => NhaCungCap)
  nhaCungCap: NhaCungCap;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  totalAmount: number;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updatedAt: Date;

  @HasMany(() => BillNhap)
  billNhapList: BillNhap[];
}
