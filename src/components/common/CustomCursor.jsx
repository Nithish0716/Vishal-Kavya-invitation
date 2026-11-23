import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isClickable = target.closest('button, a, input, textarea, select, [role="button"]');
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth lag animation for trail
    let animId;
    const updateTrail = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(updateTrail);
    };
    animId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle gold ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-gold/70 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${trail.x - 16}px, ${trail.y - 16}px, 0) scale(${isPointer ? 1.4 : 1})`,
          width: '32px',
          height: '32px',
          backgroundColor: isPointer ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
          boxShadow: isPointer ? '0 0 12px rgba(212, 175, 55, 0.35)' : 'none',
        }}
      />
      {/* Core gold dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-gold-deep shadow-sm"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          width: '6px',
          height: '6px',
        }}
      />
    </>
  );
}
