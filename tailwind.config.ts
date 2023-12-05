import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors.zinc,
        secondary: colors.rose,
      },
      dropShadow: {
        light: "0 0 5px rgb(255 255 255)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        wave: {
          "0%": {
            transform: "scale(1)",
            opacity: "0",
          },
          "10%": {
            opacity: "0.2",
          },
          "100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
      },
    },
    animation: {
      blink: "blink 1s cubic-bezier(0.2, 0, 0.7, 1) infinite",
      wave: "wave 3s cubic-bezier(0, 0, 0.2, 1) infinite",
    },
  },
  plugins: [],
};
export default config;
