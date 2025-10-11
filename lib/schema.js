import z from "zod";

// Zod schema for onboarding form validation
export const onboardingSchema = z.object({
  industry: z.string({
    required_error: "Please select your industry",
  }),
  subIndustry: z.string({
    required_error: "Please select your specialization",
  }),
  bio: z.string().max(500, "Bio must be at most 500 characters").optional(),
  experience: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(
      z
        .number()
        .min(0, "Experience must be at least 0 years")
        .max(50, "Experience must be at most 50 years")
    ),
  skills: z
    .string()
    .transform((val) =>
      val
        ? val
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean)
        : undefined
    )
    .optional(),
});
