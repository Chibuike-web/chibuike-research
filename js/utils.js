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
		name: "AI-Powered EHR",
		type: "Independent",
		year: 2025,
	},
	{
		id: crypto.randomUUID(),
		name: "AI-Powered EHR",
		type: "Independent",
		year: 2025,
	},
];
