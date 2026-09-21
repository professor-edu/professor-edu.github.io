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
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2b4c7e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block; flex-shrink: 0;">
  <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2"/>
  <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"/>
  <path d="M4 22h16"/>
  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" fill="#d0e1fd"/>
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
        <span>${totalHistorico.toLocaleString('pt-PT')} jogadas no site</span>
      </div>
    `;
  }
});