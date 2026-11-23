import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useAudio } from '../../context/AudioContext';
import { weddingConfig } from '../../weddingConfig';
import { HangingVilakku, GoldCorner, MangoJasmineThoranam } from '../common/DecorativeMotifs';
import { Sparkles, Heart } from 'lucide-react';

export default function EnvelopeOpening({ onOpened }) {
  const { language, t } = useLanguage();
  const { playMusic } = useAudio();
  const [stage, setStage] = useState('closed'); // 'closed' | 'opening' | 'card_rising' | 'revealed'

  const handleOpen = () => {
    if (stage !== 'closed') return;
    playMusic();
    setStage('opening');

    // 1. Top triangular flap flips backwards 180 degrees (0ms to 750ms)
    // 2. Card emerges and rises smoothly in front of all envelope elements (750ms to 2200ms)
    setTimeout(() => {
      setStage('card_rising');
    }, 750);

    // 3. Card reaches full elevation and reveals text clearly (2400ms)
    setTimeout(() => {
      setStage('revealed');
      // Handover smoothly into the main website
      setTimeout(() => {
        onOpened();
      }, 1500);
    }, 2400);
  };

  const handleSkip = () => {
    playMusic();
    onOpened();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFDF5] via-[#FAF7EE] to-[#F5EEDC] px-4 overflow-hidden select-none"
    >
      {/* Mango Leaf & Jasmine Thoranam at top */}
      <div className="absolute top-0 inset-x-0 z-20 pointer-events-none">
        <MangoJasmineThoranam className="w-full h-10 sm:h-14" />
      </div>

      {/* Subtle Background Kolam Watermark */}
      <div className="absolute inset-0 kolam-pattern opacity-35 pointer-events-none" />

      {/* Hanging Brass Vilakku Lamps on Corners */}
      <div className="absolute top-6 left-3 sm:left-10 md:left-16 pointer-events-none z-10">
        <HangingVilakku className="w-8 sm:w-11 md:w-13 h-44 sm:h-56" />
      </div>
      <div className="absolute top-6 right-3 sm:right-10 md:right-16 pointer-events-none z-10">
        <HangingVilakku className="w-8 sm:w-11 md:w-13 h-44 sm:h-56" />
      </div>

      {/* Skip Option for Returning Visitors */}
      <div className="absolute top-12 right-4 sm:right-8 z-30">
        <button
          onClick={handleSkip}
          className="text-[11px] sm:text-xs uppercase tracking-widest text-brown-light/85 hover:text-brown-dark border border-gold/45 hover:border-gold px-4 py-1.5 rounded-full backdrop-blur-md bg-ivory/80 transition-all duration-300 shadow-sm hover:shadow-gold-sm"
        >
          {t('skipIntro')} →
        </button>
      </div>

      {/* Header Titles (Fades out when card rises so card has completely clear visibility) */}
      <motion.div
        animate={{
          opacity: stage === 'card_rising' || stage === 'revealed' ? 0.15 : 1,
          y: stage === 'card_rising' || stage === 'revealed' ? -15 : 0
        }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-3 sm:mb-5 max-w-lg px-2 mt-2 pointer-events-none"
      >
        <p className="text-[11px] sm:text-xs font-serif tracking-[0.22em] uppercase text-gold-deep mb-1 font-semibold">
          {language === 'ta' ? weddingConfig.invitationTexts.blessingHeader.ta : weddingConfig.invitationTexts.blessingHeader.en}
        </p>

        <h1
          className={`text-2xl sm:text-4xl ${
            language === 'ta' ? 'font-tamilSerif font-bold text-brown-dark' : 'font-serif text-brown-dark font-medium'
          } tracking-wide leading-tight`}
        >
          {language === 'ta' ? weddingConfig.invitationTexts.envelopeTitle.ta : weddingConfig.invitationTexts.envelopeTitle.en}
        </h1>

        <p className="text-xs sm:text-sm text-brown-muted mt-1 font-serif tracking-wider">
          {language === 'ta' ? weddingConfig.invitationTexts.envelopeSubtitle.ta : weddingConfig.invitationTexts.envelopeSubtitle.en}
        </p>
      </motion.div>

      {/* 3D Envelope Presentation Stage */}
      <div
        className="relative w-[320px] sm:w-[410px] md:w-[480px] h-[210px] sm:h-[265px] md:h-[310px] my-2 z-30"
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layer 1: Envelope Back Panel */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F5EEDC] via-[#EFE4CF] to-[#E2D3B8] border border-gold/60 envelope-3d-shadow overflow-hidden"
          style={{ zIndex: 1 }}
        >
          <div className="absolute inset-0 bg-[#E8DCC5] opacity-50 kolam-pattern" />
          <div className="absolute inset-0 bg-radial from-transparent to-[#DCCEB5]/60 pointer-events-none" />
        </div>

        {/* Layer 2: The Top Triangular Flap (Flips backwards 180deg around its horizontal top hinge) */}
        <motion.div
          animate={{
            rotateX: stage === 'closed' ? 0 : -180,
            zIndex: stage === 'closed' ? 35 : (stage === 'opening' ? 25 : 2),
          }}
          transition={{
            duration: 1.05,
            ease: [0.25, 1, 0.5, 1], // Natural physical paper fold easing
          }}
          className="absolute inset-x-0 top-0 h-[54%] origin-top cursor-pointer pointer-events-auto"
          style={{
            transformOrigin: 'top center',
            transformStyle: 'preserve-3d',
          }}
          onClick={handleOpen}
        >
          {/* Front Face (Inverted Triangle ▼ pointing down when closed) */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <svg viewBox="0 0 500 170" className="w-full h-full drop-shadow-md" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flapFrontGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FAF4E9" />
                  <stop offset="75%" stopColor="#E8DCBE" />
                  <stop offset="100%" stopColor="#DECFA9" />
                </linearGradient>
              </defs>
              <polygon
                points="0,0 500,0 250,170"
                fill="url(#flapFrontGrad)"
                stroke="#D4AF37"
                strokeWidth="1.5"
              />
              <polygon
                points="14,4 486,4 250,158"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.8"
                strokeDasharray="4 2"
                opacity="0.65"
              />
            </svg>
          </div>

          {/* Back Face (Upright Triangle ▲ pointing up when flipped open backwards) */}
          <div
            className="absolute inset-0"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <svg viewBox="0 0 500 170" className="w-full h-full drop-shadow-sm" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flapBackGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#DECFA9" />
                  <stop offset="50%" stopColor="#EDE0C8" />
                  <stop offset="100%" stopColor="#F5ECDA" />
                </linearGradient>
              </defs>
              <polygon
                points="0,0 500,0 250,170"
                fill="url(#flapBackGrad)"
                stroke="#D4AF37"
                strokeWidth="1.5"
              />
              <polygon
                points="14,4 486,4 250,158"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.8"
                strokeDasharray="4 2"
                opacity="0.65"
              />
              {/* Inside lining kolam flourish */}
              <circle cx="250" cy="75" r="14" fill="#D4AF37" fillOpacity="0.2" />
              <path d="M250 52 Q266 75 250 98 Q234 75 250 52 Z" fill="#D4AF37" fillOpacity="0.35" />
              <path d="M227 75 Q250 91 273 75 Q250 59 227 75 Z" fill="#D4AF37" fillOpacity="0.35" />
            </svg>
          </div>
        </motion.div>

        {/* Layer 3: Envelope Lower Front Pocket (Left, Right, Bottom triangular folds) */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          style={{
            zIndex: stage === 'card_rising' || stage === 'revealed' ? 10 : 20,
          }}
        >
          {/* Left Fold */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0 0, 50% 54%, 0 100%)',
              background: 'linear-gradient(135deg, #F0E6D2 0%, #DECDB0 100%)',
              borderRight: '1px solid rgba(212, 175, 55, 0.4)',
              boxShadow: 'inset 2px 2px 10px rgba(0,0,0,0.06)',
            }}
          />
          {/* Right Fold */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(100% 0, 50% 54%, 100% 100%)',
              background: 'linear-gradient(225deg, #EFE3CE 0%, #DBD0B6 100%)',
              borderLeft: '1px solid rgba(212, 175, 55, 0.4)',
              boxShadow: 'inset -2px 2px 10px rgba(0,0,0,0.06)',
            }}
          />
          {/* Bottom Fold */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0 100%, 50% 54%, 100% 100%)',
              background: 'linear-gradient(0deg, #F7EFE0 0%, #E2D3B8 100%)',
              borderTop: '1px solid rgba(212, 175, 55, 0.5)',
              boxShadow: '0 -4px 16px rgba(73, 53, 37, 0.12)',
            }}
          />
        </div>

        {/* Layer 4: The Decorative Wax Seal (Mathematically centered on flap closure) */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '50%',
            top: '54%',
            transform: 'translate(-50%, -50%)',
            zIndex: 40,
          }}
        >
          <AnimatePresence>
            {stage === 'closed' && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{
                  scale: 0.75,
                  opacity: 0,
                  y: -15,
                  transition: { duration: 0.3 },
                }}
                onClick={handleOpen}
                className="pointer-events-auto cursor-pointer group flex flex-col items-center justify-center relative"
                title="Click to open the invitation"
              >
                {/* Outer Golden Shimmer Pulse */}
                <div className="absolute -inset-3 rounded-full bg-gold/25 animate-ping opacity-60" style={{ animationDuration: '3.2s' }} />
                <div className="absolute -inset-1 rounded-full bg-gold/40 animate-pulseSlow" />

                {/* Physical Wax Seal Medallion */}
                <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full p-1 wax-seal-shadow flex items-center justify-center bg-gradient-to-br from-[#E2B755] via-[#D4AF37] to-[#8E6F3E] transform transition-transform duration-300 group-hover:scale-105 active:scale-95">
                  <div className="w-full h-full rounded-full border-2 border-[#FFF6BF]/70 flex flex-col items-center justify-center bg-gradient-to-tr from-[#9E7B3A] via-[#D4AF37] to-[#ECC86A] shadow-inner text-center p-1">
                    <span className="font-serif text-[9px] sm:text-[10px] uppercase tracking-widest text-[#FFFDF5] font-bold drop-shadow-xs">
                      ROYAL VOWS
                    </span>
                    <span className="font-serif text-lg sm:text-2xl font-bold text-[#FFFDF5] drop-shadow-md leading-none my-0.5 whitespace-nowrap">
                      {weddingConfig.couple.monogram}
                    </span>
                    <span className="text-[10px] text-[#FFFDF5]/90">🪷</span>
                  </div>
                </div>

                {/* Centered Instruction Pill */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-[11px] font-serif tracking-widest uppercase text-brown-dark bg-ivory/95 px-3 py-1 rounded-full border border-gold/50 shadow-sm animate-bounce">
                    {language === 'ta' ? weddingConfig.invitationTexts.envelopeTapToOpen.ta : weddingConfig.invitationTexts.envelopeTapToOpen.en}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Layer 5: The Luxury Invitation Card (HIGHEST STACKING ORDER - In Front of ALL elements when rising) */}
        <motion.div
          animate={
            stage === 'card_rising' || stage === 'revealed'
              ? {
                  y: stage === 'revealed' ? -175 : -140,
                  scale: stage === 'revealed' ? 1.05 : 1,
                  zIndex: 50, // Always on top of all envelope elements & decorations
                  opacity: 1,
                  boxShadow: '0 25px 60px rgba(42, 29, 19, 0.4), 0 0 35px rgba(212, 175, 55, 0.35)',
                }
              : {
                  y: 12,
                  scale: 0.95,
                  zIndex: 15,
                  opacity: stage === 'closed' ? 0.9 : 1,
                  boxShadow: '0 4px 15px rgba(42, 29, 19, 0.1)',
                }
          }
          transition={{
            duration: 1.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-x-4 top-2 bottom-3 bg-[#FFFDF5] rounded-xl border-2 border-gold/70 p-5 sm:p-7 flex flex-col justify-between items-center text-center overflow-hidden"
          style={{
            transform: stage === 'card_rising' || stage === 'revealed' ? 'translateZ(60px)' : 'translateZ(0px)',
            backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(212, 175, 55, 0.08) 0%, transparent 85%)',
          }}
        >
          {/* Card Corner Ornaments */}
          <div className="absolute top-1 left-1"><GoldCorner position="top-left" className="w-6 h-6 text-gold" /></div>
          <div className="absolute top-1 right-1"><GoldCorner position="top-right" className="w-6 h-6 text-gold" /></div>
          <div className="absolute bottom-1 left-1"><GoldCorner position="bottom-left" className="w-6 h-6 text-gold" /></div>
          <div className="absolute bottom-1 right-1"><GoldCorner position="bottom-right" className="w-6 h-6 text-gold" /></div>

          {/* Card Sacred Header */}
          <div className="pt-0.5">
            <span className="text-[10px] sm:text-xs text-gold-deep tracking-widest uppercase font-semibold">
              {language === 'ta' ? 'உ ஶ்ரீ விநாயகர் துணை' : 'Together With Our Families'}
            </span>
          </div>

          {/* Couple Names on Card */}
          <div className="my-auto py-1">
            <h2 className="text-3xl sm:text-5xl font-script text-brown-dark leading-none text-gold-shimmer">
              {weddingConfig.couple.bride.firstName}
            </h2>
            <div className="flex items-center justify-center gap-2 my-1 text-gold">
              <span className="h-px w-8 bg-gold/50" />
              <Heart className="w-3.5 h-3.5 fill-gold/50 text-gold" />
              <span className="h-px w-8 bg-gold/50" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-script text-brown-dark leading-none text-gold-shimmer">
              {weddingConfig.couple.groom.firstName}
            </h2>

            {language === 'ta' && (
              <p className="text-xs font-tamilSerif font-semibold text-brown mt-1.5">
                {weddingConfig.couple.bride.tamilName} &amp; {weddingConfig.couple.groom.tamilName}
              </p>
            )}
          </div>

          {/* Date & Muhurtham preview on card */}
          <div className="text-[10px] sm:text-xs font-serif text-brown-light tracking-wider border-t border-gold/30 pt-2 w-full">
            <span>{weddingConfig.date.dayOfWeek}, {weddingConfig.date.day} {weddingConfig.date.monthName} {weddingConfig.date.year}</span>
            <span className="mx-2 text-gold">✦</span>
            <span>{weddingConfig.date.muhurthamTime}</span>
          </div>
        </motion.div>
      </div>

      {/* Primary Action Button */}
      <div className="mt-7 z-30 text-center">
        {stage === 'closed' ? (
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.45)' }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOpen}
            className="relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9E7B3A] via-[#D4AF37] to-[#9E7B3A] text-[#FFFDF5] font-serif text-xs sm:text-sm tracking-[0.22em] uppercase font-semibold shadow-gold-md flex items-center justify-center gap-2.5 mx-auto overflow-hidden group"
          >
            {/* Shimmer light sweep */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
            <Sparkles className="w-4 h-4 text-[#FFF6BF]" />
            <span>{t('openInvitation')}</span>
            <Sparkles className="w-4 h-4 text-[#FFF6BF]" />
          </motion.button>
        ) : (
          <p className="text-sm font-serif italic text-gold-deep animate-pulse">
            {t('unfoldingCard')}
          </p>
        )}
      </div>
    </motion.div>
  );
}
