let maTable = document.createElement("table");
document.body.appendChild(maTable);
for (let nbRows = 0; nbRows <=9; nbRows++) {
    let uneRow = document.createElement("tr");
    maTable.appendChild(uneRow);
    for (let nbColumn = 0; nbColumn <=9; nbColumn++) {
        let uneColumn = document.createElement("td");
        uneColumn.innerText = (nbColumn+1).toString();
        uneRow.appendChild(uneColumn)
    }
}