import { PartialType } from '@nestjs/mapped-types';
import { CreateAgendasDiaDto } from './create-agendas_dia.dto';
import { IsNumber } from 'class-validator';

export class UpdateAgendasDiaDto extends PartialType(CreateAgendasDiaDto) {
  @IsNumber()
  estado: number;
}
