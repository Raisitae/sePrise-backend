import { Test, TestingModule } from '@nestjs/testing';
import { AgendasDiasService } from './agendas_dias.service';

describe('AgendasDiasService', () => {
  let service: AgendasDiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendasDiasService],
    }).compile();

    service = module.get<AgendasDiasService>(AgendasDiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
