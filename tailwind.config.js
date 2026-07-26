/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '"Noto Sans SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      colors: {
        ink: '#061027',
        panel: '#0d1934',
        violet: '#8b7cff',
        cyan: '#56e4ff',
        sakura: '#ff8fc7',
      },
      boxShadow: {
        glow: '0 0 45px rgba(118, 111, 255, .2)',
        card: '0 24px 70px rgba(2, 8, 28, .22)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 18s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        drift: { '0%': { transform: 'translate3d(0,0,0)' }, '50%': { transform: 'translate3d(18px,-16px,0)' }, '100%': { transform: 'translate3d(0,0,0)' } },
      },
    },
  },
  plugins: [],
}
