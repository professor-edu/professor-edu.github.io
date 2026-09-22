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
<svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" stroke-width="1">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
      gap: 8px;
      background: linear-gradient(135deg, #ff7b00 0%, #ffae00 100%);
      color: #ffffff;
      padding: 6px 14px;
      border-radius: 50px;
      font-weight: 800;
      font-size: 0.9rem;
      box-shadow: 0 4px 12px rgba(255, 123, 0, 0.3);
      border: 3px solid #ffffff;
      text-shadow: 0 1px 2px rgba(0,0,0,0.15);
      user-select: none;
      ">
        ${iconeTacaSVG}
        <span>${totalHistorico.toLocaleString('pt-PT')} jogos realizados</span>
      </div>
    `;
  }
});