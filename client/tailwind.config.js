import { heroui } from '@heroui/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#13bdec',
        'background-light': '#f6f8f6',
        'background-dark': '#102216'
      },
      fontFamily: {
        display: ['Manrope']
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      }
    }
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#13bdec',
              foreground: '#ffffff'
            },
            background: '#f6f8f6'
          }
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#13bdec',
              foreground: '#ffffff'
            },
            background: '#102216'
          }
        }
      }
    })
  ]
}
