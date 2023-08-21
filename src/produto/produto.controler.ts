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
  @Render('produto/add-produto')
  renderFormulario() {
    return {};
  }

  @Post('form-produto') 
  async adicionarProduto(@Res() res: Response, @Body() novoProduto: CriarProdutoDTO){
    try{
      this.produtoService.adicionarProduto(novoProduto);
      res.redirect(`/produto/lista`)
    } catch (error) {
      console.error('Erro ao adicionar o produto:', error);     
    } 
  }

  @Delete(':id')
  removerProduto(@Res() res: Response, @Param('id') id: string) {
    this.produtoService.removerProduto(id);
    res.sendStatus(204)
  }

  @Put(':id/status')
  mudarStatus(@Res() res: Response, @Param('id') id: string) {
    this.produtoService.mudarStatus(id)
    res.sendStatus(204);
  }
}
