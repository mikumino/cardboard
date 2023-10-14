/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    daisyui: {
        themes: [
            {
                mino: {
                    "primary": "#59b9f4",
                    "secondary": "#110E16",
                    "accent": "#6F5F91",
                    "neutral": "#E3C39F",
                    "base": "#1a191c",
                }
            }
        ],
    },
    theme: {
      extend: {
        fontFamily: {
            'sans': ['"Noto Sans JP"', 'sans-serif'],
        },
        backgroundImage: {
            'home': "url('/bocchi-primary-grad.png')",
        },
        colors: {
            'mino-blue': {
                100: "#def1fd",
                200: "#bde3fb",
                300: "#9bd5f8",
                400: "#7ac7f6",
                500: "#59b9f4",
                600: "#4794c3",
                700: "#356f92",
                800: "#244a62",
                900: "#122531"
            },
            'mino-dark': {
                100: "#d1d1d2",
                200: "#a3a3a4",
                300: "#767577",
                400: "#484749",
                500: "#1a191c",
                600: "#151416",
                700: "#100f11",
                800: "#0a0a0b",
                900: "#050506"
            },
        },
      },
    },
      plugins: [require("daisyui")],
}