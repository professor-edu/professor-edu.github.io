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

const PASTA_DINHEIRO = 'img/dinheiro/';
const EXT_DINHEIRO = '.png';

const CATALOGO_DINHEIRO = {
    // Moedas 1:1 (256x256)
    '1c':   { ficheiro: '1c',   tipo: 'moeda', tamanho: 52,  nome: 'Moeda de 1 cêntimo' },
    '2c':   { ficheiro: '2c',   tipo: 'moeda', tamanho: 56,  nome: 'Moeda de 2 cêntimos' },
    '5c':   { ficheiro: '5c',   tipo: 'moeda', tamanho: 60,  nome: 'Moeda de 5 cêntimos' },
    '10c':  { ficheiro: '10c',  tipo: 'moeda', tamanho: 58,  nome: 'Moeda de 10 cêntimos' },
    '20c':  { ficheiro: '20c',  tipo: 'moeda', tamanho: 64,  nome: 'Moeda de 20 cêntimos' },
    '50c':  { ficheiro: '50c',  tipo: 'moeda', tamanho: 70,  nome: 'Moeda de 50 cêntimos' },
    '1e':   { ficheiro: '1e',   tipo: 'moeda', tamanho: 68,  nome: 'Moeda de 1 euro' },
    '2e':   { ficheiro: '2e',   tipo: 'moeda', tamanho: 76,  nome: 'Moeda de 2 euros' },
    // Notas 16:9 (500x279)
    '5e':   { ficheiro: '5e',   tipo: 'nota',  tamanho: 108, nome: 'Nota de 5 euros' },
    '10e':  { ficheiro: '10e',  tipo: 'nota',  tamanho: 114, nome: 'Nota de 10 euros' },
    '20e':  { ficheiro: '20e',  tipo: 'nota',  tamanho: 120, nome: 'Nota de 20 euros' },
    '50e':  { ficheiro: '50e',  tipo: 'nota',  tamanho: 124, nome: 'Nota de 50 euros' },
    '100e': { ficheiro: '100e', tipo: 'nota',  tamanho: 128, nome: 'Nota de 100 euros' },
    '200e': { ficheiro: '200e', tipo: 'nota',  tamanho: 130, nome: 'Nota de 200 euros' },
    '500e': { ficheiro: '500e', tipo: 'nota',  tamanho: 132, nome: 'Nota de 500 euros' }
};

function renderizarDinheiro(lista, emOpcao = false, emModal = false) {
    if (!Array.isArray(lista) || lista.length === 0) return '';

    const pesoLargura = lista.reduce((soma, codigo) => {
        const item = CATALOGO_DINHEIRO[codigo];
        if (!item) return soma;
        return soma + (item.tipo === 'nota' ? 1.8 : 1);
    }, 0);

    let fatorEscala = 1;
    if (emModal) {
        if (pesoLargura <= 3.6) fatorEscala = 1.65;
        else if (pesoLargura <= 6.0) fatorEscala = 1.35;
        else fatorEscala = 1.1;
    } else if (emOpcao) {
        if (pesoLargura <= 2.0) fatorEscala = 0.72;
        else if (pesoLargura <= 3.8) fatorEscala = 0.56;
        else fatorEscala = 0.45;
    } else {
        if (pesoLargura <= 3.6) fatorEscala = 1.0;
        else if (pesoLargura <= 6.0) fatorEscala = 0.84;
        else fatorEscala = 0.72;
    }

    const itensHTML = lista.map((codigo, idx) => {
        const item = CATALOGO_DINHEIRO[codigo];
        if (!item) return '';

        const alturaPx = Math.round(item.tamanho * fatorEscala);
        const estilo = item.tipo === 'moeda'
            ? `width: ${alturaPx}px; height: ${alturaPx}px; aspect-ratio: 1 / 1;`
            : `height: ${alturaPx}px; width: auto; aspect-ratio: 500 / 279;`;

        return `<img 
            src="${PASTA_DINHEIRO}${item.ficheiro}${EXT_DINHEIRO}" 
            alt="${item.nome}" 
            class="item-dinheiro item-${item.tipo}" 
            style="${estilo} animation-delay: ${idx * 0.05}s;"
        >`;
    }).join('');

    const interativo = !emOpcao && !emModal;
    const listaSerializada = JSON.stringify(lista).replace(/"/g, '&quot;');
    const atributoClique = interativo ? `onclick="abrirModalDinheiro(${listaSerializada})" title="Clica para ampliar"` : '';
    const badgeZoom = interativo ? `<span class="badge-zoom-dinheiro" aria-hidden="true">🔍</span>` : '';
    const classeExtra = emModal ? 'grupo-dinheiro-modal' : (emOpcao ? 'grupo-dinheiro-opcao' : 'grupo-dinheiro-interativo');

    return `<div class="grupo-dinheiro ${classeExtra}" ${atributoClique}>${itensHTML}${badgeZoom}</div>`;
}

function abrirModalDinheiro(lista) {
    if (!Array.isArray(lista) || lista.length === 0) return;

    let overlay = document.getElementById('modal-dinheiro-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'modal-dinheiro-overlay';
        overlay.className = 'modal-imagem-overlay';
        overlay.onclick = (e) => {
            if (e.target === overlay || e.target.closest('.btn-fechar-modal-dinheiro')) {
                fecharModalDinheiro();
            }
        };
        document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
        <div class="modal-dinheiro-box" onclick="event.stopPropagation()">
            <button type="button" class="btn-fechar-modal-dinheiro" onclick="fecharModalDinheiro()" title="Fechar">✕</button>
            ${renderizarDinheiro(lista, false, true)}
        </div>
    `;
    overlay.style.display = 'flex';
}

function fecharModalDinheiro() {
    const overlay = document.getElementById('modal-dinheiro-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModalDinheiro();
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

    // Imagem Central e/ou Dinheiro
    if (ronda.imagemPergunta || ronda.dinheiro) {
        const temAmbos = Boolean(ronda.imagemPergunta && ronda.dinheiro);
        const classePlural = (ronda.plural || temAmbos) ? ' frame-plural' : '';
        const classeDinheiro = (!ronda.imagemPergunta && ronda.dinheiro) ? ' frame-dinheiro' : '';

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

        if (ronda.dinheiro) {
            conteudoFrame += renderizarDinheiro(ronda.dinheiro, false);
        }

        let btnAudioFrameHTML = (ronda.audio && ronda.imagemPergunta) ? `
            <button type="button" class="btn-ouvir-pergunta btn-ouvir-frame" onclick="tocarVoz('${ronda.audio}')" title="Ouvir">
                <img src="../../../SVG/audio.svg" alt="Ouvir" class="icon-audio">
            </button>` : '';

        html += `
            <div class="img-pergunta-frame${classePlural}${classeDinheiro}">
                ${conteudoFrame}
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
                const eCorreta = valorValidacao === ronda.correta.trim().toLowerCase();
                const textoLegenda = usarAltNaLegenda ? (item.alt || item.valor || '') : (item.valor || item.alt || '');
                const fnClique = eCorreta ? "simularAcerto(this)" : "simularErro(this)";
                const classeExtra = mostrarLegenda ? "" : " sem-legenda";
                const htmlLegenda = mostrarLegenda ? `<span class="pilula-legenda">${textoLegenda}</span>` : "";

                let htmlImagem = '';
                if (item.dinheiro) {
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

                html += `
                    <button class="btn-opcao-imagem${classeExtra}" onclick="${fnClique}">
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
                    <button class="btn-opcao ${classeCor}" data-opcao="${opcaoSegura}" onclick="verificarLacuna(this, ${eCorreta})">
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