/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
    extend: {
      fontFamily: {
        notoJP: ["Noto Sans JP", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        brown: "#E8E0DD",
        darkBrown: "#674532",
        shadeOrange: "#FD5231",
        lightOrange: "#FD5231",
        lighterOrange: "#FA8C77",
      },
      backgroundImage: {
        "hero-image": "url('/hero/hero-image.jpg')",
        sushi: "url('/public/hero/hero-image-mobile.png')",
      },
      screens: {
        "large-screen": "1412px",
        // this is for adjusting hero section text
        "middle-screen": "1270px",
        "small-screen": "1070px",
        "mobile-screen": "760px",
        "item-middle-screen": "1140px",
        "item-small-screen": "770px",
        // "item-mobile-screen": "1140px",
      },
    },
  },
  plugins: [],
};
