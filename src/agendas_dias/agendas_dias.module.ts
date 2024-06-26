import { Module } from '@nestjs/common';
import { AgendasDiasService } from './agendas_dias.service';
import { AgendasDiasController } from './agendas_dias.controller';
import { Agenda_dia } from './entities/agenda_dia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AgendasDiasController],
  providers: [AgendasDiasService],
  imports: [TypeOrmModule.forFeature([Agenda_dia])],
})
export class AgendasDiasModule {}
