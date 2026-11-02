import type { ElementType } from 'react';
import { Image as ImageIcon, Video, Presentation, Layout } from 'lucide-react';
import { WIDER_PRACTICE_PROJECTS } from '../data/portfolioData';

export default function CreativePracticeSection() {
  const categoryIcons: Record<string, ElementType> = {
    A: Layout,
    B: Presentation,
    C: Video,
    D: ImageIcon,
  };

  return (
    <section id="practice" className="py-20 sm:py-28 bg-[#FBF7EE] border-b border-navy/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-navy/15 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-butter border border-navy/20 mb-3">
              <span className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
                03 // EXTENDED WORK & DISCIPLINES
              </span>
            </div>
            <h2 className="font-display text-section text-navy tracking-tight uppercase">
              MORE FROM MY CREATIVE PRACTICE
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-serif-accent italic text-base sm:text-lg text-espresso/80">
              Exploring visual communication across feeds, slide decks, video edits, and tactile dining artifacts.
            </p>
          </div>
        </div>

        {/* 4 Practice Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {WIDER_PRACTICE_PROJECTS.map((project) => {
            const IconComponent = categoryIcons[project.letter] || Layout;
            const hasImages = Boolean(project.primaryImage || project.supportingImages?.length);

            return (
              <div
                key={project.id}
                className="bg-paper rounded-xl editorial-border editorial-shadow p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:-translate-y-0.5 transition-transform"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-navy/15">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-cream border border-navy/30 font-display text-base text-navy flex items-center justify-center">
                        {project.letter}
                      </span>
                      <span className="font-sans text-xs font-bold uppercase tracking-wider text-navy/70">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-1.5 rounded bg-paper-sub border border-navy/15 text-navy/60">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-navy tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-serif-accent italic text-sm text-espresso/80 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-navy/85 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Visual assets container (for Category D: Website & Menu Visual Concepts) */}
                  {hasImages && (
                    <div className="space-y-3 pt-2">
                      {project.primaryImage && (
                        <div className="rounded-lg overflow-hidden editorial-border bg-navy/10 relative group">
                          <img
                            src={project.primaryImage}
                            alt="Editorial Menu Design"
                            className="w-full max-h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-paper/90 rounded border border-navy/20 text-[10px] font-mono text-navy font-semibold">
                            Tactile Print Menu Layout Exploration
                          </div>
                        </div>
                      )}

                      {project.supportingImages && (
                        <div className="grid grid-cols-3 gap-2">
                          {project.supportingImages.map((img, i) => (
                            <div
                              key={i}
                              className="rounded overflow-hidden border border-navy/20 aspect-[4/3] bg-navy/10 group relative"
                              title={img.caption}
                            >
                              <img
                                src={img.url}
                                alt={img.caption}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Creative Highlight Box */}
                  <div className="p-3.5 bg-cream/50 rounded-lg border border-navy/15 text-xs font-sans text-navy/80">
                    <strong className="font-semibold text-navy">Creative Focus: </strong>
                    {project.highlight}
                  </div>
                </div>

                {/* Skills tags footer */}
                <div className="pt-4 border-t border-navy/15 flex flex-wrap gap-1.5">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-sans px-2.5 py-1 rounded-full bg-paper-sub text-navy border border-navy/15 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
