import { Inngest } from "inngest";

// Initialize Inngest client with Gemini credentials
export const inngest = new Inngest({
  id: "path-nexus",
  name: "Path Nexus",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
