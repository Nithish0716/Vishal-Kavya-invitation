import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { GoldCorner, KolamDivider, SacredKalasam } from '../common/DecorativeMotifs';

export default function TraditionalCard() {
  const { language, t } = useLanguage();

  return (
    <section id="invitation" className="relative py-20 px-4 paper-texture overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading Badge */}
        <div className="text-center mb-10">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-deep border-b border-gold/40 pb-1 font-semibold">
            {language === 'ta' ? weddingConfig.invitationTexts.cardSectionBadge.ta : weddingConfig.invitationTexts.cardSectionBadge.en}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl mt-3 ${language === 'ta' ? 'font-tamilSerif font-bold text-brown-dark tamil-text' : 'font-serif text-brown-dark'}`}>
            {language === 'ta' ? weddingConfig.invitationTexts.cardSectionHeading.ta : weddingConfig.invitationTexts.cardSectionHeading.en}
          </h2>
          <KolamDivider className="my-5" />
        </div>

        {/* Traditional Invitation Card Surface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative bg-[#FFFDF5] rounded-3xl border-2 border-gold/55 p-6 sm:p-10 md:p-14 shadow-card-royal"
        >
          {/* Double Gold Line Inset Border */}
          <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-gold/35 pointer-events-none" />

          {/* Gold Corner Accents */}
          <div className="absolute top-2 left-2"><GoldCorner position="top-left" className="w-8 h-8 text-gold" /></div>
          <div className="absolute top-2 right-2"><GoldCorner position="top-right" className="w-8 h-8 text-gold" /></div>
          <div className="absolute bottom-2 left-2"><GoldCorner position="bottom-left" className="w-8 h-8 text-gold" /></div>
          <div className="absolute bottom-2 right-2"><GoldCorner position="bottom-right" className="w-8 h-8 text-gold" /></div>

          {/* Auspicious Kalasam & Invocation Header */}
          <div className="text-center mb-7 relative z-10">
            <div className="flex justify-center mb-2">
              <SacredKalasam className="w-12 h-12" />
            </div>
            <p className="text-xs sm:text-sm font-serif tracking-[0.2em] text-gold-deep uppercase font-semibold">
              {language === 'ta' ? weddingConfig.invitationTexts.blessingHeader.ta : weddingConfig.invitationTexts.blessingHeader.en}
            </p>
          </div>

          {/* Invitation Main Text */}
          <div className="text-center max-w-2xl mx-auto space-y-6 relative z-10">
            {/* Blessings statement */}
            <p className={`text-sm sm:text-base md:text-lg text-brown leading-relaxed ${language === 'ta' ? 'font-tamilSerif tamil-text' : 'font-serif'}`}>
              {language === 'ta' ? weddingConfig.invitationTexts.invitationBody.ta : weddingConfig.invitationTexts.invitationBody.en}
            </p>

            <KolamDivider className="my-4" />

            {/* Couple & Parents Bilateral Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-center">
              {/* Bride Column */}
              <div className="p-5 rounded-2xl bg-ivory/80 border border-gold/40 shadow-xs space-y-2">
                <span className="text-[11px] font-serif uppercase tracking-widest text-gold-deep block font-semibold">
                  {language === 'ta' ? weddingConfig.couple.bride.label.ta : weddingConfig.couple.bride.label.en}
                </span>
                <h3 className="text-2xl sm:text-4xl font-script text-brown-dark leading-tight">
                  {weddingConfig.couple.bride.firstName}
                </h3>
                {language === 'ta' && (
                  <p className="text-sm sm:text-base font-tamilSerif font-bold text-brown tamil-text">
                    {weddingConfig.couple.bride.tamilName}
                  </p>
                )}
                <p className={`text-xs text-brown-light pt-2 border-t border-gold/25 ${language === 'ta' ? 'font-tamilSans tamil-text' : 'font-serif'}`}>
                  {language === 'ta' ? weddingConfig.couple.bride.tamilParents : weddingConfig.couple.bride.parents}
                </p>
              </div>

              {/* Groom Column */}
              <div className="p-5 rounded-2xl bg-ivory/80 border border-gold/40 shadow-xs space-y-2">
                <span className="text-[11px] font-serif uppercase tracking-widest text-gold-deep block font-semibold">
                  {language === 'ta' ? weddingConfig.couple.groom.label.ta : weddingConfig.couple.groom.label.en}
                </span>
                <h3 className="text-2xl sm:text-4xl font-script text-brown-dark leading-tight">
                  {weddingConfig.couple.groom.firstName}
                </h3>
                {language === 'ta' && (
                  <p className="text-sm sm:text-base font-tamilSerif font-bold text-brown tamil-text">
                    {weddingConfig.couple.groom.tamilName}
                  </p>
                )}
                <p className={`text-xs text-brown-light pt-2 border-t border-gold/25 ${language === 'ta' ? 'font-tamilSans tamil-text' : 'font-serif'}`}>
                  {language === 'ta' ? weddingConfig.couple.groom.tamilParents : weddingConfig.couple.groom.parents}
                </p>
              </div>
            </div>

            {/* Date & Muhurtham Summary Card */}
            <div className="bg-gradient-to-r from-cream/70 via-ivory to-cream/70 rounded-2xl p-5 border border-gold/45 text-center shadow-xs">
              <span className="text-xs uppercase tracking-widest text-gold-deep block font-semibold mb-1">
                {language === 'ta' ? weddingConfig.date.muhurthamHeading.ta : weddingConfig.date.muhurthamHeading.en}
              </span>
              <p className="text-lg sm:text-xl font-serif font-bold text-brown-dark">
                {weddingConfig.date.dayOfWeek}, {weddingConfig.date.day} {weddingConfig.date.monthName} {weddingConfig.date.year}
              </p>
              <p className={`text-xs sm:text-sm font-serif text-brown-muted mt-1 ${language === 'ta' ? 'tamil-text' : ''}`}>
                {language === 'ta' ? weddingConfig.date.muhurthamTimeTamil : weddingConfig.date.muhurthamTime} ({weddingConfig.date.muhurthamLagnam})
              </p>
            </div>

            {/* Closing Blessing */}
            <p className={`text-xs sm:text-sm italic text-brown-muted pt-3 ${language === 'ta' ? 'font-tamilSerif tamil-text' : 'font-serif'}`}>
              {language === 'ta' ? weddingConfig.invitationTexts.closingNote.ta : weddingConfig.invitationTexts.closingNote.en}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
