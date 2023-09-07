// https://docs.nestjs.com/techniques/validation

import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsIn, IsNotEmpty, Max, MaxLength, Min, IsInt, IsEnum } from 'class-validator';

export class CriarProdutoDTO {
  @ApiProperty({description: 'ID do produto'})
  id: string;

  @ApiProperty({description: 'Nome do produto'})
  @IsNotEmpty()
  @MaxLength(32)
  nome: string;

  @ApiProperty({description: 'Status do produto', enum: Status})
  status: Status;

  @ApiProperty({description: 'Destinação do produto'})
  @MaxLength(180)
  destinacao: string;

  @ApiProperty({description: 'Taxa de rendimento do produto'})
  @Type(() => Number)
  @IsInt({ message: 'A taxa_rentabilidade deve ser um número inteiro' })
  @Min(1, { message: 'A taxa_rentabilidade deve ser no mínimo 1' })
  @Max(20, { message: 'A taxa_rentabilidade deve ser no máximo 20' })
  taxa_rentabilidade: number;

  @ApiProperty({description: 'Prazo do produto em meses'})
  @Type(() => Number)
  @IsInt({ message: 'O prazo deve ser um número inteiro' })
  @Min(0, { message: 'O prazo deve ser no mínimo 0' })
  @Max(48, { message: 'O prazo deve ser no máximo 48' })
  prazo: number;

  @ApiProperty({description: 'Taxa de administração do produto'})
  @Type(() => Number)
  @IsInt({ message: 'A taxa_adm deve ser um número inteiro' })
  @Min(0, { message: 'A taxa_adm deve ser no mínimo 0' })
  @Max(100, { message: 'A taxa_adm deve ser no máximo 100' })
  taxa_adm: number;

  @ApiProperty({description: 'Data de vencimento do produto'})
  vencimento: Date;

  @ApiProperty({description: 'Indica a liquidez do produto'})
  liquidez: boolean

}
