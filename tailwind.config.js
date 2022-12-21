/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'unbounded': ['"Unbounded"', 'sans-serif'],
                'chivo': ['Chivo', 'sans-serif']
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
}
