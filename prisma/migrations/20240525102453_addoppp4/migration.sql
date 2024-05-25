-- AlterTable
ALTER TABLE "adoption-requests" ADD COLUMN     "petName" TEXT NOT NULL DEFAULT 'Pet',
ADD COLUMN     "photo" TEXT[];
