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
        primary: "#111111",
        secondary: "#D2D8DA18",
        mainLight: "#F5F5F5",
        mainDark: "#202020",
        // Add more custom colors here as needed
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
