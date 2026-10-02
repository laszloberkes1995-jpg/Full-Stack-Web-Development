/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}",
            "./*.html",
            "../../**/*.html"],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {},
  },
  plugins: [],
}

