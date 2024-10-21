import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HangHoa } from '../model/hang-hoa.model';

@Injectable()
export class HangHoaService {
  constructor(
    @InjectModel(HangHoa)
    private HangHoaModel: typeof HangHoa,
  ) {}

  async findAll(): Promise<HangHoa[]> {
    return this.HangHoaModel.findAll();
  }

  findOne(id: string): Promise<HangHoa> {
    return this.HangHoaModel.findOne({
      where: {
        id,
      },
    });
  }

  async createHangHoa(HangHoa: HangHoa): Promise<HangHoa> {
    return this.HangHoaModel.create(HangHoa);
  }
}
