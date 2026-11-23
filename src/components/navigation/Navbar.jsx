import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAudio } from '../../context/AudioContext';
import { weddingConfig } from '../../weddingConfig';
import { Menu, X, Volume2, VolumeX, Globe } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { isPlaying, toggleMusic } = useAudio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('navHome'), href: '#hero' },
    { label: t('navInvitation'), href: '#invitation' },
    { label: t('navDate'), href: '#date-reveal' },
    { label: t('navEvents'), href: '#events' },
    { label: t('navVenue'), href: '#venue' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Gold Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gold/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-gold via-gold-shimmer to-gold transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Main Navbar */}
      <nav
        className={`fixed top-3 inset-x-0 mx-auto max-w-6xl z-40 px-4 transition-all duration-300 ${
          isScrolled ? 'top-2' : 'top-4'
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border border-gold/40 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#FFFDF5]/90 backdrop-blur-md shadow-gold-md'
              : 'bg-[#FFFDF5]/75 backdrop-blur-sm shadow-sm'
          }`}
        >
          {/* Logo / Monogram (Initials & Ampersand in 1 single horizontal line) */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-1.5 border-gold flex items-center justify-center bg-gradient-to-br from-ivory via-cream to-ivory text-gold-deep shadow-xs group-hover:scale-105 transition-transform shrink-0 px-1 overflow-hidden">
              <span className="font-serif font-bold text-[11px] sm:text-xs tracking-tight whitespace-nowrap leading-none select-none text-center">
                {weddingConfig.couple.monogram}
              </span>
            </div>
            <span className="font-serif text-sm md:text-base font-semibold tracking-widest text-brown-dark hidden sm:inline">
              ROYAL VOWS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs tracking-widest uppercase font-serif text-brown hover:text-gold-deep transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Action Controls: Language Switcher & Audio Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Music Control Pill */}
            <button
              onClick={toggleMusic}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-serif tracking-wider border transition-all ${
                isPlaying
                  ? 'border-gold bg-gold/15 text-brown-dark'
                  : 'border-brown-light/30 bg-ivory text-brown-muted hover:border-gold'
              }`}
              title={isPlaying ? t('musicPlaying') : t('musicPaused')}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-gold-deep animate-pulse" />
                  <span className="hidden md:inline text-[11px]">BGM</span>
                  <span className="flex gap-0.5 items-end h-2.5">
                    <span className="w-0.5 h-2 bg-gold animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <span className="w-0.5 h-3 bg-gold animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-0.5 h-1.5 bg-gold animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden md:inline text-[11px]">Play</span>
                </>
              )}
            </button>

            {/* Language Switcher Pill */}
            <div className="flex items-center bg-ivory rounded-full border border-gold/40 p-0.5 text-xs font-serif shadow-xs">
              <button
                onClick={() => setLanguage('ta')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-tamilSerif transition-all duration-200 ${
                  language === 'ta'
                    ? 'bg-gradient-to-r from-gold-deep to-gold text-[#FFFDF5] font-semibold shadow-xs'
                    : 'text-brown hover:text-gold-deep'
                }`}
              >
                தமிழ்
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-serif transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-gold-deep to-gold text-[#FFFDF5] font-semibold shadow-xs'
                    : 'text-brown hover:text-gold-deep'
                }`}
              >
                English
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full border border-gold/40 text-brown hover:text-gold-deep hover:bg-gold/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl bg-[#FFFDF5]/95 backdrop-blur-lg border border-gold/40 shadow-gold-lg animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-serif tracking-wider text-brown hover:bg-gold/15 hover:text-brown-dark transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-gold text-xs">✦</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
