import { type Config } from "tailwindcss";
import { colors } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(232, 232, 232)",
        ...colors,
      },
      fontFamily: {
        bebas: ["bebas"],
        arial: ["Arial", "sans-serif"],
        helvetica: ["helveticaneue", "Helvetica"],
      },
    },
  },
  plugins: [],
} satisfies Config;
