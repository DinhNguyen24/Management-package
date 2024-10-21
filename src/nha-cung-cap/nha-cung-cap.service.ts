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
    return this.NhaCungCapModel.findAll();
  }

  findOne(id: string): Promise<NhaCungCap> {
    return this.NhaCungCapModel.findOne({
      where: {
        id,
      },
    });
  }

  async createNhaCungCap(NhaCungCap: NhaCungCap): Promise<NhaCungCap> {
    return this.NhaCungCapModel.create(NhaCungCap);
  }
}
