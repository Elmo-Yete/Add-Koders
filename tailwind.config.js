/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "input-color": "#F7E6C4",
        "add-button": "#F1C376",
        "card-color": "#FFF4F4",
      },
    },
  },
  plugins: [],
};
