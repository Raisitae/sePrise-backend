import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAgendasDiaDto } from './dto/create-agendas_dia.dto';
import { UpdateAgendasDiaDto } from './dto/update-agendas_dia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Agenda_dia } from './entities/agenda_dia.entity';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class AgendasDiasService {
  constructor(
    @InjectRepository(Agenda_dia)
    private readonly agendaRepository: Repository<Agenda_dia>,
  ) {}

  async create(createAgendasDiaDto: CreateAgendasDiaDto) {
    const agenda_dia = this.agendaRepository.create(createAgendasDiaDto);
    return await this.agendaRepository.save(agenda_dia);
  }

  findAll() {
    return this.agendaRepository.find();
  }

  async findOne(id_agenda: number): Promise<Agenda_dia> {
    const whereCondition: FindOptionsWhere<Agenda_dia> = { id_agenda };
    return await this.agendaRepository.findOne({ where: whereCondition });
  }

  async findTurno(id_turno: number): Promise<Agenda_dia> {
    const whereCondition: FindOptionsWhere<Agenda_dia> = { id_turno };
    return await this.agendaRepository.findOne({ where: whereCondition });
  }

  async findMany(date: string, dni_medico?: number): Promise<Agenda_dia[]> {
    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);

    const whereCondition: FindOptionsWhere<Agenda_dia> = {
      dni_medico,
      fecha_agenda: Between(startDate, endDate),
    };

    return await this.agendaRepository.find({ where: whereCondition });
  }

  async findAgendasHoy(fecha_agenda: string): Promise<Agenda_dia[]> {
    const startDate = new Date(fecha_agenda);
    const endDate = new Date(fecha_agenda);
    endDate.setDate(endDate.getDate() + 1);

    const whereCondition: FindOptionsWhere<Agenda_dia> = {
      fecha_agenda: Between(startDate, endDate),
    };

    return await this.agendaRepository.find({ where: whereCondition });
  }

  async update(id_agenda: number, updateAgendasDiaDto: UpdateAgendasDiaDto) {
    const agenda = await this.agendaRepository.findOne({
      where: { id_agenda },
    });

    if (!agenda) {
      throw new NotFoundException(`Turno with id ${id_agenda} not found`);
    }

    Object.assign(agenda, updateAgendasDiaDto);
    const updatedAgenda = await this.agendaRepository.save(agenda);

    return updatedAgenda;
  }

  remove(id: number) {
    return `This action removes a #${id} agendasDia`;
  }
}
