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

// Guarda os IDs das perguntas já jogadas em cada nível durante a sessão
let historicoPerguntas = {};

function iniciarJogo(numQuestoes = 10, tituloNivel = "", idNivel = 1) {
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
    if (subtitulo) {
        subtitulo.textContent = CONFIG_JOGO.subtitulo || "Estudo do Meio • 3º Ano";
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
        rondasSorteadas = baralharArray(perguntasDisponiveis).slice(0, totalDesafiosNivel);
    } else {
        const restantesIneditas = baralharArray(perguntasDisponiveis);
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
            subtituloJogarNovo.textContent = "(novo tema)";
            subtituloJogarNovo.style.display = "";
        } else {
            subtituloJogarNovo.style.display = "none";
        }
    }

    limparConfetis();
    atualizarPlacar();
    atualizarBotaoDica();
    mostrarEcra('ecra-jogo');
	iniciarCronometro();
    carregarRonda();
}


function carregarRonda() {
    if (desafioAtual === 0) {
        iniciarCronometro();
    }
	pararVoz();
    resetTimerImpaciencia();
    
    const ronda = rondasSorteadas[desafioAtual];
    const gameArea = document.getElementById('game-area');
    if (!ronda || !gameArea) return;

    let html = '';

    // Áudio + Texto da Pergunta (omitido na Sopa de Letras)
    if (ronda.tipo !== 'sopa-letras') {
        let btnAudioHTML = ronda.audio ? `
            <button type="button" class="btn-ouvir-pergunta" onclick="tocarVoz('${ronda.audio}')" title="Ouvir Pergunta">
                <img src="../../../SVG/audio.svg" alt="Ouvir" class="icon-audio">
            </button>` : '';

        // Se for tipo "texto" (lacuna), transforma ________ num espaço preenchível ao vivo
        const textoPerguntaFormatado = (ronda.tipo === 'texto' || ronda.tipo === 'lacuna')
            ? ronda.pergunta.replace(/_{3,}/g, '<span class="lacuna-slot" id="lacuna-slot">________</span>')
            : ronda.pergunta;

        html += `
            <div class="pergunta-container">
                ${btnAudioHTML}
                <div class="pergunta-texto">${textoPerguntaFormatado}</div>
            </div>
        `;
    }

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
        
        case 'sopa-letras':
            html += `<div class="sopa-layout" id="sopa-layout">`;
            html += prepararSopaLetras(ronda);
            html += `</div>`;
            break;	
        
        case 'opcoes-imagem':
        case 'situacao':
            html += `<div class="opcoes-grid-imagens">`;
            const opcoesGeradas = prepararOpcoesPergunta(ronda);
            const mostrarLegenda = ronda.mostrarLegenda !== false; // Por defeito é true
            
            opcoesGeradas.forEach(item => {
                const textoLegenda = item.valor || item.alt;
                const eCorreta = textoLegenda.trim().toLowerCase() === ronda.correta.trim().toLowerCase();
                const fnClique = eCorreta ? "simularAcerto(this)" : "simularErro(this)";
                const classeExtra = mostrarLegenda ? "" : " sem-legenda";
                const htmlLegenda = mostrarLegenda ? `<span class="pilula-legenda">${textoLegenda}</span>` : "";

                html += `
                    <button class="btn-opcao-imagem${classeExtra}" onclick="${fnClique}">
                        <img src="${item.img}" alt="${item.alt}" class="frame-4-3" onerror="this.src='img/brincar_aprender.jpg';">
                        ${htmlLegenda}
                    </button>
                `;
            });
            html += `</div>`;
            break;

        case 'dupla-opcao':
        case 'cidadania':
            html += `<div class="opcoes-certo-errado">`;
            
            // SEM BARALHAR: Mantém exatamente a ordem definida no questoes.js (Certo/Seguro 1.º, Errado/Perigoso 2.º)
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

        case 'texto':
        case 'lacuna': {
            const paletaCores = ['cor-azul', 'cor-amarelo', 'cor-roxo', 'cor-rosa'];
            const coresSorteadas = baralharArray([...paletaCores]);
            const opcoesLacuna = ronda.ordemFixa ? [...ronda.opcoes] : baralharArray([...ronda.opcoes]);

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
            const coresSorteadas = baralharArray([...paletaCores]);
            const opcoesTexto = ronda.ordemFixa ? [...ronda.opcoes] : baralharArray([...ronda.opcoes]);
            
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

    if (ronda.tipo === 'sopa-letras') {
        mostrarMascote(false);
    } else {
        mostrarMascote(true);
        animarMascote('normal');
    }
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
    // 1. Se a pergunta já tem opções manuais estáticas (ex: tipo Cidadania ou layout fixo), usa essas
    if (ronda.opcoesImagem && ronda.opcoesImagem.length > 0) {
        return baralharArray([...ronda.opcoesImagem]);
    }

    // 2. Verifica se o BANCO_RECURSOS existe no escopo global
    if (typeof BANCO_RECURSOS === 'undefined') {
        console.error("ERRO: O ficheiro 'bancoRecursos.js' não foi carregado antes do engine.js!");
        return [];
    }

    // 3. Procura a categoria pedida
    const listaCategoria = BANCO_RECURSOS[ronda.categoriaDistratores];
    if (!listaCategoria) {
        console.error(`ERRO: A categoria "${ronda.categoriaDistratores}" não existe no BANCO_RECURSOS.`);
        return [];
    }

    const respostaCorretaLower = ronda.correta.trim().toLowerCase();

    // 4. Encontra o objeto correto no banco
    const opcaoCorreta = listaCategoria.find(
        item => (item.valor || item.alt).trim().toLowerCase() === respostaCorretaLower
    );

    if (!opcaoCorreta) {
        console.error(`ERRO: A palavra correta "${ronda.correta}" não foi encontrada na categoria "${ronda.categoriaDistratores}" do BANCO_RECURSOS.`);
    }

    // 5. Filtra os distratores errados
    const possiveisDistratores = listaCategoria.filter(
        item => (item.valor || item.alt).trim().toLowerCase() !== respostaCorretaLower
    );

    const distratoresSorteados = baralharArray([...possiveisDistratores]).slice(0, 2);

    // Se encontrou a correta, junta com os distratores; se não, devolve o que houver para não partir a UI
    const opcoesFinais = opcaoCorreta 
        ? [opcaoCorreta, ...distratoresSorteados] 
        : distratoresSorteados;

    return baralharArray(opcoesFinais);
}

// ============================================================================
// MÓDULO AUXILIAR: SOPA DE LETRAS (12x12, 3 Direções, 3.º Ano)
// ============================================================================

const TAM_GRELHA_SOPA = 12;
const MIN_PALAVRAS_OBJETIVO = 10;
let dadosGrelhaSopa = [];
let palavrasAlvoSopa = [];
let posicoesPalavrasSopa = {}; // Guarda { r, c } da 1.ª letra de cada palavra para a Dica
let palavrasEncontradasSet = new Set();
let pointsSopa = { isSelecting: false, startCoords: null, selectedCells: [] };

function prepararSopaLetras(ronda) {
    const listaBruta = Array.isArray(ronda.palavras) ? ronda.palavras : [];

    // Baralha, escolhe 10 palavras e guarda a versão com acentos (original) e sem acentos (normalizada)
    const palavrasSelecionadas = baralharArray([...listaBruta])
        .slice(0, MIN_PALAVRAS_OBJETIVO)
        .map(p => {
            const original = p.trim().toUpperCase();
            const normalizada = original.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return { original, normalizada };
        });

    // O motor da grelha e a verificação continuam a usar as palavras sem acentos
    palavrasAlvoSopa = palavrasSelecionadas.map(item => item.normalizada);

    palavrasEncontradasSet.clear();
    posicoesPalavrasSopa = {};
    pointsSopa = { isSelecting: false, startCoords: null, selectedCells: [] };

    dadosGrelhaSopa = Array.from({ length: TAM_GRELHA_SOPA }, () =>
        Array(TAM_GRELHA_SOPA).fill(null)
    );

    const palavrasParaColocar = [...palavrasAlvoSopa].sort((a, b) => b.length - a.length);
    palavrasParaColocar.forEach(palavra => {
        colocarPalavraNaGrelha(palavra);
    });

    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < TAM_GRELHA_SOPA; r++) {
        for (let c = 0; c < TAM_GRELHA_SOPA; c++) {
            if (dadosGrelhaSopa[r][c] === null) {
                dadosGrelhaSopa[r][c] = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            }
        }
    }

    let html = `<div class="sopa-main-content">`;

    // Grelha 12x12
    html += `<div class="sopa-grid" id="sopa-grid" style="grid-template-columns: repeat(${TAM_GRELHA_SOPA}, 1fr);"
                onpointerdown="iniciarSelecaoSopa(event)"
                onpointermove="moverSelecaoSopa(event)">`;

    for (let r = 0; r < TAM_GRELHA_SOPA; r++) {
        for (let c = 0; c < TAM_GRELHA_SOPA; c++) {
            html += `<div class="cell-sopa" data-r="${r}" data-c="${c}">${dadosGrelhaSopa[r][c]}</div>`;
        }
    }
    html += `</div>`;

    // Título dinâmico do tema
    const tituloTema = ronda.tema || ronda.pergunta || 'Palavras a encontrar:';

    // Lista lateral com acentuação correta
    html += `<div class="sopa-lista-container">`;
    html += `<h3>${tituloTema}</h3>`;
    html += `<ul class="sopa-lista" id="sopa-lista">`;
    palavrasSelecionadas.forEach(item => {
        html += `<li data-palavra="${item.normalizada}">${item.original}</li>`;
    });
    html += `</ul>`;
    html += `</div>`;
    html += `</div>`;

    return html;
}

let indicesTemasJogados = [];

function obterProximoTemaSemRepeticao(listaPerguntas, quantidade = 1) {
    if (!Array.isArray(listaPerguntas) || listaPerguntas.length === 0) return [];

    // Se todos os temas já foram jogados, reinicia o ciclo
    if (indicesTemasJogados.length >= listaPerguntas.length) {
        indicesTemasJogados = [];
    }

    const disponiveis = listaPerguntas
        .map((_, idx) => idx)
        .filter(idx => !indicesTemasJogados.includes(idx));

    const escolhidos = baralharArray(disponiveis).slice(0, quantidade);
    indicesTemasJogados.push(...escolhidos);

    return escolhidos.map(idx => listaPerguntas[idx]);
}


function colocarPalavraNaGrelha(palavra) {
    const direcoes = [
        { dr: 0, dc: 1 }, // Horizontal
        { dr: 1, dc: 0 }, // Vertical
        { dr: 1, dc: 1 }  // Diagonal descendente
    ];

    for (let i = direcoes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [direcoes[i], direcoes[j]] = [direcoes[j], direcoes[i]];
    }

    for (const dir of direcoes) {
        for (let tentativas = 0; tentativas < 80; tentativas++) {
            const r = Math.floor(Math.random() * TAM_GRELHA_SOPA);
            const c = Math.floor(Math.random() * TAM_GRELHA_SOPA);

            if (podeColocarSopa(palavra, r, c, dir)) {
                for (let i = 0; i < palavra.length; i++) {
                    dadosGrelhaSopa[r + i * dir.dr][c + i * dir.dc] = palavra[i];
                }
                // Guarda a coordenada da 1.ª letra para o botão Dica
                posicoesPalavrasSopa[palavra] = { r, c };
                return true;
            }
        }
    }
    return false;
}

function podeColocarSopa(palavra, r, c, dir) {
    const len = palavra.length;
    const finalR = r + (len - 1) * dir.dr;
    const finalC = c + (len - 1) * dir.dc;

    if (finalR < 0 || finalR >= TAM_GRELHA_SOPA || finalC < 0 || finalC >= TAM_GRELHA_SOPA) {
        return false;
    }

    for (let i = 0; i < len; i++) {
        const atual = dadosGrelhaSopa[r + i * dir.dr][c + i * dir.dc];
        if (atual !== null && atual !== palavra[i]) {
            return false;
        }
    }
    return true;
}

function iniciarSelecaoSopa(e) {
    const cell = e.target.closest('.cell-sopa');
    if (!cell) return;
    e.preventDefault();

    pointsSopa.isSelecting = true;
    pointsSopa.startCoords = { r: parseInt(cell.dataset.r, 10), c: parseInt(cell.dataset.c, 10) };
    pointsSopa.selectedCells = [cell];

    document.querySelectorAll('.cell-sopa.highlight').forEach(c => c.classList.remove('highlight'));
    cell.classList.add('highlight');

    window.addEventListener('pointerup', finalizarSelecaoSopa, { once: true });
}

function moverSelecaoSopa(e) {
    if (!pointsSopa.isSelecting) return;
    e.preventDefault();

    const elemSobPonteiro = document.elementFromPoint(e.clientX, e.clientY);
    const cell = elemSobPonteiro ? elemSobPonteiro.closest('.cell-sopa') : null;
    if (!cell) return;

    const currR = parseInt(cell.dataset.r, 10);
    const currC = parseInt(cell.dataset.c, 10);
    const startR = pointsSopa.startCoords.r;
    const startC = pointsSopa.startCoords.c;

    const diffR = currR - startR;
    const diffC = currC - startC;

    const esHorizontal = diffR === 0 && diffC >= 0;
    const esVertical = diffC === 0 && diffR >= 0;
    const esDiagonalDesc = diffR === diffC && diffR >= 0;

    if (!esHorizontal && !esVertical && !esDiagonalDesc) return;

    document.querySelectorAll('.cell-sopa.highlight').forEach(c => c.classList.remove('highlight'));
    pointsSopa.selectedCells = [];

    const steps = Math.max(diffR, diffC);
    const dr = steps === 0 ? 0 : diffR / steps;
    const dc = steps === 0 ? 0 : diffC / steps;
    const grid = document.getElementById('sopa-grid');

    for (let i = 0; i <= steps; i++) {
        const r = startR + i * dr;
        const c = startC + i * dc;
        const targetCell = grid.querySelector(`.cell-sopa[data-r="${r}"][data-c="${c}"]`);
        if (targetCell) {
            targetCell.classList.add('highlight');
            pointsSopa.selectedCells.push(targetCell);
        }
    }
}

function finalizarSelecaoSopa() {
    if (!pointsSopa.isSelecting) return;
    pointsSopa.isSelecting = false;

    const palavraSelecionada = pointsSopa.selectedCells.map(cell => cell.textContent).join('');

    if (palavrasAlvoSopa.includes(palavraSelecionada) && !palavrasEncontradasSet.has(palavraSelecionada)) {
        if (typeof tocarSom === 'function') tocarSom('acerto');
        palavrasEncontradasSet.add(palavraSelecionada);

        if (typeof rondasParaDica !== 'undefined' && rondasParaDica > 0) {
            rondasParaDica--;
            if (typeof atualizarBotaoDica === 'function') atualizarBotaoDica();
        }

        pointsSopa.selectedCells.forEach(cell => {
            cell.classList.remove('highlight', 'hint-cell');
            cell.classList.add('found');
        });

        const listItem = document.querySelector(`.sopa-lista li[data-palavra="${palavraSelecionada}"]`);
        if (listItem) listItem.classList.add('found');

        const contador = document.getElementById('sopa-contador');
        if (contador) {
            contador.textContent = `Encontradas: ${palavrasEncontradasSet.size} / ${palavrasAlvoSopa.length}`;
        }

        atualizarPlacar();

        if (palavrasEncontradasSet.size === palavrasAlvoSopa.length) {
            finalizarComAcertoSopa();
        }
    } else if (pointsSopa.selectedCells.length > 1) {
        pointsSopa.selectedCells.forEach(cell => cell.classList.add('error-blink'));
        if (typeof tocarSom === 'function') tocarSom('erro');

        if (typeof erradas !== 'undefined') {
            erradas++;
            atualizarPlacar();
        }

        setTimeout(() => {
            document.querySelectorAll('.cell-sopa.highlight, .cell-sopa.error-blink')
                .forEach(c => c.classList.remove('highlight', 'error-blink'));
        }, 500);
    } else {
        document.querySelectorAll('.cell-sopa.highlight').forEach(c => c.classList.remove('highlight'));
    }

    if (typeof resetTimerImpaciencia === 'function') resetTimerImpaciencia();
}

function finalizarComAcertoSopa() {
    const grid = document.getElementById('sopa-grid');
    if (grid) grid.style.pointerEvents = 'none';

    setTimeout(() => {
        if (typeof simularAcerto === 'function') {
            // Cria um botão virtual com parentElement para satisfazer o simularAcerto(btn) do template
            const wrapper = document.createElement('div');
            const btnVirtual = document.createElement('button');
            wrapper.appendChild(btnVirtual);
            simularAcerto(btnVirtual);
        } else if (typeof finalizarJogo === 'function') {
            finalizarJogo();
        }
    }, 800);
}



function darDicaSopa() {
    const naoEncontradas = palavrasAlvoSopa.filter(p => !palavrasEncontradasSet.has(p) && posicoesPalavrasSopa[p]);
    if (naoEncontradas.length === 0) return;

    const palavraEscolhida = naoEncontradas[Math.floor(Math.random() * naoEncontradas.length)];
    const coord = posicoesPalavrasSopa[palavraEscolhida];
    const grid = document.getElementById('sopa-grid');
    if (!grid || !coord) return;

    document.querySelectorAll('.cell-sopa.hint-cell').forEach(c => c.classList.remove('hint-cell'));

    const celulaAlvo = grid.querySelector(`.cell-sopa[data-r="${coord.r}"][data-c="${coord.c}"]`);
    if (celulaAlvo) {
        celulaAlvo.classList.add('hint-cell');
        setTimeout(() => celulaAlvo.classList.remove('hint-cell'), 3500);
    }
}

