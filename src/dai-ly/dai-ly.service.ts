import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DaiLy } from './model/dai-ly-model';
import { Op } from 'sequelize';

@Injectable()
export class DaiLyService {
  constructor(@InjectModel(DaiLy) private daiLyRepository: typeof DaiLy) {}

  async searchDaiLy(keyword: string): Promise<DaiLy[]> {
    return await this.daiLyRepository.findAll({
      where: {
        ten: { [Op.iLike]: `%${keyword}%` },
      },
    });
  }
  async createDaiLy(createDaiLyDto: DaiLy): Promise<DaiLy> {
    return await this.daiLyRepository.create(createDaiLyDto);
  }
}
