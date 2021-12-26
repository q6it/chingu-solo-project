const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    // content: ['./src/**/*.{js,jsx,ts,tsx}'],
    purge: ['./src/**/*.{js,jsx}', './public/index.html'],
    // purge: ['./public/**/*.html', './src/**/*.{js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': '568px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                primary: colors.indigo,
                secondary: colors.gray,
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
