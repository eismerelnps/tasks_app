/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,ts,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chat_background_dark': "url('/public/chat_background/chat_background_dark.png')",
        'chat_background_light': "url('/public/chat_background/chat_background_light.png')",
      },
      colors: {
        gold: '#ffd700', // Color para la medalla de oro
        silver: '#c0c0c0', // Color para la medalla de plata
        bronze: '#cd7f32', // Color para la medalla de bronce
        primary: {
          '50': '#EAF0F5',
          '100': '#8A94A6',
          '200': '#c6cdd2',
          '300': '#8A94A6',
          '400': '#',
          '500': '#',
          '600': '#7c8694',
          '700': '#6f7886',
          '800': '#5e646f',
          '900': '#4d535b',
          '950': '#323439',
        },
        cerulean_blue: {
          '50': '#edf8ff',
          '100': '#d7eeff',
          '200': '#b7e4ff',
          '300': '#86d5ff',
          '400': '#4dbbff',
          '500': '#249aff',
          '600': '#0d7bff',
          '700': '#0663ef',
          '800': '#0d55cf',
          '900': '#114697',
          '950': '#0f2c5c',
        },


      },
    },
  },
  variants: {},
  plugins: [],
};
