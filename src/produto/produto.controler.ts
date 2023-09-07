import { Controller, Delete, Get, Param, 
  Post, Body, Put, Render, Res } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.model';
import { Response } from 'express';
import { CriarProdutoDTO } from './dtos/criar-produto-dto';
import { ApiExcludeEndpoint, ApiTags, ApiResponse } from '@nestjs/swagger';


@ApiTags('Produtos')
@Controller('api/v1/produtos/')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get('/')
  @ApiResponse({ status: 200, description: 'OK.'})
  @ApiResponse({ status: 404, description: 'Ocorreu um erro com a página.'})
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

  @Post('/') 
  @ApiResponse({ status: 201, description: 'O produto foi adicionado com sucesso.'})
  @ApiResponse({ status: 404, description: 'Ocorreu um erro ao adicionar o produto.'})
  async adicionarProduto(@Res() res: Response, @Body() novoProduto: CriarProdutoDTO){
    try{
      this.produtoService.adicionarProduto(novoProduto);
      res.redirect('/api/v1/produtos/')
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
