const CONFIG_JOGO = {
    titulo: "O Dinheiro",
    subtitulo: "Aprende a conhecer, contar e usar o euro!",
    subtituloMenu: "Aprende a conhecer, contar e usar o euro!",
    tema: {
        corPrimaria: "#10b981",
        corSecundaria: "#059669"
    },
    niveis: [
        // =====================================================================
        // NÍVEL 1: CONHECER O EURO (20 Questões | 10 rondas por jogo)
        // =====================================================================
        {
            id: 1,
            titulo: "Conhecer o Euro",
            subtitulo: "Identifica moedas, notas e conta euros inteiros até 20 €",
            corClasse: "bg-verde",
            icone: "img/icone_euro_1.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    tipo: "situacao",
                    pergunta: "Observa a imagem. É uma moeda ou uma nota?",
                    dinheiro: ["2e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "MOEDA",
                    opcoes: [
                        { img: "img/btn_moeda.svg", valor: "MOEDA", alt: "MOEDA" },
                        { img: "img/btn_nota.svg", valor: "NOTA", alt: "NOTA" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Observa a imagem. É uma moeda ou uma nota?",
                    dinheiro: ["10e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NOTA",
                    opcoes: [
                        { img: "img/btn_moeda.svg", valor: "MOEDA", alt: "MOEDA" },
                        { img: "img/btn_nota.svg", valor: "NOTA", alt: "NOTA" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Classifica este elemento do euro.",
                    dinheiro: ["5e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NOTA",
                    opcoes: [
                        { img: "img/btn_moeda.svg", valor: "MOEDA", alt: "MOEDA" },
                        { img: "img/btn_nota.svg", valor: "NOTA", alt: "NOTA" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Classifica este elemento do euro.",
                    dinheiro: ["1e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "MOEDA",
                    opcoes: [
                        { img: "img/btn_moeda.svg", valor: "MOEDA", alt: "MOEDA" },
                        { img: "img/btn_nota.svg", valor: "NOTA", alt: "NOTA" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a nota de <strong>10 euros</strong>?",
                    mostrarLegenda: false,
                    correta: "10e",
                    opcoes: [
                        { dinheiro: ["10e"], valor: "10e" },
                        { dinheiro: ["5e"], valor: "5e" },
                        { dinheiro: ["20e"], valor: "20e" },
                        { dinheiro: ["2e"], valor: "2e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a moeda de <strong>2 euros</strong>?",
                    mostrarLegenda: false,
                    correta: "2e",
                    opcoes: [
                        { dinheiro: ["2e"], valor: "2e" },
                        { dinheiro: ["1e"], valor: "1e" },
                        { dinheiro: ["50c"], valor: "50c" },
                        { dinheiro: ["5e"], valor: "5e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde estão <strong>3 euros</strong>?",
                    mostrarLegenda: false,
                    correta: "3e",
                    opcoes: [
                        { dinheiro: ["2e", "1e"], valor: "3e" },
                        { dinheiro: ["1e", "1e"], valor: "2e" },
                        { dinheiro: ["2e", "2e"], valor: "4e" },
                        { dinheiro: ["5e"], valor: "5e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde estão <strong>7 euros</strong>?",
                    mostrarLegenda: false,
                    correta: "7e",
                    opcoes: [
                        { dinheiro: ["5e", "2e"], valor: "7e" },
                        { dinheiro: ["5e", "1e"], valor: "6e" },
                        { dinheiro: ["10e"], valor: "10e" },
                        { dinheiro: ["2e", "2e", "2e"], valor: "6e_moedas" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está <strong>mais dinheiro</strong>?",
                    mostrarLegenda: false,
                    correta: "15e",
                    opcoes: [
                        { dinheiro: ["10e", "5e"], valor: "15e" },
                        { dinheiro: ["10e", "2e"], valor: "12e" },
                        { dinheiro: ["5e", "5e", "2e"], valor: "12e_alt" },
                        { dinheiro: ["2e", "2e", "2e", "2e"], valor: "8e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está <strong>menos dinheiro</strong>?",
                    mostrarLegenda: false,
                    correta: "3e",
                    opcoes: [
                        { dinheiro: ["2e", "1e"], valor: "3e" },
                        { dinheiro: ["5e"], valor: "5e" },
                        { dinheiro: ["2e", "2e"], valor: "4e" },
                        { dinheiro: ["10e"], valor: "10e" }
                    ]
                },
                {
                    tipo: "padrao",
                    pergunta: "Quanto dinheiro está na imagem?",
                    dinheiro: ["5e", "2e", "1e"],
                    correta: "8 €",
                    opcoes: ["8 €", "7 €", "9 €", "5 €"]
                },
                {
                    tipo: "padrao",
                    pergunta: "Conta o dinheiro total.",
                    dinheiro: ["10e", "5e", "2e"],
                    correta: "17 €",
                    opcoes: ["17 €", "15 €", "12 €", "18 €"]
                },
                {
                    tipo: "padrao",
                    pergunta: "Quantos euros há ao todo?",
                    dinheiro: ["2e", "2e", "1e", "1e"],
                    correta: "6 €",
                    opcoes: ["6 €", "4 €", "5 €", "8 €"]
                },
                {
                    tipo: "padrao",
                    pergunta: "De que cor é a nota de <strong>20 euros</strong>?",
                    dinheiro: ["20e"],
                    correta: "Azul",
                    opcoes: ["Azul", "Vermelha", "Cinzenta", "Verde"]
                },
                {
                    tipo: "lacuna",
                    pergunta: "Duas notas de 5 € valem o mesmo que uma nota de ________.",
                    dinheiro: ["5e", "5e"],
                    correta: "10 €",
                    opcoes: ["10 €", "20 €", "5 €", "15 €"]
                },
                {
                    tipo: "lacuna",
                    pergunta: "Duas moedas de 1 € valem o mesmo que uma moeda de ________.",
                    dinheiro: ["1e", "1e"],
                    correta: "2 €",
                    opcoes: ["2 €", "5 €", "1 €", "10 €"]
                },
                {
                    tipo: "lacuna",
                    pergunta: "O valor total desta quantia é ________.",
                    dinheiro: ["10e", "2e"],
                    correta: "12 €",
                    opcoes: ["12 €", "8 €", "20 €", "10 €"]
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve o nome deste tipo de dinheiro.",
                    dinheiro: ["5e"],
                    correta: "NOTA",
                    letrasExtras: ["M", "D"]
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve o nome deste tipo de dinheiro.",
                    dinheiro: ["2e"],
                    correta: "MOEDA",
                    letrasExtras: ["N", "T"]
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve por extenso o valor desta nota.",
                    dinheiro: ["20e"],
                    correta: "VINTE",
                    letrasExtras: ["D", "Z"]
                }
            ]
        },

        // =====================================================================
        // NÍVEL 2: IR ÀS COMPRAS (20 Questões | 10 rondas por jogo)
        // =====================================================================
        {
            id: 2,
            titulo: "Ir às Compras",
            subtitulo: "Vê se o dinheiro chega, soma preços e calcula trocos",
            corClasse: "bg-azul",
            icone: "img/icone_euro_2.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    tipo: "situacao",
                    pergunta: "Queres comprar uma bola que custa <span class='destaque-badge'>8 €</span>. O dinheiro chega?",
                    dinheiro: ["5e", "2e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NÃO",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Um livro custa <span class='destaque-badge'>11 €</span>. O dinheiro chega para o comprar?",
                    dinheiro: ["10e", "2e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "SIM",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Uma caixa de lápis custa <span class='destaque-badge'>7 €</span>. Tens dinheiro suficiente?",
                    dinheiro: ["5e", "1e", "1e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "SIM",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Uma mochila custa <span class='destaque-badge'>18 €</span>. O dinheiro chega?",
                    dinheiro: ["10e", "5e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NÃO",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Um jogo de tabuleiro custa <span class='destaque-badge'>19 €</span>. Podes comprá-lo?",
                    dinheiro: ["20e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "SIM",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Um lanche custa <span class='destaque-badge'>5 €</span>. O teu dinheiro chega?",
                    dinheiro: ["2e", "2e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NÃO",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual conjunto paga exatamente um carrinho de <span class='destaque-badge'>15 €</span>?",
                    mostrarLegenda: false,
                    correta: "15e",
                    opcoes: [
                        { dinheiro: ["10e", "5e"], valor: "15e" },
                        { dinheiro: ["10e", "2e"], valor: "12e" },
                        { dinheiro: ["20e"], valor: "20e" },
                        { dinheiro: ["5e", "5e"], valor: "10e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual conjunto paga exatamente uma camisola de <span class='destaque-badge'>9 €</span>?",
                    mostrarLegenda: false,
                    correta: "9e",
                    opcoes: [
                        { dinheiro: ["5e", "2e", "2e"], valor: "9e" },
                        { dinheiro: ["5e", "2e", "1e"], valor: "8e" },
                        { dinheiro: ["10e"], valor: "10e" },
                        { dinheiro: ["2e", "2e", "2e"], valor: "6e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Pagaste um caderno de <span class='destaque-badge'>4 €</span> com esta nota. Qual é o teu troco?",
                    dinheiro: ["10e"],
                    mostrarLegenda: false,
                    correta: "6e",
                    opcoes: [
                        { dinheiro: ["5e", "1e"], valor: "6e" },
                        { dinheiro: ["5e"], valor: "5e" },
                        { dinheiro: ["2e", "2e"], valor: "4e" },
                        { dinheiro: ["5e", "2e"], valor: "7e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Pagaste um puzzle de <span class='destaque-badge'>13 €</span> com esta nota. Que troco recebes?",
                    dinheiro: ["20e"],
                    mostrarLegenda: false,
                    correta: "7e",
                    opcoes: [
                        { dinheiro: ["5e", "2e"], valor: "7e" },
                        { dinheiro: ["5e", "1e"], valor: "6e" },
                        { dinheiro: ["10e"], valor: "10e" },
                        { dinheiro: ["2e", "2e", "1e"], valor: "5e" }
                    ]
                },
                {
                    tipo: "padrao",
                    pergunta: "Compras uma borracha por <span class='destaque-badge'>2 €</span> e um caderno por <span class='destaque-badge'>5 €</span>. Quanto pagas ao todo?",
                    correta: "7 €",
                    opcoes: ["7 €", "3 €", "8 €", "10 €"]
                },
                {
                    tipo: "padrao",
                    pergunta: "Um sumo custa <span class='destaque-badge'>3 €</span> e uma sandes custa <span class='destaque-badge'>4 €</span>. Qual é o total?",
                    correta: "7 €",
                    opcoes: ["7 €", "6 €", "1 €", "8 €"]
                },
                {
                    tipo: "padrao",
                    pergunta: "Pagas uma revista de <span class='destaque-badge'>7 €</span> com esta nota de 10 €. Quanto recebes de troco?",
                    dinheiro: ["10e"],
                    correta: "3 €",
                    opcoes: ["3 €", "4 €", "2 €", "17 €"]
                },
                {
                    tipo: "padrao",
                    pergunta: "Compras um casaco de <span class='destaque-badge'>15 €</span> e pagas com 20 €. Qual é o troco?",
                    dinheiro: ["20e"],
                    correta: "5 €",
                    opcoes: ["5 €", "10 €", "4 €", "35 €"]
                },
                {
                    tipo: "lacuna",
                    pergunta: "Pagaste um gelado de <span class='destaque-badge'>3 €</span> com esta nota. Recebes ________ de troco.",
                    dinheiro: ["5e"],
                    correta: "2 €",
                    opcoes: ["2 €", "3 €", "1 €", "8 €"]
                },
                {
                    tipo: "lacuna",
                    pergunta: "Dois livros custam <span class='destaque-badge'>6 €</span> cada um. Os dois juntos custam ________.",
                    correta: "12 €",
                    opcoes: ["12 €", "8 €", "10 €", "6 €"]
                },
                {
                    tipo: "lacuna",
                    pergunta: "O Rui tem estas duas notas. Se gastar <span class='destaque-badge'>10 €</span>, fica com ________.",
                    dinheiro: ["20e", "10e"],
                    correta: "20 €",
                    opcoes: ["20 €", "10 €", "30 €", "15 €"]
                },
                {
                    tipo: "construtor",
                    pergunta: "Pagaste um livro de <span class='destaque-badge'>6 €</span> com esta nota. Quanto recebes de troco?",
                    dinheiro: ["10e"],
                    correta: "4€",
                    letrasExtras: ["2", "5", "6"]
                },
                {
                    tipo: "construtor",
                    pergunta: "Pagaste uma bola de <span class='destaque-badge'>12 €</span> com esta nota. Quanto recebes de troco?",
                    dinheiro: ["20e"],
                    correta: "8€",
                    letrasExtras: ["6", "7", "2"]
                },
                {
                    tipo: "construtor",
                    pergunta: "Como se chama o dinheiro que o vendedor nos devolve quando pagamos a mais?",
                    correta: "TROCO",
                    letrasExtras: ["N", "A"]
                }
            ]
        },

        // =====================================================================
        // NÍVEL 3: CÊNTIMOS E NOTAS GRANDES (20 Questões | 10 rondas por jogo)
        // =====================================================================
        {
            id: 3,
            titulo: "Cêntimos e Notas Grandes",
            subtitulo: "Descobre os cêntimos, o 1 € e as notas até 500 €",
            corClasse: "bg-roxo",
            icone: "img/icone_euro_3.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a moeda de <strong>50 cêntimos</strong>?",
                    mostrarLegenda: false,
                    correta: "50c",
                    opcoes: [
                        { dinheiro: ["50c"], valor: "50c" },
                        { dinheiro: ["20c"], valor: "20c" },
                        { dinheiro: ["10c"], valor: "10c" },
                        { dinheiro: ["1e"], valor: "1e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a moeda de <strong>1 cêntimo</strong>?",
                    mostrarLegenda: false,
                    correta: "1c",
                    opcoes: [
                        { dinheiro: ["1c"], valor: "1c" },
                        { dinheiro: ["2c"], valor: "2c" },
                        { dinheiro: ["5c"], valor: "5c" },
                        { dinheiro: ["10c"], valor: "10c" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a moeda de <strong>2 cêntimos</strong>?",
                    mostrarLegenda: false,
                    correta: "2c",
                    opcoes: [
                        { dinheiro: ["2c"], valor: "2c" },
                        { dinheiro: ["1c"], valor: "1c" },
                        { dinheiro: ["5c"], valor: "5c" },
                        { dinheiro: ["20c"], valor: "20c" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a nota de <strong>100 euros</strong>?",
                    mostrarLegenda: false,
                    correta: "100e",
                    opcoes: [
                        { dinheiro: ["100e"], valor: "100e" },
                        { dinheiro: ["50e"], valor: "50e" },
                        { dinheiro: ["200e"], valor: "200e" },
                        { dinheiro: ["20e"], valor: "20e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a nota de <strong>200 euros</strong>?",
                    mostrarLegenda: false,
                    correta: "200e",
                    opcoes: [
                        { dinheiro: ["200e"], valor: "200e" },
                        { dinheiro: ["100e"], valor: "100e" },
                        { dinheiro: ["500e"], valor: "500e" },
                        { dinheiro: ["50e"], valor: "50e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a nota de <strong>500 euros</strong>?",
                    mostrarLegenda: false,
                    correta: "500e",
                    opcoes: [
                        { dinheiro: ["500e"], valor: "500e" },
                        { dinheiro: ["200e"], valor: "200e" },
                        { dinheiro: ["100e"], valor: "100e" },
                        { dinheiro: ["50e"], valor: "50e" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está exatamente <strong>1 euro</strong> em cêntimos?",
                    mostrarLegenda: false,
                    correta: "100c",
                    opcoes: [
                        { dinheiro: ["50c", "50c"], valor: "100c" },
                        { dinheiro: ["50c", "20c"], valor: "70c" },
                        { dinheiro: ["20c", "20c", "10c"], valor: "50c" },
                        { dinheiro: ["50c", "20c", "20c"], valor: "90c" }
                    ]
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde estão <strong>2 euros e 50 cêntimos</strong> (2,50 €)?",
                    mostrarLegenda: false,
                    correta: "2,50e",
                    opcoes: [
                        { dinheiro: ["2e", "50c"], valor: "2,50e" },
                        { dinheiro: ["1e", "50c"], valor: "1,50e" },
                        { dinheiro: ["2e", "20c"], valor: "2,20e" },
                        { dinheiro: ["2e", "1e"], valor: "3e" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Um rebuçado especial custa <span class='destaque-badge'>90 cêntimos</span>. O dinheiro chega?",
                    dinheiro: ["50c", "20c", "10c"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NÃO",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Um pão com queijo custa <span class='destaque-badge'>1 €</span>. O dinheiro chega?",
                    dinheiro: ["50c", "50c", "20c"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "SIM",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ]
                },
                {
                    tipo: "situacao",
                    pergunta: "Uma bicicleta custa <span class='destaque-badge'>100 €</span>. Este dinheiro chega para a comprar?",
                    dinheiro: ["50e", "20e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NÃO",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ]
                },
                {
                    tipo: "lacuna",
                    pergunta: "1 euro equivale a ________ cêntimos.",
                    dinheiro: ["1e"],
                    correta: "100",
                    opcoes: ["100", "10", "50", "1000"]
                },
                {
                    tipo: "lacuna",
                    pergunta: "Para fazer 1 euro precisamos de ________ moedas de 10 cêntimos.",
                    dinheiro: ["10c", "10c", "10c", "10c", "10c", "10c", "10c", "10c", "10c", "10c"],
                    correta: "10",
                    opcoes: ["10", "5", "20", "100"]
                },
                {
                    tipo: "lacuna",
                    pergunta: "Para formar 1 euro são precisas ________ moedas de 1 cêntimo.",
                    dinheiro: ["1c"],
                    correta: "100",
                    opcoes: ["100", "10", "50", "20"]
                },
                {
                    tipo: "lacuna",
                    pergunta: "Cinco moedas de 20 cêntimos valem ________.",
                    dinheiro: ["20c", "20c", "20c", "20c", "20c"],
                    correta: "1 €",
                    opcoes: ["1 €", "50 cêntimos", "2 €", "20 cêntimos"]
                },
                {
                    tipo: "lacuna",
                    pergunta: "Duas notas de 50 € valem o mesmo que uma nota de ________.",
                    dinheiro: ["50e", "50e"],
                    correta: "100 €",
                    opcoes: ["100 €", "200 €", "500 €", "50 €"]
                },
                {
                    tipo: "padrao",
                    pergunta: "Soma o valor de todas estas moedas.",
                    dinheiro: ["20c", "10c", "5c", "2c", "1c"],
                    correta: "38 cêntimos",
                    opcoes: ["38 cêntimos", "35 cêntimos", "40 cêntimos", "37 cêntimos"]
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual é o valor total desta quantia?",
                    dinheiro: ["2e", "1e", "50c", "20c"],
                    correta: "3,70 €",
                    opcoes: ["3,70 €", "3,50 €", "2,70 €", "4,20 €"]
                },
                {
                    tipo: "padrao",
                    pergunta: "Tens <span class='destaque-badge'>2 €</span> e compras um lápis por <span class='destaque-badge'>1,50 €</span>. Quanto recebes de troco?",
                    correta: "50 cêntimos",
                    opcoes: ["50 cêntimos", "20 cêntimos", "1 €", "10 cêntimos"]
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve por extenso o valor desta nota.",
                    dinheiro: ["50e"],
                    correta: "CINQUENTA",
                    letrasExtras: ["V", "S"]
                }
            ]
        },

        // =====================================================================
        // NÍVEL 4: SUPER DESAFIO (Mistura das 60 questões | 10 rondas por jogo)
        // =====================================================================
        {
            id: 4,
            titulo: "Super Desafio",
            subtitulo: "Mistura divertida de todos os níveis do Euro!",
            corClasse: "bg-turquesa",
            icone: "img/icone_euro_4.svg",
            numQuestoes: 10,
            misturarModos: true,
            perguntas: []
        }
    ]
};

