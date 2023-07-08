const fichas = document.getElementsByClassName("ficha");
const alertaUno = document.getElementById("alerta-uno")
const botonAlertaUno = document.getElementById("boton-alerta-uno")
const alertaDos = document.getElementById("alerta-dos")
const botonAlertaDos = document.getElementById("boton-alerta-dos")

let turno = 0;
let jugadorUnoVictorias = document.getElementById("victorias-uno");
let jugadorDosVictorias = document.getElementById("victorias-dos");
let contadorVictoriasJugadorUno = 0
let contadorVictoriasJugadorDos = 0

alertaUno.style.display = "none"
alertaDos.style.display = "none"

botonAlertaUno.addEventListener("click", reiniciarUno)
botonAlertaDos.addEventListener("click", reiniciarDos)

function reiniciarUno(){
  alertaUno.style.display = "none"
}
function reiniciarDos(){
  alertaDos.style.display = "none"
}

for (let i = 0; i < fichas.length; i++) {
  fichas[i].addEventListener("click", fichaSeleccionada);
}

function fichaSeleccionada(event) {
  const divSeleccionado = event.target;

  if (turno % 2 === 0) {
    divSeleccionado.style.backgroundColor = "rgb(191, 17, 191)";
    if (verificarGanador("rgb(191, 17, 191)")) {
      contadorVictoriasJugadorUno ++
      jugadorUnoVictorias.textContent = contadorVictoriasJugadorUno
      alertaUno.style.display = "flex"
      reiniciarJuego();
      return;
    }
  } else {
    divSeleccionado.style.backgroundColor = "rgb(45, 255, 12)";
    if (verificarGanador("rgb(45, 255, 12)")) {
      contadorVictoriasJugadorDos ++
      jugadorDosVictorias.textContent = contadorVictoriasJugadorDos
      alertaDos.style.display = "flex"
      reiniciarJuego();
      return;
    }
  }

  turno++;
}

function verificarGanador(color) {
  // Verificar líneas horizontales
  for (let fila = 0; fila < 6; fila++) {
    for (let columna = 0; columna < 3; columna++) {
      if (
        getColorFicha(fila, columna) === color &&
        getColorFicha(fila, columna + 1) === color &&
        getColorFicha(fila, columna + 2) === color &&
        getColorFicha(fila, columna + 3) === color
      ) {
        return true;
      }
    }
  }

  // Verificar líneas verticales
  for (let columna = 0; columna < 6; columna++) {
    for (let fila = 0; fila < 3; fila++) {
      if (
        getColorFicha(fila, columna) === color &&
        getColorFicha(fila + 1, columna) === color &&
        getColorFicha(fila + 2, columna) === color &&
        getColorFicha(fila + 3, columna) === color
      ) {
        return true;
      }
    }
  }

  // Verificar diagonales (izquierda a derecha)
  for (let fila = 0; fila < 3; fila++) {
    for (let columna = 0; columna < 3; columna++) {
      if (
        getColorFicha(fila, columna) === color &&
        getColorFicha(fila + 1, columna + 1) === color &&
        getColorFicha(fila + 2, columna + 2) === color &&
        getColorFicha(fila + 3, columna + 3) === color
      ) {
        return true;
      }
    }
  }

  // Verificar diagonales (derecha a izquierda)
  for (let fila = 0; fila < 3; fila++) {
    for (let columna = 3; columna < 6; columna++) {
      if (
        getColorFicha(fila, columna) === color &&
        getColorFicha(fila + 1, columna - 1) === color &&
        getColorFicha(fila + 2, columna - 2) === color &&
        getColorFicha(fila + 3, columna - 3) === color
      ) {
        return true;
      }
    }
  }

  return false;
}

function getColorFicha(fila, columna) {
  const indice = fila * 6 + columna;
  const ficha = fichas[indice];
  return ficha.style.backgroundColor;
}

function reiniciarJuego() {
  for (let i = 0; i < fichas.length; i++) {
    fichas[i].style.backgroundColor = "";
  }
  turno = 0;
}


