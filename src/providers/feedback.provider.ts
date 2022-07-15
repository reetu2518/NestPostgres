import { Injectable, Provider } from '@nestjs/common';
import { Feedback } from 'src/entity/feedback.entity';
import { Connection } from 'typeorm';

// @Injectable()
export const FeedbackProvider: Provider[] = [
    {
        provide : 'FEEDBACK_RESPOSITORY',
        useFactory : (connection : Connection) => 
            connection.getRepository(Feedback),
        inject : ['DATABASE_CONNECTION'],
    },
]
