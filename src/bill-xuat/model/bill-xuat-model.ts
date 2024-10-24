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
import { PhieuXuat } from 'src/phieu-xuat/model/phieu-xuat-model';

@Table({ tableName: Entity.BILLXUAT })
export class BillXuat extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => PhieuXuat)
  @Column({ type: DataType.UUID, allowNull: false })
  idPhieuXuat: string;

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
  static calculateTotalPrice(instance: BillXuat) {
    instance.totalPrice = instance.quantity * instance.unitPrice;
  }
}
