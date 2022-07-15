import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackProvider } from './feedback.provider';

describe('FeedbackProvider', () => {
  let provider: FeedbackProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedbackProvider],
    }).compile();

    provider = module.get<FeedbackProvider>(FeedbackProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
