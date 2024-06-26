import { IsNumber, IsOptional } from 'class-validator';

export class UpdateTurnoDto {
  @IsOptional()
  @IsNumber()
  tipo_turno?: number;

  @IsOptional()
  cancelado?: boolean;

  @IsOptional()
  notas?: string;
}
