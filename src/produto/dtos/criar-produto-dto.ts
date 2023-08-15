import { IsIn, IsNumber, IsNumberString, IsNotEmpty, Max, MaxLength, Min, IsInt } from 'class-validator'

// https://docs.nestjs.com/techniques/validation

export class CriarProdutoDTO {

    id: string;

    @IsNotEmpty()
    @MaxLength(32)
    nome: string;

    @IsIn(['Disponível', 'Indisponível'])
    status: 'Disponível' | 'Indisponível';

    @MaxLength(180)
    destinacao: string;

    @IsInt()
    @Min(1)
    @Max(20)
    taxa_retabilidade: number;

    @IsInt()
    @Min(0)
    @Max(48)
    prazo: number;

    @IsInt()
    @Min(0)
    @Max(100)  
    taxa_adm: number;

}