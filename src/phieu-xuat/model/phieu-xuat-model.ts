import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { BillXuat } from 'src/bill-xuat/model/bill-xuat-model';
import { Entity } from 'src/common/constants';
import { DaiLy } from 'src/dai-ly/model/dai-ly-model';
import { HangHoa } from 'src/hang-hoa/model/hang-hoa.model';
import { CreatePhieuXuatDto } from '../dto/create-phieu-xuat.body.dto';

@Table({ tableName: Entity.PHIEUXUAT })
export class PhieuXuat extends Model implements CreatePhieuXuatDto {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => DaiLy)
  @Column({ type: DataType.STRING, allowNull: false })
  maDaiLy: string;

  @BelongsTo(() => DaiLy, {
    targetKey: 'ma',
    foreignKey: 'maDaiLy',
  })
  daiLyList?: DaiLy[];

  @ForeignKey(() => HangHoa)
  @Column({ type: DataType.STRING, allowNull: false })
  maHangHoa: string;

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

  @HasMany(() => BillXuat)
  listBillXuat?: BillXuat[];
}
