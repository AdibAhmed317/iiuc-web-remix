import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#0C2340',
        primaryBrown: '#964b34',
        primaryGreen: '#006a44',
        primaryGray: '#D3D9D4',
        seconderyGray: '#e5e8e5',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        robotoBlack: ['Black'],
        robotoBlackItalic: ['BlackItalic'],
        robotoLight: ['Light'],
        robotoLightItalic: ['LightItalic'],
        robotoMedium: ['Medium'],
        robotoMediumItalic: ['MediumItalic'],
        robotoRegular: ['Regular'],
        robotoThin: ['Thin'],
        robotoThinItalic: ['ThinItalic'],
      },
    },
  },
  plugins: [],
} satisfies Config;
