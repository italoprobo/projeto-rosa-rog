import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //class validator
  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  //public
  app.useStaticAssets(join(__dirname, '..', 'public'));
  //views
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  //openapi
  const config = new DocumentBuilder()
    .setTitle('Rosa Investiment Project')
    .setDescription('Um projeto da faculdade sobre investimento e financias.')
    .setVersion('1.0')
    .addTag('Produtos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();
