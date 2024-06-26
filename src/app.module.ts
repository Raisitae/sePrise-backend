import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TurnosModule } from './turnos/turnos.module';
import { MedicosModule } from './medicos/medicos.module';
import { join } from 'path';
import { AgendasDiasModule } from './agendas_dias/agendas_dias.module';
import { PacientesModule } from './pacientes/pacientes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Chin6fran4',
      database: 'seprise_db',
      entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      //synchronize: true,
    }),

    TurnosModule,
    MedicosModule,
    AgendasDiasModule,
    PacientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
