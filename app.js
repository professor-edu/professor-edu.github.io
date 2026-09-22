import { CATALOGO_JOGOS } from './catalogo-jogos.js';

// 1. Importar SDKs do Firebase (módulos oficiais JS v10)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getDatabase, ref, get } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';

// 2. Configuração do projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIigMWzyJ16yfayXHItv5lpgDS0W6FkbA",
  authDomain: "brincar-e-aprender-ecdf6.firebaseapp.com",
  databaseURL: "https://brincar-e-aprender-ecdf6-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "brincar-e-aprender-ecdf6",
  storageBucket: "brincar-e-aprender-ecdf6.firebasestorage.app",
  messagingSenderId: "654754093179",
  appId: "1:654754093179:web:ce6eb9539865fa16b5aade"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.addEventListener('DOMContentLoaded', () => {
  const btnTop = document.getElementById('btn-top-jogos');
  const modal = document.getElementById('modal-top-jogos');
  const btnFechar = document.getElementById('fechar-modal-top');
  const gridContainer = document.getElementById('grid-top-jogos');

  // Eventos para Abrir e Fechar o Pop-up
  if (btnTop) {
    btnTop.addEventListener('click', () => {
      modal.style.display = 'flex';
      carregarTopJogos();
    });
  }

  if (btnFechar) {
    btnFechar.addEventListener('click', fecharModal);
  }

  // Fechar ao clicar fora do conteúdo do modal
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) fecharModal();
    });
  }

  function fecharModal() {
    modal.style.display = 'none';
  }

  // Função Principal: Buscar dados ao Firebase e construir a grelha
  async function carregarTopJogos() {
    try {
      gridContainer.innerHTML = `
        <p class="loading-texto">
          A carregar os campeões... <img src="SVG/TOP.svg" alt="Top" class="icon-svg">
        </p>`;

      // 1. Ler estatísticas reais do nó 'estatisticas/jogos' no Firebase
      const estatisticas = await obterEstatisticasFirebase(); 

      // 2. Processar a partir das chaves ordenadas do Firebase (idêntico ao Admin) e associar ao Catálogo
      const top10 = construirTopJogos(estatisticas, CATALOGO_JOGOS);

      renderizarGridTop(top10);

    } catch (erro) {
      console.error("Erro ao carregar o top jogos:", erro);
      gridContainer.innerHTML = `<p class="erro-texto">Não foi possível carregar o ranking de jogos.</p>`;
    }
  }

	// Renderizar o HTML dos Cartões no Modal com as cores por ano escolar
  function renderizarGridTop(jogos) {
    if (jogos.length === 0) {
      gridContainer.innerHTML = `<p class="vazio-texto">Ainda não há dados de jogos realizados.</p>`;
      return;
    }

    gridContainer.innerHTML = jogos.map((jogo, index) => {
      const posicao = index + 1;
      let badgeColor = '#ffc107'; // Ouro (#1)

      if (posicao === 2) badgeColor = '#c0c0c0'; // Prata
      if (posicao === 3) badgeColor = '#cd7f32'; // Bronze
      if (posicao > 3) badgeColor = '#ffffff';  // Neutro/Branco com destaque

      // Identifica o código do ano ("pre", "1", "2", "3", "4") para atribuir a classe do CSS
      const codigoAno = obterCodigoAno(jogo.ano) || obterCodigoAno(jogo.link);
      const classeAno = codigoAno ? `ano-${codigoAno}` : '';

      return `
        <a href="${jogo.link}" class="card-top-jogo ${classeAno}">
          <span class="badge-ranking" style="background-color: ${badgeColor};">
            #${posicao}
          </span>
          <img src="${jogo.icone}" alt="${jogo.nome}" class="capa-jogo" onerror="this.src='SVG/TOP.svg'">
          <div class="titulo-jogo">${jogo.nome}</div>
          <div class="visitas-jogo">${jogo.cliques} jogadas</div>
        </a>
      `;
    }).join('');
  }
});

// Função para procurar a contagem na BD em 'estatisticas/jogos'
async function obterEstatisticasFirebase() {
  try {
    const dbRef = ref(db, 'estatisticas/jogos');
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.warn("O nó 'estatisticas/jogos' está vazio no Firebase.");
      return {};
    }
  } catch (erro) {
    console.error("Erro ao conectar ao Firebase Realtime Database:", erro);
    return {};
  }
}

// Converte qualquer texto numa lista de palavras limpas (remove ?, !, acentos, emojis e espaços)
function extrairTokens(texto) {
  if (!texto) return [];
  return texto
    .toString()
    .toLowerCase()
    .replace(/\u00a0/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, " ")
    .split(/\s+/)
    .filter(t => t.length > 0);
}

// Identifica o código do ano escolar ("pre", "1", "2", "3", "4")
function obterCodigoAno(texto) {
  if (!texto) return "";
  const tokens = extrairTokens(texto);
  const str = tokens.join(" ");

  if (tokens.includes("pre") || str.includes("prescolar") || str.includes("pre escolar")) return "pre";
  if (tokens.includes("1") || tokens.includes("1o") || tokens.includes("1ano")) return "1";
  if (tokens.includes("2") || tokens.includes("2o") || tokens.includes("2ano")) return "2";
  if (tokens.includes("3") || tokens.includes("3o") || tokens.includes("3ano")) return "3";
  if (tokens.includes("4") || tokens.includes("4o") || tokens.includes("4ano")) return "4";
  return "";
}

// Extrai o valor numérico da propriedade 'visitas'
function extrairValorOuContagem(val) {
  if (typeof val === 'number') return val;
  if (typeof val === 'object' && val !== null) {
    if (val.visitas !== undefined) return Number(val.visitas);
    if (val.cliques !== undefined) return Number(val.cliques);
    if (val.total !== undefined) return Number(val.total);
  }
  return 0;
}

// Constrói o TOP 10 a partir das entradas reais do Firebase (igual ao Admin) e cruza com o catálogo
function construirTopJogos(estatisticas, catalogo) {
  if (!estatisticas || typeof estatisticas !== 'object') return [];

  // 1. Converter o Firebase num array ordenado por jogadas (tal e qual o admin.html)
  const entradasFirebase = Object.keys(estatisticas)
    .map(chave => ({
      chave: chave,
      visitas: extrairValorOuContagem(estatisticas[chave])
    }))
    .filter(item => item.visitas > 0)
    .sort((a, b) => b.visitas - a.visitas);

  const jogosUsados = new Set();
  const top10 = [];

  for (const entrada of entradasFirebase) {
    if (top10.length >= 10) break;

    const fbAno = obterCodigoAno(entrada.chave);
    const fbTokens = extrairTokens(entrada.chave);
    const fbPalavras = fbTokens.filter(t => !["pre", "escolar", "ano", "1", "2", "3", "4"].includes(t));

    let melhorIndice = -1;
    let melhorPontuacao = -1;

    for (let i = 0; i < catalogo.length; i++) {
      if (jogosUsados.has(i)) continue;

      const jogo = catalogo[i];
      const catAno = obterCodigoAno(jogo.ano) || obterCodigoAno(jogo.link);

      // Se ambos tiverem o ano definido e forem diferentes (ex: Pré-Escolar vs 2º Ano), descarta
      if (fbAno && catAno && fbAno !== catAno) continue;

      const nameTokens = extrairTokens(jogo.nome);
      const linkTokens = extrairTokens(jogo.link);
      const allCatTokens = new Set([...nameTokens, ...linkTokens]);

      // Quantas palavras da chave do Firebase existem no nome ou link deste jogo no catálogo
      const correspondencias = fbPalavras.filter(w => allCatTokens.has(w)).length;
      if (correspondencias === 0) continue;

      const percentualAcerto = correspondencias / fbPalavras.length;
      const acertosNome = fbPalavras.filter(w => nameTokens.includes(w)).length;
      const acertosLink = fbPalavras.filter(w => linkTokens.includes(w)).length;
      const diferencaTamanho = Math.abs(nameTokens.length - fbPalavras.length);

      const pontuacao = (percentualAcerto * 100) + (acertosNome * 20) + (acertosLink * 30) - (diferencaTamanho * 5);

      if (pontuacao > melhorPontuacao) {
        melhorPontuacao = pontuacao;
        melhorIndice = i;
      }
    }

    if (melhorIndice !== -1 && melhorPontuacao > 20) {
      jogosUsados.add(melhorIndice);
      const jogoCorrespondente = catalogo[melhorIndice];
      top10.push({
        ...jogoCorrespondente,
        cliques: entrada.visitas
      });
    }
  }

  return top10;
}