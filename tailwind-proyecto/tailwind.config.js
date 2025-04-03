/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(210, 100%, 97%)',
        foreground: 'hsl(339, 20%, 20%)',
        primary: 'hsl(308, 56%, 85%)', 
        secondary: 'hsl(196, 75%, 88%)', 
        accent: 'hsl(211, 86%, 70%)',
        destructive: 'hsl(0, 93%, 73%)',
        muted: 'hsl(210, 100%, 95%)',
        card: 'hsl(210, 100%, 97%)',
        border: 'hsl(210, 40%, 80%)',
      },
      borderRadius: {
        default: '1rem',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

