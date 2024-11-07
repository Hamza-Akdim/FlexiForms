/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(0, 51, 102)",
        "field-border": "rgb(183,181,181)",
      },
      boxShadow: {
        custom: "1px 1px 8px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        "icon-custom": "8px",
        circle: "50%",
      },
      spacing: {
        "circle-dim": "22px",
        "icon-padding": "15px",
      },

    },
  },
  plugins: [],
};
