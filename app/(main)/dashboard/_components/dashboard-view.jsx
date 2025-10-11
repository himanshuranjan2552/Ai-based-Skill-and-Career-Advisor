"use client";
import { Badge } from "@/components/ui/badge";
import { format, formatDistanceToNow } from "date-fns";
import { LineChart, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

// Component to display dashboard insights
const DashboardView = ({ insights }) => {
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000,
  }));

  // Function to get color based on demand level
  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  // Function to get icon and color based on market trend
  const getMarketTrendColor = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "increasing":
        return { icon: TrendingUp, color: "bg-green-500" };
      case "decreasing":
        return { icon: TrendingDown, color: "bg-red-500" };
      case "stable":
        return { icon: LineChart, color: "bg-yellow-500" };
      default:
        return { icon: LineChart, color: "bg-gray-500" };
    }
  };

  // Get market trend icon and color
  const trendIcon = getMarketTrendColor(insights.marketTrend).icon;
  const trendColor = getMarketTrendColor(insights.marketTrend).color;

  // Format last updated and next update dates
  const lastUpdated = format(new Date(insights.lastUpdated), "MMMM dd, yyyy");
  const nextUpdate = formatDistanceToNow(new Date(insights.nextUpdate), {
    addSuffix: true,
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Badge variant="outline">Last Updated: {lastUpdated}</Badge>
      </div>
    </div>
  );
};

export default DashboardView;
