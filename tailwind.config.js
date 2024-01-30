/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Nunito", "system-ui", "sans-serif"],
        body: ["Nunito", "system-ui", "sans-serif"],
      },

      animation: {
        "nprogress-spinner": "nprogress-spinner 400ms linear infinite",
      },

      keyframes: {
        "nprogress-spinner": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [import("@tailwindcss/typography"), import("@tailwindcss/forms")],
};
