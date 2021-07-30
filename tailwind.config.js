const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Lato', 'Helvetica', 'Arial', 'ui-sans-serif', 'sans-serif'],
            serif: [
                'Lora',
                'Georgia',
                'Cambria',
                'Times New Roman',
                'ui-serif',
                'serif',
            ],
        },
        // screens: {
        //     sm: '576px',
        //     ...defaultTheme.screens,
        // },
        fontSize: {
            'base-xs': ['.8rem', '1.05rem'],
            'base-sm': ['.9rem', '1.2rem'],
            ...defaultTheme.fontSize,
        },
        extend: {
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            screens: {
                sm: '576px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
