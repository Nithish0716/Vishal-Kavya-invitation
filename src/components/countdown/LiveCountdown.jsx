import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { KolamDivider } from '../common/DecorativeMotifs';
import { Sparkles } from 'lucide-react';

export default function LiveCountdown() {
  const { language, t } = useLanguage();

  const calculateTimeLeft = () => {
    const targetDate = new Date(weddingConfig.date.fullDateString).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      isComplete: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: t('days'), value: timeLeft.days },
    { label: t('hours'), value: timeLeft.hours },
    { label: t('minutes'), value: timeLeft.minutes },
    { label: t('seconds'), value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-ivory via-cream/60 to-ivory relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-deep border-b border-gold/40 pb-1 font-semibold">
          {language === 'ta' ? weddingConfig.countdown.badge.ta : weddingConfig.countdown.badge.en}
        </span>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl mt-3 ${language === 'ta' ? 'font-tamilSerif font-bold text-brown-dark tamil-text' : 'font-serif text-brown-dark'}`}>
          {language === 'ta' ? weddingConfig.countdown.title.ta : weddingConfig.countdown.title.en}
        </h2>

        <KolamDivider className="my-6" />

        {/* Countdown Box Grid */}
        {!timeLeft.isComplete ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto mt-6">
            {timeUnits.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative bg-[#FFFDF5] rounded-2xl border-2 border-gold/50 p-4 sm:p-6 shadow-card-royal flex flex-col items-center justify-center overflow-hidden hover:border-gold transition-colors"
              >
                {/* Gold Inner Glow */}
                <div className="absolute inset-0 gold-inner-shadow pointer-events-none" />

                {/* Animated Number */}
                <div className="h-12 sm:h-16 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={unit.value}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="text-3xl sm:text-5xl font-serif font-bold text-brown-dark text-gold-foil leading-none"
                    >
                      {String(unit.value).padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Unit Label */}
                <span className={`text-[10px] sm:text-xs font-serif uppercase tracking-widest text-brown-muted mt-2 border-t border-gold/25 pt-2 w-full ${language === 'ta' ? 'tamil-text' : ''}`}>
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Celebration Message if Countdown reached zero */
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 rounded-3xl bg-gradient-to-r from-cream via-ivory to-cream border-2 border-gold shadow-gold-lg max-w-xl mx-auto"
          >
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-2 animate-bounce" />
            <h3 className="text-2xl font-serif font-bold text-brown-dark">
              {t('weddingToday')}
            </h3>
            <p className={`text-sm font-serif text-brown mt-2 ${language === 'ta' ? 'tamil-text' : ''}`}>
              {language === 'ta'
                ? weddingConfig.countdown.todayCelebration.ta
                : weddingConfig.countdown.todayCelebration.en}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
