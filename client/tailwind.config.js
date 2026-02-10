import { heroui } from '@heroui/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Dejamos esto vacío o solo con lo que HeroUI necesite heredar,
      // la v4 prioriza lo que pusiste en el CSS @theme.
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
