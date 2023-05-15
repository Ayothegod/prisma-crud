/*
  Warnings:

  - You are about to drop the column `description` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - Added the required column `commentData` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postData` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "commentData" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "postData" TEXT NOT NULL;
