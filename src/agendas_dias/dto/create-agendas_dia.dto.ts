export class CreateAgendasDiaDto {
  id_agenda: number;
  fecha_agenda: Date;
  estado: number;
  //1 no acreditado 2 en espera 3 atencion en curso 4 finalizado
  id_turno: number;
  dni_medico: number;
  medico: boolean;
}
