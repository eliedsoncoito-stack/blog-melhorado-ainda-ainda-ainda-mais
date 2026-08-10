document.addEventListener("DOMContentLoaded", () => {

  // Curtidas e likes (um por post, salvos no navegador)
  const artigos = document.querySelectorAll("article");
  artigos.forEach((artigo, index) => {
    const btnCurtir = artigo.querySelector(".btn-curtir");
    const btnLike = artigo.querySelector(".btn-like");
    configurarBotao(btnCurtir, `post${index}`, "curtir");
    configurarBotao(btnLike, `post${index}`, "like");
  });

  function configurarBotao(botao, postId, tipo) {
    const chave = `${postId}_${tipo}`;
    const contador = botao.querySelector(".contador");

    if (localStorage.getItem(chave) === "true") {
      botao.classList.add("ativo");
    }

    botao.addEventListener("click", () => {
      const jaReagiu = localStorage.getItem(chave) === "true";
      let valorAtual = parseInt(contador.textContent);

      if (jaReagiu) {
        valorAtual--;
        localStorage.setItem(chave, "false");
        botao.classList.remove("ativo");
      } else {
        valorAtual++;
        localStorage.setItem(chave, "true");
        botao.classList.add("ativo");
      }

      contador.textContent = valorAtual;
    });
  }

  // Botão de tema escuro
  const btnTemaEscuro = document.querySelector(".btn-tema-escuro");
  btnTemaEscuro.addEventListener("click", mudaTema);

  function mudaTema() {
    const corpoPagina = document.body;
    if (corpoPagina.classList.contains("tema-escuro")) {
      corpoPagina.classList.remove("tema-escuro");
    } else {
      corpoPagina.classList.add("tema-escuro");
    }
  }

  // Botão de voltar ao topo
  const btnVoltarTopo = document.querySelector(".btn-voltar-topo");
  btnVoltarTopo.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

});
