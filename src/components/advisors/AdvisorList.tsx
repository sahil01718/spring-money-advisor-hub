
import React from "react";
import { Advisor, AdvisorFilters } from "@/types/advisor";
import AdvisorCard from "./AdvisorCard";

interface AdvisorListProps {
  advisors: Advisor[];
  filters: AdvisorFilters;
}

const AdvisorList: React.FC<AdvisorListProps> = ({ advisors, filters }) => {
  const filteredAdvisors = advisors.filter((advisor) => {
    // Filter by location
    if (filters.location && advisor.location !== filters.location) {
      return false;
    }

    // Filter by specializations
    if (filters.specializations && filters.specializations.length > 0) {
      const hasSpecialization = filters.specializations.some((spec) =>
        advisor.specializations.includes(spec)
      );
      if (!hasSpecialization) {
        return false;
      }
    }

    // Filter by audience
    if (filters.audience && !advisor.audience.includes(filters.audience)) {
      return false;
    }

    return true;
  });

  if (filteredAdvisors.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No advisors found</h3>
        <p className="text-gray-600">
          Try adjusting your filters to see more results
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-500 text-sm">
        Showing {filteredAdvisors.length} out of {advisors.length} advisors
      </p>
      <div className="space-y-6">
        {filteredAdvisors.map((advisor) => (
          <AdvisorCard key={advisor.id} advisor={advisor} />
        ))}
      </div>
    </div>
  );
};

export default AdvisorList;
