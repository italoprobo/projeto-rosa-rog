export enum Status {
    DISPONIVEL,
    INDISPONIVEL
}

export interface Produto {

    id?: string;

    nome: string;

    status: Status

    destinacao: string;

    taxa_rentabilidade: number;

    prazo: number;

    taxa_adm: number;

    vencimento: Date;

    liquidez: boolean

}