// Personal Info Types
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    whatsappMessage: string;
    location: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    website: string;
  };
  cv: {
    path: string;
  };
  website: {
    url: string;
    metaImage: string;
  };
}

// Services Types
export interface Service {
  icon: string;
  title: string;
  description: string;
}

// Skills Types
export interface Skill {
  name: string;
  percentage: number;
}

// Projects Types
export interface Project {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  tags: string[];
}

// Stats Types
export interface Stat {
  value: string;
  label: string;
}

// Experience Types
export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: string;
}

export interface Experience {
  workExperience: ExperienceItem[];
  education: ExperienceItem[];
  organizations: ExperienceItem[];
}

// Navigation Types
export interface NavLink {
  href: string;
  label: string;
}

// Testimonials Types
export interface Testimonial {
  author: string;
  position: string;
  image: string;
  content: string;
}
