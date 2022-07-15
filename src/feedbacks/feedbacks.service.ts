import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Feedback } from 'src/entity/feedback.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class FeedbacksService {
  constructor(
    @Inject('FEEDBACK_RESPOSITORY')
    private feedbackRepository: Repository<Feedback>,
  ) {}

  async getFeedbacks(): Promise<Feedback[]> {
    return this.feedbackRepository.find();
  }

  async addFeedback(feedback: Feedback): Promise<InsertResult> {
    return this.feedbackRepository.insert(feedback);
  }

  async findOne(id): Promise<Feedback> {
    return this.feedbackRepository.findOneByOrFail(id);
  }

  async update(id: number, feedback: Feedback): Promise<Feedback> {
    const feedbackToUpdate = await this.findOne(id);
    if (feedbackToUpdate === undefined) {
      throw new NotFoundException();
    }
    await this.feedbackRepository.update(id, feedback);
    return this.findOne(id);
  }


  async delete(id: number): Promise<DeleteResult> {
    const feedbackToUpdate = await this.findOne(id);
    if (feedbackToUpdate === undefined) {
      throw new NotFoundException();
    }
    return this.feedbackRepository.delete(id);
  }
}
