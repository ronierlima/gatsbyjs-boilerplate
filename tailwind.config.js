module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a192f",
        },
        teal: {
          300: "#64ffda",
        },
        slate: {
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
        },
        boxShadow: {
          glow: "0px 0px 8px 2px rgba(56, 189, 248, 0.6)",
        },
        fontFamily: {
          mono: [
            "SF Mono",
            "Fira Code",
            "Fira Mono",
            "Roboto Mono",
            "monospace",
          ],
        },
      },
    },
  },
  plugins: [],
};
