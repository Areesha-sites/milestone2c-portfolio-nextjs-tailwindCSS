import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        ms: "393px",
        sm: "375px",
        xsm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      colors: {
        backgroundColour: "var(--backgroundColour)",
        badgeBackgroundColour: "var(--badgeBackgroundColour)",
        mainHeading: "var(--mainHeading)",
        lightBlue: "var(--lightBlue)",
        buttonBackground: "var(--buttonBackground)",
        bodyText: "var(--bodyText)",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
