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
                large: "10px 10px 0px #000000",
                medium: "7px 7px 0px #000000",
                small: "3px 3px 0px #000000",
            },
            colors: {
                primary: {
                    100: "#2A71F8",
                },
                secondary: {
                    100: "#FFF152",
                },
                gray:{
                    600:"#525252",
                }
            },
        },
    },

    plugins: [],
};
