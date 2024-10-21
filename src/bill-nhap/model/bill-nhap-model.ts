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
import { PhieuNhap } from 'src/phieu-nhap/model/phieu-nhap-model';

@Table({
  tableName: Entity.BILLNHAP,
  timestamps: true,
})
export class BillNhap extends Model<BillNhap> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => PhieuNhap)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  idPhieuNhap: string;

  @BelongsTo(() => PhieuNhap, {
    targetKey: 'id',
    foreignKey: 'idPhieuNhap',
  })
  phieuNhap: PhieuNhap;

  @ForeignKey(() => HangHoa)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  idHangHoa: string;

  @BelongsTo(() => HangHoa, {
    targetKey: 'id',
    foreignKey: 'idHangHoa',
  })
  hangHoa: HangHoa;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productName: string;

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
