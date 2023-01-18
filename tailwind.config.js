/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#ED7868",
          100: "#FFFFFF",
          200: "#E3E3E3",
          300: "#C6C6C6",
          400: "#848484",
          500: "#333333",
          600: "#1E1E1E",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
