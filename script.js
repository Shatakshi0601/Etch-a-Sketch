let container= document.querySelector(".container");

for (let i = 1; i<=16; i++) {
    for( let j=1; j<=16; j++) {
        let div = document.createElement("div");
        div.style.width = 800/16 + "px";
        div.style.height= 800/16 + "px";
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
  let boxs = parseInt(prompt("how many squares per side?"));
  if (boxs > 100) {
    alert("too big");
  } else {
    container.innerHTML = "";
    for (let i = 1; i <= boxs; i++) {
      for (let j = 1; j <= boxs; j++) {
        let div = document.createElement("div");
        div.style.width = 800 / boxs + "px";
        div.style.height = 800 / boxs + "px";
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



