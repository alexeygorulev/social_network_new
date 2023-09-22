import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';

async function bootstrap() {
  const env = config();
  expand(env);
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  });

  await app.listen(3000);
}
bootstrap();
