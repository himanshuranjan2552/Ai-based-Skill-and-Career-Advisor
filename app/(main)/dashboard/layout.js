import React, { Suspense } from "react";
import { CircleLoader } from "react-spinners";

// This is the layout for the dashboard page and its sub-pages
const DashboardLayout = ({ children }) => {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">Industry Insights</h1>
      </div>
      <Suspense fallback={<CircleLoader className="mt-4 w-full" color="#BEAC94B0" />}>
        {children}
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
