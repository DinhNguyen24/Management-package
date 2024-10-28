import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Entity } from 'src/common/constants';
import { DaiLy } from 'src/dai-ly/model/dai-ly-model';
import { CreateHangHoaDto } from '../dto/create-hang-hoa-body';

@Table({ tableName: Entity.HANGHOA })
export class HangHoa extends Model implements CreateHangHoaDto {
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

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  soLuong: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  giaNhap: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @ForeignKey(() => DaiLy)
  @Column({ type: DataType.STRING, allowNull: false })
  maDaiLy: string;

  @BelongsTo(() => DaiLy, {
    targetKey: 'ma',
    foreignKey: 'maDaiLy',
  })
  daiLyList?: DaiLy;
}
