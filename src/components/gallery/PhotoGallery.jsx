import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { KolamDivider } from '../common/DecorativeMotifs';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

export default function PhotoGallery() {
  const { language, t } = useLanguage();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(0);

  const photos = weddingConfig.gallery;

  const openLightbox = (index) => setSelectedPhotoIndex(index);
  const closeLightbox = () => setSelectedPhotoIndex(null);

  const prevPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const nextPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  // Mobile swipe handling
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 60) nextPhoto();
    if (touchEnd - touchStart > 60) prevPhoto();
  };

  return (
    <section id="gallery" className="py-20 px-4 paper-texture relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-deep border-b border-gold/40 pb-1 font-semibold">
            {t('galleryTitle')}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl mt-3 ${language === 'ta' ? 'font-tamilSerif font-bold text-brown-dark tamil-text' : 'font-serif text-brown-dark'}`}>
            {language === 'ta' ? 'காதலும் மகிழ்ச்சியும் நிறைந்த பொன்னான நினைவுகள்' : 'Portraits of Grace & Togetherness'}
          </h2>
          <p className={`text-xs sm:text-sm text-brown-muted max-w-lg mx-auto mt-2 px-2 ${language === 'ta' ? 'tamil-text' : ''}`}>
            {t('gallerySubtitle')}
          </p>
          <KolamDivider className="my-6" />
        </div>

        {/* Gallery Grid (Luxury Passe-Partout Matting Frame) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer bg-[#FFFDF5] rounded-3xl border-2 border-gold/45 p-3 passe-partout hover:border-gold hover:shadow-gold-md transition-all duration-300"
            >
              {/* Photo Frame Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                />

                {/* Hover Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/85 via-brown-dark/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-[#FFFDF5]">
                  <div className="flex items-center gap-1.5 text-xs text-[#FFF6BF] mb-1 font-serif">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{language === 'ta' ? photo.tamilSubtitle : photo.subtitle}</span>
                  </div>
                  <h3 className={`text-lg font-serif font-bold leading-tight ${language === 'ta' ? 'tamil-text' : ''}`}>
                    {language === 'ta' ? photo.tamilTitle : photo.title}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-serif uppercase tracking-widest text-[#FFFDF5]/90 bg-white/20 px-3.5 py-1 rounded-full backdrop-blur-xs w-max">
                    <Eye className="w-3 h-3" />
                    <span>{t('viewPhoto')}</span>
                  </div>
                </div>

                {/* Inset Gold Line */}
                <div className="absolute inset-2 rounded-xl border border-gold/40 pointer-events-none group-hover:border-gold/70 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-screen Lightbox Modal */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-brown-dark/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-[#FFFDF5] hover:bg-gold/40 hover:text-white transition-all z-20"
                aria-label={t('closeGallery')}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-gold/40 text-[#FFFDF5] transition-all z-20"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-gold/40 text-[#FFFDF5] transition-all z-20"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Main Image Container */}
              <div className="relative max-w-4xl max-h-[82vh] rounded-3xl border-2 border-gold/70 p-2 sm:p-3 bg-[#FFFDF5] shadow-2xl overflow-hidden flex flex-col items-center">
                <div className="relative max-h-[68vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={photos[selectedPhotoIndex].url}
                    alt={photos[selectedPhotoIndex].title}
                    className="max-h-[68vh] max-w-full object-contain"
                  />
                </div>

                {/* Caption Bar */}
                <div className="w-full text-center pt-3 pb-1 px-4 bg-[#FFFDF5]">
                  <h4 className={`text-base sm:text-lg font-serif font-bold text-brown-dark ${language === 'ta' ? 'tamil-text' : ''}`}>
                    {language === 'ta' ? photos[selectedPhotoIndex].tamilTitle : photos[selectedPhotoIndex].title}
                  </h4>
                  <p className="text-xs font-serif text-brown-muted mt-0.5">
                    {language === 'ta' ? photos[selectedPhotoIndex].tamilSubtitle : photos[selectedPhotoIndex].subtitle} ({selectedPhotoIndex + 1} / {photos.length})
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
