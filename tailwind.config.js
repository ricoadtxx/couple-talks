/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#990202",
				secondary: "#030000",
				tertiary: "#d6c7c7",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				salsa: ["Salsa", "sans-serif"],
			},
		},
	},
	plugins: [],
};
