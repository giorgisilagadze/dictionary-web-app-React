/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "md" : "768px",
      "fl" : "1440px"
    },

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
        hrDark: "#3A3A3A",
        
      },
      colors: {
        txtOnWhite: "#2D2D2D",
        dim: "#757575",
        violet: "#A445ED",
        txtOnDark: "#FFFFFF",
        meaning: "#757575",
        li: "#8F19E8",
        red: "#FF5252"
      },
      boxShadow: {
        shad: "0px 5px 30px rgba(0, 0, 0, 0.1)",
        shadDark: "0px 5px 30px #A445ED",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
      fontSize: {
        head: ["14px", "24px"],
        input: ["16px", "19.36px"], 
        word: ["32px", "38.73px"],
        phonetic: ["18px", "24px"],
        noun: ["18px", "21.78px"],
        definition: ["15px", "24px"],
        source: ["14px", "16.94px"],
        inputTab: ["20px", "20.98px"],
        wordTab: ["64px" , "67.14px"],
        phoneticTab: ["24px", "29.05px"],
        nounTab: ["24px", "25.18px"],
      },
      backgroundImage: {
        search: "url('./images/icon-search.svg')"
      },
      backgroundPosition: {
       'right-4': 'center right 1rem',
      },
      borderColor: {
        input: "#A445ED"
      },
      
    },
  },
  plugins: [],
}

