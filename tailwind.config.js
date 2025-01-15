/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: "true",
        padding: "1rem",
      },
      screens: {
        xs: {
          max: "575px",
        },
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        sans: ["Inter-Regular", "sans-serif"],
      },
      colors: {
        primary: "#0077CC",
        secondary: "#73858F",
        orange: "#FDC603",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
