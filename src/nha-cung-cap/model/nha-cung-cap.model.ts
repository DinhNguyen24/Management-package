import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Entity } from 'src/common/constants';

@Table({
  tableName: Entity.NHACUNGCAP,
  timestamps: true,
})
export class NhaCungCap extends Model<NhaCungCap> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ma: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  ten: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  diaChi: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  soDienThoai: string;

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
}
