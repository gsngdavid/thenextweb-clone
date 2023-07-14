/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#6644ff",
        "blue-secondary": "#7755FF",
        "purple-primary": "#8C73FF",
        "footer": "#66ddee",
      },
      fontFamily: {
        "roboto": "'Roboto', sans-serif",
        "primary": "primary",
        "secondary": "secondary"
      },
      boxShadow: {
        "nav": "0 0.25rem 0.75rem rgba(0,0,0,.1)",
        "news": "0 2px 0 rgba(102,68,255,.25)",
      },
      backgroundImage: {
        "grid": "linear-gradient(180deg,transparent 25%,#000 90%)"
      }
    },
  },
  plugins: [],
}

