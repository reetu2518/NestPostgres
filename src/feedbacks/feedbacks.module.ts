import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { FeedbackProvider } from 'src/providers/feedback.provider';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbacksService } from './feedbacks.service';

@Module({
    imports : [DatabaseModule],
    controllers : [FeedbacksController],
    providers : [...FeedbackProvider, FeedbacksService]
})
export class FeedbacksModule {}
