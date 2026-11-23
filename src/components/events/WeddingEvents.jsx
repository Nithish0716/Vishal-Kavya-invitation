import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { GoldCorner, KolamDivider } from '../common/DecorativeMotifs';
import { Calendar, Clock, MapPin, Sparkles, Flame, Utensils, Heart, Flower2 } from 'lucide-react';

export default function WeddingEvents() {
  const { language, t } = useLanguage();

  const getEventIcon = (iconType) => {
    switch (iconType) {
      case 'flower': return <Flower2 className="w-5 h-5 text-gold-deep" />;
      case 'flame': return <Flame className="w-5 h-5 text-gold-deep" />;
      case 'utensils': return <Utensils className="w-5 h-5 text-gold-deep" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 text-gold-deep" />;
      default: return <Heart className="w-5 h-5 text-gold-deep" />;
    }
  };

  return (
    <section id="events" className="py-20 px-4 paper-texture relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-deep border-b border-gold/40 pb-1 font-semibold">
            {t('eventsTitle')}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl mt-3 ${language === 'ta' ? 'font-tamilSerif font-bold text-brown-dark tamil-text' : 'font-serif text-brown-dark'}`}>
            {language === 'ta' ? weddingConfig.eventsHeading.ta : weddingConfig.eventsHeading.en}
          </h2>
          <p className={`text-xs sm:text-sm text-brown-muted max-w-lg mx-auto mt-2 px-2 ${language === 'ta' ? 'tamil-text' : ''}`}>
            {t('eventsSubtitle')}
          </p>
          <KolamDivider className="my-6" />
        </div>

        {/* Timeline Layout (Desktop Alternating Grid & Mobile Vertical Timeline) */}
        <div className="relative">
          {/* Vertical Golden Spine Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {weddingConfig.events.map((evt, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={evt.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node / Icon Pin on Desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-gold bg-ivory shadow-gold-sm items-center justify-center z-10">
                    {getEventIcon(evt.icon)}
                  </div>

                  {/* Empty Spacer Column for 50% split on desktop */}
                  <div className="hidden md:block w-1/2 px-8" />

                  {/* Event Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className="w-full md:w-1/2 px-2 md:px-8"
                  >
                    <div
                      className={`relative bg-[#FFFDF5] rounded-3xl border ${
                        evt.featured ? 'border-2 border-gold shadow-gold-md' : 'border-gold/50 shadow-card-royal'
                      } p-6 sm:p-8 hover:shadow-gold-md transition-all duration-300 group`}
                    >
                      {/* Featured Muhurtham Badge */}
                      {evt.featured && (
                        <div className="absolute -top-3.5 right-6 px-4 py-0.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-[#FFFDF5] text-[10px] font-serif uppercase tracking-widest font-semibold shadow-xs">
                          {language === 'ta' ? weddingConfig.featuredEventLabel.ta : weddingConfig.featuredEventLabel.en}
                        </div>
                      )}

                      {/* Corner Accents */}
                      <div className="absolute top-2 left-2"><GoldCorner position="top-left" className="w-5 h-5 text-gold/60" /></div>
                      <div className="absolute top-2 right-2"><GoldCorner position="top-right" className="w-5 h-5 text-gold/60" /></div>

                      {/* Header with Icon */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="md:hidden w-10 h-10 rounded-full border border-gold bg-cream flex items-center justify-center shrink-0">
                          {getEventIcon(evt.icon)}
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-serif font-bold text-brown-dark group-hover:text-gold-deep transition-colors">
                            {evt.name}
                          </h3>
                          {language === 'ta' && (
                            <p className="text-sm font-tamilSerif font-bold text-gold-deep tamil-text">
                              {evt.tamilName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Date & Time Pills */}
                      <div className="flex flex-wrap gap-2 my-3 text-xs font-serif">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/80 border border-gold/35 text-brown">
                          <Calendar className="w-3.5 h-3.5 text-gold-deep" />
                          <span className={language === 'ta' ? 'tamil-text' : ''}>{language === 'ta' ? evt.tamilDate : evt.date}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/80 border border-gold/35 text-brown">
                          <Clock className="w-3.5 h-3.5 text-gold-deep" />
                          <span className={`font-semibold text-brown-dark ${language === 'ta' ? 'tamil-text' : ''}`}>{language === 'ta' ? evt.tamilTime : evt.time}</span>
                        </span>
                      </div>

                      {/* Venue Location */}
                      <div className="flex items-start gap-1.5 text-xs font-serif text-brown-light my-2">
                        <MapPin className="w-3.5 h-3.5 text-gold-deep shrink-0 mt-0.5" />
                        <span className={language === 'ta' ? 'tamil-text' : ''}>{language === 'ta' ? evt.tamilVenue : evt.venue}</span>
                      </div>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm text-brown-muted mt-3 pt-3 border-t border-gold/20 leading-relaxed ${language === 'ta' ? 'font-tamilSans tamil-text' : 'font-serif'}`}>
                        {language === 'ta' ? evt.tamilDescription : evt.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
