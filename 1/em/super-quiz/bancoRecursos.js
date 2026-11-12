const BANCO_RECURSOS = {
    profissoes: [
        { img: "img/bombeiro.png", alt: "Bombeiro", valor: "Bombeiro" },
        { img: "img/mecanico.png", alt: "Mecânico", valor: "Mecânico" },
        { img: "img/carpinteiro.png", alt: "Carpinteiro", valor: "Carpinteiro" },
        { img: "img/padeiro.png", alt: "Padeiro", valor: "Padeiro" },
        { img: "img/jardineiro.png", alt: "Jardineiro", valor: "Jardineiro" },
        { img: "img/medico.png", alt: "Médico", valor: "Médico" },
        { img: "img/policia.png", alt: "Polícia", valor: "Polícia" },
        { img: "img/professora.png", alt: "Professora", valor: "Professora" },
        { img: "img/piloto.png", alt: "Piloto", valor: "Piloto" },
        { img: "img/carteiro.png", alt: "Carteiro", valor: "Carteiro" },
        { img: "img/cozinheiro.png", alt: "Cozinheiro", valor: "Cozinheiro" },
        { img: "img/pintor.png", alt: "Pintor", valor: "Pintor" }
    ],
    vestuario: [
        { img: "img/casaco_inverno.png", alt: "Casaco de Inverno", valor: "Casaco de Inverno" },
        { img: "img/fato_banho.png", alt: "Fato de Banho", valor: "Fato de Banho" },
        { img: "img/tshirt.png", alt: "T-Shirt", valor: "T-Shirt" },
        { img: "img/gorro.png", alt: "Gorro", valor: "Gorro" },
        { img: "img/guarda_chuva.png", alt: "Guarda-Chuva", valor: "Guarda-Chuva" }
    ],
    objetos_escola: [
        { img: "img/livro.png", alt: "Livro", valor: "Livro" },
        { img: "img/estojo.png", alt: "Estojo", valor: "Estojo" },
        { img: "img/mochila.png", alt: "Mochila", valor: "Mochila" },
        { img: "img/tesoura_escolar.png", alt: "Tesoura", valor: "Tesoura" }
    ],
    corpo_sentidos: [
        { img: "img/olho.png", alt: "Olho", valor: "Olho" },
        { img: "img/orelha.png", alt: "Orelha", valor: "Orelha" },
        { img: "img/nariz.png", alt: "Nariz", valor: "Nariz" }
    ],
    locais_espacos: [
        { img: "img/biblioteca.png", alt: "Biblioteca", valor: "Biblioteca" },
        { img: "img/cozinha.png", alt: "Cozinha", valor: "Cozinha" },
        { img: "img/padaria.png", alt: "Padaria", valor: "Padaria" },
        { img: "img/garagem.png", alt: "Garagem", valor: "Garagem" },
        { img: "img/quarto.png", alt: "Quarto", valor: "Quarto" }
    ],
    familia_fases: [
        { img: "img/adulto.png", alt: "Adulto", valor: "Adulto" },
        { img: "img/crianca.png", alt: "Criança", valor: "Criança" },
        { img: "img/bebe.png", alt: "Bebé", valor: "Bebé" },
        { img: "img/idoso.png", alt: "Idoso", valor: "Idoso" },
        { img: "img/irmaos.png", alt: "Irmãos", valor: "Irmãos" },
        { img: "img/primas.png", alt: "Primas", valor: "Primas" }
    ]
};

function prepararOpcoesPergunta(ronda) {
    // 1. Se a pergunta já tem opções manuais estáticas (ex: tipo Cidadania ou layout fixo), usa essas
    if (ronda.opcoesImagem && ronda.opcoesImagem.length > 0) {
        return baralharArray([...ronda.opcoesImagem]);
    }

    // 2. Verifica se o BANCO_RECURSOS existe no escopo global
    if (typeof BANCO_RECURSOS === 'undefined') {
        console.error("ERRO: O ficheiro 'bancoRecursos.js' não foi carregado antes do engine.js!");
        return [];
    }

    // 3. Procura a categoria pedida
    const listaCategoria = BANCO_RECURSOS[ronda.categoriaDistratores];
    if (!listaCategoria) {
        console.error(`ERRO: A categoria "${ronda.categoriaDistratores}" não existe no BANCO_RECURSOS.`);
        return [];
    }

    const respostaCorretaLower = ronda.correta.trim().toLowerCase();

    // 4. Encontra o objeto correto no banco
    const opcaoCorreta = listaCategoria.find(
        item => (item.valor || item.alt).trim().toLowerCase() === respostaCorretaLower
    );

    if (!opcaoCorreta) {
        console.error(`ERRO: A palavra correta "${ronda.correta}" não foi encontrada na categoria "${ronda.categoriaDistratores}" do BANCO_RECURSOS.`);
    }

    // 5. Filtra os distratores errados
    const possiveisDistratores = listaCategoria.filter(
        item => (item.valor || item.alt).trim().toLowerCase() !== respostaCorretaLower
    );

    const distratoresSorteados = baralharArray([...possiveisDistratores]).slice(0, 2);

    // Se encontrou a correta, junta com os distratores; se não, devolve o que houver para não partir a UI
    const opcoesFinais = opcaoCorreta 
        ? [opcaoCorreta, ...distratoresSorteados] 
        : distratoresSorteados;

    return baralharArray(opcoesFinais);
}