export interface CampaignPoster {
  id: string;
  title: string;
  headline: string;
  subhead: string;
  badge: string;
  category: string;
  description: string;
  imageUrl: string;
  aspectRatio: string;
  palette: string[];
  disciplines: string[];
  notes: string;
}

export interface PracticeProject {
  id: string;
  letter: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  primaryImage?: string;
  supportingImages?: { url: string; caption: string }[];
  highlight: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  accentColor: string;
}

export interface ToolItem {
  name: string;
  role: string;
  category: string;
  iconType: 'figma' | 'photoshop' | 'canva' | 'capcut' | 'filmora';
  description: string;
}

export const PERSONAL_INFO = {
  name: "Mansi Singh Thakur",
  roleDescriptor: "Digital Media · Visual Content · Creative Design",
  heroBadge: "CREATIVE PORTFOLIO // 2024–2028",
  heroHeading: {
    line1: "CREATIVE IDEAS.",
    line2: "VISUAL STORIES.",
    line3: "DIGITAL EXPERIENCES."
  },
  firstPersonIntro: "Hi, I'm Mansi — a Computer Science student with a strong interest in visual design, digital content, and creative storytelling. I enjoy exploring how typography, colour, imagery, and layout can turn an idea into something people connect with. My creative work spans café branding concepts, social media creatives, menu layouts, presentation design, image editing, website visuals, and short-form video content. I like experimenting with different visual directions, learning new creative tools, and bringing consistency to the way a brand or idea is presented. For me, good design is not just about looking attractive; it is about communicating a feeling, telling a story, and making information easier to experience.",
  aboutSectionHeading: "A LITTLE ABOUT MY CREATIVE WORLD",
  education: {
    degree: "B.Tech, Computer Science Engineering — Data Science",
    institution: "Oriental Institute of Science and Technology (OIST), Bhopal",
    graduation: "Expected 2028",
    academicNote: "Combining analytical problem-solving and structured technical thinking with a deep dedication to visual aesthetics, typography, and digital media."
  },
  location: "Bhopal, Madhya Pradesh, India",
  email: "mansisinghthakur805@gmail.com",
  portrait: "/images/portrait/mansi.jpg",
  creativeWorldCards: [
    {
      number: "01",
      title: "Visual Design & Editorial Layout",
      description: "Crafting structured, expressive layouts with intentional whitespace, editorial grids, and balanced asymmetry that guide the eye naturally.",
      accent: "bg-cream text-navy"
    },
    {
      number: "02",
      title: "Typography & Colour Harmony",
      description: "Pairing high-impact condensed display fonts with warm editorial serifs and legible body types; orchestrating warm, cohesive palettes.",
      accent: "bg-butter text-navy"
    },
    {
      number: "03",
      title: "Café Branding & Content Direction",
      description: "Translating culinary warmth, atmosphere, and sensory details into print posters, digital menus, and cohesive social media creatives.",
      accent: "bg-periwinkle text-paper-light"
    },
    {
      number: "04",
      title: "Media Editing & Storytelling",
      description: "Editing short-form video and photo assets with a strong sense of rhythm, pacing, typographic overlays, and mood.",
      accent: "bg-dusty text-navy"
    }
  ]
};

export const AMBER_ROOST_PROJECT = {
  id: "amber-roost",
  title: "The Amber Roost — Café Branding & Digital Content",
  category: "CAFÉ BRANDING / CAMPAIGN POSTERS / DIGITAL PRESENTATION",
  typeLabel: "Conceptual Project & Visual Exploration",
  year: "2024",
  liveUrl: "https://amber-roost.vercel.app/",
  intro: "The Amber Roost is a café-focused creative project exploring how food photography, editorial typography, warm colours, and distinctive campaign visuals can work together to create a memorable brand experience. The project brings together website visuals, menu design, and social media artwork within a consistent visual direction.",
  overview: "Designed around the warmth of slow mornings, artisanal sourdough baking, and specialty manual brews, The Amber Roost balances quiet culinary nostalgia with high-impact contemporary graphic art direction. Rather than generic café promotion, each touchpoint — from editorial campaign posters to the digital website layout — feels deliberate, tactile, and sensory.",
  visualDirection: "Rooted in a warm palette of rich butter-cream, deep espresso brown, warm honey amber, and muted botanical olive. The typographic strategy pairs high-contrast display headlines with warm serif storytelling and functional clean sans-serif details.",
  skillsDemonstrated: [
    "Campaign Art Direction",
    "Editorial Poster Composition",
    "Food-focused Visual Content",
    "Café Website Concept Design",
    "Tactile Menu Layout Architecture",
    "Multi-Directional Brand Storytelling"
  ],
  posters: [
    {
      id: "ramen-campaign",
      title: "Premium Ramen Campaign Poster",
      headline: "A BOWL OF COMFORT.",
      subhead: "Slow-made comfort. Rich, soulful broth.",
      badge: "KITCHEN NOTES // RAMEN NO. 01",
      category: "Food Styling & Editorial Art Direction",
      description: "A culinary hero artwork spotlighting slow-simmered comfort. Features hand-pulled noodles lifted with wooden chopsticks above a speckled stoneware bowl filled with tender chashu, seasoned soft-boiled egg, and fresh scallions.",
      imageUrl: "/images/amber-roost/ramen_campaign.png",
      aspectRatio: "2/3",
      palette: ["#EAD8B8", "#A4742A", "#332218", "#795E38"],
      disciplines: ["Product Presentation", "Editorial Typography", "Food-focused Composition"],
      notes: "Showcases how editorial serif headlines and precise product elevation transform everyday culinary items into premium visual storytelling."
    },
    {
      id: "cafe-launch-post",
      title: "Café Launch Campaign Poster",
      headline: "SLOW MORNINGS. SERIOUS COFFEE.",
      subhead: "Single-origin Arabica • 36-hour sourdough • Come find your corner",
      badge: "THE AMBER ROOST // BAKERY & COFFEE HOUSE",
      category: "Launch Campaign & Brand Atmosphere",
      description: "An evocative morning campaign poster uniting The Amber Roost's signature single-origin brew with Valencia orange and rosemary alongside freshly baked, crackled artisan sourdough under golden sunlit rays.",
      imageUrl: "/images/amber-roost/cafe_launch_post.png",
      aspectRatio: "4/5",
      palette: ["#F6E8BD", "#F4D978", "#3C2618", "#59613B"],
      disciplines: ["Headline Hierarchy", "Atmospheric Food Styling", "Brand Storytelling", "Social Launch Asset"],
      notes: "Balances rustic hospitality with bold condensed typography and textured brush-stroke framing to communicate physical café warmth."
    },
    {
      id: "playful-cafe-post",
      title: "Playful Café Campaign Poster",
      headline: "A LITTLE SIP OF SUNSHINE.",
      subhead: "Cold Brew Tonic + Valencia Orange • Brewed for the Mood • Your new happy place →→",
      badge: "SPECIALTY REFRESH // SUNNY SIDE",
      category: "Playful Promotional Content & Mixed Media",
      description: "A lively, expressive promotional artwork pairing condensation-beaded Cold Brew Tonic with a rich caramelized Basque burnt cheesecake, accented by custom hand-drawn smiling orange doodles, sun sketches, and torn kraft-paper tape.",
      imageUrl: "/images/amber-roost/playful_cafe_post.png",
      aspectRatio: "4/5",
      palette: ["#D4801B", "#2A5137", "#F7F1E6", "#D9C199"],
      disciplines: ["Expressive Typography", "Decorative Illustration", "Promotional Content"],
      notes: "Demonstrates creative range by pivoting from quiet editorial tone to an energetic, playful visual personality tailored for social feeds."
    }
  ] as CampaignPoster[],
  websiteHighlights: [
    {
      title: "Editorial Digital Atmosphere",
      desc: "Warm cream background architecture (#F8F6F1) that avoids clinical white space and mimics physical café paper.",
      image: "/images/projects/amber-roost/amber_roost_desktop.jpg"
    },
    {
      title: "Artisanal Specialty Coffee",
      desc: "Slow manual V60 drip pour-overs and signature citrus cold brews presented through intimate, natural-light photography.",
      image: "/images/projects/amber-roost/amber_v60_drip.jpg"
    },
    {
      title: "Verandah & Natural Interior",
      desc: "Sunlit greenery, natural timber, and quiet garden corners inviting guests to slow down.",
      image: "/images/projects/amber-roost/amber_interior_warm.jpg"
    },
    {
      title: "Sourdough Bakery Kitchen",
      desc: "Caramelized Basque burnt cheesecakes and sourdough tartines highlighted with sensory culinary focus.",
      image: "/images/projects/amber-roost/amber_basque_cheesecake.jpg"
    }
  ]
};

export const WIDER_PRACTICE_PROJECTS: PracticeProject[] = [
  {
    id: "social-media-design",
    letter: "A",
    category: "Social Media Content Design",
    title: "Editorial Social Creatives & Brand Consistency",
    subtitle: "Multi-slide feed carousels, promotional announcements, and graphic storytelling",
    description: "Designing conceptual social media assets that keep typography, colour, and photography in the same family. The Amber Roost campaign posters are examples of promotional posts I would place in a café feed — one quieter, one more playful — without inventing extra campaigns.",
    skills: ["Carousel Layout Thinking", "Typographic Pacing", "Colour Harmony", "Brand Consistency"],
    primaryImage: "/images/amber-roost/playful_cafe_post.png",
    supportingImages: [
      { url: "/images/amber-roost/ramen_campaign.png", caption: "Premium ramen campaign post" },
      { url: "/images/amber-roost/cafe_launch_post.png", caption: "Café launch campaign post" },
      { url: "/images/amber-roost/playful_cafe_post.png", caption: "Playful sunshine café post" }
    ],
    highlight: "Keeping a brand consistent across different moods, from quiet editorial to brighter promotional work."
  },
  {
    id: "presentation-design",
    letter: "B",
    category: "Presentation & Infographic Design",
    title: "Visual Decks & Structured Information Architecture",
    subtitle: "Transforming dense information into intuitive, engaging editorial presentations",
    description: "Structuring presentation slides, pitch layouts, and infographic overviews with deliberate typographic hierarchy, selective color highlighting, and clean spatial balance. Emphasizes clarity of communication, logical sequencing, and visual breathing room.",
    skills: ["Information Hierarchy", "Slide Storytelling", "Visual Pacing", "Clear Typographic Scaling"],
    highlight: "Translating analytical ideas into clear, beautifully composed slides that people can digest effortlessly."
  },
  {
    id: "video-editing",
    letter: "C",
    category: "Short-Form Video & Editing",
    title: "Rhythmic Video Editing & Social Motion",
    subtitle: "Pacing, transitions, on-screen type, and visual rhythm",
    description: "I edit short-form clips in CapCut and Filmora, paying attention to pacing, simple transitions, and on-screen type that supports the story. This part of my practice is still growing, and finished pieces will sit here as they are ready.",
    skills: ["Pacing", "Simple Transitions", "On-screen Type", "Visual Storytelling"],
    highlight: "Learning how motion and rhythm can carry a visual idea beyond a still poster."
  },
  {
    id: "website-menu-concepts",
    letter: "D",
    category: "Website & Menu Visual Concepts",
    title: "Tactile Menu Design & Brand Artifacts",
    subtitle: "Print menu layouts, packaging explorations, and local atmospheric photography",
    description: "Exploring tactile dining collateral, brand packaging (Seoul Sip coffee packaging concept), and location-grounded visual moodboards. Balancing functional menu readability with rich sensory design details.",
    skills: ["Editorial Menu Layout", "Brand Packaging Concept", "Print Hierarchy", "Atmospheric Photography"],
    primaryImage: "/images/projects/visual-design/menu_design_feature.png",
    supportingImages: [
      { url: "/images/projects/visual-design/seoul_sip_packaging.jpg", caption: "Seoul Sip artisanal coffee packaging concept" },
      { url: "/images/projects/visual-design/bhopal_lake.jpg", caption: "Atmospheric evening study at Upper Lake, Bhopal" },
      { url: "/images/projects/visual-design/night_lights.jpg", caption: "Nocturnal light study & color grading exploration" }
    ],
    highlight: "Bridging digital identity with tangible print materials, packaging mockups, and sensory imagery."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    tagline: "Purpose, Mood & Direction",
    description: "Understanding the core concept, intended audience, emotional tone, and brand goals. Gathering inspiration, studying references, and defining the visual narrative before opening design software.",
    deliverables: ["Moodboards & References", "Creative Brief Clarification", "Audience & Tone Mapping", "Palette Direction"],
    accentColor: "border-butter bg-cream/40"
  },
  {
    number: "02",
    title: "EXPLORE",
    tagline: "Typography, Colour & Composition",
    description: "Experimenting with contrasting display typography, warm serif pairings, color harmony systems, photography crops, and layout grids. Testing multiple sketches to find what connects emotionally.",
    deliverables: ["Font Pairings & Hierarchy", "Color Swatch Harmonization", "Compositional Sketches", "Layout Grid Explorations"],
    accentColor: "border-dusty bg-dusty/10"
  },
  {
    number: "03",
    title: "CREATE",
    tagline: "High-Fidelity Design & Detail",
    description: "Bringing the chosen direction to life. Composing the artwork, refining spacing and typography kerning, integrating food/product photography, and ensuring consistency across all touchpoints.",
    deliverables: ["High-Res Campaign Posters", "Digital & Print Layouts", "Custom Doodles & Accents", "Social & Web Assets"],
    accentColor: "border-periwinkle bg-periwinkle/10"
  },
  {
    number: "04",
    title: "REFINE",
    tagline: "Visual Balance & Polish",
    description: "Reviewing hierarchy from both desktop and mobile viewports, checking contrast ratios, proofing readability, and fine-tuning subtle details so the finished piece communicates with clarity and charm.",
    deliverables: ["Cross-Device Readability Audit", "Spacing & Visual Rhythm Polish", "Asset Export & Optimization", "Final Presentation Showcase"],
    accentColor: "border-amber bg-amber/10"
  }
];

export const CREATIVE_SKILLS: string[] = [
  "Visual Design & Composition",
  "Typography & Layout Hierarchy",
  "Colour Coordination & Palettes",
  "Digital Content Creation",
  "Social Media Creatives",
  "Café Branding & Identity",
  "Editorial Menu Layouts",
  "Presentation & Infographic Design",
  "Visual Storytelling",
  "Image Retouching & Compositing",
  "Short-Form Video Editing"
];

export const CREATIVE_TOOLS: ToolItem[] = [
  {
    name: "Canva",
    role: "Rapid Creative Iteration & Templates",
    category: "Brand Collateral & Social Media",
    iconType: "canva",
    description: "Used for rapid design mockups, social media creative variations, poster drafting, and testing typographic layouts."
  },
  {
    name: "Figma",
    role: "Interface Design & Typographic Systems",
    category: "Website Concepts & Layout Grids",
    iconType: "figma",
    description: "Used for crafting website visual concepts, responsive grid layouts, design token libraries, and component-level hierarchy."
  },
  {
    name: "Adobe Photoshop",
    role: "Image Editing, Retouching & Posters",
    category: "Asset Preparation & Compositing",
    iconType: "photoshop",
    description: "Used for high-resolution food photo retouching, color grading, background cutout preparation, and campaign artwork assembly."
  },
  {
    name: "CapCut",
    role: "Short-Form Video & Audio Sync",
    category: "Social Video & Motion Storytelling",
    iconType: "capcut",
    description: "Used for editing short-form clips with pacing, simple text overlays, and visual rhythm."
  },
  {
    name: "Filmora",
    role: "Timeline Video Editing & Color Tone",
    category: "Video Sequencing & Transitions",
    iconType: "filmora",
    description: "Used for multi-track video timeline editing, transition smoothing, audio leveling, and visual grading."
  }
];
