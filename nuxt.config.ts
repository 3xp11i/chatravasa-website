import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-12-18",
	devtools: { enabled: false },
	ssr: true,

	future: {
		compatibilityVersion: 4,
	},

	modules: ["@nuxt/fonts", "@nuxtjs/seo", "@nuxt/content"],

	site: {
		url: "https://chatravasa.com",
		name: "Chatravasa",
		description:
			"Chatravasa helps students find hostels in Varanasi, PGs in Varanasi, boys hostels, girls hostels, and safe accommodation near BHU, Lanka, Sigra, and Kamachha. Discover affordable student housing, room rentals, and hostel stays (छात्रावास, हॉस्टल) with practical guides and search resources.",
		defaultLocale: "en",
		trailingSlash: false,
	},

	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ["/", "/pricing", "/contact", "/blog"],
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},
	css: ["~/assets/css/main.css"],

	app: {
		head: {
			title: "Chatravasa | Student Hostels & PGs in Varanasi - BHU, Lanka, Sigra",
			titleTemplate: "%s | Chatravasa",
			meta: [
				{
					name: "description",
					content:
						"Chatravasa helps students discover and compare student hostels in Varanasi, PGs in Varanasi, boys hostels, girls hostels, and safe stays near BHU, Lanka, Sigra, and Kamachha. Find affordable rooms, student housing, and hostel guides.",
				},
				{
					name: "keywords",
					content:
						"student hostels in Varanasi, hostels in Varanasi, PGs in Varanasi, boys hostel in Varanasi, girls hostel in Varanasi, hostel near BHU, hostel near Lanka, hostel near Sigra, hostel near Kamachha, Chatrawaas, chaatrawas, छात्रावास, हॉस्टल, हॉस्टल वाराणसी, छात्रावास वाराणसी, बॉयज हॉस्टल, गर्ल्स हॉस्टल, student accommodation Varanasi, boys PG in Varanasi, girls PG in Varanasi, student rooms Varanasi, affordable hostel Varanasi, budget accommodation Varanasi, safe hostel for students, hostel in Benares, Varanasi student housing, rooms near Banaras Hindu University, college hostel near Varanasi, बीएचयू के पास हॉस्टल, लंका में हॉस्टल, सिग्रा में हॉस्टल, आउटस्टेशन छात्र के लिए हॉस्टल",
				},
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "theme-color", content: "#4CAF50" },
				{ name: "robots", content: "index, follow, max-image-preview:large" },
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon-180x180.png",
					sizes: "180x180",
				},
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
