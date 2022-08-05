import { Test, TestingModule } from '@nestjs/testing';
import FetchController from './fetch.controller';
import FetchService from './fetch.service';

describe('FetchController', () => {
  let fetchController: FetchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FetchController],
      providers: [FetchService],
    }).compile();

    fetchController = app.get<FetchController>(FetchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fetchController.getHello()).toBe('Hello World!');
    });
  });
});
