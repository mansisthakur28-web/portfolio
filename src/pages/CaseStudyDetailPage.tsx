import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Sparkles, Eye, CheckCircle2 } from 'lucide-react';
import { AMBER_ROOST_PROJECT } from '../data/portfolioData';
import PosterLightboxModal from '../components/PosterLightboxModal';

export default function CaseStudyDetailPage() {
  const [activePosterIndex, setActivePosterIndex] = useState<number | null>(null);

  const project = AMBER_ROOST_PROJECT;
  const posters = project.posters;

  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-paper min-h-screen text-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link & Breadcrumb */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-navy/15">
          <Link
            to="/#featured-case-study"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-navy/70 hover:text-navy transition-colors focus:outline-none focus:ring-1 focus:ring-navy rounded p-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </Link>

          <span className="text-xs font-mono font-semibold text-navy/60">
            CASE STUDY // 01 · THE AMBER ROOST
          </span>
        </div>

        {/* Case Study Hero Header */}
        <header className="space-y-6 mb-14">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded bg-butter font-mono text-xs font-bold text-navy uppercase tracking-wider border border-navy/30">
              MAJOR CASE STUDY
            </span>
            <span className="px-2.5 py-1 rounded bg-cream font-mono text-[11px] font-semibold text-navy/70 uppercase border border-navy/20">
              {project.typeLabel}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-navy tracking-tight uppercase leading-[0.92]">
            {project.title}
          </h1>

          <p className="font-serif-accent italic text-xl sm:text-2xl text-espresso/80 max-w-4xl leading-relaxed">
            {project.intro}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-cream/50 editorial-border text-xs font-sans">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-navy/60 block">Project Type</span>
              <span className="font-semibold text-navy">Self-Initiated Concept</span>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-navy/60 block">Year & Timeline</span>
              <span className="font-semibold text-navy">2024 · Conceptual</span>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-navy/60 block">Key Mediums</span>
              <span className="font-semibold text-navy">Posters, Web, Menus</span>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-navy/60 block">Live Deployment</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-navy hover:text-amber inline-flex items-center gap-1 underline underline-offset-2"
              >
                <span>amber-roost.vercel.app</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </header>

        {/* ============================================================== */}
        {/* SECTION 1: THE BRAND STORY & CONTEXT                           */}
        {/* ============================================================== */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-2 pb-2 border-b border-navy/15">
            <span className="font-display text-2xl sm:text-3xl tracking-wide uppercase">
              01 // CONCEPT & BRAND NARRATIVE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4 font-sans text-base text-navy/90 leading-relaxed">
              <p>
                {project.overview}
              </p>
              <p>
                Hospitality visual identities often suffer from either cold, sterile corporate aesthetics or cluttered, disorganized social layouts. For The Amber Roost, the goal was to explore how tactile paper materiality, warm culinary photography, and expressive typography can craft an intimate, welcoming sanctuary.
              </p>
            </div>

            <div className="md:col-span-5 p-6 rounded-xl bg-paper-sub editorial-border space-y-4">
              <h4 className="font-sans font-bold text-sm text-navy uppercase tracking-wider">
                Key Creative Intentions
              </h4>
              <ul className="space-y-2.5 text-xs font-sans text-navy/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span>Establish warm, slow-morning emotional resonance rather than transactional promotion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span>Harmonize high-impact editorial headlines with sensory food photography.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span>Translate the physical atmosphere of the space directly into the digital website.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: THE THREE CAMPAIGN POSTERS                           */}
        {/* ============================================================== */}
        <section className="space-y-8 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-2 border-b border-navy/15 gap-2">
            <div>
              <span className="font-display text-2xl sm:text-3xl tracking-wide uppercase">
                02 // CAMPAIGN POSTER TRILOGY
              </span>
              <p className="font-serif-accent italic text-sm text-espresso/80">
                Three distinct campaign directions created to test visual versatility across menus, launch announcements, and playful social promos.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-navy/60">
              Click any poster to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posters.map((poster, idx) => (
              <div
                key={poster.id}
                onClick={() => setActivePosterIndex(idx)}
                className="bg-paper-light rounded-xl editorial-border editorial-shadow hover:-translate-y-1 transition-transform cursor-pointer flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="p-3 bg-cream/70 border-b border-navy/15 flex items-center justify-between text-[11px] font-mono font-bold text-navy">
                    <span>POSTER 0{idx + 1}</span>
                    <span className="group-hover:text-amber flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>Zoom</span>
                    </span>
                  </div>

                  <div className="p-3 bg-[#1C1713] flex items-center justify-center">
                    <img
                      src={poster.imageUrl}
                      alt={poster.headline}
                      className="w-full max-h-[360px] object-contain rounded shadow"
                    />
                  </div>

                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-navy/60 block">
                      {poster.badge}
                    </span>
                    <h3 className="font-display text-2xl text-navy tracking-tight">
                      {poster.headline}
                    </h3>
                    <p className="font-serif-accent italic text-xs text-espresso/80">
                      {poster.subhead}
                    </p>
                    <p className="font-sans text-xs text-navy/80 leading-relaxed pt-1">
                      {poster.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-navy/10 flex flex-wrap gap-1">
                  {poster.disciplines.map((d, i) => (
                    <span key={i} className="text-[10px] font-sans px-2 py-0.5 rounded bg-cream text-navy border border-navy/15">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: WEBSITE CONCEPT & LIVE PLATFORM                    */}
        {/* ============================================================== */}
        <section className="space-y-6 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-2 border-b border-navy/15 gap-4">
            <div>
              <span className="font-display text-2xl sm:text-3xl tracking-wide uppercase">
                03 // DIGITAL WEBSITE PRESENCE
              </span>
              <p className="font-serif-accent italic text-sm text-espresso/80">
                A live production website extending the brand's tactile warmth into an intuitive digital experience.
              </p>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy text-paper font-sans text-xs font-bold uppercase tracking-wider hover:bg-amber transition-colors"
            >
              <span>Open amber-roost.vercel.app</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-xl editorial-border overflow-hidden bg-navy/10">
            <img
              src="/images/projects/amber-roost/amber_roost_desktop.jpg"
              alt="The Amber Roost Desktop Website Preview"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {project.websiteHighlights.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-paper-sub editorial-border space-y-1.5">
                <h5 className="font-sans font-bold text-sm text-navy">{item.title}</h5>
                <p className="font-sans text-xs text-navy/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: KEY CREATIVE TAKEAWAYS                              */}
        {/* ============================================================== */}
        <section className="p-6 sm:p-8 rounded-xl bg-butter/30 editorial-border space-y-4">
          <h3 className="font-display text-2xl text-navy tracking-wide uppercase">
            04 // CREATIVE TAKEAWAYS & REFLECTIONS
          </h3>
          <p className="font-sans text-sm sm:text-base text-navy/90 leading-relaxed">
            The Amber Roost provided an invaluable hands-on study in maintaining visual consistency across varied design touchpoints. From quiet, slow-food editorial layouts in the ramen campaign to cheerful mixed-media doodles in the playful café post, the project proved that a strong, foundational color palette and disciplined typographic hierarchy can unify diverse moods under one memorable brand umbrella.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-navy/20">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy text-paper font-sans text-xs font-bold uppercase tracking-wider hover:bg-amber transition-colors"
            >
              <span>Discuss a Creative Project With Me</span>
              <Sparkles className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/"
              className="text-xs font-sans font-bold text-navy hover:underline"
            >
              ← Return to Homepage
            </Link>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      <PosterLightboxModal
        posters={posters}
        activePosterIndex={activePosterIndex}
        onClose={() => setActivePosterIndex(null)}
        onNavigate={(newIdx) => setActivePosterIndex(newIdx)}
      />
    </div>
  );
}
