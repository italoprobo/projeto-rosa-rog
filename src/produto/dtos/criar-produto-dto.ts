// https://docs.nestjs.com/techniques/validation

import { IsIn, IsNotEmpty, Max, MaxLength, Min, IsInt } from 'class-validator';

export class CriarProdutoDTO {
  id: string;

  @IsNotEmpty()
  @MaxLength(32)
  nome: string;

  @IsIn(['Disponível', 'Indisponível'])
  status: 'Disponível' | 'Indisponível';

  @MaxLength(180)
  destinacao: string;

  @IsInt({ message: 'A taxa_rentabilidade deve ser um número inteiro' })
  @Min(1, { message: 'A taxa_rentabilidade deve ser no mínimo 1' })
  @Max(20, { message: 'A taxa_rentabilidade deve ser no máximo 20' })
  taxa_rentabilidade: number;

  @IsInt({ message: 'O prazo deve ser um número inteiro' })
  @Min(0, { message: 'O prazo deve ser no mínimo 0' })
  @Max(48, { message: 'O prazo deve ser no máximo 48' })
  prazo: number;

  @IsInt({ message: 'A taxa_adm deve ser um número inteiro' })
  @Min(0, { message: 'A taxa_adm deve ser no mínimo 0' })
  @Max(100, { message: 'A taxa_adm deve ser no máximo 100' })
  taxa_adm: number;
}
