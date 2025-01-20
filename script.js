const container = document.getElementById("container");
let size = 16;

for(let i = 0; i < size * size; i++){
    const squares = document.createElement("div");
    squares.classList.add("squares");
    container.appendChild(squares);
}