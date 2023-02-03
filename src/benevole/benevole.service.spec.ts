import { Test, TestingModule } from '@nestjs/testing';
import { BenevoleService } from './benevole.service';

describe('BenevoleService', () => {
  let service: BenevoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenevoleService],
    }).compile();

    service = module.get<BenevoleService>(BenevoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
