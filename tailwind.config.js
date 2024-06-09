/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#fff",
        primary: "#01B688",
        success: "#007F5F",
        blue: "#3b8ff1",
        red: "#CC4747",
        borderColor: "#B5B4B4",
        tableBg: "#DDEAE6",
      },
    },
  },
  plugins: [],
};

