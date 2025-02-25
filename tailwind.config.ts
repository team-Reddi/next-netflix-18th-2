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
      spacing: {
        "25": "1.6rem",
      },
      colors: {
        "custom-white": "rgba(255,255,255,0.83)",
      },
      fontSize: {
        header: "1.1rem",
        preview: "1.7rem",
        popular: "1.3rem",
        explain: "0.7rem",
      },
    },
  },
  plugins: [],
};
export default config;
