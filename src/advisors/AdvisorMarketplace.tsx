
import React, { useState } from "react";
import AdvisorList from "./components/AdvisorList";
import AdvisorHero from "./components/AdvisorHero";
import { Advisor } from "./types";

// Import this in your Next.js app or use your own data fetching method
import { advisorsData } from "./data/advisors";

export function AdvisorMarketplace() {
  // State for search functionality (replacing filters)
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter advisors based on search term
  const filteredAdvisors = advisorsData.filter((advisor) => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      advisor.firmName.toLowerCase().includes(searchLower) ||
      advisor.advisorName.toLowerCase().includes(searchLower) ||
      advisor.location.toLowerCase().includes(searchLower) ||
      advisor.specializations.some(spec => spec.toLowerCase().includes(searchLower)) ||
      advisor.services.some(service => service.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <AdvisorHero onSearch={setSearchTerm} />
      
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Expert Financial Advisors</h2>
          <p className="text-lg text-gray-600">
            Connect with SEBI-Registered professionals who can guide your financial journey
          </p>
        </div>
        
        <div className="space-y-1">
          <p className="text-sm text-gray-500">
            {filteredAdvisors.length} advisors available
          </p>
          <AdvisorList advisors={filteredAdvisors} />
        </div>
      </div>
    </div>
  );
}
