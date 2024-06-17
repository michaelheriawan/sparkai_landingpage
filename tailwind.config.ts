import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      colors: {
        gradientStart: "#AE67FA",
        gradientEnd: "#F49867",
        lightBlue: "#81AFDD",
        darkBlue: "#052D56",
        orange: "#FF4820",
        placeHolder: "#3D6184",
        gradientBg: "#002853",
        cyanGreenBg: "#13DED2",
        darkBlue2: "#042C54",
      },
      borderWidth: {
        "3": "3px",
      },
    },
  },
  plugins: [],
};
export default config;
