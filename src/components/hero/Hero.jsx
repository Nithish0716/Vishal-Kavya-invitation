import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { HangingVilakku, TempleArch, GoldCorner, KolamDivider, SacredKalasam, MangoJasmineThoranam } from '../common/DecorativeMotifs';
import { ChevronDown, Heart } from 'lucide-react';

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 paper-texture overflow-hidden">
      {/* Mango Leaf & Jasmine Garland Thoranam across top */}
      <div className="absolute top-0 inset-x-0 z-10 pointer-events-none">
        <MangoJasmineThoranam className="w-full h-10 sm:h-14" />
      </div>

      {/* Kolam subtle watermark */}
      <div className="absolute inset-0 kolam-pattern opacity-35 pointer-events-none" />

      {/* Hanging Brass Vilakku Lamps on Top Corners */}
      <div className="absolute top-8 left-2 sm:left-8 md:left-14 pointer-events-none z-10">
        <HangingVilakku className="w-8 sm:w-11 md:w-13 h-44 sm:h-56 md:h-64" />
      </div>
      <div className="absolute top-8 right-2 sm:right-8 md:right-14 pointer-events-none z-10">
        <HangingVilakku className="w-8 sm:w-11 md:w-13 h-44 sm:h-56 md:h-64" />
      </div>

      {/* Main Ornate Frame Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center px-4 sm:px-8 md:px-12 py-10 md:py-16 rounded-3xl border-2 border-gold/45 bg-[#FFFDF5]/90 backdrop-blur-md shadow-card-royal mt-6">
        {/* Ornate Gold Corners */}
        <div className="absolute top-3 left-3"><GoldCorner position="top-left" className="w-8 sm:w-10 h-8 sm:h-10 text-gold" /></div>
        <div className="absolute top-3 right-3"><GoldCorner position="top-right" className="w-8 sm:w-10 h-8 sm:h-10 text-gold" /></div>
        <div className="absolute bottom-3 left-3"><GoldCorner position="bottom-left" className="w-8 sm:w-10 h-8 sm:h-10 text-gold" /></div>
        <div className="absolute bottom-3 right-3"><GoldCorner position="bottom-right" className="w-8 sm:w-10 h-8 sm:h-10 text-gold" /></div>

        {/* Sacred Temple Gateway Arch */}
        <TempleArch className="w-full -mt-4 mb-2" />

        {/* Sacred Invocation / Kalasam */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center mb-3"
        >
          <SacredKalasam className="w-11 h-11 mb-1.5" />
          <p className="text-[11px] sm:text-xs font-serif tracking-[0.22em] uppercase text-gold-deep font-semibold">
            {language === 'ta' ? weddingConfig.invitationTexts.blessingHeader.ta : weddingConfig.invitationTexts.blessingHeader.en}
          </p>
        </motion.div>

        {/* "Together with our families" */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-xs sm:text-sm md:text-base font-serif tracking-widest uppercase text-brown-light mb-4 sm:mb-6"
        >
          {language === 'ta' ? weddingConfig.invitationTexts.familyAnnouncement.ta : weddingConfig.invitationTexts.familyAnnouncement.en}
        </motion.p>

        {/* Couple Names - The Central Visual Attraction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="my-3 sm:my-6 space-y-1 sm:space-y-2"
        >
          {/* Bride Name */}
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-script text-brown-dark text-gold-shimmer px-2 leading-none">
              {weddingConfig.couple.bride.firstName}
            </h1>
            {language === 'ta' && (
              <p className="text-base sm:text-2xl font-tamilSerif font-bold text-brown-deep tracking-normal mt-1 tamil-text">
                {weddingConfig.couple.bride.tamilName}
              </p>
            )}
          </div>

          {/* Ornamental Ampersand / Heart Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 sm:my-3">
            <div className="h-px w-14 sm:w-24 bg-gradient-to-r from-transparent via-gold to-gold" />
            <div className="relative">
              <span className="text-2xl sm:text-4xl font-serif italic text-gold-deep">
                &amp;
              </span>
            </div>
            <div className="h-px w-14 sm:w-24 bg-gradient-to-l from-transparent via-gold to-gold" />
          </div>

          {/* Groom Name */}
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-script text-brown-dark text-gold-shimmer px-2 leading-none">
              {weddingConfig.couple.groom.firstName}
            </h1>
            {language === 'ta' && (
              <p className="text-base sm:text-2xl font-tamilSerif font-bold text-brown-deep tracking-normal mt-1 tamil-text">
                {weddingConfig.couple.groom.tamilName}
              </p>
            )}
          </div>
        </motion.div>

        {/* Kolam Floral Flourish Divider */}
        <KolamDivider className="my-4 sm:my-6" />

        {/* Emotional Tagline / Vow */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className={`text-sm sm:text-lg md:text-xl max-w-xl mx-auto text-brown leading-relaxed px-4 ${
            language === 'ta' ? 'font-tamilSerif italic tamil-text' : 'font-serif italic'
          }`}
        >
          "{language === 'ta' ? weddingConfig.couple.tagline.ta : weddingConfig.couple.tagline.en}"
        </motion.p>

        {/* Auspicious Date Pill Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-4 px-5 sm:px-8 py-2.5 rounded-full border border-gold/50 bg-gradient-to-r from-cream/90 via-ivory to-cream/90 shadow-xs"
        >
          <span className="text-gold text-xs sm:text-sm">🪷</span>
          <span className="text-xs sm:text-sm font-serif tracking-widest uppercase font-semibold text-brown-dark">
            {weddingConfig.date.dayOfWeek}, {weddingConfig.date.day} {weddingConfig.date.monthName} {weddingConfig.date.year}
          </span>
          <span className="text-gold text-xs sm:text-sm">✦</span>
          <span className="text-xs sm:text-sm font-serif tracking-wider text-gold-deep font-semibold">
            {weddingConfig.venue.city}
          </span>
        </motion.div>
      </div>

      {/* Smooth Scroll Down Indicator */}
      <motion.a
        href="#invitation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex flex-col items-center gap-1.5 text-brown-light hover:text-gold-deep transition-colors group cursor-pointer z-10"
      >
        <span className="text-[11px] font-serif tracking-[0.2em] uppercase group-hover:tracking-[0.25em] transition-all">
          {t('scrollExplore')}
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex items-start justify-center p-1 shadow-xs bg-ivory/60">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-2.5 bg-gold rounded-full"
          />
        </div>
      </motion.a>
    </section>
  );
}
