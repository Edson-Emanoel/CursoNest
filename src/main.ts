import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

// Inicia o Projeto
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // se TRUE ele REMOVE as chaves que NÃO ESTÃO no DTO
      // transform: true,  se TRUE ele TRANSFORMA os dados recebidos para o tipo do DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
