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
        paper: {
          DEFAULT: "#FAF6EC",
          dark: "#F1EADA",
          light: "#FFFDF9",
        },
        ink: {
          DEFAULT: "#1F2430",
          muted: "rgba(31, 36, 48, 0.72)",
          light: "rgba(31, 36, 48, 0.48)",
          faint: "rgba(31, 36, 48, 0.25)",
        },
        maroon: {
          DEFAULT: "#7A1F2B",
          hover: "#651722",
          dark: "#5B0617",
          light: "#9A2A3A",
          faint: "rgba(122, 31, 43, 0.08)",
        },
        marigold: {
          DEFAULT: "#D9A441",
          hover: "#C38F2E",
          light: "#E8BA60",
          faint: "rgba(217, 164, 65, 0.12)",
        },
        rule: {
          DEFAULT: "rgba(31, 36, 48, 0.15)",
          solid: "#E2DAC8",
          subtle: "rgba(31, 36, 48, 0.08)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Lora", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "Source Sans 3", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      maxWidth: {
        editorial: "1200px",
      },
      borderRadius: {
        brand: "6px",
      },
      letterSpacing: {
        folio: "0.12em",
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
