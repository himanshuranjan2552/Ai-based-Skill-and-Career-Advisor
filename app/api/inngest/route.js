import { inngest } from "@/lib/inngest/client";
import { generateAIIndustryInsights } from "@/lib/inngest/functions";
import { serve } from "inngest/next";

// Serve Inngest functions as API routes
export const { GET, POST, PUT, DELETE } = serve({
  client: inngest,
  functions: [generateAIIndustryInsights],
});
