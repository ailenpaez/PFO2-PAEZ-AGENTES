import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A2342",
        electric: "#007BFF",
        vibrant: "#E63946",
        turquoise: "#00B4D8",
      },
      boxShadow: {
        card: "0 10px 40px rgba(10, 35, 66, 0.15)",
        glow: "0 0 30px rgba(0, 123, 255, 0.25)",
      },
      animation: {
        pulseLive: "pulseLive 2s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        pulseLive: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
