
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LOCATIONS, SPECIALIZATIONS, AUDIENCES } from "@/data/advisors";
import { AdvisorFilters as AdvisorFiltersType } from "@/types/advisor";
import { MapPin, Briefcase, Users, X } from "lucide-react";

interface AdvisorFiltersProps {
  filters: AdvisorFiltersType;
  setFilters: React.Dispatch<React.SetStateAction<AdvisorFiltersType>>;
}

const AdvisorFilters: React.FC<AdvisorFiltersProps> = ({ filters, setFilters }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleLocationChange = (value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: value,
    }));
  };

  const handleAudienceChange = (value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      audience: value,
    }));
  };

  const toggleSpecialization = (specialization: string) => {
    setFilters((prevFilters) => {
      const currentSpecializations = prevFilters.specializations || [];
      const isSelected = currentSpecializations.includes(specialization);
      
      if (isSelected) {
        return {
          ...prevFilters,
          specializations: currentSpecializations.filter(item => item !== specialization),
        };
      } else {
        return {
          ...prevFilters,
          specializations: [...currentSpecializations, specialization],
        };
      }
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  const hasActiveFilters = filters.location || filters.audience || 
                          (filters.specializations && filters.specializations.length > 0);

  return (
    <div className="md:sticky md:top-20">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Filter Advisors</h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear all
          </Button>
        )}
      </div>
      
      <div className="space-y-4">
        {/* Mobile Toggle */}
        <div className="block md:hidden">
          <Button 
            onClick={() => setShowFilters(!showFilters)} 
            variant="outline"
            className="w-full flex justify-between items-center"
          >
            <span>Filters</span>
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2">
                {Object.values(filters).flat().filter(Boolean).length}
              </Badge>
            )}
          </Button>
        </div>
        
        <div className={`space-y-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
          {/* Location Filter */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-spring-green" />
              <Label className="font-medium">Location</Label>
            </div>
            <Select value={filters.location} onValueChange={handleLocationChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
                {LOCATIONS.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Specializations Filter */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-spring-green" />
              <Label className="font-medium">Specializations</Label>
            </div>
            <div className="flex flex-wrap gap-2">
              {SPECIALIZATIONS.map((spec) => {
                const isSelected = filters.specializations?.includes(spec);
                return (
                  <Badge
                    key={spec}
                    variant={isSelected ? "default" : "outline"}
                    className={`cursor-pointer ${
                      isSelected ? "bg-spring-green" : ""
                    }`}
                    onClick={() => toggleSpecialization(spec)}
                  >
                    {spec}
                    {isSelected && (
                      <X className="ml-1 h-3 w-3" />
                    )}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Audience Filter */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-spring-green" />
              <Label className="font-medium">Target Audience</Label>
            </div>
            <Select value={filters.audience} onValueChange={handleAudienceChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Audiences</SelectItem>
                {AUDIENCES.map((audience) => (
                  <SelectItem key={audience} value={audience}>
                    {audience}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorFilters;
