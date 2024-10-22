import { PartialType } from '@nestjs/swagger';
import { DaiLy } from '../model/dai-ly-model';

export class CreateDaiLyDto extends PartialType(DaiLy) {}
