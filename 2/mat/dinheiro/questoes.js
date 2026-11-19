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
                    pergunta: "<span class='destaque-amarelo'>O que é?</span>",
                    dinheiro: ["2e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "MOEDA",
                    opcoes: [
                        { img: "img/btn_moeda.svg", valor: "MOEDA", alt: "MOEDA" },
                        { img: "img/btn_nota.svg", valor: "NOTA", alt: "NOTA" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "É redonda, feita de metal e vale 2 euros."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "<span class='destaque-amarelo'>O que é?</span>",
                    dinheiro: ["10e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NOTA",
                    opcoes: [
                        { img: "img/btn_moeda.svg", valor: "MOEDA", alt: "MOEDA" },
                        { img: "img/btn_nota.svg", valor: "NOTA", alt: "NOTA" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Observa o formato retangular em papel especial."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "<span class='destaque-amarelo'>O que é?</span>",
                    dinheiro: ["5e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NOTA",
                    opcoes: [
                        { img: "img/btn_moeda.svg", valor: "MOEDA", alt: "MOEDA" },
                        { img: "img/btn_nota.svg", valor: "NOTA", alt: "NOTA" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "É retangular e tem o número 5 impresso."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "<span class='destaque-amarelo'>O que é?</span>",
                    dinheiro: ["1e"],
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "MOEDA",
                    opcoes: [
                        { img: "img/btn_moeda.svg", valor: "MOEDA", alt: "MOEDA" },
                        { img: "img/btn_nota.svg", valor: "NOTA", alt: "NOTA" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Tem forma circular com centro prateado e borda dourada."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Clica na nota de <span class='destaque-badge'>10 euros</span>",
                    mostrarLegenda: false,
                    correta: "10e",
                    opcoes: [
                        { dinheiro: ["10e"], valor: "10e" },
                        { dinheiro: ["5e"], valor: "5e" },
                        { dinheiro: ["20e"], valor: "20e" },
                        { dinheiro: ["2e"], valor: "2e" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Procura a nota de cor vermelha com o número 10."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Clica na moeda de <span class='destaque-badge'>2 euros</span>",
                    mostrarLegenda: false,
                    correta: "2e",
                    opcoes: [
                        { dinheiro: ["2e"], valor: "2e" },
                        { dinheiro: ["1e"], valor: "1e" },
                        { dinheiro: ["50c"], valor: "50c" },
                        { dinheiro: ["5e"], valor: "5e" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "É a maior moeda, com o interior dourado e o exterior prateado."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde estão <span class='destaque-fundo'>3 euros</span>?",
                    mostrarLegenda: false,
                    correta: "3e",
                    opcoes: [
                        { dinheiro: ["2e", "1e"], valor: "3e" },
                        { dinheiro: ["1e", "1e"], valor: "2e" },
                        { dinheiro: ["2e", "2e"], valor: "4e" },
                        { dinheiro: ["5e"], valor: "5e" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Soma os valores: 2 € + 1 € = 3 €."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde estão <span class='destaque-fundo'>7 euros</span>?",
                    mostrarLegenda: false,
                    correta: "7e",
                    opcoes: [
                        { dinheiro: ["5e", "2e"], valor: "7e" },
                        { dinheiro: ["5e", "1e"], valor: "6e" },
                        { dinheiro: ["10e"], valor: "10e" },
                        { dinheiro: ["2e", "2e", "2e"], valor: "6e_moedas" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Junta uma nota de 5 € com uma moeda de 2 €."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está <span class='destaque-fundo'>mais dinheiro</span>?",
                    mostrarLegenda: false,
                    correta: "15e",
                    opcoes: [
                        { dinheiro: ["10e", "5e"], valor: "15e" },
                        { dinheiro: ["10e", "2e"], valor: "12e" },
                        { dinheiro: ["5e", "5e", "2e"], valor: "12e_alt" },
                        { dinheiro: ["2e", "2e", "2e", "2e"], valor: "8e" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Procura o conjunto que tem uma nota de 10 € e uma de 5 € (15 €)."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está <span class='destaque-fundo'>menos dinheiro</span>?",
                    mostrarLegenda: false,
                    correta: "3e",
                    opcoes: [
                        { dinheiro: ["2e", "1e"], valor: "3e" },
                        { dinheiro: ["5e"], valor: "5e" },
                        { dinheiro: ["2e", "2e"], valor: "4e" },
                        { dinheiro: ["10e"], valor: "10e" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Compara os totais: o conjunto só com moedas vale 3 €, que é menos do que qualquer nota."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Quanto dinheiro está na imagem?",
                    dinheiro: ["5e", "2e", "1e"],
                    correta: "8 €",
                    opcoes: ["8 €", "7 €", "9 €", "5 €"],
                    dica: {
                        tipo: "50-50",
                        texto: "Soma por ordem: 5 € + 2 € = 7 €, e depois junta mais 1 €."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Conta o dinheiro total.",
                    dinheiro: ["10e", "5e", "2e"],
                    correta: "17 €",
                    opcoes: ["17 €", "15 €", "12 €", "18 €"],
                    dica: {
                        tipo: "popup",
                        texto: "Começa pelas notas: 10 € + 5 € = 15 €. Depois soma a moeda de 2 €."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Quantos euros há ao todo?",
                    dinheiro: ["2e", "2e", "1e", "1e"],
                    correta: "6 €",
                    opcoes: ["6 €", "4 €", "5 €", "8 €"],
                    dica: {
                        tipo: "highlight",
                        texto: "Duas moedas de 2 € dão 4 €, mais duas moedas de 1 € dão 6 €."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "De que cor é a nota de <strong>20 euros</strong>?",
                    dinheiro: ["20e"],
                    correta: "Azul",
                    opcoes: ["Azul", "Vermelha", "Cinzenta", "Verde"],
                    dica: {
                        tipo: "50-50",
                        texto: "Observa bem a cor principal da nota na imagem."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Duas notas de <span class='destaque-fundo'>5 €</span> valem o mesmo que uma nota de ________.",
                    dinheiro: ["5e", "5e"],
                    correta: "10 €",
                    opcoes: ["10 €", "20 €", "5 €", "15 €"],
                    dica: {
                        tipo: "highlight",
                        texto: "Calcula quanto é 5 + 5."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Duas moedas de <span class='destaque-fundo'>1 €</span> valem o mesmo que uma moeda de ________.",
                    dinheiro: ["1e", "1e"],
                    correta: "2 €",
                    opcoes: ["2 €", "5 €", "1 €", "10 €"],
                    dica: {
                        tipo: "50-50",
                        texto: "Soma 1 € + 1 €."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "O valor total desta quantia é ________.",
                    dinheiro: ["10e", "2e"],
                    correta: "12 €",
                    opcoes: ["12 €", "8 €", "20 €", "10 €"],
                    dica: {
                        tipo: "popup",
                        texto: "Junta o valor da nota (10 €) ao valor da moeda (2 €)."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Moeda ou Nota?",
                    dinheiro: ["5e"],
                    correta: "NOTA",
                    letrasExtras: ["M", "D"],
                    dica: {
                        tipo: "popup",
                        texto: "É feita de papel especial e tem forma retangular. Começa pela letra N."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Na imagem está uma...",
                    dinheiro: ["2e"],
                    correta: "MOEDA",
                    letrasExtras: ["N", "T"],
                    dica: {
                        tipo: "popup",
                        texto: "É redonda e de metal. A palavra tem 5 letras e começa por M."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve por extenso o <span class='destaque-texto-verde'>valor</span> desta nota.",
                    dinheiro: ["20e"],
                    correta: "VINTE",
                    letrasExtras: ["D", "Z"],
                    dica: {
                        tipo: "popup",
                        texto: "O número 20 escreve-se V-I-N-T-E."
                    }
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
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Tens 5 € + 2 € = 7 €. Como 7 € é menor do que 8 €, falta 1 €."
                    }
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
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Tens 10 € + 2 € = 12 €, que é mais do que 11 €."
                    }
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
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Soma o dinheiro: 5 € + 1 € + 1 € = 7 € exatos."
                    }
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
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Tens 10 € + 5 € = 15 €. Ainda faltam 3 € para chegar aos 18 €."
                    }
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
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Com uma nota de 20 € podes pagar 19 € e ainda recebes 1 € de troco."
                    }
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
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Duas moedas de 2 € somam 4 €, o que não chega para pagar 5 €."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Que conjunto paga <span class='destaque-texto-verde'>exatamente</span> um carrinho de <span class='destaque-badge'>15 €</span>?",
                    mostrarLegenda: false,
                    correta: "15e",
                    opcoes: [
                        { dinheiro: ["10e", "5e"], valor: "15e" },
                        { dinheiro: ["10e", "2e"], valor: "12e" },
                        { dinheiro: ["20e"], valor: "20e" },
                        { dinheiro: ["5e", "5e"], valor: "10e" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Para formar 15 €, junta uma nota de 10 € e uma nota de 5 €."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Que conjunto paga <span class='destaque-texto-verde'>exatamente</span> uma camisola de <span class='destaque-badge'>9 €</span>?",
                    mostrarLegenda: false,
                    correta: "9e",
                    opcoes: [
                        { dinheiro: ["5e", "2e", "2e"], valor: "9e" },
                        { dinheiro: ["5e", "2e", "1e"], valor: "8e" },
                        { dinheiro: ["10e"], valor: "10e" },
                        { dinheiro: ["2e", "2e", "2e"], valor: "6e" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Soma: 5 € + 2 € + 2 € = 9 €."
                    }
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
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Calcula 10 € - 4 € = 6 €. Procura o conjunto com 5 € + 1 €."
                    }
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
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "De 13 € até 20 € faltam 7 € (uma nota de 5 € e uma moeda de 2 €)."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Compras uma borracha por <span class='destaque-badge'>2 €</span> e um caderno por <span class='destaque-badge'>5 €</span>.\nQuanto pagas ao todo?",
                    correta: "7 €",
                    opcoes: ["7 €", "3 €", "8 €", "10 €"],
                    dica: {
                        tipo: "highlight",
                        texto: "Soma os dois preços: 2 € + 5 €."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Um sumo custa <span class='destaque-badge'>3 €</span> e uma sandes custa <span class='destaque-badge'>4 €</span>.\nQual é o total?",
                    correta: "7 €",
                    opcoes: ["7 €", "6 €", "1 €", "8 €"],
                    dica: {
                        tipo: "50-50",
                        texto: "Junta o preço do sumo com o da sandes: 3 € + 4 €."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Pagas uma revista de <span class='destaque-badge'>7 €</span> com esta nota de <span class='destaque-badge'>10 €</span>.\nQuanto recebes de troco?",
                    dinheiro: ["10e"],
                    correta: "3 €",
                    opcoes: ["3 €", "4 €", "2 €", "17 €"],
                    dica: {
                        tipo: "popup",
                        texto: "Subtrai o preço da revista à nota: 10 € - 7 € = 3 €."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Compras um casaco de <span class='destaque-badge'>15 €</span> e pagas com <span class='destaque-badge'>20 €</span>.\nQual é o troco?",
                    dinheiro: ["20e"],
                    correta: "5 €",
                    opcoes: ["5 €", "10 €", "4 €", "35 €"],
                    dica: {
                        tipo: "highlight",
                        texto: "Calcula a diferença: 20 € - 15 €."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Pagaste um gelado de <span class='destaque-badge'>3 €</span> com esta nota.\nRecebes ________ de troco.",
                    dinheiro: ["5e"],
                    correta: "2 €",
                    opcoes: ["2 €", "3 €", "1 €", "8 €"],
                    dica: {
                        tipo: "50-50",
                        texto: "Pagaste com 5 € algo que custa 3 €: 5 € - 3 € = 2 €."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Dois livros custam <span class='destaque-badge'>6 €</span> cada um.\nOs dois juntos custam ________.",
                    correta: "12 €",
                    opcoes: ["12 €", "8 €", "10 €", "6 €"],
                    dica: {
                        tipo: "popup",
                        texto: "Soma o preço dos dois livros: 6 € + 6 €."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "O Rui tem estas duas notas. Se gastar <span class='destaque-badge'>10 €</span>, fica com ________.",
                    dinheiro: ["20e", "10e"],
                    correta: "20 €",
                    opcoes: ["20 €", "10 €", "30 €", "15 €"],
                    dica: {
                        tipo: "highlight",
                        texto: "Se ele tem uma nota de 20 € e outra de 10 € e gasta a de 10 €, sobra a de 20 €."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Pagaste um livro de <span class='destaque-badge'>6 €</span> com esta nota. Quanto recebes de troco? <span class='subtexto-pergunta'>(não te esqueças do símbolo € depois do número)</span>",
                    dinheiro: ["10e"],
                    correta: "4€",
                    letrasExtras: ["2", "5", "6"],
                    dica: {
                        tipo: "popup",
                        texto: "Calcula 10 - 6 = 4 e coloca o símbolo € logo a seguir: 4€."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Pagaste uma bola de <span class='destaque-badge'>12 €</span> com esta nota. Quanto recebes de troco? <span class='subtexto-pergunta'>(não te esqueças do símbolo € depois do número)</span>",
                    dinheiro: ["20e"],
                    correta: "8€",
                    letrasExtras: ["6", "7", "2"],
                    dica: {
                        tipo: "popup",
                        texto: "Calcula 20 - 12 = 8 e escreve o símbolo € a seguir: 8€."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Como se chama o dinheiro que o vendedor nos <span class='destaque-texto-verde'>devolve</span> quando pagamos a mais?",
                    correta: "TROCO",
                    letrasExtras: ["N", "A"],
                    dica: {
                        tipo: "popup",
                        texto: "A palavra tem 5 letras, começa por T e rima com 'pouco'."
                    }
                }
            ]
        },

        // =====================================================================
        // NÍVEL 3: CÊNTIMOS E NOTAS GRANDES (20 Questões | 10 rondas por jogo)
        // =====================================================================
        {
            id: 3,
            titulo: "Cêntimos e Notas Grandes",
            subtitulo: "Descobre os cêntimos, o 1 € e as notas até 200 €",
            corClasse: "bg-roxo",
            icone: "img/icone_euro_3.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a moeda de <span class='destaque-texto-verde'>50 cêntimos</span>?",
                    mostrarLegenda: false,
                    correta: "50c",
                    opcoes: [
                        { dinheiro: ["50c"], valor: "50c" },
                        { dinheiro: ["20c"], valor: "20c" },
                        { dinheiro: ["10c"], valor: "10c" },
                        { dinheiro: ["1e"], valor: "1e" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "É a maior moeda dourada e tem o número 50 bem visível."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a moeda de <span class='destaque-texto-verde'>1 cêntimo</span>?",
                    mostrarLegenda: false,
                    correta: "1c",
                    opcoes: [
                        { dinheiro: ["1c"], valor: "1c" },
                        { dinheiro: ["2c"], valor: "2c" },
                        { dinheiro: ["5c"], valor: "5c" },
                        { dinheiro: ["10c"], valor: "10c" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "É a moeda mais pequena e tem cor de cobre (avermelhada) com o número 1."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a moeda de <span class='destaque-texto-verde'>2 cêntimos</span>?",
                    mostrarLegenda: false,
                    correta: "2c",
                    opcoes: [
                        { dinheiro: ["2c"], valor: "2c" },
                        { dinheiro: ["1c"], valor: "1c" },
                        { dinheiro: ["5c"], valor: "5c" },
                        { dinheiro: ["20c"], valor: "20c" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Procura a moeda de cobre com o número 2."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a nota de <span class='destaque-texto-verde'>100 euros</span>?",
                    mostrarLegenda: false,
                    correta: "100e",
                    opcoes: [
                        { dinheiro: ["100e"], valor: "100e" },
                        { dinheiro: ["50e"], valor: "50e" },
                        { dinheiro: ["200e"], valor: "200e" },
                        { dinheiro: ["20e"], valor: "20e" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "A nota de 100 € é de cor verde."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a nota de <span class='destaque-texto-verde'>200 euros</span>?",
                    mostrarLegenda: false,
                    correta: "200e",
                    opcoes: [
                        { dinheiro: ["200e"], valor: "200e" },
                        { dinheiro: ["100e"], valor: "100e" },
                        { dinheiro: ["20e"], valor: "20e" },
                        { dinheiro: ["50e"], valor: "50e" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "A nota de 200 € é amarela/acastanhada e tem o número 200."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas é a nota de <span class='destaque-texto-verde'>50 euros</span>?",
                    mostrarLegenda: false,
                    correta: "50e",
                    opcoes: [
                        { dinheiro: ["20e"], valor: "20e" },
                        { dinheiro: ["200e"], valor: "200e" },
                        { dinheiro: ["100e"], valor: "100e" },
                        { dinheiro: ["50e"], valor: "50e" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Procura a nota de cor laranja com o número 50."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está exatamente <span class='destaque-amarelo'>1 euro</span> em cêntimos?",
                    mostrarLegenda: false,
                    correta: "100c",
                    opcoes: [
                        { dinheiro: ["50c", "50c"], valor: "100c" },
                        { dinheiro: ["50c", "20c"], valor: "70c" },
                        { dinheiro: ["20c", "20c", "10c"], valor: "50c" },
                        { dinheiro: ["50c", "20c", "20c"], valor: "90c" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "1 euro tem 100 cêntimos: 50 cêntimos + 50 cêntimos = 100 cêntimos."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde estão <span class='destaque-amarelo'>2 euros e 50 cêntimos</span> (2,50 €)?",
                    mostrarLegenda: false,
                    correta: "2,50e",
                    opcoes: [
                        { dinheiro: ["2e", "50c"], valor: "2,50e" },
                        { dinheiro: ["1e", "50c"], valor: "1,50e" },
                        { dinheiro: ["2e", "20c"], valor: "2,20e" },
                        { dinheiro: ["2e", "1e"], valor: "3e" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Procura a moeda de 2 € junto com a moeda de 50 cêntimos."
                    }
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
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Soma os cêntimos: 50 + 20 + 10 = 80 cêntimos. Faltam 10 cêntimos para 90."
                    }
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
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "50c + 50c já fazem 1 €, e ainda sobram 20 cêntimos!"
                    }
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
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Tens 50 € + 20 € = 70 €, o que é menos do que 100 €."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "<span class='destaque-fundo'>1 euro</span> equivale a ________ cêntimos.",
                    dinheiro: ["1e"],
                    correta: "100",
                    opcoes: ["100", "10", "50", "1000"],
                    dica: {
                        tipo: "highlight",
                        texto: "Cada euro divide-se em 100 cêntimos."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Para fazer <span class='destaque-fundo'>1 euro</span> precisamos de ________ moedas de 10 cêntimos.",
                    dinheiro: ["10c", "10c", "10c", "10c", "10c", "10c", "10c", "10c", "10c", "10c"],
                    correta: "10",
                    opcoes: ["10", "5", "20", "100"],
                    dica: {
                        tipo: "popup",
                        texto: "Conta as moedas na imagem: 10 + 10 + 10... 10 vezes dá 100 cêntimos (1 €)."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Para formar <span class='destaque-fundo'>1 euro</span> são precisas ________ moedas de 1 cêntimo.",
                    dinheiro: ["1c"],
                    correta: "100",
                    opcoes: ["100", "10", "50", "20"],
                    dica: {
                        tipo: "50-50",
                        texto: "Como 1 € tem 100 cêntimos, precisas de 100 moedas de 1 cêntimo."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "<span class='destaque-fundo'>Cinco moedas de 20 cêntimos</span> valem ________.",
                    dinheiro: ["20c", "20c", "20c", "20c", "20c"],
                    correta: "1 €",
                    opcoes: ["1 €", "50 cêntimos", "2 €", "20 cêntimos"],
                    dica: {
                        tipo: "popup",
                        texto: "Conta de 20 em 20 cinco vezes: 20, 40, 60, 80, 100 cêntimos = 1 €."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "<span class='destaque-fundo'>Duas notas de 50 €</span> valem o mesmo que uma nota de ________.",
                    dinheiro: ["50e", "50e"],
                    correta: "100 €",
                    opcoes: ["100 €", "200 €", "500 €", "50 €"],
                    dica: {
                        tipo: "highlight",
                        texto: "Calcula quanto é 50 € + 50 €."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Soma o valor de todas estas moedas.",
                    dinheiro: ["20c", "10c", "5c", "2c", "1c"],
                    correta: "38 cêntimos",
                    opcoes: ["38 cêntimos", "35 cêntimos", "40 cêntimos", "37 cêntimos"],
                    dica: {
                        tipo: "50-50",
                        texto: "Soma da maior para a menor: 20 + 10 = 30; depois 30 + 5 + 2 + 1 = 38."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual é o valor total desta quantia?",
                    dinheiro: ["2e", "1e", "50c", "20c"],
                    correta: "3,70 €",
                    opcoes: ["3,70 €", "3,50 €", "2,70 €", "4,20 €"],
                    dica: {
                        tipo: "popup",
                        texto: "Soma primeiro os euros (2 € + 1 € = 3 €) e depois os cêntimos (50c + 20c = 70c)."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Tens <span class='destaque-badge'>2 €</span> e compras um lápis por <span class='destaque-badge'>1,50 €</span>. Quanto recebes de troco?",
                    correta: "50 cêntimos",
                    opcoes: ["50 cêntimos", "20 cêntimos", "1 €", "10 cêntimos"],
                    dica: {
                        tipo: "highlight",
                        texto: "2 € são 200 cêntimos e 1,50 € são 150 cêntimos. Faltam 50 cêntimos."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve <span class='destaque-fundo'>por extenso</span> o valor desta nota.",
                    dinheiro: ["50e"],
                    correta: "CINQUENTA",
                    letrasExtras: ["V", "S"],
                    dica: {
                        tipo: "popup",
                        texto: "O número 50 escreve-se C-I-N-Q-U-E-N-T-A."
                    }
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