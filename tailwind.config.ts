import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#03223F",
        secondary: "#010D23",
        third: "#091a3b",
        textGray: "#ADADAD",
        black: "#000000",
      },
      fontFamily: {
        title: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
    darkmode: false,
  },
  plugins: [],
};
export default config;
