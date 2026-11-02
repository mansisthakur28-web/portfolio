import { type MouseEvent } from 'react';
import { ArrowDown, Mail, MapPin, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-navy/15 bg-paper paper-grid">
      {/* Decorative background stamps / labels */}
      <div className="absolute top-20 right-6 sm:right-12 hidden md:block opacity-40 pointer-events-none select-none">
        <div className="w-24 h-24 rounded-full border-2 border-dashed border-navy/40 flex items-center justify-center rotate-12">
          <span className="text-[10px] font-mono font-bold tracking-widest text-center uppercase leading-tight text-navy">
            PORTFOLIO<br />ARCHIVE<br />2024–2028
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Editorial Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-cream border border-navy/20 editorial-shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              <span className="font-sans text-xs font-bold tracking-wider uppercase text-navy">
                {PERSONAL_INFO.heroBadge}
              </span>
            </div>

            {/* Oversized High-Impact Display Headline */}
            <h1 className="font-display text-mega text-navy tracking-tight uppercase leading-[0.9] flex flex-col">
              <span className="hover:text-periwinkle transition-colors">
                {PERSONAL_INFO.heroHeading.line1}
              </span>
              <span className="hover:text-amber transition-colors text-navy">
                {PERSONAL_INFO.heroHeading.line2}
              </span>
              <span className="text-periwinkle hover:text-navy transition-colors">
                {PERSONAL_INFO.heroHeading.line3}
              </span>
            </h1>

            {/* Sub-identity tag */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="px-3 py-1 bg-butter text-navy font-sans text-xs font-bold uppercase tracking-wider rounded border border-navy/20">
                {PERSONAL_INFO.name}
              </div>
              <span className="text-navy/40 font-mono text-sm">•</span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-navy/80">
                {PERSONAL_INFO.roleDescriptor}
              </span>
            </div>

            {/* First-person introduction */}
            <p className="font-sans text-base sm:text-lg text-navy/85 leading-relaxed max-w-2xl pt-2">
              Hi, I&apos;m Mansi — a Computer Science student with a strong interest in visual
              design, digital content, and creative storytelling. I enjoy exploring how typography,
              colour, imagery, and layout can turn an idea into something people connect with. My
              work spans café branding concepts, social creatives, menu layouts, presentation
              design, image editing, website visuals, and short-form video.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#featured-case-study"
                onClick={(e) => scrollToSection(e, '#featured-case-study')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-navy text-paper font-sans text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-amber transition-all editorial-shadow focus:outline-none focus:ring-2 focus:ring-navy"
              >
                <span>Explore my work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#about"
                onClick={(e) => scrollToSection(e, '#about')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-paper-sub hover:bg-cream text-navy font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border border-navy/25 focus:outline-none focus:ring-2 focus:ring-navy"
              >
                <span>About My Creative World</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 p-3.5 rounded-lg bg-paper-sub hover:bg-butter text-navy border border-navy/25 transition-colors focus:outline-none focus:ring-2 focus:ring-navy"
                title={`Send an email to ${PERSONAL_INFO.email}`}
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Location & Context Strip */}
            <div className="pt-4 border-t border-navy/15 flex flex-wrap items-center gap-4 text-xs font-sans text-navy/70">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </span>
              <span className="hidden sm:inline-block text-navy/30">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-periwinkle" />
                <span>B.Tech CSE (Data Science) @ OIST Bhopal</span>
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative periwinkle backer card */}
              <div className="absolute -inset-2 bg-periwinkle/30 rounded-2xl transform rotate-2 editorial-border" />
              <div className="absolute -inset-1 bg-cream rounded-2xl transform -rotate-1 editorial-border" />

              {/* Main Photo Card */}
              <div className="relative bg-paper rounded-xl editorial-border editorial-shadow-lg overflow-hidden p-3 sm:p-4">
                {/* Washi tape accent top center */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 tape-accent z-10 flex items-center justify-center">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-espresso/70">
                    MANSI // 2024
                  </span>
                </div>

                {/* Portrait Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-navy/10 mt-2">
                  <img
                    src={PERSONAL_INFO.portrait}
                    alt="Mansi Singh Thakur"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Portrait Caption & Annotation */}
                <div className="mt-3 px-1 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl text-navy tracking-wide">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="font-serif-accent italic text-xs text-navy/70">
                      Visual Storyteller & Creative Designer
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded bg-butter border border-navy/20 text-[10px] font-mono font-bold text-navy">
                      BHOPAL · IND
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
