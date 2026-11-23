import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { GoldCorner, KolamDivider } from '../common/DecorativeMotifs';
import { MapPin, Navigation, Copy, Check, Phone, ExternalLink } from 'lucide-react';

export default function WeddingVenue() {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const textToCopy = `${weddingConfig.venue.name}, ${weddingConfig.venue.fullAddress}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section id="venue" className="py-20 px-4 paper-texture relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-deep border-b border-gold/40 pb-1 font-semibold">
            {t('venueTitle')}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl mt-3 ${language === 'ta' ? 'font-tamilSerif font-bold text-brown-dark tamil-text' : 'font-serif text-brown-dark'}`}>
            {language === 'ta' ? weddingConfig.venue.tamilName : weddingConfig.venue.name}
          </h2>
          <p className={`text-xs sm:text-sm text-brown-muted mt-1 ${language === 'ta' ? 'tamil-text' : ''}`}>
            {language === 'ta' ? weddingConfig.venue.tamilHallType : weddingConfig.venue.hallType}
          </p>
          <KolamDivider className="my-6" />
        </div>

        {/* Venue Grand Container */}
        <div className="relative bg-[#FFFDF5] rounded-3xl border-2 border-gold/50 shadow-card-royal overflow-hidden">
          {/* Top Arch & Corners */}
          <div className="absolute top-3 left-3 z-10"><GoldCorner position="top-left" className="w-8 h-8 text-gold" /></div>
          <div className="absolute top-3 right-3 z-10"><GoldCorner position="top-right" className="w-8 h-8 text-gold" /></div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Venue Photo & Address Details */}
            <div className="p-6 sm:p-10 flex flex-col justify-between space-y-6">
              {/* Venue Photograph with Gold Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/40 shadow-sm aspect-video">
                <img
                  src={weddingConfig.venue.image}
                  alt={weddingConfig.venue.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/75 via-transparent to-transparent flex items-end p-4">
                  <div className="text-ivory">
                    <span className="text-xs font-serif tracking-widest uppercase text-gold-shimmer font-semibold">
                      {weddingConfig.venue.landmark}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-[#FFFDF5]">
                      {weddingConfig.venue.city}, {weddingConfig.venue.state}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  {/* Animated Gold Location Pin */}
                  <div className="relative mt-1">
                    <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center animate-pulseSlow">
                      <MapPin className="w-5 h-5 text-gold-deep" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-gold/40 rounded-full blur-xs" />
                  </div>

                  <div>
                    <h3 className={`text-lg font-serif font-bold text-brown-dark ${language === 'ta' ? 'tamil-text' : ''}`}>
                      {language === 'ta' ? weddingConfig.venue.tamilName : weddingConfig.venue.name}
                    </h3>
                    <p className={`text-xs sm:text-sm text-brown leading-relaxed mt-1 ${language === 'ta' ? 'font-tamilSans tamil-text' : 'font-serif'}`}>
                      {language === 'ta' ? weddingConfig.venue.tamilFullAddress : weddingConfig.venue.fullAddress}
                    </p>
                    <p className="text-xs text-brown-muted mt-1 font-serif">
                      Landmark: {weddingConfig.venue.landmark}
                    </p>
                  </div>
                </div>

                {/* Contact phone */}
                <div className="flex items-center gap-2 text-xs font-serif text-brown-muted pl-12">
                  <Phone className="w-3.5 h-3.5 text-gold-deep" />
                  <span>{weddingConfig.venue.phone}</span>
                </div>
              </div>

              {/* Action Buttons: Get Directions & Copy Address */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={weddingConfig.venue.googleMapsDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-[#FFFDF5] font-serif text-xs uppercase tracking-widest font-semibold hover:shadow-gold-md transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#FFF2B2]" />
                  <span>{t('getDirections')}</span>
                  <ExternalLink className="w-3 h-3 text-[#FFF2B2]" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="py-3 px-5 rounded-full border border-gold/60 bg-cream/70 hover:bg-cream text-brown font-serif text-xs uppercase tracking-widest font-semibold hover:border-gold transition-all flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-700" />
                      <span className="text-green-800 font-semibold">{t('addressCopied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-gold-deep" />
                      <span>{t('copyAddress')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="relative min-h-[350px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-gold/30 bg-cream/30 overflow-hidden">
              <iframe
                title="Wedding Venue Location Map"
                src={(() => {
                  const raw = weddingConfig.venue.googleMapsEmbedUrl || '';
                  const match = raw.match(/src=["']([^"']+)["']/i);
                  return (match ? match[1] : raw).trim();
                })()}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
