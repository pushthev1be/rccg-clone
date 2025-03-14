/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Include any other directories that might contain Tailwind classes
  ],
  darkMode: "class",
  theme: {
    screens: {
      lg: { max: "2000px" },
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        alternate: "var(--alternate)",
        blue: { 900: "var(--blue_900)", a400: "var(--blue_a400)" },
        blue_gray: {
          100: "var(--blue_gray_100)",
          "100_01": "var(--blue_gray_100_01)",
        },
        charcoal: "#181818",
        gray: {
          100: "var(--gray_100)",
          300: "var(--gray_300)",
          400: "var(--gray_400)",
          600: "var(--gray_600)",
          700: "var(--gray_700)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "400_01": "var(--gray_400_01)",
          "600_01": "var(--gray_600_01)",
          "600_02": "var(--gray_600_02)",
          "700_01": "var(--gray_700_01)",
          "700_7f": "rgba(92, 92, 92, 0.5)",
          "700_87": "var(--gray_700_87)",
          "900_01": "var(--gray_900_01)",
          "900_02": "var(--gray_900_02)",
        },
        white_color: "#FFFFFF",
        "gray-400": "#B3B3B3",
        "gray-600_01": "#636363",
        "gray-700_01": "#5C5C5C",
        "gray-800": "#333333",
        "gray-900_01": "#121212",
        "gray-900_02": "#101010",
        "blue-a400": "#4D88FF",
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
