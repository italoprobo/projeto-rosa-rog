import { Controller, Delete, Get, Param, 
  Post, Body, Put, Render, Res } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.model';
import { Response } from 'express';


@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get('lista')
  @Render('produto/lista')
  listarProdutos() {
    const produtos: Produto[] = this.produtoService.listarProdutos();
    return { produtos }
  }

  @Post() 
  adicionarProduto(@Res() res: Response, @Body() novoProduto: Produto){
    this.produtoService.adicionarProduto(novoProduto);
    res.redirect(`/produto/lista`)
  }

  @Delete(':id')
  removerProduto(@Param('id') id: string) {
    this.produtoService.removerProduto(id);
    return { message : 'Produto removido com sucesso! '};
  }

  @Put(':id/status')
  mudarStatus(@Param('id') id: string) {
    this.produtoService.mudarStatus(id)
    return { message : 'Status do produto foi alterado!' }
  }
}
