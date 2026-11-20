document.addEventListener("DOMContentLoaded", () => {
    // 0. Garante que todas as perguntas têm um ID único (evita repetições entre jogadas)
    garantirIdsPerguntas();

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

function garantirIdsPerguntas() {
    if (!CONFIG_JOGO || !Array.isArray(CONFIG_JOGO.niveis)) return;
    CONFIG_JOGO.niveis.forEach((nivel, nIdx) => {
        if (!Array.isArray(nivel.perguntas)) return;
        nivel.perguntas.forEach((pergunta, pIdx) => {
            if (pergunta.id === undefined || pergunta.id === null || pergunta.id === '') {
                pergunta.id = `n${nivel.id || (nIdx + 1)}_q${pIdx + 1}`;
            }
        });
    });
}

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

// Guarda os IDs das perguntas já jogadas em cada nível durante a sessão
let historicoPerguntas = {};

function iniciarJogo(numQuestoes = 10, tituloNivel = "", idNivel = 1) {
    garantirIdsPerguntas();

    erradas = 0;
    desafioAtual = 0;
    rondasParaDica = 0;

    nivelAtualId = idNivel;
    nivelAtualTitulo = tituloNivel;

    const nivelDados = CONFIG_JOGO.niveis.find(n => n.id === idNivel) || CONFIG_JOGO.niveis[0];
    let poolPerguntas = [];

    // Se o nível tiver a flag 'misturarModos: true', junta automaticamente as perguntas de todos os outros níveis
    if (nivelDados.misturarModos) {
        CONFIG_JOGO.niveis.forEach(n => {
            if (n.perguntas && !n.misturarModos) {
                poolPerguntas.push(...n.perguntas);
            }
        });
    } else {
        poolPerguntas = nivelDados ? (nivelDados.perguntas || []) : [];
    }
    
    totalDesafiosNivel = Math.min(numQuestoes, poolPerguntas.length);

    const subtitulo = document.getElementById('subtitulo-header');
    if (subtitulo && tituloNivel !== "") {
        subtitulo.textContent = tituloNivel;
    }

    // 1. Garante que existe uma lista de histórico para este nível específico
    if (!historicoPerguntas[idNivel]) {
        historicoPerguntas[idNivel] = [];
    }

    // 2. Retira do baralho as perguntas cujos IDs já foram jogados
    let perguntasDisponiveis = poolPerguntas.filter(
        p => !historicoPerguntas[idNivel].includes(p.id)
    );

    // 3. Sorteia as perguntas (aproveitando eventuais inéditas restantes antes de renovar o baralho)
    if (perguntasDisponiveis.length >= totalDesafiosNivel) {
        rondasSorteadas = baralharArray([...perguntasDisponiveis]).slice(0, totalDesafiosNivel);
    } else {
        const restantesIneditas = baralharArray([...perguntasDisponiveis]);
        historicoPerguntas[idNivel] = [];

        const idsJaEscolhidos = new Set(restantesIneditas.map(p => p.id));
        const complemento = baralharArray(
            poolPerguntas.filter(p => !idsJaEscolhidos.has(p.id))
        ).slice(0, totalDesafiosNivel - restantesIneditas.length);

        rondasSorteadas = [...restantesIneditas, ...complemento];
    }

    // 4. Guarda os IDs desta ronda no histórico
    historicoPerguntas[idNivel].push(...rondasSorteadas.map(p => p.id));

    // 5. Atualiza o subtítulo do botão "JOGAR DE NOVO" consoante as questões inéditas que sobram
    const subtituloJogarNovo = document.querySelector('.botoes-acao-container .btn-acao.primario .btn-subtitulo');
    if (subtituloJogarNovo) {
        const restantesParaProxima = poolPerguntas.length - historicoPerguntas[idNivel].length;
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


/* === GERADOR SVG: ÁBACO VERTICAL (C - D - U) === */
function renderizarAbaco(valores, emOpcao = false) {
    let c = 0, d = 0, u = 0;
    if (Array.isArray(valores)) {
        [c = 0, d = 0, u = 0] = valores;
    } else if (typeof valores === 'number') {
        c = Math.floor(valores / 100) % 10;
        d = Math.floor(valores / 10) % 10;
        u = valores % 10;
    }

    const largura = emOpcao ? 185 : 220;
    const altura = emOpcao ? 128 : 152;

    const colunas = [
        { letra: 'C', qtd: c, x: 45,  cor: '#10b981', borda: '#047857' },
        { letra: 'D', qtd: d, x: 105, cor: '#ef4444', borda: '#b91c1c' },
        { letra: 'U', qtd: u, x: 165, cor: '#3b82f6', borda: '#1d4ed8' }
    ];

    let hastesSVG = '';
    let argolasSVG = '';
    let etiquetasSVG = '';

    colunas.forEach(col => {
        hastesSVG += `
            <rect x="${col.x - 3}" y="14" width="6" height="96" rx="3" fill="#cbd5e1"/>
        `;

        const totalArgolas = Math.min(9, Math.max(0, col.qtd));
        for (let i = 0; i < totalArgolas; i++) {
            const yArgola = 100 - (i * 9.5);
            argolasSVG += `
                <rect x="${col.x - 16}" y="${yArgola}" width="32" height="8" rx="4"
                      fill="${col.cor}" stroke="${col.borda}" stroke-width="1.5"/>
            `;
        }

        // Etiquetas desenhadas POR CIMA da base de madeira
        etiquetasSVG += `
            <rect x="${col.x - 13}" y="114" width="26" height="22" rx="6" fill="#ffffff" stroke="${col.borda}" stroke-width="1.5"/>
            <text x="${col.x}" y="130" text-anchor="middle" font-size="14" font-weight="900" fill="${col.borda}" font-family="sans-serif">${col.letra}</text>
        `;
    });

    return `
        <svg width="${largura}" height="${altura}" viewBox="0 0 210 144" class="svg-recurso-num" aria-label="Ábaco: ${c} centenas, ${d} dezenas e ${u} unidades">
            ${hastesSVG}
            <rect x="12" y="109" width="186" height="32" rx="8" fill="#fde68a" stroke="#d97706" stroke-width="2.5"/>
            ${argolasSVG}
            ${etiquetasSVG}
        </svg>
    `;
}

/* === GERADOR SVG: MATERIAL MULTIBÁSICO (MAB) === */
function renderizarMAB(valores, emOpcao = false) {
    let c = 0, d = 0, u = 0;
    if (Array.isArray(valores)) {
        [c = 0, d = 0, u = 0] = valores;
    } else if (typeof valores === 'number') {
        c = Math.floor(valores / 100) % 10;
        d = Math.floor(valores / 10) % 10;
        u = valores % 10;
    }

    let xCursor = 8;
    let pecasSVG = '';

    // 1. Placas de 100 (Centenas - Verde) com maior separação visual
    const numC = Math.min(9, Math.max(0, c));
    for (let i = 0; i < numC; i++) {
        const px = xCursor + (i * 13);
        const py = 10 + (i * 4.5);
        pecasSVG += `
            <g transform="translate(${px}, ${py})">
                <rect width="56" height="56" rx="4" fill="#10b981" stroke="#047857" stroke-width="2"/>
                <path d="M11 0v56M22 0v56M33 0v56M44 0v56M0 11h56M0 22h56M0 33h56M0 44h56" stroke="#a7f3d0" stroke-width="0.9" opacity="0.75"/>
            </g>
        `;
    }
    if (numC > 0) xCursor += 64 + ((numC - 1) * 13);

    // 2. Barras de 10 (Dezenas - Vermelho) mais espaçadas entre si
    const numD = Math.min(9, Math.max(0, d));
    for (let i = 0; i < numD; i++) {
        const px = xCursor + (i * 16);
        pecasSVG += `
            <g transform="translate(${px}, 16)">
                <rect width="10" height="70" rx="2.5" fill="#ef4444" stroke="#b91c1c" stroke-width="1.6"/>
                <path d="M0 14h10M0 28h10M0 42h10M0 56h10" stroke="#fecaca" stroke-width="1"/>
            </g>
        `;
    }
    if (numD > 0) xCursor += (numD * 16) + 8;

    // 3. Cubinhos de 1 (Unidades - Azul)
    const numU = Math.min(9, Math.max(0, u));
    for (let i = 0; i < numU; i++) {
        const col = Math.floor(i / 5);
        const row = i % 5;
        const px = xCursor + (col * 16);
        const py = 74 - (row * 14.5);
        pecasSVG += `
            <rect x="${px}" y="${py}" width="11.5" height="11.5" rx="2.5" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.6"/>
        `;
    }
    if (numU > 0) xCursor += (Math.ceil(numU / 5) * 16) + 6;

    const larguraTotal = Math.max(96, xCursor);
    const escala = emOpcao ? 0.86 : 1.05;

    return `
        <svg width="${Math.round(larguraTotal * escala)}" height="${Math.round(98 * escala)}" viewBox="0 0 ${larguraTotal} 98" class="svg-recurso-num" aria-label="Material Multibásico: ${c} centenas, ${d} dezenas e ${u} unidades">
            ${pecasSVG}
        </svg>
    `;
}

/* === MODAL DE AMPLIAÇÃO DO ÁBACO E MATERIAL MULTIBÁSICO === */
function abrirModalRecurso(containerEl) {
    const svgOriginal = containerEl ? containerEl.querySelector('svg.svg-recurso-num') : null;
    if (!svgOriginal) return;

    let overlay = document.getElementById('modal-recurso-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'modal-recurso-overlay';
        overlay.className = 'modal-imagem-overlay';
        overlay.onclick = (e) => {
            if (e.target === overlay || e.target.closest('.btn-fechar-modal-recurso')) {
                fecharModalRecurso();
            }
        };
        document.body.appendChild(overlay);
    }

    const svgAmpliado = svgOriginal.cloneNode(true);
    svgAmpliado.removeAttribute('width');
    svgAmpliado.removeAttribute('height');
    svgAmpliado.classList.add('svg-recurso-ampliado');

    overlay.innerHTML = `
        <div class="modal-recurso-box" onclick="event.stopPropagation()">
            <button type="button" class="btn-fechar-modal-recurso" onclick="fecharModalRecurso()" title="Fechar">✕</button>
        </div>
    `;
    overlay.querySelector('.modal-recurso-box').appendChild(svgAmpliado);
    overlay.style.display = 'flex';
}





function fecharModalRecurso() {
    const overlay = document.getElementById('modal-recurso-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModalRecurso();
});

function carregarRonda() {
    construtorBloqueado = false;
    pararVoz();
    resetTimerImpaciencia();
    
    const ronda = rondasSorteadas[desafioAtual];
    const gameArea = document.getElementById('game-area');
    if (!ronda || !gameArea) return;

    let html = '';

    // Frase informativa opcional acima do título da pergunta
    let infoSuperiorHTML = '';
    if (ronda.infoDivisao) {
        const textoInfo = (typeof ronda.infoDivisao === 'string')
            ? ronda.infoDivisao
            : (typeof CONFIG_JOGO !== 'undefined' && CONFIG_JOGO.textoInfoDivisao) ? CONFIG_JOGO.textoInfoDivisao : '';
        if (textoInfo) {
            infoSuperiorHTML = `<div class="info-pergunta-superior">${textoInfo}</div>`;
        }
    }

    // Áudio ao lado do texto (só aparece aqui se NÃO houver imagem central)
    let btnAudioHTML = (ronda.audio && !ronda.imagemPergunta) ? `
        <button type="button" class="btn-ouvir-pergunta" onclick="tocarVoz('${ronda.audio}')" title="Ouvir">
            <img src="../../../SVG/audio.svg" alt="Ouvir" class="icon-audio">
        </button>` : '';

    // Se for tipo "texto" (lacuna), transforma ________ num espaço preenchível ao vivo
    const textoPerguntaFormatado = (ronda.tipo === 'texto' || ronda.tipo === 'lacuna')
        ? ronda.pergunta.replace(/_{3,}/g, '<span class="lacuna-slot" id="lacuna-slot">________</span>')
        : ronda.pergunta;

    html += `
        ${infoSuperiorHTML}
        <div class="pergunta-container">
            ${btnAudioHTML}
            <div class="pergunta-texto">${textoPerguntaFormatado}</div>
        </div>
    `;

    // Imagem Central, Ábaco, Material Multibásico e/ou Dinheiro
    const temRecursoVisual = Boolean(ronda.dinheiro || ronda.abaco || ronda.mab);
    if (ronda.imagemPergunta || temRecursoVisual) {
        const temAmbos = Boolean(ronda.imagemPergunta && temRecursoVisual);
        const classePlural = (ronda.plural || temAmbos) ? ' frame-plural' : '';
        const classeDinheiro = (!ronda.imagemPergunta && temRecursoVisual) ? ' frame-dinheiro' : '';

        let conteudoFrame = '';

        if (ronda.imagemPergunta) {
            const classeImg1 = (ronda.plural && ronda.espelhar === 'primeira') ? ' class="img-espelho"' : '';
            const classeImg2 = (ronda.espelhar !== false && ronda.espelhar !== 'primeira') ? ' class="img-espelho"' : '';
            const segundaImg = ronda.plural
                ? `<img src="${ronda.imagemPergunta}" alt=""${classeImg2} onclick="abrirImagemModal(this.src)" onerror="this.style.display='none';">`
                : '';

            conteudoFrame += `
                <img src="${ronda.imagemPergunta}" alt="Ilustração"${classeImg1} onclick="abrirImagemModal(this.src)" onerror="this.onerror=null; this.src='img/brincar_aprender.jpg';">
                ${segundaImg}
            `;
        }

        if (ronda.abaco && typeof renderizarAbaco === 'function') {
            conteudoFrame += renderizarAbaco(ronda.abaco, false);
        }

        if (ronda.mab && typeof renderizarMAB === 'function') {
            conteudoFrame += renderizarMAB(ronda.mab, false);
        }

        if (ronda.dinheiro && typeof renderizarDinheiro === 'function') {
            conteudoFrame += renderizarDinheiro(ronda.dinheiro, false);
        }

        let btnAudioFrameHTML = (ronda.audio && ronda.imagemPergunta) ? `
            <button type="button" class="btn-ouvir-pergunta btn-ouvir-frame" onclick="tocarVoz('${ronda.audio}')" title="Ouvir">
                <img src="../../../SVG/audio.svg" alt="Ouvir" class="icon-audio">
            </button>` : '';

        const temZoomSVG = Boolean(!ronda.imagemPergunta && (ronda.abaco || ronda.mab));
        const atributoZoom = temZoomSVG ? ` onclick="abrirModalRecurso(this)" title="Clica para ampliar"` : '';
        const badgeZoomHTML = temZoomSVG ? `<span class="badge-zoom-recurso" aria-hidden="true">🔍</span>` : '';

        html += `
            <div class="img-pergunta-frame${classePlural}${classeDinheiro}"${atributoZoom}>
                ${conteudoFrame}
                ${badgeZoomHTML}
                ${btnAudioFrameHTML}
            </div>
        `;
    }

    // RENDERIZAÇÃO DE ACORDO COM O TIPO DE UI
    switch (ronda.tipo) {
        
        case 'opcoes-imagem':
        case 'situacao': {
            const opcoesGeradas = prepararOpcoesPergunta(ronda);
            let classeGrid = "";
            if (opcoesGeradas.length === 4) {
                classeGrid = " grid-2x2";
            } else if (opcoesGeradas.length === 2) {
                classeGrid = " grid-2-opcoes";
            }

            html += `<div class="opcoes-grid-imagens${classeGrid}">`;
            const mostrarLegenda = ronda.mostrarLegenda !== false;
            const usarAltNaLegenda = ronda.legendaAlt === true || (typeof CONFIG_JOGO !== 'undefined' && CONFIG_JOGO.legendaAlt === true);
            
            opcoesGeradas.forEach(item => {
                const valorValidacao = (item.valor || item.alt || '').trim().toLowerCase();
                const valorSeguro = valorValidacao.replace(/"/g, '&quot;');
                const eCorreta = valorValidacao === ronda.correta.trim().toLowerCase();
                const textoLegenda = usarAltNaLegenda ? (item.alt || item.valor || '') : (item.valor || item.alt || '');
                const fnClique = eCorreta ? "simularAcerto(this)" : "simularErro(this)";
                const classeExtra = mostrarLegenda ? "" : " sem-legenda";
                const htmlLegenda = mostrarLegenda ? `<span class="pilula-legenda">${textoLegenda}</span>` : "";

                let htmlImagem = '';
                if (item.abaco && typeof renderizarAbaco === 'function') {
                    htmlImagem = renderizarAbaco(item.abaco, true);
                } else if (item.mab && typeof renderizarMAB === 'function') {
                    htmlImagem = renderizarMAB(item.mab, true);
                } else if (item.dinheiro && typeof renderizarDinheiro === 'function') {
                    htmlImagem = renderizarDinheiro(item.dinheiro, true);
                } else if (item.plural) {
                    const classeImg1 = (item.espelhar === 'primeira') ? ' img-espelho' : '';
                    const classeImg2 = (item.espelhar !== false && item.espelhar !== 'primeira') ? ' img-espelho' : '';
                    htmlImagem = `
                        <div class="imgs-wrapper-dupla">
                            <img src="${item.img}" alt="${item.alt || ''}" class="frame-4-3${classeImg1}" onerror="this.src='img/brincar_aprender.jpg';">
                            <img src="${item.img}" alt="" class="frame-4-3${classeImg2}" onerror="this.style.display='none';">
                        </div>
                    `;
                } else {
                    const isSVG = typeof item.img === 'string' && item.img.toLowerCase().endsWith('.svg');
                    const classeImg = isSVG ? 'img-cartao-svg' : 'frame-4-3';
                    htmlImagem = `<img src="${item.img}" alt="${item.alt || ''}" class="${classeImg}">`;
                }

                const temZoomOpcao = Boolean(item.abaco || item.mab);
                const btnZoomOpcao = temZoomOpcao
                    ? `<span class="badge-zoom-opcao" role="button" tabindex="0" title="Ampliar" onclick="event.stopPropagation(); abrirModalRecurso(this.parentElement)">🔍</span>`
                    : '';

                html += `
                    <button class="btn-opcao-imagem${classeExtra}" data-correta="${eCorreta}" data-valor="${valorSeguro}" onclick="${fnClique}">
                        ${btnZoomOpcao}
                        ${htmlImagem}
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
                const eCorreta = texto.trim().toLowerCase() === ronda.correta.trim().toLowerCase();
                const fnClique = eCorreta ? "simularAcerto(this)" : "simularErro(this)";
                
                const textoLower = texto.toLowerCase();
                const ePositivo = (textoLower.includes("certo") || textoLower.includes("seguro") || textoLower.includes("vantagem")) && !textoLower.includes("desvantagem");
                const classeEstilo = ePositivo ? "btn-certo" : "btn-errado";
                const caminhoSVG = ePositivo ? "../../../SVG/thumbs_up.svg" : "../../../SVG/thumbs_down.svg";
                
                html += `
                    <button class="btn-opcao ${classeEstilo}" data-correta="${eCorreta}" onclick="${fnClique}">
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
            const coresSorteadas = baralharArray([...paletaCores]);
            const opcoesLacuna = ronda.ordemFixa ? [...ronda.opcoes] : baralharArray([...ronda.opcoes]);
            const eGrelhaCurta = opcoesLacuna.length === 4 && opcoesLacuna.every(op => op.replace(/<[^>]*>/g, '').trim().length <= 14);
            const eBotaoCurto = opcoesLacuna.length <= 3 && opcoesLacuna.every(op => op.replace(/<[^>]*>/g, '').trim().length <= 4);

            const classeGridMobile = eGrelhaCurta ? ' grid-2x2-mobile' : '';
            const classeBotaoCurto = eBotaoCurto ? ' botoes-curtos' : '';

            html += `<div class="opcoes-container opcoes-lacuna${classeGridMobile}${classeBotaoCurto}" id="opcoes-container">`;
            opcoesLacuna.forEach((opcao, index) => {
                const eCorreta = opcao.trim().toLowerCase() === ronda.correta.trim().toLowerCase();
                const classeCor = coresSorteadas[index % coresSorteadas.length];
                const opcaoSegura = opcao.replace(/"/g, '&quot;');

                html += `
                    <button class="btn-opcao ${classeCor}" data-correta="${eCorreta}" data-opcao="${opcaoSegura}" onclick="verificarLacuna(this, ${eCorreta})">
                        ${opcao}
                    </button>
                `;
            });
            html += `</div>`;
            break;
        }

        case 'construtor': {
            const palavraAlvo = ronda.correta.trim();
            const letras = palavraAlvo.split('');
            const extras = Array.isArray(ronda.letrasExtras) ? ronda.letrasExtras : [];
            const poolTeclas = [...letras, ...extras];
            let letrasBaralhadas = baralharArray([...poolTeclas]);
            
            if (poolTeclas.length > 1 && letrasBaralhadas.join('') === palavraAlvo) {
                letrasBaralhadas.reverse();
            }

            html += `
                <div class="construtor-wrapper" id="construtor-wrapper" data-alvo="${palavraAlvo}">
                    <div class="construtor-slots" id="construtor-slots">
                        ${letras.map((_, i) => `<div class="construtor-slot" data-slot="${i}" onclick="devolverLetraConstrutor(this)"></div>`).join('')}
                    </div>
                    <div class="construtor-teclado" id="construtor-teclado">
                        ${letrasBaralhadas.map((letra, i) => `<button type="button" class="construtor-tecla" data-idx="${i}" onclick="selecionarLetraConstrutor(this)">${letra}</button>`).join('')}
                    </div>
                </div>
            `;
            break;
        }

        case 'opcoes-texto':
        case 'padrao':
        case 'categoria':
        default: {
            const paletaCores = ['cor-azul', 'cor-amarelo', 'cor-roxo', 'cor-rosa'];
            const coresSorteadas = baralharArray([...paletaCores]);
            const opcoesTexto = ronda.ordemFixa ? [...ronda.opcoes] : baralharArray([...ronda.opcoes]);
            const eGrelhaCurta = opcoesTexto.length === 4 && opcoesTexto.every(op => op.replace(/<[^>]*>/g, '').trim().length <= 14);
            const classeGridMobile = eGrelhaCurta ? ' grid-2x2-mobile' : '';
            
            html += `<div class="opcoes-container${classeGridMobile}" id="opcoes-container">`;
            opcoesTexto.forEach((opcao, index) => {
                const eCorreta = opcao.trim().toLowerCase() === ronda.correta.trim().toLowerCase();
                const fnClique = eCorreta ? "simularAcerto(this)" : "simularErro(this)";
                const classeCor = coresSorteadas[index % coresSorteadas.length];
                html += `
                    <button class="btn-opcao ${classeCor}" data-correta="${eCorreta}" onclick="${fnClique}">
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

/* Preenche visualmente a lacuna na frase antes de validar o acerto ou erro */
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
    // 1. Se a pergunta já tem opções manuais (ronda.opcoes ou ronda.opcoesImagem), usa-as diretamente
    const opcoesManuais = (Array.isArray(ronda.opcoes) && ronda.opcoes.length > 0)
        ? ronda.opcoes
        : (Array.isArray(ronda.opcoesImagem) && ronda.opcoesImagem.length > 0)
            ? ronda.opcoesImagem
            : null;

    if (opcoesManuais) {
        return ronda.ordemFixa ? [...opcoesManuais] : baralharArray([...opcoesManuais]);
    }

    // 2. Fallback para jogos que usem BANCO_RECURSOS
    if (typeof BANCO_RECURSOS === 'undefined') {
        console.error("ERRO: A pergunta não tem 'opcoes' e 'BANCO_RECURSOS' não está definido.");
        return [];
    }

    const listaCategoria = BANCO_RECURSOS[ronda.categoriaDistratores];
    if (!listaCategoria) {
        console.error(`ERRO: A categoria "${ronda.categoriaDistratores}" não existe no BANCO_RECURSOS.`);
        return [];
    }

    const respostaCorretaLower = ronda.correta.trim().toLowerCase();

    const opcaoCorreta = baralharArray([...listaCategoria]).find(
        item => (item.valor || item.alt).trim().toLowerCase() === respostaCorretaLower
    );

    const possiveisDistratores = listaCategoria.filter(
        item => (item.valor || item.alt).trim().toLowerCase() !== respostaCorretaLower
    );

    const distratoresSorteados = baralharArray([...possiveisDistratores]).slice(0, 2);

    const opcoesFinais = opcaoCorreta 
        ? [opcaoCorreta, ...distratoresSorteados] 
        : distratoresSorteados;

    return baralharArray(opcoesFinais);
}

// ==========================================
// MECÂNICA: CONSTRUTOR DE PALAVRAS
// ==========================================
let construtorBloqueado = false;

function selecionarLetraConstrutor(btnTecla) {
    if (construtorBloqueado || btnTecla.classList.contains('usada')) return;

    const slots = Array.from(document.querySelectorAll('#construtor-slots .construtor-slot'));
    const primeiroVazio = slots.find(s => !s.classList.contains('preenchido'));
    if (!primeiroVazio) return;

    primeiroVazio.textContent = btnTecla.textContent;
    primeiroVazio.classList.add('preenchido');
    primeiroVazio.dataset.origemIdx = btnTecla.dataset.idx;
    btnTecla.classList.add('usada');

    const todosPreenchidos = slots.every(s => s.classList.contains('preenchido'));
    if (todosPreenchidos) {
        verificarConstrutor();
    }
}

function devolverLetraConstrutor(slotEl) {
    if (construtorBloqueado || !slotEl.classList.contains('preenchido')) return;

    const origemIdx = slotEl.dataset.origemIdx;
    const btnTecla = document.querySelector(`#construtor-teclado .construtor-tecla[data-idx="${origemIdx}"]`);
    if (btnTecla) {
        btnTecla.classList.remove('usada');
    }

    slotEl.textContent = '';
    slotEl.classList.remove('preenchido');
    delete slotEl.dataset.origemIdx;
}

function verificarConstrutor() {
    const wrapper = document.getElementById('construtor-wrapper');
    const slotsContainer = document.getElementById('construtor-slots');
    if (!wrapper || !slotsContainer) return;

    construtorBloqueado = true;
    const alvo = wrapper.dataset.alvo.trim().toLowerCase();
    const slots = Array.from(slotsContainer.querySelectorAll('.construtor-slot'));
    const respostaAluno = slots.map(s => s.textContent).join('').trim().toLowerCase();

    if (respostaAluno === alvo) {
        slotsContainer.classList.add('correto');
        setTimeout(() => {
            construtorBloqueado = false;
            simularAcerto(slotsContainer);
        }, 250);
    } else {
        slotsContainer.classList.add('errado');
        simularErro(slotsContainer);

        setTimeout(() => {
            const containerAtual = document.getElementById('construtor-slots');
            if (containerAtual) {
                containerAtual.classList.remove('errado');
                containerAtual.querySelectorAll('.construtor-slot').forEach(s => {
                    s.textContent = '';
                    s.classList.remove('preenchido');
                    delete s.dataset.origemIdx;
                });
                document.querySelectorAll('#construtor-teclado .construtor-tecla').forEach(t => {
                    t.classList.remove('usada');
                });
            }
            construtorBloqueado = false;
        }, 900);
    }
}