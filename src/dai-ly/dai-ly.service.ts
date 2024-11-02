import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { CreateDaiLyDto } from './dto/create-dai-ly.dto';
import { DaiLy } from './model/dai-ly-model';
import { UpdateDaiLyDto } from './dto/update-dai-ly-body';

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

  // Tìm đại lý theo id
  async findById(id: string): Promise<DaiLy> {
    return this.daiLyModel.findOne({ where: { id } });
  }

  // Lấy danh sách tất cả các đại lý
  async findAll(): Promise<DaiLy[]> {
    return this.daiLyModel.findAll();
  }

  // Thêm mới đại lý
  async createDaiLy(data: CreateDaiLyDto): Promise<DaiLy> {
    return this.daiLyModel.create(data);
  }

  // Cập nhật thông tin đại lý
  async updateDaiLy(
    id: string,
    updateData: UpdateDaiLyDto,
  ): Promise<[number, DaiLy[]]> {
    return this.daiLyModel.update(updateData, {
      where: { id },
      returning: true,
    });
  }

  // Xóa đại lý theo id
  async deleteDaiLy(id: string): Promise<void> {
    const daiLy = await this.findById(id);
    if (daiLy) {
      await daiLy.destroy();
    }
  }

  async findDaiLyByMa(ma: string): Promise<DaiLy> {
    const hangHoa = await this.daiLyModel.findOne({
      where: { ma },
    });

    if (!hangHoa) {
      throw new NotFoundException(`Không tìm thấy đại lý với mã ${ma}`);
    }

    return hangHoa;
  }
}
