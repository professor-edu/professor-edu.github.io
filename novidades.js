const novidadesSite = [
    {
        ano: "pre",
        rotulo: "PRÉ",
        nome: "Os Nossos Heróis",
        icone: "pre/icones/nossos_herois.png",
        link: "pre/nossos-herois/"
    },
    {
        ano: "ano1",
        rotulo: "1º ANO",
        nome: "Letras PTLDM",
		disciplina: "PT",
        icone: "1/icones/letras.png",
        link: "1/pt/letras/"
    },
    {
        ano: "ano2",
        rotulo: "2º ANO",
		disciplina: "PT",
        nome: "Letras Mágicas",
        icone: "2/icones/letras_magicas.png",
        link: "2/pt/letras-magicas/"
    },
    {
        ano: "ano3",
        rotulo: "3º ANO",
		disciplina: "EM",
        nome: "Continentes e Oceanos",
        icone: "3/icones/continentes_oceanos.png",
        link: "3/em/continentes-oceanos/"
    },
    {
        ano: "ano4",
        rotulo: "4º ANO",
		disciplina: "MAT",
        nome: "Divisão",
        icone: "4/icones/divisao.png",
        link: "4/mat/divisao/"
    }
];

function carregarNovidades() {
    const grelha = document.getElementById('grelha-novos-jogos');
    if (!grelha || typeof novidadesSite === 'undefined') return;

    grelha.innerHTML = '';

    novidadesSite.forEach(jogo => {
        const textoBadge = jogo.disciplina ? `${jogo.rotulo} • ${jogo.disciplina}` : jogo.rotulo;

        const card = document.createElement('a');
        card.href = jogo.link;
        card.className = `card-novo-jogo ${jogo.ano}`;
        card.innerHTML = `
            <span class="badge-ano-novo">${textoBadge}</span>
            <img src="${jogo.icone}" alt="${jogo.nome}" class="capa-jogo" onerror="this.src='SVG/${jogo.ano}.svg'">
            <span class="titulo-jogo">${jogo.nome}</span>
        `;
        grelha.appendChild(card);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', carregarNovidades);
} else {
    carregarNovidades();
}