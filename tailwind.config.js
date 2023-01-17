/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#ED7868",
          100: "#FFFFFF",
          200: "#C6C6C6",
          300: "#848484",
          400: "#333333",
          500: "#1E1E1E",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
