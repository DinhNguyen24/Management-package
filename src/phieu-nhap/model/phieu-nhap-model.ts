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
import { CreatePhieuNhapNhaCungCapDto } from 'src/phieu-nhap-nha-cung-cap/dto/phieu-nhap-nha-cung-cap.dto';
import { PhieuNhapNhaCungCap } from 'src/phieu-nhap-nha-cung-cap/model/phieu-nhap-nha-cung-cap.model';
import { CreatePhieuNhapHangHoaDto } from 'src/phieu-nhap-hang-hoa /dto/create-phieu-nhap-hang-hoa.dto';
import { PhieuNhapHangHoa } from 'src/phieu-nhap-hang-hoa /model/phieu-nhap-hang-hoa.model';

@Table({ tableName: Entity.PHIEUNHAP })
export class PhieuNhap extends Model {
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
  })
  ma: string;

  @HasMany(() => PhieuNhapNhaCungCap)
  listPhieuNhapNhaCungCap: CreatePhieuNhapNhaCungCapDto[];

  @HasMany(() => PhieuNhapHangHoa)
  listPhieuNhapHangHoa: CreatePhieuNhapHangHoaDto[];
}
