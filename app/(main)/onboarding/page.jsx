import OnboardingForm from "./_components/onboarding-form";
import { industries } from "@/data/industries";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const OnboardingPage = async () => {

  // Check if user has already completed onboarding
  const {isOnboarded} = await getUserOnboardingStatus();
  if (isOnboarded) {
    // Redirect to dashboard if user has already completed onboarding
    redirect("/dashboard");
  }

  // Render the onboarding form with industries data
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;