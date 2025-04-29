
import React, { useState } from "react";
import { Search, CheckCircle } from "lucide-react";

interface AdvisorHeroProps {
  onSearch: (term: string) => void;
}

const AdvisorHero: React.FC<AdvisorHeroProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spring-soft-blue via-spring-soft-purple to-spring-soft-green opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-spring-green rounded-full opacity-10 blur-2xl" />
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-spring-purple rounded-full opacity-10 blur-3xl" />
      </div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white drop-shadow-md">
            <span className="block">Find Your Trusted</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Financial Advisor</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-xl text-white/90 drop-shadow-sm">
            Connect with SEBI-Registered Investment Advisors curated by Spring Money to help you achieve your financial goals with confidence.
          </p>
          
          <div className="mt-10">
            <form onSubmit={handleSearch} className="flex w-full max-w-lg backdrop-blur-md bg-white/20 rounded-xl p-1.5 shadow-lg">
              <div className="relative flex-grow">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-white/70" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full rounded-lg border-0 bg-transparent py-3 pl-10 pr-3 text-white placeholder:text-white/70 focus:ring-0 sm:text-sm"
                  placeholder="Search by advisor name, location or specialization..."
                />
              </div>
              <button
                type="submit"
                className="ml-2 flex-shrink-0 rounded-lg bg-white py-3 px-5 text-sm font-semibold text-spring-green shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Search
              </button>
            </form>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-full shadow-md">
                <CheckCircle className="h-5 w-5 text-spring-green" />
              </div>
              <span className="text-white font-medium">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-full shadow-md">
                <CheckCircle className="h-5 w-5 text-spring-green" />
              </div>
              <span className="text-white font-medium">Transparent Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-full shadow-md">
                <CheckCircle className="h-5 w-5 text-spring-green" />
              </div>
              <span className="text-white font-medium">Personalized Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorHero;
