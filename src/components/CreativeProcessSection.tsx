import { Compass, Lightbulb, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export default function CreativeProcessSection() {
  const stepIcons = [Compass, Lightbulb, PenTool, CheckCircle];

  return (
    <section id="process" className="py-20 sm:py-28 bg-paper border-b border-navy/15 relative overflow-hidden">
      {/* Subtle background connecting line on desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-navy/15 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cream border border-navy/20 mb-3">
              <span className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
                04 // CREATIVE METHODOLOGY & WORKFLOW
              </span>
            </div>
            <h2 className="font-display text-section text-navy tracking-tight uppercase">
              HOW AN IDEA BECOMES A VISUAL STORY
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-serif-accent italic text-base sm:text-lg text-espresso/80">
              A four-stage rhythmic process designed to turn abstract concepts into cohesive, memorable visual media.
            </p>
          </div>
        </div>

        {/* 4 Process Cards Connected in Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={step.number}
                className="bg-paper-light rounded-xl editorial-border p-6 flex flex-col justify-between space-y-5 hover:editorial-shadow transition-all relative group"
              >
                {/* Step Top Bar: Number & Icon */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-navy/15">
                    <span className="font-display text-4xl text-navy tracking-tight">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-cream border border-navy/20 flex items-center justify-center text-navy group-hover:bg-butter transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-display text-2xl text-navy tracking-wide">
                      {step.title}
                    </h3>
                    <p className="font-serif-accent italic text-xs text-espresso/80 mt-0.5">
                      {step.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-navy/85 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables / Tangible Focus */}
                <div className="pt-4 border-t border-navy/15 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-navy/60 block">
                    Tangible Focus
                  </span>
                  <ul className="space-y-1">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-xs font-sans text-navy/75">
                        <span className="w-1 h-1 rounded-full bg-amber" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow connector on large screens for steps 1-3 */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-navy/40 pointer-events-none">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process Footnote Banner */}
        <div className="mt-12 p-6 rounded-xl bg-periwinkle/15 editorial-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-sans font-bold text-sm text-navy">
              Iterative, Flexible & Detail-Oriented
            </h4>
            <p className="font-sans text-xs text-navy/75">
              Every project balances structured planning with experimental play — adapting as the visual identity evolves.
            </p>
          </div>
          <span className="px-3 py-1.5 rounded-full bg-paper border border-navy/20 font-mono text-xs font-bold text-navy">
            DISCOVER → EXPLORE → CREATE → REFINE
          </span>
        </div>
      </div>
    </section>
  );
}
