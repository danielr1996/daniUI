const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: {
                400: '#4484AC',
                300: '#445769',
                200: '#576D84',
                100: '#A4BAD4',
            },
            secondary: {
                400: "#162C2C",
                300: "#6B8568",
                200: "#92AEA4",
                100: "#264031",
            },
            accent: {
                400: "#6C3F2C",
                300: "#BD6327",
                200: "#E1B133",
                100: "#F0C295",
            },
            success: "#B4BE3A",
            information: "#388C97",
            warning: "#EFD96E",
            error: "#C13331",
            white: "#f5f5f5",
            black: "#281B1A",
            gray: "#DDDBDA",
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
