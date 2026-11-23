import React from 'react';

/**
 * Traditional South Indian Mango Leaf & Jasmine Garland Thoranam (மாவிலை & மல்லிகை தோரணம்)
 * Hung at the entrance of mandapams and wedding invitations to signify prosperity & auspiciousness.
 */
export function MangoJasmineThoranam({ className = "w-full h-12" }) {
  return (
    <div className={`overflow-hidden pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-3d" preserveAspectRatio="none">
        {/* Main Golden Binding Thread */}
        <path d="M 0 10 Q 300 25 600 10 Q 900 25 1200 10" stroke="#B08D57" strokeWidth="2" strokeDasharray="6 3" />
        
        {/* Repeating Mango Leaves & Marigold/Jasmine Drops */}
        {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150].map((x, i) => {
          const isMarigold = i % 2 === 0;
          return (
            <g key={x} transform={`translate(${x}, 12)`}>
              {/* Mango Leaf */}
              <path
                d="M 0 0 C 14 18, 10 38, 0 46 C -10 38, -14 18, 0 0 Z"
                fill="url(#mangoLeafGrad)"
                stroke="#20402C"
                strokeWidth="0.75"
              />
              {/* Center Leaf Vein */}
              <line x1="0" y1="2" x2="0" y2="42" stroke="#507E5D" strokeWidth="0.8" />

              {/* Auspicious Flower Drop (Marigold or Jasmine) */}
              {isMarigold ? (
                <circle cx="0" cy="48" r="4.5" fill="url(#marigoldGrad)" stroke="#B35400" strokeWidth="0.5" />
              ) : (
                <g transform="translate(0, 48)">
                  <circle cx="0" cy="0" r="4" fill="#FFFDF5" stroke="#D4AF37" strokeWidth="0.5" />
                  <circle cx="0" cy="0" r="1.5" fill="#FFE57F" />
                </g>
              )}
            </g>
          );
        })}

        <defs>
          <linearGradient id="mangoLeafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#41734F" />
            <stop offset="60%" stopColor="#2D5537" />
            <stop offset="100%" stopColor="#1E3C26" />
          </linearGradient>
          <linearGradient id="marigoldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="60%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Hanging South Indian Brass Oil Lamp (Thooku Vilakku / Diya) with Warm Ambient Glow
 */
export function HangingVilakku({ className = "w-10 h-32" }) {
  return (
    <svg viewBox="0 0 50 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Hanging Chain Links */}
      <line x1="25" y1="0" x2="25" y2="52" stroke="#B08D57" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="25" cy="16" r="2.5" fill="#D4AF37" stroke="#8E6F3E" strokeWidth="0.5" />
      <circle cx="25" cy="32" r="2.5" fill="#D4AF37" stroke="#8E6F3E" strokeWidth="0.5" />
      <circle cx="25" cy="48" r="3.5" fill="#B08D57" stroke="#8E6F3E" strokeWidth="0.5" />

      {/* Bell / Top Ornament */}
      <path d="M15 54 C15 48, 35 48, 35 54 L32 60 L18 60 Z" fill="url(#brassGold)" stroke="#8E6F3E" strokeWidth="0.75" />

      {/* Main Lamp Stem */}
      <path d="M19 60 L31 60 L29 78 C29 84, 21 84, 21 78 Z" fill="url(#brassGold)" stroke="#8E6F3E" strokeWidth="0.75" />

      {/* Spout / Oil Plate */}
      <path d="M10 80 C10 75, 40 75, 40 80 C38 90, 12 90, 10 80 Z" fill="url(#brassGold)" stroke="#8E6F3E" strokeWidth="0.75" />

      {/* Bottom Ornamental Finial & Tassel */}
      <path d="M22 88 L28 88 L25 100 Z" fill="#D4AF37" />
      <circle cx="25" cy="103" r="2.5" fill="#B08D57" />

      {/* Flickering Flame & Warm Candlelight Glow */}
      <g className="animate-pulseSlow">
        {/* Outer Warm Radiance */}
        <circle cx="25" cy="72" r="14" fill="rgba(255, 193, 7, 0.18)" />
        {/* Core Flame */}
        <path d="M25 66 C28 71, 28 76, 25 78 C22 76, 22 71, 25 66 Z" fill="#FFF3B0" />
        <circle cx="25" cy="74" r="2" fill="#FF8F00" />
      </g>

      <defs>
        <linearGradient id="brassGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="35%" stopColor="#E5C158" />
          <stop offset="70%" stopColor="#B08D57" />
          <stop offset="100%" stopColor="#8E6F3E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Traditional Royal Temple Arch / Mandapam Gateway SVG
 */
export function TempleArch({ className = "w-full h-24" }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg viewBox="0 0 600 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl h-auto">
        {/* Outer Arch Curve */}
        <path
          d="M 20 75 Q 300 -35 580 75"
          stroke="url(#archGoldGrad)"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Inner Parallel Arch with delicate beading */}
        <path
          d="M 50 75 Q 300 -12 550 75"
          stroke="url(#archGoldGrad)"
          strokeWidth="1.2"
          strokeDasharray="5 3"
          fill="none"
        />
        {/* Central Gopuram Crown / Kalasam */}
        <g transform="translate(300, 10)">
          <circle cx="0" cy="0" r="11" fill="#FFFDF5" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M-7 0 C-7 -9, 7 -9, 7 0 C7 7, -7 7, -7 0 Z" fill="url(#archGoldGrad)" />
          <circle cx="0" cy="-13" r="3.5" fill="#D4AF37" />
          <line x1="0" y1="-16" x2="0" y2="-22" stroke="#8E6F3E" strokeWidth="2" />
        </g>
        {/* Symmetrical Swags & Temple Bells */}
        <path d="M 120 62 Q 210 26 300 26 Q 390 26 480 62" stroke="#D4AF37" strokeWidth="1" fill="none" />
        
        <circle cx="160" cy="52" r="3" fill="#B08D57" />
        <circle cx="230" cy="38" r="3" fill="#D4AF37" />
        <circle cx="370" cy="38" r="3" fill="#D4AF37" />
        <circle cx="440" cy="52" r="3" fill="#B08D57" />

        <defs>
          <linearGradient id="archGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B08D57" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFF2B2" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B08D57" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Royal Gold Corner Borders (Ornate corner flourish with lotus filigree)
 */
export function GoldCorner({ position = "top-left", className = "w-10 h-10" }) {
  const getTransform = () => {
    switch (position) {
      case "top-right": return "rotate(90deg)";
      case "bottom-right": return "rotate(180deg)";
      case "bottom-left": return "rotate(270deg)";
      default: return "rotate(0deg)";
    }
  };

  return (
    <div className={`pointer-events-none select-none ${className}`} style={{ transform: getTransform() }}>
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer L-Frame */}
        <path d="M 2 58 L 2 2 L 58 2" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
        {/* Inner Beaded Line */}
        <path d="M 7 50 L 7 7 L 50 7" stroke="#B08D57" strokeWidth="1" strokeDasharray="3 2" fill="none" />
        {/* Corner Petal Motif */}
        <path d="M 12 12 Q 26 14 28 28 Q 14 26 12 12 Z" fill="#D4AF37" fillOpacity="0.5" stroke="#8E6F3E" strokeWidth="0.75" />
        <circle cx="12" cy="12" r="3.5" fill="#D4AF37" />
        <circle cx="4" cy="4" r="2" fill="#B08D57" />
      </svg>
    </div>
  );
}

/**
 * Auspicious Kalasam / Kumbham Icon with Mango Leaves & Kumkum
 */
export function SacredKalasam({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Mango Leaves */}
      <path d="M 25 15 C 19 7, 14 11, 18 19 Z" fill="#407A52" stroke="#255034" strokeWidth="0.75" />
      <path d="M 25 15 C 31 7, 36 11, 32 19 Z" fill="#407A52" stroke="#255034" strokeWidth="0.75" />
      <path d="M 25 14 C 23 4, 27 4, 25 13 Z" fill="#255034" />

      {/* Coconut */}
      <ellipse cx="25" cy="16" rx="6.5" ry="6.5" fill="#9C6B43" stroke="#684221" strokeWidth="0.75" />

      {/* Pot / Kalasam Base */}
      <path d="M 16 22 L 34 22 L 37 34 C 37 43, 13 43, 13 34 Z" fill="url(#potGoldGrad)" stroke="#8E6F3E" strokeWidth="1" />
      {/* Red Kumkum Thilakam on Kalasam */}
      <circle cx="25" cy="30" r="3" fill="#B71C1C" />

      <defs>
        <linearGradient id="potGoldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8E6F3E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Traditional Kolam / Mandala Floral Divider
 */
export function KolamDivider({ className = "my-6" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-gold w-16 sm:w-28" />
      <div className="flex items-center gap-1.5 text-gold">
        <span className="text-[11px] text-gold-deep">✦</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold-deep animate-pulseSlow">
          <circle cx="12" cy="12" r="3" fill="#D4AF37" fillOpacity="0.4" />
          <path d="M12 2 C12 7, 17 12, 22 12 C17 12, 12 17, 12 22 C12 17, 7 12, 2 12 C7 12, 12 7, 12 2 Z" />
        </svg>
        <span className="text-[11px] text-gold-deep">✦</span>
      </div>
      <div className="h-px bg-gradient-to-l from-transparent via-gold to-gold w-16 sm:w-28" />
    </div>
  );
}
