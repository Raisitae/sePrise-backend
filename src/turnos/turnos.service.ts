import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turno } from './entities/turno.entity';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class TurnosService {
  constructor(
    @InjectRepository(Turno)
    private readonly turnoRepository: Repository<Turno>,
  ) {}

  async create(createTurnoDto: CreateTurnoDto) {
    const turno = this.turnoRepository.create(createTurnoDto);
    return await this.turnoRepository.save(turno);
  }

  findAll() {
    return this.turnoRepository.find();
  }
  async update(id: number, updateTurnoDto: UpdateTurnoDto): Promise<Turno> {
    const turno = await this.turnoRepository.findOne({ where: { id } });

    if (!turno) {
      throw new NotFoundException(`Turno with id ${id} not found`);
    }

    console.log('Before update:', turno);
    console.log('Update payload:', updateTurnoDto);

    Object.assign(turno, updateTurnoDto);
    const updatedTurno = await this.turnoRepository.save(turno);

    console.log('After update:', updatedTurno);

    return updatedTurno;
  }

  async findMany(dni_paciente: number): Promise<Turno[]> {
    const whereCondition: FindOptionsWhere<Turno> = { dni_paciente }; // Assuming idOrDni is either id or dni
    const turno = await this.turnoRepository.find({
      where: whereCondition,
    });

    if (!turno) {
      throw new NotFoundException();
    }

    return turno;
  }

  async findOne(id: number): Promise<Turno> {
    const whereCondition: FindOptionsWhere<Turno> = { id }; // Assuming idOrDni is either id or dni
    const paciente = await this.turnoRepository.findOne({
      where: whereCondition,
    });

    if (!paciente) {
      throw new NotFoundException();
    }

    return paciente;
  }

  remove(id: number) {
    return `This action removes a #${id} turno`;
  }
}
