import { generateTailwindColors } from './src/tailwind/colors-generator';
import { borders } from './src/tailwind/borders';
import { generateSpacing } from './src/tailwind/spacing';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: generateTailwindColors(),
    spacing: generateSpacing(),
    borderWidth: borders,
    borderRadius: {
      sm: 'var(--small-radius)',
      md: 'var(--medium-radius)',
      gb: 'var(--global-radius)',
      lg: 'var(--large-radius)',
      circle: 'var(--rounded-radius)'
    }
  },
  plugins: [],
}

