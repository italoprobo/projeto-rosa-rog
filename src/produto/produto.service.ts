import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';
import { v4 as uuidv4 } from 'uuid'
import { CriarProdutoDTO } from './dtos/criar-produto-dto';
import { validate } from 'class-validator';

@Injectable()
export class ProdutoService {
  private produtos: Produto[] = [];

  async adicionarProduto(novoProduto: CriarProdutoDTO) {
    const errors = await validate(novoProduto);

    if (errors.length > 0) {
      throw new Error('Erro de validação');
    }

    const produto: Produto = {
      id: uuidv4().substr(0, 8),
      ...novoProduto,
    };

    this.produtos.push(produto);
  }

  listarProdutos() {
    return this.produtos;
  }

  removerProduto(id: string) {
    let produtoIndex = this.produtos.findIndex(prod => prod.id === id)
    if(produtoIndex !== -1){
        this.produtos.splice(produtoIndex, 1)
    }
  }

  mudarStatus(id: string) {
    const produtoIndex = this.produtos.findIndex(prod => prod.id === id);
    if (produtoIndex !== -1) {
      if (this.produtos[produtoIndex].status === 'Disponível') {
        this.produtos[produtoIndex].status = 'Indisponível';
      } else {
        this.produtos[produtoIndex].status = 'Disponível';
      }
    }
  }
}
