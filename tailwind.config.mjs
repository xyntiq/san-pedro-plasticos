/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0A4D68',
          secondary: '#088395',
          accent: '#FF6B35',
          'accent-light': '#FF8C42',
          bg: '#F5F7FA',
          surface: '#FFFFFF',
          text: '#111827',
          muted: '#6B7280',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(10, 77, 104, 0.08)',
        card: '0 4px 20px -2px rgba(17, 24, 39, 0.06)',
        elevated: '0 20px 40px -15px rgba(10, 77, 104, 0.16)',
        cta: '0 10px 25px -5px rgba(255, 107, 53, 0.38)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #07374B 0%, #0A4D68 55%, #088395 100%)',
        'cta-gradient': 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
        'industrial-grid':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'light-grid':
          'linear-gradient(to right, rgba(10,77,104,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,77,104,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

