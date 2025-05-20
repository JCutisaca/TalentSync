-- CreateEnum
CREATE TYPE "Modality" AS ENUM ('REMOTE', 'ON_SITE', 'HYBRID');

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('FULL_TIME', 'PART_TIME', 'FREELANCE', 'CONTRACT', 'INTERNSHIP', 'OTHER');

-- CreateTable
CREATE TABLE "JobSearch" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "modality" "Modality" NOT NULL,
    "salaryMin" INTEGER NOT NULL,
    "salaryMax" INTEGER NOT NULL,
    "jobType" "JobType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdByClerkId" TEXT NOT NULL,
    "organizationClerkId" TEXT NOT NULL,

    CONSTRAINT "JobSearch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "JobSearch_createdByClerkId_idx" ON "JobSearch"("createdByClerkId");

-- CreateIndex
CREATE INDEX "JobSearch_organizationClerkId_idx" ON "JobSearch"("organizationClerkId");
