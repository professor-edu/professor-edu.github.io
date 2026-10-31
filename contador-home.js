import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const spanTexto = document.getElementById("texto-total-jogadas");

// MOSTRA IMEDIATAMENTE O ÚLTIMO VALOR CONHECIDO (SEM ESPERAR PELO FIREBASE)
const valorGuardado = localStorage.getItem("ultimo_total_jogadas");
if (spanTexto && valorGuardado) {
  spanTexto.textContent = `${Number(valorGuardado).toLocaleString('pt-PT')} jogos realizados`;
}

// Configuração do Firebase
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

const jogosRef = ref(db, "estatisticas/jogos");

onValue(jogosRef, (snapshot) => {
  const dadosJogos = snapshot.val();
  let totalHistorico = 0;

  if (dadosJogos) {
    Object.values(dadosJogos).forEach((jogo) => {
      if (jogo && jogo.visitas) {
        totalHistorico += Number(jogo.visitas);
      }
    });
  }

  set(ref(db, "estatisticas/total_geral"), totalHistorico);

  // ATUALIZA APENAS O TEXTO E GUARDA PARA A PRÓXIMA VISITA
  if (spanTexto) {
    spanTexto.textContent = `${totalHistorico.toLocaleString('pt-PT')} jogos realizados`;
    localStorage.setItem("ultimo_total_jogadas", totalHistorico);
  }
});