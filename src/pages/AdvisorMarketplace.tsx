
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import AdvisorMarketplaceHero from "@/components/hero/AdvisorMarketplaceHero";
import AdvisorFilters from "@/components/advisors/AdvisorFilters";
import AdvisorList from "@/components/advisors/AdvisorList";
import { advisorsData } from "@/data/advisors";
import { AdvisorFilters as AdvisorFiltersType } from "@/types/advisor";

const AdvisorMarketplace: React.FC = () => {
  const [filters, setFilters] = useState<AdvisorFiltersType>({});

  return (
    <Layout>
      <AdvisorMarketplaceHero />
      
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <AdvisorFilters filters={filters} setFilters={setFilters} />
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <AdvisorList advisors={advisorsData} filters={filters} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdvisorMarketplace;
