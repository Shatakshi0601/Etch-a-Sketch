let container = document.querySelector(".container");

// Function to create grid squares
function createGrid(boxes) {
    container.innerHTML = ""; // Clear existing grid
    for (let i = 0; i < boxes; i++) {
        for (let j = 0; j < boxes; j++) {
            let div = document.createElement("div");
            div.classList.add("grid-square");
            container.appendChild(div);
        }
    }
}

// Initial grid creation
createGrid(16);

// Event delegation for mouseover effect
container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-square")) {
        event.target.style.backgroundColor = "pink";
    }
});

let button = document.querySelector("button");
button.addEventListener("click", () => {
    let boxes = parseInt(prompt("How many squares per side?"));
    if (boxes > 100) {
        alert("Too big!");
    } else {
        createGrid(boxes);
    }
});
