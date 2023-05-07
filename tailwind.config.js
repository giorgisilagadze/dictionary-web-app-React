/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        wholeWhite: "#FFFFFF",
        wholeDark: "#050505",
        switchOff: "#757575",
        switchOn: "#A445ED",
        input: "#F4F4F4",
        play: "#A445ED",
        inputDark: "#1F1F1F",
        headerDiv: "#E9E9E9",
      },
      colors: {
        txtOnWhite: "#2D2D2D",
        dim: "#757575",
        violet: "#A445ED",
        txtOnDark: "#FFFFFF"
      }
    },
  },
  plugins: [],
}

