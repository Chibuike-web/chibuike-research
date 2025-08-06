import { articles } from "./utils.js";
import { arrowIcon } from "./icons.js";

const themeToggle = document.getElementById("theme-toggle");
const linkElements = document.querySelectorAll(".btn-content a");
const articlesSection = document.querySelector(".articles");

themeToggle?.addEventListener("click", toggleTheme);

function toggleTheme() {
	if (document.body.classList.contains("dark")) {
		document.body.classList.remove("dark");
		document.body.classList.add("light");
		localStorage.setItem("theme", "light");
	} else {
		document.body.classList.remove("light");
		document.body.classList.add("dark");
		localStorage.setItem("theme", "dark");
	}
}

function initTheme() {
	const saved = localStorage.getItem("theme");
	if (saved === "dark") {
		document.body.classList.add("dark");
	} else if (saved === "light") {
		document.body.classList.add("light");
	} else {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.add("light");
		}
	}
}

initTheme();

linkElements.forEach((link) => {
	const iconSpan = document.createElement("span");
	iconSpan.className = "link-icon";
	iconSpan.innerHTML = arrowIcon;
	link.appendChild(iconSpan);
});

const articleList = document.createElement("ul");
articleList.className = "article-list";

articles.forEach((article) => {
	const listItem = document.createElement("a");
	listItem.href = "https://www.linkedin.com/in/chibuike-maduabuchi";
	listItem.className = "article-item";
	listItem.id = `article-item-${article.id}`;

	const title = document.createElement("p");
	title.className = "article-title";
	title.textContent = article.name;
	listItem.appendChild(title);

	const meta = document.createElement("div");
	meta.className = "article-meta";
	meta.innerHTML = `<p>${article.type.toUpperCase()} - ${article.year} </p>`;

	listItem.appendChild(meta);
	articleList.appendChild(listItem);
});

articlesSection?.appendChild(articleList);
