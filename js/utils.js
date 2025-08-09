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

/**
 * @typedef {Object} PersonalProject
 * @property {string} id
 * @property {string} title
 * @property {string} name
 * @property {number} year
 */

/**@type {PersonalProject[]} */
export const personalProjects = [
	{
		id: crypto.randomUUID(),
		title: "NOMBA",
		name: "Bulk Airtime",
		year: 2025,
	},
	{
		id: crypto.randomUUID(),
		title: "NOMBA",
		name: "Bulk Airtime",
		year: 2025,
	},
	{
		id: crypto.randomUUID(),
		title: "NOMBA",
		name: "Bulk Airtime",
		year: 2025,
	},
	{
		id: crypto.randomUUID(),
		title: "NOMBA",
		name: "Bulk Airtime",
		year: 2025,
	},
];
