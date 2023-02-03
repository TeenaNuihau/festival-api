import { Test, TestingModule } from '@nestjs/testing';
import { JeuxController } from './jeux.controller';

describe('JeuxController', () => {
  let controller: JeuxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JeuxController],
    }).compile();

    controller = module.get<JeuxController>(JeuxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
