import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'medicos' })
export class Medico {
  @PrimaryColumn()
  dni: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  especialidad: string;
}
