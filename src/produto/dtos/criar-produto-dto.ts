import { IsNotEmpty } from 'class-validator'

// https://docs.nestjs.com/techniques/validation

export class CriarProdutoDTO {

    @IsNotEmpty()
    id: string;

    nome: string;

    status: 'Disponível' | 'Indisponível';

    destinacao: string;

    taxa_retabilidade: number;

    prazo: number;

    taxa_adm: number;

}