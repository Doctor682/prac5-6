function calculate() {
    var xMin = parseInt(document.getElementById("xMin").value);
    var xMax = parseInt(document.getElementById("xMax").value);
    var step = parseInt(document.getElementById("step").value);

    var tableBody = document.getElementById("resultTableBody");
    tableBody.innerHTML = "";

    for (var x = xMin; x <= xMax; x += step) {
        var Z;

        if (x < 4) {
            Z = Math.sin(3 * x) + 1;
        } else if (x === 2) {
            Z = Math.cos(Math.pow(x, 2));
        } else if (x > 2) {
            Z = Math.log10(x) + Math.sqrt(x);
        }

        var row = document.createElement("tr");
        var xCell = document.createElement("td");
        xCell.textContent = x;
        row.appendChild(xCell);

        var ZCell = document.createElement("td");
        ZCell.textContent = Z;
        row.appendChild(ZCell);

        tableBody.appendChild(row);
    }
}