let color = "black";
document.addEventListener("DOMContentLoaded", function() {
    makeGrid();
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        makeGrid(size);
    })
})
function makeGrid(size=16) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener("mouseover", drawGrid)
        grid.insertAdjacentElement("beforeend", div);
    }
}
    
function getSize() {
    let choice = prompt("What size of the grid do you want to work on?");
    let message = document.querySelector("#message");
    if (choice == "") {
        message.innerHTML = "Provide a number";
    } else if (choice < 0 || choice > 100) {
        message.innerHTML = "Number should be between 1 and 100";
    } else {
        message.innerHTML = "Let the games begin!";
        return choice;
    }
}

function drawGrid() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = "black";
    }
}

function setColor(colorOption) {
    color = colorOption;
}

function clearGrid() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = "white")
}
