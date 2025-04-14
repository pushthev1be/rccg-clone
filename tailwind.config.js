/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alternate: "var(--alternate)",
        blue_900: "var(--blue_900)",
        blue_a400: "var(--blue_a400)",
        blue_gray_100: "var(--blue_gray_100)",
        blue_gray_100_01: "var(--blue_gray_100_01)",
        charcoal: "var(--charcoal)",
        gray_100: "var(--gray_100)",
        gray_300: "var(--gray_300)",
        gray_400: "var(--gray_400)",
        gray_400_01: "var(--gray_400_01)",
        gray_600: "var(--gray_600)",
        gray_600_01: "var(--gray_600_01)",
        gray_600_02: "var(--gray_600_02)",
        gray_700: "var(--gray_700)",
        gray_700_01: "var(--gray_700_01)",
        gray_700_7f: "var(--gray_700_7f)",
        gray_700_87: "var(--gray_700_87)",
        gray_800: "var(--gray_800)",
        gray_900: "var(--gray_900)",
        gray_900_01: "var(--gray_900_01)",
        gray_900_02: "var(--gray_900_02)",
        white_color: "var(--white_color)",
        wine: "var(--wine)",
        "wine-light": "var(--wine-light)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};