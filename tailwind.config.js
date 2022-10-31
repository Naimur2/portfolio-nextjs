/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Thicccboi", ...defaultTheme.fontFamily.sans],
            },
            borderWidth: {
                1: "1px",
            },
            boxShadow: {
                large: "10px 10px 0px #171717",
                medium: "7px 7px 0px #171717",
                small: "3px 4px 0px #171717",
              
            },
            fontSize:{
                h1:"4rem",
                h2:"3.5rem",
                h3:"2.5rem",
                
            },
            colors: {
                primary: {
                    100: "#2A71F8",
                },
                secondary: {
                    100: "#FFF152",
                    200:"#FFC107"
                },
                tertiary: {
                    100: "#1ED0EF",
                },
                gray:{
                    50:"#FAFAFA",
                    100:"#F5F5F5",
                    200:"#E5E5E5",
                    300:"#D4D4D4",
                    400:"#A3A3A3",
                    500:"#737373",
                    600:"#525252",
                    700:"#404040",
                    800:"#262626",
                    900:"#171717"
                }
            },
        },
    },

    plugins: [],
};
