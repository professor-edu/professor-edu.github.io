const CONFIG_JOGO = {
    titulo: "Detetive dos Números",
    subtitulo: "Descobre pistas, lê ábacos e desvenda os números até 1000!",
    subtituloMenu: "Descobre pistas, lê ábacos e desvenda os números até 1000!",
    tema: {
        corPrimaria: "#4dabf7",
        corSecundaria: "#4a8deb"
    },
    niveis: [
        // =====================================================================
        // NÍVEL 1: PISTAS ATÉ 100 (30 Questões | 10 rondas por jogo)
        // =====================================================================
        {
            id: 1,
            titulo: "Pistas até 100",
            subtitulo: "Par ou ímpar, dezenas e unidades, leitura e comparação até 100",
            corClasse: "bg-azul",
            icone: "img/icone_detetive_1.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    tipo: "situacao",
                    pergunta: "Analisa a pista.\nO número <span class='destaque-badge'>24</span> é...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "PAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Olha para o algarismo das unidades (4). Os números terminados em 0, 2, 4, 6 ou 8 são pares."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "O código do cofre é <span class='destaque-badge'>47</span>.\nEste número é...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "ÍMPAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Termina em 7, por isso sobra sempre 1 elemento sem par."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "Encontraste a pista <span class='destaque-badge'>60</span>.\nÉ um número...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "PAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Todos os números terminados em 0 são pares."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "A porta tem o número <span class='destaque-badge'>89</span>.\nÉ...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "ÍMPAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Os números terminados em 1, 3, 5, 7 ou 9 são ímpares."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "Pista do suspeito!\n«O número <span class='destaque-amarelo'>53</span> tem 5 dezenas e 3 unidades.»\nEstá certo?",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "SIM",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "50 + 3 = 53. A pista está correta!"
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "Pista falsa ou verdadeira?\n«O número <span class='destaque-badge'>72</span> é maior do que <span class='destaque-badge'>79</span>.»",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NÃO",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Ambos têm 7 dezenas, mas 2 unidades é menor do que 9 unidades."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Clica no ábaco que representa o número <span class='destaque-badge'>35</span>",
                    mostrarLegenda: false,
                    correta: "35",
                    opcoes: [
                        { abaco: [0, 3, 5], valor: "35" },
                        { abaco: [0, 5, 3], valor: "53" },
                        { abaco: [3, 0, 5], valor: "305" },
                        { abaco: [0, 3, 0], valor: "30" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Procura 3 argolas vermelhas (D) e 5 argolas azuis (U)."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está representado o número <span class='destaque-badge'>62</span>?",
                    mostrarLegenda: false,
                    correta: "62",
                    opcoes: [
                        { mab: [0, 6, 2], valor: "62" },
                        { mab: [0, 2, 6], valor: "26" },
                        { mab: [0, 6, 0], valor: "60" },
                        { mab: [0, 5, 2], valor: "52" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Conta 6 barras vermelhas de dezenas e 2 cubinhos azuis de unidades."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual o ábaco que mostra o número <span class='destaque-badge'>40</span>?",
                    mostrarLegenda: false,
                    correta: "40",
                    opcoes: [
                        { abaco: [0, 4, 0], valor: "40" },
                        { abaco: [0, 0, 4], valor: "4" },
                        { abaco: [4, 0, 0], valor: "400" },
                        { abaco: [0, 4, 4], valor: "44" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "40 são 4 dezenas e 0 unidades: a haste U fica vazia!"
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Identifica o material multibásico que vale <span class='destaque-badge'>28</span>.",
                    mostrarLegenda: false,
                    correta: "28",
                    opcoes: [
                        { mab: [0, 2, 8], valor: "28" },
                        { mab: [0, 8, 2], valor: "82" },
                        { mab: [0, 2, 6], valor: "26" },
                        { mab: [0, 3, 8], valor: "38" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Procura 2 barras de dezena e 8 cubinhos soltos."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual ábaco representa <span class='destaque-texto-verde'>7 dezenas e 1 unidade</span>?",
                    mostrarLegenda: false,
                    correta: "71",
                    opcoes: [
                        { abaco: [0, 7, 1], valor: "71" },
                        { abaco: [0, 1, 7], valor: "17" },
                        { abaco: [7, 0, 1], valor: "701" },
                        { abaco: [0, 7, 0], valor: "70" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "7 argolas na haste D e 1 argola na haste U."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está o número <span class='destaque-badge'>94</span>?",
                    mostrarLegenda: false,
                    correta: "94",
                    opcoes: [
                        { mab: [0, 9, 4], valor: "94" },
                        { mab: [0, 4, 9], valor: "49" },
                        { mab: [0, 8, 4], valor: "84" },
                        { mab: [0, 9, 2], valor: "92" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "94 tem 9 dezenas (barras vermelhas) e 4 unidades (cubinhos azuis)."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Completa com o sinal certo.\n<span class='destaque-badge'>58</span> ________ <span class='destaque-badge'>85</span>",
                    ordemFixa: true,
                    correta: "<",
                    opcoes: ["<", ">", "="],
                    dica: {
                        tipo: "popup",
                        texto: "58 tem 5 dezenas e 85 tem 8 dezenas. Como 58 é menor, o bico aponta para o 58 (<)."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Completa a comparação.\n<span class='destaque-badge'>91</span> ________ <span class='destaque-badge'>19</span>",
                    ordemFixa: true,
                    correta: ">",
                    opcoes: ["<", ">", "="],
                    dica: {
                        tipo: "highlight",
                        texto: "91 é maior do que 19, por isso usamos o sinal >."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Compara as duas pistas.\n<span class='destaque-amarelo'>4 dezenas</span> ________ <span class='destaque-amarelo'>40</span>",
                    ordemFixa: true,
                    correta: "=",
                    opcoes: ["<", ">", "="],
                    dica: {
                        tipo: "50-50",
                        texto: "4 dezenas valem exatamente 40 unidades."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Compara os valores.\n<span class='destaque-badge'>67</span> ________ <span class='destaque-badge'>63</span>",
                    ordemFixa: true,
                    correta: ">",
                    opcoes: ["<", ">", "="],
                    dica: {
                        tipo: "popup",
                        texto: "As dezenas são iguais (6), mas 7 unidades é maior do que 3 unidades."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Descobre o número que falta na sequência.\n30 -> 40 -> ________ -> 60",
                    correta: "50",
                    opcoes: ["50", "45", "70", "35"],
                    dica: {
                        tipo: "50-50",
                        texto: "A sequência avança de 10 em 10: depois do 40 vem o 50."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "O número imediatamente <span class='destaque-texto-verde'>antes</span> de <span class='destaque-badge'>80</span> é ________.",
                    correta: "79",
                    opcoes: ["79", "81", "70", "90"],
                    dica: {
                        tipo: "highlight",
                        texto: "Subtrai 1 ao 80: 80 - 1 = 79."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Que número é formado por <span class='destaque-fundo'>6 dezenas e 4 unidades</span>?",
                    correta: "64",
                    opcoes: ["64", "46", "604", "10"],
                    dica: {
                        tipo: "50-50",
                        texto: "6 dezenas são 60; junta 4 unidades e obténs 64."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual é o valor do algarismo <span class='destaque-amarelo'>7</span> no número <span class='destaque-fundo'>73</span>?",
                    correta: "70",
                    opcoes: ["70", "7", "700", "3"],
                    dica: {
                        tipo: "popup",
                        texto: "O 7 está na posição das dezenas, por isso vale 70."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Que número está representado neste ábaco?",
                    abaco: [0, 5, 8],
                    correta: "58",
                    opcoes: ["58", "85", "508", "13"],
                    dica: {
                        tipo: "highlight",
                        texto: "Conta 5 argolas nas dezenas (50) e 8 nas unidades (8)."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual é a leitura correta do número <span class='destaque-badge'>45</span>?",
                    correta: "Quarenta e cinco",
                    opcoes: ["Quarenta e cinco", "Cinquenta e quatro", "Quatro e cinco", "Quarenta"],
                    dica: {
                        tipo: "50-50",
                        texto: "O 4 nas dezenas lê-se «quarenta» e o 5 lê-se «cinco»."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual destes números é <span class='destaque-fundo'>ímpar</span>?",
                    correta: "31",
                    opcoes: ["31", "24", "48", "90"],
                    dica: {
                        tipo: "popup",
                        texto: "Procura o único número que termina em 1, 3, 5, 7 ou 9."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual é o <span class='destaque-texto-verde'>sucessor</span> (número logo a seguir) de <span class='destaque-badge'>99</span>?",
                    correta: "100",
                    opcoes: ["100", "98", "90", "101"],
                    dica: {
                        tipo: "highlight",
                        texto: "99 + 1 = 100 (uma centena!)."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve por extenso o número <span class='destaque-badge'>15</span>.",
                    correta: "QUINZE",
                    letrasExtras: ["C", "O"],
                    dica: {
                        tipo: "popup",
                        texto: "O número 15 escreve-se Q-U-I-N-Z-E."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve por extenso o número <span class='destaque-badge'>20</span>.",
                    correta: "VINTE",
                    letrasExtras: ["D", "S"],
                    dica: {
                        tipo: "popup",
                        texto: "Duas dezenas lêem-se V-I-N-T-E."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve <span class='destaque-fundo'>por extenso</span> o número <span class='destaque-badge'>40</span>.",
                    correta: "QUARENTA",
                    letrasExtras: ["C", "I"],
                    dica: {
                        tipo: "popup",
                        texto: "Quatro dezenas escrevem-se Q-U-A-R-E-N-T-A."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve <span class='destaque-fundo'>por extenso</span> o número <span class='destaque-badge'>70</span>.",
                    correta: "SETENTA",
                    letrasExtras: ["C", "O"],
                    dica: {
                        tipo: "popup",
                        texto: "Sete dezenas escrevem-se S-E-T-E-N-T-A."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Observa o ábaco e escreve o número em <span class='destaque-fundo'>algarismos</span>.",
                    abaco: [0, 4, 6],
                    correta: "46",
                    letrasExtras: ["6", "0", "5"],
                    dica: {
                        tipo: "popup",
                        texto: "Há 4 argolas nas dezenas e 6 nas unidades: forma o 46."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Observa o material multibásico e escreve o número em <span class='destaque-fundo'>algarismos</span>.",
                    mab: [0, 8, 3],
                    correta: "83",
                    letrasExtras: ["3", "8", "0"],
                    dica: {
                        tipo: "popup",
                        texto: "8 barras vermelhas (80) e 3 cubinhos azuis (3) formam o 83."
                    }
                }
            ]
        },

        // =====================================================================
        // NÍVEL 2: O MISTÉRIO DAS CENTENAS (30 Questões | 10 rondas por jogo)
        // =====================================================================
        {
            id: 2,
            titulo: "O Mistério das Centenas",
            subtitulo: "Desvenda números até 500 com centenas, dezenas e unidades",
            corClasse: "bg-roxo",
            icone: "img/icone_detetive_2.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    tipo: "situacao",
                    pergunta: "Analisa a pista.\nO número <span class='destaque-badge'>136</span> é...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "PAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Mesmo com centenas, olha sempre para o último algarismo (6). Como 6 é par, 136 é par."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "O cofre tem o código <span class='destaque-badge'>245</span>.\nEste número é...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "ÍMPAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "O algarismo das unidades é 5, que é um número ímpar."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "Pista do arquivo.\n<span class='destaque-badge'>300</span> é um número...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "PAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "300 termina em 0, por isso é um número par."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "Encontraste a ficha <span class='destaque-badge'>411</span>.\nEste número é...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "ÍMPAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Termina em 1, logo é um número ímpar."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "<span class='destaque-fundo'>Uma centena</span> é igual a <span class='destaque-amarelo'>10</span> dezenas.\nEstá certo?",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "SIM",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "10 grupos de 10 dão 100, que é exatamente 1 centena!"
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "No número <span class='destaque-amarelo'>342</span>, o algarismo <span class='destaque-fundo'>3 vale 30</span>.\nEstá certo?",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NÃO",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "O 3 está na casa das centenas, por isso vale 300 e não 30."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual ábaco representa o número <span class='destaque-badge'>124</span>?",
                    mostrarLegenda: false,
                    correta: "124",
                    opcoes: [
                        { abaco: [1, 2, 4], valor: "124" },
                        { abaco: [1, 4, 2], valor: "142" },
                        { abaco: [2, 1, 4], valor: "214" },
                        { abaco: [4, 2, 1], valor: "421" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Procura 1 argola verde (C), 2 vermelhas (D) e 4 azuis (U)."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está representado o número <span class='destaque-badge'>231</span>?",
                    mostrarLegenda: false,
                    correta: "231",
                    opcoes: [
                        { mab: [2, 3, 1], valor: "231" },
                        { mab: [3, 2, 1], valor: "321" },
                        { mab: [2, 1, 3], valor: "213" },
                        { mab: [1, 3, 2], valor: "132" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "2 placas verdes de 100, 3 barras vermelhas de 10 e 1 cubinho azul."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual ábaco mostra o número <span class='destaque-badge'>315</span>?",
                    mostrarLegenda: false,
                    correta: "315",
                    opcoes: [
                        { abaco: [3, 1, 5], valor: "315" },
                        { abaco: [3, 5, 1], valor: "351" },
                        { abaco: [1, 3, 5], valor: "135" },
                        { abaco: [5, 1, 3], valor: "513" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "315 tem 3 centenas, 1 dezena e 5 unidades."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Identifica o material multibásico que vale <span class='destaque-badge'>152</span>.",
                    mostrarLegenda: false,
                    correta: "152",
                    opcoes: [
                        { mab: [1, 5, 2], valor: "152" },
                        { mab: [1, 2, 5], valor: "125" },
                        { mab: [2, 5, 1], valor: "251" },
                        { mab: [1, 5, 0], valor: "150" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Procura 1 placa verde (100), 5 barras vermelhas (50) e 2 cubinhos azuis (2)."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual ábaco representa <span class='destaque-texto-verde'>4 centenas, 2 dezenas e 3 unidades</span>?",
                    mostrarLegenda: false,
                    correta: "423",
                    opcoes: [
                        { abaco: [4, 2, 3], valor: "423" },
                        { abaco: [2, 4, 3], valor: "243" },
                        { abaco: [4, 3, 2], valor: "432" },
                        { abaco: [3, 2, 4], valor: "324" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "4 argolas verdes em C, 2 vermelhas em D e 3 azuis em U."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está o número <span class='destaque-badge'>210</span>?",
                    mostrarLegenda: false,
                    correta: "210",
                    opcoes: [
                        { abaco: [2, 1, 0], valor: "210" },
                        { abaco: [2, 0, 1], valor: "201" },
                        { abaco: [1, 2, 0], valor: "120" },
                        { abaco: [0, 2, 1], valor: "21" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "210 tem 2 centenas, 1 dezena e 0 unidades (haste U vazia)."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Compara os números.\n<span class='destaque-badge'>245</span> ________ <span class='destaque-badge'>254</span>",
                    ordemFixa: true,
                    correta: "<",
                    opcoes: ["<", ">", "="],
                    dica: {
                        tipo: "popup",
                        texto: "Ambos têm 2 centenas, mas 4 dezenas é menor do que 5 dezenas (<)."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Compara os valores.\n<span class='destaque-badge'>412</span> ________ <span class='destaque-badge'>398</span>",
                    ordemFixa: true,
                    correta: ">",
                    opcoes: ["<", ">", "="],
                    dica: {
                        tipo: "highlight",
                        texto: "4 centenas (400) são maiores do que 3 centenas (300), logo usamos >."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Compara as duas pistas.\n<span class='destaque-fundo'>3 centenas</span> ________ <span class='destaque-badge'>300</span>",
                    ordemFixa: true,
                    correta: "=",
                    opcoes: ["<", ">", "="],
                    dica: {
                        tipo: "50-50",
                        texto: "Cada centena vale 100, por isso 3 centenas = 300."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Completa a sequência.\n100 -> 200 -> ________ -> 400",
                    correta: "300",
                    opcoes: ["300", "250", "500", "210"],
                    dica: {
                        tipo: "50-50",
                        texto: "A sequência avança de 100 em 100: depois do 200 vem o 300."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "O número imediatamente <span class='destaque-texto-verde'>antes</span> de <span class='destaque-badge'>300</span> é ________.",
                    correta: "299",
                    opcoes: ["299", "301", "200", "290"],
                    dica: {
                        tipo: "popup",
                        texto: "Subtrai 1 ao 300: 300 - 1 = 299."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Decomposição.\n<span class='destaque-badge'>468</span> = 400 + ________ + 8",
                    correta: "60",
                    opcoes: ["60", "6", "600", "40"],
                    dica: {
                        tipo: "highlight",
                        texto: "O algarismo 6 está nas dezenas, por isso vale 60."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual número corresponde a <span class='destaque-fundo'>1 centena, 3 dezenas e 4 unidades</span>?",
                    correta: "134",
                    opcoes: ["134", "143", "314", "431"],
                    dica: {
                        tipo: "50-50",
                        texto: "100 + 30 + 4 = 134."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual é o valor do algarismo <span class='destaque-amarelo'>4</span> no número <span class='destaque-fundo'>429</span>?",
                    correta: "400",
                    opcoes: ["400", "40", "4", "420"],
                    dica: {
                        tipo: "popup",
                        texto: "O 4 está na casa das centenas, logo vale 400."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Que número está representado neste ábaco?",
                    abaco: [2, 5, 3],
                    correta: "253",
                    opcoes: ["253", "235", "523", "352"],
                    dica: {
                        tipo: "highlight",
                        texto: "2 centenas, 5 dezenas e 3 unidades formam o 253."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual é a leitura correta do número <span class='destaque-badge'>250</span>?",
                    correta: "Duzentos e cinquenta",
                    opcoes: ["Duzentos e cinquenta", "Duzentos e cinco", "Quinhentos e vinte", "Cinquenta e dois"],
                    dica: {
                        tipo: "50-50",
                        texto: "200 lê-se «duzentos» e 50 lê-se «cinquenta»."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Quanto vale <span class='destaque-fundo'>300 + 70 + 2</span>?",
                    correta: "372",
                    opcoes: ["372", "327", "732", "370"],
                    dica: {
                        tipo: "popup",
                        texto: "Junta 3 centenas (300), 7 dezenas (70) e 2 unidades (2)."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual destes números é <span class='destaque-texto-verde'>maior</span> do que <span class='destaque-badge'>450</span>?",
                    correta: "458",
                    opcoes: ["458", "449", "399", "405"],
                    dica: {
                        tipo: "highlight",
                        texto: "Procura o único número que ultrapassa 450."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve por extenso o número <span class='destaque-badge'>100</span>.",
                    correta: "CEM",
                    letrasExtras: ["S", "N"],
                    dica: {
                        tipo: "popup",
                        texto: "Uma centena exata escreve-se C-E-M."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve por extenso o número <span class='destaque-badge'>200</span>.",
                    correta: "DUZENTOS",
                    letrasExtras: ["C", "A"],
                    dica: {
                        tipo: "popup",
                        texto: "Duas centenas escrevem-se D-U-Z-E-N-T-O-S."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve por extenso o número <span class='destaque-badge'>300</span>.",
                    correta: "TREZENTOS",
                    letrasExtras: ["S", "I"],
                    dica: {
                        tipo: "popup",
                        texto: "Três centenas escrevem-se T-R-E-Z-E-N-T-O-S."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Observa o ábaco e escreve o número em <span class='destaque-texto-verde'>algarismos</span>.",
                    abaco: [1, 4, 2],
                    correta: "142",
                    letrasExtras: ["0", "5"],
                    dica: {
                        tipo: "popup",
                        texto: "1 argola em C, 4 em D e 2 em U formam o 142."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Observa o material multibásico e escreve o número em <span class='destaque-texto-verde'>algarismos</span>.",
                    mab: [2, 3, 5],
                    correta: "235",
                    letrasExtras: ["1", "0"],
                    dica: {
                        tipo: "popup",
                        texto: "2 placas (200), 3 barras (30) e 5 cubinhos (5) formam o 235."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve em algarismos.\n<span class='destaque-amarelo'>quatrocentos e quinze</span>",
                    correta: "415",
                    letrasExtras: ["5", "0"],
                    dica: {
                        tipo: "popup",
                        texto: "400 + 15 = 415."
                    }
                }
            ]
        },

        // =====================================================================
        // NÍVEL 3: COFRE ATÉ 1000 (30 Questões | 10 rondas por jogo)
        // =====================================================================
        {
            id: 3,
            titulo: "Cofre até 1000",
            subtitulo: "Domina os números até 1000, zeros intercalados e desafios lógicos",
            corClasse: "bg-verde",
            icone: "img/icone_detetive_3.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    tipo: "situacao",
                    pergunta: "O número <span class='destaque-badge'>784</span> é...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "PAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "O algarismo das unidades é 4, logo 784 é par."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "O código secreto é <span class='destaque-badge'>903</span>.\nEste número é...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "ÍMPAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Termina em 3, que é um algarismo ímpar."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "O número <span class='destaque-badge'>1000</span> (um milhar) é...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "PAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "1000 termina em 0, por isso é um número par."
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "Pista do cofre.\n<span class='destaque-badge'>657</span> é um número...",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "ÍMPAR",
                    opcoes: [
                        { img: "img/btn_par.svg", valor: "PAR", alt: "PAR" },
                        { img: "img/btn_impar.svg", valor: "ÍMPAR", alt: "ÍMPAR" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "Olha para o 7 nas unidades: é ímpar!"
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>10</span> centenas formam o número <span class='destaque-badge'>1000</span>.\nEstá certo?",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "SIM",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "10 grupos de 100 dão 1000 (um milhar). Está certo!"
                    }
                },
                {
                    tipo: "situacao",
                    pergunta: "O número <span class='destaque-badge'>508</span> tem 5 centenas e 8 dezenas.\nEstá certo?",
                    mostrarLegenda: false,
                    ordemFixa: true,
                    correta: "NÃO",
                    opcoes: [
                        { img: "img/btn_sim.svg", valor: "SIM", alt: "SIM" },
                        { img: "img/btn_nao.svg", valor: "NÃO", alt: "NÃO" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "Cuidado com o zero! 508 tem 5 centenas, 0 dezenas e 8 unidades."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "<span class='destaque-fundo'>Atenção ao zero!</span>\nQue ábaco representa o número <span class='destaque-badge'>305</span>?",
                    mostrarLegenda: false,
                    correta: "305",
                    opcoes: [
                        { abaco: [3, 0, 5], valor: "305" },
                        { abaco: [3, 5, 0], valor: "350" },
                        { abaco: [5, 0, 3], valor: "503" },
                        { abaco: [0, 3, 5], valor: "35" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "305 tem 0 dezenas, por isso a haste vermelha (D) tem de estar vazia!"
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Que ábaco mostra o número <span class='destaque-badge'>640</span>?",
                    mostrarLegenda: false,
                    correta: "640",
                    opcoes: [
                        { abaco: [6, 4, 0], valor: "640" },
                        { abaco: [6, 0, 4], valor: "604" },
                        { abaco: [4, 6, 0], valor: "460" },
                        { abaco: [6, 4, 4], valor: "644" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "6 argolas verdes (C), 4 vermelhas (D) e nenhuma azul (U)."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está representado o número <span class='destaque-badge'>402</span>?",
                    mostrarLegenda: false,
                    correta: "402",
                    opcoes: [
                        { mab: [4, 0, 2], valor: "402" },
                        { mab: [4, 2, 0], valor: "420" },
                        { mab: [2, 0, 4], valor: "204" },
                        { mab: [4, 2, 2], valor: "422" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "4 placas verdes (400), zero barras vermelhas e 2 cubinhos azuis (2)."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual ábaco representa o número <span class='destaque-badge'>819</span>?",
                    mostrarLegenda: false,
                    correta: "819",
                    opcoes: [
                        { abaco: [8, 1, 9], valor: "819" },
                        { abaco: [8, 9, 1], valor: "891" },
                        { abaco: [9, 1, 8], valor: "918" },
                        { abaco: [8, 0, 9], valor: "809" }
                    ],
                    dica: {
                        tipo: "50-50",
                        texto: "8 centenas, 1 dezena e 9 unidades."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual ábaco mostra <span class='destaque-texto-verde'>7 centenas e 6 unidades</span>?",
                    mostrarLegenda: false,
                    correta: "706",
                    opcoes: [
                        { abaco: [7, 0, 6], valor: "706" },
                        { abaco: [7, 6, 0], valor: "760" },
                        { abaco: [6, 0, 7], valor: "607" },
                        { abaco: [0, 7, 6], valor: "76" }
                    ],
                    dica: {
                        tipo: "highlight",
                        texto: "Como não fala em dezenas, a haste D fica a zero: 706."
                    }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Onde está o número <span class='destaque-badge'>530</span>?",
                    mostrarLegenda: false,
                    correta: "530",
                    opcoes: [
                        { mab: [5, 3, 0], valor: "530" },
                        { mab: [5, 0, 3], valor: "503" },
                        { mab: [3, 5, 0], valor: "350" },
                        { mab: [5, 3, 3], valor: "533" }
                    ],
                    dica: {
                        tipo: "popup",
                        texto: "5 placas de 100 (500) e 3 barras de 10 (30), sem cubinhos soltos."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Compara os números.\n<span class='destaque-badge'>709</span> ________ <span class='destaque-badge'>790</span>",
                    ordemFixa: true,
                    correta: "<",
                    opcoes: ["<", ">", "="],
                    dica: {
                        tipo: "popup",
                        texto: "709 tem 0 dezenas e 790 tem 9 dezenas, por isso 709 é menor (<)."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Compara os valores.\n<span class='destaque-badge'>850</span> ________ <span class='destaque-badge'>805</span>",
                    ordemFixa: true,
                    correta: ">",
                    opcoes: ["<", ">", "="],
                    dica: {
                        tipo: "highlight",
                        texto: "5 dezenas (50) são maiores do que 0 dezenas (05), logo usamos >."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Compara as equivalências.\n<span class='destaque-fundo'>10 centenas</span> ________ <span class='destaque-badge'>1000</span>",
                    ordemFixa: true,
                    correta: "=",
                    opcoes: ["<", ">", "="],
                    dica: {
                        tipo: "50-50",
                        texto: "10 centenas valem exatamente 1000."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "O número imediatamente <span class='destaque-texto-verde'>antes</span> de <span class='destaque-badge'>500</span> é ________.",
                    correta: "499",
                    opcoes: ["499", "501", "490", "400"],
                    dica: {
                        tipo: "popup",
                        texto: "Subtrai 1 a 500: 500 - 1 = 499."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "O número imediatamente <span class='destaque-texto-vermelho'>depois</span> de <span class='destaque-badge'>899</span> é ________.",
                    correta: "900",
                    opcoes: ["900", "898", "890", "1000"],
                    dica: {
                        tipo: "50-50",
                        texto: "Soma 1 a 899: 899 + 1 = 900."
                    }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Completa o código.\n 650 — 700 — ________ — 800",
                    correta: "750",
                    opcoes: ["750", "710", "705", "850"],
                    dica: {
                        tipo: "highlight",
                        texto: "A sequência soma 50 de cada vez: 700 + 50 = 750."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual o número que corresponde a <span class='destaque-fundo'>9 centenas, 0 dezenas e 4 unidades</span>?",
                    correta: "904",
                    opcoes: ["904", "940", "409", "94"],
                    dica: {
                        tipo: "50-50",
                        texto: "900 + 0 + 4 = 904."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual é o valor do algarismo <span class='destaque-amarelo'>8</span> no número <span class='destaque-badge'>842</span>?",
                    correta: "800",
                    opcoes: ["800", "80", "8", "840"],
                    dica: {
                        tipo: "popup",
                        texto: "O 8 ocupa a posição das centenas, por isso vale 800."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Quantas <span class='destaque-texto-verde'>dezenas</span> tem <strong>ao todo</strong> o número <span class='destaque-badge'>600</span>?",
                    correta: "60 dezenas",
                    opcoes: ["60 dezenas", "6 dezenas", "600 dezenas", "10 dezenas"],
                    dica: {
                        tipo: "50-50",
                        texto: "Cada centena tem 10 dezenas; em 6 centenas há 60 dezenas."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual é a leitura correta do número <span class='destaque-badge'>708</span>?",
                    correta: "Setecentos e oito",
                    opcoes: ["Setecentos e oito", "Setecentos e oitenta", "Setenta e oito", "Oitocentos e sete"],
                    dica: {
                        tipo: "highlight",
                        texto: "700 lê-se «setecentos» e o 8 nas unidades lê-se «oito»."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Quanto falta a <span class='destaque-badge'>950</span> para chegar a <span class='destaque-badge'>1000</span>?",
                    correta: "50",
                    opcoes: ["50", "5", "500", "150"],
                    dica: {
                        tipo: "popup",
                        texto: "950 + 50 = 1000."
                    }
                },
                {
                    tipo: "padrao",
                    pergunta: "Qual destes números está <strong>entre</strong> <span class='destaque-badge'>680</span> e <span class='destaque-badge'>710</span>?",
                    correta: "695",
                    opcoes: ["695", "675", "715", "609"],
                    dica: {
                        tipo: "50-50",
                        texto: "695 é maior do que 680 e menor do que 710."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Observa o ábaco e escreve o número em <span class='destaque-texto-verde'>algarismos</span>.",
                    abaco: [6, 0, 8],
                    correta: "608",
                    letrasExtras: ["8", "6"],
                    dica: {
                        tipo: "popup",
                        texto: "6 centenas, 0 dezenas e 8 unidades formam o 608."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Observa o material multibásico e escreve o número em <span class='destaque-texto-verde'>algarismos</span>.",
                    mab: [9, 4, 0],
                    correta: "940",
                    letrasExtras: ["4", "9"],
                    dica: {
                        tipo: "popup",
                        texto: "9 placas de 100 e 4 barras de 10 formam o 940."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Escreve em algarismos o número <span class='destaque-fundo'>um milhar</span> (dez centenas).",
                    correta: "1000",
                    letrasExtras: ["1", "0"],
                    dica: {
                        tipo: "popup",
                        texto: "Um milhar escreve-se com o algarismo 1 seguido de três zeros: 1000."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Abre o cofre!\nForma o <span class='destaque-texto-verde'>maior</span> número possível com os algarismos 3, 8 e 1.",
                    correta: "831",
                    letrasExtras: ["0"],
                    dica: {
                        tipo: "popup",
                        texto: "Coloca o maior algarismo (8) nas centenas, depois o 3 e por fim o 1."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Abre o cofre!\nForma o <span class='destaque-texto-verde'>menor</span> número de três algarismos com 5, 0 e 2.",
                    correta: "205",
                    letrasExtras: ["8"],
                    dica: {
                        tipo: "popup",
                        texto: "Um número de 3 algarismos não começa por 0: coloca o 2 nas centenas, o 0 nas dezenas e o 5 nas unidades."
                    }
                },
                {
                    tipo: "construtor",
                    pergunta: "Como se chama um grupo de <span class='destaque-badge'>100</span> unidades (ou 10 dezenas)?",
                    correta: "CENTENA",
                    letrasExtras: ["D", "M"],
                    dica: {
                        tipo: "popup",
                        texto: "A palavra tem 7 letras e começa por C-E-N..."
                    }
                }
            ]
        },

        // =====================================================================
        // NÍVEL 4: DETETIVE MESTRE (Mistura das 90 questões | 10 rondas por jogo)
        // =====================================================================
        {
            id: 4,
            titulo: "Detetive Mestre",
            subtitulo: "Super desafio com todas as pistas até 1000!",
            corClasse: "bg-turquesa",
            icone: "img/icone_detetive_4.svg",
            numQuestoes: 10,
            misturarModos: true,
            perguntas: []
        }
    ]
};