/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        overlay: "rgba(0, 0, 0, 0.7)",
        darkBg: "rgba(2, 6, 23, 1);",
        darkCard: "#090c1d",
        darkSideBar: "rgba(15, 23, 42, 1);",
      },

      fontFamily: {
        jakarta: "Plus Jakarta Sans",
        inter: "Inter",
      },
    },

    screens: {
      "-1200": { max: "1200px" },
      "-1024": { max: "1024px" },
      "-700": { max: "700px" },
      "-650": { max: "650px" },
      "-450": { max: "450px" },
    },
  },
  plugins: [],
};
