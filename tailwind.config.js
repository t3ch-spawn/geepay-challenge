/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        overlay: "rgba(0, 0, 0, 0.7)",
      },

      fontFamily: {
        jakarta: "Plus Jakarta Sans",
      },
    },

    screens: {
      "-1200": { max: "1200px" },
      "-1024": { max: "1024px" },
      "-700": { max: "700px" },
      "-650": { max: "650px" },
    },
  },
  plugins: [],
};
