function carregarPagina(pagina) {
  fetch(pagina)
    .then(response => response.text())
    .then(data => {
      document.getElementById("conteudo").innerHTML = data;
    })
    .catch(error => {
      document.getElementById("conteudo").innerHTML = "<p>Erro ao carregar a página.</p>";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Evita recarregar a página
      const pagina = link.getAttribute("data-pagina");
      carregarPagina(pagina);
    });
  });
});