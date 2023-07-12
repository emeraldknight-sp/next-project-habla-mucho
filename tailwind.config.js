/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "320px",
			md: "768px",
			lg: "1024px",
		},
		colors: {
			darkGray: "#344A5F",
			lightGray: "#F0F1F3",
			blue: "#2295D8",
			white: "#FFFFFF",
			black: "#000000",
			lightBlue: "#63CBE6",
			red: "#EA676D",
			purple: "#7D8DE2",
			green: "#4CC077",
			yellow: "#FDB958",
			pink: "#EC6F91",
			transparent: "transparent",
		},
		fontFamily: {
			sans: ["Lato", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
