/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: "Plus Jakarta Sans",
      },
    },

    screens: {
      "-1200": { max: "1200px" },
      "-1024": { max: "1024px" },
    },
  },
  plugins: [],
};
