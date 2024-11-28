import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': { 'max': '640px' },
      'smin': { 'min': '641px' },
      'sm': { 'min': '641px', 'max': '767px' },
      'smd': { 'max': '767px' },
      'smdmin': { 'min': '768px' },

      'md': { 'min': '768px', 'max': '1023px' },
      'mdd': { 'max': '1023px' },
      'mddmin': { 'min': '1024px' },

      'lg': { 'min': '1024px', 'max': '1279px' },
      'lgd': { 'max': '1279px' },

      'xl': { 'min': '1280px', 'max': '1535px' },

      '2xl': { 'min': '1536px' },
    },
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
