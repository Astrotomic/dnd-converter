module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Calistoga'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
