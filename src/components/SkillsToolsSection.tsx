import { Palette, Wrench } from 'lucide-react';
import { CREATIVE_SKILLS, CREATIVE_TOOLS } from '../data/portfolioData';

// Custom clean SVG icons for tools (no emojis!)
function ToolLogo({ type }: { type: string }) {
  switch (type) {
    case 'figma':
      return (
        <svg viewBox="0 0 38 57" className="w-6 h-6" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      );
    case 'photoshop':
      return (
        <svg viewBox="0 0 100 100" className="w-6 h-6">
          <rect width="100" height="100" rx="20" fill="#001E36" />
          <text x="32" y="68" fill="#31A8FF" fontSize="54" fontFamily="system-ui, sans-serif" fontWeight="900" textAnchor="middle">P</text>
          <text x="70" y="68" fill="#31A8FF" fontSize="54" fontFamily="system-ui, sans-serif" fontWeight="900" textAnchor="middle">s</text>
        </svg>
      );
    case 'canva':
      return (
        <svg viewBox="0 0 100 100" className="w-6 h-6">
          <defs>
            <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C4CC" />
              <stop offset="100%" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="22" fill="url(#canvaGrad)" />
          <path
            d="M58 35C48 35 34 42 34 54C34 64 43 68 52 68C61 68 66 63 68 59L61 54C59 57 56 60 51 60C46 60 41 57 41 51C41 45 48 42 55 42C59 42 63 43 66 45L71 39C67 36 62 35 58 35Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'capcut':
      return (
        <svg viewBox="0 0 100 100" className="w-6 h-6">
          <rect width="100" height="100" rx="22" fill="#111111" />
          <path
            d="M25 35L48 50L25 65M75 35L52 50L75 65"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'filmora':
      return (
        <svg viewBox="0 0 100 100" className="w-6 h-6">
          <rect width="100" height="100" rx="22" fill="#002D38" />
          <path
            d="M25 28C25 28 42 30 52 42C62 54 62 72 62 72M75 28C75 28 58 30 48 42C38 54 38 72 38 72"
            stroke="#00E5B3"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return <Wrench className="w-6 h-6 text-navy" />;
  }
}

export default function SkillsToolsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#F8F3EA] border-b border-navy/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-navy/15 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cream border border-navy/20 mb-3">
              <span className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
                05 // TOOLKIT & COMPETENCIES
              </span>
            </div>
            <h2 className="font-display text-section text-navy tracking-tight uppercase">
              SKILLS & CREATIVE TOOLS
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-serif-accent italic text-base sm:text-lg text-espresso/80">
              Proficiencies rooted in real visual workflows, deliberate software practice, and cross-medium experimentation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Creative Disciplines */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 bg-paper rounded-xl editorial-border editorial-shadow space-y-4">
              <div className="flex items-center gap-2 text-navy pb-3 border-b border-navy/15">
                <Palette className="w-4 h-4 text-amber" />
                <h3 className="font-display text-xl tracking-wide uppercase">
                  CREATIVE DISCIPLINES
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {CREATIVE_SKILLS.map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-cream/70 hover:bg-butter text-navy font-sans text-xs font-semibold tracking-wide border border-navy/20 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-navy/60" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-navy/15 text-xs font-sans text-navy/70 leading-relaxed">
                Focused on clarity, emotional resonance, and brand consistency rather than superficial decoration.
              </div>
            </div>
          </div>

          {/* Right Column: Creative Software Tools */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-navy/60 px-1">
              Active Software & Tools Used in Practice
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CREATIVE_TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="p-5 bg-paper rounded-xl editorial-border hover:editorial-shadow transition-all space-y-2.5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-paper-sub border border-navy/15 group-hover:scale-105 transition-transform">
                        <ToolLogo type={tool.iconType} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-navy">
                          {tool.name}
                        </h4>
                        <span className="text-[11px] font-mono text-navy/60 block">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-navy/80 leading-relaxed pt-1 border-t border-navy/10">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Note about real tools */}
            <div className="p-4 rounded-lg bg-butter/30 border border-navy/20 text-xs font-sans text-navy/80">
              <strong className="font-semibold text-navy">Practical Experience: </strong>
              Each tool is actively used for real poster compositions, video cuts, layout grids, or presentation decks — presented honestly without arbitrary skill percentages.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
