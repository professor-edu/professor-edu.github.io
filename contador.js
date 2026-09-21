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

// 2. Função para ler o nome do jogo a partir da tag <title>
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

// 3. Função que cria e injeta o elemento visual discreto no ecrã
function mostrarContadorNoEcra(totalVisitas) {
  // Se já existir no HTML um elemento <span id="contador-jogo">, atualiza-o
  const elExistente = document.getElementById("contador-jogo");
  if (elExistente) {
    elExistente.textContent = totalVisitas.toLocaleString('pt-PT');
    return;
  }

  // Se o badge dinâmico ainda não foi criado, cria-o agora
  let badge = document.getElementById("badge-contador-flutuante");
  if (!badge) {
    badge = document.createElement("div");
    badge.id = "badge-contador-flutuante";

    // Aplicar estilos CSS diretamente via JavaScript (sem mexer em ficheiros .css)
    Object.assign(badge.style, {
      position: "fixed",
      top: "14px",
      right: "20px",
      zIndex: "99999",
      backgroundColor: "rgba(255, 255, 255, 0.92)",
      backdropFilter: "blur(4px)",
      color: "#2c3e50",
      padding: "6px 14px",
      borderRadius: "20px",
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      fontSize: "13px",
      fontWeight: "600",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.10)",
      border: "1px solid rgba(0, 0, 0, 0.08)",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      pointerEvents: "none",
      userSelect: "none",
      transition: "opacity 0.3s ease"
    });

    document.body.appendChild(badge);
  }

  // Define o conteúdo com ícone e número formatado
  badge.innerHTML = `🎮 <span>${totalVisitas.toLocaleString('pt-PT')} jogadas</span>`;
}

// 4. Registo no Firebase
const idJogo = obterNomeJogo();

if (idJogo) {
  const contadorRef = ref(db, `estatisticas/jogos/${idJogo}/visitas`);

  runTransaction(contadorRef, (valorAtual) => {
    return (valorAtual || 0) + 1;
  }).then((result) => {
    if (result.committed) {
      const totalVisitas = result.snapshot.val();
      mostrarContadorNoEcra(totalVisitas);
    }
  }).catch((error) => {
    console.error("Erro ao registar visita:", error);
  });
}