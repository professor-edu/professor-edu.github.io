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

// Ícone SVG limpo (Comando de jogo)
const iconeJogoSVG = `
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;">
  <rect x="2" y="6" width="20" height="12" rx="5"/>
  <path d="M6 12h4M8 10v4"/>
  <circle cx="15" cy="13" r="1" fill="currentColor"/>
  <circle cx="18" cy="11" r="1" fill="currentColor"/>
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

// 3. Injeta o contador dentro do menu inicial (com suporte para todos os layouts)
function injetarContadorNoMenu(totalVisitas) {
  const desenhar = () => {
    if (document.getElementById("contador-inline-game")) return;

    const badge = document.createElement("div");
    badge.id = "contador-inline-game";

    Object.assign(badge.style, {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      margin: "15px auto 10px auto",
      padding: "6px 16px",
      backgroundColor: "rgba(255, 255, 255, 0.90)",
      border: "1px solid rgba(0, 0, 0, 0.08)",
      borderRadius: "20px",
      color: "var(--text-main, #2c3e50)",
      fontFamily: "inherit",
      fontSize: "0.95rem",
      fontWeight: "600",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
      transition: "opacity 0.3s ease"
    });

    badge.innerHTML = `${iconeJogoSVG} <span>${totalVisitas.toLocaleString('pt-PT')} jogadas</span>`;

    // Lista de seletores para encontrar o menu de qualquer jogo
    const seletoresCandidatos = [
      ".grid-niveis",
      "#ecra-selecao",
      ".ecra-selecao",
      "#cartao-jogo",
      ".cartao-jogo-container",
      "#menu-principal",
      "#start-screen",
      ".start-screen",
      "#menu",
      ".menu-container",
      "main",
      "#game-container",
      ".container"
    ];

    let elementoEncontrado = null;
    let seletorUsado = "";

    for (const seletor of seletoresCandidatos) {
      const el = document.querySelector(seletor);
      if (el) {
        elementoEncontrado = el;
        seletorUsado = seletor;
        break;
      }
    }

    if (elementoEncontrado) {
      if (seletorUsado === ".grid-niveis") {
        elementoEncontrado.insertAdjacentElement("afterend", badge);
      } else {
        elementoEncontrado.appendChild(badge);
      }
    } else {
      // Fallback: se não encontrar nenhuma das estruturas, coloca no canto inferior
      Object.assign(badge.style, {
        position: "fixed",
        bottom: "15px",
        right: "15px",
        margin: "0",
        zIndex: "99999"
      });
      document.body.appendChild(badge);
    }
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
      injetarContadorNoMenu(result.snapshot.val());
    }
  }).catch((error) => {
    console.error("Erro ao comunicar com o Firebase:", error);
  });
}