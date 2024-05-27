import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#111111',
      tertiary: '#ffffff',
      error: '#ff5449',
      background: '#f3f4f5',
      primary: {
        100: '#D2F5EB',
        200: '#A5EAD7',
        300: '#78E0C3',
        400: '#4AD6AE',
        DEFAULT: '#1DCC9A',
        600: '#17A37B',
        700: '#127A5D',
        800: '#0C513E',
        900: '#06291F',
      },
      secondary: {
        100: '#F9FCF0',
        200: '#F4F8E1',
        300: '#EEF5D2',
        400: '#E9F2C3',
        DEFAULT: '#E3EEB4',
        600: '#B6BF90',
        700: '#888F6C',
        800: '#5B5F48',
        900: '#2D3024',
      },
      gray: {
        100: '#E8E9E8',
        200: '#D2D3D2',
        300: '#BBBDBB',
        400: '#A5A7A5',
        DEFAULT: '#8E918E',
        600: '#727472',
        700: '#555755',
        800: '#393A39',
        900: '#1C1D1C',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
