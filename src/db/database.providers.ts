import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { Inject } from '@nestjs/common';

@Inject()


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/test'),
  },
];
