import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HangHoa } from '../model/hang-hoa.model';
import { Op } from 'sequelize';

@Injectable()
export class HangHoaService {
  constructor(
    @InjectModel(HangHoa)
    private hangHoaRepository: typeof HangHoa,
  ) {}

  async findAll(): Promise<HangHoa[]> {
    return await this.hangHoaRepository.findAll();
  }

  async findOne(id: string): Promise<HangHoa> {
    return await this.hangHoaRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createHangHoa(HangHoa: HangHoa): Promise<HangHoa> {
    return await this.hangHoaRepository.create(HangHoa);
  }

  async searchHangHoa(keyword: string): Promise<HangHoa[]> {
    return await this.hangHoaRepository.findAll({
      where: {
        ten: { [Op.iLike]: `%${keyword}%` },
      },
    });
  }

  async findHangHoaById(id: string): Promise<HangHoa> {
    return await this.hangHoaRepository.findByPk(id);
  }
}
