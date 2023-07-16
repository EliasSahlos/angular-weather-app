/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        customBG: "url('src/assets/images/dark-bg.jpg')",
      },
    },
  },
  plugins: [],
};
