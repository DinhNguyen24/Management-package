import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Entity } from 'src/common/constants';

@Table({
  tableName: Entity.HANGHOA,
  timestamps: true,
})
export class HangHoa extends Model {
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
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;
}
