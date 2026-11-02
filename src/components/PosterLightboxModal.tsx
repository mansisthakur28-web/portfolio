import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import type { CampaignPoster } from '../data/portfolioData';

interface PosterLightboxModalProps {
  posters: CampaignPoster[];
  activePosterIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function PosterLightboxModal({
  posters,
  activePosterIndex,
  onClose,
  onNavigate,
}: PosterLightboxModalProps) {
  const isOpen = activePosterIndex !== null && Boolean(posters[activePosterIndex]);
  const currentPoster = isOpen ? posters[activePosterIndex] : null;

  useEffect(() => {
    if (!isOpen || activePosterIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((activePosterIndex + 1) % posters.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((activePosterIndex - 1 + posters.length) % posters.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, activePosterIndex, posters.length, onClose, onNavigate]);

  if (!isOpen || !currentPoster || activePosterIndex === null) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged view of ${currentPoster.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-navy/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-paper rounded-xl editorial-border editorial-shadow-lg flex flex-col overflow-hidden text-navy"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-navy/20 bg-cream/70">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg tracking-wider text-navy bg-butter px-2.5 py-0.5 rounded border border-navy/40">
              POSTER {String(activePosterIndex + 1).padStart(2, '0')} / {String(posters.length).padStart(2, '0')}
            </span>
            <span className="hidden sm:inline-block font-sans text-xs font-semibold uppercase tracking-wider text-navy/70">
              {currentPoster.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-navy/60 hidden md:inline-block font-sans">
              Press <kbd className="px-1.5 py-0.5 bg-paper rounded border border-navy/30 text-[10px] font-mono">ESC</kbd> to close · <kbd className="px-1.5 py-0.5 bg-paper rounded border border-navy/30 text-[10px] font-mono">←</kbd> <kbd className="px-1.5 py-0.5 bg-paper rounded border border-navy/30 text-[10px] font-mono">→</kbd> to navigate
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-paper hover:bg-butter text-navy transition-colors border border-navy/30 focus:outline-none focus:ring-2 focus:ring-navy"
              aria-label="Close poster lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Area: Split layout on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">
          {/* Main Poster Image Preview */}
          <div className="lg:col-span-7 bg-[#1A1815] flex items-center justify-center p-4 sm:p-6 relative min-h-[350px] lg:min-h-[560px]">
            <img
              src={currentPoster.imageUrl}
              alt={currentPoster.headline}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded shadow-2xl transition-transform duration-300"
            />

            {/* Left / Right Navigation Overlay on image */}
            <button
              onClick={() => onNavigate((activePosterIndex - 1 + posters.length) % posters.length)}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-paper/90 hover:bg-butter text-navy transition-all shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-navy"
              aria-label="Previous poster"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate((activePosterIndex + 1) % posters.length)}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-paper/90 hover:bg-butter text-navy transition-all shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-navy"
              aria-label="Next poster"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Poster Editorial Metadata & Art Direction Notes */}
          <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between bg-paper border-t lg:border-t-0 lg:border-l border-navy/20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-periwinkle/15 text-navy text-xs font-semibold tracking-wider uppercase border border-periwinkle/30">
                <Sparkles className="w-3.5 h-3.5 text-amber" />
                <span>{currentPoster.badge}</span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl text-navy tracking-tight leading-tight">
                  {currentPoster.headline}
                </h3>
                <p className="font-serif-accent italic text-base sm:text-lg text-espresso/80 mt-1">
                  {currentPoster.subhead}
                </p>
              </div>

              <div className="text-sm font-sans text-navy/85 leading-relaxed space-y-2 border-y border-navy/15 py-3">
                <p>{currentPoster.description}</p>
                <p className="text-xs text-navy/70 italic bg-cream/40 p-2.5 rounded border border-navy/10">
                  <strong className="not-italic font-semibold text-navy">Art Direction Note: </strong>
                  {currentPoster.notes}
                </p>
              </div>

              {/* Disciplines Demonstrated */}
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-navy/60 block mb-2">
                  Skills & Art Direction Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentPoster.disciplines.map((d, i) => (
                    <span
                      key={i}
                      className="text-xs font-sans px-2.5 py-1 rounded-full bg-cream text-navy font-medium border border-navy/20"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Palette Swatches */}
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-navy/60 block mb-2">
                  Campaign Color Harmony
                </span>
                <div className="flex items-center gap-2">
                  {currentPoster.palette.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-paper-sub px-2 py-1 rounded border border-navy/20">
                      <div
                        className="w-4 h-4 rounded-full border border-navy/40 shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[11px] font-mono text-navy font-medium uppercase">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-4 border-t border-navy/15 flex items-center justify-between">
              <a
                href={currentPoster.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-navy hover:text-amber transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Open full-resolution file in new tab</span>
              </a>

              <div className="flex gap-1.5">
                {posters.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigate(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === activePosterIndex ? 'w-6 bg-navy' : 'bg-navy/30 hover:bg-navy/60'
                    }`}
                    aria-label={`Jump to poster ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
