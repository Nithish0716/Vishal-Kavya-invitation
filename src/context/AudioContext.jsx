import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Normalize base URL for Vite
  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

  const resolveAudioUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    const clean = url.replace(/^\/+/, '');
    return `${baseUrl}${clean}`;
  };

  // Candidate sources in priority order to guarantee resolution across any filename convention
  const uniqueSources = [
    resolveAudioUrl(weddingConfig.music?.audioUrl),
    `${baseUrl}audio/wedding-music.mp3`,
    `${baseUrl}audio/wedding-music.mp3.mp3`,
    `${baseUrl}audio/wedding-music.wav`,
    `${baseUrl}audio/wedding-music.m4a`,
  ].filter((v, i, a) => Boolean(v) && a.indexOf(v) === i);

  // Initialize and configure Audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true;
    }
  }, []);

  const playMusic = async () => {
    setHasInteracted(true);
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;

    try {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
      }
    } catch (err) {
      console.warn("Autoplay or source playback issue, trying alternate audio sources:", err);
      // Try alternate sources sequentially if primary failed
      for (const src of uniqueSources) {
        try {
          if (audio.src && audio.src.endsWith(src)) continue;
          audio.src = src;
          audio.load();
          await audio.play();
          setIsPlaying(true);
          return;
        } catch (retryErr) {
          console.warn(`Retry audio candidate ${src} failed:`, retryErr);
        }
      }
    }
  };

  const pauseMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, playMusic, pauseMusic, toggleMusic, hasInteracted, audioRef }}>
      {children}
      {/* Invisible Persistent Audio Element - Persists across all sections and navigation */}
      <audio
        ref={audioRef}
        src={uniqueSources[0]}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => {
          console.warn("Audio element error on current source:", e);
        }}
      >
        {uniqueSources.map((src, index) => (
          <source
            key={src + index}
            src={src}
            type={src.endsWith('.wav') ? 'audio/wav' : src.endsWith('.m4a') ? 'audio/mp4' : 'audio/mpeg'}
          />
        ))}
      </audio>
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
};
