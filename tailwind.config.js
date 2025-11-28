/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./HTML/**/*.twig",
    "./HTML/**/*.html",
    "./JS/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // MARKETERUM Logo Color Scheme - Exact Colors
        // Cyan Blue (#10c3f4) - from logo text and center element
        primary: {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#10c3f4', // Exact logo cyan-blue
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
        },
        // Green (#3ab54a) - from logo pillars and arrow
        accent: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#3ab54a', // Exact logo green
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
      },
      spacing: {
        'sidebar': '280px',
        'sidebar-mobile': '260px',
      },
      backgroundColor: {
        'dark': '#0f172a',
        'dark-secondary': '#1e293b',
        'dark-tertiary': '#334155',
      },
      textColor: {
        'dark': '#f1f5f9',
        'dark-secondary': '#cbd5e1',
      },
    },
  },
  plugins: [],
}

