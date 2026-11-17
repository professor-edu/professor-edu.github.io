const CONFIG_JOGO = {
    titulo: "Caça ao Género",
    subtituloMenu: "Descobre o masculino e o feminino de cada palavra!",
    textoInfoDivisao: "Dica de ouro: para saberes o género de um nome, experimenta colocar «o» (masculino) ou «a» (feminino) antes da palavra.",
    tema: {
        corPrimaria: "#7c3aed",
        corSecundaria: "#5b21b6"
    },
    niveis: [
        // =====================================================================
        // NÍVEL 1: PRIMEIROS PASSOS
        // (10 Lacunas O/A + 12 Cartões Rápidos SVG + 5 Construtor de Palavras)
        // =====================================================================
        {
            id: 1,
            titulo: "Primeiros Passos",
            subtitulo: "Usa O ou A e constrói os primeiros pares",
            corClasse: "bg-turquesa",
            icone: "img/icone_genero_1.svg",
            numQuestoes: 10,
            perguntas: [
                // --- Lacunas O / A (10 questões) ---
                {
                    id: 101,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ mesa",
                    opcoes: ["O", "A"],
                    correta: "A",
                    dica: "Dizemos «a mesa», por isso é um nome feminino."
                },
                {
                    id: 102,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ lápis",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o lápis», por isso é um nome masculino."
                },
                {
                    id: 103,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ janela",
                    opcoes: ["O", "A"],
                    correta: "A",
                    dica: "Dizemos «a janela», por isso é um nome feminino."
                },
                {
                    id: 104,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ caderno",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o caderno», por isso é um nome masculino."
                },
                {
                    id: 105,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ árvore",
                    opcoes: ["O", "A"],
                    correta: "A",
                    dica: "Dizemos «a árvore», por isso é um nome feminino."
                },
                {
                    id: 106,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ peixe",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o peixe», por isso é um nome masculino."
                },
                {
                    id: 107,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ escola",
                    opcoes: ["O", "A"],
                    correta: "A",
                    dica: "Dizemos «a escola», por isso é um nome feminino."
                },
                {
                    id: 108,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ jardim",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o jardim», por isso é um nome masculino."
                },
                {
                    id: 109,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ nuvem",
                    opcoes: ["O", "A"],
                    correta: "A",
                    dica: "Dizemos «a nuvem», por isso é um nome feminino."
                },
                {
                    id: 110,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ relógio",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o relógio», por isso é um nome masculino."
                },

                // --- Classificação Rápida com SVGs (12 questões - apenas palavra) ---
                {
                    id: 111,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>SOL</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Masculino",
                    dica: "Antes de «sol» usamos «o» ou «um»: o sol."
                },
                {
                    id: 112,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>MÃO</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Feminino",
                    dica: "Antes de «mão» usamos «a» ou «uma»: a mão."
                },
                {
                    id: 113,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>PÃO</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Masculino",
                    dica: "Antes de «pão» usamos «o» ou «um»: o pão."
                },
                {
                    id: 114,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>FLOR</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Feminino",
                    dica: "Antes de «flor» usamos «a» ou «uma»: a flor."
                },
                {
                    id: 115,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>MAR</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Masculino",
                    dica: "Antes de «mar» usamos «o» ou «um»: o mar."
                },
                {
                    id: 116,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>LUZ</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Feminino",
                    dica: "Antes de «luz» usamos «a» ou «uma»: a luz."
                },
                {
                    id: 117,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>CÃO</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Masculino",
                    dica: "Antes de «cão» usamos «o» ou «um»: o cão."
                },
                {
                    id: 118,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>COR</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Feminino",
                    dica: "Antes de «cor» usamos «a» ou «uma»: a cor."
                },
                {
                    id: 119,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>ANEL</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Masculino",
                    dica: "Antes de «anel» usamos «o» ou «um»: o anel."
                },
                {
                    id: 120,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>VIAGEM</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Feminino",
                    dica: "Antes de «viagem» usamos «a» ou «uma»: a viagem."
                },
                {
                    id: 121,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>NARIZ</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Masculino",
                    dica: "Antes de «nariz» usamos «o» ou «um»: o nariz."
                },
                {
                    id: 122,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>CHAVE</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Feminino",
                    dica: "Antes de «chave» usamos «a» ou «uma»: a chave."
                },

                // --- Construtor de Palavras (5 questões) ---
                {
                    id: 123,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>MENINO</span>",
                    imagemPergunta: "img/menina.png",
                    correta: "menina",
                    textoAudio: "Escreve o feminino de menino. Menina.",
                    dica: "Troca o «o» final por «a»: menina."
                },
                {
                    id: 124,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>AVÔ</span>",
                    imagemPergunta: "img/avo.png",
                    correta: "avó",
                    textoAudio: "Escreve o feminino de avô. Avó.",
                    dica: "O acento circunflexo muda para acento agudo: avó."
                },
                {
                    id: 125,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>GATO</span>",
                    imagemPergunta: "img/gata.png",
                    correta: "gata",
                    textoAudio: "Escreve o feminino de gato. Gata.",
                    dica: "Troca o «o» final por «a»: gata."
                },
                {
                    id: 126,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>PATO</span>",
                    imagemPergunta: "img/pata.png",
                    correta: "pata",
                    textoAudio: "Escreve o feminino de pato. Pata.",
                    dica: "Troca o «o» final por «a»: pata."
                },
                {
                    id: 127,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>NOIVO</span>",
                    imagemPergunta: "img/noiva.png",
                    correta: "noiva",
                    textoAudio: "Escreve o feminino de noivo. Noiva.",
                    dica: "Troca o «o» final por «a»: noiva."
                }
            ]
        },

        // =====================================================================
        // NÍVEL 2: PARES E TRANSFORMAÇÃO
        // (8 Situação 3 imagens + 8 Flexão Regular + 6 Construtor de Palavras)
        // =====================================================================
        {
            id: 2,
            titulo: "Pares e Transformação",
            subtitulo: "Identifica imagens e forma o feminino",
            corClasse: "bg-azul",
            icone: "img/icone_genero_2.svg",
            numQuestoes: 10,
            perguntas: [
                // --- Escolha de 3 Imagens com pílula via BANCO_RECURSOS (8 questões) ---
                {
                    id: 201,
                    tipo: "situacao",
                    categoriaDistratores: "genero_imagens",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um nome\n<span class='destaque-badge'>Feminino</span>",
                    correta: "Feminino",
                    dica: "Procura a palavra que usa o artigo «a» antes do nome."
                },
                {
                    id: 202,
                    tipo: "situacao",
                    categoriaDistratores: "genero_imagens",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um nome\n<span class='destaque-badge'>Masculino</span>",
                    correta: "Masculino",
                    dica: "Procura a palavra que usa o artigo «o» antes do nome."
                },
                {
                    id: 203,
                    tipo: "situacao",
                    categoriaDistratores: "genero_imagens",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um nome\n<span class='destaque-badge'>Feminino</span>",
                    correta: "Feminino",
                    dica: "Procura o nome que começa por «a» (ex.: a flor, a lua)."
                },
                {
                    id: 204,
                    tipo: "situacao",
                    categoriaDistratores: "genero_imagens",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um nome\n<span class='destaque-badge'>Masculino</span>",
                    correta: "Masculino",
                    dica: "Procura o nome que começa por «o» (ex.: o sol, o livro)."
                },
                {
                    id: 205,
                    tipo: "situacao",
                    categoriaDistratores: "genero_imagens",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um nome\n<span class='destaque-badge'>Feminino</span>",
                    correta: "Feminino",
                    dica: "Usa a regra do artigo: «a» indica género feminino."
                },
                {
                    id: 206,
                    tipo: "situacao",
                    categoriaDistratores: "genero_imagens",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um nome\n<span class='destaque-badge'>Masculino</span>",
                    correta: "Masculino",
                    dica: "Usa a regra do artigo: «o» indica género masculino."
                },
                {
                    id: 207,
                    tipo: "situacao",
                    categoriaDistratores: "genero_imagens",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um nome\n<span class='destaque-badge'>Feminino</span>",
                    correta: "Feminino",
                    dica: "Procura a imagem cuja pílula começa por «a»."
                },
                {
                    id: 208,
                    tipo: "situacao",
                    categoriaDistratores: "genero_imagens",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um nome\n<span class='destaque-badge'>Masculino</span>",
                    correta: "Masculino",
                    dica: "Procura a imagem cuja pílula começa por «o»."
                },

                // --- Flexão Regular - Grelha 2x2 (8 questões) ---
                {
                    id: 209,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>ALUNO</span>?",
                    opcoes: ["aluna", "alunas", "alunos", "alunoa"],
                    correta: "aluna",
                    dica: "Basta trocar o «o» final por «a»: a aluna."
                },
                {
                    id: 210,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>IRMÃO</span>?",
                    opcoes: ["irmã", "irmoa", "irmãe", "irmana"],
                    correta: "irmã",
                    dica: "As palavras terminadas em «-ão» fazem muitas vezes o feminino em «-ã»: a irmã."
                },
                {
                    id: 211,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>PORTUGUÊS</span>?",
                    opcoes: ["portuguesa", "portuguêsa", "portugueza", "portuguesia"],
                    correta: "portuguesa",
                    dica: "Acrescenta-se «-a» e desaparece o acento circunflexo: portuguesa."
                },
                {
                    id: 212,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>FRANCÊS</span>?",
                    opcoes: ["francesa", "francêsa", "franceza", "francesia"],
                    correta: "francesa",
                    dica: "Acrescenta-se «-a» e retira-se o acento: francesa."
                },
                {
                    id: 213,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>PINTOR</span>?",
                    opcoes: ["pintora", "pintorisa", "pintriz", "pintoa"],
                    correta: "pintora",
                    dica: "Nos nomes acabados em «-or», acrescenta-se um «a»: pintora."
                },
                {
                    id: 214,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>CANTOR</span>?",
                    opcoes: ["cantora", "cantriz", "cantoa", "cantorisa"],
                    correta: "cantora",
                    dica: "Acrescenta-se «a» no final: a cantora."
                },
                {
                    id: 215,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>LEITOR</span>?",
                    opcoes: ["leitora", "leitriz", "leitoa", "leitorisa"],
                    correta: "leitora",
                    dica: "Acrescenta-se «a» no final: a leitora."
                },
                {
                    id: 216,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>CAMPEÃO</span>?",
                    opcoes: ["campeã", "campeoa", "campeona", "campeana"],
                    correta: "campeã",
                    dica: "Tal como «irmão → irmã», «campeão» muda para «campeã»."
                },

                // --- Construtor de Palavras (6 questões) ---
                {
                    id: 217,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>REI</span>",
                    imagemPergunta: "img/rainha.png",
                    correta: "rainha",
                    textoAudio: "Escreve o feminino de rei. Rainha.",
                    dica: "O par feminino de rei é rainha."
                },
                {
                    id: 218,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>PRÍNCIPE</span>",
                    imagemPergunta: "img/princesa.png",
                    correta: "princesa",
                    textoAudio: "Escreve o feminino de príncipe. Princesa.",
                    dica: "Escreve-se com «s» antes do «a» final: princesa."
                },
                {
                    id: 219,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>LEÃO</span>",
                    imagemPergunta: "img/leoa.png",
                    correta: "leoa",
                    textoAudio: "Escreve o feminino de leão. Leoa.",
                    dica: "A fêmea do leão é a leoa."
                },
                {
                    id: 220,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>GALO</span>",
                    imagemPergunta: "img/galinha.png",
                    correta: "galinha",
                    textoAudio: "Escreve o feminino de galo. Galinha.",
                    dica: "A fêmea do galo é a galinha."
                },
                {
                    id: 221,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>BRUXO</span>",
                    imagemPergunta: "img/bruxa.png",
                    correta: "bruxa",
                    textoAudio: "Escreve o feminino de bruxo. Bruxa.",
                    dica: "Troca o «o» final por «a»: bruxa."
                },
                {
                    id: 222,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>PROFESSOR</span>",
                    imagemPergunta: "img/professora.png",
                    correta: "professora",
                    textoAudio: "Escreve o feminino de professor. Professora.",
                    dica: "Escreve-se com dois «s» e um «a» no fim: professora."
                }
            ]
        },

        // =====================================================================
        // NÍVEL 3: DETETIVE DO GÉNERO
        // (7 Irregulares + 9 Terminações Enganadoras + 5 Construtor de Palavras)
        // =====================================================================
        {
            id: 3,
            titulo: "Detetive do Género",
            subtitulo: "Pares irregulares e palavras enganadoras",
            corClasse: "bg-roxo",
            icone: "img/icone_genero_3.svg",
            numQuestoes: 10,
            perguntas: [
                // --- Pares Irregulares - Grelha 2x2 (7 questões) ---
                {
                    id: 301,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>PAI</span>?",
                    opcoes: ["mãe", "paia", "tia", "avó"],
                    correta: "mãe",
                    dica: "Este par muda completamente de palavra: pai e mãe."
                },
                {
                    id: 302,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>HOMEM</span>?",
                    opcoes: ["mulher", "homema", "senhora", "menina"],
                    correta: "mulher",
                    dica: "O par feminino de homem é mulher."
                },
                {
                    id: 303,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>PADRINHO</span>?",
                    opcoes: ["madrinha", "padrinha", "madre", "comadre"],
                    correta: "madrinha",
                    dica: "O par feminino de padrinho é madrinha."
                },
                {
                    id: 304,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>GENRO</span>?",
                    opcoes: ["nora", "genra", "sogra", "cunhada"],
                    correta: "nora",
                    dica: "O marido da filha é o genro; a mulher do filho é a nora."
                },
                {
                    id: 305,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>ZANGÃO</span>?",
                    opcoes: ["abelha", "zangona", "vespa", "zangã"],
                    correta: "abelha",
                    dica: "Na colmeia, o macho é o zangão e a fêmea é a abelha."
                },
                {
                    id: 306,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>CÃO</span>?",
                    opcoes: ["cadela", "cã", "caoa", "gata"],
                    correta: "cadela",
                    dica: "A fêmea do cão é a cadela."
                },
                {
                    id: 307,
                    tipo: "padrao",
                    pergunta: "Qual é o feminino de\n<span class='destaque-badge'>BODE</span>?",
                    opcoes: ["cabra", "boda", "ovelha", "vaca"],
                    correta: "cabra",
                    dica: "O macho é o bode e a fêmea é a cabra."
                },

                // --- Terminações Enganadoras O / A (9 questões) ---
                {
                    id: 308,
                    tipo: "lacuna",
                    ordemFixa: true,
                    infoDivisao: "Nem todas as palavras acabadas em «a» são femininas. Testa sempre com «O» ou «A»!",
                    pergunta: "Atenção à armadilha!\n______ mapa",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Apesar de acabar em «a», dizemos «o mapa». É masculino!"
                },
                {
                    id: 309,
                    tipo: "lacuna",
                    ordemFixa: true,
                    infoDivisao: "Nem todas as palavras acabadas em «a» são femininas. Testa sempre com «O» ou «A»!",
                    pergunta: "Atenção à armadilha!\n______ dia",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o dia» (um dia bonito). É um nome masculino!"
                },
                {
                    id: 310,
                    tipo: "lacuna",
                    ordemFixa: true,
                    infoDivisao: "Nem todas as palavras acabadas em «a» são femininas. Testa sempre com «O» ou «A»!",
                    pergunta: "Atenção à armadilha!\n______ pijama",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o pijama». É um nome masculino!"
                },
                {
                    id: 311,
                    tipo: "lacuna",
                    ordemFixa: true,
                    infoDivisao: "Nem todas as palavras acabadas em «a» são femininas. Testa sempre com «O» ou «A»!",
                    pergunta: "Atenção à armadilha!\n______ sofá",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o sofá». É um nome masculino!"
                },
                {
                    id: 312,
                    tipo: "lacuna",
                    ordemFixa: true,
                    infoDivisao: "Nem todas as palavras acabadas em «a» são femininas. Testa sempre com «O» ou «A»!",
                    pergunta: "Atenção à armadilha!\n______ planeta",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o planeta». É um nome masculino!"
                },
                {
                    id: 313,
                    tipo: "lacuna",
                    ordemFixa: true,
                    infoDivisao: "Nem todas as palavras acabadas em «a» são femininas. Testa sempre com «O» ou «A»!",
                    pergunta: "Atenção à armadilha!\n______ problema",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o problema». É um nome masculino!"
                },
                {
                    id: 314,
                    tipo: "lacuna",
                    ordemFixa: true,
                    infoDivisao: "Algumas palavras acabadas em «o» são femininas. Testa sempre com «O» ou «A»!",
                    pergunta: "Atenção à armadilha!\n______ foto",
                    opcoes: ["O", "A"],
                    correta: "A",
                    dica: "«Foto» vem de fotografia: dizemos «a foto». É feminino!"
                },
                {
                    id: 315,
                    tipo: "lacuna",
                    ordemFixa: true,
                    infoDivisao: "Algumas palavras acabadas em «o» são femininas. Testa sempre com «O» ou «A»!",
                    pergunta: "Atenção à armadilha!\n______ moto",
                    opcoes: ["O", "A"],
                    correta: "A",
                    dica: "«Moto» vem de motocicleta: dizemos «a moto». É feminino!"
                },
                {
                    id: 316,
                    tipo: "lacuna",
                    ordemFixa: true,
                    infoDivisao: "Algumas palavras acabadas em «o» são femininas. Testa sempre com «O» ou «A»!",
                    pergunta: "Atenção à armadilha!\n______ tribo",
                    opcoes: ["O", "A"],
                    correta: "A",
                    dica: "Dizemos «a tribo». É um nome feminino!"
                },

                // --- Construtor de Palavras (5 questões) ---
                {
                    id: 317,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>BOI</span>",
                    imagemPergunta: "img/vaca.png",
                    correta: "vaca",
                    textoAudio: "Escreve o feminino de boi. Vaca.",
                    dica: "A fêmea do boi é a vaca."
                },
                {
                    id: 318,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>CAVALO</span>",
                    imagemPergunta: "img/egua.png",
                    correta: "égua",
                    textoAudio: "Escreve o feminino de cavalo. Égua.",
                    dica: "A fêmea do cavalo é a égua (leva acento agudo no «é»)."
                },
                {
                    id: 319,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>CARNEIRO</span>",
                    imagemPergunta: "img/ovelha.png",
                    correta: "ovelha",
                    textoAudio: "Escreve o feminino de carneiro. Ovelha.",
                    dica: "A fêmea do carneiro é a ovelha."
                },
                {
                    id: 320,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>ATOR</span>",
                    imagemPergunta: "img/atriz.png",
                    correta: "atriz",
                    textoAudio: "Escreve o feminino de ator. Atriz.",
                    dica: "Termina com a letra «z»: atriz."
                },
                {
                    id: 321,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>ANÃO</span>",
                    imagemPergunta: "img/ana.png",
                    correta: "anã",
                    textoAudio: "Escreve o feminino de anão. Anã.",
                    dica: "Termina em «ã» com til: anã."
                }
            ]
        },

        // =====================================================================
        // NÍVEL 4: SUPER DESAFIO
        // (20 questões mistas: sentido inverso, armadilhas, imagens e construtor)
        // =====================================================================
        {
            id: 4,
            titulo: "Super Desafio",
            subtitulo: "O desafio final de masculino e feminino",
            corClasse: "bg-laranja",
            icone: "img/icone_genero_4.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 401,
                    tipo: "padrao",
                    pergunta: "Qual é o masculino de\n<span class='destaque-badge'>ÉGUA</span>?",
                    opcoes: ["cavalo", "éguo", "boi", "burro"],
                    correta: "cavalo",
                    dica: "O par masculino de égua é cavalo."
                },
                {
                    id: 402,
                    tipo: "padrao",
                    pergunta: "Qual é o masculino de\n<span class='destaque-badge'>ABELHA</span>?",
                    opcoes: ["zangão", "abelho", "besouro", "mosca"],
                    correta: "zangão",
                    dica: "O macho da abelha é o zangão."
                },
                {
                    id: 403,
                    tipo: "padrao",
                    pergunta: "Qual é o masculino de\n<span class='destaque-badge'>NORA</span>?",
                    opcoes: ["genro", "noro", "sogro", "cunhado"],
                    correta: "genro",
                    dica: "O par masculino de nora é genro."
                },
                {
                    id: 404,
                    tipo: "padrao",
                    pergunta: "Qual é o masculino de\n<span class='destaque-badge'>OVELHA</span>?",
                    opcoes: ["carneiro", "ovelho", "bode", "touro"],
                    correta: "carneiro",
                    dica: "O macho da ovelha é o carneiro."
                },
                {
                    id: 405,
                    tipo: "padrao",
                    pergunta: "Qual é o masculino de\n<span class='destaque-badge'>MADRINHA</span>?",
                    opcoes: ["padrinho", "madrinho", "padre", "compadre"],
                    correta: "padrinho",
                    dica: "O par masculino de madrinha é padrinho."
                },
                {
                    id: 406,
                    tipo: "padrao",
                    pergunta: "Qual é o masculino de\n<span class='destaque-badge'>CABRA</span>?",
                    opcoes: ["bode", "cabro", "carneiro", "boi"],
                    correta: "bode",
                    dica: "O macho da cabra é o bode."
                },
                {
                    id: 407,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ planeta",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o planeta». É masculino!"
                },
                {
                    id: 408,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ tribo",
                    opcoes: ["O", "A"],
                    correta: "A",
                    dica: "Dizemos «a tribo». É feminino!"
                },
                {
                    id: 409,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ pijama",
                    opcoes: ["O", "A"],
                    correta: "O",
                    dica: "Dizemos «o pijama». É masculino!"
                },
                {
                    id: 410,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n______ moto",
                    opcoes: ["O", "A"],
                    correta: "A",
                    dica: "Dizemos «a moto». É feminino!"
                },
                {
                    id: 411,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>MAPA</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Masculino",
                    dica: "Dizemos «o mapa» ou «um mapa»."
                },
                {
                    id: 412,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>FOTO</span>",
                    opcoesImagem: [
                        { valor: "Masculino", img: "img/genero_masculino.svg", alt: "Masculino" },
                        { valor: "Feminino", img: "img/genero_feminino.svg", alt: "Feminino" }
                    ],
                    correta: "Feminino",
                    dica: "Dizemos «a foto» ou «uma foto»."
                },
                {
                    id: 413,
                    tipo: "situacao",
                    categoriaDistratores: "genero_imagens",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um nome\n<span class='destaque-badge'>Feminino</span>",
                    correta: "Feminino",
                    dica: "Procura a palavra que usa o artigo «a» antes do nome."
                },
                {
                    id: 414,
                    tipo: "situacao",
                    categoriaDistratores: "genero_imagens",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um nome\n<span class='destaque-badge'>Masculino</span>",
                    correta: "Masculino",
                    dica: "Procura a palavra que usa o artigo «o» antes do nome."
                },
                {
                    id: 415,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>ATOR</span>",
                    imagemPergunta: "img/atriz.png",
                    correta: "atriz",
                    textoAudio: "Escreve o feminino de ator. Atriz.",
                    dica: "Escreve-se com «z» no final: atriz."
                },
                {
                    id: 416,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>CAVALO</span>",
                    imagemPergunta: "img/egua.png",
                    correta: "égua",
                    textoAudio: "Escreve o feminino de cavalo. Égua.",
                    dica: "Não te esqueças do acento agudo no «é»: égua."
                },
                {
                    id: 417,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>PRÍNCIPE</span>",
                    imagemPergunta: "img/princesa.png",
                    correta: "princesa",
                    textoAudio: "Escreve o feminino de príncipe. Princesa.",
                    dica: "Escreve-se com «s»: princesa."
                },
                {
                    id: 418,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>ANÃO</span>",
                    imagemPergunta: "img/ana.png",
                    correta: "anã",
                    textoAudio: "Escreve o feminino de anão. Anã.",
                    dica: "Termina em «ã»: anã."
                },
                {
                    id: 419,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>GALO</span>",
                    imagemPergunta: "img/galinha.png",
                    correta: "galinha",
                    textoAudio: "Escreve o feminino de galo. Galinha.",
                    dica: "Escreve-se com «nh»: galinha."
                },
                {
                    id: 420,
                    tipo: "construtor",
                    pergunta: "Escreve o feminino de\n<span class='destaque-badge'>REI</span>",
                    imagemPergunta: "img/rainha.png",
                    correta: "rainha",
                    textoAudio: "Escreve o feminino de rei. Rainha.",
                    dica: "O par feminino de rei é rainha."
                }
            ]
        }
    ]
};