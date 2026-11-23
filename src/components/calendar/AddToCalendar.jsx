import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { weddingConfig } from '../../weddingConfig';
import { Calendar, Download, ExternalLink } from 'lucide-react';

export default function AddToCalendar() {
  const { language, t } = useLanguage();

  // Generate and Download .ics File (Apple Calendar, Outlook, Google Calendar import)
  const downloadIcs = () => {
    const title = `Wedding of ${weddingConfig.couple.bride.firstName} & ${weddingConfig.couple.groom.firstName}`;
    const description = `We cordially invite you to celebrate the wedding of ${weddingConfig.couple.bride.fullName} and ${weddingConfig.couple.groom.fullName}. Sacred Muhurtham: ${weddingConfig.date.muhurthamTime}. Venue: ${weddingConfig.venue.name}, ${weddingConfig.venue.fullAddress}`;
    const location = `${weddingConfig.venue.name}, ${weddingConfig.venue.fullAddress}`;
    
    // Start: 2027-02-19 at 04:30 AM IST (20270218T230000Z)
    const dtStart = "20270219T043000";
    const dtEnd = "20270219T150000";

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Royal Vows//South Indian Wedding Invitation//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:wedding-${Date.now()}@royalvows.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `DTSTART;TZID=Asia/Kolkata:${dtStart}`,
      `DTEND;TZID=Asia/Kolkata:${dtEnd}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
      `LOCATION:${location}`,
      "STATUS:CONFIRMED",
      "SEQUENCE:0",
      "BEGIN:VALARM",
      "TRIGGER:-PT24H",
      "ACTION:DISPLAY",
      "DESCRIPTION:Reminder: Wedding of Kaviya & Karthik tomorrow!",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${weddingConfig.couple.bride.firstName}-${weddingConfig.couple.groom.firstName}-wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Google Calendar One-Click Link
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Wedding of ${weddingConfig.couple.bride.firstName} & ${weddingConfig.couple.groom.firstName}`);
    const details = encodeURIComponent(
      `Traditional South Indian Wedding Ceremony of ${weddingConfig.couple.bride.fullName} and ${weddingConfig.couple.groom.fullName}. Sacred Muhurtham: ${weddingConfig.date.muhurthamTime}. Venue: ${weddingConfig.venue.name}, ${weddingConfig.venue.fullAddress}`
    );
    const location = encodeURIComponent(`${weddingConfig.venue.name}, ${weddingConfig.venue.fullAddress}`);
    // Format YYYYMMDDTHHmmss
    const dates = "20270218T230000Z/20270219T093000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
      {/* Download .ICS Button (Apple, Outlook, Native) */}
      <button
        onClick={downloadIcs}
        className="px-6 py-3 rounded-full border border-gold/70 bg-gradient-to-r from-cream via-ivory to-cream text-brown-dark font-serif text-xs uppercase tracking-widest font-semibold hover:border-gold-deep hover:shadow-gold-sm transition-all flex items-center gap-2"
      >
        <Download className="w-4 h-4 text-gold-deep" />
        <span>{t('addToCalendar')}</span>
      </button>

      {/* Google Calendar Web Link */}
      <a
        href={getGoogleCalendarUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-full border border-gold/40 bg-ivory text-brown hover:text-gold-deep hover:border-gold font-serif text-xs uppercase tracking-widest font-semibold hover:shadow-sm transition-all flex items-center gap-2"
      >
        <Calendar className="w-4 h-4 text-gold-deep" />
        <span>{t('googleCalendar')}</span>
        <ExternalLink className="w-3 h-3 text-gold-deep" />
      </a>
    </div>
  );
}
