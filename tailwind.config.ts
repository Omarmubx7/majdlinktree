import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FDFCF0", // Warm off-white
          dark: "#F5F3E0",
        },
        espresso: {
          DEFAULT: "#2C1E14", // Deep brown
          light: "#3D2B1D",
        },
        sage: {
          DEFAULT: "#4A6741", // Sophisticated green
          dark: "#3D5535",
        },
        sand: {
          DEFAULT: "#E8E2D2",
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
