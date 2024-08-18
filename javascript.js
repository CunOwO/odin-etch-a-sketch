const gridContainer = document.querySelector(".container");

for (let i = 0; i < 16; i++)
{
    const gridColumn = document.createElement("div");
    gridColumn.setAttribute("style", "display: flex; flex-direction: column; flex: 1;");
    gridContainer.appendChild(gridColumn);
    for (let j = 0; j < 16; j++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("pixel");
        gridCell.setAttribute("style", "border: solid black 0.1px; flex: 1;");
        gridColumn.appendChild(gridCell);
    }
}

const gridCellList = document.querySelectorAll(".pixel");
gridCellList.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "black";
    });
});
