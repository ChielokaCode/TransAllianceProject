/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        gayathri: ["Gayathri", "sans-serif"],
      },
      fontSize: {
        "18px": "18px",
      },
      lineHeight: {
        "23.44px": "23.44px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(269.18deg, #F27405 6.87%, #D3BD00 118.13%)",
        "button-gradient1":
          "linear-gradient(263.68deg, #5AAF87 4.04%, #D3BD00 127.52%)",
      },
    },
  },
  plugins: [],
};
