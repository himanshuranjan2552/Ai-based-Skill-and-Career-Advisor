import { GoogleGenerativeAI } from "@google/generative-ai";
import { db } from "../prisma";
import { inngest } from "./client";

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateAIIndustryInsights = inngest.createFunction(
  { name: "Generate AI Industry Insights" },
  { cron: "0 0 * * 0" }, // Every Sunday at midnight
  async ({ step }) => {
    const industries = await step.run("Fetch Industries", async () => {
      // Fetch distinct industries from the database
      return await db.IndustryInsights.findMany({
        select: { industry: true },
      });
    });

    // Generate insights for each industry
    for (const { industry } of industries) {
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

      const response = await step.ai.wrap(
        "gemini",
        async (prompt) => {
          return await model.generateContent(prompt);
        },
        prompt
      );

      // Parse and clean the response to extract JSON
      const text = response.candidates[0].content.parts[0].text || "";
      const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
      const insights = JSON.parse(cleanedText);

      await step.run(`Update Insights for ${industry}`, async () => {
        // Update the industry insights in the database
        await db.IndustryInsights.update({
          where: { industry },
          data: {
            ...insights,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
          },
        });
      });
    }
  }
);
