import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Entity } from 'src/common/constants';
import { HangHoa } from 'src/hang-hoa/model/hang-hoa.model';
import { PhieuXuat } from 'src/phieu-xuat/model/phieu-xuat-model';

@Table({
  tableName: Entity.BILLXUAT,
  timestamps: true,
})
export class BillXuat extends Model<BillXuat> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => PhieuXuat)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  idPhieuXuat?: string;

  @BelongsTo(() => PhieuXuat, {
    targetKey: 'id',
    foreignKey: 'idPhieuXuat',
  })
  phieuXuat?: PhieuXuat;

  @ForeignKey(() => HangHoa)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  idHangHoa?: string;

  @BelongsTo(() => HangHoa, {
    targetKey: 'id',
    foreignKey: 'idHangHoa',
  })
  hangHoa?: HangHoa;

  @Column({
    type: DataType.STRING,
  })
  productName?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  unitPrice: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  totalPrice: number;

  // Hook để tự động tính toán totalPrice trước khi lưu vào cơ sở dữ liệu
  beforeSave(): void {
    this.totalPrice = this.unitPrice * this.quantity;
  }
}
