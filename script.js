let body = document.querySelector("body"); // select body
body.setAttribute("id", "container");
body.setAttribute("style", "display: flex; flex-direction: column; height: 100vh; margin: 0;");

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
	row.setAttribute("style", "display: flex; flex: 1; border: solid 2px darkred; background-color: coral;");
	columns.forEach((column) => {
		column = document.createElement("div");
		column.setAttribute("style", "flex: 1; border: solid 2px darkblue; background-color: coral;");
		row.appendChild(column);
	});
	body.appendChild(row);
});
