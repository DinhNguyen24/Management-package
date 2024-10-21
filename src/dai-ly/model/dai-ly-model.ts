import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Entity } from 'src/common/constants';

@Table({
  tableName: Entity.DAILY,
  timestamps: true,
})
export class DaiLy extends Model<DaiLy> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
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
  phone: string;
}
