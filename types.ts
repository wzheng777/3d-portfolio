export enum SectionType {
  PROFILE = 'PROFILE',
  EXPERIENCE = 'EXPERIENCE',
  SKILLS = 'SKILLS',
  EDUCATION = 'EDUCATION',
}

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
    highlights: string[];
  };
  skills: {
    languages: string[];
    cloudDevOps: string[];
    frameworks: string[];
    tools: string[];
    integration: string[];
  };
  experience: Job[];
  education: Education[];
  volunteer: {
    role: string;
    organization: string;
    period: string;
  }[];
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      planeGeometry: any;
      meshBasicMaterial: any;
      fog: any;
      ambientLight: any;
      spotLight: any;
    }
  }
}