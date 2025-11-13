const texto = document.getElementById("texto");

function mudar() {
  if (texto.style.color === "rgb(85, 13, 48)" || texto.style.color === "#550d30") {
    texto.style.color = "#E143F0";
  } else {
    texto.style.color = "#550d30";
  }
}

texto.addEventListener("click", mudar);