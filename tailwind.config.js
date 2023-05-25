/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "blue-b1": "hsl(228, 45%, 44%)",
        "Bright-orange": "hsl(31, 77%, 52%)",
        "Dark-cyan": "hsl(184, 100%, 22%)",
        "Very-dark-cyan": "hsl(179, 100%, 13%)",
        "Transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "Very-light-gray": "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};

