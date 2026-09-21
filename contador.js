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

// 2. Função que obtém o nome do jogo a partir da tag <title>
function obterNomeJogo() {
  // Lê a tag <title> do HTML
  let titulo = document.title ? document.title.trim() : "";

  // Se os seus títulos tiverem algo como "Memória Mágica - Nome do Site",
  // a linha abaixo limpa o "- Nome do Site" mantendo apenas "Memória Mágica"
  if (titulo.includes(" - ")) {
    titulo = titulo.split(" - ")[0].trim();
  }

  // Se a tag <title> existir e não for vazia nem "inicio"
  if (titulo && titulo.toLowerCase() !== "inicio" && titulo.toLowerCase() !== "home") {
    // Limpa carateres proibidos pelo Firebase: . # $ [ ] /
    return titulo.replace(/[.#$\[\]\/]/g, "").trim();
  }

  // Fallback (caso a tag <title> esteja vazia): usa o nome da pasta ou ficheiro
  let caminho = window.location.pathname.replace(/\/$/, ""); 
  let partes = caminho.split('/').filter(Boolean);
  if (partes.length === 0) return 'inicio';

  let ultimoSegmento = partes[partes.length - 1].replace('.html', '').trim();
  if (ultimoSegmento.toLowerCase() === 'index' || ultimoSegmento.toLowerCase() === 'inicio') {
    return partes.length > 1 ? partes[partes.length - 2] : 'inicio';
  }

  return ultimoSegmento;
}

// 3. Registo de visita
const idJogo = obterNomeJogo();

if (idJogo) {
  const contadorRef = ref(db, `estatisticas/jogos/${idJogo}/visitas`);

  runTransaction(contadorRef, (valorAtual) => {
    return (valorAtual || 0) + 1;
  }).then((result) => {
    if (result.committed) {
      const elementoContador = document.getElementById("contador-jogo");
      if (elementoContador) {
        elementoContador.textContent = result.snapshot.val().toLocaleString('pt-PT');
      }
    }
  }).catch((error) => {
    console.error("Erro ao registar visita:", error);
  });
}