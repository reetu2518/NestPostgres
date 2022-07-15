import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
// import { FeedbackProvider } from './providers/feedback.provider';

@Module({
  imports: [FeedbacksModule,
    RouterModule.register([
      {
        path : 'api/feedbacks',
        module : FeedbacksModule,
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
