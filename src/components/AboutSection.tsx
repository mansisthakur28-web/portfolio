import { GraduationCap, Layers, Palette, Film, Layout } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutSection() {
  const creativePillars = [
    {
      icon: Layout,
      title: "Visual Design & Editorial Layout",
      description: "Exploring composition, grid systems, and intentional whitespace to organize information clearly while giving it an unmistakable aesthetic personality.",
      tag: "Spatial Design"
    },
    {
      icon: Palette,
      title: "Typography & Colour Harmony",
      description: "Pairing high-impact condensed display titles with expressive serifs; curating warm, earthy palettes that evoke nostalgia, craft, and warmth.",
      tag: "Colour & Type"
    },
    {
      icon: Layers,
      title: "Café Branding & Content Identity",
      description: "Developing cohesive brand concepts across campaign posters, food-focused artwork, tactile menu architectures, and digital touchpoints.",
      tag: "Brand Worlds"
    },
    {
      icon: Film,
      title: "Short-Form Video & Visual Editing",
      description: "Editing short-form clips with attention to pacing, simple transitions, and on-screen type — still collecting finished pieces as this practice grows.",
      tag: "Motion & Media"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FBF6ED] border-b border-navy/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-navy/15 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cream border border-navy/20 mb-3">
              <span className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
                01 // PERSONAL PROFILE & CREATIVE WORLD
              </span>
            </div>
            <h2 className="font-display text-section text-navy tracking-tight uppercase">
              {PERSONAL_INFO.aboutSectionHeading}
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-serif-accent italic text-base sm:text-lg text-espresso/80">
              “Good design is not just about looking attractive; it is about communicating a feeling, telling a story, and making information easier to experience.”
            </p>
          </div>
        </div>

        {/* Main Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: First-Person In-Depth Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-paper rounded-xl editorial-border editorial-shadow space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-navy/15">
                <span className="font-display text-2xl text-navy tracking-wide">
                  WHO I AM & WHAT I MAKE
                </span>
                <span className="text-xs font-mono font-bold text-navy/60 px-2 py-0.5 bg-paper-sub rounded border border-navy/15">
                  FIRST-PERSON NOTE
                </span>
              </div>

              {/* The in-depth authentic first-person narrative */}
              <div className="font-sans text-base sm:text-lg text-navy/90 leading-relaxed space-y-4">
                <p>
                  {PERSONAL_INFO.firstPersonIntro}
                </p>
              </div>

              {/* Emerging Designer Values Note */}
              <div className="pt-4 border-t border-navy/15 flex flex-wrap gap-2">
                {[
                  "Emerging Creative",
                  "Hands-On Learner",
                  "Editorial Aesthetics",
                  "Food & Café Branding",
                  "Visual Storytelling"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-sans font-semibold px-2.5 py-1 rounded bg-cream/70 text-navy border border-navy/20"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Credential Card */}
            <div className="p-6 bg-periwinkle/15 rounded-xl editorial-border editorial-shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-periwinkle text-paper-light border border-navy/20 mt-1 sm:mt-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-navy/60 block">
                    Academic Background
                  </span>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-navy">
                    {PERSONAL_INFO.education.degree}
                  </h3>
                  <p className="font-sans text-sm text-navy/80">
                    {PERSONAL_INFO.education.institution}
                  </p>
                </div>
              </div>
              <div className="sm:text-right self-stretch sm:self-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-navy/15">
                <span className="inline-block px-3 py-1 rounded-full bg-butter text-navy font-mono text-xs font-bold border border-navy/30">
                  {PERSONAL_INFO.education.graduation}
                </span>
                <p className="text-[11px] font-sans text-navy/60 mt-1">
                  Four-Year Engineering Program
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Creative Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-navy/60 px-1">
              Creative Explorations & Focus Areas
            </div>

            {creativePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-paper rounded-xl editorial-border hover:editorial-shadow transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded bg-cream border border-navy/20 group-hover:bg-butter transition-colors">
                        <IconComponent className="w-4 h-4 text-navy" />
                      </div>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-navy">
                        {pillar.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-paper-sub text-navy/70 border border-navy/15">
                      {pillar.tag}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-navy/80 leading-relaxed pl-8">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
