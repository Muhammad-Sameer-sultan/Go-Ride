import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue:{
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#29AFFD',
          bg:'#E3F0F9'
        }
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200% auto',
      },
      backgroundPosition: {
          'right-center': 'right center'
      },
      screens: {
        'xsm': '375px',
        'slg': '870px',
        'xlg': '1250px'
      }
    },
  },
  plugins: [],
}
export default config
