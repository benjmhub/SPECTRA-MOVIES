/** @type {import('tailwindcss').Config} */
export default {
  // Specify the paths to all template files in your project
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom colors
      colors: {
        "brand-primary": "#0E0E0D", // Primary brand color
        "brand-secondary": "#1A1A19", // Secondary brand color
        "brand-tertiary": "#16181E", // Tertiary brand color
        "brand-quaternary": "#B0EDDB", // Quaternary brand color
        "brand-gray": "#B0B0AF", // Gray brand color
        "brand-white": "#FFFFFF", // White brand color
      },
    },
    // Custom breakpoints for responsive design
    screens: {
      phone: { max: "767px" }, // Applies to screens with a max width of 767px
      tablet: { min: "768px", max: "1023px" }, // Applies to screens between 768px and 1023px
      laptop: { min: "1024px", max: "1580px" }, // Applies to screens between 1024px and 1580px
      desktop: { min: "1581px" }, // Applies to screens with a minimum width of 1581px
    },
  },
  plugins: [],
};
