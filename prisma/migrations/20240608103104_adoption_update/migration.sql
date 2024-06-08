/*
  Warnings:

  - Added the required column `petLocation` to the `adoption-requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adoption-requests" ADD COLUMN     "petLocation" TEXT NOT NULL;
