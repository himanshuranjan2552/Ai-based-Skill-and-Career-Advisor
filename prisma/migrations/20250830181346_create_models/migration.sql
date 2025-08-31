-- CreateEnum
CREATE TYPE "public"."DemandLevel" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "clerkUserID" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "educationalQualification" TEXT,
    "interests" TEXT[],
    "skills" TEXT[],
    "jobs" TEXT[],
    "experience" INTEGER,
    "careerGoals" TEXT[],
    "currentJob" TEXT,
    "desiredJob" TEXT,
    "skillDevelopmentGoals" TEXT[],
    "currentSkills" TEXT[],
    "desiredSkills" TEXT[],
    "industry" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Assessment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "skills" TEXT[],
    "quizScore" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "questions" JSONB[],
    "knowledgeLevel" INTEGER NOT NULL,
    "improvementAreas" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."IndustryInsights" (
    "id" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "insights" JSONB[],
    "keyTrends" JSONB[],
    "marketOutlook" JSONB[],
    "topSkills" TEXT[],
    "demandLevel" "public"."DemandLevel" NOT NULL,
    "growth" JSONB[],
    "salary" JSONB[],
    "recommendations" JSONB[],
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nextUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndustryInsights_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserID_key" ON "public"."User"("clerkUserID");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "Assessment_userId_idx" ON "public"."Assessment"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryInsights_industry_key" ON "public"."IndustryInsights"("industry");

-- CreateIndex
CREATE INDEX "IndustryInsights_industry_idx" ON "public"."IndustryInsights"("industry");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_industry_fkey" FOREIGN KEY ("industry") REFERENCES "public"."IndustryInsights"("industry") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Assessment" ADD CONSTRAINT "Assessment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
