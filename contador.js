import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, runTransaction } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// =========================================================================
// CONFIGURAÇÃO DE POSIÇÃO E MARGENS (AJUSTA OS PIXÉIS AQUI)
// =========================================================================
const CONFIG_POSICAO = {
  // Telemóvel Vertical (Portrait)
  vertical: {
    top: '15px',
    right: '12px',
    bottom: 'auto',
    left: 'auto'
  },
  // Ecrã Horizontal / PC Largo (Landscape)
  horizontal: {
    top: '45px',      // Ajusta a distância do topo
    right: '50px',    // Ajusta a distância da direita
    bottom: 'auto',   // Usa '15px' se quiseres encostar em baixo
    left: 'auto'      // Usa '15px' se quiseres encostar à esquerda
  }
};

// 1. Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIigMWzyJ16yfayXHItv5lpgDS0W6FkbA",
  authDomain: "brincar-e-aprender-ecdf6.firebaseapp.com",
  databaseURL: "https://brincar-e-aprender-ecdf6-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "brincar-e-aprender-ecdf6",
  storageBucket: "brincar-e-aprender-ecdf6.firebasestorage.app",
  messagingSenderId: "654754093179",
  appId: "1:654754093179:web:ce6eb9539865fa16b5aade"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Ícone SVG: Taça/Troféu
const iconeTacaSVG = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2b4c7e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block; flex-shrink: 0;">
  <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"/>
  <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"/>
  <path d="M4 22h16"/>
  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" fill="#d0e1fd"/>
</svg>`;

// Função para converter o objeto de posição em regras CSS
function gerarCSSPosicao(pos) {
  return `
    top: ${pos.top || 'auto'};
    right: ${pos.right || 'auto'};
    bottom: ${pos.bottom || 'auto'};
    left: ${pos.left || 'auto'};
  `;
}

// 2. Extrai o nome do jogo a partir da tag <title>
function obterNomeJogo() {
  let titulo = document.title ? document.title.trim() : "";

  if (titulo && titulo.toLowerCase() !== "inicio" && titulo.toLowerCase() !== "home") {
    return titulo.replace(/[.#$\[\]\/]/g, "").trim();
  }

  let caminho = window.location.pathname.replace(/\/$/, ""); 
  let partes = caminho.split('/').filter(Boolean);
  if (partes.length === 0) return 'inicio';

  let ultimoSegmento = partes[partes.length - 1].replace('.html', '').trim();
  if (ultimoSegmento.toLowerCase() === 'index' || ultimoSegmento.toLowerCase() === 'inicio') {
    return partes.length > 1 ? partes[partes.length - 2] : 'inicio';
  }

  return ultimoSegmento;
}

// 3. Injeta o indicador flutuante com suporte a píxeis customizáveis
function injetarBadgeFlutuante(totalVisitas) {
  const desenhar = () => {
    if (document.getElementById("badge-contador-flutuante")) return;

    // Criar e injetar os estilos CSS dinamicamente
    const styleEl = document.createElement("style");
    styleEl.id = "estilos-badge-contador";
    styleEl.innerHTML = `
      #badge-contador-flutuante {
        position: fixed;
        z-index: 99999;
        background-color: #ffffff;
        color: #2b4c7e;
        padding: 6px 14px;
        border-radius: 12px;
        font-family: 'Segoe UI', Roboto, Arial, sans-serif;
        font-size: 13px;
        font-weight: 700;
        box-shadow: 0 3px 10px rgba(43, 76, 126, 0.12);
        border: 2px solid #d0e1fd;
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: none;
        user-select: none;
        transition: opacity 0.4s ease, transform 0.4s ease;
      }

      /* MODO VERTICAL (Portrait / Telemóvel em pé) */
      @media (orientation: portrait) {
        #badge-contador-flutuante {
          ${gerarCSSPosicao(CONFIG_POSICAO.vertical)}
        }
        #badge-contador-flutuante .texto-extenso { display: none !important; }
        #badge-contador-flutuante .texto-curto { display: inline !important; }
      }

      /* MODO HORIZONTAL (Landscape / PC e Telemóvel deitado) */
      @media (orientation: landscape) {
        #badge-contador-flutuante {
          ${gerarCSSPosicao(CONFIG_POSICAO.horizontal)}
        }
        #badge-contador-flutuante .texto-extenso { display: inline !important; }
        #badge-contador-flutuante .texto-curto { display: none !important; }
      }
    `;
    document.head.appendChild(styleEl);

    // Criar o elemento do badge
    const badge = document.createElement("div");
    badge.id = "badge-contador-flutuante";

    const totalFormatado = totalVisitas.toLocaleString('pt-PT');

    badge.innerHTML = `
      ${iconeTacaSVG}
      <span class="texto-curto">x ${totalFormatado}</span>
      <span class="texto-extenso">${totalFormatado} jogadas</span>
    `;

    document.body.appendChild(badge);

    // Esconde suavemente ao primeiro clique no ecrã
    document.addEventListener("click", () => {
      if (badge) {
        badge.style.opacity = "0";
        badge.style.transform = "translateY(-10px)";
        setTimeout(() => { badge.remove(); }, 400);
      }
    }, { once: true });
  };

  if (document.body) {
    desenhar();
  } else {
    window.addEventListener("DOMContentLoaded", desenhar);
  }
}

// 4. Registo e atualização no Firebase (Jogo individual + Total do site)
const idJogo = obterNomeJogo();

if (idJogo) {
  const contadorJogoRef = ref(db, `estatisticas/jogos/${idJogo}/visitas`);
  const totalGeralRef = ref(db, `estatisticas/total_geral`);

  // Incrementa o contador do jogo individual
  runTransaction(contadorJogoRef, (valorAtual) => {
    return (valorAtual || 0) + 1;
  }).then((result) => {
    if (result.committed) {
      injetarBadgeFlutuante(result.snapshot.val());
    }
  });

  // Incrementa o total acumulado do site
  runTransaction(totalGeralRef, (valorAtual) => {
    return (valorAtual || 0) + 1;
  });
}