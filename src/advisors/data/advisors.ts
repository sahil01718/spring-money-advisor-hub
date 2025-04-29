
import { Advisor } from "../types";

export const LOCATIONS = [
  "Mumbai", 
  "Delhi", 
  "Bangalore", 
  "Chennai", 
  "Hyderabad", 
  "Pune", 
  "Ahmedabad", 
  "Kolkata"
];

export const SPECIALIZATIONS = [
  "Financial Planning",
  "Retirement Planning",
  "Tax Planning",
  "Estate Planning",
  "NRI Services",
  "Mutual Funds",
  "Stock Investments",
  "Debt Planning",
  "Insurance Planning",
  "Real Estate Investments"
];

export const AUDIENCES = [
  "Salaried Professionals",
  "Business Owners",
  "High Net Worth Individuals",
  "NRIs",
  "Retired Individuals",
  "Early Career Professionals",
  "Women Investors"
];

export const advisorsData: Advisor[] = [
  {
    id: "adv-001",
    firmName: "WealthFirst Advisors",
    advisorName: "Priya Sharma",
    profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    location: "Mumbai",
    tagline: "Building financial freedom through disciplined planning",
    services: ["Financial Planning", "Retirement Planning", "Tax Optimization"],
    specializations: ["Financial Planning", "Retirement Planning", "Tax Planning"],
    audience: ["Salaried Professionals", "Business Owners"],
    about: "WealthFirst Advisors is a boutique financial advisory firm specializing in holistic financial planning for professionals and business owners. With over 15 years of experience, we've helped 500+ clients achieve their financial goals through personalized strategies and continuous support.",
    testimonials: [
      {
        id: "test-001",
        clientName: "Raj Mehta",
        clientPosition: "IT Professional",
        content: "Priya's strategic financial advice helped me plan my retirement 10 years ahead of schedule. Her tax planning saved me over ₹3 lakhs annually!"
      },
      {
        id: "test-002",
        clientName: "Sonal Patel",
        clientPosition: "Doctor",
        content: "The team at WealthFirst completely transformed our family's financial outlook. They're thorough, responsive, and genuinely care about our goals."
      }
    ],
    contactInfo: {
      phone: "+91 98765 43210",
      email: "contact@wealthfirst.in",
      website: "https://www.wealthfirstadvisors.in",
      calendlyLink: "https://calendly.com/wealthfirst/consultation",
      grievanceOfficer: {
        name: "Anand Kapoor",
        email: "grievance@wealthfirst.in",
        phone: "+91 98765 43211"
      }
    },
    isVerified: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/priyasharma",
      twitter: "https://twitter.com/wealthfirstadv",
      facebook: "https://facebook.com/wealthfirstadvisors"
    },
    mediaAssets: []
  },
  {
    id: "adv-002",
    firmName: "GrowthPath Financial",
    advisorName: "Vikram Singh",
    profileImage: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    location: "Bangalore",
    tagline: "Simplifying wealth building for tech professionals",
    services: ["Financial Planning", "Stock Investments", "NRI Services"],
    specializations: ["Stock Investments", "NRI Services", "Financial Planning"],
    audience: ["Salaried Professionals", "NRIs", "High Net Worth Individuals"],
    about: "GrowthPath Financial specializes in investment strategies tailored for tech professionals and NRIs. Our data-driven approach focuses on optimal asset allocation, tax efficiency, and long-term wealth creation through Indian market opportunities.",
    testimonials: [
      {
        id: "test-003",
        clientName: "Aditya Nair",
        clientPosition: "Software Engineer, USA",
        content: "As an NRI, managing investments in India was challenging until I found GrowthPath. Vikram understands the unique needs of tech professionals and has guided me to appropriate investment vehicles."
      }
    ],
    contactInfo: {
      phone: "+91 87654 32109",
      email: "hello@growthpath.in",
      website: "https://www.growthpath.in",
      calendlyLink: "https://calendly.com/growthpath/meeting",
      grievanceOfficer: {
        name: "Meera Patel",
        email: "grievance@growthpath.in",
        phone: "+91 87654 32108"
      }
    },
    isVerified: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/vikramsingh",
      twitter: "https://twitter.com/growthpathfin"
    },
    mediaAssets: []
  },
  {
    id: "adv-003",
    firmName: "Retire Rich Consultants",
    advisorName: "Amol Desai",
    profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    location: "Pune",
    tagline: "Retirement planning experts for professionals over 45",
    services: ["Retirement Planning", "Tax Planning", "Estate Planning"],
    specializations: ["Retirement Planning", "Estate Planning", "Tax Planning"],
    audience: ["Retired Individuals", "High Net Worth Individuals"],
    about: "Retire Rich Consultants has been handholding clients through their retirement journey since 2005. We specialize in creating sustainable retirement income plans, optimizing pension benefits, and protecting wealth for future generations through proper estate planning.",
    testimonials: [
      {
        id: "test-004",
        clientName: "Suresh Menon",
        clientPosition: "Retired Bank Executive",
        content: "Amol helped me reorganize my retirement corpus to generate an additional 18% income without increasing risk. His insights on estate planning also ensured smooth wealth transfer to my children."
      },
      {
        id: "test-005",
        clientName: "Leela Krishnan",
        clientPosition: "Retired Professor",
        content: "The peace of mind that comes from knowing your retirement is well-planned is priceless. Retire Rich Consultants delivered exactly that!"
      }
    ],
    contactInfo: {
      phone: "+91 76543 21098",
      email: "info@retirerich.in",
      website: "https://www.retirerich.in",
      grievanceOfficer: {
        name: "Prakash Joshi",
        email: "grievance@retirerich.in",
        phone: "+91 76543 21099"
      }
    },
    isVerified: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/amoldesai",
      facebook: "https://facebook.com/retirerichconsultants"
    },
    mediaAssets: []
  },
  {
    id: "adv-004",
    firmName: "Women's Wealth Advisors",
    advisorName: "Kavita Reddy",
    profileImage: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    location: "Hyderabad",
    tagline: "Empowering women through financial literacy and independence",
    services: ["Financial Planning", "Insurance Planning", "Investment Advisory"],
    specializations: ["Financial Planning", "Insurance Planning", "Mutual Funds"],
    audience: ["Women Investors", "Salaried Professionals"],
    about: "Women's Wealth Advisors is India's first financial advisory focused exclusively on women investors. We understand the unique challenges women face in their financial journeys and provide supportive, educational guidance to build confidence in financial decision-making.",
    testimonials: [
      {
        id: "test-006",
        clientName: "Deepa Agarwal",
        clientPosition: "Entrepreneur",
        content: "Kavita didn't just help me organize my finances; she empowered me with knowledge. The workshops on investment basics completely changed my approach to money."
      }
    ],
    contactInfo: {
      phone: "+91 65432 10987",
      email: "hello@womenswealthadvisors.in",
      website: "https://www.womenswealthadvisors.in",
      calendlyLink: "https://calendly.com/womenswealthadv/session",
      grievanceOfficer: {
        name: "Sunita Sharma",
        email: "grievance@womenswealthadvisors.in",
        phone: "+91 65432 10988"
      }
    },
    isVerified: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/kavitareddy",
      twitter: "https://twitter.com/womenswealthadv",
      facebook: "https://facebook.com/womenswealthadvisors"
    },
    mediaAssets: []
  },
  {
    id: "adv-005",
    firmName: "TaxSmart Wealth",
    advisorName: "Rahul Khanna",
    profileImage: "https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    location: "Delhi",
    tagline: "Maximizing returns through tax-efficient investment strategies",
    services: ["Tax Planning", "Financial Planning", "Retirement Planning"],
    specializations: ["Tax Planning", "Financial Planning", "Retirement Planning"],
    audience: ["Business Owners", "High Net Worth Individuals"],
    about: "TaxSmart Wealth combines tax expertise with investment knowledge to create highly efficient financial strategies. Our team of CA-RIAs works with business owners and HNIs to structure investments, businesses, and estates in the most tax-advantageous manner possible.",
    testimonials: [
      {
        id: "test-007",
        clientName: "Vishal Agarwal",
        clientPosition: "Business Owner",
        content: "Rahul's team restructured my business investments and saved me over ₹42 lakhs in taxes in just one year. Their comprehensive approach considers both immediate tax implications and long-term wealth goals."
      }
    ],
    contactInfo: {
      phone: "+91 54321 09876",
      email: "consult@taxsmart.in",
      website: "https://www.taxsmartwealthadvisors.in",
      calendlyLink: "https://calendly.com/taxsmart/consultation",
      grievanceOfficer: {
        name: "Ravi Kumar",
        email: "grievance@taxsmart.in",
        phone: "+91 54321 09877"
      }
    },
    isVerified: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/rahulkhanna",
      twitter: "https://twitter.com/taxsmartwealthadv"
    },
    mediaAssets: []
  },
  {
    id: "adv-006",
    firmName: "Early Wealth Creators",
    advisorName: "Nikhil Menon",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    location: "Bangalore",
    tagline: "Starting early, growing consistently, achieving freedom",
    services: ["Financial Planning", "Stock Investments", "Mutual Funds"],
    specializations: ["Financial Planning", "Stock Investments", "Mutual Funds"],
    audience: ["Early Career Professionals", "Salaried Professionals"],
    about: "Early Wealth Creators specializes in guiding young professionals in their 20s and 30s to build strong financial foundations. We focus on habit-based investing, technology-enabled tracking, and long-term compounding strategies tailored for millennials and Gen Z investors.",
    testimonials: [
      {
        id: "test-008",
        clientName: "Neha Singh",
        clientPosition: "Software Engineer",
        content: "Nikhil's approach completely changed my relationship with money. His micro-investing strategy helped me accumulate my first ₹10 lakhs while still enjoying life's experiences."
      }
    ],
    contactInfo: {
      phone: "+91 43210 98765",
      email: "hello@earlywealth.in",
      website: "https://www.earlywealth.in",
      calendlyLink: "https://calendly.com/earlywealth/chat",
      grievanceOfficer: {
        name: "Pradeep Thomas",
        email: "grievance@earlywealth.in",
        phone: "+91 43210 98766"
      }
    },
    isVerified: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/nikhilmenon",
      twitter: "https://twitter.com/earlywealth",
      facebook: "https://facebook.com/earlywealthcreators"
    },
    mediaAssets: []
  }
];
