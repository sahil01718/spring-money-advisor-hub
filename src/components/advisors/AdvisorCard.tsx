
import React from "react";
import { Link } from "react-router-dom";
import { Advisor } from "@/types/advisor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Check } from "lucide-react";

interface AdvisorCardProps {
  advisor: Advisor;
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({ advisor }) => {
  return (
    <Card className="overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <img
              src={advisor.profileImage}
              alt={advisor.advisorName}
              className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-2 border-gray-100"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-xl">{advisor.firmName}</h3>
                <p className="text-sm text-gray-600">{advisor.advisorName}</p>
              </div>
              {advisor.isVerified && (
                <Badge className="bg-spring-soft-purple text-spring-purple border-spring-purple flex items-center gap-1">
                  <Check className="h-3 w-3" />
                  <span>Verified</span>
                </Badge>
              )}
            </div>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
              <span>{advisor.location}</span>
            </div>
            <p className="mt-2 text-gray-700">{advisor.tagline}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Services</p>
          <div className="flex flex-wrap gap-2">
            {advisor.services.map((service, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-spring-soft-green text-green-700 hover:bg-spring-soft-green"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <CardFooter className="border-t bg-gray-50 p-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Serves: {advisor.audience.slice(0, 2).join(", ")}
            {advisor.audience.length > 2 && " & more"}
          </span>
          <Link to={`/advisor/${advisor.id}`}>
            <Button variant="default" className="flex gap-2">
              <span>View Profile</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AdvisorCard;
