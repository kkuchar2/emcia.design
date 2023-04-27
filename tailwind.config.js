module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        fontFamily: {
            plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
            lato: ['Lato', 'sans-serif'],
            openSans: ['Open Sans', 'sans-serif'],
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ],
};
