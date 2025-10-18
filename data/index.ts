import personalInfoData from "./personal-info.json";
import servicesData from "./services.json";
import skillsData from "./skills.json";
import projectsData from "./projects.json";
import statsData from "./stats.json";
import experienceData from "./experience.json";
import navigationData from "./navigation.json";
import testimonialsData from "./testimonials.json";

import type {
  PersonalInfo,
  Service,
  Skill,
  Project,
  Stat,
  Experience,
  NavLink,
  Testimonial,
} from "./types";

// Export typed data
export const personalInfo = personalInfoData as PersonalInfo;
export const services = servicesData as Service[];
export const skills = skillsData as Skill[];
export const projects = projectsData as Project[];
export const stats = statsData as Stat[];
export const experience = experienceData as Experience;
export const navigation = navigationData as NavLink[];
export const testimonials = testimonialsData as Testimonial[];

// Export types
export type {
  PersonalInfo,
  Service,
  Skill,
  Project,
  Stat,
  Experience,
  NavLink,
  Testimonial,
};
