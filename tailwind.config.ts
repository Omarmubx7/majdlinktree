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
        charcoal: {
          DEFAULT: "#121212",
          light: "#1E1E1E",
          dark: "#0A0A0A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E5C76B",
          dark: "#B8860B",
          accent: "#FFD700",
        },
        cream: {
          DEFAULT: "#F5F5DC",
          soft: "#FFFDD0",
        },
        coffee: {
          DEFAULT: "#4B3621",
          light: "#6F4E37",
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #FFD700 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.2), transparent)",
      },
      animation: {
        shimmer: "shimmer 2s infinite linear",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
