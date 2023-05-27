module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontSize: {
                indexDescriptionTitle: 'clamp(1.2rem, 1.5vw, 1.5rem)',
                indexTitle: 'clamp(2.3rem, 7vw, 4.7rem)',
            },
            keyframes: {
                fadeIn: {
                    from: {
                        transform: 'translateX(-50px)',
                        opacity: '0.001',
                    },
                    to: {
                        transform: 'translateX(0)',
                        opacity: '1',
                    }
                },
                clipPath: {
                    from: {
                        'clip-path': 'inset(0 0 100% 0)',
                    },
                    to: {
                        'clip-path': 'inset(0 0 0 0)',
                    }
                },
                title: {
                    from: {
                        transform: 'translateY(100px)',
                        opacity: '0.001',
                    },
                    to: {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
            },
            animation: {
                title: 'title 1200ms cubic-bezier(0.175, 0.32, 0, 1) forwards',
                indexDescription: 'fadeIn 1200ms ease forwards',
                clipPath: 'clipPath 800ms cubic-bezier(0.175, 0.32, 0.12, 0.95) forwards',
            }
        },
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
        require('autoprefixer'),
        require('tailwindcss-animation-delay')
    ],
};
