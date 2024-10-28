import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Example') // Tiêu đề API
    .setDescription('The API description') // Mô tả API
    .setVersion('1.0') // Phiên bản API
    .addTag('example') // Thêm tag cho Swagger
    .addBearerAuth() // Thêm cấu hình Bearer Auth cho JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Đặt đường dẫn cho Swagger UI

  await app.listen(3000);
}
bootstrap();
