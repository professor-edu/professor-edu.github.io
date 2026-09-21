import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

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

// Ícone SVG: Taça/Troféu
const iconeTacaSVG = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/>
          </svg>`;

// Lê a pasta de todos os jogos para calcular a soma total real
const jogosRef = ref(db, "estatisticas/jogos");

onValue(jogosRef, (snapshot) => {
  const dadosJogos = snapshot.val();
  let totalHistorico = 0;

  if (dadosJogos) {
    // Percorre todos os jogos registados e soma as respetivas visitas
    Object.values(dadosJogos).forEach((jogo) => {
      if (jogo && jogo.visitas) {
        totalHistorico += Number(jogo.visitas);
      }
    });
  }

  // Sincroniza o valor somado com a nova chave 'total_geral' no Firebase
  set(ref(db, "estatisticas/total_geral"), totalHistorico);

  // Injeta o resultado na página inicial
  const contentor = document.getElementById("contentor-total-jogadas");
  if (contentor) {
    contentor.innerHTML = `
      <div style="
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background-color: #ffffff;
        color: #2b4c7e;
        padding: 8px 18px;
        border-radius: 12px;
        font-family: 'Segoe UI', Roboto, Arial, sans-serif;
        font-size: 15px;
        font-weight: 700;
        box-shadow: 0 4px 12px rgba(43, 76, 126, 0.12);
        border: 2px solid #d0e1fd;
        user-select: none;
      ">
        ${iconeTacaSVG}
        <span>${totalHistorico.toLocaleString('pt-PT')} jogos realizados</span>
      </div>
    `;
  }
});