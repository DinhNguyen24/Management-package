import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NhaCungCap } from './model/nha-cung-cap.model';

@Injectable()
export class NhaCungCapService {
  constructor(
    @InjectModel(NhaCungCap)
    private NhaCungCapModel: typeof NhaCungCap,
  ) {}

  async findAll(): Promise<NhaCungCap[]> {
    return await this.NhaCungCapModel.findAll();
  }

  async findOne(id: string): Promise<NhaCungCap> {
    return await this.NhaCungCapModel.findOne({
      where: {
        id,
      },
    });
  }

  async createNhaCungCap(NhaCungCap: NhaCungCap): Promise<NhaCungCap> {
    return await this.NhaCungCapModel.create(NhaCungCap);
  }
}
