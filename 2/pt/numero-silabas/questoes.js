const CONFIG_JOGO = {
    titulo: "Caça às Sílabas",
    subtituloMenu: "Conta as sílabas e classifica cada palavra!",
    textoInfoDivisao: "Lembra-te: na divisão silábica oral, os grupos «rr», «ss», «lh», «nh» e «ch» nunca se separam.",
    tema: {
        corPrimaria: "#3b82f6",
        corSecundaria: "#1d4ed8"
    },
    niveis: [
        {
            id: 1,
            titulo: "Primeiros Passos",
            subtitulo: "Palavras simples com imagem",
            corClasse: "bg-turquesa",
            icone: "img/icone_silabas_1.svg",
            numQuestoes: 10,
            perguntas: [
                // 8 questões visuais com pílula de legenda (usando o campo alt do BANCO_RECURSOS)
                {
                    id: 101,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_animais_1",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um\n<span class='destaque-badge'>Monossílabo</span>",
                    correta: "Monossílabo",
                    dica: "Procura o animal cujo nome se diz de uma só vez: CÃO (1 sílaba)."
                },
                {
                    id: 102,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_animais_1",
                    legendaAlt: true,
                    pergunta: "Clica na imagem que é um\n<span class='destaque-badge'>Polissílabo</span>",
                    correta: "Polissílabo",
                    dica: "Bate palmas ao dizer o nome dos animais. Procura o que tem 4 sílabas: E-LE-FAN-TE."
                },
                {
                    id: 103,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_animais_2",
                    legendaAlt: true,
                    pergunta: "Identifica o\n<span class='destaque-badge'>Dissílabo</span>",
                    correta: "Dissílabo",
                    dica: "Um dissílabo tem 2 sílabas: PA-TO."
                },
                {
                    id: 104,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_animais_2",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um\n<span class='destaque-badge'>Trissílabo</span>",
                    correta: "Trissílabo",
                    dica: "Um trissílabo tem 3 sílabas: GI-RA-FA."
                },
                {
                    id: 105,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_natureza",
                    legendaAlt: true,
                    pergunta: "Clica na imagem que é um\n<span class='destaque-badge'>Monossílabo</span>",
                    correta: "Monossílabo",
                    dica: "Tem apenas 1 sílaba: SOL."
                },
                {
                    id: 106,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_natureza",
                    legendaAlt: true,
                    pergunta: "Identifica o\n<span class='destaque-badge'>Dissílabo</span>",
                    correta: "Dissílabo",
                    dica: "Tem 2 sílabas: NU-VEM."
                },
                {
                    id: 107,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_natureza",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um\n<span class='destaque-badge'>Trissílabo</span>",
                    correta: "Trissílabo",
                    dica: "Tem 3 sílabas: ÁR-VO-RE."
                },
                {
                    id: 108,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_natureza",
                    legendaAlt: true,
                    pergunta: "Clica na imagem que é um\n<span class='destaque-badge'>Polissílabo</span>",
                    correta: "Polissílabo",
                    dica: "Tem 4 sílabas: CO-GU-ME-LO."
                },

                // 8 questões de classificação com imagem e botões em ordem crescente fixa
                {
                    id: 109,
                    tipo: "padrao",
                    ordemFixa: true,
                    imagemPergunta: "img/sil_sol.png",
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>SOL</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Monossílabo",
                    dica: "A palavra SOL tem apenas 1 sílaba."
                },
                {
                    id: 110,
                    tipo: "padrao",
                    ordemFixa: true,
                    imagemPergunta: "img/sil_gato.png",
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>GATO</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Dissílabo",
                    dica: "Divide-se em 2 sílabas: GA-TO."
                },
                {
                    id: 111,
                    tipo: "padrao",
                    ordemFixa: true,
                    imagemPergunta: "img/sil_macaco.png",
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>MACACO</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Trissílabo",
                    dica: "Divide-se em 3 sílabas: MA-CA-CO."
                },
                {
                    id: 112,
                    tipo: "padrao",
                    ordemFixa: true,
                    imagemPergunta: "img/sil_borboleta.png",
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>BORBOLETA</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Polissílabo",
                    dica: "Divide-se em 4 sílabas: BOR-BO-LE-TA."
                },
                {
                    id: 113,
                    tipo: "padrao",
                    ordemFixa: true,
                    imagemPergunta: "img/sil_lapis.png",
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>LÁPIS</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Dissílabo",
                    dica: "Divide-se em 2 sílabas: LÁ-PIS."
                },
                {
                    id: 114,
                    tipo: "padrao",
                    ordemFixa: true,
                    imagemPergunta: "img/sil_banana.png",
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>BANANA</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Trissílabo",
                    dica: "Divide-se em 3 sílabas: BA-NA-NA."
                },
                {
                    id: 115,
                    tipo: "padrao",
                    ordemFixa: true,
                    imagemPergunta: "img/sil_mesa.png",
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>MESA</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Dissílabo",
                    dica: "Divide-se em 2 sílabas: ME-SA."
                },
                {
                    id: 116,
                    tipo: "padrao",
                    ordemFixa: true,
                    imagemPergunta: "img/sil_elefante.png",
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>ELEFANTE</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Polissílabo",
                    dica: "Divide-se em 4 sílabas: E-LE-FAN-TE."
                },

                // 4 questões de lacuna para consolidar os conceitos (sem infoDivisao)
                {
                    id: 117,
                    tipo: "texto",
                    ordemFixa: true,
                    infoDivisao: false,
                    pergunta: "Uma palavra com apenas <span class='destaque-fundo'>uma sílaba</span> chama-se ________.",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Monossílabo",
                    dica: "«Mono» significa um."
                },
                {
                    id: 118,
                    tipo: "texto",
                    ordemFixa: true,
                    infoDivisao: false,
                    pergunta: "Uma palavra com <span class='destaque-fundo'>duas sílabas</span> chama-se ________.",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Dissílabo",
                    dica: "«Di» lembra dois."
                },
                {
                    id: 119,
                    tipo: "texto",
                    ordemFixa: true,
                    infoDivisao: false,
                    pergunta: "Uma palavra com <span class='destaque-fundo'>três sílabas</span> chama-se ________.",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Trissílabo",
                    dica: "«Tri» lembra três."
                },
                {
                    id: 120,
                    tipo: "texto",
                    ordemFixa: true,
                    infoDivisao: false,
                    pergunta: "Uma palavra com <span class'destaque-fundo'>quatro ou mais sílabas</span> chama-se ________.",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Polissílabo",
                    dica: "«Poli» significa vários."
                },
				{
                    id: 121,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "Clica no número de sílabas da palavra\n<span class='destaque-amarelo'>PÉ</span>",
                    opcoesImagem: [
                        { valor: "Monossílabo", img: "img/num_1.svg", alt: "1 sílaba" },
                        { valor: "Dissílabo", img: "img/num_2.svg", alt: "2 sílabas" },
                        { valor: "Trissílabo", img: "img/num_3.svg", alt: "3 sílabas" },
                        { valor: "Polissílabo", img: "img/num_4plus.svg", alt: "4 ou mais sílabas" }
                    ],
                    correta: "Monossílabo",
                    dica: "Diz «pé» de uma só vez. Tem apenas 1 sílaba!"
                },
                {
                    id: 122,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "Clica no número de sílabas da palavra\n<span class='destaque-amarelo'>CASA</span>",
                    opcoesImagem: [
                        { valor: "Monossílabo", img: "img/num_1.svg", alt: "1 sílaba" },
                        { valor: "Dissílabo", img: "img/num_2.svg", alt: "2 sílabas" },
                        { valor: "Trissílabo", img: "img/num_3.svg", alt: "3 sílabas" },
                        { valor: "Polissílabo", img: "img/num_4plus.svg", alt: "4 ou mais sílabas" }
                    ],
                    correta: "Dissílabo",
                    dica: "Divide-se em 2 sílabas: CA-SA."
                },
                {
                    id: 123,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "Clica no número de sílabas da palavra\n<span class='destaque-amarelo'>MENINO</span>",
                    opcoesImagem: [
                        { valor: "Monossílabo", img: "img/num_1.svg", alt: "1 sílaba" },
                        { valor: "Dissílabo", img: "img/num_2.svg", alt: "2 sílabas" },
                        { valor: "Trissílabo", img: "img/num_3.svg", alt: "3 sílabas" },
                        { valor: "Polissílabo", img: "img/num_4plus.svg", alt: "4 ou mais sílabas" }
                    ],
                    correta: "Trissílabo",
                    dica: "Divide-se em 3 sílabas: ME-NI-NO."
                },
                {
                    id: 124,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "Clica no número de sílabas da palavra\n<span class='destaque-amarelo'>TELEFONE</span>",
                    opcoesImagem: [
                        { valor: "Monossílabo", img: "img/num_1.svg", alt: "1 sílaba" },
                        { valor: "Dissílabo", img: "img/num_2.svg", alt: "2 sílabas" },
                        { valor: "Trissílabo", img: "img/num_3.svg", alt: "3 sílabas" },
                        { valor: "Polissílabo", img: "img/num_4plus.svg", alt: "4 ou mais sílabas" }
                    ],
                    correta: "Polissílabo",
                    dica: "Divide-se em 4 sílabas: TE-LE-FO-NE."
                },
                {
                    id: 125,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "Clica no número de sílabas da palavra\n<span class='destaque-amarelo'>MÃO</span>",
                    opcoesImagem: [
                        { valor: "Monossílabo", img: "img/num_1.svg", alt: "1 sílaba" },
                        { valor: "Dissílabo", img: "img/num_2.svg", alt: "2 sílabas" },
                        { valor: "Trissílabo", img: "img/num_3.svg", alt: "3 sílabas" },
                        { valor: "Polissílabo", img: "img/num_4plus.svg", alt: "4 ou mais sílabas" }
                    ],
                    correta: "Monossílabo",
                    dica: "Diz «mão» de uma só vez. Tem apenas 1 sílaba!"
                },
                {
                    id: 126,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "Clica no número de sílabas da palavra\n<span class='destaque-amarelo'>BOLA</span>",
                    opcoesImagem: [
                        { valor: "Monossílabo", img: "img/num_1.svg", alt: "1 sílaba" },
                        { valor: "Dissílabo", img: "img/num_2.svg", alt: "2 sílabas" },
                        { valor: "Trissílabo", img: "img/num_3.svg", alt: "3 sílabas" },
                        { valor: "Polissílabo", img: "img/num_4plus.svg", alt: "4 ou mais sílabas" }
                    ],
                    correta: "Dissílabo",
                    dica: "Divide-se em 2 sílabas: BO-LA."
                },
                {
                    id: 127,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "Clica no número de sílabas da palavra\n<span class='destaque-amarelo'>CAMISOLA</span>",
                    opcoesImagem: [
                        { valor: "Monossílabo", img: "img/num_1.svg", alt: "1 sílaba" },
                        { valor: "Dissílabo", img: "img/num_2.svg", alt: "2 sílabas" },
                        { valor: "Trissílabo", img: "img/num_3.svg", alt: "3 sílabas" },
                        { valor: "Polissílabo", img: "img/num_4plus.svg", alt: "4 ou mais sílabas" }
                    ],
                    correta: "Polissílabo",
                    dica: "Divide-se em 4 sílabas: CA-MI-SO-LA."
                },
                {
                    id: 128,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "Clica no número de sílabas da palavra\n<span class='destaque-amarelo'>JANELA</span>",
                    opcoesImagem: [
                        { valor: "Monossílabo", img: "img/num_1.svg", alt: "1 sílaba" },
                        { valor: "Dissílabo", img: "img/num_2.svg", alt: "2 sílabas" },
                        { valor: "Trissílabo", img: "img/num_3.svg", alt: "3 sílabas" },
                        { valor: "Polissílabo", img: "img/num_4plus.svg", alt: "4 ou mais sílabas" }
                    ],
                    correta: "Trissílabo",
                    dica: "Divide-se em 3 sílabas: JA-NE-LA."
                },
                {
                    id: 129,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "Clica no número de sílabas da palavra\n<span class='destaque-amarelo'>COPO</span>",
                    opcoesImagem: [
                        { valor: "Monossílabo", img: "img/num_1.svg", alt: "1 sílaba" },
                        { valor: "Dissílabo", img: "img/num_2.svg", alt: "2 sílabas" },
                        { valor: "Trissílabo", img: "img/num_3.svg", alt: "3 sílabas" },
                        { valor: "Polissílabo", img: "img/num_4plus.svg", alt: "4 ou mais sílabas" }
                    ],
                    correta: "Dissílabo",
                    dica: "Divide-se em 2 sílabas: CO-PO."
                },
                {
                    id: 130,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "Clica no número de sílabas da palavra\n<span class='destaque-amarelo'>CASTELO</span>",
                    opcoesImagem: [
                        { valor: "Monossílabo", img: "img/num_1.svg", alt: "1 sílaba" },
                        { valor: "Dissílabo", img: "img/num_2.svg", alt: "2 sílabas" },
                        { valor: "Trissílabo", img: "img/num_3.svg", alt: "3 sílabas" },
                        { valor: "Polissílabo", img: "img/num_4plus.svg", alt: "4 ou mais sílabas" }
                    ],
                    correta: "Trissílabo",
                    dica: "Divide-se em 3 sílabas: CAS-TE-LO."
                }
            ]
        },

        {
            id: 2,
            titulo: "Leitura e Imagem",
            subtitulo: "Classificar sem ajuda e descobrir figuras",
            corClasse: "bg-verde",
            icone: "img/icone_silabas_2.svg",
            numQuestoes: 10,
            perguntas: [
                // 6 questões visuais com pílula de legenda
                {
                    id: 201,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_escola",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um\n<span class='destaque-badge'>Monossílabo</span>",
                    correta: "Monossílabo",
                    dica: "Tem apenas 1 sílaba: GIZ."
                },
                {
                    id: 202,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_escola",
                    legendaAlt: true,
                    pergunta: "Clica na imagem que é um\n<span class='destaque-badge'>Polissílabo</span>",
                    correta: "Polissílabo",
                    dica: "Tem 4 sílabas: COM-PU-TA-DOR."
                },
                {
                    id: 203,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_alimentos",
                    legendaAlt: true,
                    pergunta: "Identifica o\n<span class='destaque-badge'>Monossílabo</span>",
                    correta: "Monossílabo",
                    dica: "Diz-se de uma só vez: PÃO."
                },
                {
                    id: 204,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_alimentos",
                    legendaAlt: true,
                    pergunta: "Toca na imagem que representa um\n<span class='destaque-badge'>Polissílabo</span>",
                    correta: "Polissílabo",
                    dica: "Tem 4 sílabas: CHO-CO-LA-TE."
                },
                {
                    id: 205,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_objetos",
                    legendaAlt: true,
                    pergunta: "Clica na imagem que é um\n<span class='destaque-badge'>Trissílabo</span>",
                    correta: "Trissílabo",
                    dica: "Tem 3 sílabas: COM-BOI-O."
                },
                {
                    id: 206,
                    tipo: "situacao",
                    categoriaDistratores: "silabas_objetos",
                    legendaAlt: true,
                    pergunta: "Identifica o\n<span class='destaque-badge'>Polissílabo</span>",
                    correta: "Polissílabo",
                    dica: "Tem 4 sílabas: BI-CI-CLE-TA."
                },

                // 8 questões de leitura pura (sem imagem de apoio)
                {
                    id: 207,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>MAR</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Monossílabo",
                    dica: "A palavra MAR tem apenas 1 sílaba."
                },
                {
                    id: 208,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>LUZ</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Monossílabo",
                    dica: "A palavra LUZ diz-se numa única emissão de voz."
                },
                {
                    id: 209,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>LIVRO</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Dissílabo",
                    dica: "Divide-se em 2 sílabas: LI-VRO."
                },
                {
                    id: 210,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>ESCOLA</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Trissílabo",
                    dica: "Divide-se em 3 sílabas: ES-CO-LA."
                },
                {
                    id: 211,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>JANELA</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Trissílabo",
                    dica: "Divide-se em 3 sílabas: JA-NE-LA."
                },
                {
                    id: 212,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>SAPATO</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Trissílabo",
                    dica: "Divide-se em 3 sílabas: SA-PA-TO."
                },
                {
                    id: 213,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>MELANCIA</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Polissílabo",
                    dica: "Divide-se em 4 sílabas: ME-LAN-CI-A."
                },
                {
                    id: 214,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>TARTARUGA</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Polissílabo",
                    dica: "Divide-se em 4 sílabas: TAR-TA-RU-GA."
                },

                // 6 questões de Certo / Errado sobre contagem silábica
                {
                    id: 215,
                    tipo: "cidadania",
                    pergunta: "A palavra <span class='destaque-badge'>ESCOLA</span> tem 3 sílabas, por isso é um <span class='destaque-fundo'>trissílabo</span>.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo",
                    dica: "Conta as sílabas: ES - CO - LA (3 sílabas)."
                },
                {
                    id: 216,
                    tipo: "cidadania",
                    pergunta: "A palavra <span class='destaque-badge'>GIRAFA</span> é um <span class='destaque-fundo'>dissílabo</span>.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado",
                    dica: "GI - RA - FA tem 3 sílabas, por isso é um trissílabo."
                },
                {
                    id: 217,
                    tipo: "cidadania",
                    pergunta: "A palavra <span class='destaque-badge'>CADERNO</span> é um <span class='destaque-fundo'>trissílabo</span>.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo",
                    dica: "CA - DER - NO tem 3 sílabas."
                },
                {
                    id: 218,
                    tipo: "cidadania",
                    pergunta: "A palavra <span class='destaque-badge'>PÉ</span> é um <span class='destaque-fundo'>monossílabo</span>.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo",
                    dica: "A palavra PÉ tem apenas 1 sílaba."
                },
                {
                    id: 219,
                    tipo: "cidadania",
                    pergunta: "A palavra <span class='destaque-badge'>COMPUTADOR</span> é um <span class='destaque-fundo'>trissílabo</span>.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado",
                    dica: "COM - PU - TA - DOR tem 4 sílabas, logo é um polissílabo."
                },
                {
                    id: 220,
                    tipo: "cidadania",
                    pergunta: "A palavra <span class='destaque-badge'>PERA</span> é um <span class='destaque-fundo'>dissílabo</span>.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo",
                    dica: "PE - RA tem 2 sílabas."
                }
            ]
        },

        {
            id: 3,
            titulo: "Detetive Fonético",
            subtitulo: "Ditongos, «rr», «ss» e palavras grandes",
            corClasse: "bg-laranja",
            icone: "img/icone_silabas_3.svg",
            numQuestoes: 10,
            perguntas: [
                // 8 questões de classificação com palavras enganadoras
                {
                    id: 301,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Atenção ao som! Classifica:\n<span class='destaque-badge'>MÃE</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Monossílabo",
                    dica: "Diz «mãe» de uma só vez. As vogais ficam juntas na mesma sílaba!"
                },
                {
                    id: 302,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Atenção ao som! Classifica:\n<span class='destaque-badge'>REI</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Monossílabo",
                    dica: "Embora tenha 3 letras, REI pronuncia-se numa única sílaba."
                },
                {
                    id: 303,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Atenção ao som! Classifica:\n<span class='destaque-badge'>FLOR</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Monossílabo",
                    dica: "Tem 4 letras, mas só bates 1 palma ao dizer FLOR."
                },
                {
                    id: 304,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Atenção ao som! Classifica:\n<span class='destaque-badge'>CRUZ</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Monossílabo",
                    dica: "CRUZ tem apenas 1 sílaba."
                },
                {
                    id: 305,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>CARRO</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Dissílabo",
                    dica: "Na divisão oral fica CA-RRO: tem 2 sílabas."
                },
                {
                    id: 306,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica a palavra:\n<span class='destaque-badge'>PÁSSARO</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Trissílabo",
                    dica: "Na divisão oral fica PÁ-SSA-RO: tem 3 sílabas."
                },
                {
                    id: 307,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica esta palavra grande:\n<span class='destaque-badge'>HIPOPÓTAMO</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Polissílabo",
                    dica: "HI-PO-PÓ-TA-MO tem 5 sílabas (4 ou mais sílabas = polissílabo)."
                },
                {
                    id: 308,
                    tipo: "padrao",
                    ordemFixa: true,
                    pergunta: "Classifica esta palavra grande:\n<span class='destaque-badge'>AEROPORTO</span>",
                    opcoes: ["Monossílabo", "Dissílabo", "Trissílabo", "Polissílabo"],
                    correta: "Polissílabo",
                    dica: "A-E-RO-POR-TO tem 5 sílabas, logo é um polissílabo."
                },

                // 6 questões de lacuna sobre divisão silábica fonética (com frase informativa acima)
                {
                    id: 309,
                    tipo: "texto",
                    infoDivisao: true,
                    pergunta: "A divisão silábica oral de <span class=.destaque-fundo'>carro</span> é ________.",
                    opcoes: ["ca-rro", "car-ro", "c-ar-ro", "ca-r-ro"],
                    correta: "ca-rro",
                    dica: "Na divisão silábica fonética, o «rr» nunca se separa!"
                },
                {
                    id: 310,
                    tipo: "texto",
                    infoDivisao: true,
                    pergunta: "A divisão silábica oral de <span class=.destaque-fundo'>pássaro</span> é ________.",
                    opcoes: ["pá-ssa-ro", "pás-sa-ro", "pá-sa-ro", "páss-a-ro"],
                    correta: "pá-ssa-ro",
                    dica: "Na fala, o «ss» fica todo na mesma sílaba: pá-ssa-ro."
                },
                {
                    id: 311,
                    tipo: "texto",
                    infoDivisao: true,
                    pergunta: "A divisão silábica oral de <span class=.destaque-fundo'>girassol</span> é ________.",
                    opcoes: ["gi-ra-ssol", "gi-ras-sol", "gir-a-ssol", "gi-ra-sol"],
                    correta: "gi-ra-ssol",
                    dica: "Mantém o «ss» junto na última sílaba: gi-ra-ssol."
                },
                {
                    id: 312,
                    tipo: "texto",
                    infoDivisao: true,
                    pergunta: "A divisão silábica oral de <span class=.destaque-fundo'>abelha</span> é ________.",
                    opcoes: ["a-be-lha", "a-bel-ha", "ab-e-lha", "a-be-lh-a"],
                    correta: "a-be-lha",
                    dica: "As letras «lh» representam um único som e nunca se separam."
                },
                {
                    id: 313,
                    tipo: "texto",
                    infoDivisao: true,
                    pergunta: "A divisão silábica oral de <span class=.destaque-fundo'>galinha</span> é ________.",
                    opcoes: ["ga-li-nha", "ga-lin-ha", "gal-i-nha", "ga-li-nh-a"],
                    correta: "ga-li-nha",
                    dica: "As letras «nh» formam um único som e ficam sempre juntas."
                },
                {
                    id: 314,
                    tipo: "texto",
                    infoDivisao: true,
                    pergunta: "A divisão silábica oral de <span class=.destaque-fundo'>chocolate</span> é ________.",
                    opcoes: ["cho-co-la-te", "ch-o-co-la-te", "choc-o-la-te", "cho-co-lat-e"],
                    correta: "cho-co-la-te",
                    dica: "O grupo «ch» nunca se separa: cho-co-la-te."
                },

                // 6 questões de Certo / Errado para consolidar regras fonéticas
                {
                    id: 315,
                    tipo: "cidadania",
                    pergunta: "A palavra <span class='destaque-badge'>PÃO</span> tem 3 letras, por isso é um <span class='destaque-fundo'>trissílabo</span>.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado",
                    dica: "Não confundas letras com sílabas! PÃO diz-se de uma só vez (monossílabo)."
                },
                {
                    id: 316,
                    tipo: "cidadania",
                    pergunta: "Na divisão silábica fonética, a palavra <span class='destaque-badge'>CARRO</span> divide-se <strong><span class='destaque-fundo'>ca-rro</span></strong>.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo",
                    dica: "Correto! Na divisão silábica oral, o «rr» não se separa."
                },
                {
                    id: 317,
                    tipo: "cidadania",
                    pergunta: "A palavra <span class='destaque-badge'>BALEIA</span> divide-se assim: <strong><span class='destaque-fundo'>ba-lei-a</span></strong> (trissílabo).",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo",
                    dica: "Conta as sílabas: BA - LEI - A (3 sílabas)."
                },
                {
                    id: 318,
                    tipo: "cidadania",
                    pergunta: "Um <span class='destaque-badge'>polissílabo</span> tem obrigatoriamente apenas 4 sílabas.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado",
                    dica: "Polissílabo significa 4 ou mais sílabas (como hi-po-pó-ta-mo, que tem 5)."
                },
                {
                    id: 319,
                    tipo: "cidadania",
                    pergunta: "A palavra <span class='destaque-badge'>BOI</span> é um monossílabo.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo",
                    dica: "Diz-se BOI numa única emissão de voz, por isso tem 1 sílaba."
                },
                {
                    id: 320,
                    tipo: "cidadania",
                    pergunta: "Na divisão silábica fonética, a palavra <span class='destaque-badge'>OSSO</span> divide-se <strong><span class='destaque-fundo'>os-so</span></strong>.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado",
                    dica: "Na fala não separamos o «ss»: a divisão silábica oral é <strong>o-sso</strong>."
                }
            ]
        },

        {
            id: 4,
            titulo: "Super Desafio",
            subtitulo: "Mistura todos os níveis!",
            corClasse: "bg-roxo",
            icone: "img/icone_silabas_4.svg",
            numQuestoes: 10,
            misturarModos: true
        }
    ]
};