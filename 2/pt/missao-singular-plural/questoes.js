const CONFIG_JOGO = {
    titulo: "Missão Singular e Plural",
    subtitulo: "Descobre o singular e o plural de cada palavra!",
	subtituloMenu: "Descobre o singular e o plural de cada palavra!",
    tema: {
        corPrimaria: "#7c3aed",
        corSecundaria: "#5b21b6"
    },
	niveis: [
        // =====================================================================
        // NÍVEL 1: PRIMEIROS PASSOS (Artigos O/OS, A/AS e Plural simples em -S)
        // =====================================================================
        {
            id: 1,
            titulo: "Primeiros Passos",
            subtitulo: "Usa O/A ou OS/AS e forma plurais simples com -S",
            corClasse: "bg-verde",
            icone: "img/icone_plural_1.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 101,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n________ gato",
                    imagemPergunta: "img/gato.png",
                    opcoes: ["O", "OS"],
                    correta: "O",
                    dica: "Há apenas um gato (singular), por isso usamos «o»."
                },
                {
                    id: 102,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n________ gatos",
                    imagemPergunta: "img/gato.png",
                    plural: true,
                    opcoes: ["O", "OS"],
                    correta: "OS",
                    dica: "Há mais do que um gato (plural), por isso usamos «os»."
                },
                {
                    id: 103,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n________ flor",
                    imagemPergunta: "img/flor.png",
                    opcoes: ["A", "AS"],
                    correta: "A",
                    dica: "Há apenas uma flor (singular), por isso usamos «a»."
                },
                {
                    id: 104,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n________ flores",
                    imagemPergunta: "img/flor.png",
                    plural: true,
                    opcoes: ["A", "AS"],
                    correta: "AS",
                    dica: "Há mais do que uma flor (plural), por isso usamos «as»."
                },
                {
                    id: 105,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n________ cadernos",
                    imagemPergunta: "img/caderno.png",
                    plural: true,
                    opcoes: ["O", "OS"],
                    correta: "OS",
                    dica: "A palavra «cadernos» termina em «-s» e indica vários cadernos: os cadernos."
                },
                {
                    id: 106,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n________ nuvem",
                    imagemPergunta: "img/nuvem.png",
                    opcoes: ["A", "AS"],
                    correta: "A",
                    dica: "Há apenas uma nuvem (singular): a nuvem."
                },
                {
                    id: 107,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>PATOS</span>",
                    opcoesImagem: [
                        { valor: "Singular", img: "img/numero_singular.svg", alt: "Singular" },
                        { valor: "Plural", img: "img/numero_plural.svg", alt: "Plural" }
                    ],
                    correta: "Plural",
                    dica: "«Patos» indica mais do que um pato (os patos), por isso está no plural."
                },
                {
                    id: 108,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>LIVRO</span>",
                    opcoesImagem: [
                        { valor: "Singular", img: "img/numero_singular.svg", alt: "Singular" },
                        { valor: "Plural", img: "img/numero_plural.svg", alt: "Plural" }
                    ],
                    correta: "Singular",
                    dica: "«Livro» indica apenas um livro (o livro), por isso está no singular."
                },
                {
                    id: 109,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>BOLAS</span>",
                    opcoesImagem: [
                        { valor: "Singular", img: "img/numero_singular.svg", alt: "Singular" },
                        { valor: "Plural", img: "img/numero_plural.svg", alt: "Plural" }
                    ],
                    correta: "Plural",
                    dica: "«Bolas» indica várias bolas (as bolas), por isso está no plural."
                },
                {
                    id: 110,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>COELHA</span>",
                    opcoesImagem: [
                        { valor: "Singular", img: "img/numero_singular.svg", alt: "Singular" },
                        { valor: "Plural", img: "img/numero_plural.svg", alt: "Plural" }
                    ],
                    correta: "Singular",
                    dica: "«Coelha» indica apenas uma coelha (a coelha), por isso está no singular."
                },
                {
                    id: 111,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual imagem representa <span class='destaque-fundo'>OS CÃES</span>?",
                    mostrarLegenda: false,
					opcoesImagem: [
                        { valor: "O cão", img: "img/cao.png", alt: "Um cão" },
                        { valor: "Os cães", img: "img/cao.png", alt: "Vários cães", plural: true }
                    ],
                    correta: "Os cães",
                    dica: "«Os cães» está no plural e representa mais do que um cão."
                },
                {
                    id: 112,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual imagem representa <span class='destaque-fundo'>A MENINA</span>?",
                    mostrarLegenda: false,
					opcoesImagem: [
                        { valor: "A menina", img: "img/menina.png", alt: "Uma menina" },
                        { valor: "As meninas", img: "img/menina.png", alt: "Várias meninas", plural: true }
                    ],
                    correta: "A menina",
                    dica: "«A menina» está no singular e representa apenas uma menina."
                },
                {
                    id: 113,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>CASA</span>?",
                    opcoes: ["casas", "casaes", "casos", "casis"],
                    correta: "casas",
                    dica: "Nas palavras terminadas em vogal, basta acrescentar «-s»: casas."
                },
                {
                    id: 114,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>MENINO</span>?",
                    opcoes: ["meninos", "meninoes", "meninas", "meninons"],
                    correta: "meninos",
                    dica: "Acrescenta apenas um «-s» no final: meninos."
                },
                {
                    id: 115,
                    tipo: "padrao",
                    pergunta: "Qual destas palavras está no <span class='destaque-amarelo'>singular</span>?",
                    opcoes: ["estrela", "nuvens", "gatos", "livros"],
                    correta: "estrela",
                    dica: "«Estrela» indica apenas uma (a estrela). Todas as outras indicam várias."
                },
                {
                    id: 116,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>GATO</span>",
                    imagemPergunta: "img/gato.png",
                    plural: true,
                    audio: "audio/gatos.mp3",
                    correta: "gatos",
                    dica: "Acrescenta «s» no fim da palavra: gatos."
                },
                {
                    id: 117,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>PATO</span>",
                    imagemPergunta: "img/pato.png",
                    espelhar: "primeira",
					plural: true,
                    audio: "audio/patos.mp3",
                    correta: "patos",
                    dica: "Acrescenta «s» no fim da palavra: patos."
                },
                {
                    id: 118,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>URSO</span>",
                    imagemPergunta: "img/urso.png",
                    espelhar: "primeira",
					plural: true,
                    audio: "audio/ursos.mp3",
                    correta: "ursos",
                    dica: "Acrescenta «s» no fim da palavra: ursos."
                },
                {
                    id: 119,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>BOLA</span>",
                    imagemPergunta: "img/bola.png",
                    plural: true,
                    audio: "audio/bolas.mp3",
                    correta: "bolas",
                    dica: "Acrescenta «s» no fim da palavra: bolas."
                },
                {
                    id: 120,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>LIVRO</span>",
                    imagemPergunta: "img/livro.png",
                    plural: true,
                    audio: "audio/livros.mp3",
                    correta: "livros",
                    dica: "Acrescenta «s» no fim da palavra: livros."
                }
            ]
        },

        // =====================================================================
        // NÍVEL 2: TRANSFORMAÇÃO (-M -> -NS; -R/-Z -> -ES; -AL/-EL/-OL/-UL -> -IS)
        // =====================================================================
        {
            id: 2,
            titulo: "Transformação",
            subtitulo: "Palavras terminadas em -M, -R, -Z e -L",
            corClasse: "bg-laranja",
            icone: "img/icone_plural_2.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 201,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>NUVEM</span>?",
                    opcoes: ["nuvens", "nuvems", "nuvenes", "nuvões"],
                    correta: "nuvens",
                    dica: "As palavras terminadas em «-m» trocam o «m» por «ns»: nuvens."
                },
                {
                    id: 202,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>JARDIM</span>?",
                    opcoes: ["jardins", "jardims", "jardines", "jardiões"],
                    correta: "jardins",
                    dica: "Troca o «m» final por «ns»: jardins."
                },
                {
                    id: 203,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>BOMBOM</span>?",
                    opcoes: ["bombons", "bomboms", "bombones", "bombões"],
                    correta: "bombons",
                    dica: "Troca o «m» final por «ns»: bombons."
                },
                {
                    id: 204,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>FLOR</span>?",
                    opcoes: ["flores", "flors", "floris", "florões"],
                    correta: "flores",
                    dica: "As palavras terminadas em «-r» recebem «-es» no plural: flores."
                },
                {
                    id: 205,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>NARIZ</span>?",
                    opcoes: ["narizes", "narizs", "naris", "narizões"],
                    correta: "narizes",
                    dica: "As palavras terminadas em «-z» recebem «-es» no plural: narizes."
                },
                {
                    id: 206,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>RAPAZ</span>?",
                    opcoes: ["rapazes", "rapazs", "rapais", "rapazões"],
                    correta: "rapazes",
                    dica: "Acrescenta «-es» no final: rapazes."
                },
                {
                    id: 207,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>ANIMAL</span>?",
                    opcoes: ["animais", "animals", "animales", "animaes"],
                    correta: "animais",
                    dica: "As palavras terminadas em «-al» trocam o «l» por «is»: animais."
                },
                {
                    id: 208,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>ANEL</span>?",
                    opcoes: ["anéis", "anels", "aneles", "aneis"],
                    correta: "anéis",
                    dica: "Troca o «-el» por «-éis» (com acento agudo no é): anéis."
                },
                {
                    id: 209,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>CARACOL</span>?",
                    opcoes: ["caracóis", "caracols", "caracoles", "caracois"],
                    correta: "caracóis",
                    dica: "Troca o «-ol» por «-óis» (com acento agudo no ó): caracóis."
                },
                {
                    id: 210,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>AZUL</span>?",
                    opcoes: ["azuis", "azuls", "azules", "azúis"],
                    correta: "azuis",
                    dica: "As palavras terminadas em «-ul» trocam o «l» por «is»: azuis."
                },
                {
                    id: 211,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n________ luzes",
                    imagemPergunta: "img/luz.png",
                    plural: true,
                    opcoes: ["A", "AS"],
                    correta: "AS",
                    dica: "«Luzes» é o plural de «a luz», por isso usamos «as»."
                },
                {
                    id: 212,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa com o artigo correto:\n________ caracóis",
                    imagemPergunta: "img/caracol.png",
                    espelhar: "primeira",
					plural: true,
                    opcoes: ["O", "OS"],
                    correta: "OS",
                    dica: "«Caracóis» é o plural de «o caracol», por isso usamos «os»."
                },
                {
                    id: 213,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual imagem representa <span class='destaque-fundo'>OS ANÉIS</span>?",
                    opcoesImagem: [
                        { valor: "Singular", img: "img/anel.png", alt: "Um anel" },
                        { valor: "Plural", img: "img/anel.png", alt: "Vários anéis", plural: true }
                    ],
                    correta: "Plural",
                    dica: "«Os anéis» representa mais do que um anel. Logo, é Plural!"
                },
                {
                    id: 214,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>PUDINS</span>",
                    opcoesImagem: [
                        { valor: "Singular", img: "img/numero_singular.svg", alt: "Singular" },
                        { valor: "Plural", img: "img/numero_plural.svg", alt: "Plural" }
                    ],
                    correta: "Plural",
                    dica: "«Pudins» é o plural de «pudim»."
                },
                {
                    id: 215,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>NUVEM</span>",
                    imagemPergunta: "img/nuvem.png",
                    plural: true,
                    audio: "audio/nuvens.mp3",
                    correta: "nuvens",
                    dica: "Troca o «m» final por «ns»: nuvens."
                },
                {
                    id: 216,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>FLOR</span>",
                    imagemPergunta: "img/flor.png",
                    plural: true,
                    audio: "audio/flores.mp3",
                    correta: "flores",
                    dica: "Acrescenta «-es» no final: flores."
                },
                {
                    id: 217,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>LUZ</span>",
                    imagemPergunta: "img/luz.png",
                    plural: true,
                    audio: "audio/luzes.mp3",
                    correta: "luzes",
                    dica: "Acrescenta «-es» no final: luzes."
                },
                {
                    id: 218,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>ANEL</span>",
                    imagemPergunta: "img/anel.png",
                    plural: true,
                    audio: "audio/aneis.mp3",
                    correta: "anéis",
                    dica: "Troca «-el» por «-éis» (com acento no é): anéis."
                },
                {
                    id: 219,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>PINCEL</span>",
                    imagemPergunta: "img/pincel.png",
                    espelhar: "primeira",
					plural: true,
                    audio: "audio/pinceis.mp3",
                    correta: "pincéis",
                    dica: "Troca «-el» por «-éis» (com acento no é): pincéis."
                },
                {
                    id: 220,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>CARACOL</span>",
                    imagemPergunta: "img/caracol.png",
                    espelhar: "primeira",
					plural: true,
                    audio: "audio/caracois.mp3",
                    correta: "caracóis",
                    dica: "Troca «-ol» por «-óis» (com acento no ó): caracóis."
                }
            ]
        },

        // =====================================================================
        // NÍVEL 3: PLURAIS ESPECIAIS (-ÃO, Invariáveis e Sentido Inverso)
        // =====================================================================
        {
            id: 3,
            titulo: "Plurais Especiais",
            subtitulo: "Terminações em -ÃO e palavras invariáveis",
            corClasse: "bg-azul",
            icone: "img/icone_plural_3.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 301,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>BALÃO</span>?",
                    opcoes: ["balões", "balães", "balãos", "balãoes"],
                    correta: "balões",
                    dica: "A terminação «-ão» muda para «-ões»: balões."
                },
                {
                    id: 302,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>CÃO</span>?",
                    opcoes: ["cães", "cões", "cãos", "cãoes"],
                    correta: "cães",
                    dica: "O plural de «cão» faz-se em «-ães»: cães."
                },
                {
                    id: 303,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>PÃO</span>?",
                    opcoes: ["pães", "pões", "pãos", "pãoes"],
                    correta: "pães",
                    dica: "O plural de «pão» faz-se em «-ães»: pães."
                },
                {
                    id: 304,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>MÃO</span>?",
                    opcoes: ["mãos", "mões", "mães", "mãoes"],
                    correta: "mãos",
                    dica: "O plural de «mão» recebe apenas um «-s»: mãos."
                },
                {
                    id: 305,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>IRMÃO</span>?",
                    opcoes: ["irmãos", "irmões", "irmães", "irmãoes"],
                    correta: "irmãos",
                    dica: "O plural de «irmão» recebe apenas um «-s»: irmãos."
                },
                {
                    id: 306,
                    tipo: "padrao",
                    pergunta: "Qual é o <strong>plural</strong> de <span class='destaque-badge'>FUNIL</span>?",
                    opcoes: ["funis", "funils", "funiles", "funeis"],
                    correta: "funis",
                    dica: "Nas palavras agudas terminadas em «-il», troca-se o «l» por «s»: funis."
                },
                {
                    id: 307,
                    tipo: "padrao",
                    pergunta: "Como se escreve no plural: <span class='destaque-badge'>O LÁPIS</span>?",
                    opcoes: ["os lápis", "os lápises", "os lápisões", "o lápis"],
                    correta: "os lápis",
                    dica: "A palavra «lápis» não muda no plural; apenas muda o artigo: os lápis."
                },
                {
                    id: 308,
                    tipo: "padrao",
                    pergunta: "Como se escreve no plural: <span class='destaque-badge'>O PIRES</span>?",
                    opcoes: ["os pires", "os pireses", "os piris", "o pires"],
                    correta: "os pires",
                    dica: "A palavra «pires» escreve-se igual no singular e no plural: os pires."
                },
                {
                    id: 309,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa para indicar vários:\n________ lápis",
                    imagemPergunta: "img/lapis.png",
                    plural: true,
                    opcoes: ["O", "OS"],
                    correta: "OS",
                    dica: "Como há mais do que um lápis, usamos o artigo «os»: os lápis."
                },
                {
                    id: 310,
                    tipo: "lacuna",
                    ordemFixa: true,
                    pergunta: "Completa para indicar vários:\n________ pires",
                    imagemPergunta: "img/pires.png",
                    plural: true,
                    opcoes: ["O", "OS"],
                    correta: "OS",
                    dica: "Para indicar vários pires, mudamos apenas o artigo para «os»: os pires."
                },
                {
                    id: 311,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>OS LÁPIS</span>",
                    opcoesImagem: [
                        { valor: "Singular", img: "img/numero_singular.svg", alt: "Singular" },
                        { valor: "Plural", img: "img/numero_plural.svg", alt: "Plural" }
                    ],
                    correta: "Plural",
                    dica: "O artigo «os» mostra que estamos a falar de vários lápis (plural)."
                },
                {
                    id: 312,
                    tipo: "situacao",
                    ordemFixa: true,
                    pergunta: "<span class='destaque-badge'>O PIRES</span>",
                    opcoesImagem: [
                        { valor: "Singular", img: "img/numero_singular.svg", alt: "Singular" },
                        { valor: "Plural", img: "img/numero_plural.svg", alt: "Plural" }
                    ],
                    correta: "Singular",
                    dica: "O artigo «o» mostra que há apenas um pires (singular)."
                },
                {
                    id: 313,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual imagem representa <span class='destaque-fundo'>OS BALÕES</span>?",
                    mostrarLegenda: false,
					opcoesImagem: [
                        { valor: "O balão", img: "img/balao.png", alt: "Um balão" },
                        { valor: "Os balões", img: "img/balao.png", alt: "Vários balões", plural: true }
                    ],
                    correta: "Os balões",
                    dica: "«Os balões» representa mais do que um balão."
                },
                {
                    id: 314,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>LEÃO</span>",
                    imagemPergunta: "img/leao.png",
                    plural: true,
                    audio: "audio/leoes.mp3",
                    correta: "leões",
                    dica: "Troca «-ão» por «-ões»: leões."
                },
                {
                    id: 315,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>BALÃO</span>",
                    imagemPergunta: "img/balao.png",
                    plural: true,
                    audio: "audio/baloes.mp3",
                    correta: "balões",
                    dica: "Troca «-ão» por «-ões»: balões."
                },
                {
                    id: 316,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>CÃO</span>",
                    imagemPergunta: "img/cao.png",
                    plural: true,
                    audio: "audio/caes.mp3",
                    correta: "cães",
                    dica: "Troca «-ão» por «-ães»: cães."
                },
                {
                    id: 317,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>PÃO</span>",
                    imagemPergunta: "img/pao.png",
                    plural: true,
                    audio: "audio/paes.mp3",
                    correta: "pães",
                    dica: "Troca «-ão» por «-ães»: pães."
                },
                {
                    id: 318,
                    tipo: "construtor",
                    pergunta: "Escreve o <strong>plural</strong> de\n<span class='destaque-badge'>MÃO</span>",
                    imagemPergunta: "img/mao.png",
                    plural: true,
                    audio: "audio/maos.mp3",
                    correta: "mãos",
                    dica: "Acrescenta apenas «s» no fim: mãos."
                },
                {
                    id: 319,
                    tipo: "construtor",
                    pergunta: "Escreve o singular de\n<span class='destaque-badge'>FLORES</span>",
                    imagemPergunta: "img/flor.png",
                    audio: "audio/flor.mp3",
                    correta: "flor",
                    dica: "Retira o «-es» final para voltar ao singular: flor."
                },
                {
                    id: 320,
                    tipo: "construtor",
                    pergunta: "Escreve o singular de\n<span class='destaque-badge'>ANÉIS</span>",
                    imagemPergunta: "img/anel.png",
                    audio: "audio/anel.mp3",
                    correta: "anel",
                    dica: "Troca «-éis» por «-el» (sem acento): anel."
                }
            ]
        },

        // =====================================================================
        // NÍVEL 4: SUPER DESAFIO (Mistura aleatória de todos os níveis)
        // =====================================================================
        {
            id: 4,
            titulo: "Super Desafio",
            subtitulo: "Mistura todos os níveis!",
            corClasse: "bg-roxo",
            icone: "img/icone_plural_4.svg",
            numQuestoes: 10,
            misturarModos: true
        }
    ]
};