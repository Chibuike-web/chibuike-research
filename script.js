const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", toggleTheme);

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
