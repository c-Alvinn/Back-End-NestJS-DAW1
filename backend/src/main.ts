import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
 const app = await NestFactory.create(AppModule);

 // Configurando o CORS
 app.enableCors({
   origin: 'http://localhost:5173'
 })

 await app.listen(3000);
}
bootstrap();