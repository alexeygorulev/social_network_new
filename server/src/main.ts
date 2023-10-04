import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('social-network-api');
  app.enableCors({
    origin: true,
  });

  await app.listen(3444);
}
bootstrap();
