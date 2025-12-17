import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("test")
  console.log(process.env.DB_CLUSTER,"$$$$$$$$$$$$$$$$$$$$",process.env.PORT)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
