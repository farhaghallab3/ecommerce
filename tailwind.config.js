module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
       '2xl': '1536px',
      },
      colors: {
        blue: {
          600: '#3EC99B', // Your brand blue color
        },
      },
    },
  },
  plugins: [],
}