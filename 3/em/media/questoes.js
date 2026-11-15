const CONFIG_JOGO = {
    titulo: "Missão Media",
    subtituloMenu: "Explora o mundo da comunicação e da informação!",
    tema: {
        corPrimaria: "#51cf66",
        corSecundaria: "#27ae60"
    },
    niveis: [
        {
            id: 1,
            titulo: "Os Media no Dia-a-Dia",
            subtitulo: "Meios e funções",
            corClasse: "bg-turquesa",
            icone: "img/icone_media_1.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 101,
                    tipo: "situacao",
                    categoriaDistratores: "media_atuais",
                    mostrarLegenda: false,
                    pergunta: "Qual destes meios mostra páginas da\n<span class='destaque-badge'>Web</span>",
                    correta: "Internet",
                    dica: "Procura o globo terrestre com as letras WWW."
                },
                {
                    id: 102,
                    tipo: "situacao",
                    categoriaDistratores: "media_atuais",
                    mostrarLegenda: false,
                    pergunta: "Identifica o\n<span class='destaque-badge'>Jornal</span>",
                    correta: "Jornal",
                    dica: "É feito de folhas de papel dobradas com notícias."
                },
                {
                    id: 103,
                    tipo: "situacao",
                    categoriaDistratores: "media_atuais",
                    mostrarLegenda: false,
                    pergunta: "Qual destas imagens representa um <span class='destaque-badge'>Cartaz</span>?",
                    correta: "Cartaz",
                    dica: "É um painel grande usado para divulgar mensagens na rua."
                },
                {
                    id: 104,
                    tipo: "situacao",
                    categoriaDistratores: "media_atuais",
                    mostrarLegenda: false,
                    pergunta: "Toca na imagem da\n<span class='destaque-badge'>Televisão</span>",
                    correta: "Televisão",
                    dica: "Tem um ecrã onde vemos programas e telejornais em casa."
                },
                {
                    id: 105,
                    tipo: "situacao",
                    categoriaDistratores: "media_atuais",
                    mostrarLegenda: false,
                    pergunta: "Qual destes meios é o\n<span class='destaque-badge'>Rádio</span>",
                    correta: "Rádio",
                    dica: "Tem antena e botões para sintonizar emissões sonoras."
                },
                {
                    id: 106,
                    tipo: "situacao",
                    categoriaDistratores: "media_atuais",
                    pergunta: "<span class='destaque-badge'>Ouvir notícias e música</span>",
                    correta: "Rádio",
                    dica: "É um meio apenas sonoro muito usado."
                },
                {
                    id: 107,
                    tipo: "situacao",
                    categoriaDistratores: "media_atuais",
                    pergunta: "<span class='destaque-badge'>Ver um filme em 3D numa sala escura</span>",
                    correta: "Cinema",
                    dica: "Usa um rolo de filme e claquete para projetar histórias."
                },
                {
                    id: 108,
                    tipo: "situacao",
                    categoriaDistratores: "media_atuais",
                    pergunta: "<span class='destaque-badge'>Anúncio gigante visto na rua</span>",
                    correta: "Cartaz",
                    dica: "Costuma estar colocado em estruturas altas nas ruas."
                },
                {
                    id: 109,
                    tipo: "padrao",
                    pergunta: "O que é?\n <span class='destaque-badge'>Trocar ideias e sentimentos entre pessoas</span>",
                    opcoes: ["Comunicação", "Isolamento", "Publicidade", "Silêncio"],
                    correta: "Comunicação",
                    dica: "É a interação entre pessoas que partilham informações."
                },
                {
                    id: 110,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>MEDIA</span>\nO que são?",
                    opcoes: [
                        "Meios de comunicação social",
                        "Apenas redes sociais",
                        "Jogos de computador",
                        "Sinais de trânsito"
                    ],
                    correta: "Meios de comunicação social",
                    dica: "Servem para transmitir informação ao grande público."
                },
                {
                    id: 111,
                    tipo: "texto",
                    pergunta: "Sem comunicar com ninguém, viveríamos num mundo ________.",
                    opcoes: ["isolado", "digital", "barulhento", "rápido"],
                    correta: "isolado",
                    dica: "A comunicação permite-nos ser seres sociáveis."
                },
                {
                    id: 112,
                    tipo: "texto",
                    pergunta: "Conversar frente a frente é comunicação ________.",
                    opcoes: ["presencial", "à distância", "escrita", "impressa"],
                    correta: "presencial",
                    dica: "Acontece quando as pessoas estão no mesmo local."
                },
                {
                    id: 113,
                    tipo: "texto",
                    pergunta: "Usar o telefone para falar com alguém longe é comunicação ________.",
                    opcoes: ["à distância", "presencial", "gestual", "silenciosa"],
                    correta: "à distância",
                    dica: "Utiliza meios técnicos para ligar pessoas afastadas."
                },
                {
                    id: 114,
                    tipo: "categoria",
                    pergunta: "Onde encontramos este meio?\n<span class='destaque-badge'>Cartaz</span>",
                    opcoes: ["Na rua", "Dentro do estojo", "No bolso", "Debaixo da cama"],
                    correta: "Na rua",
                    dica: "É colocado em espaços exteriores onde passam muitas pessoas."
                },
                {
                    id: 115,
                    tipo: "categoria",
                    pergunta: "A que grupo pertencem?\n<span class='destaque-badge'>Jornal e Revista</span>",
                    opcoes: ["Imprensa escrita", "Meios sonoros", "Redes sociais", "Arte antiga"],
                    correta: "Imprensa escrita",
                    dica: "São publicações impressas em papel com textos e fotos."
                },
                {
                    id: 116,
                    tipo: "categoria",
                    imagemPergunta: "img/cena_estudar.jpg",
                    pergunta: "Qual é a <span class='destaque-fundo'>função</span> dos media nesta imagem?",
                    opcoes: ["Estudar e pesquisar", "Ver um espetáculo", "Fazer uma entrevista", "Ouvir música"],
                    correta: "Estudar e pesquisar",
                    dica: "Observa o rapaz com o portátil e o caderno na secretária."
                },
                {
                    id: 117,
                    tipo: "categoria",
                    imagemPergunta: "img/cena_jornalismo.jpg",
                    pergunta: "Qual é a <span class='destaque-fundo'>função</span> dos media nesta imagem?",
                    opcoes: ["Informar o público", "Ver um filme", "Estudar matemática", "Jogar online"],
                    correta: "Informar o público",
                    dica: "Os jornalistas usam microfones para recolher notícias."
                },
                {
                    id: 118,
                    tipo: "categoria",
                    imagemPergunta: "img/cena_videochamada.jpg",
                    pergunta: "Qual é a <span class='destaque-fundo'>função</span> dos media nesta imagem?",
                    opcoes: ["Comunicar à distância", "Comprar na papelaria", "Ler um jornal", "Gravar um filme"],
                    correta: "Comunicar à distância",
                    dica: "O avô conversa com familiares através do computador."
                },
                {
                    id: 119,
                    tipo: "categoria",
                    imagemPergunta: "img/cena_cinema.jpg",
                    pergunta: "Qual é a <span class='destaque-fundo'>função</span> dos media nesta imagem?",
                    opcoes: ["Entretenimento", "Noticiar o tempo", "Escrever cartas", "Fazer chamadas"],
                    correta: "Entretenimento",
                    dica: "As crianças usam óculos 3D numa sala de espetáculos."
                },
                {
                    id: 120,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-amarelo'>Educação para os Media</span>\n Para que serve?",
                    opcoes: [
                        "Usar os media com responsabilidade",
                        "Proibir a internet",
                        "Ver televisão todo o dia",
                        "Partilhar tudo online"
                    ],
                    correta: "Usar os media com responsabilidade",
                    dica: "Ajuda a usar a internet de forma crítica e segura."
                }
            ]
        },
        {
            id: 2,
            titulo: "Evolução dos Media",
            subtitulo: "Das cavernas à internet",
            corClasse: "bg-verde",
            icone: "img/icone_media_2.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 201,
                    tipo: "situacao",
                    categoriaDistratores: "media_historia",
                    mostrarLegenda: false,
                    pergunta: "Identifica a\n<span class='destaque-badge'>Arte rupestre</span>",
                    correta: "Arte rupestre",
                    dica: "São desenhos gravados nas paredes de grutas pré-históricas."
                },
                {
                    id: 202,
                    tipo: "situacao",
                    categoriaDistratores: "media_historia",
                    mostrarLegenda: false,
                    pergunta: "Qual destas imagens mostra o <span class='destaque-badge'>Papiro</span>?",
                    correta: "Papiro",
                    dica: "É uma folha antiga com pinturas e hieróglifos egípcios."
                },
                {
                    id: 203,
                    tipo: "situacao",
                    categoriaDistratores: "media_historia",
                    mostrarLegenda: false,
                    pergunta: "Toca no <span class='destaque-badge'>Telégrafo elétrico</span>.",
                    correta: "Telégrafo elétrico",
                    dica: "Aparelho de madeira e metal usado para enviar código Morse."
                },
                {
                    id: 204,
                    tipo: "situacao",
                    categoriaDistratores: "media_historia",
                    mostrarLegenda: false,
                    pergunta: "Qual destes é o <span class='destaque-badge'>Jornal antigo</span>?",
                    correta: "Jornal antigo",
                    dica: "Folha amarelada impressa com colunas de texto."
                },
                {
                    id: 205,
                    tipo: "situacao",
                    categoriaDistratores: "media_historia",
                    mostrarLegenda: false,
                    pergunta: "Identifica o <span class='destaque-badge'>Rádio antigo</span>.",
                    correta: "Rádio antigo",
                    dica: "Caixa de madeira com altifalante de tecido e botões redondos."
                },
                {
                    id: 206,
                    tipo: "situacao",
                    categoriaDistratores: "media_historia",
                    mostrarLegenda: false,
                    pergunta: "Qual destas imagens mostra a <span class='destaque-badge'>Televisão antiga</span>?",
                    correta: "Televisão antiga",
                    dica: "Aparelho antigo com ecrã pequeno e antena em V no topo."
                },
                {
                    id: 207,
                    tipo: "situacao",
                    categoriaDistratores: "media_historia",
                    pergunta: "<span class='destaque-badge'>Gravuras pré-históricas em cavernas</span>",
                    correta: "Arte rupestre",
                    dica: "Data de cerca de 40 000 a.C."
                },
                {
                    id: 208,
                    tipo: "situacao",
                    categoriaDistratores: "media_historia",
                    pergunta: "<span class='destaque-badge'>Folhas criadas pelos antigos egípcios</span>",
                    correta: "Papiro",
                    dica: "Era usado no Egito por volta de 2500 a.C."
                },
                {
                    id: 209,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Meio de registo mais antigo</span>",
                    opcoes: ["Arte rupestre", "Papiro", "Jornal", "Rádio"],
                    correta: "Arte rupestre",
                    dica: "Surgiu há cerca de 40 000 a.C. no interior de grutas."
                },
                {
                    id: 210,
                    tipo: "padrao",
                    pergunta: "O que representavam as <span class='destaque-fundo'>gravuras rupestres</span>'",
                    opcoes: ["Caçadas e conquistas", "Notícias de jornal", "Mapas da internet", "Programas de rádio"],
                    correta: "Caçadas e conquistas",
                    dica: "Mostravam o quotidiano dos primeiros seres humanos."
                },
                {
                    id: 211,
                    tipo: "padrao",
                    pergunta: "Quem desenvolveu a técnica do <span class='destaque-badge'>papiro</span>?",
                    opcoes: ["Os egípcios", "Os romanos", "Os portugueses", "Os gregos"],
                    correta: "Os egípcios",
                    dica: "Civilização antiga que vivia junto ao rio Nilo."
                },
                {
                    id: 212,
                    tipo: "texto",
                    pergunta: "O papiro surgiu por volta do ano ________.",
                    opcoes: ["2500 a.C.", "40 000 a.C.", "1900", "2020"],
                    correta: "2500 a.C.",
                    dica: "Surgiu depois da arte rupestre e antes do jornal."
                },
                {
                    id: 213,
                    tipo: "texto",
                    pergunta: "O jornal impresso em papel surgiu no ________.",
                    opcoes: ["séc. XVII", "séc. XXI", "tempo das cavernas", "Antigo Egito"],
                    correta: "séc. XVII",
                    dica: "Apareceu antes do rádio e da televisão."
                },
                {
                    id: 214,
                    tipo: "texto",
                    pergunta: "O rádio comunicava à distância através do ________.",
                    opcoes: ["som", "papel", "papiro", "vídeo"],
                    correta: "som",
                    dica: "Não tinha ecrã, apenas altifalante."
                },
                {
                    id: 215,
                    tipo: "texto",
                    pergunta: "A televisão trouxe informação com som e ________.",
                    opcoes: ["imagem", "papiro", "pedra", "fumo"],
                    correta: "imagem",
                    dica: "Permitiu ver e ouvir acontecimentos à distância."
                },
                {
                    id: 216,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Enviava mensagens por impulsos elétricos</span>",
                    opcoes: ["Telégrafo elétrico", "Arte rupestre", "Revista", "Cartaz"],
                    correta: "Telégrafo elétrico",
                    dica: "Foi uma invenção marcante do século XIX."
                },
                {
                    id: 217,
                    tipo: "categoria",
                    pergunta: "A que época pertence?\n<span class='destaque-badge'>Rádio</span>",
                    opcoes: ["Século XIX", "Século XVII", "2500 a.C.", "40 000 a.C."],
                    correta: "Século XIX",
                    dica: "Surgiu dois séculos depois do jornal impresso."
                },
                {
                    id: 218,
                    tipo: "categoria",
                    pergunta: "A que época pertence?\n<span class='destaque-badge'>Televisão</span>",
                    opcoes: ["Século XX", "Século XVII", "Século XV", "2500 a.C."],
                    correta: "Século XX",
                    dica: "Apareceu depois do rádio, no século passado."
                },
                {
                    id: 219,
                    tipo: "categoria",
                    pergunta: "A que época pertence?\n<span class='destaque-badge'>Internet</span>",
                    opcoes: ["Século XX", "Século XIX", "Século XVII", "Antigo Egito"],
                    correta: "Século XX",
                    dica: "É o meio tecnológico mais recente desta linha do tempo."
                },
                {
                    id: 220,
                    tipo: "padrao",
                    pergunta: "Que <span class='destaque-amarelo'>meio de comunicação</span> leva a informação mais depressa a todo o mundo?",
                    opcoes: ["Internet", "Jornal em papel", "Papiro", "Cartaz"],
                    correta: "Internet",
                    dica: "Liga computadores e telemóveis em tempo real."
                }
            ]
        },
        {
            id: 3,
            titulo: "Vantagens e Fake News",
            subtitulo: "Uso crítico e seguro",
            corClasse: "bg-laranja",
            icone: "img/icone_media_3.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 301,
                    tipo: "cidadania",
                    imagemPergunta: "img/cena_videoconferencia.jpg",
                    pergunta: "A imagem mostra uma <span class='destaque-texto-verde'>vantagem</span> ou <span class='destaque-texto-vermelho'>desvantagem</span> dos media?",
                    opcoes: ["Vantagem", "Desvantagem"],
                    correta: "Vantagem",
                    dica: "Os media permitem reunir e trabalhar à distância."
                },
                {
                    id: 302,
                    tipo: "cidadania",
                    imagemPergunta: "img/cena_isolamento.jpg",
                    pergunta: "A imagem mostra uma <span class='destaque-texto-verde'>vantagem</span> ou <span class='destaque-texto-vermelho'>desvantagem</span> dos media?",
                    opcoes: ["Vantagem", "Desvantagem"],
                    correta: "Desvantagem",
                    dica: "Cada pessoa está isolada no seu telemóvel em vez de conversar."
                },
                {
                    id: 303,
                    tipo: "cidadania",
                    pergunta: "Comunicar rapidamente com pessoas longe é uma <span class='destaque-texto-verde'>vantagem</span> ou <span class='destaque-texto-vermelho'>desvantagem</span>?",
                    opcoes: ["Vantagem", "Desvantagem"],
                    correta: "Vantagem",
                    dica: "Facilita o contacto entre familiares e amigos."
                },
                {
                    id: 304,
                    tipo: "cidadania",
                    pergunta: "O isolamento pessoal por excesso de ecrãs é uma <span class='destaque-texto-verde'>vantagem</span> ou <span class='destaque-texto-vermelho'>desvantagem</span>?",
                    opcoes: ["Vantagem", "Desvantagem"],
                    correta: "Desvantagem",
                    dica: "Afasta-nos do convívio presencial com os outros."
                },
                {
                    id: 305,
                    tipo: "cidadania",
                    pergunta: "Através dos media podemos aceder ao conhecimento de várias áreas. \n Isso é uma <span class='destaque-texto-verde'>vantagem</span> ou <span class='destaque-texto-vermelho'>desvantagem</span>?",
                    opcoes: ["Vantagem", "Desvantagem"],
                    correta: "Vantagem",
                    dica: "Ajuda a aprender e a investigar temas escolares."
                },
                {
                    id: 306,
                    tipo: "cidadania",
                    pergunta: "Usar a internet para praticar cyberbullying é\n <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span>?",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado",
                    dica: "É um comportamento impróprio que magoa outras pessoas."
                },
                {
                    id: 307,
                    tipo: "cidadania",
                    pergunta: "Os media permitem-nos conhecer culturas e países diferentes.\n Isso é uma <span class='destaque-texto-verde'>vantagem</span> ou <span class='destaque-texto-vermelho'>desvantagem</span>?",
                    opcoes: ["Vantagem", "Desvantagem"],
                    correta: "Vantagem",
                    dica: "Amplia a nossa cultura e aproxima os povos."
                },
                {
                    id: 308,
                    tipo: "cidadania",
                    pergunta: "Manipular opiniões com notícias falsas é\n <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span>?",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado",
                    dica: "Enganar as pessoas é prejudicar a sociedade."
                },
                {
                    id: 309,
                    tipo: "cidadania",
                    pergunta: "Aproximar culturas e resolver problemas globais é uma\n <span class='destaque-texto-verde'>vantagem</span> ou <span class='destaque-texto-vermelho'>desvantagem</span> dos media?",
                    opcoes: ["Vantagem", "Desvantagem"],
                    correta: "Vantagem",
                    dica: "Permite cooperar em todo o mundo num curto espaço de tempo."
                },
                {
                    id: 310,
                    tipo: "cidadania",
                    pergunta: "Deixar de conviver com a família por causa do telemóvel é uma\n <span class='destaque-texto-verde'>vantagem</span> ou <span class='destaque-texto-vermelho'>desvantagem</span>?",
                    opcoes: ["Vantagem", "Desvantagem"],
                    correta: "Desvantagem",
                    dica: "O uso exagerado prejudica as relações pessoais."
                },
                {
                    id: 311,
                    tipo: "padrao",
                    pergunta: "Como se chamam as <span class='destaque-badge'>notícias falsas</span> na internet?",
                    opcoes: ["Fake news", "Podcasts", "Tutoriais", "Enciclopédias"],
                    correta: "Fake news",
                    dica: "É a expressão em inglês usada para notícias falsas."
                },
                {
                    id: 312,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-amarelo'>Sinal de alerta de uma notícia falsa</span>",
                    opcoes: [
                        "Não indica a origem",
                        "Tem fontes oficiais",
                        "Mostra data e local",
                        "Está num manual escolar"
                    ],
                    correta: "Não indica a origem",
                    dica: "Quando não sabemos quem escreveu a notícia, devemos desconfiar."
                },
                {
                    id: 313,
                    tipo: "padrao",
                    pergunta: "Um título exagerado para assustar é uma notícia <span class='destaque-badge'>sensacionalista</span>.",
                    opcoes: ["Verdadeiro", "Falso", "Segura", "Científica"],
                    correta: "Verdadeiro",
                    dica: "Notícias falsas usam frases chocantes para chamar a atenção."
                },
                {
                    id: 314,
                    tipo: "padrao",
                    pergunta: "Antes de partilhar uma <span class='destaque-badge'>notícia</span>, o que devemos fazer?",
                    opcoes: [
                        "Verificar se é verdadeira",
                        "Partilhar logo com todos",
                        "Acreditar sem ler",
                        "Mudar o título"
                    ],
                    correta: "Verificar se é verdadeira",
                    dica: "Confirma sempre a fonte, a data e o local dos factos."
                },
                {
                    id: 315,
                    tipo: "padrao",
                    pergunta: "Quando uma notícia <span class='destaque-texto-vermelho'>esconde</span> a data e o local pode ser <span class='destaque-badge'>falsa</span>.",
                    opcoes: [
                        "Sim, é um sinal de alerta",
                        "Não, é sempre verdade",
                        "Sim, mas deve ser partilhada",
                        "Não tem importância"
                    ],
                    correta: "Sim, é um sinal de alerta",
                    dica: "As notícias verdadeiras indicam onde e quando tudo aconteceu."
                },
                {
                    id: 316,
                    tipo: "texto",
                    pergunta: "Na internet devemos ter uma atitude ________ e segura.",
                    opcoes: ["crítica", "distraída", "impulsiva", "descuidada"],
                    correta: "crítica",
                    dica: "Significa pensar e avaliar antes de acreditar ou clicar."
                },
                {
                    id: 317,
                    tipo: "texto",
                    pergunta: "Nem tudo o que aparece na internet é ________.",
                    opcoes: ["verdadeiro", "digital", "colorido", "rápido"],
                    correta: "verdadeiro",
                    dica: "Qualquer pessoa pode publicar informações erradas online."
                },
                {
                    id: 318,
                    tipo: "texto",
                    pergunta: "Comportamentos ofensivos online chamam-se ________.",
                    opcoes: ["cyberbullying", "jornalismo", "educação", "partilha"],
                    correta: "cyberbullying",
                    dica: "É uma forma de agressão ou perseguição através dos meios digitais."
                },
                {
                    id: 319,
                    tipo: "categoria",
                    pergunta: "Como classificar?\n<span class='destaque-badge'>Notícia sem fonte nem data</span>",
                    opcoes: ["Suspeita de fake news", "Informação confirmada", "Notícia oficial", "Trabalho escolar"],
                    correta: "Suspeita de fake news",
                    dica: "Faltam elementos essenciais para comprovar os factos."
                },
                {
                    id: 320,
                    tipo: "categoria",
                    pergunta: "Como agir?\n<span class='destaque-badge'>Recebi um boato online</span>",
                    opcoes: ["Não partilhar", "Enviar aos amigos", "Acreditar logo", "Publicar no mural"],
                    correta: "Não partilhar",
                    dica: "Não espalhes informações sem ter a certeza de que são reais."
                }
            ]
        },
        {
            id: 4,
            titulo: "Desafio Final",
            subtitulo: "Mistura todos os temas",
            corClasse: "bg-azul",
            icone: "img/icone_media_4.svg",
            numQuestoes: 10,
            misturarModos: true
        }
    ]
};