/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "../pages/**/templates/**/*.html",  
  ],
  theme: {
    extend: {
      colors: {
        blueCertus: "#0056A0",
        darkBlueCertus: "#00205B",
        skyBlueCertus: "#2FBAD9",
        redCertus: "#F24968",
        purpleCertus: "#A64B98",
        greenCertus: "#00A08D"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        righteous: ["Righteous", "sans-serif"],
      }
    },
  },
  plugins: [],
}