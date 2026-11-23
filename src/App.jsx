import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AudioProvider } from './context/AudioContext';
import EnvelopeOpening from './components/envelope/EnvelopeOpening';
import Navbar from './components/navigation/Navbar';
import Hero from './components/hero/Hero';
import TraditionalCard from './components/invitation/TraditionalCard';
import ScratchDateReveal from './components/date/ScratchDateReveal';
import LiveCountdown from './components/countdown/LiveCountdown';
import WeddingEvents from './components/events/WeddingEvents';
import WeddingVenue from './components/venue/WeddingVenue';
import ClosingExperience from './components/closing/ClosingExperience';
import PetalCanvas from './components/common/PetalCanvas';
import CustomCursor from './components/common/CustomCursor';

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);

  return (
    <LanguageProvider>
      <AudioProvider>
        {/* Falling Petals Background Canvas */}
        <PetalCanvas />

        {/* Custom Desktop Gold Sparkle Cursor */}
        <CustomCursor />

        {/* First Experience: 3D Royal Envelope Opening */}
        {!hasOpened ? (
          <EnvelopeOpening onOpened={() => setHasOpened(true)} />
        ) : (
          <div className="relative min-h-screen bg-ivory text-brown selection:bg-gold/20 selection:text-brown-dark">
            {/* Top Navigation */}
            <Navbar />

            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Traditional Card Section */}
            <TraditionalCard />

            {/* 3. Interactive Scratch Date Reveal */}
            <ScratchDateReveal />

            {/* 4. Live Wedding Countdown */}
            <LiveCountdown />

            {/* 5. Wedding Events Schedule */}
            <WeddingEvents />

            {/* 6. Wedding Venue & Map */}
            <WeddingVenue />

            {/* 7. Closing Experience & Replay */}
            <ClosingExperience
              onReplay={() => {
                setHasOpened(false);
                window.scrollTo({ top: 0 });
              }}
            />
          </div>
        )}
      </AudioProvider>
    </LanguageProvider>
  );
}
