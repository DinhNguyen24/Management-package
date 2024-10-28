import { Module } from '@nestjs/common';
import { DaiLyService } from './dai-ly.service';
import { DaiLyController } from './dai-ly.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DaiLy } from './model/dai-ly-model';

@Module({
  imports: [SequelizeModule.forFeature([DaiLy])],
  providers: [DaiLyService],
  controllers: [DaiLyController],
  exports: [DaiLyService],
})
export class DaiLyModule {}
