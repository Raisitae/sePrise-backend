import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'pacientes' })
export class Paciente {
  @PrimaryColumn()
  dni: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  num_Telefono: number;
}
