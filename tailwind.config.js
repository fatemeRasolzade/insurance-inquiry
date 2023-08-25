/** @type {import('tailwindcss').Config} */

import {} from "./src/assets/icons/";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lemon: "#fffbeb",
        gray: "#dedede",
        darkGray: "#a7a7a7",
        green: "#25b79b",
      },
      fontFamily: {
        sans: ["IRANSans"],
      },
    },
  },
  plugins: [],
};
