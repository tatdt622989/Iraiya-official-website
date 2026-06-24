/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#07111F',
          900: '#08111B',
          850: '#101827',
          800: '#142033'
        },
        festival: {
          cyan: '#22D3EE',
          red: '#F43F5E',
          gold: '#FBBF24',
          violet: '#8B5CF6',
          green: '#34D399'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'Geist',
          'Noto Sans TC',
          'Noto Sans JP',
          'system-ui',
          'sans-serif'
        ]
      },
      boxShadow: {
        card: '0 22px 70px rgba(0, 0, 0, 0.32)'
      }
    }
  },
  plugins: []
};
