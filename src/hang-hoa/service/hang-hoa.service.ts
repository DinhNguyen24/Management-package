import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HangHoa } from '../model/hang-hoa.model';

@Injectable()
export class HangHoaService {
  constructor(
    @InjectModel(HangHoa)
    private readonly hangHoaModel: typeof HangHoa,
  ) {}

  async createHangHoa(data: any): Promise<HangHoa> {
    return this.hangHoaModel.create(data);
  }

  async findAll(): Promise<HangHoa[]> {
    return this.hangHoaModel.findAll();
  }

  async findOne(id: string): Promise<HangHoa> {
    return this.hangHoaModel.findOne({ where: { id } });
  }

  async updateHangHoa(id: string, data: any): Promise<HangHoa> {
    const hangHoa = await this.findOne(id);
    return hangHoa.update(data);
  }

  async deleteHangHoa(id: string): Promise<void> {
    const hangHoa = await this.findOne(id);
    await hangHoa.destroy();
  }
}
