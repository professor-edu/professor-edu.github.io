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
        // Deteta se estamos na página inicial (raiz ou index.html)
        const caminho = window.location.pathname;
        const ePaginaInicial = caminho === '/' || caminho.endsWith('/index.html') || caminho === '';

        // HTML da Modal de Pesquisa (com a variável de cor temática)
        const modalHTML = `
            <div id="modal-pesquisa" class="modal-pesquisa-overlay" style="--cor-hover: ${corHoverAtual};" onclick="fecharPesquisaFora(event)">
                <div class="modal-pesquisa-container">
                    <div class="modal-pesquisa-header">
                        <div class="input-pesquisa-container">
                            <svg class="icon-lupa-pesquisa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" id="input-pesquisa" placeholder="O que queres jogar hoje?" autocomplete="off">
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
						
						<!-- Filtros de Ano (Escolhe no máximo 1) -->
						<button type="button" class="btn-filtro-pill" data-tipo="ano" onclick="selecionarFiltro('ano', 'pre', this)">Pré</button>
						<button type="button" class="btn-filtro-pill" data-tipo="ano" onclick="selecionarFiltro('ano', '1', this)">1º Ano</button>
						<button type="button" class="btn-filtro-pill" data-tipo="ano" onclick="selecionarFiltro('ano', '2', this)">2º Ano</button>
						<button type="button" class="btn-filtro-pill" data-tipo="ano" onclick="selecionarFiltro('ano', '3', this)">3º Ano</button>
						<button type="button" class="btn-filtro-pill" data-tipo="ano" onclick="selecionarFiltro('ano', '4', this)">4º Ano</button>
						
						<!-- Filtros de Disciplina (Escolhe no máximo 1) -->
						<button type="button" class="btn-filtro-pill" data-tipo="disciplina" onclick="selecionarFiltro('disciplina', 'matematica', this)">Matemática</button>
						<button type="button" class="btn-filtro-pill" data-tipo="disciplina" onclick="selecionarFiltro('disciplina', 'portugues', this)">Português</button>
						<button type="button" class="btn-filtro-pill" data-tipo="disciplina" onclick="selecionarFiltro('disciplina', 'estudo-meio', this)">Estudo do Meio</button>
					</div>
					
                    <div id="resultados-pesquisa" class="resultados-pesquisa">
                        <p class="pesquisa-vazia">Escreve o que queres brincar e aprender...</p>
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

        // Se NÃO for a página inicial, injeta a sidebar. A modal injeta SEMPRE.
        const htmlFinal = (ePaginaInicial ? '' : sidebarMenuHTML) + modalHTML;
        document.body.insertAdjacentHTML('beforeend', htmlFinal);
    });
})();

// Funções de Controlo
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
    "somar": ["adicao", "soma", "mais", "juntar", "contas", "calcular"],
    "soma": ["adicao", "somar", "mais", "juntar", "contas"],
    "adicao": ["soma", "somar", "mais", "juntar"],
    "subtrair": ["subtracao", "menos", "diferenca", "tirar", "contas"],
    "subtracao": ["subtrair", "menos", "diferenca", "tirar"],
    "multiplicar": ["multiplicacao", "vezes", "tabuada", "dobro", "triplo"],
    "multiplicacao": ["multiplicar", "vezes", "tabuada", "dobro", "triplo"],
    "tabuada": ["multiplicacao", "multiplicar", "vezes", "divisao", "contas"],
    "dividir": ["divisao", "partilhar", "metade", "terco", "quarto"],
    "divisao": ["dividir", "partilhar", "metade", "terco"],
    "contas": ["matematica", "adicao", "subtracao", "multiplicacao", "divisao", "operacoes", "calculo"],
    "numeros": ["algarismos", "contar", "ordens", "dezenas", "centenas", "unidades", "milhar"],
    "algarismos": ["numeros", "contar", "posicional", "unidades", "dezenas"],
    "horas": ["relogio", "tempo", "minutos", "segundos", "calendario"],
    "relogio": ["horas", "tempo", "minutos"],
    "dinheiro": ["euro", "euros", "moedas", "notas", "compras", "troco"],
    "euro": ["dinheiro", "euros", "moedas", "notas"],
    "fracoes": ["fracao", "metade", "quarto", "divisao", "partes"],
    "formas": ["geometria", "figuras", "triangulo", "quadrado", "circulo", "retangulo"],
    "solidos": ["geometria", "cubo", "esfera", "cilindro", "piramide", "cone", "paralelepipedo"],
    "geometria": ["formas", "figuras", "solidos", "poligonos", "linhas"],
    "problemas": ["raciocinio", "desafios", "calculo"],

    // --- PORTUGUÊS ---
    "abc": ["alfabeto", "letras", "portugues", "abecedario"],
    "alfabeto": ["abc", "letras", "abecedario", "vogais", "consoantes"],
    "letras": ["alfabeto", "abc", "vogais", "consoantes", "silabas", "palavras"],
    "ler": ["leitura", "portugues", "texto", "palavras", "historias"],
    "leitura": ["ler", "portugues", "texto", "palavras", "compreenso"],
    "escrever": ["escrita", "ditado", "ortografia", "grafia"],
    "silabas": ["silaba", "divisao silabica", "palavras", "acentuacao", "tonica"],
    "gramatica": ["verbo", "substantivo", "nome", "adjetivo", "plural", "singular", "pontuacao"],
    "nomes": ["substantivos", "gramatica", "proprio", "comum"],
    "verbos": ["acao", "gramatica", "tempo verbal", "passado", "presente", "futuro"],
    "opostos": ["antonimos", "contrario"],
	"oposto": ["antonimos", "contrario"],
	"mesmo": ["sinónimos", "igual"],
    "antonimos": ["opostos", "contrario"],
    "sinonimos": ["iguais", "semelhantes", "significado"],
    "ditado": ["ortografia", "escrita", "palavras"],

    // --- ESTUDO DO MEIO ---
    "corpo": ["corpo humano", "orgaos", "esqueleto", "ossos", "sentidos", "saude", "higiene"],
    "animais": ["bichos", "fauna", "vertebrados", "invertebrados", "mamiferos", "aves", "repteis"],
    "plantas": ["flora", "arvores", "flores", "vegetacao", "raiz", "folhas"],
    "mapa": ["portugal", "distritos", "geografia", "paises", "continentes"],
    "portugal": ["mapa", "historia", "bandeira", "distritos", "freguesias", "concelhos"],
    "transportes": ["meios de transporte", "transito", "veiculos", "seguranca rodoviaria"],
    "profissoes": ["trabalho", "oficios", "servicos"],
    "estacoes": ["primavera", "verao", "outono", "inverno", "tempo", "clima"],
    "calendario": ["dias", "meses", "ano", "semana", "datas"],
    "familia": ["arvore genealogica", "parentes"],

    // --- PRÉ-ESCOLAR & LÚDICO ---
    "cores": ["colors", "pintar", "desenhar", "colorir"],
    "puzzles": ["quebra-cabecas", "puzzle", "peças"],
    "memoria": ["jogo da memoria", "pares", "concentracao"],
    "desenhar": ["pintar", "cores", "arte", "colorir"]
};


function normalizarTexto(texto) {
    if (!texto) return "";
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Helper: Calcula o número de diferenças/erros entre duas palavras (Algoritmo de Levenshtein)
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
                    matriz[i - 1][j - 1] + 1, // Substituição
                    matriz[i][j - 1] + 1,     // Inserção
                    matriz[i - 1][j] + 1      // Remoção
                );
            }
        }
    }
    return matriz[b.length][a.length];
}

function calcularPontuacao(jogo, termo) {
    let pontos = 0;
    const nomeNorm = normalizarTexto(jogo.nome);
    const anoNorm = normalizarTexto(jogo.ano);
    const discNorm = normalizarTexto(jogo.disciplina);

    let tagsNorm = [];
    if (Array.isArray(jogo.tags)) {
        tagsNorm = jogo.tags.map(t => normalizarTexto(t));
    } else if (typeof jogo.tags === 'string') {
        tagsNorm = [normalizarTexto(jogo.tags)];
    }

    // Termo original + possíveis sinónimos
    const termosParaProcurar = [termo, ...(SINONIMOS_PESQUISA[termo] || [])];
    const palavrasNome = nomeNorm.split(/\s+/);

    termosParaProcurar.forEach(t => {
        if (!t) return;

        let encontrouNoNome = false;

        // 1. Relevância no NOME (Peso Máximo)
        if (nomeNorm === t) {
            pontos += 25;
            encontrouNoNome = true;
        } else if (nomeNorm.startsWith(t)) {
            pontos += 18;
            encontrouNoNome = true;
        } else if (nomeNorm.includes(t)) {
            pontos += 12;
            encontrouNoNome = true;
        }

        // 1b. Tolerância a Erros no NOME (Fuzzy Search - ativado para palavras >= 4 letras)
        if (!encontrouNoNome && t.length >= 4) {
            palavrasNome.forEach(palavra => {
                if (palavra.length >= 4) {
                    const erros = calcularDistanciaErros(palavra, t);
                    if (erros === 1) pontos += 8;      // Ex: "adisaom" ➔ "adicao" (1 erro)
                    else if (erros === 2) pontos += 4; // Ex: "alfavero" ➔ "alfabeto" (2 erros)
                }
            });
        }

        // 2. Relevância nas TAGS (Peso Médio)
        tagsNorm.forEach(tag => {
            let encontrouNaTag = false;

            if (tag === t) {
                pontos += 10;
                encontrouNaTag = true;
            } else if (tag.includes(t)) {
                pontos += 5;
                encontrouNaTag = true;
            }

            // 2b. Tolerância a Erros nas TAGS
            if (!encontrouNaTag && t.length >= 4 && tag.length >= 4) {
                const erros = calcularDistanciaErros(tag, t);
                if (erros === 1) pontos += 5;
                else if (erros === 2) pontos += 2;
            }
        });

        // 3. Relevância na DISCIPLINA
        if (discNorm.includes(t)) pontos += 6;

        // 4. Relevância no ANO
        if (anoNorm.includes(t)) pontos += 4;
    });

    return pontos;
}

// Função para apagar o texto digitado
function limparPesquisa() {
    const input = document.getElementById('input-pesquisa');
    if (input) {
        input.value = '';
        input.focus();
        pesquisarJogos();
    }
}


// Estado do filtro ativo
let filtroAtivo = 'todos';
let filtroAno = 'todos';
let filtroDisciplina = 'todos';

function selecionarFiltro(tipo, valor, elemento) {
    if (tipo === 'todos') {
        // Reseta ambos os filtros
        filtroAno = 'todos';
        filtroDisciplina = 'todos';
        document.querySelectorAll('.btn-filtro-pill').forEach(btn => btn.classList.remove('active'));
        elemento.classList.add('active');
    } else if (tipo === 'ano') {
        // Se clicar no ano que já está ativo, desativa-o
        if (filtroAno === valor) {
            filtroAno = 'todos';
            elemento.classList.remove('active');
        } else {
            filtroAno = valor;
            document.querySelectorAll('.btn-filtro-pill[data-tipo="ano"]').forEach(btn => btn.classList.remove('active'));
            elemento.classList.add('active');
        }
    } else if (tipo === 'disciplina') {
        // Se clicar na disciplina que já está ativa, desativa-a
        if (filtroDisciplina === valor) {
            filtroDisciplina = 'todos';
            elemento.classList.remove('active');
        } else {
            filtroDisciplina = valor;
            document.querySelectorAll('.btn-filtro-pill[data-tipo="disciplina"]').forEach(btn => btn.classList.remove('active'));
            elemento.classList.add('active');
        }
    }

    // Atualiza o estado visual do botão "Todos"
    const btnTodos = document.querySelector('.btn-filtro-pill[data-tipo="todos"]');
    if (filtroAno === 'todos' && filtroDisciplina === 'todos') {
        document.querySelectorAll('.btn-filtro-pill').forEach(btn => btn.classList.remove('active'));
        if (btnTodos) btnTodos.classList.add('active');
    } else {
        if (btnTodos) btnTodos.classList.remove('active');
    }

    // Executa a pesquisa/filtragem imediatamente
    pesquisarJogos();
}


// Atualiza a função pesquisarJogos para integrar a filtragem por categoria
function pesquisarJogos() {
    const input = document.getElementById('input-pesquisa');
    const containerResultados = document.getElementById('resultados-pesquisa');
    const btnLimpar = document.getElementById('btn-limpar-pesquisa');
    if (!input || !containerResultados) return;

    if (btnLimpar) {
        btnLimpar.style.display = input.value.trim().length > 0 ? 'flex' : 'none';
    }

    const termo = normalizarTexto(input.value.trim());

    // Se a barra estiver vazia E nenhum filtro estiver ativo, mostra a mensagem inicial
    if (termo === '' && filtroAno === 'todos' && filtroDisciplina === 'todos') {
        containerResultados.innerHTML = '<p class="pesquisa-vazia">Escreve o que queres brincar e aprender...</p>';
        return;
    }

    // 1. Começa com a lista completa do catálogo
    let resultados = [...catalogoJogos];

    // 2. Aplica Filtro de ANO (se ativo)
    if (filtroAno !== 'todos') {
        resultados = resultados.filter(jogo => {
            const anoNorm = normalizarTexto(jogo.ano);
            return anoNorm.includes(filtroAno);
        });
    }

    // 3. Aplica Filtro de DISCIPLINA (se ativa)
    if (filtroDisciplina !== 'todos') {
        resultados = resultados.filter(jogo => {
            const discNorm = normalizarTexto(jogo.disciplina);
            if (filtroDisciplina === 'matematica') return discNorm.includes('matematica') || discNorm.includes('mat');
            if (filtroDisciplina === 'portugues') return discNorm.includes('portugues') || discNorm.includes('port');
            if (filtroDisciplina === 'estudo-meio') return discNorm.includes('estudo') || discNorm.includes('meio');
            return true;
        });
    }

    // 4. Se houver TEXTO digitado, calcula relevância e ordena os resultados filtrados
    if (termo !== '') {
        resultados = resultados
            .map(jogo => ({
                jogo: jogo,
                pontos: calcularPontuacao(jogo, termo)
            }))
            .filter(item => item.pontos > 0)
            .sort((a, b) => b.pontos - a.pontos)
            .map(item => item.jogo);
    }

    // Renderiza a lista final de jogos
    renderizarResultados(resultados);
}

function renderizarResultados(lista) {
    const container = document.getElementById('resultados-pesquisa');
    const input = document.getElementById('input-pesquisa');
    if (!container) return;

    if (lista.length === 0) {
        container.innerHTML = `
            <p class="pesquisa-vazia">
                Nenhum jogo encontrado com esse termo!
                <img src="/SVG/sem_resultados.svg" alt="Sem resultados" class="icon-pesquisa-vazia">
            </p>
        `;
        return;
    }

    const termoOriginal = input ? input.value.trim() : '';

    // Cabeçalho com o contador e o termo destacados com a cor do tema atual
    const totalHTML = `
        <div class="pesquisa-resumo-topo" style="grid-column: 1 / -1; margin-bottom: 8px; font-size: 0.9rem; color: #64748b; font-weight: 600;">
            Encontrados <span style="color: var(--cor-hover, #0091ff); font-weight: bold;">${lista.length}</span> jogo${lista.length > 1 ? 's' : ''}${termoOriginal ? ` para "<span style="color: var(--cor-hover, #0091ff); font-weight: bold;">${termoOriginal}</span>"` : ''}
        </div>
    `;

    const cartoesHTML = lista.map(jogo => `
        <a href="${jogo.link}" class="item-resultado-jogo">
            <img src="${jogo.icone}" alt="${jogo.nome}" class="thumb-jogo" onerror="this.src='/SVG/home.svg'">
            <div class="info-jogo">
                <h4>${jogo.nome}</h4>
                <div class="pesquisa-badges-jogo">
                    <span class="pesquisa-badge-ano">${jogo.ano}</span>
                    ${jogo.disciplina ? `<span class="pesquisa-badge-disciplina">${jogo.disciplina}</span>` : ''}
                </div>
            </div>
        </a>
    `).join('');

    container.innerHTML = totalHTML + cartoesHTML;
}

function abrirPesquisa() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('active')) {
        toggleMenu();
    }
    
    const modal = document.getElementById('modal-pesquisa');
    const input = document.getElementById('input-pesquisa');
    
    if (modal) {
        modal.style.display = 'flex';
        carregarCatalogo();
        
        if (input) {
            setTimeout(() => input.focus(), 100);
            input.oninput = pesquisarJogos;
        }
    }
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