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
      },
      boxShadow: {
        shad: "0px 5px 30px rgba(0, 0, 0, 0.1)",
        shadDark: "0px 5px 30px #A445ED",
      },
      fontFamily: {
        "inter": ["Inter"],
        "lora": ["Lora"],
        "inconsolata": ["Inconsolata"],
        "foldit": ["Foldit"]
      },
      fontSize: {
        head: ["14px", "24px"],
        input: ["16px", "19.36px"], 
      },
      backgroundImage: {
        search: "url('./images/icon-search.svg')"
      },
      backgroundPosition: {
       'right-4': 'center right 1rem',
      }
      
    },
  },
  plugins: [],
}

