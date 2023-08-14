import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  produto(@Query('nome') nome = 'Visitante') {
    const context = {
      nome,
      qtd_letras: nome.length
    }
    return context
  }
}
