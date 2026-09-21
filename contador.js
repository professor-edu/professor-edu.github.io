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

// Ícone SVG: Taça/Troféu (Opção 3) adaptada às cores suaves (Opção 1)
const iconeTacaSVG = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2b4c7e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
  <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"/>
  <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"/>
  <path d="M4 22h16"/>
  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" fill="#d0e1fd"/>
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

// 3. Injeta o indicador flutuante personalizado
function injetarBadgeFlutuante(totalVisitas) {
  const desenhar = () => {
    let badge = document.getElementById("badge-contador-flutuante");
    
    if (!badge) {
      badge = document.createElement("div");
      badge.id = "badge-contador-flutuante";

      Object.assign(badge.style, {
        position: "fixed",
        top: "12px",
        right: "16px",
        zIndex: "99999",
        backgroundColor: "#ffffff",
        color: "#2b4c7e",
        padding: "6px 14px",
        borderRadius: "12px", // Cantos da Opção 3
        fontFamily: "'Segoe UI', Roboto, Arial, sans-serif",
        fontSize: "13px",
        fontWeight: "700",
        boxShadow: "0 3px 10px rgba(43, 76, 126, 0.12)", // Sombra da Opção 1
        border: "2px solid #d0e1fd",                      // Borda da Opção 1
        display: "flex",
        alignItems: "center",
        gap: "8px",
        pointerEvents: "none",                           // Não afeta cliques nem scroll
        userSelect: "none",
        transition: "opacity 0.4s ease, transform 0.4s ease"
      });

      document.body.appendChild(badge);

      // Esconde suavemente ao primeiro clique no ecrã
      document.addEventListener("click", () => {
        if (badge) {
          badge.style.opacity = "0";
          badge.style.transform = "translateY(-10px)";
          setTimeout(() => { badge.style.display = "none"; }, 400);
        }
      }, { once: true });
    }

    badge.innerHTML = `${iconeTacaSVG} <span>${totalVisitas.toLocaleString('pt-PT')} jogadas</span>`;
  };

  if (document.body) {
    desenhar();
  } else {
    window.addEventListener("DOMContentLoaded", desenhar);
  }
}

// 4. Registo e atualização no Firebase
const idJogo = obterNomeJogo();

if (idJogo) {
  const contadorRef = ref(db, `estatisticas/jogos/${idJogo}/visitas`);

  runTransaction(contadorRef, (valorAtual) => {
    return (valorAtual || 0) + 1;
  }).then((result) => {
    if (result.committed) {
      injetarBadgeFlutuante(result.snapshot.val());
    }
  }).catch((error) => {
    console.error("Erro ao comunicar com o Firebase:", error);
  });
}