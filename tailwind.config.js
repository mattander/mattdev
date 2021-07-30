const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
        fontSize: {
            'base-xs': ['.8rem', '1.05rem'],
            'base-sm': ['.9rem', '1.2rem'],
            ...defaultTheme.fontSize,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
