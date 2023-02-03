import { Test, TestingModule } from '@nestjs/testing';
import { BenevoleController } from './benevole.controller';

describe('BenevoleController', () => {
  let controller: BenevoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BenevoleController],
    }).compile();

    controller = module.get<BenevoleController>(BenevoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
