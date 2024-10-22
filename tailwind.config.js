module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a192f",
        },
        slate: {
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
        },
        primary: {
          DEFAULT: "#111827",
        },
        secondary: {
          DEFAULT: "#6B7280",
        },
      },
      boxShadow: {
        glow: "0px 0px 8px 2px rgba(56, 189, 248, 0.6)",
        strongGlow: "0px 0px 15px 5px rgba(156, 163, 175, 0.8)",
      },
      fontFamily: {
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
