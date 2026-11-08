document.addEventListener("DOMContentLoaded", () => {
    // 1. Aplica o tema visual (Cores)
    aplicarTemaVisual();

    // 2. Gera os botões do menu com base no questoes.js
    gerarMenuInicial();

    // 3. Inicializa os ícones SVG globais do cabeçalho
    document.getElementById('btn-home-svg').innerHTML = SVG_HOME;
    document.getElementById('badge-ronda-svg').innerHTML = SVG_STAR;
    document.getElementById('btn-dica').innerHTML = SVG_BULB + ' Dica';
    document.getElementById('icone-erro-svg').innerHTML = SVG_ERRO;
});

/* Aplica as variáveis de cor dinamicamente no CSS */
function aplicarTemaVisual() {
    if (!CONFIG_JOGO || !CONFIG_JOGO.tema) return;

    const root = document.documentElement;
    root.style.setProperty('--cor-em', CONFIG_JOGO.tema.corPrimaria);
    root.style.setProperty('--cor-em-dark', CONFIG_JOGO.tema.corSecundaria);
    
    const titulo = document.getElementById('subtitulo-header');
    if (titulo) titulo.textContent = CONFIG_JOGO.subtituloMenu;
}

/* Constrói o Menu Principal consoante o número de níveis no questoes.js */
function gerarMenuInicial() {
    const grid = document.querySelector('.grid-niveis');
    if (!grid || !CONFIG_JOGO.niveis) return;

    let htmlMenu = '';

    CONFIG_JOGO.niveis.forEach(nivel => {
        htmlMenu += `
            <button class="btn-nivel-novo ${nivel.corClasse}" onclick="iniciarJogo(${nivel.numQuestoes}, '${nivel.titulo}', ${nivel.id})">
                <img src="${nivel.icone}" class="icon-btn-nivel" alt="" onerror="this.style.display='none'">
                <div class="btn-nivel-text-container">
                    <span class="btn-nivel-titulo">${nivel.titulo}</span>
                    <span class="btn-nivel-subtitulo">${nivel.subtitulo}</span>
                </div>
            </button>
        `;
    });

    grid.innerHTML = htmlMenu;
}