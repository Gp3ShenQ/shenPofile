/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main1: '#EAE0DE',
        main2: '#EDE3DD',
        main3: '#DEDAD6',
        main4: '#EFE5E0',
        main5: '#EEE2DD',
      },
      screens: {
        'max-sm': { max: '639px' }, // 小於 640px
        'max-md': { max: '767px' }, // 小於 768px
        'max-l': { max: '900px' }, // 小於 768px
        'max-lg': { max: '1023px' }, // 小於 1024px
        'max-xl': { max: '1279px' }, // 小於 1280px
      },
    },
  },
  plugins: [],
}
