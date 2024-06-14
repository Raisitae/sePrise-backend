import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'turnos' })
export class Turno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  fecha_turno: Date;

  @Column({ nullable: true })
  notas: string;

  @Column()
  tipo_turno: number;

  @Column()
  dni_paciente: number;

  @Column({ nullable: true })
  dni_medico: number;
}
