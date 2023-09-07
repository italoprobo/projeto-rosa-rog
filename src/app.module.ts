import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoController } from './produto/produto.controler';
import { ProdutoService } from './produto/produto.service';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [],
  controllers: [AppController, ProdutoController],
  providers: [AppService, ProdutoService],
})
export class AppModule {}
