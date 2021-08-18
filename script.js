let escala = 16;
let modo = "lapiz";
let color = "#000000"
const grid = document.querySelector(".grid");
const clear = document.querySelector("#clear");
const lapiz = document.querySelector("#lapiz");
const goma = document.querySelector("#goma");
const colores = document.querySelector("#colores");
const x16 = document.querySelector("#x16");
const x32 = document.querySelector("#x32");
const x64 = document.querySelector("#x64");

colores.onchange = (e) => elegirColor(e.target.value)

function elegirColor(nuevoColor) {
  color = nuevoColor
}

function marco(escala) {
  grid.style.gridTemplateColumns = `repeat(${escala}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${escala}, 1fr)`;

  for (let i = 0; i < escala * escala; i++) {
    const gridItem = document.createElement("div");
    gridItem.addEventListener("mouseover", dibujar);
    grid.appendChild(gridItem);
    gridItem.classList.add("divs");
  }
}

function dibujar(e) {
  if (modo == "lapiz") {
    e.target.style.backgroundColor = color;
  } else if (modo == "goma") {
    e.target.style.backgroundColor = "white";
  }
}

function reinicio(xEscala) {
  xEscala = escala;
  grid.innerHTML = "";
  marco(escala);
}

function escalas(xEscala) {
  grid.innerHTML = "";
  marco(xEscala);
}

clear.addEventListener("click", reinicio);

lapiz.addEventListener("click", () => {
  modo = "lapiz";
  
});
goma.addEventListener("click", () => {
  modo = "goma";
});

x16.addEventListener("click", () => {
  escala = 16;
  escalas(escala);
});

x32.addEventListener("click", () => {
  escala = 32;
  escalas(escala);
});

x64.addEventListener("click", () => {
  escala = 64;
  escalas(escala);
});

window.onload = () => {
  marco(escala);
};
