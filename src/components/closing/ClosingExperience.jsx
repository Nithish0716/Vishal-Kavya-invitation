import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { KolamDivider, SacredKalasam } from '../common/DecorativeMotifs';
import AddToCalendar from '../calendar/AddToCalendar';
import { RotateCcw, ArrowUp, Heart } from 'lucide-react';

export default function ClosingExperience({ onReplay }) {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-12 px-4 paper-texture overflow-hidden border-t border-gold/35">
      {/* Kolam pattern subtle background */}
      <div className="absolute inset-0 kolam-pattern opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Sacred Kalasam Icon */}
        <div className="flex justify-center mb-4">
          <SacredKalasam className="w-12 h-12" />
        </div>

        {/* Closing Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-2xl sm:text-3xl md:text-5xl ${
            language === 'ta' ? 'font-tamilSerif font-bold text-brown-dark tamil-text' : 'font-serif text-brown-dark'
          }`}
        >
          {language === 'ta' ? weddingConfig.closing.title.ta : weddingConfig.closing.title.en}
        </motion.h2>

        <p className={`text-xs sm:text-base text-brown-muted max-w-xl mx-auto mt-3 px-4 ${
          language === 'ta' ? 'font-tamilSans tamil-text' : 'font-serif'
        }`}>
          {language === 'ta' ? weddingConfig.closing.subtitle.ta : weddingConfig.closing.subtitle.en}
        </p>

        <KolamDivider className="my-6" />

        {/* Couple Signature Sign-off */}
        <div className="my-6 space-y-2">
          <span className="text-xs font-serif uppercase tracking-widest text-gold-deep block font-semibold">
            {language === 'ta' ? weddingConfig.closing.signatureLine.ta : weddingConfig.closing.signatureLine.en}
          </span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-script text-brown-dark text-gold-shimmer">
            {weddingConfig.couple.bride.firstName} &amp; {weddingConfig.couple.groom.firstName}
          </h3>
          {language === 'ta' && (
            <p className="text-sm sm:text-base font-tamilSerif text-brown font-bold tamil-text">
              {weddingConfig.couple.bride.tamilName} &amp; {weddingConfig.couple.groom.tamilName}
            </p>
          )}
        </div>

        {/* Add to Calendar Section */}
        <div className="my-8 p-6 rounded-3xl bg-gradient-to-r from-cream/60 via-ivory to-cream/60 border border-gold/45 max-w-xl mx-auto shadow-xs">
          <span className="text-xs font-serif uppercase tracking-widest text-gold-deep block font-semibold mb-2">
            {language === 'ta' ? weddingConfig.closing.calendarBoxTitle.ta : weddingConfig.closing.calendarBoxTitle.en}
          </span>
          <AddToCalendar />
        </div>

        {/* Replay Invitation & Back to Top Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            onClick={onReplay}
            className="px-6 py-3 rounded-full border border-gold bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-[#FFFDF5] font-serif text-xs uppercase tracking-widest font-semibold hover:shadow-gold-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#FFF2B2]" />
            <span>{t('replayInvitation')}</span>
          </button>

          <button
            onClick={scrollToTop}
            className="px-5 py-3 rounded-full border border-gold/40 bg-ivory text-brown hover:text-gold-deep hover:border-gold font-serif text-xs uppercase tracking-widest font-semibold hover:shadow-sm transition-all flex items-center gap-2"
          >
            <ArrowUp className="w-3.5 h-3.5 text-gold-deep" />
            <span>{t('backToTop')}</span>
          </button>
        </div>

        {/* Hashtag & Footer note */}
        <div className="mt-12 pt-6 border-t border-gold/30 flex flex-col sm:flex-row items-center justify-between text-xs font-serif text-brown-muted gap-2">
          <span>{weddingConfig.couple.hashtag}</span>
          <span className="flex items-center gap-1">
            <span>{language === 'ta' ? weddingConfig.closing.credits.ta : weddingConfig.closing.credits.en}</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </span>
          <span>{weddingConfig.date.year} · Royal Vows</span>
        </div>
      </div>
    </footer>
  );
}
