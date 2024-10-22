import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DaiLy } from './model/dai-ly-model';
import { Op } from 'sequelize';

@Injectable()
export class DaiLyService {
  constructor(@InjectModel(DaiLy) private daiLyRepository: typeof DaiLy) {}

  async createDaiLy(createDaiLyDto: DaiLy): Promise<DaiLy> {
    return await this.daiLyRepository.create(createDaiLyDto);
  }

  async searchDaiLy(keyword: string) {
    try {
      const daiLys = await DaiLy.findAll({
        where: {
          ten: {
            [Op.like]: `%${keyword}%`, // Sử dụng toán tử LIKE để tìm kiếm
          },
        },
      });
      return { success: true, daiLys };
    } catch (error) {
      return {
        success: false,
        message: 'Lỗi khi tìm kiếm đại lý: ' + error.message,
      };
    }
  }

  // async addDaiLy(daiLyData: {
  //   ma: string;
  //   ten: string;
  //   diaChi: string;
  //   soDienThoai: string;
  // }) {
  //   try {
  //     const newDaiLy = await DaiLy.create(daiLyData);
  //     return {
  //       success: true,
  //       message: 'Thêm đại lý thành công!',
  //       daiLy: newDaiLy,
  //     };
  //   } catch (error) {
  //     return {
  //       success: false,
  //       message: 'Lỗi khi thêm đại lý: ' + error.message,
  //     };
  //   }
  // }
}
