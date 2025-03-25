-- CreateEnum
CREATE TYPE "Annee" AS ENUM ('AnScol_2021_2022', 'AnScol_2022_2023', 'AnScol_2023_2024', 'AnScol_2024_2025', 'AnScol_2025_2026', 'AnScol_2026_2027', 'AnScol_2027_2028', 'AnScol_2028_2029', 'AnScol_2029_2030');

-- CreateEnum
CREATE TYPE "Classe" AS ENUM ('CI', 'CP', 'CE1', 'CE2', 'CM1', 'CM2');

-- CreateEnum
CREATE TYPE "Conseil" AS ENUM ('Passe', 'Redouble', 'examen', 'Exclu');

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255),
    "content" TEXT,
    "image" VARCHAR(255),
    "authorId" TEXT,
    "authorName" TEXT,
    "authorImage" TEXT,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "authorImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT,
    "phone" TEXT,
    "adresse" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eleves" (
    "id" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "sexe" TEXT NOT NULL,
    "datenais" TEXT,
    "lieunais" TEXT,
    "adresse" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "photo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "eleves_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "sexe" TEXT NOT NULL,
    "datenais" TEXT,
    "lieunais" TEXT,
    "adresse" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "photo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inscriptions" (
    "id" TEXT NOT NULL,
    "annee" "Annee" NOT NULL DEFAULT 'AnScol_2025_2026',
    "classe" "Classe" NOT NULL DEFAULT 'CI',
    "montant" INTEGER DEFAULT 0,
    "frais" INTEGER DEFAULT 0,
    "moyenne1" DOUBLE PRECISION DEFAULT 0,
    "moyenne2" DOUBLE PRECISION DEFAULT 0,
    "moyenne3" DOUBLE PRECISION DEFAULT 0,
    "eleveId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trimestres" (
    "id" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,

    CONSTRAINT "trimestres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discipline" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matiere" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "Matiere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" TEXT NOT NULL,
    "eleveId" TEXT NOT NULL,
    "annee" "Annee" NOT NULL,
    "trimestreId" TEXT NOT NULL,
    "ortho" DOUBLE PRECISION,
    "production" DOUBLE PRECISION,
    "vocabulaire" DOUBLE PRECISION,
    "grammaire" DOUBLE PRECISION,
    "lecture" DOUBLE PRECISION,
    "conjugaison" DOUBLE PRECISION,
    "ecriture" DOUBLE PRECISION,
    "numeriques" DOUBLE PRECISION,
    "mesures" DOUBLE PRECISION,
    "geometrie" DOUBLE PRECISION,
    "probleme" DOUBLE PRECISION,
    "histoire" DOUBLE PRECISION,
    "geographie" DOUBLE PRECISION,
    "ist" DOUBLE PRECISION,
    "vivreEnsemble" DOUBLE PRECISION,
    "vivreMilieu" DOUBLE PRECISION,
    "dessin" DOUBLE PRECISION,
    "recitation" DOUBLE PRECISION,
    "total" DOUBLE PRECISION,
    "moyenne" DOUBLE PRECISION,
    "rang" INTEGER,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resultats" (
    "id" TEXT NOT NULL,
    "eleveId" TEXT NOT NULL,
    "annee" TEXT,
    "moyenne" DOUBLE PRECISION,
    "rang" INTEGER,
    "decision" "Conseil" DEFAULT 'Passe',
    "observation" TEXT,

    CONSTRAINT "resultats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- AddForeignKey
ALTER TABLE "inscriptions" ADD CONSTRAINT "inscriptions_eleveId_fkey" FOREIGN KEY ("eleveId") REFERENCES "eleves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matiere" ADD CONSTRAINT "Matiere_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_trimestreId_fkey" FOREIGN KEY ("trimestreId") REFERENCES "trimestres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_eleveId_fkey" FOREIGN KEY ("eleveId") REFERENCES "eleves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resultats" ADD CONSTRAINT "resultats_eleveId_fkey" FOREIGN KEY ("eleveId") REFERENCES "eleves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
