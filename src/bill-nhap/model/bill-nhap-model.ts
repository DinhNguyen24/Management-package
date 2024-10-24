import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  BeforeSave,
} from 'sequelize-typescript';
import { Entity } from 'src/common/constants';
import { HangHoa } from 'src/hang-hoa/model/hang-hoa.model';
import { PhieuNhap } from 'src/phieu-nhap/model/phieu-nhap-model';

@Table({ tableName: Entity.BILLNHAP })
export class BillNhap extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => PhieuNhap)
  @Column({ type: DataType.UUID, allowNull: false })
  idPhieuNhap: string;

  @ForeignKey(() => HangHoa)
  @Column({ type: DataType.UUID, allowNull: false })
  idHangHoa: string;

  @Column({ type: DataType.STRING, allowNull: false })
  productName: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  unitPrice: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  totalPrice: number;

  @BeforeSave
  static calculateTotalPrice(instance: BillNhap) {
    instance.totalPrice = instance.quantity * instance.unitPrice;
  }
}
