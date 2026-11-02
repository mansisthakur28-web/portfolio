import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-paper py-12 sm:py-16 border-t-2 border-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-paper/15">
          {/* Brand lockup */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-butter" />
              <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-paper">
                {PERSONAL_INFO.name.toUpperCase()}
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-paper/70 pl-4 max-w-md">
              {PERSONAL_INFO.roleDescriptor} · Bhopal, Madhya Pradesh, India
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-paper/10 hover:bg-butter hover:text-navy text-paper font-sans text-xs font-bold uppercase tracking-wider transition-colors border border-paper/20 focus:outline-none focus:ring-2 focus:ring-butter"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright and notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-paper/60 text-center sm:text-left">
          <p>
            © 2024–2028 {PERSONAL_INFO.name}. All creative work, campaign artwork, and website concepts designed with care.
          </p>

          <p className="flex items-center gap-1.5 justify-center">
            <span>Crafted with typography & editorial aesthetics</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
