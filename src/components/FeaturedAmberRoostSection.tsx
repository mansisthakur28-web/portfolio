import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Maximize2, Sparkles, Coffee, Eye, ArrowUpRight, Layers } from 'lucide-react';
import { AMBER_ROOST_PROJECT } from '../data/portfolioData';
import PosterLightboxModal from './PosterLightboxModal';

export default function FeaturedAmberRoostSection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const posters = AMBER_ROOST_PROJECT.posters;
  const heroPoster = posters[0]; // Ramen campaign
  const secondaryPosters = posters.slice(1); // Launch & Playful posters

  return (
    <section id="featured-case-study" className="py-20 sm:py-28 bg-paper border-b border-navy/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-navy/15 gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded bg-butter font-mono text-xs font-bold text-navy uppercase tracking-wider border border-navy/30">
                MAJOR FEATURED CASE STUDY // 02
              </span>
              <span className="px-2.5 py-1 rounded bg-cream font-mono text-[11px] font-semibold text-navy/70 uppercase border border-navy/20">
                {AMBER_ROOST_PROJECT.typeLabel}
              </span>
            </div>

            <h2 className="font-display text-display text-navy tracking-tight uppercase leading-[0.95]">
              {AMBER_ROOST_PROJECT.title}
            </h2>

            <p className="font-serif-accent italic text-lg sm:text-xl text-espresso/80 max-w-3xl">
              A cohesive culinary brand world blending slow-morning warmth, editorial typography, artisanal food styling, and digital website presentation.
            </p>
          </div>

          {/* Quick links & live site reference */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={AMBER_ROOST_PROJECT.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy text-paper font-sans text-xs font-bold uppercase tracking-wider hover:bg-amber transition-colors editorial-shadow-sm focus:outline-none focus:ring-2 focus:ring-navy"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <Link
              to="/work/amber-roost"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cream hover:bg-butter text-navy font-sans text-xs font-bold uppercase tracking-wider border border-navy/20 transition-colors focus:outline-none focus:ring-2 focus:ring-navy"
            >
              <span>Full Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Project Narrative & Visual Direction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 bg-cream/40 rounded-xl editorial-border">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-navy/60 block mb-2">
                Project Overview & Scope
              </span>
              <p className="font-sans text-base text-navy/90 leading-relaxed">
                {AMBER_ROOST_PROJECT.intro}
              </p>
            </div>

            <div className="p-6 bg-paper rounded-xl editorial-border space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-navy/60 block">
                Visual Direction & Palette Concept
              </span>
              <p className="font-sans text-sm text-navy/80 leading-relaxed">
                {AMBER_ROOST_PROJECT.visualDirection}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {[
                  { name: "Warm Cream", hex: "#F6E8BD" },
                  { name: "Butter Yellow", hex: "#F4D978" },
                  { name: "Café Espresso", hex: "#3C2618" },
                  { name: "Amber Accent", hex: "#C58A20" },
                  { name: "Muted Olive", hex: "#59613B" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 bg-paper-sub rounded border border-navy/20">
                    <div className="w-3.5 h-3.5 rounded-full border border-navy/40" style={{ backgroundColor: c.hex }} />
                    <span className="text-[11px] font-sans font-semibold text-navy">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-periwinkle/15 rounded-xl editorial-border space-y-3">
              <div className="flex items-center gap-2 text-navy font-bold text-sm font-sans">
                <Layers className="w-4 h-4 text-periwinkle" />
                <span>Creative Disciplines Demonstrated</span>
              </div>
              <ul className="space-y-2 pt-1">
                {AMBER_ROOST_PROJECT.skillsDemonstrated.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-sans font-medium text-navy/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy/60" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-butter/30 rounded-xl border border-navy/20 text-xs font-sans text-navy/80">
              <strong className="font-semibold text-navy">Interactive Gallery: </strong>
              Click on any campaign poster below to open the high-resolution inspection viewer with art direction details.
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* EDITORIAL CASE-STUDY POSTER SPREAD (VISUALLY DOMINANT)         */}
        {/* ============================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-navy/15">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber" />
              <h3 className="font-display text-2xl sm:text-3xl text-navy tracking-wide uppercase">
                CAMPAIGN POSTER TRILOGY // AUTHENTIC CREATIVE ASSETS
              </h3>
            </div>
            <span className="text-xs font-mono font-semibold text-navy/60 hidden sm:inline-block">
              Click to view high-res artwork
            </span>
          </div>

          {/* Asymmetric Editorial Grid: 1 Hero Poster (Lg) + 2 Secondary Posters (Stacked) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* HERO POSTER: Premium Ramen Campaign */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setActiveLightboxIndex(0)}
                className="group cursor-pointer bg-paper rounded-xl editorial-border editorial-shadow-lg overflow-hidden transition-all hover:-translate-y-1"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveLightboxIndex(0)}
                aria-label="Inspect Premium Ramen Campaign Poster"
              >
                {/* Poster Top Metadata Tag */}
                <div className="p-4 bg-cream/70 border-b border-navy/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-butter font-mono text-[10px] font-bold text-navy border border-navy/30">
                      POSTER 01 · HERO PIECE
                    </span>
                    <span className="font-sans text-xs font-bold text-navy uppercase tracking-wider">
                      {heroPoster.badge}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-navy/70 group-hover:text-navy">
                    <Eye className="w-3.5 h-3.5 text-amber" />
                    <span>Zoom In</span>
                  </div>
                </div>

                {/* Poster Artwork Container with Aspect Ratio Preserved */}
                <div className="relative bg-[#231A14] flex items-center justify-center p-3 sm:p-5 overflow-hidden">
                  <img
                    src={heroPoster.imageUrl}
                    alt={heroPoster.headline}
                    className="w-full max-h-[640px] object-contain rounded shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors pointer-events-none flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-paper text-navy font-sans text-xs font-bold uppercase tracking-wider editorial-shadow">
                      Click to Inspect High-Res
                    </span>
                  </div>
                </div>

                {/* Poster Editorial Description */}
                <div className="p-6 bg-paper space-y-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-3xl text-navy tracking-tight">
                      {heroPoster.headline}
                    </h4>
                    <span className="font-serif-accent italic text-sm text-espresso/80">
                      {heroPoster.category}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-navy/85 leading-relaxed">
                    {heroPoster.description}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-navy/15">
                    {heroPoster.disciplines.map((d, i) => (
                      <span key={i} className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-cream text-navy border border-navy/20 font-medium">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SECONDARY POSTERS: Launch Post & Cute, Funky Post */}
            <div className="lg:col-span-5 space-y-8">
              {secondaryPosters.map((poster, index) => {
                const actualIndex = index + 1; // 1 = Launch, 2 = Playful
                return (
                  <div
                    key={poster.id}
                    onClick={() => setActiveLightboxIndex(actualIndex)}
                    className="group cursor-pointer bg-paper rounded-xl editorial-border editorial-shadow transition-all hover:-translate-y-1 overflow-hidden"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveLightboxIndex(actualIndex)}
                    aria-label={`Inspect ${poster.title}`}
                  >
                    {/* Header bar */}
                    <div className="px-4 py-2.5 bg-paper-sub border-b border-navy/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-cream font-mono text-[10px] font-bold text-navy border border-navy/30">
                          POSTER 0{actualIndex + 1}
                        </span>
                        <span className="font-sans text-xs font-bold text-navy uppercase tracking-wider truncate max-w-[200px]">
                          {poster.badge}
                        </span>
                      </div>
                      <span className="text-[11px] font-sans font-semibold text-navy/70 group-hover:text-navy inline-flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" />
                        <span>Inspect</span>
                      </span>
                    </div>

                    {/* Poster Image */}
                    <div className="relative bg-[#1C1713] flex items-center justify-center p-3 sm:p-4">
                      <img
                        src={poster.imageUrl}
                        alt={poster.headline}
                        className="w-full max-h-[380px] object-contain rounded shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>

                    {/* Captions */}
                    <div className="p-5 bg-paper space-y-2">
                      <h4 className="font-display text-2xl text-navy tracking-tight">
                        {poster.headline}
                      </h4>
                      <p className="font-serif-accent italic text-xs text-espresso/80">
                        {poster.subhead}
                      </p>
                      <p className="font-sans text-xs text-navy/80 leading-relaxed">
                        {poster.description}
                      </p>
                      <div className="pt-2 flex flex-wrap gap-1 border-t border-navy/15">
                        {poster.disciplines.slice(0, 3).map((d, i) => (
                          <span key={i} className="text-[10px] font-sans px-2 py-0.5 rounded bg-paper-sub text-navy border border-navy/15 font-medium">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CAFÉ WEBSITE & ATMOSPHERE PHOTO EXPLORATION                    */}
        {/* ============================================================== */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-navy/15 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cream border border-navy/20 text-xs font-mono font-bold text-navy uppercase mb-2">
                <Coffee className="w-3.5 h-3.5 text-espresso" />
                <span>Website Concepts & Spatial Ambiance</span>
              </div>
              <h3 className="font-display text-3xl text-navy tracking-tight uppercase">
                DIGITAL PRESENCE & FOOD PHOTOGRAPHY HARMONY
              </h3>
            </div>
            <a
              href="https://amber-roost.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-bold text-navy hover:text-amber inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              <span>Explore amber-roost.vercel.app in live browser</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4 Supporting Atmosphere & Website Shots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMBER_ROOST_PROJECT.websiteHighlights.map((shot, idx) => (
              <div
                key={idx}
                className="bg-paper rounded-xl editorial-border overflow-hidden group hover:editorial-shadow transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-navy/10 relative">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1.5">
                  <h5 className="font-sans font-bold text-sm text-navy">
                    {shot.title}
                  </h5>
                  <p className="font-sans text-xs text-navy/75 leading-relaxed">
                    {shot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Case study banner footer */}
          <div className="p-6 rounded-xl bg-cream/70 editorial-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-display text-xl text-navy tracking-wide">
                WANT TO SEE THE FULL CASE STUDY BREAKDOWN?
              </h4>
              <p className="font-sans text-xs text-navy/80">
                Explore detailed menu architecture, visual design system tokens, and typography pairing notes.
              </p>
            </div>
            <Link
              to="/work/amber-roost"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy text-paper font-sans text-xs font-bold uppercase tracking-wider hover:bg-amber transition-colors"
            >
              <span>Read The Amber Roost Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Poster Lightbox Modal */}
      <PosterLightboxModal
        posters={posters}
        activePosterIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </section>
  );
}
