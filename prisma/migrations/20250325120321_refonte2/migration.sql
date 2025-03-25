/*
  Warnings:

  - You are about to drop the column `trimestreId` on the `notes` table. All the data in the column will be lost.
  - You are about to drop the `trimestres` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `posts` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `sexe` on the `eleves` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `evaluationId` to the `notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sexe" AS ENUM ('Masculin', 'Feminin');

-- DropForeignKey
ALTER TABLE "notes" DROP CONSTRAINT "notes_trimestreId_fkey";

-- AlterTable
ALTER TABLE "eleves" DROP COLUMN "sexe",
ADD COLUMN     "sexe" "Sexe" NOT NULL;

-- AlterTable
ALTER TABLE "notes" DROP COLUMN "trimestreId",
ADD COLUMN     "evaluationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "slug" TEXT NOT NULL;

-- DropTable
DROP TABLE "trimestres";

-- CreateTable
CREATE TABLE "evaluations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "evaluations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "posts_slug_key" ON "posts"("slug");

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "evaluations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
