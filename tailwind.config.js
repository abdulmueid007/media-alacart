/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff2d55',
          light: '#ff6b5b',
        },
        surface: '#0d0d0f',
        muted: '#9898aa',
        text: '#e8e8f0',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      keyframes: {
        headerDrop: {
          from: { transform: 'translateY(-100%)', opacity: '0' },
          to:   { transform: 'translateY(0)',     opacity: '1' },
        },
        logoIn: {
          from: { opacity: '0', transform: 'translateX(-12px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        navLinkIn: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        loginIn: {
          from: { opacity: '0', transform: 'scale(0.82)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,45,85,0.4)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(255,45,85,0)' },
        },
      },
      animation: {
        'header-drop':  'headerDrop 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'logo-in':      'logoIn 0.55s 0.05s cubic-bezier(0.22,1,0.36,1) both',
        'nav-link-in':  'navLinkIn 0.5s cubic-bezier(0.22,1,0.36,1) both',
        'login-in':     'loginIn 0.55s 0.38s cubic-bezier(0.34,1.56,0.64,1) both',
        'fade-up':      'fadeUp 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both',
        'pulse-glow':   'pulseGlow 2s ease-in-out infinite',
      },
      transitionTimingFunction: {
        spring:        'cubic-bezier(0.22, 1, 0.36, 1)',
        'spring-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
};
