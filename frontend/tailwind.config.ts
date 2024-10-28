import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      xs: "480px",
      sm: "600px",
      md: "750px",
      lg: "940px",
      xl: "1100px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
