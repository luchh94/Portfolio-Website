module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        ecommerce: "url('./assets/ecommercewebsite.png')",
      }),
      fontFamily: {
        fira: "'Fira Code', monospace",
        sans: "'Open Sans', sans-serif",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
