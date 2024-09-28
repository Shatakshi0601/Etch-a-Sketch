let container = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    let num = document.createElement("p");
    let div = document.createElement("div");
    div.style.width = 800 / 16 + "px";
    div.style.height = 800 / 16 + "px";
    div.appendChild(num);
    container.appendChild(div);
  }
}


let divs = document.querySelectorAll(".container div");
divs.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "pink";
  });
});


let button = document.querySelector("button");
button.addEventListener("click", () => {
  let boxes = parseInt(prompt("how many squares per side?"));
  if (boxes > 100) {
    alert("too big");
  } else {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${boxes}, 1fr)`;
    for (let i = 1; i <= boxes; i++) {
      for (let j = 1; j <= boxes; j++) {
        let num = document.createElement("p");
        let div = document.createElement("div");
        num.textContent = `${i * boxes + j + 1}`; 
        div.classList.add("grid-square");
        div.style.width = 800 / boxes + "px";
        div.style.height = 800 / boxes + "px";
        div.appendChild(num);
        container.appendChild(div);
      }
    }
    let divs = document.querySelectorAll(".container div");

    divs.forEach((div) => {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "pink";
      });
    });
  }
});