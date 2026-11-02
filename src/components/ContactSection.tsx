import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-paper paper-grid border-b border-navy/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-paper-card rounded-2xl editorial-border editorial-shadow-lg p-6 sm:p-10 md:p-14 relative overflow-hidden">
          {/* Subtle accent badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cream border border-navy/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber" />
            <span className="font-mono text-xs font-bold text-navy uppercase tracking-wider">
              06 // GET IN TOUCH & COLLABORATE
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-navy tracking-tight uppercase leading-[0.95] mb-6">
            HAVE AN IDEA? LET'S MAKE IT VISUAL.
          </h2>

          <p className="font-sans text-base sm:text-lg text-navy/85 leading-relaxed max-w-2xl mb-8">
            Whether you are looking to explore a café branding direction, create high-impact campaign artwork, design editorial social creatives, or discuss visual concepts — my inbox is always open.
          </p>

          {/* Interactive Email Bar */}
          <div className="p-4 sm:p-5 rounded-xl bg-cream/70 editorial-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-navy text-paper">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-navy/60 block">
                  Direct Email Address
                </span>
                <span className="font-sans font-bold text-base sm:text-lg text-navy select-all">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-paper-card hover:bg-butter text-navy font-sans text-xs font-bold uppercase tracking-wider border border-navy/25 transition-all focus:outline-none focus:ring-2 focus:ring-navy"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-olive" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-navy text-paper font-sans text-xs font-bold uppercase tracking-wider hover:bg-amber transition-colors focus:outline-none focus:ring-2 focus:ring-navy"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details Footnote */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-navy/15 text-xs font-sans text-navy/70">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-navy block">Location</strong>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <GraduationCap className="w-4 h-4 text-periwinkle shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-navy block">Academic Details</strong>
                <span>{PERSONAL_INFO.education.degree}</span>
                <span className="block text-navy/60">{PERSONAL_INFO.education.institution} (2024–2028)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
