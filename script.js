let container = document.querySelector(".container");


function createGrid(boxes) {
    container.innerHTML = ""; 
    container.style.gridTemplateColumns = `repeat(${boxes}, 1fr)`; 
    for (let i = 1; i < boxes; i++) {
        for (let j = 1; j < boxes; j++) {
            let div = document.createElement("div");
            let num = document.createElement("p");
            num.textContent = `${i * boxes + j + 1}`; 
            div.classList.add("grid-square");
            div.appendChild(num);
            container.appendChild(div);
        }
    }
}


createGrid(16);


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
