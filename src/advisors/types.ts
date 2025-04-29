
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

// Simplified filter types - can be expanded if you want to add filters back later
export interface AdvisorFilters {
  location?: string;
  specializations?: string[];
  audience?: string;
}
