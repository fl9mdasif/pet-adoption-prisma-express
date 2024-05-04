/*
  Warnings:

  - Changed the type of `status` on the `adoption-requests` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "adoption-requests" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL;

-- DropEnum
DROP TYPE "UserRoles";

-- DropEnum
DROP TYPE "UserStatus";
