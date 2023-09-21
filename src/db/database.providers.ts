import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb+srv://icinemamongo:icinemamongo@cluster0.2tstg.mongodb.net/test-nest?retryWrites=true&w=majority',
      ),
  },
];
