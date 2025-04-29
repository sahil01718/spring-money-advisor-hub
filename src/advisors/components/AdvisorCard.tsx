
import React from "react";
import { Link } from "react-router-dom";
import { Advisor } from "../types";
import { MapPin, ArrowRight, Check } from "lucide-react";

interface AdvisorCardProps {
  advisor: Advisor;
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({ advisor }) => {
  return (
    <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      {/* Colored accent bar at the top */}
      <div className="h-2 bg-gradient-to-r from-spring-green to-spring-blue" />
      
      <div className="p-6 flex-grow">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img
              src={advisor.profileImage}
              alt={advisor.advisorName}
              className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-spring-green transition-colors duration-300">
                  {advisor.firmName}
                </h3>
                <p className="text-sm text-gray-600">{advisor.advisorName}</p>
              </div>
              {advisor.isVerified && (
                <div className="bg-spring-soft-purple px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium text-spring-purple">
                  <Check className="h-3 w-3" />
                  <span>Verified</span>
                </div>
              )}
            </div>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
              <span>{advisor.location}</span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-700 line-clamp-2">{advisor.tagline}</p>

        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {advisor.services.slice(0, 3).map((service, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-spring-soft-green px-2.5 py-0.5 text-xs font-medium text-green-800"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100 bg-gray-50 p-4 mt-auto">
        <div className="w-full flex justify-between items-center">
          <span className="text-xs text-gray-500">
            Serves: {advisor.audience.slice(0, 2).join(", ")}
            {advisor.audience.length > 2 && " & more"}
          </span>
          <Link 
            to={`/advisor/${advisor.id}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg bg-spring-green text-white hover:bg-opacity-90 transition-all"
          >
            <span>View Profile</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvisorCard;
