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

function aplicarTemaVisual() {
    if (!CONFIG_JOGO || !CONFIG_JOGO.tema) return;

    const root = document.documentElement;
    root.style.setProperty('--cor-em', CONFIG_JOGO.tema.corPrimaria);
    root.style.setProperty('--cor-em-dark', CONFIG_JOGO.tema.corSecundaria);
    
    const titulo = document.getElementById('subtitulo-header');
    if (titulo) titulo.textContent = CONFIG_JOGO.subtituloMenu;
}

function gerarMenuInicial() {
    const grid = document.querySelector('.grid-niveis');
    if (!grid || !CONFIG_JOGO.niveis) return;

    let htmlMenu = '';

    CONFIG_JOGO.niveis.forEach(nivel => {
        htmlMenu += `
            <button class="btn-nivel-novo ${nivel.corClasse}" onclick="iniciarJogo(${nivel.numQuestoes}, '${nivel.titulo}', '${nivel.id}')">
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

function iniciarJogo(numQuestoes = 10, tituloNivel = "", idNivel = "quiz-global") {
    erradas = 0;
    desafioAtual = 0;
    rondasParaDica = 0;

    nivelAtualId = idNivel;
    nivelAtualTitulo = tituloNivel;

    const nivelDados = CONFIG_JOGO.niveis.find(n => n.id === idNivel) || CONFIG_JOGO.niveis[0];
    let poolPerguntas = [];

    // Carrega o pool de perguntas do nível
    if (nivelDados && nivelDados.misturarModos) {
        CONFIG_JOGO.niveis.forEach(n => {
            if (n.perguntas && !n.misturarModos) {
                poolPerguntas.push(...n.perguntas);
            }
        });
    } else {
        poolPerguntas = nivelDados ? (nivelDados.perguntas || []) : [];
    }

    // =========================================================
    // SISTEMA ANTI-REPETIÇÃO
    // =========================================================
    let perguntasDisponiveis = poolPerguntas.filter(p => !historicoPerguntasUsadas.includes(p.id));

    if (perguntasDisponiveis.length < numQuestoes) {
        historicoPerguntasUsadas = [];
        perguntasDisponiveis = [...poolPerguntas];
    }

    totalDesafiosNivel = Math.min(numQuestoes, perguntasDisponiveis.length);

    rondasSorteadas = baralharArray(perguntasDisponiveis).slice(0, totalDesafiosNivel);

    rondasSorteadas.forEach(p => historicoPerguntasUsadas.push(p.id));
    // =========================================================

    const subtitulo = document.getElementById('subtitulo-header');
    if (subtitulo && tituloNivel !== "") {
        subtitulo.textContent = tituloNivel;
    }

    limparConfetis();
    atualizarPlacar();
    atualizarBotaoDica();
    mostrarEcra('ecra-jogo');

    carregarRonda();
}

// (Universal para qualquer jogo)
function carregarRonda() {
    pararVoz();
    resetTimerImpaciencia();
    
    const ronda = rondasSorteadas[desafioAtual];
    const gameArea = document.getElementById('game-area');
    if (!ronda || !gameArea) return;

    let html = '';

    // Áudio + Texto da Pergunta
    let btnAudioHTML = ronda.audio ? `
        <button type="button" class="btn-ouvir-pergunta" onclick="tocarVoz('${ronda.audio}')" title="Ouvir Pergunta">
            <img src="../../../SVG/audio.svg" alt="Ouvir" class="icon-audio">
        </button>` : '';

    html += `
        <div class="pergunta-container">
            ${btnAudioHTML}
            <div class="pergunta-texto">${ronda.pergunta}</div>
        </div>
    `;

    // Imagem Central (se existir)
    if (ronda.imagemPergunta) {
        html += `
            <div class="img-pergunta-frame">
                <img src="${ronda.imagemPergunta}" alt="Ilustração" onclick="abrirImagemModal(this.src)" onerror="this.onerror=null; this.src='img/brincar_aprender.jpg';">
            </div>
        `;
    }

    // RENDERIZAÇÃO DE ACORDO COM O TIPO DE UI
    switch (ronda.tipo) {
        
        case 'opcoes-imagem':
        case 'situacao':
            html += `<div class="opcoes-grid-imagens">`;
            
            // OBTÉM AS OPÇÕES (Manuais ou Geradas Dinamicamente do BANCO_RECURSOS)
            const opcoesImagem = prepararOpcoesPergunta(ronda);

            opcoesImagem.forEach(item => {
                const respostaCorretaLower = ronda.correta.trim().toLowerCase();
                const valorItemLower = (item.valor || item.alt || '').trim().toLowerCase();

                const fnClique = (valorItemLower === respostaCorretaLower) ? "simularAcerto(this)" : "simularErro(this)";
                const textoLegenda = item.valor || item.alt;

                html += `
                    <button class="btn-opcao-imagem" onclick="${fnClique}" data-valor="${textoLegenda}">
                        <img src="${item.img}" alt="${item.alt}" class="frame-1-1" onerror="this.src='img/brincar_aprender.jpg';">
                        <span class="pilula-legenda">${textoLegenda}</span>
                    </button>
                `;
            });
            html += `</div>`;
            break;

        case 'dupla-opcao':
        case 'cidadania':
            html += `<div class="opcoes-certo-errado">`;
            
            // SEM BARALHAR: Mantém exatamente a ordem definida no questoes.js (Certo 1.º, Errado 2.º)
            ronda.opcoes.forEach(opcao => {
                const texto = (typeof opcao === 'object') ? opcao.texto : opcao;
                const fnClique = (texto === ronda.correta) ? "simularAcerto(this)" : "simularErro(this)";
                
                const eCerto = texto.toLowerCase().includes("certo");
                const classeEstilo = eCerto ? "btn-certo" : "btn-errado";
                const caminhoSVG = eCerto ? "../../../SVG/thumbs_up.svg" : "../../../SVG/thumbs_down.svg";
                
                html += `
                    <button class="btn-opcao ${classeEstilo}" onclick="${fnClique}">
                        <span>${texto}</span>
                        <img src="${caminhoSVG}" alt="" class="icon-resposta-svg">
                    </button>
                `;
            });
            html += `</div>`;
            break;

        case 'opcoes-texto':
        case 'padrao':
        case 'categoria':
        default:
            const paletaCores = ['cor-azul', 'cor-amarelo', 'cor-roxo', 'cor-rosa'];
            const coresSorteadas = baralharArray([...paletaCores]);
            
            html += `<div class="opcoes-container" id="opcoes-container">`;
            baralharArray([...ronda.opcoes]).forEach((opcao, index) => {
                const fnClique = (opcao === ronda.correta) ? "simularAcerto(this)" : "simularErro(this)";
                const classeCor = coresSorteadas[index % coresSorteadas.length];
                html += `
                    <button class="btn-opcao ${classeCor}" onclick="${fnClique}">
                        ${opcao}
                    </button>
                `;
            });
            html += `</div>`;
            break;
    }

    gameArea.innerHTML = html;
    atualizarPlacar();
    mostrarMascote(true);
    animarMascote('normal');
}