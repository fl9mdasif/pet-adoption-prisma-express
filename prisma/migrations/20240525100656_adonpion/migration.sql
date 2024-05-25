/*
  Warnings:

  - Added the required column `requesterContactNo` to the `adoption-requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requesterEmail` to the `adoption-requests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requesterName` to the `adoption-requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adoption-requests" ADD COLUMN     "requesterContactNo" TEXT NOT NULL,
ADD COLUMN     "requesterEmail" TEXT NOT NULL,
ADD COLUMN     "requesterName" TEXT NOT NULL;
