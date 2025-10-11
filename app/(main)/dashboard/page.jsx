import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import DashboardView from "./_components/dashboard-view";

// Main dashboard page component
const IndustryInsightsPage = async () => {
  // Check if user has already completed onboarding
  const { isOnboarded } = await getUserOnboardingStatus();
  if (!isOnboarded) {
    // Redirect to onboarding if user has not completed onboarding
    redirect("/onboarding");
  }

  // Fetch industry insights
  const insights = await getIndustryInsights();

  return (
    <div>
      <DashboardView insights={insights} />
    </div>
  );
};

export default IndustryInsightsPage;
