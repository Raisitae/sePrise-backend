import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'agendas_dias' })
export class Agenda_dia {
  @PrimaryGeneratedColumn()
  id_agenda: number;

  @Column({ type: 'timestamp' })
  fecha_agenda: Date;

  @Column()
  estado: number;

  @Column()
  id_turno: number;

  @Column({ nullable: true })
  dni_medico: number;

  @Column()
  medico: boolean;
}
