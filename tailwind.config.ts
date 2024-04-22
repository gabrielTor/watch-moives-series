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
        navy: "#0d253f",
        liteBlue: "#01b4e4",
        aqua: "#90cea1",
      },
      screens: {
        xs: "390px",
      },
      maxWidth: {
        "8xl": "100rem", // Adjust the size as needed
      },
    },
  },
  plugins: [],
};
export default config;
