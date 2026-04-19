/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff2d55',
          light: '#ff6b5b',
        },
        surface: '#0d0d0f',
        surfaceAlt: '#141418',
        text: '#e8e8f0',
        muted: '#9898aa',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        xs:  '0.75rem',
        sm:  '0.875rem',
        base:'0.95rem',
        lg:  '1.125rem',
        xl:  '1.25rem',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.25)',
        glow: '0 6px 20px rgba(255,45,85,0.35)',
        glass: '0 8px 30px rgba(0,0,0,0.4)',
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
};