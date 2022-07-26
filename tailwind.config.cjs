const daisyUI = require("daisyui");
const typo = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [typo, daisyUI],
  daisyui: {
    themes: ["dark"],
  },
};
