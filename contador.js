import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, runTransaction } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

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

// Ícone SVG limpo (Comando de jogo em vetor)
const iconeJogoSVG = `
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2c3e50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
  <rect x="2" y="6" width="20" height="12" rx="5"/>
  <path d="M6 12h4M8 10v4"/>
  <circle cx="15" cy="13" r="1" fill="#2c3e50"/>
  <circle cx="18" cy="11" r="1" fill="#2c3e50"/>
</svg>`;

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

// 3. Injeta o indicador com SVG e comportamento inteligente
function injetarBadgeVisual(totalVisitas) {
  const desenhar = () => {
    let badge = document.getElementById("badge-contador-flutuante");
    
    if (!badge) {
      badge = document.createElement("div");
      badge.id = "badge-contador-flutuante";

      // Estilo elegante e responsivo
      Object.assign(badge.style, {
        position: "fixed",
        top: "12px",
        right: "16px",
        zIndex: "99999",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        color: "#2c3e50",
        padding: "5px 12px",
        borderRadius: "20px",
        fontFamily: "Arial, sans-serif",
        fontSize: "12px",
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        pointerEvents: "none",
        transition: "opacity 0.4s ease, transform 0.4s ease"
      });

      document.body.appendChild(badge);

      // DESAPARECER AO INICIAR O JOGO:
      // Ouve cliques na página. Se o utilizador clicar em botões/elementos de início, esconde o balão
      document.addEventListener("click", (e) => {
        const elementoClicado = e.target;
        // Se clicar num botão, num cartão com ação ou num elemento de menu/nível
        if (
          elementoClicado.tagName === "BUTTON" ||
          elementoClicado.closest("button") ||
          elementoClicado.getAttribute("onclick") ||
          elementoClicado.closest("[onclick]") ||
          elementoClicado.classList.contains("btn")
        ) {
          badge.style.opacity = "0";
          badge.style.transform = "translateY(-10px)";
          setTimeout(() => { badge.style.display = "none"; }, 400);
        }
      });
    }

    badge.innerHTML = `${iconeJogoSVG} <span>${totalVisitas.toLocaleString('pt-PT')} jogadas</span>`;
  };

  if (document.body) {
    desenhar();
  } else {
    window.addEventListener("DOMContentLoaded", desenhar);
  }
}

// 4. Executa a contagem
const idJogo = obterNomeJogo();

if (idJogo) {
  const contadorRef = ref(db, `estatisticas/jogos/${idJogo}/visitas`);

  runTransaction(contadorRef, (valorAtual) => {
    return (valorAtual || 0) + 1;
  }).then((result) => {
    if (result.committed) {
      injetarBadgeVisual(result.snapshot.val());
    }
  }).catch((error) => {
    console.error("Erro ao comunicar com o Firebase:", error);
  });
}