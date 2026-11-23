/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FFFFFF',
          DEFAULT: '#FFFDF5',
          100: '#FAF6EE',
          200: '#F5EEDC',
          300: '#E8DCC5',
        },
        gold: {
          light: '#F5E6B3',
          DEFAULT: '#D4AF37',
          champagne: '#E5C158',
          antique: '#B08D57',
          deep: '#8E6F3E',
          shimmer: '#FFF2B2'
        },
        cream: {
          DEFAULT: '#F5EEDC',
          light: '#FCF9F2',
          dark: '#E7DEC9',
        },
        brown: {
          DEFAULT: '#493525',
          dark: '#2A1D13',
          deep: '#1D130C',
          light: '#6B513C',
          muted: '#8A725D',
        },
        beige: {
          DEFAULT: '#E8DCC5',
          light: '#F3ECE0',
        },
        vermilion: '#8A2626',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['Lato', 'sans-serif'],
        tamilSerif: ['"Noto Serif Tamil"', 'Georgia', 'serif'],
        tamilSans: ['"Noto Sans Tamil"', 'Lato', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 4px 20px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 10px 30px rgba(176, 141, 87, 0.3)',
        'envelope': '0 25px 50px -12px rgba(42, 29, 19, 0.35), 0 0 40px rgba(212, 175, 55, 0.15)',
        'card-royal': '0 20px 40px rgba(42, 29, 19, 0.08), 0 1px 3px rgba(212, 175, 55, 0.2)',
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #ECC86A 0%, #B08D57 35%, #FFF2B2 60%, #D4AF37 80%, #8E6F3E 100%)',
        'gold-radial': 'radial-gradient(circle, #ECC86A 0%, #D4AF37 50%, #B08D57 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #FFFDF5 0%, #FAF6EE 50%, #F5EEDC 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        }
      },
      animation: {
        shimmer: 'shimmer 4s infinite linear',
        float: 'float 5s ease-in-out infinite',
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
