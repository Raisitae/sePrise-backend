# Clinica SePrise Backend

Repositorio backend del sistema integral de gestión de turnos para laboratorio y hospital de la Clinica SePrise.

## Descripción

Este proyecto proporciona una API para gestionar los turnos y agendas de pacientes y médicos en la Clínica SePrise. Está desarrollado con NestJS y utiliza TypeORM para la conexión con la base de datos.

## Requisitos Previos

Node.js, npm, Mysqlserver.

##Instalación
Clona el repositorio:

```
git clone <URL_DEL_REPOSITORIO>
npm i
```

## Inicia el servidor:

En _app.module.ts_ modificar el codigo de acuerdo a su base de datos:

```
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: XXXX,
      username: 'XXX',
      password: 'XXXXX',
      database: 'seprise_db',
      entities: [join(process.cwd(), 'dist/**/*.entity.js')],
    }),
```

Cambiar los “XXXX” por los datos del server de su computadora

Inicializar la base de datos seprise_db.

En la carpeta de backend, inicializarlo primero por consola con el comando `npm run start:dev` Debe inicializarse en el puerto **3000**

## Endpoints

La app cuenta con los siguientes endpoints:

- `pacientes`

  - `POST pacientes/` crea un paciente.
  - `GET pacientes/` trae todos los pacientes de la DB
  - `GET pacientes/:id` trae un paciente de un id específico. El id esperado es un number, y es el dni del paciente.

- `medicos`

  - `POST medicos/` crea un medico.
  - `GET medicos/` trae todos los medicos de la DB
  - `GET medicos/:id` trae el medico de un id específico. El id esperado es un number, y es el dni del medico.

- `agendasDias`

  - `POST agendasDias/` crea una agendaDia.
  - `GET agendasDias/` trae todas las agendasDias de la DB
  - `GET agendasDias/:id` trae la agendaDia de un id específico. El id esperado es un number.
  - `GET agendasDias/:medico/:date`trae la agendaDia de un médico específico en esa fecha. Medico y date son strings.
  - `GET agendasDias/hoy/:fecha_agenda` trae la agendaDia de una fecha específica. Fecha es un string.
  - `UPDATE agendasDias/:id` modifica una agendaDia específica. Solo recibe estado, que es un number. Los estados son 1: no confirmado, 2: confirmado, 3: en curso, 4: finalizado.

- `turnos`
  - `POST turnos/` crea un nuevo turno.
  - `GET turnos/` trae todos los turnos de la DB
  - `GET turnos/:id` trae el turno de un id específico. El id esperado es un número.
  - `GET turnos/dni/:dni` trae el turno de un dni específico. El dni esperado es un número.
  - `UPDATE turnos/:id` modifica una agendaDia específica. Puede recibir tipo_turno, que es un number, donde 1 es turno de médicos y 2 turno de laboratorio, notas, que es string, que son las notas del turno y cancelado, que es un booleano, que es el estado del turno.

## Tecnologías

La app se encuentra desarrollada en Nest Js (typescript). También usa TypeOrm para la conexión con la DB.

## Frontend y DB

El repositorio frontend se encuentra en el siguiente link:
https://github.com/Raisitae/sePrise-frontend
El repositorio con la base de datos se encuentra en el siguiente link:
https://github.com/Raisitae/seprise-db
