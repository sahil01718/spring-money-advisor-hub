
import React from "react";
import { AdvisorMarketplace } from "./AdvisorMarketplace";

// Export the main component for easy import in your Next.js project
export default function AdvisorsModule() {
  return <AdvisorMarketplace />;
}

// Also export individual components for flexibility
export * from "./AdvisorMarketplace";
export * from "./components/AdvisorCard";
export * from "./components/AdvisorDetails";
export * from "./types";
