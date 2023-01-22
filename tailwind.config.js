/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#16161a",
        headline: "#fffffe",
        paragraph: "#16161a",
        button: "#7f5af0",
        buttonText: "#fffffe",
        highlight: "#7f5af0",
        greenText: "#2cb67d",
      },
    },
  },
  plugins: [],
};
