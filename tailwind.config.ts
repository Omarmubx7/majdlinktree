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
        background: "#050505",
        foreground: "#e5e5e5",
        muted: "#a3a3a3",
        border: "#27272a",
        accent: "#ffffff",
      },
      borderRadius: {
        'full': '9999px',
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        'widest': '0.25em',
        'loose': '0.15em',
      }
    },
  },
  plugins: [],
};
export default config;
