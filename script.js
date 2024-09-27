let container= document.querySelector(".container");

for (let i = 1; i<=16; i++); {
    for( let j=1; j<=16; j++); {
        let num = document.createElement("p");
        let div = document.createElement("div");
        div.style.width = 800/16 + "px";
        div.style.height= 800/16 + "px";
        div.appendChild(num);
        container.appendChild(div);
    }
}

let divs = document.querySelectorAll(".container div");
divs.forEach((div) => {
    div.addEventListner("mouseover", () => {
        div.style.backgroundColor = "pink";
    });
});



