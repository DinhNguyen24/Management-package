import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';
import { Entity } from 'src/common/constants';
import { PhieuXuatDaiLy } from 'src/phieu-xuat-dai-ly/model/phieu-xuat-dai-ly.model';
import { PhieuXuatHangHoa } from 'src/phieu-xuat-hang-hoa/model/phieu-xuat-hang-hoa.model';

@Table({ tableName: Entity.PHIEUXUAT })
export class PhieuXuat extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  totalAmount: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  ma: string;

  @HasMany(() => PhieuXuatHangHoa)
  listPhieuXuatHangHoa: PhieuXuatHangHoa[];
}
