module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                title1: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(-120px)'
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateX(0px)'
                    },
                },
                title2: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(-120px)'
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateX(0px)'
                    },
                },
                title1_mobile: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-120px)'
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0px)'
                    }
                },
                title2_mobile: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-120px)'
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0px)'
                    }
                },
                showscale: {
                    '0%': {
                        transform: 'scale(0)',
                    },
                    '20%': {
                        transform: 'scale(1.1)',
                    },
                    '100%': {
                        transform: 'scale(1)',
                    }
                },
                showscale2: {
                    '0%': {
                        transform: 'scale(0)',
                        opacity: 0.05
                    },
                    '100%': {
                        transform: 'scale(8)',
                        opacity: 0.00
                    }
                }
            },
            animation: {
                title1: 'title1 2.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
                title2: 'title2 2.2s cubic-bezier(0.075, 0.82, 0.165, 1) 0.1s forwards',
                title1_mobile: 'title1_mobile 2.2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
                title2_mobile: 'title2_mobile 2.2s cubic-bezier(0.075, 0.82, 0.165, 1) 0.1s forwards',
                showscale: 'showscale 2.0s cubic-bezier(0.075, 1.0, 0.90, 1) forwards',
                showscale2: 'showscale2 3.0s cubic-bezier(0.075, 1.20, 0.80, 1) forwards'
            },
            colors: {
                home: {
                    bg: {
                        accentDark: '#363636',
                        accentLight: '#fafafa',
                    },
                    title: {
                        accentDark: '#fafafa',
                        accentLight: '#535353',
                    }
                },
                navbar: {
                    bg: {
                        'lg-light': '#e3e3e3',
                        'lg-dark': '#2e2e2e',
                    },
                    'group-title': {
                        accentDark: '#a7a7a7',
                        accentLight: '#1a1a1a',
                    },
                    item: {
                        'color-light': '#747474',
                        'color-dark': '#cecece',
                        'hover-light': '#fafafa',
                        'hover-dark': '#2e2e2e',
                    }
                },
                'form-button': {
                    default: '#0B5830',
                    hover: '#0c6a39',
                },
                'input': {
                    title: '#C1C1C1',
                    default: '#1F1F1F',
                    disabled: 'rgba(31,31,31,0.47)',
                },
                'ua-link': {
                    default: '#74D79F',
                    hover: '#00f7ff',
                    visited: '#74D79F',
                },
                settings: {
                    section: {
                        accentLight: '#fafafa',
                        accentDark: '#2e2e2e',
                    }
                },
                btn: {
                    edit: {
                        full: {
                            'default-dark': '#2e2e2e',
                            'default-light': '#fafafa',
                            'hover-light': '#2e2e2e',
                            'hover-dark': '#454545',
                        }
                    }
                },
                toast: {
                    '50': '#FFF6DF',
                    '100': '#fdf7f1',
                    '200': '#FFE092',
                    '300': '#ebbf99',
                    '400': '#dea373',
                    '500': '#ce864f',
                    '600': '#A1724E',
                    '700': '#8c501c',
                    '800': '#5c340f',
                    '900': '#3f3f3f',
                }
            },
        },
        fontFamily: {
            plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
        }
    },
    daisyui: {
        base: false
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ],
};
