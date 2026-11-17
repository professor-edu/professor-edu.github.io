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

// (Universal para qualquer jogo)
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
        ${infoSuperiorHTML}
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
        case 'situacao': {
            const opcoesGeradas = prepararOpcoesPergunta(ronda);
            let classeGrid = "";
            if (opcoesGeradas.length === 4) {
                classeGrid = " grid-2x2";
            } else if (opcoesGeradas.length === 2) {
                classeGrid = " grid-2-opcoes";
            }

            html += `<div class="opcoes-grid-imagens${classeGrid}">`;
            const mostrarLegenda = ronda.mostrarLegenda !== false; // Por defeito é true
            const usarAltNaLegenda = ronda.legendaAlt === true || (typeof CONFIG_JOGO !== 'undefined' && CONFIG_JOGO.legendaAlt === true);
            
            opcoesGeradas.forEach(item => {
                const valorValidacao = (item.valor || item.alt).trim().toLowerCase();
                const eCorreta = valorValidacao === ronda.correta.trim().toLowerCase();
                const textoLegenda = usarAltNaLegenda ? (item.alt || item.valor) : (item.valor || item.alt);
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
        }

        case 'dupla-opcao':
        case 'cidadania': {
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
        }

        case 'texto':
        case 'lacuna': {
            const paletaCores = ['cor-azul', 'cor-amarelo', 'cor-roxo', 'cor-rosa'];
            const coresSorteadas = baralharArray([...paletaCores]);
            const opcoesLacuna = ronda.ordemFixa ? [...ronda.opcoes] : baralharArray([...ronda.opcoes]);
            const eGrelhaCurta = opcoesLacuna.length === 4 && opcoesLacuna.every(op => op.replace(/<[^>]*>/g, '').trim().length <= 14);
            const classeGridMobile = eGrelhaCurta ? ' grid-2x2-mobile' : '';

            html += `<div class="opcoes-container opcoes-lacuna${classeGridMobile}" id="opcoes-container">`;
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
            let letrasBaralhadas = baralharArray([...letras]);
            
            // Garante que as letras não ficam exatamente na ordem certa ao baralhar
            if (letras.length > 1 && letrasBaralhadas.join('') === palavraAlvo) {
                letrasBaralhadas.reverse();
            }

            const textoAudio = (ronda.textoAudio || `${ronda.pergunta.replace(/<[^>]*>/g, ' ')}. ${palavraAlvo}`).replace(/"/g, '&quot;');

            html += `
                <div class="construtor-wrapper" id="construtor-wrapper" data-alvo="${palavraAlvo}" data-audio="${textoAudio}">
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

    if (ronda.tipo === 'construtor') {
        const frameImg = gameArea.querySelector('.img-pergunta-frame');
        const wrapper = document.getElementById('construtor-wrapper');
        if (frameImg && wrapper) {
            const btnAudio = document.createElement('button');
            btnAudio.type = 'button';
            btnAudio.className = 'btn-audio-construtor';
            btnAudio.title = 'Ouvir palavra';
            btnAudio.innerHTML = '🔊';
            btnAudio.onclick = () => falarTextoConstrutor(wrapper.dataset.audio, ronda.audio);
            frameImg.appendChild(btnAudio);
        }
    }

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
    // 1. Se a pergunta já tem opções manuais estáticas, usa essas (respeitando ordemFixa se existir)
    if (ronda.opcoesImagem && ronda.opcoesImagem.length > 0) {
        return ronda.ordemFixa ? [...ronda.opcoesImagem] : baralharArray([...ronda.opcoesImagem]);
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

    // 4. Encontra um objeto correto aleatório no banco
    const opcaoCorreta = baralharArray([...listaCategoria]).find(
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

    // Se todos os espaços estiverem preenchidos, valida automaticamente
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

        // Limpa os espaços após a animação para permitir nova tentativa se o motor não avançar
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

function falarTextoConstrutor(texto, ficheiroAudio) {
    if (ficheiroAudio) {
        const audio = new Audio(ficheiroAudio);
        audio.play().catch(() => {});
        return;
    }

    if ('speechSynthesis' in window && texto) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(texto.replace(/\s+/g, ' ').trim());
        utterance.lang = 'pt-PT';
        utterance.rate = 0.92;
        window.speechSynthesis.speak(utterance);
    }
}