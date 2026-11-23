/* ==========================================
   SVGs GLOBAIS
   ========================================== */
const SVG_HOME = `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" style="margin-right:4px; vertical-align:middle;">
<path d="M3 9.5L12 3l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" fill="#fff" stroke="#d35400" stroke-width="2"/>
<rect x="10" y="12" width="4" height="10" fill="#e74c3c" stroke="#c0392b" stroke-width="2"/>
</svg> Menu`;

const SVG_STAR = `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" fill="#f1c40f" stroke="#f39c12" stroke-width="1" style="margin-right:5px; vertical-align:middle;">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>`;

const SVG_BULB = `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px; vertical-align:middle;">
<path d="M9 18h6"></path><path d="M10 22h4"></path>
<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path>
</svg>`;

const SVG_ERRO = `<svg viewBox="0 0 14 14" width="0.8em" height="0.8em" style="margin-right:5px; vertical-align:middle;">
<path d="M2 2 L12 12 M12 2 L2 12" stroke="var(--cor-pt,#ff4757)" stroke-width="3" stroke-linecap="round"/>
</svg>`;

/* ==========================================
   ESTADO GLOBAL DO JOGO
   ========================================== */
let erradas = 0;
let desafioAtual = 0;
let totalDesafiosNivel = 5;
let nivelAtualId = 1;
let nivelAtualTitulo = "";
let rondasParaDica = 0;
let rondasSorteadas = [];
let timerImpaciencia = null;
let vozAtual = null;
let caminhoVozAtual = "";
let historicoPerguntas = {};

/* Estado específico da dinâmica ORDENAR */
let ordemEsperadaOrdenar = [];
let passoAtualOrdenar = 0;

function getCooldownDica() {
    if (typeof CONFIG_JOGO !== 'undefined' && typeof CONFIG_JOGO.cooldownDica === 'number') {
        return CONFIG_JOGO.cooldownDica;
    }
    return 3;
}

/* ==========================================
   ARRANQUE E CONFIGURAÇÃO VISUAL
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const ano = document.getElementById('ano-atual');
    if (ano) ano.textContent = new Date().getFullYear();

    injetarEstilosOrdenar();
    aplicarTemaVisual();
    gerarMenuInicial();

    const btnHome = document.getElementById('btn-home-svg');
    const badgeRonda = document.getElementById('badge-ronda-svg');
    const btnDica = document.getElementById('btn-dica');
    const iconeErro = document.getElementById('icone-erro-svg');

    if (btnHome) btnHome.innerHTML = SVG_HOME;
    if (badgeRonda) badgeRonda.innerHTML = SVG_STAR;
    if (btnDica) btnDica.innerHTML = SVG_BULB + ' Dica';
    if (iconeErro) iconeErro.innerHTML = SVG_ERRO;
});

function injetarEstilosOrdenar() {
    if (document.getElementById('estilos-dinamica-ordenar')) return;
    const style = document.createElement('style');
    style.id = 'estilos-dinamica-ordenar';
    style.textContent = `
        .ordenar-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 14px;
            width: 100%;
            max-width: 840px;
            margin: 0 auto;
        }
        .ordenar-slots-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            width: 100%;
        }
        .ordenar-slot {
            position: relative;
            min-height: 92px;
            background: #f8fafc;
            border: 3px dashed #cbd5e1;
            border-radius: 16px;
            padding: 14px 10px 10px 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 6px;
            transition: all 0.25s ease;
        }
        .ordenar-slot.slot-ativo {
            background: #fffde7;
            border-color: var(--cor-btn-amarelo);
            box-shadow: 0 0 0 3px rgba(251, 197, 49, 0.25);
        }
        .ordenar-slot.slot-preenchido {
            background: #f0fdf4;
            border: 3px solid var(--cor-sucesso);
            box-shadow: 0 4px 10px rgba(46, 213, 115, 0.18);
            animation: popLacuna 0.3s ease;
        }
        .ordenar-slot.sucesso-vibrante {
            background-color: var(--cor-sucesso) !important;
            border-color: var(--cor-sucesso-dark) !important;
            color: #ffffff !important;
        }
        .ordenar-slot.sucesso-vibrante .ordenar-slot-texto {
            color: #ffffff !important;
        }
        .ordenar-numero-badge {
            position: absolute;
            top: -12px;
            left: 12px;
            background: var(--azul-escuro);
            color: #ffffff;
            font-size: 0.8rem;
            font-weight: 900;
            padding: 2px 10px;
            border-radius: 12px;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }
        .ordenar-slot.slot-ativo .ordenar-numero-badge {
            background: var(--cor-btn-amarelo-sombra);
        }
        .ordenar-slot.slot-preenchido .ordenar-numero-badge {
            background: var(--cor-sucesso-dark);
        }
        .ordenar-slot-placeholder {
            font-size: 0.85rem;
            font-weight: 700;
            color: #94a3b8;
        }
        .ordenar-slot.slot-ativo .ordenar-slot-placeholder {
            color: #b45309;
        }
        .ordenar-slot img {
            width: 100%;
            max-height: clamp(58px, 10vh, 85px);
            aspect-ratio: 16 / 9;
            object-fit: cover;
            border-radius: 8px;
        }
        .ordenar-slot-texto {
            font-size: 0.85rem;
            font-weight: 800;
            color: var(--azul-escuro);
            line-height: 1.2;
        }
        .ordenar-opcoes-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            width: 100%;
        }
        .btn-opcao-ordenar {
            position: relative;
            background: #ffffff;
            border: 3px solid #e0e0e0;
            border-radius: 14px;
            padding: 6px 6px 10px 6px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 6px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, opacity 0.25s ease;
            width: 100%;
        }
        .btn-opcao-ordenar img {
            width: 100%;
            max-height: clamp(72px, 13vh, 110px);
            aspect-ratio: 16 / 9;
            object-fit: cover;
            border-radius: 10px;
            display: block;
        }
        .btn-opcao-ordenar.ratio-4-3 img {
            aspect-ratio: 4 / 3;
        }
        .ordenar-card-texto {
            font-size: 0.85rem;
            font-weight: 800;
            color: var(--azul-escuro);
            line-height: 1.2;
            padding: 0 4px;
        }
        @media (hover: hover) {
            .btn-opcao-ordenar:hover:not(.btn-disabled) {
                transform: translateY(-3px) scale(1.02);
                border-color: var(--cor-tema-dark);
                box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
            }
        }
        .btn-opcao-ordenar.erro-vibrante {
            animation: shakeError 0.4s ease;
            border-color: var(--cor-erro) !important;
            background-color: #ffefef !important;
        }
        .btn-opcao-ordenar.dica-highlight-ativa {
            border-color: var(--cor-sucesso) !important;
            z-index: 5;
            animation: pulsoDicaHighlight 1.3s infinite ease-in-out;
        }
        @media (max-width: 600px) and (orientation: portrait) {
            .ordenar-slots-container,
            .ordenar-opcoes-grid {
                grid-template-columns: 1fr;
                max-width: 290px;
                margin: 0 auto;
            }
            .btn-opcao-ordenar img {
                max-height: none;
            }
        }
    `;
    document.head.appendChild(style);
}

function aplicarTemaVisual() {
    if (typeof CONFIG_JOGO === 'undefined' || !CONFIG_JOGO.tema) return;

    const root = document.documentElement;
    if (CONFIG_JOGO.tema.corPrimaria) {
        root.style.setProperty('--cor-tema', CONFIG_JOGO.tema.corPrimaria);
        root.style.setProperty('--cor-em', CONFIG_JOGO.tema.corPrimaria);
    }
    if (CONFIG_JOGO.tema.corSecundaria) {
        root.style.setProperty('--cor-tema-dark', CONFIG_JOGO.tema.corSecundaria);
        root.style.setProperty('--cor-em-dark', CONFIG_JOGO.tema.corSecundaria);
    }
    if (CONFIG_JOGO.tema.corAno) {
        root.style.setProperty('--cor-ano', CONFIG_JOGO.tema.corAno);
    }
    if (CONFIG_JOGO.tema.corAnoDark) {
        root.style.setProperty('--cor-ano-dark', CONFIG_JOGO.tema.corAnoDark);
    }
    if (CONFIG_JOGO.tema.bgHeader) {
        root.style.setProperty('--bg-header', CONFIG_JOGO.tema.bgHeader);
    }

    const subtitulo = document.getElementById('subtitulo-header');
    if (subtitulo && CONFIG_JOGO.subtituloMenu) {
        subtitulo.textContent = CONFIG_JOGO.subtituloMenu;
    }
}

function gerarMenuInicial() {
    const grid = document.querySelector('.grid-niveis');
    if (!grid || typeof CONFIG_JOGO === 'undefined' || !CONFIG_JOGO.niveis) return;

    let htmlMenu = '';

    CONFIG_JOGO.niveis.forEach(nivel => {
        htmlMenu += `
            <button class="btn-nivel-novo ${nivel.corClasse}" onclick="iniciarJogo(${nivel.id})">
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

/* ==========================================
   NAVEGAÇÃO, MODAIS E FULLSCREEN
   ========================================== */
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

function mostrarEcra(id) {
    document.querySelectorAll('.ecra').forEach(e => e.style.display = 'none');
    const alvo = document.getElementById(id);
    if (alvo) alvo.style.display = 'flex';
}

function showToast(msg, isError = false) {
    const toast = document.getElementById('toast-msg');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.borderColor = isError ? "var(--cor-erro)" : "#fbc531";
    toast.style.color = isError ? "var(--cor-erro)" : "#b18500";
    toast.style.backgroundColor = isError ? "#ffefef" : "#fff9c4";
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}

function abrirImagemModal(src) {
    const modal = document.getElementById('modal-imagem');
    const imgModal = document.getElementById('img-modal-expandida');
    if (modal && imgModal) {
        imgModal.src = src;
        modal.classList.add('active');
    }
}

function fecharImagemModal() {
    const modal = document.getElementById('modal-imagem');
    if (modal) modal.classList.remove('active');
}

function toggleFullscreen() {
    const elem = document.getElementById('cartao-jogo');
    if (!elem) return;

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

function atualizarIconesFullscreen() {
    const emFullscreen = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
    const iconEnter = document.getElementById('icon-fs-enter');
    const iconExit = document.getElementById('icon-fs-exit');
    if (iconEnter) iconEnter.style.display = emFullscreen ? 'none' : 'block';
    if (iconExit) iconExit.style.display = emFullscreen ? 'block' : 'none';
}

document.addEventListener('fullscreenchange', atualizarIconesFullscreen);
document.addEventListener('webkitfullscreenchange', atualizarIconesFullscreen);

/* ==========================================
   UTILITÁRIOS E FLUXO DO JOGO
   ========================================== */
function baralharArray(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function iniciarJogo(idNivel = 1) {
    if (typeof CONFIG_JOGO === 'undefined' || !CONFIG_JOGO.niveis) return;

    erradas = 0;
    desafioAtual = 0;
    rondasParaDica = 0;

    const nivelDados = CONFIG_JOGO.niveis.find(n => n.id === idNivel) || CONFIG_JOGO.niveis[0];
    nivelAtualId = nivelDados.id;
    nivelAtualTitulo = nivelDados.titulo || "";
    const numQuestoes = nivelDados.numQuestoes || 10;

    let poolPerguntas = [];
    if (nivelDados.misturarModos) {
        CONFIG_JOGO.niveis.forEach(n => {
            if (n.perguntas && !n.misturarModos) {
                poolPerguntas.push(...n.perguntas);
            }
        });
    } else {
        poolPerguntas = nivelDados.perguntas || [];
    }

    totalDesafiosNivel = Math.min(numQuestoes, poolPerguntas.length);

    const subtitulo = document.getElementById('subtitulo-header');
    if (subtitulo && nivelAtualTitulo !== "") {
        subtitulo.textContent = nivelAtualTitulo;
    }

    // Histórico de perguntas inéditas por nível
    if (!historicoPerguntas[nivelAtualId]) {
        historicoPerguntas[nivelAtualId] = [];
    }

    let perguntasDisponiveis = poolPerguntas.filter(
        p => !historicoPerguntas[nivelAtualId].includes(p.id)
    );

    if (perguntasDisponiveis.length >= totalDesafiosNivel) {
        rondasSorteadas = baralharArray(perguntasDisponiveis).slice(0, totalDesafiosNivel);
    } else {
        const restantesIneditas = baralharArray(perguntasDisponiveis);
        historicoPerguntas[nivelAtualId] = [];

        const idsJaEscolhidos = new Set(restantesIneditas.map(p => p.id));
        const complemento = baralharArray(
            poolPerguntas.filter(p => !idsJaEscolhidos.has(p.id))
        ).slice(0, totalDesafiosNivel - restantesIneditas.length);

        rondasSorteadas = [...restantesIneditas, ...complemento];
    }

    historicoPerguntas[nivelAtualId].push(...rondasSorteadas.map(p => p.id));

    // Atualiza subtítulo do botão "Jogar de Novo"
    const subtituloJogarNovo = document.querySelector('.botoes-acao-container .btn-acao.primario .btn-subtitulo');
    if (subtituloJogarNovo) {
        const restantesParaProxima = poolPerguntas.length - historicoPerguntas[nivelAtualId].length;
        if (restantesParaProxima >= totalDesafiosNivel) {
            subtituloJogarNovo.textContent = "(questões diferentes)";
            subtituloJogarNovo.style.display = "";
        } else {
            subtituloJogarNovo.style.display = "none";
        }
    }

    limparConfetis();
    atualizarPlacar();
    atualizarBotaoDica();
    mostrarEcra('ecra-jogo');
    carregarRonda();
}

function carregarRonda() {
    pararVoz();
    resetTimerImpaciencia();

    const ronda = rondasSorteadas[desafioAtual];
    const gameArea = document.getElementById('game-area');
    if (!ronda || !gameArea) return;

    let html = '';

    // Botão de Áudio + Texto da Pergunta
    const btnAudioHTML = ronda.audio ? `
        <button type="button" class="btn-ouvir-pergunta" onclick="tocarVoz('${ronda.audio}')" title="Ouvir Pergunta">
            <img src="../../../SVG/audio.svg" alt="Ouvir" class="icon-audio">
        </button>` : '';

    const textoPerguntaFormatado = (ronda.tipo === 'texto' || ronda.tipo === 'lacuna')
        ? ronda.pergunta.replace(/_{3,}/g, '<span class="lacuna-slot" id="lacuna-slot">________</span>')
        : ronda.pergunta;

    html += `
        <div class="pergunta-container">
            ${btnAudioHTML}
            <div class="pergunta-texto">${textoPerguntaFormatado}</div>
        </div>
    `;

    // Imagem Central da Pergunta (16:9 por defeito; aceita proporcaoPergunta: "4:3" ou "auto")
    if (ronda.imagemPergunta) {
        const classeFramePergunta = ronda.proporcaoPergunta === '4:3' ? ' ratio-4-3' : '';
        const autoDetectPergunta = ronda.proporcaoPergunta === 'auto' ? ` onload="ajustarProporcaoPergunta(this)"` : '';

        html += `
            <div class="img-pergunta-frame${classeFramePergunta}">
                <img src="${ronda.imagemPergunta}" alt="Ilustração"${autoDetectPergunta} onclick="abrirImagemModal(this.src)" onerror="this.onerror=null; this.src='img/brincar_aprender.jpg';">
            </div>
        `;
    }

    // Renderização consoante o tipo de pergunta
    switch (ronda.tipo) {
        case 'ordenar': {
            passoAtualOrdenar = 0;
            ordemEsperadaOrdenar = ronda.correta
                ? ronda.correta.split('|').map(s => s.trim())
                : ronda.itens.map(i => i.texto.trim());

            // Garante que os cartões não aparecem já na ordem certa
            let itensBaralhados = baralharArray(ronda.itens);
            if (itensBaralhados.length > 1 && itensBaralhados.every((it, idx) => it.texto.trim() === ordemEsperadaOrdenar[idx])) {
                itensBaralhados.reverse();
            }

            const classeRatioCard = ronda.proporcao === '4:3' ? ' ratio-4-3' : '';

            html += `<div class="ordenar-wrapper">`;

            // 1. Contentores de destino (1.º, 2.º, 3.º)
            html += `<div class="ordenar-slots-container">`;
            ordemEsperadaOrdenar.forEach((_, idx) => {
                const classeAtivo = idx === 0 ? ' slot-ativo' : '';
                html += `
                    <div class="ordenar-slot${classeAtivo}" data-slot="${idx}">
                        <span class="ordenar-numero-badge">${idx + 1}.º</span>
                        <span class="ordenar-slot-placeholder">Toca no ${idx + 1}.º passo</span>
                    </div>
                `;
            });
            html += `</div>`;

            // 2. Cartões baralhados para clicar
            html += `<div class="ordenar-opcoes-grid">`;
            itensBaralhados.forEach(item => {
                const valorSeguro = item.texto.replace(/"/g, '&quot;');
                const imgSegura = item.img ? item.img.replace(/"/g, '&quot;') : '';
                const imgHTML = item.img
                    ? `<img src="${item.img}" alt="${valorSeguro}" onerror="this.src='img/brincar_aprender.jpg';">`
                    : '';

                html += `
                    <button type="button" class="btn-opcao-ordenar${classeRatioCard}" data-valor="${valorSeguro}" data-img="${imgSegura}" onclick="selecionarItemOrdenar(this)">
                        ${imgHTML}
                        <span class="ordenar-card-texto">${item.texto}</span>
                    </button>
                `;
            });
            html += `</div></div>`;
            break;
        }

        case 'opcoes-imagem':
        case 'situacao': {
            // 16:9 por defeito; aceita proporcao: "4:3" ou "auto"
            const classeRatioOpcoes = ronda.proporcao === '4:3' ? ' ratio-4-3' : '';
            html += `<div class="opcoes-grid-imagens${classeRatioOpcoes}">`;
            const opcoesGeradas = prepararOpcoesPergunta(ronda);
            const mostrarLegenda = ronda.mostrarLegenda !== false;

            opcoesGeradas.forEach(item => {
                const textoLegenda = item.valor || item.alt;
                const eCorreta = textoLegenda.trim().toLowerCase() === ronda.correta.trim().toLowerCase();
                const fnClique = eCorreta ? "simularAcerto(this)" : "simularErro(this)";
                const classeExtra = mostrarLegenda ? "" : " sem-legenda";
                const htmlLegenda = mostrarLegenda ? `<span class="pilula-legenda">${textoLegenda}</span>` : "";
                const valorSeguro = textoLegenda.replace(/"/g, '&quot;');
                const autoDetectOpcao = ronda.proporcao === 'auto' ? ` onload="ajustarProporcaoImagem(this)"` : '';

                html += `
                    <button class="btn-opcao-imagem${classeExtra}" data-valor="${valorSeguro}" onclick="${fnClique}">
                        <img src="${item.img}" alt="${item.alt}"${autoDetectOpcao} onerror="this.src='img/brincar_aprender.jpg';">
                        ${htmlLegenda}
                    </button>
                `;
            });
            html += `</div>`;
            break;
        }

        case 'dupla-opcao':
        case 'cidadania': {
            html += `<div class="opcoes-certo-errado">`;

            ronda.opcoes.forEach(opcao => {
                const texto = (typeof opcao === 'object') ? opcao.texto : opcao;
                const fnClique = (texto.trim().toLowerCase() === ronda.correta.trim().toLowerCase()) ? "simularAcerto(this)" : "simularErro(this)";

                const textoLower = texto.toLowerCase();
                const ePositivo = (textoLower.includes("certo") || textoLower.includes("seguro") || textoLower.includes("vantagem")) && !textoLower.includes("desvantagem");
                const classeEstilo = ePositivo ? "btn-certo" : "btn-errado";
                const caminhoSVG = ePositivo ? "../../../SVG/thumbs_up.svg" : "../../../SVG/thumbs_down.svg";

                html += `
                    <button class="btn-opcao ${classeEstilo}" onclick="${fnClique}">
                        <span>${texto}</span>
                        <img src="${caminhoSVG}" alt="" class="icon-resposta-svg">
                    </button>
                `;
            });
            html += `</div>`;
            break;
        }

        case 'texto':
        case 'lacuna': {
            const paletaCores = ['cor-azul', 'cor-amarelo', 'cor-roxo', 'cor-rosa'];
            const coresSorteadas = baralharArray(paletaCores);
            const opcoesLacuna = ronda.ordemFixa ? [...ronda.opcoes] : baralharArray(ronda.opcoes);

            html += `<div class="opcoes-container opcoes-lacuna" id="opcoes-container">`;
            opcoesLacuna.forEach((opcao, index) => {
                const eCorreta = opcao.trim().toLowerCase() === ronda.correta.trim().toLowerCase();
                const classeCor = coresSorteadas[index % coresSorteadas.length];
                const opcaoSegura = opcao.replace(/"/g, '&quot;');

                html += `
                    <button class="btn-opcao ${classeCor}" data-opcao="${opcaoSegura}" onclick="verificarLacuna(this, ${eCorreta})">
                        ${opcao}
                    </button>
                `;
            });
            html += `</div>`;
            break;
        }

        case 'opcoes-texto':
        case 'padrao':
        case 'categoria':
        default: {
            const paletaCores = ['cor-azul', 'cor-amarelo', 'cor-roxo', 'cor-rosa'];
            const coresSorteadas = baralharArray(paletaCores);
            const opcoesTexto = ronda.ordemFixa ? [...ronda.opcoes] : baralharArray(ronda.opcoes);

            html += `<div class="opcoes-container" id="opcoes-container">`;
            opcoesTexto.forEach((opcao, index) => {
                const fnClique = (opcao.trim().toLowerCase() === ronda.correta.trim().toLowerCase()) ? "simularAcerto(this)" : "simularErro(this)";
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
    }

    gameArea.innerHTML = html;
    atualizarPlacar();
    mostrarMascote(true);
    animarMascote('normal');
}

/* Lógica de validação passo a passo da dinâmica ORDENAR */
function selecionarItemOrdenar(btn) {
    if (btn.classList.contains('btn-disabled')) return;

    const valorEscolhido = btn.dataset.valor.trim().toLowerCase();
    const valorEsperado = (ordemEsperadaOrdenar[passoAtualOrdenar] || "").trim().toLowerCase();

    if (valorEscolhido !== valorEsperado) {
        simularErro(btn);
        return;
    }

    // Remove eventual destaque de dica no cartão
    btn.classList.remove('dica-highlight-ativa');
    btn.classList.add('btn-disabled');
    btn.style.opacity = '0.3';
    btn.style.pointerEvents = 'none';

    // Preenche o slot atual
    const slotAtual = document.querySelector(`.ordenar-slot[data-slot="${passoAtualOrdenar}"]`);
    if (slotAtual) {
        slotAtual.classList.remove('slot-ativo');
        slotAtual.classList.add('slot-preenchido');
        const imgHTML = btn.dataset.img
            ? `<img src="${btn.dataset.img}" alt="" onerror="this.src='img/brincar_aprender.jpg';">`
            : '';
        slotAtual.innerHTML = `
            <span class="ordenar-numero-badge">${passoAtualOrdenar + 1}.º</span>
            ${imgHTML}
            <span class="ordenar-slot-texto">${btn.dataset.valor}</span>
        `;
    }

    passoAtualOrdenar++;

    if (passoAtualOrdenar < ordemEsperadaOrdenar.length) {
        tocarSom('flip');
        const proximoSlot = document.querySelector(`.ordenar-slot[data-slot="${passoAtualOrdenar}"]`);
        if (proximoSlot) proximoSlot.classList.add('slot-ativo');
        resetTimerImpaciencia();
    } else {
        // Todos os passos ordenados com sucesso!
        simularAcerto(slotAtual || btn);
    }
}

/* Auto-deteção de proporção (muda de 16:9 para 4:3 se a imagem for mais alta/quadrada) */
function ajustarProporcaoImagem(img) {
    if (!img.naturalWidth || !img.naturalHeight) return;
    const ratio = img.naturalWidth / img.naturalHeight;
    const grid = img.closest('.opcoes-grid-imagens');
    if (grid && ratio < 1.55) {
        grid.classList.add('ratio-4-3');
    }
}

function ajustarProporcaoPergunta(img) {
    if (!img.naturalWidth || !img.naturalHeight) return;
    const ratio = img.naturalWidth / img.naturalHeight;
    const frame = img.closest('.img-pergunta-frame');
    if (frame && ratio < 1.55) {
        frame.classList.add('ratio-4-3');
    }
}

function verificarLacuna(botao, eCorreta) {
    const slot = document.getElementById('lacuna-slot');
    if (slot) {
        slot.textContent = botao.dataset.opcao;
        slot.classList.remove('lacuna-correta', 'lacuna-errada');
        slot.classList.add(eCorreta ? 'lacuna-correta' : 'lacuna-errada');
    }

    if (eCorreta) {
        simularAcerto(botao);
    } else {
        simularErro(botao);
    }
}

function prepararOpcoesPergunta(ronda) {
    if (ronda.opcoesImagem && ronda.opcoesImagem.length > 0) {
        return baralharArray(ronda.opcoesImagem);
    }

    if (typeof BANCO_RECURSOS === 'undefined') {
        console.error("ERRO: O ficheiro 'bancoRecursos.js' não foi carregado antes do engine.js!");
        return [];
    }

    const listaCategoria = BANCO_RECURSOS[ronda.categoriaDistratores];
    if (!listaCategoria) {
        console.error(`ERRO: A categoria "${ronda.categoriaDistratores}" não existe no BANCO_RECURSOS.`);
        return [];
    }

    const respostaCorretaLower = ronda.correta.trim().toLowerCase();

    const opcaoCorreta = listaCategoria.find(
        item => (item.valor || item.alt).trim().toLowerCase() === respostaCorretaLower
    );

    if (!opcaoCorreta) {
        console.error(`ERRO: A palavra correta "${ronda.correta}" não foi encontrada na categoria "${ronda.categoriaDistratores}" do BANCO_RECURSOS.`);
    }

    const possiveisDistratores = listaCategoria.filter(
        item => (item.valor || item.alt).trim().toLowerCase() !== respostaCorretaLower
    );

    const distratoresSorteados = baralharArray(possiveisDistratores).slice(0, 2);

    const opcoesFinais = opcaoCorreta
        ? [opcaoCorreta, ...distratoresSorteados]
        : distratoresSorteados;

    return baralharArray(opcoesFinais);
}

/* ==========================================
   VALIDAÇÃO DE RESPOSTAS E FIM DE JOGO
   ========================================== */
function simularAcerto(btn) {
    pararVoz();
    animarMascote('acerto');
    pararTimerImpaciencia();

    document.querySelectorAll('.btn-opcao, .btn-opcao-imagem, .btn-opcao-ordenar, .bloco-arrastar').forEach(b => {
        b.classList.add('btn-disabled');
        b.style.pointerEvents = 'none';
    });

    btn.classList.add('sucesso-vibrante');
    tocarSom('acerto');

    setTimeout(() => {
        btn.classList.remove('sucesso-vibrante');

        document.querySelectorAll('.btn-opcao, .btn-opcao-imagem, .btn-opcao-ordenar, .bloco-arrastar').forEach(b => {
            b.classList.remove('btn-disabled');
            b.style.pointerEvents = 'auto';
        });

        desafioAtual++;
        if (rondasParaDica > 0) rondasParaDica--;

        atualizarPlacar();
        atualizarBotaoDica();

        if (desafioAtual < totalDesafiosNivel) {
            carregarRonda();
        } else {
            finalizarJogo();
        }
    }, 1000);
}

function simularErro(btn) {
    animarMascote('erro');
    btn.classList.add('erro-vibrante');
    tocarSom('erro');
    erradas++;
    atualizarPlacar();
    setTimeout(() => btn.classList.remove('erro-vibrante'), 400);
    resetTimerImpaciencia();
}

function finalizarJogo() {
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) progressFill.style.width = '100%';

    setTimeout(() => {
        mostrarEcra('ecra-fim');
        const finalErros = document.getElementById('final-erros');
        if (finalErros) finalErros.textContent = erradas;
        tocarSom('vitoria');
        dispararConfetis();
    }, 500);
}

function reiniciarJogo() {
    iniciarJogo(nivelAtualId);
}

function voltarAoMenu() {
    pararVoz();
    pararTimerImpaciencia();
    mostrarMascote(false);

    const subtitulo = (typeof CONFIG_JOGO !== 'undefined')
        ? (CONFIG_JOGO.subtituloMenu || CONFIG_JOGO.subtitulo || "Escolhe um minijogo para começar!")
        : "Escolhe um minijogo para começar!";
    const headerSub = document.getElementById('subtitulo-header');
    if (headerSub) headerSub.textContent = subtitulo;

    limparConfetis();
    mostrarEcra('ecra-selecao');
}

function atualizarPlacar() {
    const perguntaAtual = Math.min(desafioAtual + 1, totalDesafiosNivel);
    const valErros = document.getElementById('val-erros');
    const valProgresso = document.getElementById('val-progresso');
    const valTotal = document.getElementById('val-total');
    const progressFill = document.getElementById('progress-fill');

    if (valErros) valErros.textContent = erradas;
    if (valProgresso) valProgresso.textContent = perguntaAtual;
    if (valTotal) valTotal.textContent = totalDesafiosNivel;

    if (progressFill && totalDesafiosNivel > 0) {
        const percentagem = (perguntaAtual / totalDesafiosNivel) * 100;
        progressFill.style.width = percentagem + '%';
    }
}

/* ==========================================
   SISTEMA DE DICAS
   ========================================== */
function resetTimerImpaciencia() {
    clearTimeout(timerImpaciencia);
    const btnDica = document.getElementById('btn-dica');
    if (btnDica) btnDica.classList.remove('dica-impaciente');

    timerImpaciencia = setTimeout(() => {
        if (rondasParaDica <= 0 && btnDica) {
            btnDica.classList.add('dica-impaciente');
        }
    }, 15000);
}

function pararTimerImpaciencia() {
    clearTimeout(timerImpaciencia);
    const btnDica = document.getElementById('btn-dica');
    if (btnDica) btnDica.classList.remove('dica-impaciente');
}

function atualizarBotaoDica() {
    const btn = document.getElementById('btn-dica');
    if (!btn) return;

    if (rondasParaDica <= 0) {
        btn.classList.remove('esgotada');
        btn.disabled = false;
        btn.innerHTML = SVG_BULB + ' Dica';
    } else {
        btn.classList.add('esgotada');
        btn.disabled = true;
        btn.innerHTML = `⏳ ${rondasParaDica}`;
    }
}

function usarDica() {
    if (rondasParaDica > 0) return;

    const ronda = rondasSorteadas[desafioAtual];
    if (!ronda || !ronda.dica) return;

    pararTimerImpaciencia();
    tocarSom('flip');

    let htmlDica = '';
    const textoDica = typeof ronda.dica === 'string'
        ? ronda.dica
        : (ronda.dica.texto || ronda.dica.mensagem || '');

    if (textoDica) {
        htmlDica += `<p>${textoDica}</p>`;
    }

    if (ronda.dica.imagem) {
        htmlDica += `
            <img
                src="${ronda.dica.imagem}"
                alt="Ilustração da dica"
                style="max-width:150px; margin-top:15px; border-radius:10px;"
            >
        `;
    }

    if (ronda.dica.tipo === 'highlight') {
        aplicarHighlightRespostaCorreta(ronda);
    } else if (ronda.dica.tipo === '50-50') {
        aplicarDica5050(ronda);
    }

    if (htmlDica.trim() !== '') {
        abrirModalDica(htmlDica);
    }

    rondasParaDica = getCooldownDica();
    atualizarBotaoDica();
}

function aplicarDica5050(ronda) {
    const botoes = Array.from(document.querySelectorAll('.btn-opcao, .btn-opcao-imagem, .btn-opcao-ordenar:not(.btn-disabled)'));
    const respostaCorreta = ronda.tipo === 'ordenar'
        ? (ordemEsperadaOrdenar[passoAtualOrdenar] || "").trim().toLowerCase()
        : ronda.correta.trim().toLowerCase();

    const botoesErrados = botoes.filter(btn => {
        const textoBtn = btn.textContent.trim().toLowerCase();
        const img = btn.querySelector('img');
        const altImg = img ? img.alt.trim().toLowerCase() : '';
        const dataValor = btn.dataset.valor ? btn.dataset.valor.trim().toLowerCase() : '';

        const isCorrect = (textoBtn === respostaCorreta) ||
            (altImg === respostaCorreta) ||
            (dataValor === respostaCorreta);

        return !isCorrect;
    });

    const qtdEliminar = ronda.tipo === 'ordenar' ? 1 : 2;
    baralharArray(botoesErrados).slice(0, qtdEliminar).forEach(btn => {
        btn.style.opacity = '0.25';
        btn.style.pointerEvents = 'none';
        btn.classList.add('btn-disabled');
    });
}

function aplicarHighlightRespostaCorreta(ronda) {
    const botoes = Array.from(document.querySelectorAll('.btn-opcao, .btn-opcao-imagem, .btn-opcao-ordenar:not(.btn-disabled)'));
    const respostaCorreta = ronda.tipo === 'ordenar'
        ? (ordemEsperadaOrdenar[passoAtualOrdenar] || "").trim().toLowerCase()
        : ronda.correta.trim().toLowerCase();

    const correspondenciaExata = botoes.filter(btn => {
        const textoBtn = btn.textContent.trim().toLowerCase();
        const img = btn.querySelector('img');
        const altImg = img ? img.alt.trim().toLowerCase() : '';
        const dataValor = btn.dataset.valor ? btn.dataset.valor.trim().toLowerCase() : '';

        return textoBtn === respostaCorreta || altImg === respostaCorreta || dataValor === respostaCorreta;
    });

    const alvos = correspondenciaExata.length > 0
        ? correspondenciaExata
        : botoes.filter(btn => btn.textContent.trim().toLowerCase().includes(respostaCorreta));

    alvos.forEach(btn => btn.classList.add('dica-highlight-ativa'));
}

function abrirModalDica(conteudoHTML) {
    const modal = document.getElementById('modal-ajuda');
    const conteudo = document.getElementById('modal-dica-conteudo');

    if (conteudo) conteudo.innerHTML = conteudoHTML;
    if (modal) modal.classList.add('active');
}

function fecharModalDica() {
    const modal = document.getElementById('modal-ajuda');
    if (modal) modal.classList.remove('active');
}

/* ==========================================
   MASCOTE
   ========================================== */
function animarMascote(estado) {
    const container = document.getElementById('mascote-feedback');
    if (!container) return;
    const imgNode = container.querySelector('img');

    container.classList.remove('mascote-normal', 'mascote-erro', 'mascote-sucesso');
    void container.offsetWidth;

    if (estado === 'normal') {
        if (imgNode) imgNode.src = "img/mascote_normal.png";
        container.classList.add('mascote-normal');
    } else if (estado === 'erro') {
        if (imgNode) imgNode.src = "img/mascote_erro.png";
        container.classList.add('mascote-erro');
        setTimeout(() => animarMascote('normal'), 700);
    } else if (estado === 'acerto' || estado === 'sucesso') {
        if (imgNode) imgNode.src = "img/mascote_acerto.png";
        container.classList.add('mascote-sucesso');

        setTimeout(() => {
            if (container.classList.contains('mascote-sucesso')) {
                container.classList.remove('mascote-sucesso');
                container.classList.add('mascote-normal');
            }
        }, 800);
    }
}

function mostrarMascote(visivel) {
    const container = document.getElementById('mascote-feedback');
    if (container) {
        container.style.display = visivel ? 'flex' : 'none';
    }
}

/* ==========================================
   SISTEMA DE SOM E VOZ
   ========================================== */
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function initAudio() {
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

document.addEventListener('click', initAudio, { once: true });
document.addEventListener('touchstart', initAudio, { once: true });

function tocarSom(tipo) {
    initAudio();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const agora = audioCtx.currentTime;

    if (tipo === 'flip') {
        osc.frequency.setValueAtTime(400, agora);
        osc.frequency.exponentialRampToValueAtTime(600, agora + 0.1);
        gain.gain.setValueAtTime(0.05, agora);
        osc.start(agora);
        osc.stop(agora + 0.1);
    } else if (tipo === 'acerto') {
        const notas = [783.99, 1046.50];

        notas.forEach((freq, i) => {
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.connect(g);
            g.connect(audioCtx.destination);

            o.type = 'sine';
            o.frequency.value = freq;

            g.gain.setValueAtTime(0, agora + i * 0.12);
            g.gain.linearRampToValueAtTime(0.1, agora + i * 0.12 + 0.02);
            g.gain.exponentialRampToValueAtTime(0.001, agora + i * 0.12 + 0.3);

            o.start(agora + i * 0.12);
            o.stop(agora + i * 0.12 + 0.3);
        });
    } else if (tipo === 'erro') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(250, agora);
        osc.frequency.exponentialRampToValueAtTime(100, agora + 0.3);
        gain.gain.setValueAtTime(0.1, agora);
        osc.start(agora);
        osc.stop(agora + 0.4);
    } else if (tipo === 'vitoria') {
        const melodia = [
            { freq: 523.25, tempo: 0.00, duracao: 0.15 },
            { freq: 659.25, tempo: 0.15, duracao: 0.15 },
            { freq: 783.99, tempo: 0.30, duracao: 0.20 },
            { freq: 659.25, tempo: 0.50, duracao: 0.15 },
            { freq: 1046.50, tempo: 0.65, duracao: 0.80 }
        ];

        melodia.forEach(nota => {
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.connect(g);
            g.connect(audioCtx.destination);

            o.type = 'triangle';
            o.frequency.value = nota.freq;

            g.gain.setValueAtTime(0, agora + nota.tempo);
            g.gain.linearRampToValueAtTime(0.1, agora + nota.tempo + 0.02);
            g.gain.exponentialRampToValueAtTime(0.001, agora + nota.tempo + nota.duracao);

            o.start(agora + nota.tempo);
            o.stop(agora + nota.tempo + nota.duracao);
        });
    }
}

function tocarVoz(caminhoMp3) {
    try {
        if (vozAtual) {
            const estavaATocarOMesmo = (caminhoVozAtual === caminhoMp3) && !vozAtual.paused;

            vozAtual.pause();
            vozAtual.currentTime = 0;
            vozAtual = null;
            caminhoVozAtual = "";

            if (estavaATocarOMesmo) return;
        }

        vozAtual = new Audio(caminhoMp3);
        caminhoVozAtual = caminhoMp3;

        vozAtual.onended = () => {
            vozAtual = null;
            caminhoVozAtual = "";
        };

        const playPromise = vozAtual.play();
        if (playPromise !== undefined) {
            playPromise.catch(erro => {
                console.warn("O browser bloqueou o MP3. A criança precisa de clicar primeiro no ecrã.", erro);
                vozAtual = null;
                caminhoVozAtual = "";
            });
        }
    } catch (e) {
        console.error("Browser demasiado antigo para HTML5 Audio.", e);
    }
}

function pararVoz() {
    if (vozAtual) {
        vozAtual.pause();
        vozAtual.currentTime = 0;
        vozAtual = null;
        caminhoVozAtual = "";
    }
}

/* ==========================================
   CONFETIS
   ========================================== */
function dispararConfetis() {
    const c = document.getElementById('confetti-container');
    if (!c) return;
    const cores = ['#ff4757', '#2ed573', '#0091ff', '#ffa502', '#9b59b6'];

    for (let i = 0; i < 150; i++) {
        const d = document.createElement('div');
        d.className = 'confetti';
        d.style.left = Math.random() * 100 + '%';
        d.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        const escala = Math.random() * 0.8 + 0.4;
        const duracao = Math.random() * 2 + 2.5;
        const atraso = Math.random() * 1.5;

        d.style.animationDuration = duracao + 's';
        d.style.animationDelay = atraso + 's';
        d.style.transform = `scale(${escala})`;

        c.appendChild(d);
        setTimeout(() => d.remove(), (duracao + atraso) * 1000);
    }
}

function limparConfetis() {
    const container = document.getElementById('confetti-container');
    if (container) container.innerHTML = '';
}