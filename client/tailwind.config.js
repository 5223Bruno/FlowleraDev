/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'slide-in-up': 'slideInUp 0.7s ease-out',
        'slide-in-down': 'slideInDown 0.7s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite',
        'shimmer': 'shimmer 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'subtle-fade-in': 'subtle-fade-in 0.8s ease-out forwards',
        'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
        'color-shift': 'color-shift 2s ease-in-out infinite',
        'subtle-scale': 'subtle-scale 0.3s ease-out',
        'shadow-lift': 'shadow-lift 0.3s ease-out',
        'text-color-fade': 'text-color-fade 2s ease-in-out infinite',
        'subtle-rotate': 'subtle-rotate 0.4s ease-out',
        'width-expand': 'width-expand 0.6s ease-out forwards',
        'line-expand': 'line-expand 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(60px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-60px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(217, 119, 6, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(217, 119, 6, 0)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 5px rgba(217, 119, 6, 0.5)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(217, 119, 6, 0.8), 0 0 30px rgba(217, 119, 6, 0.6)',
          },
        },
        'rotate-slow': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        'bounce-soft': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
        },
        'gradient-shift': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'subtle-fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'gentle-pulse': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
        'color-shift': {
          '0%, 100%': {
            color: 'currentColor',
          },
          '50%': {
            color: 'rgba(217, 119, 6, 0.8)',
          },
        },
        'subtle-scale': {
          from: {
            transform: 'scale(1)',
          },
          to: {
            transform: 'scale(1.02)',
          },
        },
        'shadow-lift': {
          from: {
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
          to: {
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
          },
        },
        'text-color-fade': {
          '0%, 100%': {
            color: 'inherit',
          },
          '50%': {
            color: 'rgba(217, 119, 6, 0.7)',
          },
        },
        'subtle-rotate': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(1deg)',
          },
        },
        'width-expand': {
          from: {
            width: '0',
          },
          to: {
            width: '100%',
          },
        },
        'line-expand': {
          from: {
            width: '0',
            opacity: '0',
          },
          to: {
            width: '100%',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
