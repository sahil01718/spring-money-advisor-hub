
import React from "react";
import { Button } from "@/components/ui/button";

const AdvisorMarketplaceHero: React.FC = () => {
  return (
    <div className="relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-spring-soft-green via-spring-soft-purple to-spring-soft-blue opacity-70" />
      
      <div className="relative container py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Find Your Trusted Financial Advisor
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Browse SEBI-Registered Investment Advisors curated by Spring Money to help you achieve your financial goals with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-spring-green hover:bg-opacity-90 text-white" size="lg">
              List Your Practice
            </Button>
            <Button variant="outline" size="lg">
              Learn About Our Vetting Process
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-spring-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="font-medium">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-spring-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <span className="font-medium">Transparent Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-spring-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className="font-medium">Personalized Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorMarketplaceHero;
