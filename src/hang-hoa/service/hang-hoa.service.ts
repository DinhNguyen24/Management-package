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

  async findHangHoaById(id: string): Promise<HangHoa> {
    return await this.hangHoaRepository.findByPk(id);
  }

  async searchHangHoa(keyword: string) {
    try {
      const hangHoaList = await HangHoa.findAll({
        where: {
          ten: {
            [Op.like]: `%${keyword}%`, // Sử dụng toán tử LIKE để tìm kiếm
          },
        },
      });
      return { success: true, hangHoaList };
    } catch (error) {
      return {
        success: false,
        message: 'Lỗi khi tìm kiếm hàng hóa: ' + error.message,
      };
    }
  }
}
