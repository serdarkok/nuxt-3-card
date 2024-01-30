/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/modules/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'gray-1': '#353844',
        'acccent': '#D2AD81',
        'blue-1': '#1B264F',
        'blue-3': '#506BCA',
      },
    },
  },
  plugins: [],
}

