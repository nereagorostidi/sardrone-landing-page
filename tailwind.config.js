/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./journal.html"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050a16',
          900: '#0a1128',
          800: '#0e1c33',
          700: '#152c4d',
          600: '#1f3d68',
        },
        accent: {
          DEFAULT: '#ff6a3d',
          light: '#ffb08a',
          dark: '#d94f26',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
