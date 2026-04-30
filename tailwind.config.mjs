/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:  '#080c14',
          surface:  '#0f1624',
          card:     '#131c2e',
          elevated: '#1a2540',
        },
        accent: {
          cyan:       '#00d4ff',
          'cyan-dim': '#0099bb',
          purple:     '#7c3aed',
          green:      '#10b981',
        },
        border: {
          DEFAULT: '#1e3050',
          bright:  '#2d4a7a',
        },
        text: {
          primary: '#e2e8f0',
          muted:   '#6b7fa3',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 0v60M60 0v60M0 0h60M0 60h60' stroke='%231e3050' stroke-width='0.5' opacity='0.7'/%3E%3C/svg%3E")`,
      },
      animation: {
        blink:    'blink 1.1s step-end infinite',
        'fade-in': 'fadeIn 0.7s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
