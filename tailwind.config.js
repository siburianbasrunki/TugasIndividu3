import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["lofi"],
  },
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
