/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // Authenticated/Private pages only
    "./HTML/neworder.twig",
    "./HTML/orders.twig",
    "./HTML/addfunds.twig",
    "./HTML/account.twig",
    "./HTML/api.twig",
    "./HTML/tickets.twig",
    "./HTML/viewticket.twig",
    "./HTML/services.twig",
    "./HTML/massorder.twig",
    "./HTML/drip_feed.twig",
    "./HTML/subscriptions.twig",
    "./HTML/refunds.twig",
    "./HTML/notifications.twig",
    "./HTML/affiliates.twig",
    "./HTML/updates.twig",
    "./HTML/child_panel.twig",
    "./HTML/child_panel_order.twig",
    "./HTML/layout.twig", // Include layout for auth mode
    "./JS/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#10c3f4',
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
        },
        accent: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#3ab54a',
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
        'dark': '#0a254a',
        'dark-secondary': '#013267',
        'dark-tertiary': '#1e3a5f',
        'dark-card': '#0f1f3a',
      },
      textColor: {
        'dark': '#f1f5f9',
        'dark-secondary': '#cbd5e1',
        'dark-muted': '#94a3b8',
      },
    },
  },
  plugins: [],
}

