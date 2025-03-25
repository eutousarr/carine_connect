/*
  Warnings:

  - You are about to drop the column `createdAt` on the `eleves` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `students` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `students` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "eleves" DROP COLUMN "createdAt",
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "students" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
