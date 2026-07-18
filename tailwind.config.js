module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'custom-pattern': "url('/background.jpg')",
      },
      animation: {
        'logo-spin': 'logo-spin 20s linear infinite',
        'slide-out-left': 'slideOutLeft 0.5s forwards',
        'slide-out-right': 'slideOutRight 0.5s forwards',
        'slide-in-left': 'slideInLeft 0.5s forwards',
        'slide-in-right': 'slideInRight 0.5s forwards',
      },
      keyframes: {
        'logo-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
