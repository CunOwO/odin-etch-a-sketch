const container =document.querySelector(".container");
let grid = document.querySelector(".grid");
const resizeBtn = document.querySelector("#resizeBtn");
let gridSize;

createGrid(gridSize);

resizeBtn.addEventListener("click", () => {
    do {
        gridSize = parseInt(prompt("Grid size: "));
    } while (gridSize > 100);
    
    deleteGrid();
    createGrid(gridSize);
});

function createGrid(gridSize = 16) {
    for (let i = 0; i < gridSize; i++)
    {
        const gridColumn = document.createElement("div");
        gridColumn.setAttribute("style", "display: flex; flex-direction: column; flex: 1;");
        grid.appendChild(gridColumn);
        for (let j = 0; j < gridSize; j++) {
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
}

function deleteGrid() {
    container.removeChild(grid);
    grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
}