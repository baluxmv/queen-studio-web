/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      colors: {
        cream: '#fafaf9',
        beige: '#f5f5f0',
        stone: '#e8e6e1',
        'warm-gray': '#a8a29e',
        'color-text': '#44403c',
        'color-text-light': '#78716c',
        'color-black': '#1c1917',
        gold: {
          DEFAULT: '#b8860b',
          light: '#d4a855',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
      },
      keyframes: {
        'scroll-line': {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '1' },
          '50%': { transform: 'scaleY(0.5)', opacity: '0.5' },
        },
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
