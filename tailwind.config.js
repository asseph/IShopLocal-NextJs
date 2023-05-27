/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
				"dark": "#111727",
        "cB": "#CACACA",
        "sB": "#161828",
        "iB": "#2B2E3C",
        "greyB": "#7AC943"
			},
      fontFamily: {
				sfui: ['SF UI Display', 'sans-serif'],
			},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

