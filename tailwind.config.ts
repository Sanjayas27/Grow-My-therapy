import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3d5a47",
          light: "#4f7260",
          dark: "#2c4135",
        },
        secondary: {
          DEFAULT: "#f5f0e8",
          dark: "#ece4d5",
        },
        accent: {
          DEFAULT: "#b97b5a",
          light: "#c99070",
        },
        cream: "#f5f0e8",
        sage: "#3d5a47",
        terracotta: "#b97b5a",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
    },
  },
  plugins: [],
};
export default config;
