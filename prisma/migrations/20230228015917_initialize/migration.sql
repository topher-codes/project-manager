/*
  Warnings:

  - The values [TODO,IN_PROGRESS,DONE] on the enum `TASK_STATUS` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TASK_STATUS_new" AS ENUM ('NOT_STARTED', 'STARTED', 'COMPLETED');
ALTER TABLE "Task" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Task" ALTER COLUMN "status" TYPE "TASK_STATUS_new" USING ("status"::text::"TASK_STATUS_new");
ALTER TYPE "TASK_STATUS" RENAME TO "TASK_STATUS_old";
ALTER TYPE "TASK_STATUS_new" RENAME TO "TASK_STATUS";
DROP TYPE "TASK_STATUS_old";
ALTER TABLE "Task" ALTER COLUMN "status" SET DEFAULT 'NOT_STARTED';
COMMIT;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "status" SET DEFAULT 'NOT_STARTED';
