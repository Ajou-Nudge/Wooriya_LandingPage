/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        coolgray:{
          'coolgray-cg-20': 'var(--coolgray-cg-20, #F7F9FA)',
        },
        primary: 'var(--primary, #267DFF)',
        'coolgray-cg-500': '#6C7680',
      },
      screens:{
        '1920': '1920px',
        '1080': '1080px',
      },
      boxShadow: {
        'custom-shadow': '0px 0px 8px 0px rgba(0, 0, 0, 0.16)',
      },
      borderRadius: {
        '12': '12px',
      },
      backgroundColor: {
        'blue-16': 'rgba(38, 125, 255, 0.16)',
      },
    },
  },
  plugins: [],
}
