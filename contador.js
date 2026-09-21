import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, runTransaction } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// 1. AS SUAS CHAVES DO FIREBASE (Copie do Passo 1)
const firebaseConfig = {
  apiKey: "AIzaSyCIigMWzyJ16yfayXHItv5lpgDS0W6FkbA",
  authDomain: "brincar-e-aprender-ecdf6.firebaseapp.com",
  databaseURL: "https://brincar-e-aprender-ecdf6-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "brincar-e-aprender-ecdf6",
  storageBucket: "brincar-e-aprender-ecdf6.firebasestorage.app",
  messagingSenderId: "654754093179",
  appId: "1:654754093179:web:ce6eb9539865fa16b5aade"
};

// 2. Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 3. Função que deteta automaticamente o nome do jogo a partir da URL
function obterNomeJogo() {
  const caminho = window.location.pathname;
  let nomeFicheiro = caminho.substring(caminho.lastIndexOf('/') + 1);
  nomeFicheiro = nomeFicheiro.replace('.html', '').trim();
  
  // Se estiver na página inicial ou caminho vazio
  if (!nomeFicheiro || nomeFicheiro === '') return 'inicio';
  
  return nomeFicheiro;
}

// 4. Executa o registo de visitas
const idJogo = obterNomeJogo();

if (idJogo) {
  const contadorRef = ref(db, `estatisticas/jogos/${idJogo}/visitas`);

  // Soma +1 de forma segura na base de dados
  runTransaction(contadorRef, (valorAtual) => {
    return (valorAtual || 0) + 1;
  }).then((result) => {
    if (result.committed) {
      // Se existir o elemento <span id="contador-jogo"> no HTML, atualiza o número no ecrã
      const elementoContador = document.getElementById("contador-jogo");
      if (elementoContador) {
        elementoContador.textContent = result.snapshot.val().toLocaleString('pt-PT');
      }
    }
  }).catch((error) => {
    console.error("Erro ao registar visita:", error);
  });
}