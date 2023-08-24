/** @type {import('tailwindcss').Config} */

import {} from "./src/assets/icons/";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lemon: "#fffbeb",
      },
      fontFamily: {
        sans: ["IRANYekan"],
      },
    },
  },
  plugins: [],
};
