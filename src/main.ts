import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const config = new ConfigService();
const port = config.get('PORT');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port ?? 8000);
}
bootstrap();
