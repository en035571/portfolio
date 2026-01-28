import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ========================================
        // CUSTOMIZE YOUR COLORS HERE
        // ========================================
        primary: {
          DEFAULT: "#4F6EF7", // Blue accent color
          hover: "#3B5AE0",
        },
        // Light mode colors
        light: {
          bg: "#FFFFFF",
          sidebar: "#F4F4F4",
          text: "#1A1A1A",
          textMuted: "#6B7280",
          border: "#E5E5E5",
          hover: "#F0F0F0",
          selected: "#E8EDFF",
        },
        // Dark mode colors
        dark: {
          bg: "#1E1E1E",
          sidebar: "#252525",
          text: "#FFFFFF",
          textMuted: "#9CA3AF",
          border: "#333333",
          hover: "#2A2A2A",
          selected: "#2D3748",
        },
      },
      fontFamily: {
        // ========================================
        // CUSTOMIZE YOUR FONTS HERE
        // ========================================
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
