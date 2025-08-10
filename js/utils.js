/**
 * @typedef {Object} Article
 * @property {string} id - Unique identifier (UUID)
 * @property {string} name - Name of the article
 * @property {string} type - Type of article (e.g. "Independent")
 * @property {number} year - Year published
 */

/** @type {Article[]} */
export const articles = [
	{
		id: crypto.randomUUID(),
		name: "AI-Powered EHR",
		type: "Independent",
		year: 2025,
	},
	{
		id: crypto.randomUUID(),
		name: "Semantic AI",
		type: "Independent",
		year: 2025,
	},
];

/**
 * @typedef {Object} PersonalProject
 * @property {string} id
 * @property {string} title
 * @property {string} name
 * @property {number} year
 * @property {string} link
 */

/**@type {PersonalProject[]} */
export const personalProjects = [
	{
		id: crypto.randomUUID(),
		title: "PROJECT",
		name: "AI-Powered EHR",
		year: 2025,
		link: "https://main-portfolio-v1.vercel.app/medibridge",
	},
	{
		id: crypto.randomUUID(),
		title: "PROJECT",
		name: "Semantic AI",
		year: 2025,
		link: "https://github.com/Chibuike-web/Browser-Extensions",
	},
	{
		id: crypto.randomUUID(),
		title: "PROJECT",
		name: "PDF Summarizer",
		year: 2025,
		link: "https://github.com/Chibuike-web/ai-experiments/tree/main/PDF%20Summarizer",
	},
	{
		id: crypto.randomUUID(),
		title: "PROJECT",
		name: "Remove Image Background",
		year: 2025,
		link: "https://github.com/Chibuike-web/ai-experiments/tree/main/RemoveBg",
	},
];
