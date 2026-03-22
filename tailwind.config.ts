import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        night: {
          50: "#e8eaf6",
          100: "#c5c9e8",
          200: "#9ea5d8",
          300: "#7781c8",
          400: "#5a65bc",
          500: "#3d4ab0",
          600: "#3742a9",
          700: "#2e389f",
          800: "#262e96",
          900: "#181e86",
        },
        cyber: {
          50: "#e0f9ff",
          100: "#b3f0fe",
          200: "#80e6fd",
          300: "#4ddcfc",
          400: "#26d4fb",
          500: "#00ccfa",
          600: "#00bde9",
          700: "#00a8d2",
          800: "#0094bc",
          900: "#007091",
        },
        void: "#080d1a",
        glass: "rgba(255,255,255,0.04)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "scan-line": "scanLine 4s linear infinite",
        float: "float 6s ease-in-out infinite",
        "border-spin": "borderSpin 3s linear infinite",
        "text-shimmer": "textShimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(99,102,241,0.8)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        textShimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
