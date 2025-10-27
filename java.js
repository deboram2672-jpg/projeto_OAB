const todosConteudos = [
  "S_geral",
  "S_emocional",
  "S_dentista",
  "T_geral",
  "T_aposentadoria",
  "Edu",
  "Qm_somos",
  "Sobre_pj",
  "jogo_regras"
];

function exibirConteudo(idParaExibir) {
  const elemento = document.getElementById(idParaExibir);
  const estaVisivel = elemento.style.display === "block";

  todosConteudos.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = "none";
    }
  });
  if (!estaVisivel) {
    elemento.style.display = "block";
  }
}
