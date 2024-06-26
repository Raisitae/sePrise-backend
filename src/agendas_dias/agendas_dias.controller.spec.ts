import { Test, TestingModule } from '@nestjs/testing';
import { AgendasDiasController } from './agendas_dias.controller';
import { AgendasDiasService } from './agendas_dias.service';

describe('AgendasDiasController', () => {
  let controller: AgendasDiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendasDiasController],
      providers: [AgendasDiasService],
    }).compile();

    controller = module.get<AgendasDiasController>(AgendasDiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
