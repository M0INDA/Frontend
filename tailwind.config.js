/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#ED7868",
          sub1: "#FFB077",
          sub2: "#FFE7D6",
          sub3: "#FAEEEC",
          100: "#FFFFFF",
          250: "#F7F6F6",
          200: "#E1E1E1",
          300: "#E3E3E3",
          350: "#CCCCCC",
          400: "#C6C6C6",
          500: "#848484",
          600: "#333333",
          700: "#1E1E1E",
        },
        bgColor: {
          100: "#FFFFFF",
          200: "#F5F4F3",
        },
      },
      fontFamily: {
        sans: ["Spoqa Han Sans Neo", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "640px",
        nm: "960px",
        lg: "1120px",
        xl: "1440px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
