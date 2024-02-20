let body = document.querySelector("body");
body.setAttribute("id", "container");
body.setAttribute("style", "display: flex; flex-direction: column; margin: auto; width: 960px; height: 960px; background-color: #ccc;");


rebuildGrid(16); // default Grid

function buildButton() {
	let gridSizeButton = document.createElement("button");
	gridSizeButton.textContent = "New Grid Size";
	gridSizeButton.setAttribute("style", "font-size: 2em;");
	gridSizeButton.addEventListener('click', () => {
		let GRIDSIZE = -1;
		do {
			GRIDSIZE = Number(prompt("What is the new grid size? (0 - 100)"));
		} while (isNaN(GRIDSIZE) || GRIDSIZE < 0 || GRIDSIZE > 100);
		GRIDSIZE = Math.floor(GRIDSIZE);
		rebuildGrid(GRIDSIZE);
	});
	body.appendChild(gridSizeButton);
}

function rebuildGrid(GRIDSIZE) {

	body.querySelectorAll('*').forEach((i) => i.remove());
	buildButton();

	let rows = [];
	for (let i = 0; i < GRIDSIZE; i++) {
		rows[i] = `row${i}`;
	}

	let columns = [];
	for (let i = 0; i < GRIDSIZE; i++) {
		columns[i] = `column${i}`;
	}

	rows.forEach((row) => {
		row = document.createElement("div");
		row.setAttribute("style", "display: flex; flex: 1; justify-content: center;");
		columns.forEach((column) => {
			column = document.createElement("div");
			column.setAttribute("style", "flex: 1 ; border: solid 1px darkgrey; background-color: cornsilk;");
			row.appendChild(column);
		});
		body.appendChild(row);
	});

	body.addEventListener("mouseover", (e) => {
		targetDiv = e.target;
		if (targetDiv !== document.body && targetDiv !== document.querySelector("button")) {
			targetDiv.style.backgroundColor = "indigo";
		}
	});

	body.addEventListener("touchstart", (e) => {
		targetDiv = e.target;
		targetDiv.style.backgroundColor = "indigo";
	});

	body.addEventListener("touchmove", (e) => {
		if (e.touches.length > 0) {
			targetDiv = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
			if (targetDiv !== document.documentElement && targetDiv !== document.body && targetDiv !== document.querySelector("button")) {
				targetDiv.style.backgroundColor = "indigo";
			}
		}
	});
}

