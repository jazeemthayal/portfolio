module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": {
            transform: "scale(0.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "grow-animation": "grow 0.3s",
      },
    },
  },
  plugins: [],
};
