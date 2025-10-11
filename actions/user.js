"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAIIndustryInsights } from "./dashboard";

// Function to update user profile and reset career insights if industry changes
export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("User not authenticated");

  const user = await db.user.findUnique({
    where: { clerkUserID: userId },
  });

  if (!user) throw new Error("User not found");

  // Use a transaction to ensure data integrity
  try {
    const result = await db.user.$transaction(
      async (tx) => {
        // if industry has changed, update the user and reset the career insights
        let IndustryInsights = await tx.IndustryInsights.findUnique({
          where: {
            industry: data.industry,
          },
        });

        // If industry insights do not exist, create a new record with default values
        if (!IndustryInsights) {
        const insights = await generateAIIndustryInsights(data.industry);
        
            IndustryInsights = await db.IndustryInsights.create({
              data: {
                industry: data.industry,
                ...insights,
                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
              },
            });
        }

        // Update user with new data and reset career insights
        const updateUser = await tx.user.update({
          where: { clerkUserID: userId },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { updateUser, IndustryInsights };
      },
      {
        timeout: 10000, // 10 seconds
      }
    );

    return {success:true, ...result};

  } catch (error) {
    console.error("Error updating user and industry insights: ", error.message);
    throw new Error("Failed to update user profile: " + error.message);
  }
}

// Function to get user onboarding status
export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("User not authenticated");

  const user = await db.user.findUnique({
    where: { clerkUserID: userId },
  });

  if (!user) throw new Error("User not found");

  // Check if the user has completed onboarding by verifying required fields
  try {
    const user = await db.user.findUnique({
      where: { clerkUserID: userId },
      select: {
        industry: true,
      },
    });
    return{
      isOnboarded: !!user?.industry,
    }
  } catch (error) {
    console.error("Error fetching user onboarding status: ", error.message);
    throw new Error("Failed to retrieve user onboarding status");
  }
}