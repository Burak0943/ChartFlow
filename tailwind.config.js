import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0e1014",      // Bitget Siyahı
          panel: "#1b1e25",     // Kart Arkaplanı
          cyan: "#00f0e5",      // Bitget Turkuazı
          cyanHover: "#00dcd2", // Hover hali
          muted: "#848e9c",     // Gri metinler
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;