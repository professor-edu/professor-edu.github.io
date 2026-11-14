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

    // 3. Se sobrarem menos de 10 perguntas (ex: ao iniciar a 3.ª ronda), reinicia o histórico deste nível
    if (perguntasDisponiveis.length < totalDesafiosNivel) {
        historicoPerguntas[idNivel] = [];
        perguntasDisponiveis = [...poolPerguntas];
    }

    // 4. Baralha apenas as não usadas, escolhe 10 e guarda os seus IDs no histórico
    rondasSorteadas = baralharArray(perguntasDisponiveis).slice(0, totalDesafiosNivel);
    historicoPerguntas[idNivel].push(...rondasSorteadas.map(p => p.id));

    limparConfetis();
    atualizarPlacar();
    atualizarBotaoDica();
    mostrarEcra('ecra-jogo');
    carregarRonda();
}

// (Universal para qualquer jogo)

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
                const ePositivo = textoLower.includes("certo") || textoLower.includes("seguro");
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