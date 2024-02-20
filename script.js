let body = document.querySelector("body");
body.setAttribute("id", "container");
body.setAttribute("style", "margin: 30px auto; width: fit-content;");

let rows = [];
for (let i = 0; i < 16; i++) {
	rows[i] = `row${i}`;
}

let columns = [];
for (let i = 0; i < 16; i++) {
	columns[i] = `column${i}`;
}

rows.forEach((row) => {
	row = document.createElement("div");
	row.setAttribute("style", "display: flex; justify-content: center;");
	columns.forEach((column) => {
		column = document.createElement("div");
		column.setAttribute("style", "flex: 0 0 auto ; border: solid 1px darkgrey; background-color: lightgrey;");
		row.appendChild(column);
	});
	body.appendChild(row);
});

body.addEventListener("mouseover", (e) => {
	targetDiv = e.target;
	targetDiv.style.backgroundColor = "indigo";
});
