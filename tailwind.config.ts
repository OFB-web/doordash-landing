import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#FF3D2E', deep: '#E6341F' },
        accent: { cyan: '#00D9F5', mint: '#00FFB3', orange: '#FF6B35' },
        bg: { deep: '#0A0B0F', dark: '#111318', card: '#191C24' },
        surface: '#1E2130',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2.5s infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'ticker-reverse': 'tickerReverse 35s linear infinite',
        'dash': 'dash 4s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0,0,0.2,1) infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tickerReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        dash: {
          '0%': { strokeDashoffset: '500' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF3D2E, #E6341F)',
        'gradient-neon': 'linear-gradient(135deg, #FF3D2E, #FF6B35, #FFB347)',
        'gradient-cool': 'linear-gradient(135deg, #00D9F5, #00FFB3)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(255,61,46,0.4)',
        'glow-lg': '0 0 60px rgba(255,61,46,0.35), 0 0 120px rgba(255,61,46,0.15)',
        'glow-cyan': '0 0 30px rgba(0,217,245,0.4)',
        'glow-mint': '0 0 30px rgba(0,255,179,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
