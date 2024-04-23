const gridContainer = document.querySelector("#grid-container");

function grid() {
    !squareNumber && (squareNumber = 16);
    for (let i = 0; i < squareNumber; i++) {
        let row = document.createElement("div");
        gridContainer.appendChild(row);
        row.className = "row";
        for (let i = 0; i < squareNumber; i++) {
            let square = document.createElement("div");
            row.appendChild(square);
            square.className = "square";
            square.addEventListener("mouseover", (event) => {
                let rgbArray = [];
                for (let i = 0; i < 3; i++) {
                    let color = Math.floor(Math.random() * 255);
                    rgbArray.push(color);
                }
                event.target.style = `background-color:rgb(${rgbArray.toString()})`;
            });
        }
    }
}

function clearGrid() {
    gridContainer.innerHTML = "";
    grid();
}

let squareNumber;

const sizeBtn = document.querySelector("#size");

sizeBtn.addEventListener("click", (event) => {
    squareNumber = prompt("Enter a grid size (max 100) : ");
    if (squareNumber <= 100) {
        clearGrid();
    } else {
        alert("Please enter a maximum grid size of 100");
    }
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", (event) => {
    clearGrid();
});

grid();
