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
			white: "#FFFFFF",
			black: "#000000",
			transparent: "transparent",
			darkGray: "#344A5F",
			lightGray: "#F0F1F3",
			lightBlue: "#63CBE6",
			blue: "#2295D8",
			red: "#EF4444",
			lightYellow: "#FCD34D",
			yellow: "#F59E0B",
			green: "#10B981",
			purple: "#8B5CF6",
			pink: "#EC6F91",
			orange: "#F97316",
			teal: "#14B8A6",
			cyan: "#22D3EE",
		},
		fontFamily: {
			sans: ["var(--font-open-sans)"],
			serif: ["var(--font-raleway)"],
			body: ["var(--font-open-sans)"],
			title: ["var(--font-raleway)"],
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
