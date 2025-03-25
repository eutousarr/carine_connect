/*
  Warnings:

  - You are about to drop the column `conjugaison` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `dessin` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `ecriture` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `geographie` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `geometrie` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `grammaire` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `histoire` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `ist` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `lecture` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `mesures` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `moyenne` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `numeriques` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `ortho` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `probleme` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `production` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `rang` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `recitation` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `vivreEnsemble` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `vivreMilieu` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `vocabulaire` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the column `libelle` on the `trimestres` table. All the data in the column will be lost.
  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BlogPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Discipline` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Matiere` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `matiereId` to the `notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `trimestres` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `trimestres` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SlugMatiere" AS ENUM ('orthographe', 'productionEcrite', 'vocabulaire', 'grammaire', 'lecture', 'conjugaison', 'ecriture', 'numeriques', 'mesures', 'geometrie', 'probleme', 'histoire', 'geographie', 'ist', 'vivreEnsemble', 'vivreMilieu', 'dessin', 'recitation');

-- CreateEnum
CREATE TYPE "SlugDiscipline" AS ENUM ('LanguageEtCompréhension', 'Mathématiques', 'ESVS', 'ESPA');

-- DropForeignKey
ALTER TABLE "Matiere" DROP CONSTRAINT "Matiere_disciplineId_fkey";

-- AlterTable
ALTER TABLE "notes" DROP COLUMN "conjugaison",
DROP COLUMN "dessin",
DROP COLUMN "ecriture",
DROP COLUMN "geographie",
DROP COLUMN "geometrie",
DROP COLUMN "grammaire",
DROP COLUMN "histoire",
DROP COLUMN "ist",
DROP COLUMN "lecture",
DROP COLUMN "mesures",
DROP COLUMN "moyenne",
DROP COLUMN "numeriques",
DROP COLUMN "ortho",
DROP COLUMN "probleme",
DROP COLUMN "production",
DROP COLUMN "rang",
DROP COLUMN "recitation",
DROP COLUMN "total",
DROP COLUMN "vivreEnsemble",
DROP COLUMN "vivreMilieu",
DROP COLUMN "vocabulaire",
ADD COLUMN     "matiereId" INTEGER NOT NULL,
ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "trimestres" DROP COLUMN "libelle",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- DropTable
DROP TABLE "Article";

-- DropTable
DROP TABLE "BlogPost";

-- DropTable
DROP TABLE "Contact";

-- DropTable
DROP TABLE "Discipline";

-- DropTable
DROP TABLE "Matiere";

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255),
    "content" TEXT,
    "image" VARCHAR(255),
    "authorId" TEXT,
    "authorName" TEXT,
    "authorImage" TEXT,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT,
    "phone" TEXT,
    "adresse" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disciplines" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matieres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "matieres_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email_key" ON "contacts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "disciplines_slug_key" ON "disciplines"("slug");

-- CreateIndex
CREATE INDEX "disciplines_slug_idx" ON "disciplines"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "matieres_slug_key" ON "matieres"("slug");

-- CreateIndex
CREATE INDEX "matieres_slug_idx" ON "matieres"("slug");

-- AddForeignKey
ALTER TABLE "matieres" ADD CONSTRAINT "matieres_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "matieres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
