import type { Config } from "tailwindcss";

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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: { max: "375px" },
      sm: { min: "376px", max: "430px" },
      md: { min: "430px", max: "767px" },
      lg: { min: "768px", max: "1023px" },
      xl: { min: "1024px", max: "1279px" },
      "2xl": { min: "1280px", max: "1535px" },
      "3xl": { min: "1536px" },
    },
  },
  plugins: [],
};
export default config;
