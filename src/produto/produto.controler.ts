import { Controller, Delete, Get, Param, 
  Post, Body, Put, Render, Res } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.model';
import { Response } from 'express';
import { CriarProdutoDTO } from './dtos/criar-produto-dto';


@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get('lista')
  @Render('produto/lista')
  listarProdutos() {
    const produtos: Produto[] = this.produtoService.listarProdutos();
    return { produtos }
  }

  
  @Get('adicionar')
  @Render('produto/forms-produto')
  renderFormulario() {
    return {};
  }

  @Post() 
  adicionarProduto(@Res() res: Response, @Body() novoProduto: CriarProdutoDTO){
    this.produtoService.adicionarProduto(novoProduto);
    res.redirect(`/produto/lista`)
  }

  @Delete(':id')
  removerProduto(@Res() res: Response, @Param('id') id: string) {
    this.produtoService.removerProduto(id);
    res.redirect(`/produto/lista`)
  }

  @Put(':id/status')
  mudarStatus(@Res() res: Response, @Param('id') id: string) {
    this.produtoService.mudarStatus(id)
    res.redirect(`/produto/lista`)
  }
}
