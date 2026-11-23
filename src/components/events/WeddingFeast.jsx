import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { KolamDivider } from '../common/DecorativeMotifs';
import { Utensils, Sparkles } from 'lucide-react';

export default function WeddingFeast() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 px-4 paper-texture relative overflow-hidden bg-gradient-to-b from-cream/40 via-ivory to-cream/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-deep border-b border-gold/40 pb-1 font-semibold">
            {t('feastHeading')}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl mt-3 ${language === 'ta' ? 'font-tamilSerif font-bold text-brown-dark tamil-text' : 'font-serif text-brown-dark'}`}>
            {language === 'ta' ? weddingConfig.feast.heading.ta : weddingConfig.feast.heading.en}
          </h2>
          <p className={`text-xs sm:text-sm text-brown-muted max-w-lg mx-auto mt-2 px-2 ${language === 'ta' ? 'tamil-text' : ''}`}>
            {language === 'ta' ? weddingConfig.feast.subtitle.ta : weddingConfig.feast.subtitle.en}
          </p>
          <KolamDivider className="my-6" />
        </div>

        {/* Feast Showcase Banner */}
        <div className="relative rounded-3xl border-2 border-gold/50 bg-[#FFFDF5] p-6 sm:p-10 shadow-card-royal overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Visual Photography of Feast with Gold Rim */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold/40 shadow-md aspect-[4/3] group">
              <img
                src={weddingConfig.feast.image}
                alt="South Indian Traditional Banana Leaf Wedding Feast"
                className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/75 via-transparent to-transparent flex items-end p-5 text-[#FFFDF5]">
                <div className="text-xs font-serif tracking-widest uppercase text-[#FFF6BF] font-semibold">
                  {language === 'ta' ? weddingConfig.feast.bannerTag.ta : weddingConfig.feast.bannerTag.en}
                </div>
              </div>
            </div>

            {/* Description & Timing */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-gold/45 text-xs font-serif text-gold-deep font-semibold shadow-2xs">
                <Utensils className="w-3.5 h-3.5" />
                <span className={language === 'ta' ? 'tamil-text' : ''}>
                  {language === 'ta' ? weddingConfig.feast.dateTimeBadge.ta : weddingConfig.feast.dateTimeBadge.en}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-serif font-bold text-brown-dark">
                {language === 'ta' ? weddingConfig.feast.heading.ta : weddingConfig.feast.heading.en}
              </h3>

              <p className={`text-xs sm:text-sm text-brown leading-relaxed ${language === 'ta' ? 'font-tamilSans tamil-text' : 'font-serif'}`}>
                {language === 'ta' ? weddingConfig.feast.invitationNote.ta : weddingConfig.feast.invitationNote.en}
              </p>

              <div className="pt-3 border-t border-gold/30">
                <div className="text-xs font-serif text-brown-muted italic">
                  {weddingConfig.feast.diningVenue}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
