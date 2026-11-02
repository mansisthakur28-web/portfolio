import { useState, useEffect, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "The Amber Roost", href: "#featured-case-study", highlight: true },
    { label: "Creative Practice", href: "#practice" },
    { label: "Process", href: "#process" },
    { label: "Skills & Tools", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/') {
      // If we are on a subpage like /work/amber-roost, allow normal navigation to home anchor
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/90 backdrop-blur-md border-b border-navy/15 shadow-sm py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity / Name Lockup */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-navy rounded p-1"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-butter border border-navy/40 group-hover:scale-125 transition-transform" />
              <span className="font-display text-2xl sm:text-3xl tracking-wide text-navy group-hover:text-amber transition-colors">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </div>
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-navy/70 pl-4">
              Digital Media · Creative Design
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={location.pathname === '/' ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans text-xs xl:text-sm font-semibold tracking-wide transition-all relative py-1 focus:outline-none focus:ring-1 focus:ring-navy rounded ${
                  link.highlight
                    ? 'text-navy px-3 py-1 bg-cream rounded-full border border-navy/20 hover:bg-butter hover:border-navy'
                    : 'text-navy/80 hover:text-navy hover:underline underline-offset-4'
                }`}
              >
                {link.highlight && <Sparkles className="w-3 h-3 inline-block mr-1 text-amber" />}
                {link.label}
              </a>
            ))}

            {/* Email CTA */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-navy text-paper font-sans text-xs font-bold uppercase tracking-wider hover:bg-amber transition-colors editorial-shadow-sm focus:outline-none focus:ring-2 focus:ring-navy"
            >
              <span>Say Hello</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-cream/70 text-navy hover:bg-butter border border-navy/20 transition-colors focus:outline-none focus:ring-2 focus:ring-navy"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-4 bg-paper rounded-xl editorial-border editorial-shadow-lg flex flex-col gap-3 animate-fadeIn">
            <div className="text-[11px] font-sans font-bold uppercase tracking-wider text-navy/60 pb-2 border-b border-navy/15">
              Portfolio Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={location.pathname === '/' ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans text-sm font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  link.highlight
                    ? 'bg-cream text-navy font-bold border border-navy/20'
                    : 'text-navy hover:bg-paper-sub'
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-amber" />}
              </a>
            ))}

            <div className="pt-2 border-t border-navy/15 flex flex-col gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full text-center py-2.5 rounded-lg bg-navy text-paper font-sans text-xs font-bold uppercase tracking-wider hover:bg-amber transition-colors"
              >
                Say Hello · {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
