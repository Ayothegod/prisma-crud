/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        "blue-dark": "#407bff",
        green: "#13ce66",
        torque: "#cbfff2",
        light: "#dceaff",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      spacing: {
        xl: "4rem",
        "1xl": "8rem",
        "2xl": "12rem",
        "3xl": "16rem",
        "4xl": "20rem",
        "5xl": "24rem",
        "6xl": "32rem",
        "7xl": "48rem",
        "8xl": "72rem",
        "9xl": "84rem",
        "10xl": "96rem",
        "11xl": "128rem",
      },
    },
  },
  plugins: [],
};