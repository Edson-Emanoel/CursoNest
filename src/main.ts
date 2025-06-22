import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

// Inicia o Projeto
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
