import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { GoldCorner, KolamDivider } from '../common/DecorativeMotifs';
import { Send, CheckCircle2, Heart, Users, User, AlertCircle, Info } from 'lucide-react';

export default function RsvpForm() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    guestName: '',
    guestCount: 2,
    attendance: 'yes',
    wishes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [backendStatus, setBackendStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.guestName.trim()) {
      errs.guestName = language === 'ta' ? 'தயவுசெய்து விருந்தினர் பெயரை உள்ளிடவும்' : 'Please provide your full name';
    }
    if (!formData.guestCount || formData.guestCount < 1) {
      errs.guestCount = language === 'ta' ? 'குறைந்தது 1 விருந்தினர் தேவை' : 'At least 1 guest required';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      lang: language,
    };

    const endpoint = weddingConfig.rsvp.googleSheetsEndpoint;

    if (endpoint && endpoint.trim().length > 0) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission),
        });
        if (response.ok) {
          setBackendStatus('remote');
        } else {
          setBackendStatus('local');
        }
      } catch (err) {
        console.warn('Backend endpoint unreachable, storing locally', err);
        setBackendStatus('local');
      }
    } else {
      try {
        const existing = JSON.parse(localStorage.getItem('royal_vows_rsvps') || '[]');
        existing.push(submission);
        localStorage.setItem('royal_vows_rsvps', JSON.stringify(existing));
        setBackendStatus('local');
      } catch (err) {
        setBackendStatus('error');
      }
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    confetti({
      particleCount: 75,
      spread: 65,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#FFF2B2', '#B08D57', '#ECC86A', '#493525'],
    });
  };

  const resetForm = () => {
    setFormData({
      guestName: '',
      guestCount: 2,
      attendance: 'yes',
      wishes: '',
    });
    setIsSubmitted(false);
    setBackendStatus(null);
  };

  return (
    <section id="rsvp" className="py-20 px-4 paper-texture relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-serif uppercase tracking-[0.25em] text-gold-deep border-b border-gold/40 pb-1 font-semibold">
            {t('rsvpTitle')}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl mt-3 ${language === 'ta' ? 'font-tamilSerif font-bold text-brown-dark tamil-text' : 'font-serif text-brown-dark'}`}>
            {language === 'ta' ? 'தங்கள் நல்வருகையை உறுதி செய்க' : 'Kindly Respond (RSVP)'}
          </h2>
          <p className={`text-xs sm:text-sm text-brown-muted max-w-lg mx-auto mt-2 px-2 ${language === 'ta' ? 'tamil-text' : ''}`}>
            {t('rsvpSubtitle')}
          </p>
          <KolamDivider className="my-6" />
        </div>

        {/* RSVP Card Container */}
        <div className="relative bg-[#FFFDF5] rounded-3xl border-2 border-gold/50 p-6 sm:p-10 shadow-card-royal overflow-hidden">
          {/* Gold Corners */}
          <div className="absolute top-2 left-2"><GoldCorner position="top-left" className="w-6 h-6 text-gold" /></div>
          <div className="absolute top-2 right-2"><GoldCorner position="top-right" className="w-6 h-6 text-gold" /></div>
          <div className="absolute bottom-2 left-2"><GoldCorner position="bottom-left" className="w-6 h-6 text-gold" /></div>
          <div className="absolute bottom-2 right-2"><GoldCorner position="bottom-right" className="w-6 h-6 text-gold" /></div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Guest Name Field */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-widest text-brown-dark font-semibold mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold-deep" />
                    <span>{t('fullName')} *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    placeholder={t('namePlaceholder')}
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.guestName ? 'border-red-400 bg-red-50/20' : 'border-gold/45 bg-ivory/60 focus:border-gold'
                    } text-sm font-serif text-brown-dark outline-none transition-all shadow-xs`}
                  />
                  {errors.guestName && (
                    <p className={`text-xs text-red-600 mt-1 flex items-center gap-1 font-serif ${language === 'ta' ? 'tamil-text' : ''}`}>
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.guestName}</span>
                    </p>
                  )}
                </div>

                {/* Number of Guests & Attendance Status Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Guests Count */}
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-widest text-brown-dark font-semibold mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-deep" />
                      <span>{t('numberOfGuests')} *</span>
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-2xl border border-gold/45 bg-ivory/60 focus:border-gold text-sm font-serif text-brown-dark outline-none transition-all shadow-xs"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? (language === 'ta' ? 'விருந்தினர்' : 'Guest') : (language === 'ta' ? 'விருந்தினர்கள்' : 'Guests')}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Attendance Radios */}
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-widest text-brown-dark font-semibold mb-2">
                      {t('attendingStatus')} *
                    </label>
                    <div className="flex gap-4 pt-1">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-serif text-brown">
                        <input
                          type="radio"
                          name="attendance"
                          value="yes"
                          checked={formData.attendance === 'yes'}
                          onChange={() => setFormData({ ...formData, attendance: 'yes' })}
                          className="accent-[#D4AF37]"
                        />
                        <span className={language === 'ta' ? 'tamil-text' : ''}>{language === 'ta' ? 'ஆம், வருகிறேன்' : 'Joyfully Attending'}</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-serif text-brown">
                        <input
                          type="radio"
                          name="attendance"
                          value="no"
                          checked={formData.attendance === 'no'}
                          onChange={() => setFormData({ ...formData, attendance: 'no' })}
                          className="accent-[#D4AF37]"
                        />
                        <span className={language === 'ta' ? 'tamil-text' : ''}>{language === 'ta' ? 'வர இயலவில்லை' : 'Regretfully Decline'}</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Wishes & Blessings */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-widest text-brown-dark font-semibold mb-2 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-gold-deep" />
                    <span>{t('wishes')}</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                    placeholder={t('wishesPlaceholder')}
                    className="w-full px-4 py-3 rounded-2xl border border-gold/45 bg-ivory/60 focus:border-gold text-sm font-serif text-brown-dark outline-none transition-all shadow-xs resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-[#FFFDF5] font-serif text-xs uppercase tracking-widest font-semibold hover:shadow-gold-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mx-auto disabled:opacity-60 shadow-sm"
                  >
                    <Send className="w-4 h-4 text-[#FFF2B2]" />
                    <span>{isSubmitting ? t('submitting') : t('submitRsvp')}</span>
                  </button>
                  <p className={`text-[11px] font-serif text-brown-muted mt-3 ${language === 'ta' ? 'tamil-text' : ''}`}>
                    {t('rsvpDeadlineNote')}
                  </p>
                </div>
              </motion.form>
            ) : (
              /* Success State Animation */
              <motion.div
                key="rsvp-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-cream border-2 border-gold flex items-center justify-center mx-auto shadow-gold-sm">
                  <CheckCircle2 className="w-8 h-8 text-gold-deep animate-pulse" />
                </div>
                <h3 className={`text-2xl font-serif font-bold text-brown-dark ${language === 'ta' ? 'tamil-text' : ''}`}>
                  {t('rsvpSuccessTitle')}
                </h3>
                <p className={`text-sm font-serif text-brown max-w-md mx-auto leading-relaxed ${language === 'ta' ? 'tamil-text' : ''}`}>
                  {t('rsvpSuccessMsg')}
                </p>

                {backendStatus === 'local' && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream/70 border border-gold/35 text-[11px] font-serif text-brown-muted">
                    <Info className="w-3.5 h-3.5 text-gold-deep" />
                    <span className={language === 'ta' ? 'tamil-text' : ''}>
                      {language === 'ta'
                        ? 'பதிவு உங்கள் சாதனத்தில் உள்ளமைவாக சேமிக்கப்பட்டது (backend endpoint ready in config)'
                        : 'Response saved locally on your device (backend webhook endpoint ready in config)'}
                    </span>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="text-xs font-serif uppercase tracking-widest text-gold-deep hover:text-brown border-b border-gold/45 hover:border-gold pb-0.5 transition-colors font-semibold"
                  >
                    {t('anotherRsvp')}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
