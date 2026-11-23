import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { GoldCorner, KolamDivider } from '../common/DecorativeMotifs';
import { Sparkles, Clock, CheckCircle } from 'lucide-react';

export default function ScratchDateReveal() {
  const { language, t } = useLanguage();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isRevealed, setIsRevealed] = useState(false);
  const [isDissolving, setIsDissolving] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  const isScratchingRef = useRef(false);
  const lastPointRef = useRef(null);
  const moveCountRef = useRef(0);
  const isRevealedRef = useRef(false);
  const isDissolvingRef = useRef(false);
  const offscreenBufferRef = useRef(null);

  // Keep ref flags synced with state
  useEffect(() => {
    isRevealedRef.current = isRevealed;
    isDissolvingRef.current = isDissolving;
  }, [isRevealed, isDissolving]);

  // Trigger celebration golden confetti
  const triggerCelebration = useCallback(() => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF2B2', '#B08D57', '#ECC86A', '#FFFDF5']
    });
  }, []);

  // Smoothly dissolve the remaining foil and reveal the date
  const completeReveal = useCallback(() => {
    if (isRevealedRef.current || isDissolvingRef.current) return;
    setIsDissolving(true);
    triggerCelebration();

    setTimeout(() => {
      setIsRevealed(true);
      setIsDissolving(false);
    }, 650);
  }, [triggerCelebration]);

  // Calculate percentage of transparent (erased) pixels
  const checkCompletion = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealedRef.current || isDissolvingRef.current) return;

    try {
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let transparentPixels = 0;
      let totalSampled = 0;

      // Sample every 24th pixel for high performance without frame drops
      for (let i = 3; i < data.length; i += 24) {
        totalSampled++;
        if (data[i] < 128) {
          transparentPixels++;
        }
      }

      if (totalSampled > 0) {
        const percent = Math.min(100, Math.round((transparentPixels / totalSampled) * 100));
        setScratchPercent(percent);

        // Auto-reveal once scratched approximately 60% of total card (which covers 90%+ of the central date area)
        if (percent >= 60) {
          completeReveal();
        }
      }
    } catch (e) {
      console.warn('Scratch percentage check:', e);
    }
  }, [completeReveal]);

  // Draw the initial royal gold foil cover
  const paintGoldFoil = useCallback((ctx, width, height) => {
    // 1. Base Metallic Brushed Gold Gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#9E7432');
    gradient.addColorStop(0.18, '#D4AF37');
    gradient.addColorStop(0.38, '#FFF6BF');
    gradient.addColorStop(0.58, '#E5C158');
    gradient.addColorStop(0.8, '#B08D57');
    gradient.addColorStop(1, '#826333');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Fine horizontal metallic brush sheen
    ctx.fillStyle = 'rgba(255, 255, 255, 0.09)';
    for (let y = 0; y < height; y += 4) {
      ctx.fillRect(0, y, width, 1.5);
    }

    // 3. Sparkling metallic stardust speckles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 380; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      const r = Math.random() * 1.5;
      ctx.beginPath();
      ctx.arc(rx, ry, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4. Subtle Gold Ornamental Border Inset
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // 5. Centered Embossed Invitation Prompt
    ctx.save();
    ctx.fillStyle = 'rgba(54, 38, 25, 0.65)';
    ctx.font = 'bold 13px "Cormorant Garamond", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(weddingConfig.date.scratchPrompt.en, width / 2, height / 2 - 12);
    ctx.font = '12px "Noto Serif Tamil", serif';
    ctx.fillText(weddingConfig.date.scratchPrompt.ta, width / 2, height / 2 + 12);
    ctx.restore();
  }, []);

  // Initialize and handle window/container resizing without clearing scratched areas
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || isRevealed) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const setupCanvas = () => {
      const rect = container.getBoundingClientRect();
      const newWidth = Math.floor(rect.width);
      const newHeight = Math.floor(rect.height);

      if (newWidth <= 0 || newHeight <= 0) return;

      // If dimensions haven't changed, don't re-paint
      if (canvas.width === newWidth && canvas.height === newHeight) return;

      // If we already have some scratched content, preserve it
      if (offscreenBufferRef.current && canvas.width > 0 && canvas.height > 0) {
        const temp = document.createElement('canvas');
        temp.width = canvas.width;
        temp.height = canvas.height;
        const tempCtx = temp.getContext('2d');
        tempCtx.drawImage(canvas, 0, 0);

        canvas.width = newWidth;
        canvas.height = newHeight;
        ctx.drawImage(temp, 0, 0, newWidth, newHeight);
      } else {
        canvas.width = newWidth;
        canvas.height = newHeight;
        paintGoldFoil(ctx, newWidth, newHeight);
        offscreenBufferRef.current = true;
      }
    };

    setupCanvas();

    const handleResize = () => {
      if (!isRevealedRef.current) {
        setupCanvas();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isRevealed, paintGoldFoil]);

  // Core scratch action: continuous interpolated erasing
  const eraseLine = useCallback((from, to) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 56; // Generous natural coin/finger size

    ctx.beginPath();
    if (from) {
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    } else {
      ctx.arc(to.x, to.y, 28, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // Check completion every 8 moves for 60fps performance
    moveCountRef.current++;
    if (moveCountRef.current % 8 === 0) {
      checkCompletion();
    }
  }, [checkCompletion]);

  // Touch & Mouse Event Handlers with coordinate extraction
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const getPos = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    // Mouse Handlers
    const handleMouseDown = (e) => {
      if (e.button !== 0) return; // Left click only
      isScratchingRef.current = true;
      const pos = getPos(e.clientX, e.clientY);
      lastPointRef.current = pos;
      eraseLine(null, pos);
    };

    const handleMouseMove = (e) => {
      if (!isScratchingRef.current) return;
      const pos = getPos(e.clientX, e.clientY);
      eraseLine(lastPointRef.current, pos);
      lastPointRef.current = pos;
    };

    const handleMouseUp = () => {
      if (isScratchingRef.current) {
        isScratchingRef.current = false;
        lastPointRef.current = null;
        checkCompletion();
      }
    };

    // Touch Handlers (Prevent mobile page scrolling during scratch)
    const handleTouchStart = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      e.preventDefault(); // Blocks vertical scroll gestures
      isScratchingRef.current = true;
      const touch = e.touches[0];
      const pos = getPos(touch.clientX, touch.clientY);
      lastPointRef.current = pos;
      eraseLine(null, pos);
    };

    const handleTouchMove = (e) => {
      if (!isScratchingRef.current || !e.touches || e.touches.length === 0) return;
      e.preventDefault(); // Prevents scroll during active scratch
      const touch = e.touches[0];
      const pos = getPos(touch.clientX, touch.clientY);
      eraseLine(lastPointRef.current, pos);
      lastPointRef.current = pos;
    };

    const handleTouchEnd = (e) => {
      if (isScratchingRef.current) {
        isScratchingRef.current = false;
        lastPointRef.current = null;
        checkCompletion();
      }
    };

    // Attach listeners - note `{ passive: false }` to ensure e.preventDefault() stops scrolling
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isRevealed, eraseLine, checkCompletion]);

  return (
    <section id="date-reveal" className="py-20 px-4 paper-texture relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-deep border-b border-gold/40 pb-1 font-semibold">
          {t('auspiciousDateTitle')}
        </span>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl mt-3 ${language === 'ta' ? 'font-tamilSerif font-bold text-brown-dark tamil-text' : 'font-serif text-brown-dark'}`}>
          {language === 'ta' ? weddingConfig.date.saveDateHeading.ta : weddingConfig.date.saveDateHeading.en}
        </h2>
        <p className={`text-xs sm:text-sm text-brown-muted max-w-lg mx-auto mt-2 px-2 ${language === 'ta' ? 'tamil-text' : ''}`}>
          {t('scratchInstruction')}
        </p>

        <KolamDivider className="my-6" />

        {/* Scratch Card Presentation Container */}
        <div className="relative max-w-xl mx-auto mt-6">
          <div
            ref={containerRef}
            className="relative min-h-[270px] sm:min-h-[300px] rounded-3xl border-2 border-gold/60 bg-[#FFFDF5] p-6 sm:p-8 flex flex-col items-center justify-center shadow-card-royal overflow-hidden select-none"
            style={{ touchAction: 'none' }}
          >
            {/* Corners */}
            <div className="absolute top-2 left-2"><GoldCorner position="top-left" className="w-6 h-6 text-gold" /></div>
            <div className="absolute top-2 right-2"><GoldCorner position="top-right" className="w-6 h-6 text-gold" /></div>
            <div className="absolute bottom-2 left-2"><GoldCorner position="bottom-left" className="w-6 h-6 text-gold" /></div>
            <div className="absolute bottom-2 right-2"><GoldCorner position="bottom-right" className="w-6 h-6 text-gold" /></div>

            {/* Revealed Date Content (Underneath the foil canvas) */}
            <div className="w-full text-center space-y-4">
              {/* Day of Week */}
              <div>
                <span className="text-xs sm:text-sm font-serif tracking-[0.25em] uppercase text-gold-deep font-semibold">
                  {language === 'ta' ? weddingConfig.date.dayOfWeekTamil : weddingConfig.date.dayOfWeek}
                </span>
              </div>

              {/* Day Number, Month, Year In 3 Luxury Gold Bevel Tiles */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto">
                {/* Tile 1: DAY */}
                <div className="bg-gradient-to-b from-cream via-ivory to-cream rounded-2xl border border-gold/50 p-3 sm:p-4 shadow-xs">
                  <span className="text-[10px] sm:text-xs font-serif uppercase tracking-widest text-brown-muted block">
                    {t('dayTitle')}
                  </span>
                  <span className="text-3xl sm:text-5xl font-serif font-bold text-brown-dark text-gold-foil">
                    {weddingConfig.date.day}
                  </span>
                </div>

                {/* Tile 2: MONTH */}
                <div className="bg-gradient-to-b from-cream via-ivory to-cream rounded-2xl border border-gold/50 p-3 sm:p-4 shadow-xs">
                  <span className="text-[10px] sm:text-xs font-serif uppercase tracking-widest text-brown-muted block">
                    {t('monthTitle')}
                  </span>
                  <span className="text-base sm:text-xl font-serif font-bold text-brown-dark block mt-2 sm:mt-3 leading-tight">
                    {language === 'ta' ? weddingConfig.date.monthNameTamil : weddingConfig.date.monthName}
                  </span>
                </div>

                {/* Tile 3: YEAR */}
                <div className="bg-gradient-to-b from-cream via-ivory to-cream rounded-2xl border border-gold/50 p-3 sm:p-4 shadow-xs">
                  <span className="text-[10px] sm:text-xs font-serif uppercase tracking-widest text-brown-muted block">
                    {t('yearTitle')}
                  </span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-brown-dark block mt-2 sm:mt-3">
                    {weddingConfig.date.year}
                  </span>
                </div>
              </div>

              {/* Muhurtham Time Details */}
              <div className="pt-3 border-t border-gold/30 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-brown-dark">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-serif">
                  <Clock className="w-4 h-4 text-gold-deep" />
                  <span className="font-semibold text-gold-deep">{t('muhurthamLabel')}:</span>
                  <span>{language === 'ta' ? weddingConfig.date.muhurthamTimeTamil : weddingConfig.date.muhurthamTime}</span>
                </div>
                <div className="text-xs sm:text-sm font-serif text-brown-muted">
                  ({language === 'ta' ? weddingConfig.date.muhurthamLagnamTamil : weddingConfig.date.muhurthamLagnam})
                </div>
              </div>
            </div>

            {/* The Scratchable Canvas Overlay with Smooth Dissolve Animation */}
            {!isRevealed && (
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full cursor-crosshair z-20 touch-none rounded-3xl"
                style={{
                  opacity: isDissolving ? 0 : 1,
                  transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: isDissolving ? 'none' : 'auto',
                }}
              />
            )}
          </div>

          {/* Status & Optional Quick Action */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            {!isRevealed ? (
              <div className="flex items-center gap-3">
                {scratchPercent > 0 && (
                  <span className="text-xs text-brown-dark font-serif font-semibold bg-cream/80 px-3 py-1 rounded-full border border-gold/40">
                    Scratched: {scratchPercent}%
                  </span>
                )}
                {/* Optional instant reveal button */}
                <button
                  onClick={completeReveal}
                  className="px-5 py-1.5 rounded-full border border-gold/60 bg-ivory text-brown-muted hover:text-brown-dark hover:border-gold font-serif text-[11px] uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <Sparkles className="w-3 h-3 text-gold-deep" />
                  <span>{t('revealDateBtn')}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-gold-deep font-serif text-sm font-semibold animate-fadeIn">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span>{t('scratchedSuccess')}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
