/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F6E8BD',
          light: '#FBF3D9',
          dark: '#E8D59E',
        },
        butter: {
          DEFAULT: '#F4D978',
          light: '#FAE7A0',
          dark: '#DEBE4F',
        },
        periwinkle: {
          DEFAULT: '#6879A5',
          light: '#8596BD',
          dark: '#4F5F87',
        },
        dusty: {
          DEFAULT: '#8E9DBB',
          light: '#B2BECD',
          dark: '#6F7F9E',
        },
        navy: {
          DEFAULT: '#202C49',
          light: '#2D3D64',
          dark: '#141C30',
        },
        paper: {
          DEFAULT: '#F7F1E6',
          light: '#FDFAF4',
          sub: '#EFE7D8',
          card: '#FFFFFF',
        },
        amber: {
          DEFAULT: '#C58A20',
          light: '#DC9F31',
          dark: '#A36F15',
        },
        espresso: {
          DEFAULT: '#3C2618',
          light: '#563824',
          dark: '#24160E',
        },
        olive: {
          DEFAULT: '#59613B',
          light: '#727C4E',
          dark: '#3E4427',
        },
        border: {
          DEFAULT: '#E3DAC9',
          sub: '#EDE6D8',
          strong: '#C9BDAA',
          navy: '#202C49',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        condensed: ['"Anton"', '"Bebas Neue"', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'mega': ['clamp(3.5rem, 9vw, 8.5rem)', { lineHeight: '0.92', letterSpacing: '0.01em' }],
        'display': ['clamp(2.75rem, 6.5vw, 6rem)', { lineHeight: '0.95', letterSpacing: '0.01em' }],
        'section': ['clamp(2rem, 4.5vw, 4rem)', { lineHeight: '0.98', letterSpacing: '0.02em' }],
        'title': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.05', letterSpacing: '0.01em' }],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.22s ease-out',
      },
      boxShadow: {
        'editorial': '4px 4px 0px 0px #202C49',
        'editorial-sm': '2px 2px 0px 0px #202C49',
        'editorial-lg': '8px 8px 0px 0px #202C49',
        'editorial-yellow': '5px 5px 0px 0px #F4D978',
        'editorial-blue': '5px 5px 0px 0px #6879A5',
        'soft': '0 4px 20px -2px rgba(32, 44, 73, 0.06), 0 2px 6px -1px rgba(32, 44, 73, 0.04)',
      }
    },
  },
  plugins: [],
}
