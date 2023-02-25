document.addEventListener("DOMContentLoaded", () => {
    makeGrid();
})

function makeGrid(size=16) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    
    for (let i = 0; i < numDivs; i++) {
        div = document.createElement('div');
        grid.insertAdjacentElement("beforeend", div);
    }
    
}