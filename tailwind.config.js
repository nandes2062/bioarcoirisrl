/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./common/**/*.{js,vue,ts,html}",
    "./layouts/**/*.{vue,ts,html}",
    "./pages/**/*.{vue,ts,html}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
}
