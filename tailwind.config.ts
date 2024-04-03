import { type Config } from "tailwindcss";
import { colors, screens } from "tailwindcss/defaultTheme";

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
    screens: {
      ...screens,
      "2xl": "1537px",
    },
  },
  plugins: [],
} satisfies Config;
