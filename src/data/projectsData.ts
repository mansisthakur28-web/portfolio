export * from './portfolioData';

// Legacy compatibility shim for any components referencing Project structure
export interface LegacyProject {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  status: string;
  role: string;
  summary: string;
  overview: string;
  liveUrl?: string;
}

export const PROJECTS = [
  {
    id: "amber-roost",
    slug: "amber-roost",
    number: "01",
    title: "The Amber Roost",
    subtitle: "A digital home for slow mornings, thoughtful coffee, and warm hospitality",
    category: "CAFÉ BRANDING / CAMPAIGN POSTERS / DIGITAL CONTENT",
    year: "2024",
    status: "Conceptual Visual Exploration & Website",
    role: "Visual Direction, Campaign Poster Design & Menu Architecture",
    summary: "The Amber Roost website and campaign artwork bring together café identity, menu presentation, atmosphere, and visual storytelling in a cohesive creative direction.",
    overview: "Conceived as an inviting digital presence for an artisanal café and sourdough kitchen, The Amber Roost balances quiet editorial aesthetics with clear visitor utility.",
    liveUrl: "https://amber-roost.vercel.app/"
  }
];
