/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c1d7fe',
          300: '#93b8fd',
          400: '#608efa',
          500: '#3b68f5',
          600: '#2550eb',
          700: '#1c3dd7',
          800: '#1c34b0',
          900: '#1c318a',
          950: '#152057',
        },
        secondary: {
          50: '#f2f7fb',
          100: '#e5eef6',
          200: '#c5daea',
          300: '#94bbd8',
          400: '#5e97c1',
          500: '#3b7aa9',
          600: '#2d618f',
          700: '#254e74',
          800: '#234362',
          900: '#213a54',
          950: '#13202f',
        },
        accent: {
          50: '#fff9ed',
          100: '#fff1d3',
          200: '#ffe0a5',
          300: '#ffc96d',
          400: '#ffaa33',
          500: '#ff8c0a',
          600: '#ff6a00',
          700: '#cc4d02',
          800: '#a13c0b',
          900: '#82330d',
          950: '#461804',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      height: {
        'hero': 'calc(100vh - 4rem)',
        'hero-mobile': 'calc(80vh - 4rem)',
      },
    },
  },
  plugins: [],
};