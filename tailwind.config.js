/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '262px',
      'sm': '640px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1920px' 
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        innerYellow: 'inset 0 0 10px 5px yellow',
        innerGreen: 'inset 0 0 10px 5px green',
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      fontSize: {
        clamp: 'clamp(2rem, 5vw, 2.2rem)',
        sidebarClamp: 'clamp(0.3rem, 5vw, 1.2 rem)'
      },
    },
  },
  plugins: [],
}