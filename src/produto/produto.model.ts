export interface Produto {

    id: string;

    nome: string;

    status: 'Disponível' | 'Indisponível';

    destinacao: string;

    taxa_rentabilidade: number;

    prazo: number;

    taxa_adm: number;

}