/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "linear-gradient": "linear-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        yellow: {
          brand: "#F9CC3F",
        },
        slate: {
          main: "#16171A",
        },
      },
    },
  },
  plugins: [],
};
