/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        outlineShadow: "0px 0px 21px rgba(0, 0, 0, 0.15)",
        floatingShadow: "0px 0px 40px rgba(0, 0, 0, 0.2)",
        mobileAppShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
        myOrdersShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
        questionCardShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
        filterButtonShadow: "0px 0px 37px rgba(0, 0, 0, 0.1)",
        paymentAddressShadow: "0px 0px 40px rgba(0, 0, 0, 0.08)",
        cardShadow: "0px 10px 10px 0px rgba(0 ,0, 0 ,0.75)",
      },
    },
  },
  plugins: [],
}
