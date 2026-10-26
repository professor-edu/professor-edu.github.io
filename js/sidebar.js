(function() {
    // 1. Injeta o CSS automaticamente no <head>
    const cssPath = '/css/sidebar.css';
    if (!document.querySelector(`link[href="${cssPath}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        document.head.appendChild(link);
    }

    // 2. Deteta a cor do ano isolando a primeira pasta da URL
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const primeiraPasta = pathSegments[0] || '';
    
    // Cor padrão para a Página Inicial (#0091ff)
    let corHoverAtual = 'var(--cor-inicio, #0091ff)';

    if (primeiraPasta === 'pre') {
        corHoverAtual = 'var(--cor-pre, #f368e0)';
    } else if (primeiraPasta === '1' || primeiraPasta === 'ano1') {
        corHoverAtual = 'var(--cor-1ano, #ff6b6b)';
    } else if (primeiraPasta === '2' || primeiraPasta === 'ano2') {
        corHoverAtual = 'var(--cor-2ano, #feca57)';
    } else if (primeiraPasta === '3' || primeiraPasta === 'ano3') {
        corHoverAtual = 'var(--cor-3ano, #48dbfb)';
    } else if (primeiraPasta === '4' || primeiraPasta === 'ano4') {
        corHoverAtual = 'var(--cor-4ano, #1dd1a1)';
    }

    // 3. Injeta o HTML do Menu e da Modal
    document.addEventListener("DOMContentLoaded", function() {
        const caminho = window.location.pathname;
        const ePaginaInicial = caminho === '/' || caminho.endsWith('/index.html') || caminho === '';

        // Pre-carrega o catálogo de jogos assim que o DOM estiver pronto
        carregarCatalogo();

        // HTML base da Modal de Pesquisa
        const modalHTML = `
            <div id="modal-pesquisa" class="modal-pesquisa-overlay" style="--cor-hover: ${corHoverAtual};" onclick="fecharPesquisaFora(event)">
                <div class="modal-pesquisa-container">
                    <div class="modal-pesquisa-header">
                        <div class="input-pesquisa-container">
                            <svg class="icon-lupa-pesquisa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" id="input-pesquisa" placeholder="O que queres jogar hoje?" autocomplete="off" oninput="pesquisarJogos()">
                            <button id="btn-limpar-pesquisa" class="btn-limpar-texto" onclick="limparPesquisa()" title="Apagar texto" type="button">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <button class="btn-fechar-pesquisa" onclick="fecharPesquisa()" title="Fechar janela">✕</button>
                    </div>

                    <div class="pesquisa-filtros-container">
                        <button type="button" class="btn-filtro-pill active" data-tipo="todos" onclick="selecionarFiltro('todos', 'todos', this)">Todos</button>
                        <button type="button" class="btn-filtro-pill" data-tipo="ano" onclick="selecionarFiltro('ano', 'pre', this)">Pré</button>
                        <button type="button" class="btn-filtro-pill" data-tipo="ano" onclick="selecionarFiltro('ano', '1', this)">1º Ano</button>
                        <button type="button" class="btn-filtro-pill" data-tipo="ano" onclick="selecionarFiltro('ano', '2', this)">2º Ano</button>
                        <button type="button" class="btn-filtro-pill" data-tipo="ano" onclick="selecionarFiltro('ano', '3', this)">3º Ano</button>
                        <button type="button" class="btn-filtro-pill" data-tipo="ano" onclick="selecionarFiltro('ano', '4', this)">4º Ano</button>
                        <button type="button" class="btn-filtro-pill" data-tipo="disciplina" onclick="selecionarFiltro('disciplina', 'matematica', this)">Matemática</button>
                        <button type="button" class="btn-filtro-pill" data-tipo="disciplina" onclick="selecionarFiltro('disciplina', 'portugues', this)">Português</button>
                        <button type="button" class="btn-filtro-pill" data-tipo="disciplina" onclick="selecionarFiltro('disciplina', 'estudo-meio', this)">Estudo do Meio</button>
                    </div>

                    <div id="resultados-pesquisa" class="resultados-pesquisa">
                        <div class="pesquisa-vazia-container">
                            <p class="pesquisa-vazia-titulo">Escreve o que queres brincar e aprender ou escolhe uma destas ideias:</p>
                            <div class="pesquisas-populares-container">
                                <button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Tabuada')">✨ Tabuada</button>
                                <button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Sopa de Letras')">🔤 Sopa de Letras</button>
                                <button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Animais')">🦁 Animais</button>
                                <button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Relógio')">⏰ Relógio</button>
                                <button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Corpo Humano')">🦴 Corpo Humano</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // HTML da Sidebar (Menu Lateral)
        const sidebarMenuHTML = `
            <nav class="sidebar" id="sidebar" style="--cor-hover: ${corHoverAtual};">
                <div class="btn-fechar" onclick="toggleMenu()"><span>✕</span> Fechar</div>
                <ul>
                    <li><a href="/"><img src="/SVG/home.svg" alt="Início" class="icon-svg-menu" style="width:24px; height:24px;" onerror="this.style.display='none'">Início</a></li>
                    <li><a href="/pre"><img src="/SVG/pre.svg" alt="Pré-Escolar" class="icon-svg-menu" style="width:24px; height:24px;" onerror="this.style.display='none'">Pré-Escolar</a></li>
                    <li><a href="/1"><img src="/SVG/ano1.svg" alt="1º Ano" class="icon-svg-menu" style="width:24px; height:24px;" onerror="this.style.display='none'">1º Ano</a></li>
                    <li><a href="/2"><img src="/SVG/ano2.svg" alt="2º Ano" class="icon-svg-menu" style="width:24px; height:24px;" onerror="this.style.display='none'">2º Ano</a></li>
                    <li><a href="/3"><img src="/SVG/ano3.svg" alt="3º Ano" class="icon-svg-menu" style="width:24px; height:24px;" onerror="this.style.display='none'">3º Ano</a></li>
                    <li><a href="/4"><img src="/SVG/ano4.svg" alt="4º Ano" class="icon-svg-menu" style="width:24px; height:24px;" onerror="this.style.display='none'">4º Ano</a></li>
                </ul>
                <div class="sidebar-search-box">
                    <button class="btn-sidebar-pesquisa" onclick="abrirPesquisa()">
                        <img src="/SVG/lupa.svg" alt="" class="icon-svg-menu" style="width:24px; height:24px;" onerror="this.style.display='none'">
                        <span>Pesquisar jogos...</span>
                    </button>
                </div>
            </nav>
        `;

        const htmlFinal = (ePaginaInicial ? '' : sidebarMenuHTML) + modalHTML;
        document.body.insertAdjacentHTML('beforeend', htmlFinal);
    });
})();

// Funções de Controlo do Menu
function toggleMenu() {
    document.getElementById('sidebar')?.classList.toggle('active');
    document.getElementById('overlay')?.classList.toggle('active');
    document.getElementById('hamburgerBtn')?.classList.toggle('open');
}

// Variável global para armazenar o catálogo carregado
let catalogoJogos = [];

// Carrega o jogos.json apenas uma vez
async function carregarCatalogo() {
    if (catalogoJogos.length === 0) {
        try {
            const resposta = await fetch('/jogos.json');
            catalogoJogos = await resposta.json();
        } catch (erro) {
            console.error('Erro ao carregar o catálogo de jogos:', erro);
        }
    }
}

// Dicionário de Sinónimos e Mapeamentos Escolares Ampliado
const SINONIMOS_PESQUISA = {
    // --- MATEMÁTICA ---
    "tabuada": ["tabuadas", "multiplicacao", "multiplicar", "vezes"],
    "multiplicar": ["multiplicacao", "vezes", "tabuada", "dobro", "triplo"],
    "multiplicacao": ["multiplicar", "vezes", "tabuada"],
    "somar": ["adicao", "soma", "mais", "juntar"],
    "soma": ["adicao", "somar", "mais"],
    "adicao": ["soma", "somar", "mais"],
    "subtrair": ["subtracao", "menos", "diferenca", "tirar"],
    "subtracao": ["subtrair", "menos", "diferenca"],
    "dividir": ["divisao", "partilhar", "metade", "terco"],
    "divisao": ["dividir", "partilhar", "metade"],
    "horas": ["relogio", "tempo", "minutos"],
    "relogio": ["horas", "tempo", "minutos"],
    "dinheiro": ["euro", "euros", "moedas", "notas", "trocos"],
    "euro": ["dinheiro", "euros", "moedas", "notas"],
    "fracoes": ["fracao", "metade", "quarto", "terco"],
    "geometria": ["formas", "figuras", "solidos", "poligonos"],
    "formas": ["geometria", "figuras", "triangulo", "quadrado", "circulo", "retangulo"],

    // --- PORTUGUÊS ---
    "sopa de letras": ["sopa de letras", "caca palavras"],
    "palavras cruzadas": ["palavras cruzadas", "cruzadas"],
    "abc": ["alfabeto", "letras", "abecedario"],
    "alfabeto": ["abc", "letras", "abecedario", "vogais", "consoantes"],
    "letras": ["alfabeto", "abc", "vogais", "consoantes"],
    "ler": ["leitura", "texto", "historias"],
    "leitura": ["ler", "texto", "historias"],
    "silabas": ["silaba", "divisao silabica"],
    "opostos": ["antonimos", "contrario"],
    "antonimos": ["opostos", "contrario"],
    "sinonimos": ["iguais", "semelhantes"],
    "ditado": ["ortografia", "escrita"],

    // --- ESTUDO DO MEIO ---
    "corpo": ["corpo humano", "orgaos", "esqueleto", "ossos", "sentidos"],
    "animais": ["bichos", "fauna", "vertebrados", "invertebrados", "mamiferos"],
    "bichos": ["animais", "fauna"],
    "plantas": ["flora", "arvores", "flores", "vegetacao"],
    "mapa": ["portugal", "distritos", "geografia", "continentes"],
    "portugal": ["mapa", "distritos", "concelhos", "freguesias"],
    "profissoes": ["trabalho", "oficios"],
    "estacoes": ["primavera", "verao", "outono", "inverno"],

    // --- PRÉ-ESCOLAR ---
    "cores": ["pintar", "colorir", "desenhar"],
    "puzzles": ["quebra cabecas", "puzzle", "pecas"],
    "memoria": ["jogo da memoria", "pares de imagens"]
};

function normalizarTexto(texto) {
    if (!texto) return "";
    return String(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function calcularDistanciaErros(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matriz = [];
    for (let i = 0; i <= b.length; i++) matriz[i] = [i];
    for (let j = 0; j <= a.length; j++) matriz[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matriz[i][j] = matriz[i - 1][j - 1];
            } else {
                matriz[i][j] = Math.min(
                    matriz[i - 1][j - 1] + 1,
                    matriz[i][j - 1] + 1,
                    matriz[i - 1][j] + 1
                );
            }
        }
    }
    return matriz[b.length][a.length];
}

// Helper para validar tolerância a erros sem gerar falsos positivos
function testarFuzzy(palavra, termoBusca) {
    const lenP = palavra.length;
    const lenT = termoBusca.length;

    // Se a diferença de tamanho for superior a 1 letra em termos curtos/médios, rejeita
    if (Math.abs(lenP - lenT) > 1 && Math.min(lenP, lenT) < 7) return 0;

    const erros = calcularDistanciaErros(palavra, termoBusca);

    // Palavras de 4 a 6 letras: apenas 1 erro permitido
    if (lenT >= 4 && lenT <= 6) {
        return erros === 1 ? 1 : 0;
    }
    // Palavras com 7 ou mais letras: até 2 erros permitidos
    if (lenT >= 7) {
        if (erros === 1) return 1;
        if (erros === 2) return 2;
    }
    return 0;
}

function calcularPontuacao(jogo, termoPesquisa) {
    let pontuacao = 0;
    const termoClean = normalizarTexto(termoPesquisa); // remove acentos e passa a minúsculas

    // 1. Verificação no Título do Jogo
    const nomeClean = normalizarTexto(jogo.nome);
    if (nomeClean === termoClean) {
        pontuacao += 40;
    } else if (nomeClean.includes(termoClean)) {
        pontuacao += 20;
    }

    // 2. Verificação nas Tags
    if (jogo.tags && Array.isArray(jogo.tags)) {
        jogo.tags.forEach(tagOriginal => {
            const tagClean = normalizarTexto(tagOriginal);

            // A) Match exato da tag com a pesquisa direta do utilizador (ex: "memoria" === "memoria")
            if (tagClean === termoClean) {
                pontuacao += 30;
            } 
            // B) Contém a palavra direta pesquisada
            else if (tagClean.includes(termoClean)) {
                pontuacao += 10;
            }

            // C) VERIFICAÇÃO DE SINÓNIMOS (SOLUÇÃO 2 APLICADA AQUI)
            const sinonimos = SINONIMOS_PESQUISA[termoClean] || [];
            sinonimos.forEach(sinonimo => {
                const sinonimoClean = normalizarTexto(sinonimo);

                // IGUALDADE EXATA: A tag tem de ser IDÊNTICA ao sinónimo.
                // Evita que o sinónimo "pares" ative a tag "números pares".
                if (tagClean === sinonimoClean) {
                    pontuacao += 15;
                }
            });
        });
    }

    return pontuacao;
}

function limparPesquisa() {
    const input = document.getElementById('input-pesquisa');
    if (input) {
        input.value = '';
        input.focus();
        pesquisarJogos();
    }
}

// Estado dos filtros
let filtroAno = 'todos';
let filtroDisciplina = 'todos';

function selecionarFiltro(tipo, valor, elemento) {
    if (tipo === 'todos') {
        filtroAno = 'todos';
        filtroDisciplina = 'todos';
        document.querySelectorAll('.btn-filtro-pill').forEach(btn => btn.classList.remove('active'));
        if (elemento) elemento.classList.add('active');
    } else if (tipo === 'ano') {
        if (filtroAno === valor) {
            filtroAno = 'todos';
            if (elemento) elemento.classList.remove('active');
        } else {
            filtroAno = valor;
            document.querySelectorAll('.btn-filtro-pill[data-tipo="ano"]').forEach(btn => btn.classList.remove('active'));
            if (elemento) elemento.classList.add('active');
        }
    } else if (tipo === 'disciplina') {
        if (filtroDisciplina === valor) {
            filtroDisciplina = 'todos';
            if (elemento) elemento.classList.remove('active');
        } else {
            filtroDisciplina = valor;
            document.querySelectorAll('.btn-filtro-pill[data-tipo="disciplina"]').forEach(btn => btn.classList.remove('active'));
            if (elemento) elemento.classList.add('active');
        }
    }

    const btnTodos = document.querySelector('.btn-filtro-pill[data-tipo="todos"]');
    if (filtroAno === 'todos' && filtroDisciplina === 'todos') {
        document.querySelectorAll('.btn-filtro-pill').forEach(btn => btn.classList.remove('active'));
        if (btnTodos) btnTodos.classList.add('active');
    } else {
        if (btnTodos) btnTodos.classList.remove('active');
    }

    pesquisarJogos();
}

function pesquisarTermoPopular(termo) {
    const input = document.getElementById('input-pesquisa');
    if (!input) return;
    
    input.value = termo;
    pesquisarJogos();
    input.focus();
}

function pesquisarJogos() {
    const input = document.getElementById('input-pesquisa');
    const containerResultados = document.getElementById('resultados-pesquisa');
    const btnLimpar = document.getElementById('btn-limpar-pesquisa');
    if (!input || !containerResultados) return;

    if (btnLimpar) {
        btnLimpar.style.display = input.value.trim().length > 0 ? 'flex' : 'none';
    }

    const termo = normalizarTexto(input.value);

    // Se a caixa estiver vazia E nenhum filtro estiver ativo -> Pesquisas Populares
    if (termo === '' && filtroAno === 'todos' && filtroDisciplina === 'todos') {
        containerResultados.innerHTML = `
            <div class="pesquisa-vazia-container">
                <p class="pesquisa-vazia-titulo">Escreve o que queres brincar e aprender ou escolhe uma destas ideias:</p>
                <div class="pesquisas-populares-container">
					<button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Tabuada')">
						<img src="/SVG/tabuada.svg" alt="" class="icon-popular-svg" onerror="this.style.display='none'"> Tabuada
					</button>
					<button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Sopa de Letras')">
						<img src="/SVG/sopa_letras.svg" alt="" class="icon-popular-svg" onerror="this.style.display='none'"> Sopa de Letras
					</button>
					<button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Palavras Cruzadas')">
						<img src="/SVG/cruzadas.svg" alt="" class="icon-popular-svg" onerror="this.style.display='none'"> Palavras Cruzadas
					</button>
					<button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Animais')">
						<img src="/SVG/animais.svg" alt="" class="icon-popular-svg" onerror="this.style.display='none'"> Animais
					</button>
					<button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Relógio')">
						<img src="/SVG/relogio.svg" alt="" class="icon-popular-svg" onerror="this.style.display='none'"> Relógio
					</button>
					<button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Corpo Humano')">
						<img src="/SVG/corpo.svg" alt="" class="icon-popular-svg" onerror="this.style.display='none'"> Corpo Humano
					</button>
					<button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Escrita')">
						<img src="/SVG/escrita.svg" alt="" class="icon-popular-svg" onerror="this.style.display='none'"> Escrita
					</button>
					<button type="button" class="btn-populares-tag" onclick="pesquisarTermoPopular('Memória')">
						<img src="/SVG/memoria.svg" alt="" class="icon-popular-svg" onerror="this.style.display='none'"> Memória
					</button>
				</div>
            </div>
        `;
        return;
    }

    let resultados = [...catalogoJogos];

    // 1. Filtro de ANO
    if (filtroAno !== 'todos') {
        resultados = resultados.filter(jogo => {
            const anoNorm = normalizarTexto(jogo.ano || jogo.nivel || "");
            return anoNorm.includes(filtroAno);
        });
    }

    // 2. Filtro de DISCIPLINA
    if (filtroDisciplina !== 'todos') {
        resultados = resultados.filter(jogo => {
            const discNorm = normalizarTexto(jogo.disciplina || jogo.categoria || "");
            if (filtroDisciplina === 'matematica') return discNorm.includes('matematica') || discNorm.includes('mat');
            if (filtroDisciplina === 'portugues') return discNorm.includes('portugues') || discNorm.includes('port');
            if (filtroDisciplina === 'estudo-meio') return discNorm.includes('estudo') || discNorm.includes('meio');
            return true;
        });
    }

    // 3. Filtragem por TEXTO com CORTE RÍGIDO DE NOTA MÍNIMA
    if (termo !== '') {
        const jogosAvaliados = resultados.map(jogo => ({
            jogo: jogo,
            pontos: calcularPontuacao(jogo, termo)
        }));

        // Encontra a maior pontuação obtida
        const maiorPontuacao = Math.max(0, ...jogosAvaliados.map(j => j.pontos));

        // Se houver jogos com forte correspondência (>=15 pts), exige pelo menos 10 pts.
        // Caso contrário, exige no mínimo 8 pts. Tudo o que for lixo/coincidência vaga fica de fora.
        const notaCorte = maiorPontuacao >= 15 ? 10 : 8;

        resultados = jogosAvaliados
            .filter(item => item.pontos >= notaCorte)
            .sort((a, b) => b.pontos - a.pontos)
            .map(item => item.jogo);
    }

    renderizarResultados(resultados);
}

function renderizarResultados(lista) {
    const container = document.getElementById('resultados-pesquisa');
    const input = document.getElementById('input-pesquisa');
    if (!container) return;

    if (lista.length === 0) {
        container.innerHTML = `
            <div class="pesquisa-vazia-container">
                <p class="pesquisa-vazia-titulo">Nenhum jogo encontrado com esse termo! 🧐</p>
            </div>
        `;
        return;
    }

    const termoOriginal = input ? input.value.trim() : '';

    const totalHTML = `
        <div class="pesquisa-resumo-topo" style="grid-column: 1 / -1; margin-bottom: 8px; font-size: 0.9rem; color: #64748b; font-weight: 600;">
            Encontrados <span style="color: var(--cor-hover, #0091ff); font-weight: bold;">${lista.length}</span> jogo${lista.length > 1 ? 's' : ''}${termoOriginal ? ` para "<span style="color: var(--cor-hover, #0091ff); font-weight: bold;">${termoOriginal}</span>"` : ''}
        </div>
    `;

    const cartoesHTML = lista.map(jogo => `
        <a href="${jogo.link}" class="item-resultado-jogo">
            <img src="${jogo.icone}" alt="${jogo.nome || jogo.titulo}" class="thumb-jogo" onerror="this.src='/SVG/home.svg'">
            <div class="info-jogo">
                <h4>${jogo.nome || jogo.titulo}</h4>
                <div class="pesquisa-badges-jogo">
                    <span class="pesquisa-badge-ano">${jogo.ano || jogo.nivel || ''}</span>
                    ${jogo.disciplina || jogo.categoria ? `<span class="pesquisa-badge-disciplina">${jogo.disciplina || jogo.categoria}</span>` : ''}
                </div>
            </div>
        </a>
    `).join('');

    container.innerHTML = totalHTML + cartoesHTML;
}

async function abrirPesquisa() {
    const modal = document.getElementById('modal-pesquisa');
    if (!modal) return;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Garante o carregamento prévio do JSON
    await carregarCatalogo();

    // Reseta filtros e input
    filtroAno = 'todos';
    filtroDisciplina = 'todos';
    
    const input = document.getElementById('input-pesquisa');
    if (input) input.value = '';

    document.querySelectorAll('.btn-filtro-pill').forEach(btn => btn.classList.remove('active'));
    const btnTodos = document.querySelector('.btn-filtro-pill[data-tipo="todos"]');
    if (btnTodos) btnTodos.classList.add('active');

    pesquisarJogos();

    setTimeout(() => {
        if (input) input.focus();
    }, 100);
}

function fecharPesquisa() {
    const modal = document.getElementById('modal-pesquisa');
    if (modal) modal.style.display = 'none';
}

function fecharPesquisaFora(event) {
    if (event.target.id === 'modal-pesquisa') {
        fecharPesquisa();
    }
}