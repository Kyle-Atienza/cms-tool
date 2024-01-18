/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#C0A971',
          secondary: '#D6D1C6',
          accent: '#232323',
          neutral: '#E6E5D8',
          'base-100': '#F2F2EB',
          info: '#C2E1E4',
          success: '#b5deaf',
          warning: '#FBCA19',
          error: '#FF8989'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
