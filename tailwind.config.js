/** @type {import('tailwindcss').Config} */

import {} from "./src/assets/icons/";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lemon: "#fffbeb",
        gray: "#dedede",
        green: "#25b79b",
      },
      fontFamily: {
        sans: ["IRANSans"],
      },
    },
  },
  plugins: [],
};
