
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AdvisorDetails from "@/components/advisors/AdvisorDetails";
import { advisorsData } from "@/data/advisors";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const AdvisorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const advisor = advisorsData.find(advisor => advisor.id === id);
  
  if (!advisor) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-6">Advisor not found</h1>
          <p className="mb-6">The advisor you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/")}>Return to Advisor Marketplace</Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")} 
          className="mb-6 hover:bg-transparent hover:text-spring-green pl-0"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Advisors
        </Button>
        
        <AdvisorDetails advisor={advisor} />
      </div>
    </Layout>
  );
};

export default AdvisorProfile;
