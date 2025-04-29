
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdvisorMarketplace } from "./AdvisorMarketplace";
import { AdvisorDetailsPage } from "./components/AdvisorDetails";

// Import this in your Next.js app or use your own data fetching method
import { advisorsData } from "./data/advisors";

export function AdvisorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdvisorMarketplace />} />
      <Route path="/advisor/:id" element={<AdvisorDetailsPage advisorsData={advisorsData} />} />
    </Routes>
  );
}

// For Next.js integration:
// 1. Copy the src/advisors folder to your project
// 2. Add framer-motion dependency if not already installed
// 3. Update your pages structure accordingly:

/*
// Example Next.js pages/advisors/index.tsx
import { AdvisorMarketplace } from '@/advisors/AdvisorMarketplace';
import YourLayout from '@/components/YourLayout';

export default function AdvisorsPage() {
  return (
    <YourLayout>
      <AdvisorMarketplace />
    </YourLayout>
  );
}

// Example Next.js pages/advisors/[id].tsx
import { useRouter } from 'next/router';
import { AdvisorDetails } from '@/advisors/components/AdvisorDetails';
import { advisorsData } from '@/advisors/data/advisors';
import YourLayout from '@/components/YourLayout';

export default function AdvisorDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const advisor = advisorsData.find(a => a.id === id);
  
  if (!advisor) {
    // Handle not found
    return (
      <YourLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-6">Advisor not found</h1>
          <p className="mb-6">The advisor you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => router.push("/advisors")}
            className="inline-flex items-center gap-2 bg-spring-green px-4 py-2 rounded-lg font-medium text-white hover:bg-opacity-90 transition-all"
          >
            Return to Advisor Marketplace
          </button>
        </div>
      </YourLayout>
    );
  }
  
  return (
    <YourLayout>
      <AdvisorDetails 
        advisor={advisor} 
        onBack={() => router.push("/advisors")} 
      />
    </YourLayout>
  );
}
*/
