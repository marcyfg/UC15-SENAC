const texto = document.getElementById("texto");

function mudar() {
  if (texto.style.color === "rgb(85, 13, 48)" || texto.style.color === "#550d30") {
    texto.style.color = "#E143F0";
  } else {
    texto.style.color = "#550d30";
  }
}

texto.addEventListener("click", mudar);

const imagens = document.querySelectorAll('img');

imagens.forEach((img) => {
  img.tabIndex = 0;

  img.addEventListener('click', () => {
    img.classList.toggle('is-expanded');
  });

  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      img.classList.toggle('is-expanded');
      e.preventDefault();
    }
  });

  img.addEventListener('mouseenter', () => img.classList.add('is-expanded'));
  img.addEventListener('mouseleave', () => img.classList.remove('is-expanded'));
});