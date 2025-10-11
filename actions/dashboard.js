"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to generate industry insights using Google Gemini API
export const generateAIIndustryInsights = async (industry) => {
  const prompt = `
          Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
          {
            "salaryRanges": [
              { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
            ],
            "growth": "string",
            "demandLevel": "High" | "Medium" | "Low",
            "topSkills": ["skill1", "skill2"],
            "marketOutlook": "Positive" | "Neutral" | "Negative",
            "keyTrends": ["trend1", "trend2"],
            "recommendedSkills": ["skill1", "skill2"],
            "recommendations": ["recommendation1", "recommendation2"]
          }
          
          IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
          Include at least 5 common roles for salary ranges.
          Recommendations should be actionable career advice and learning resources.
          Growth should be a percentage with little context and explanation.
          Include at least 5 skills and trends.
        `;

  // Call the Gemini model with the prompt
  const result = await model.generateContent(prompt);

  // Parse and clean the response to extract JSON
  const response = result.response;
  const text = response.text();
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

  return JSON.parse(cleanedText);
};

// Function to get or create industry insights for the authenticated user
export async function getIndustryInsights() {
  // Ensure the user is authenticated
  const { userId } = await auth();
  if (!userId) throw new Error("User not authenticated");

  const user = await db.user.findUnique({
    where: { clerkUserID: userId },
    include: { industryInsights: true },
  });

  if (!user) throw new Error("User not found");

  // If user does not have industry insights, generate and create them
  if (!user.industryInsights) {
    const insights = await generateAIIndustryInsights(user.industry);

    const industryInsight = await db.IndustryInsights.create({
      data: {
        industry: user.industry,
        ...insights,
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      },
    });

    return industryInsight;
  }

  return user.industryInsights;
}
