/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ed314f: "#ed314f",
      },
    },
  },
  plugins: [require("daisyui")],
};
