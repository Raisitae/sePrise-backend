import { Injectable } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medico } from './entities/medico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class MedicosService {
  constructor(
    @InjectRepository(Medico)
    private readonly medicoRepository: Repository<Medico>,
  ) {}

  async create(createMedicoDto: CreateMedicoDto) {
    const medico = this.medicoRepository.create(createMedicoDto);
    return await this.medicoRepository.save(medico);
  }

  findAll() {
    return this.medicoRepository.find();
  }

  async findOne(dni: number): Promise<Medico> {
    const whereCondition: FindOptionsWhere<Medico> = { dni };
    return await this.medicoRepository.findOne({ where: whereCondition });
  }

  update(id: number, updateMedicoDto: UpdateMedicoDto) {
    return `This action updates a #${id} medico`;
  }

  remove(id: number) {
    return `This action removes a #${id} medico`;
  }
}
