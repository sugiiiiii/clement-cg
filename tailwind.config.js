/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
            'unbounded': ['"Unbounded"', 'sans-serif'],
        }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
