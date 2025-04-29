
export interface Advisor {
  id: string;
  firmName: string;
  advisorName: string;
  profileImage: string;
  location: string;
  tagline: string;
  services: string[];
  specializations: string[];
  audience: string[];
  about: string;
  testimonials: Testimonial[];
  contactInfo: ContactInfo;
  isVerified: boolean;
  socialLinks: SocialLinks;
  mediaAssets: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientPosition?: string;
  content: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website?: string;
  calendlyLink?: string;
  grievanceOfficer?: {
    name: string;
    email: string;
    phone: string;
  }
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
}

export type LocationFilter = string;
export type SpecializationFilter = string[];
export type AudienceFilter = string;

export interface AdvisorFilters {
  location?: LocationFilter;
  specializations?: SpecializationFilter;
  audience?: AudienceFilter;
}
