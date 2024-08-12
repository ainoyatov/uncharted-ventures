import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'exs': '300px',
      'mxs': '400px',
      'xs': '475px',
      'ml': '900px',
      '3xl': '1537px',
      '4xl': '3481px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-main": "url('/modern-condo.jpeg')",
        "image-bottom": "url('/spectrum-background.svg')",
      },
      backgroundSize: {
        "custom-image-main": '200%'
      }
    },
  },
  plugins: [],
};
export default config;
