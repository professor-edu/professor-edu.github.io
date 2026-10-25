(function() {
    // 1. Injeta o CSS automaticamente no <head>
    const cssPath = '/css/sidebar.css';
    if (!document.querySelector(`link[href="${cssPath}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        document.head.appendChild(link);
    }

    // 2. Deteta a cor do ano isolando a primeira pasta da URL (evita falsos positivos em nomes de jogos como "jogo-2")
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const primeiraPasta = pathSegments[0] || '';
    let corHoverAtual = 'var(--cor-inicio, #ff4757)'; // Cor padrão (Início)

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
        const sidebarHTML = `
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
                        <img src="/SVG/ano3.svg" alt="" class="icon-svg-menu" style="width:24px; height:24px;" onerror="this.style.display='none'">
                        <span>Pesquisar jogo...</span>
                    </button>
                </div>
            </nav>

            <div id="modal-pesquisa" class="modal-pesquisa-overlay" onclick="fecharPesquisaFora(event)">
                <div class="modal-pesquisa-container">
                    <div class="modal-pesquisa-header">
					<div class="input-pesquisa-container">
						<!-- Ícone de Lupa / Pesquisa -->
						<svg class="icon-lupa-pesquisa" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>

						<input type="text" id="input-pesquisa" placeholder="O que queres jogar hoje?" autocomplete="off">

						<!-- Mini botão "X" para apagar texto (aparece apenas quando há texto) -->
						<button id="btn-limpar-pesquisa" class="btn-limpar-texto" onclick="limparPesquisa()" title="Apagar texto" type="button">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
					</div>

					<!-- Botão principal de fechar a modal -->
					<button class="btn-fechar-pesquisa" onclick="fecharPesquisa()" title="Fechar janela">✕</button>
				</div>
                    <div id="resultados-pesquisa" class="resultados-pesquisa">
                        <p class="pesquisa-vazia">Digita algo para procurares nos jogos...</p>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', sidebarHTML);
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

// Função para remover acentos e maiúsculas (ex: "Atenção" -> "atencao")
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Função para apagar o texto digitado
function limparPesquisa() {
    const input = document.getElementById('input-pesquisa');
    if (input) {
        input.value = '';
        input.focus();
        pesquisarJogos(); // Atualiza os resultados (volta ao estado inicial)
    }
}

// Atualiza a função pesquisarJogos existente para gerir a visibilidade do botão limpar
function pesquisarJogos() {
    const input = document.getElementById('input-pesquisa');
    const containerResultados = document.getElementById('resultados-pesquisa');
    const btnLimpar = document.getElementById('btn-limpar-pesquisa');
    if (!input || !containerResultados) return;

    // Mostra o mini "X" se houver texto, esconde se estiver vazio
    if (btnLimpar) {
        btnLimpar.style.display = input.value.trim().length > 0 ? 'flex' : 'none';
    }

    const termo = normalizarTexto(input.value.trim());

    if (termo === '') {
        containerResultados.innerHTML = '<p class="pesquisa-vazia">Digita algo para procurares nos jogos...</p>';
        return;
    }

    const resultados = catalogoJogos.filter(jogo => {
        const nome = normalizarTexto(jogo.nome);
        const ano = normalizarTexto(jogo.ano);
        const disciplina = normalizarTexto(jogo.disciplina);

        let tags = [];
        if (Array.isArray(jogo.tags)) {
            tags = jogo.tags.map(t => normalizarTexto(t));
        } else if (typeof jogo.tags === 'string') {
            tags = [normalizarTexto(jogo.tags)];
        }

        return nome.includes(termo) || 
               ano.includes(termo) || 
               disciplina.includes(termo) || 
               tags.some(tag => tag.includes(termo));
    });

    renderizarResultados(resultados);
}

function renderizarResultados(lista) {
    const container = document.getElementById('resultados-pesquisa');

    if (lista.length === 0) {
        container.innerHTML = '<p class="pesquisa-vazia">Nenhum jogo encontrado com esse termo. 🔍</p>';
        return;
    }

    // Cabeçalho com o total de jogos
    const totalHTML = `
        <div class="pesquisa-resumo-topo" style="grid-column: 1 / -1; margin-bottom: 5px; font-size: 0.85rem; color: #64748b; font-weight: 600;">
            Encontrados ${lista.length} jogo${lista.length > 1 ? 's' : ''}:
        </div>
    `;

    // Placas dos jogos
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