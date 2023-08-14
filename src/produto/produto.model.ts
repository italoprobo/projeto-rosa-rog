export interface Produto {

    id: string;

    nome: string;

    status: 'Disponível' | 'Indisponível';

    destinacao: string;

    taxa_retabilidade: number;

    prazo: number;

    taxa_adm: number;

}