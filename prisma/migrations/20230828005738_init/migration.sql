-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DISPONIVEL', 'INDISPONIVEL');

-- CreateTable
CREATE TABLE "produto" (
    "id" BIGSERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DISPONIVEL',
    "destinacao" TEXT NOT NULL,
    "taxaRentabilidade" DOUBLE PRECISION NOT NULL,
    "prazoMinimoRealizacao" DOUBLE PRECISION NOT NULL,
    "taxaAdministracao" DOUBLE PRECISION NOT NULL,
    "dt_vencimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);
