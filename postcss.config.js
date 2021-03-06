module.exports = {
  purge: [
    "./pages/*.html"
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}