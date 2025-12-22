import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-12-18",
	devtools: { enabled: false },
	ssr: true,

	future: {
		compatibilityVersion: 4,
	},

	modules: ["@nuxt/fonts"],

	vite: {
		plugins: [tailwindcss()],
	},
	css: ["~/assets/css/main.css"],

	app: {
		head: {
			title: "Chatravasa - Students ka Ghar, Digitally Managed",
			meta: [
				{
					name: "description",
					content:
						"Chatravasa Management system for hostel residents and staff",
				},
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "theme-color", content: "#4CAF50" },
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon-180x180.png",
					sizes: "180x180",
				}
			],
		},
	},

	fonts: {
		defaults: {
			weights: [400],
			styles: ["normal", "italic"],
			subsets: [
				"cyrillic-ext",
				"cyrillic",
				"greek-ext",
				"greek",
				"vietnamese",
				"latin-ext",
				"latin",
			],
		},
	},
});
