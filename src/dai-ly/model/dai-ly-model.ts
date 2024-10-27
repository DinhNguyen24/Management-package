import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Entity } from 'src/common/constants';
import { CreateDaiLyDto } from '../dto/create-dai-ly.dto';

@Table({ tableName: Entity.DAILY })
export class DaiLy extends Model implements CreateDaiLyDto {
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

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
