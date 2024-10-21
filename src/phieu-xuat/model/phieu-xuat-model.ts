import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Entity } from 'src/common/constants';
import { DaiLy } from 'src/dai-ly/model/dai-ly-model';

@Table({
  tableName: Entity.PHIEUXUAT,
  timestamps: true,
})
export class PhieuXuat extends Model<PhieuXuat> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => DaiLy)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  daiLyId: string;

  @BelongsTo(() => DaiLy, {
    targetKey: 'id',
    foreignKey: 'daiLyId',
  })
  daiLy: DaiLy;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  totalAmount: number;
}
