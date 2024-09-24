/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
      },
    },
  },
  variants: {
    lineClamp: ["responsive"],
  },
  plugins: ["@tailwindcss/line-clamp"],
};
