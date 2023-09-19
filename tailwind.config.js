/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Montserrat": ["Montserrat", "sans-serif"],
        "Clash": ["Clash Display", "sans-serif"]
      },
      colors:{
        brandDarkPurple1x: "#140D27",
        brandPurple1x: "#D434FE",
        brandGray1x:"#FFFFFF2E"
      },
      borderWidth: {
        '0.5': '0.5px',
        '1px': '0.0625rem',
        '1.5': '1.5px',
        '10': '10px',
        '12': '12px',
      },
      borderRadius:{
        "four": "0.25rem",
        "five": "0.3125rem",
        "six": "0.375rem",
        "eight": "0.5rem",
        '8point66px': '0.54125rem',
        "ten": "0.625rem",
        "fifteen": "0.9375rem",
        "twenty": "1.25rem",
        "thirty": "1.875rem",
        "32px":"2rem",
        "forty": "2.5rem",
        '44.64px': "2.79rem",
        "fifty": "3.125rem",
        "sixty": "3.75rem",
        eighty: "5rem",
        hundred: "6.25rem",
        twoHundred: "12.5rem",
        twoFifty: "15.625rem",
        fiveHundred: "31.25rem",
        fiftyPercent: "50%"
      },
    },
  },
  plugins: [],
}