import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c2520",
        muted: "#68736b",
        cream: "#f4f2ec",
        sage: "#dce5dc",
        coral: "#d8745b",
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-cormorant)"],
      },
    },
  },
  plugins: [],
};

export default config;
