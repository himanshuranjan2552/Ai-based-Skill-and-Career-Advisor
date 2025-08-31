import { inngest } from "@/lib/inngest/client";
import { serve } from "inngest/next";

export const { GET, POST, PUT, DELETE } = serve({
  client: inngest,
  functions: [
    // Define your Inngest functions here
  ],
});
