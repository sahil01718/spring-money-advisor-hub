
import React from "react";
import { Advisor } from "@/types/advisor";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  Linkedin,
  Twitter,
  Facebook,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface AdvisorDetailsProps {
  advisor: Advisor;
}

const AdvisorDetails: React.FC<AdvisorDetailsProps> = ({ advisor }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-spring-soft-green to-spring-soft-blue p-6 md:p-10 rounded-lg">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img
            src={advisor.profileImage}
            alt={advisor.advisorName}
            className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-2 justify-center md:justify-start">
              <h1 className="text-3xl font-bold">{advisor.firmName}</h1>
              {advisor.isVerified && (
                <Badge className="bg-white text-spring-green border-spring-green inline-flex items-center gap-1 w-fit">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>Verified by Spring Money</span>
                </Badge>
              )}
            </div>
            <p className="text-lg my-2">{advisor.advisorName}</p>
            <div className="flex items-center justify-center md:justify-start mt-1 mb-3">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{advisor.location}</span>
            </div>
            <p className="text-lg font-medium italic">{advisor.tagline}</p>
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              {advisor.contactInfo.calendlyLink && (
                <Button className="flex gap-2 bg-spring-green hover:bg-opacity-90">
                  <Calendar className="h-4 w-4" />
                  Book a Consultation
                </Button>
              )}
              <Button variant="outline">Contact Now</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="audience">Audience</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About the Firm</h2>
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">{advisor.about}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="services" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Services Offered</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {advisor.services.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                        <div className="bg-spring-soft-green p-2 rounded-full">
                          <Star className="h-5 w-5 text-spring-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{service}</h3>
                          <p className="text-gray-600 text-sm">
                            Professional {service.toLowerCase()} services tailored to your needs
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="audience" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Who We Serve</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {advisor.audience.map((audience, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                        <div className="bg-spring-soft-purple p-2 rounded-full">
                          <Users className="h-5 w-5 text-spring-purple" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{audience}</h3>
                          <p className="text-gray-600 text-sm">
                            Specialized financial solutions for {audience.toLowerCase()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="testimonials" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Client Testimonials</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {advisor.testimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="p-5 rounded-lg border bg-gray-50 relative"
                      >
                        <div className="absolute top-3 left-3 text-4xl text-spring-purple opacity-20">❝</div>
                        <p className="italic text-gray-700 mb-4 relative z-10 pl-5">
                          {testimonial.content}
                        </p>
                        <div className="flex items-center ml-5">
                          <div className="h-10 w-10 bg-spring-soft-purple rounded-full flex items-center justify-center text-spring-purple font-bold">
                            {testimonial.clientName.charAt(0)}
                          </div>
                          <div className="ml-3">
                            <p className="font-medium">{testimonial.clientName}</p>
                            {testimonial.clientPosition && (
                              <p className="text-gray-500 text-sm">{testimonial.clientPosition}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-bold text-lg">Contact Information</h3>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-spring-green" />
                  <span>{advisor.contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-spring-green" />
                  <a href={`mailto:${advisor.contactInfo.email}`} className="text-spring-blue hover:underline">
                    {advisor.contactInfo.email}
                  </a>
                </div>
                {advisor.contactInfo.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-spring-green" />
                    <a href={advisor.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-spring-blue hover:underline">
                      Website
                    </a>
                  </div>
                )}
              </div>

              {/* Social Links */}
              {(advisor.socialLinks.linkedin || advisor.socialLinks.twitter || advisor.socialLinks.facebook) && (
                <>
                  <h4 className="font-semibold">Social Media</h4>
                  <div className="flex gap-3">
                    {advisor.socialLinks.linkedin && (
                      <a
                        href={advisor.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
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
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Specializations */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {advisor.specializations.map((spec, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-spring-soft-green text-green-700"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Grievance Officer */}
          {advisor.contactInfo.grievanceOfficer && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Grievance Redressal Officer</h3>
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
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvisorDetails;
