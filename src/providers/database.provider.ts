import { Feedback } from 'src/entity/feedback.entity';
import { createConnection } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'abul.db.elephantsql.com',
        port: 5432,
        username: 'neaurhyv',
        password: 'IduHJHNmg2Rn1rajb7xZBlfMvtxQbyLL',
        database: 'neaurhyv',
        entities: [Feedback],
        synchronize: true,
      }),
  },
];
