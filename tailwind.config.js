module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                titlefadein: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                titlefadein2: {
                    '0%': { opacity: 0 },
                    '50%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                fadein1: {
                    '0%': {
                        opacity: 0,
                        right: '-600px',
                        width: '500px'
                    },
                    '100%': {
                        opacity: 1,
                        right: '40px',
                        width: '333px'
                    },
                },
                fadein2: {
                    '0%': {
                        opacity: 0,
                        left: '-600px',
                        width: '1500px'
                    },
                    '100%': {
                        opacity: 1,
                        left: '40px',
                        width: '333px'
                    }
                },
                fadein3: {
                    '0%': {
                        opacity: 0,
                        top: '-600px'
                    },
                    '100%': {
                        opacity: 1,
                        top: '40px'
                    }
                },
                fadein4: {
                    '0%': {
                        opacity: 0,
                        top: '-300px'
                    },
                    '100%': {
                        opacity: 1,
                        top: '40px'
                    }
                },
                fadein5: {
                    '0%': {
                        opacity: 0,
                        left: '-500px'
                    },
                    '100%': {
                        opacity: 1,
                        left: '0px'
                    }
                }
            },
            animation: {
                titlefadein: 'titlefadein 1s ease-in',
                titlefadein2: 'titlefadein2 1.2s ease-out',
                fadein1: 'fadein1 1.2s ease',
                fadein2: 'fadein2 1.4s ease',
                fadein3: 'fadein3 1.3s ease',
                fadein4: 'fadein4 0.5s ease',
                fadein5: 'fadein5 0.8s ease',
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
            sarabun: ['Sarabun', 'sans-serif'],
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