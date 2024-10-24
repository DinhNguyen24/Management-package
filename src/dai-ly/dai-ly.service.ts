import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { DaiLy } from './model/dai-ly-model';

@Injectable()
export class DaiLyService {
  constructor(
    @InjectModel(DaiLy)
    private readonly daiLyModel: typeof DaiLy,
  ) {}

  // Tìm đại lý theo tên (có chứa chuỗi tìm kiếm)
  async searchDaiLy(ten: string): Promise<DaiLy[]> {
    return this.daiLyModel.findAll({
      where: { ten: { [Op.like]: `%${ten}%` } },
    });
  }

  // Tìm đại lý theo id (để chọn đúng đại lý sau khi tìm kiếm)
  async findById(id: string): Promise<DaiLy> {
    return this.daiLyModel.findOne({ where: { id } });
  }

  // Thêm mới đại lý
  async createDaiLy(data: any): Promise<DaiLy> {
    return this.daiLyModel.create(data);
  }
}
