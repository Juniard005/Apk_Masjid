/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "hsl(0 0% 100%)",
				foreground: "hsl(222.2 84% 4.9%)",
				primary: "hsl(196 91% 37%)", // #0983B5 dalam format HSL
				"primary-foreground": "hsl(0 0% 100%)",
				secondary: "hsl(215 20% 90%)",
				"secondary-foreground": "hsl(222.2 47.4% 11.2%)",
				muted: "hsl(210 40% 96.1%)",
				"muted-foreground": "hsl(215.4 16.3% 46.9%)",
				accent: "hsl(210 30% 92%)",
				"accent-foreground": "hsl(222.2 47.4% 11.2%)",
				border: "hsl(214.3 31.8% 91.4%)",
				input: "hsl(214.3 31.8% 91.4%)",
				ring: "hsl(196 91% 37%)",
			},
		},
	},
	plugins: [],
};
