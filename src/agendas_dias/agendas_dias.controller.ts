import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgendasDiasService } from './agendas_dias.service';
import { CreateAgendasDiaDto } from './dto/create-agendas_dia.dto';
import { UpdateAgendasDiaDto } from './dto/update-agendas_dia.dto';

@Controller('agendasDias')
export class AgendasDiasController {
  constructor(private readonly agendasDiasService: AgendasDiasService) {}

  @Post()
  create(@Body() createAgendasDiaDto: CreateAgendasDiaDto) {
    return this.agendasDiasService.create(createAgendasDiaDto);
  }

  @Get()
  findAll() {
    return this.agendasDiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.agendasDiasService.findOne(+id);
  }

  @Get('medico/:medico/:date')
  async findMany(@Param('medico') medico: number, @Param('date') date: string) {
    return this.agendasDiasService.findMany(date, +medico);
  }

  @Get('/turno/:id_turno')
  findTurno(@Param('id_turno') id_turno: number) {
    return this.agendasDiasService.findOne(+id_turno);
  }

  @Get('/hoy/:fecha_agenda')
  async findAgendasHoy(@Param('fecha_agenda') fecha_agenda: string) {
    return this.agendasDiasService.findAgendasHoy(fecha_agenda);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAgendasDiaDto: UpdateAgendasDiaDto,
  ) {
    return this.agendasDiasService.update(+id, updateAgendasDiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agendasDiasService.remove(+id);
  }
}
