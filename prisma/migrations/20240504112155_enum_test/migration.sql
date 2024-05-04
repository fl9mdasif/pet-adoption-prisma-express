/*
  Warnings:

  - The `status` column on the `adoption-requests` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "adoption-requests" DROP COLUMN "status",
ADD COLUMN     "status" "AdoptionStatus" NOT NULL DEFAULT 'PENDING';
