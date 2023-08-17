import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';
import { v4 as uuidv4 } from 'uuid'
import { CriarProdutoDTO } from './dtos/criar-produto-dto';
import { validate } from 'class-validator';

@Injectable()
export class ProdutoService {
  private produtos: Produto[] = [];

  adicionarProduto(produto: CriarProdutoDTO) {
    const novoProduto: Produto = {...produto, id: uuidv4().substr(0, 8)}
    this.produtos.push(novoProduto);
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
