/*
  Warnings:

  - You are about to drop the `AdoptionRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AdoptionRequest" DROP CONSTRAINT "AdoptionRequest_petId_fkey";

-- DropForeignKey
ALTER TABLE "AdoptionRequest" DROP CONSTRAINT "AdoptionRequest_userId_fkey";

-- DropTable
DROP TABLE "AdoptionRequest";

-- DropTable
DROP TABLE "Pet";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "temperament" TEXT NOT NULL,
    "medicalHistory" TEXT NOT NULL,
    "adoptionRequirements" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adoption-requests" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "status" "AdoptionStatus" NOT NULL DEFAULT 'PENDING',
    "petOwnershipExperience" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "adoption-requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "adoption-requests" ADD CONSTRAINT "adoption-requests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoption-requests" ADD CONSTRAINT "adoption-requests_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
