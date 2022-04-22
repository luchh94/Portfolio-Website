module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        ecommerce: "url('./assets/ecommercewebsite.png')",
      }),
      fontFamily: {
        fira: "'Fira Code', monospace",
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
