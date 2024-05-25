/*
  Warnings:

  - You are about to drop the column `adoptionStatus` on the `pets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "adoptionStatus",
ADD COLUMN     "petAdoptionStatus" BOOLEAN NOT NULL DEFAULT false;
