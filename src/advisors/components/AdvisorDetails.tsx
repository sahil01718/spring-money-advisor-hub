
import React, { useState } from "react";
import { Advisor } from "../types";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  MapPin, Phone, Mail, Globe, Calendar, 
  Linkedin, Twitter, Facebook, Users, Star, 
  CheckCircle, ChevronLeft, Share2
} from "lucide-react";

interface AdvisorDetailsProps {
  advisor: Advisor;
  onBack?: () => void;
}

// Use this component directly with an advisor prop, or in a route with useParams
const AdvisorDetails: React.FC<AdvisorDetailsProps> = ({ advisor, onBack }) => {
  const [activeTab, setActiveTab] = useState("about");
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 pt-6 sm:px-6 lg:px-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center text-gray-600 hover:text-spring-green transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Back to Advisors</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="mt-6 bg-white shadow-md rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-spring-green/90 to-spring-blue/90 p-8 md:p-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex-shrink-0">
                <img
                  src={advisor.profileImage}
                  alt={advisor.advisorName}
                  className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center md:justify-start">
                  <h1 className="text-3xl font-bold text-white">{advisor.firmName}</h1>
                  {advisor.isVerified && (
                    <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white border border-white/30">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">Verified by Spring Money</span>
                    </div>
                  )}
                </div>
                <p className="text-lg mt-2 text-white/90">{advisor.advisorName}</p>
                <div className="flex items-center justify-center md:justify-start mt-2">
                  <MapPin className="h-4 w-4 mr-1 text-white/80" />
                  <span className="text-white/90">{advisor.location}</span>
                </div>
                <p className="mt-4 text-lg font-medium text-white italic">"{advisor.tagline}"</p>
                <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                  {advisor.contactInfo.calendlyLink && (
                    <a 
                      href={advisor.contactInfo.calendlyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg font-medium text-spring-green hover:bg-opacity-90 transition-all"
                    >
                      <Calendar className="h-4 w-4" />
                      Book a Consultation
                    </a>
                  )}
                  <a 
                    href={`mailto:${advisor.contactInfo.email}`}
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 backdrop-blur-sm px-4 py-2.5 rounded-lg font-medium text-white hover:bg-white/10 transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Now
                  </a>
                  <button 
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 backdrop-blur-sm p-2.5 rounded-lg text-white hover:bg-white/10 transition-all"
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {["about", "services", "audience", "testimonials"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab 
                      ? 'border-spring-green text-spring-green' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className={`bg-white shadow-sm rounded-xl p-6 ${activeTab !== 'about' ? 'hidden' : ''}`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">About the Firm</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{advisor.about}</p>
              </div>
            </div>
            
            <div className={`bg-white shadow-sm rounded-xl p-6 ${activeTab !== 'services' ? 'hidden' : ''}`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Services Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advisor.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="bg-spring-soft-green p-2 rounded-full flex-shrink-0">
                      <Star className="h-5 w-5 text-spring-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{service}</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Professional {service.toLowerCase()} services tailored to your needs
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`bg-white shadow-sm rounded-xl p-6 ${activeTab !== 'audience' ? 'hidden' : ''}`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Who We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advisor.audience.map((audience, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="bg-spring-soft-purple p-2 rounded-full flex-shrink-0">
                      <Users className="h-5 w-5 text-spring-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{audience}</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Specialized financial solutions for {audience.toLowerCase()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`bg-white shadow-sm rounded-xl p-6 ${activeTab !== 'testimonials' ? 'hidden' : ''}`}>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Client Testimonials</h2>
              <div className="space-y-6">
                {advisor.testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="p-6 rounded-lg border border-gray-100 bg-gray-50 relative shadow-sm"
                  >
                    <div className="absolute top-4 left-4 text-4xl text-spring-purple opacity-20 font-serif">❝</div>
                    <p className="italic text-gray-700 mb-4 relative z-10 pl-6">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center pl-6">
                      <div className="h-10 w-10 bg-spring-soft-purple rounded-full flex items-center justify-center text-spring-purple font-bold">
                        {testimonial.clientName.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{testimonial.clientName}</p>
                        {testimonial.clientPosition && (
                          <p className="text-gray-500 text-sm">{testimonial.clientPosition}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white shadow-sm rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-spring-soft-green rounded-full">
                    <Phone className="h-4 w-4 text-spring-green" />
                  </div>
                  <span>{advisor.contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-spring-soft-green rounded-full">
                    <Mail className="h-4 w-4 text-spring-green" />
                  </div>
                  <a 
                    href={`mailto:${advisor.contactInfo.email}`} 
                    className="text-spring-blue hover:underline"
                  >
                    {advisor.contactInfo.email}
                  </a>
                </div>
                {advisor.contactInfo.website && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-spring-soft-green rounded-full">
                      <Globe className="h-4 w-4 text-spring-green" />
                    </div>
                    <a 
                      href={advisor.contactInfo.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-spring-blue hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>

              {/* Social Links */}
              {(advisor.socialLinks.linkedin || advisor.socialLinks.twitter || advisor.socialLinks.facebook) && (
                <div className="mt-6">
                  <h4 className="font-medium text-gray-700 mb-3">Connect With Us</h4>
                  <div className="flex gap-3">
                    {advisor.socialLinks.linkedin && (
                      <a
                        href={advisor.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {advisor.socialLinks.twitter && (
                      <a
                        href={advisor.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {advisor.socialLinks.facebook && (
                      <a
                        href={advisor.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Specializations */}
            <div className="bg-white shadow-sm rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {advisor.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-spring-soft-green px-3 py-1 text-sm font-medium text-green-700"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Grievance Officer */}
            {advisor.contactInfo.grievanceOfficer && (
              <div className="bg-white shadow-sm rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Grievance Redressal Officer</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Name:</span>{" "}
                    {advisor.contactInfo.grievanceOfficer.name}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href={`mailto:${advisor.contactInfo.grievanceOfficer.email}`}
                      className="text-spring-blue hover:underline"
                    >
                      {advisor.contactInfo.grievanceOfficer.email}
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Phone:</span>{" "}
                    {advisor.contactInfo.grievanceOfficer.phone}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Router wrapper component to use params
export function AdvisorDetailsPage({ advisorsData }: { advisorsData: Advisor[] }) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const advisor = advisorsData.find(advisor => advisor.id === id);
  
  if (!advisor) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-6">Advisor not found</h1>
        <p className="mb-6">The advisor you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-spring-green px-4 py-2 rounded-lg font-medium text-white hover:bg-opacity-90 transition-all"
        >
          Return to Advisor Marketplace
        </button>
      </div>
    );
  }
  
  return <AdvisorDetails advisor={advisor} />;
}

export default AdvisorDetails;
