const CONFIG_JOGO = {
    id: "estudo-meio-instituicoes",
    titulo: "Instituições e Serviços",
    subtituloMenu: "Escolhe um minijogo para começar!",
    tema: {
        corPrimaria: "#2ecc71",
        corSecundaria: "#27ae60"
    },
    cooldownDica: 3,
    niveis: [
        {
            id: 1,
            titulo: "Serviços e Edifícios",
            subtitulo: "Resolver problemas do dia a dia",
            icone: "img/icone_servicos.jpg",
            corClasse: "bg-verde",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 101,
                    tipo: "situacao",
                    pergunta: "O remédio da avó",
                    audio: "audios/situacao_remedio.mp3", // Áudio: "A avó do Duarte está com uma constipação e precisa de xarope. Onde deve ir comprar o medicamento?"
                    dica: "É o local onde se vendem medicamentos e xaropes para a saúde.",
                    opcoesImagem: [
                        { img: "img/farmacia.jpg", alt: "Farmácia", valor: "Farmácia" },
                        { img: "img/banco.jpg", alt: "Banco", valor: "Banco" },
                        { img: "img/correios.jpg", alt: "Correios", valor: "Correios" },
                        { img: "img/escola.jpg", alt: "Escola", valor: "Escola" }
                    ],
                    correta: "Farmácia"
                },
                {
                    id: 102,
                    tipo: "padrao",
                    pergunta: "Onde vamos para comprar medicamentos prescritos pelo médico?",
                    audio: "audios/q_farmacia.mp3", // Áudio: "Quando o médico nos passa uma receita de remédios, em que estabelecimento os vamos buscar?"
                    dica: "Procura o estabelecimento onde os farmacêuticos nos atendem.",
                    opcoes: ["Farmácia", "Teatro", "Banco", "Supermercado"],
                    correta: "Farmácia"
                },
                {
                    id: 103,
                    tipo: "situacao",
                    pergunta: "A carta para o amigo",
                    audio: "audios/situacao_carta.mp3", // Áudio: "O Tomás escreveu um postal de parabéns ao primo que mora longe. Onde é que ele deve ir para o enviar?"
                    dica: "É o sítio onde colamos selos e pesamos as encomendas.",
                    opcoesImagem: [
                        { img: "img/correios.jpg", alt: "Correios", valor: "Correios" },
                        { img: "img/hospital.jpg", alt: "Hospital", valor: "Hospital" },
                        { img: "img/teatro.jpg", alt: "Teatro", valor: "Teatro" },
                        { img: "img/parque.jpg", alt: "Parque", valor: "Parque" }
                    ],
                    correta: "Correios"
                },
                {
                    id: 104,
                    tipo: "padrao",
                    pergunta: "Qual é a instituição responsável por enviar cartas e encomendas?",
                    audio: "audios/q_correios.mp3", // Áudio: "Qual é o serviço público para onde levamos as cartas para que os carteiros as entreguem?"
                    dica: "É o serviço onde trabalham os carteiros.",
                    opcoes: ["Correios", "Biblioteca", "Tribunal", "Piscina Municipal"],
                    correta: "Correios"
                },
                {
                    id: 105,
                    tipo: "situacao",
                    pergunta: "Tratamento de emergência",
                    audio: "audios/situacao_hospital.mp3", // Áudio: "O Leo caiu a andar de bicicleta, magoou-se com gravidade e precisa de ver um médico urgente. Para onde o vai levar a ambulância?"
                    dica: "Local onde trabalham equipas de médicos e enfermeiros 24 horas por dia.",
                    opcoesImagem: [
                        { img: "img/hospital.jpg", alt: "Hospital", valor: "Hospital" },
                        { img: "img/tribunal.jpg", alt: "Tribunal", valor: "Tribunal" },
                        { img: "img/supermercado.jpg", alt: "Supermercado", valor: "Supermercado" },
                        { img: "img/biblioteca.jpg", alt: "Biblioteca", valor: "Biblioteca" }
                    ],
                    correta: "Hospital"
                },
                {
                    id: 106,
                    tipo: "padrao",
                    pergunta: "Em caso de doença súbita ou acidente grave, onde devemos ir?",
                    audio: "audios/q_hospital.mp3", // Áudio: "Se alguém tiver uma emergência de saúde grave durante a noite, a que edifício de saúde deve recorrer?"
                    dica: "É para onde as ambulâncias levam os doentes urgentes.",
                    opcoes: ["Hospital", "Museu", "Banco", "Teatro"],
                    correta: "Hospital"
                },
                {
                    id: 107,
                    tipo: "situacao",
                    pergunta: "Guardar as poupanças",
                    audio: "audios/situacao_banco.mp3", // Áudio: "A Maria encheu o seu mealheiro de moedas e os pais vão ajudá-la a guardar o dinheiro numa conta segura. Onde vão?"
                    dica: "Espaço onde se depositam moedas e notas em segurança.",
                    opcoesImagem: [
                        { img: "img/banco.jpg", alt: "Banco", valor: "Banco" },
                        { img: "img/farmacia.jpg", alt: "Farmácia", valor: "Farmácia" },
                        { img: "img/piscina.jpg", alt: "Piscina Municipal", valor: "Piscina Municipal" },
                        { img: "img/gnr.jpg", alt: "GNR", valor: "GNR" }
                    ],
                    correta: "Banco"
                },
                {
                    id: 108,
                    tipo: "padrao",
                    pergunta: "Qual o local indicado para guardar dinheiro em segurança ou tratar de finanças?",
                    audio: "audios/q_banco.mp3", // Áudio: "Onde é que os adultos vão para guardar as suas poupanças ou utilizar o Multibanco?"
                    dica: "Tem caixas automáticas (Multibanco) para levantar dinheiro.",
                    opcoes: ["Banco", "Escola", "Centro de Saúde", "Biblioteca"],
                    correta: "Banco"
                },
                {
                    id: 109,
                    tipo: "situacao",
                    pergunta: "Requisitar um livro",
                    audio: "audios/situacao_livro.mp3", // Áudio: "A Matilde precisa de pesquisar sobre dinossauros para um trabalho da escola. Onde pode ir pedir um livro emprestado?"
                    dica: "Local cheio de prateleiras com livros de histórias e enciclopédias.",
                    opcoesImagem: [
                        { img: "img/biblioteca.jpg", alt: "Biblioteca", valor: "Biblioteca" },
                        { img: "img/psp.jpg", alt: "PSP", valor: "PSP" },
                        { img: "img/supermercado.jpg", alt: "Supermercado", valor: "Supermercado" },
                        { img: "img/correios.jpg", alt: "Correios", valor: "Correios" }
                    ],
                    correta: "Biblioteca"
                },
                {
                    id: 110,
                    tipo: "padrao",
                    pergunta: "Onde podemos consultar e requisitar livros para aprender coisas novas?",
                    audio: "audios/q_biblioteca.mp3", // Áudio: "Qual é o local público da cidade onde podemos ler em silêncio e levar livros para casa?"
                    dica: "É um local público de leitura onde devemos fazer silêncio.",
                    opcoes: ["Biblioteca", "Tribunal", "Piscina Municipal", "Farmácia"],
                    correta: "Biblioteca"
                },
                {
                    id: 111,
                    tipo: "situacao",
                    pergunta: "Fazer as compras de comida",
                    audio: "audios/situacao_compras.mp3", // Áudio: "O pai precisa de encher o carrinho com fruta, pão, iogurtes e vegetais para a semana. Onde deve ir?"
                    dica: "Local onde usamos um carrinho para escolher fruta, pão e leite.",
                    opcoesImagem: [
                        { img: "img/supermercado.jpg", alt: "Supermercado", valor: "Supermercado" },
                        { img: "img/tribunal.jpg", alt: "Tribunal", valor: "Tribunal" },
                        { img: "img/centro_saude.jpg", alt: "Centro de Saúde", valor: "Centro de Saúde" },
                        { img: "img/museu.jpg", alt: "Museu", valor: "Museu" }
                    ],
                    correta: "Supermercado"
                },
                {
                    id: 112,
                    tipo: "padrao",
                    pergunta: "Onde se compram os alimentos e produtos para responder às necessidades diárias da família?",
                    audio: "audios/q_supermercado.mp3", // Áudio: "Em que grande loja da comunidade encontramos toda a comida necessária para o dia a dia?"
                    dica: "Loja de grande dimensão com várias secções de alimentação.",
                    opcoes: ["Supermercado", "Teatro", "PSP", "Biblioteca"],
                    correta: "Supermercado"
                },
                {
                    id: 113,
                    tipo: "situacao",
                    pergunta: "A aula de natação",
                    audio: "audios/situacao_natacao.mp3", // Áudio: "Ao fim da tarde, a Sofia equipa-se com o fato de banho e a touca para aprender a nadar. Aonde é que a mãe a vai levar?"
                    dica: "Instalação desportiva com tanques de água cobertos.",
                    opcoesImagem: [
                        { img: "img/piscina.jpg", alt: "Piscina Municipal", valor: "Piscina Municipal" },
                        { img: "img/teatro.jpg", alt: "Teatro", valor: "Teatro" },
                        { img: "img/farmacia.jpg", alt: "Farmácia", valor: "Farmácia" },
                        { img: "img/banco.jpg", alt: "Banco", valor: "Banco" }
                    ],
                    correta: "Piscina Municipal"
                },
                {
                    id: 114,
                    tipo: "padrao",
                    pergunta: "A PSP e a GNR são forças de segurança que servem para...",
                    audio: "audios/q_seguranca.mp3", // Áudio: "Qual é o principal dever dos polícias e guardas que patrulham as nossas ruas?"
                    dica: "Pensa naquilo que os agentes da autoridade fazem na rua.",
                    opcoes: ["Proteger as populações", "Vender alimentos", "Emprestar livros", "Fazer espetáculos"],
                    correta: "Proteger as populações"
                },
                {
                    id: 115,
                    tipo: "situacao",
                    pergunta: "Pedir ajuda à polícia",
                    audio: "audios/situacao_policia.mp3", // Áudio: "Se te perderes da tua família durante um passeio no centro da cidade, a que profissionais de farda deves pedir ajuda?"
                    dica: "Procura a entidade onde trabalham guardas e agentes de farda.",
                    opcoesImagem: [
                        { img: "img/psp.jpg", alt: "PSP / GNR", valor: "PSP / GNR" },
                        { img: "img/biblioteca.jpg", alt: "Biblioteca", valor: "Biblioteca" },
                        { img: "img/parque.jpg", alt: "Parque", valor: "Parque" },
                        { img: "img/farmacia.jpg", alt: "Farmácia", valor: "Farmácia" }
                    ],
                    correta: "PSP / GNR"
                },
                {
                    id: 116,
                    tipo: "padrao",
                    pergunta: "Onde assistimos a peças de teatro, musicais e apresentações artísticas?",
                    audio: "audios/q_teatro.mp3", // Áudio: "Qual é o edifício com palco e cortinas onde se realizam peças dramáticas e musicais?"
                    dica: "É um edifício com palco, cortinas vermelhas e plateia.",
                    opcoes: ["Teatro", "Hospital", "Banco", "Supermercado"],
                    correta: "Teatro"
                },
                {
                    id: 117,
                    tipo: "situacao",
                    pergunta: "Ver uma peça ao vivo",
                    audio: "audios/situacao_teatro.mp3", // Áudio: "A turma do 2.º ano vai fazer uma visita de estudo para ver um espetáculo de marionetas num palco real. Aonde é que o autocarro os leva?"
                    dica: "Espaço cultural de artes cénicas e espetáculos.",
                    opcoesImagem: [
                        { img: "img/teatro.jpg", alt: "Teatro", valor: "Teatro" },
                        { img: "img/centro_saude.jpg", alt: "Centro de Saúde", valor: "Centro de Saúde" },
                        { img: "img/banco.jpg", alt: "Banco", valor: "Banco" },
                        { img: "img/correios.jpg", alt: "Correios", valor: "Correios" }
                    ],
                    correta: "Teatro"
                },
                {
                    id: 118,
                    tipo: "padrao",
                    pergunta: "Qual é o local encarregue de julgar e garantir a defesa dos direitos dos cidadãos?",
                    audio: "audios/q_tribunal.mp3", // Áudio: "Onde trabalham os juízes para resolver problemas entre as pessoas e aplicar a lei com justiça?"
                    dica: "É o local onde trabalham os juízes e advogados.",
                    opcoes: ["Tribunal", "Escola", "Biblioteca", "Piscina Municipal"],
                    correta: "Tribunal"
                },
                {
                    id: 119,
                    tipo: "padrao",
                    pergunta: "Onde podemos passear ao ar livre, brincar no parque infantil e conviver com a família?",
                    audio: "audios/q_parque.mp3", // Áudio: "Qual é o espaço verde ao ar livre onde podemos andar de escorrega e fazer piqueniques em família?"
                    dica: "Espaço verde público com baloiços e escorregas.",
                    opcoes: ["Parque", "Hospital", "GNR", "Tribunal"],
                    correta: "Parque"
                },
                {
                    id: 120,
                    tipo: "situacao",
                    pergunta: "Brincar no baloiço",
                    audio: "audios/situacao_parque.mp3", // Áudio: "O Martim quer andar de baloiço e jogar à bola com os amigos numa tarde de sol. Onde se vão divertir?"
                    dica: "Local de lazer na natureza dentro ou fora da cidade.",
                    opcoesImagem: [
                        { img: "img/parque.jpg", alt: "Parque", valor: "Parque" },
                        { img: "img/hospital.jpg", alt: "Hospital", valor: "Hospital" },
                        { img: "img/gnr.jpg", alt: "GNR", valor: "GNR" },
                        { img: "img/tribunal.jpg", alt: "Tribunal", valor: "Tribunal" }
                    ],
                    correta: "Parque"
                }
            ]
        },
        {
            id: 2,
            titulo: "Categorias da Cidade",
            subtitulo: "Saúde, Segurança, Educação e Cultura",
            icone: "img/icone_categorias.jpg",
            corClasse: "bg-azul",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 201,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Hospital</span>",
                    dica: "Relaciona-se com tratar doenças e cuidar do bem-estar físico.",
                    imagemPergunta: "img/hospital.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Saúde"
                },
                {
                    id: 202,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Farmácia</span>",
                    dica: "Fornece remédios para curar e prevenir doenças.",
                    imagemPergunta: "img/farmacia.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Saúde"
                },
                {
                    id: 203,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Centro de Saúde</span>",
                    dica: "Local onde se dão vacinas e consultas médicas de rotina.",
                    imagemPergunta: "img/centro_saude.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Saúde"
                },
                {
                    id: 204,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Polícia de Segurança Pública (PSP)</span>",
                    dica: "A sua principal função é manter a ordem e a proteção da população.",
                    imagemPergunta: "img/psp.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Segurança"
                },
                {
                    id: 205,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Guarda Nacional Republicana (GNR)</span>",
                    dica: "Zela pelo cumprimento das leis e proteção dos cidadãos.",
                    imagemPergunta: "img/gnr.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Segurança"
                },
                {
                    id: 206,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Tribunal</span>",
                    dica: "Garante a justiça e o cumprimento dos direitos e deveres.",
                    imagemPergunta: "img/tribunal.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Segurança"
                },
                {
                    id: 207,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Escola</span>",
                    dica: "Local de ensino, aprendizagem e formação dos cidadãos.",
                    imagemPergunta: "img/escola.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Educação"
                },
                {
                    id: 208,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Biblioteca Municipal</span>",
                    dica: "Ajuda no estudo e no acesso ao conhecimento através de livros.",
                    imagemPergunta: "img/biblioteca.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Educação"
                },
                {
                    id: 209,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Teatro</span>",
                    dica: "Local de arte, entretenimento e cultura para os tempos livres.",
                    imagemPergunta: "img/teatro.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Cultura e Lazer"
                },
                {
                    id: 210,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Museu</span>",
                    dica: "Guarda objetos históricos e obras de arte para visitação pública.",
                    imagemPergunta: "img/museu.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Cultura e Lazer"
                },
                {
                    id: 211,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Piscina Municipal</span>",
                    dica: "Espaço de desporto, recreação e tempos livres.",
                    imagemPergunta: "img/piscina.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Cultura e Lazer"
                },
                {
                    id: 212,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Parque Infantil e de Lazer</span>",
                    dica: "Local ao ar livre destinado à brincadeira e descanso.",
                    imagemPergunta: "img/parque.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Cultura e Lazer"
                },
                {
                    id: 213,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence?\n<span class='destaque-badge'>Bombeiros</span>",
                    dica: "Socorrem pessoas em perigo e apagam incêndios.",
                    imagemPergunta: "img/bombeiros.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Segurança"
                },
                {
                    id: 214,
                    tipo: "categoria",
                    pergunta: "Qual é a categoria das vacinas e \ndas consultas de rotina do médico de família?",
                    dica: "Atividades focadas no bem-estar físico e prevenção de doenças.",
                    imagemPergunta: "img/centro_saude.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Saúde"
                },
                {
                    id: 215,
                    tipo: "categoria",
                    pergunta: "A aprendizagem da leitura, da escrita e da matemática\n pertence a que categoria?",
                    dica: "Atividade desenvolvida na escola pelos professores.",
                    imagemPergunta: "img/escola.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Educação"
                },
                {
                    id: 216,
                    tipo: "categoria",
                    pergunta: "Qual é a categoria da proteção contra o crime\n e da regulação do trânsito?",
                    dica: "Atividades para manter as ruas tranquilas e sem perigos.",
                    imagemPergunta: "img/psp.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Segurança"
                },
                {
                    id: 217,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence uma \nexposição de escultura e pintura antiga?",
                    dica: "Atividade que enriquece os conhecimentos artísticos e culturais.",
                    imagemPergunta: "img/museu.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Cultura e Lazer"
                },
                {
                    id: 218,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence a assistência médica\n prestada pelo <span class='destaque-badge'>INEM</span>?",
                    dica: "Serviço de socorro médico de emergência.",
                    imagemPergunta: "img/hospital.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Saúde"
                },
                {
                    id: 219,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence um pavilhão municipal para desporto?",
                    dica: "Local para praticar atividade física e ocupação saudável do tempo.",
                    imagemPergunta: "img/piscina.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Cultura e Lazer"
                },
                {
                    id: 220,
                    tipo: "categoria",
                    pergunta: "A que categoria pertence a formação dos cidadãos para o futuro?",
                    dica: "Processo de ensino e aprendizagem escolar.",
                    imagemPergunta: "img/escola.jpg",
                    opcoes: ["Saúde", "Segurança", "Educação", "Cultura e Lazer"],
                    correta: "Educação"
                }
            ]
        },
        {
            id: 3,
            titulo: "Aqui Há Cidadania!",
            subtitulo: "Certo ou Errado em locais públicos",
            icone: "img/icone_cidadania.jpg",
            corClasse: "bg-roxo",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 301,
                    tipo: "cidadania",
                    pergunta: "Aguardar pacientemente a sua vez na fila dos correios sem passar à frente de ninguém.",
                    audio: "audios/cid_01.mp3",
                    dica: "Respeitar a ordem de chegada é um dever de boa convivência.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 302,
                    tipo: "cidadania",
                    pergunta: "Passar à frente de uma pessoa idosa na fila de espera do Centro de Saúde.",
                    audio: "audios/cid_02.mp3",
                    dica: "As pessoas idosas devem ter prioridade no atendimento.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 303,
                    tipo: "cidadania",
                    pergunta: "Falar em voz baixa e respeitar o silêncio na Biblioteca Municipal.",
                    audio: "audios/cid_03.mp3",
                    dica: "O silêncio permite que os outros consigam ler e concentrar-se.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 304,
                    tipo: "cidadania",
                    pergunta: "Correr e gritar nos corredores de um Hospital.",
                    audio: "audios/cid_04.mp3",
                    dica: "Os doentes precisam de tranquilidade e repouso para recuperar.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 305,
                    tipo: "cidadania",
                    pergunta: "Cuidar dos brinquedos e equipamentos do parque infantil sem os estragar.",
                    audio: "audios/cid_05.mp3",
                    dica: "Os brinquedos públicos são de todos e devem durar muito tempo.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 306,
                    tipo: "cidadania",
                    pergunta: "Deitar papéis e embalagens para o chão do parque em vez de usar o lixo.",
                    audio: "audios/cid_06.mp3",
                    dica: "O lixo deve ser colocado sempre no caixote ou no ecoponto.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 307,
                    tipo: "cidadania",
                    pergunta: "Atravessar a rua na passadeira e respeitar as indicações do agente da polícia.",
                    audio: "audios/cid_07.mp3",
                    dica: "Cumprir as regras de trânsito evita acidentes graves.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 308,
                    tipo: "cidadania",
                    pergunta: "Empurrar os colegas para entrar primeiro no autocarro ou na escola.",
                    audio: "audios/cid_08.mp3",
                    dica: "Empurrar pode magoar alguém e demonstra falta de respeito.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 309,
                    tipo: "cidadania",
                    pergunta: "Dar prioridade de lugar a grávidas, idosos ou pessoas com mobilidade reduzida.",
                    audio: "audios/cid_09.mp3",
                    dica: "Ajudar quem tem maior necessidade é uma atitude cidadã.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 310,
                    tipo: "cidadania",
                    pergunta: "Tocar nos quadros e esculturas do museu quando há um aviso a proibir.",
                    audio: "audios/cid_10.mp3",
                    dica: "Tocar nas obras de arte pode estragá-las para sempre.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 311,
                    tipo: "cidadania",
                    pergunta: "Desligar o telemóvel ou colocá-lo no silêncio durante uma peça no teatro.",
                    audio: "audios/cid_11.mp3",
                    dica: "Sons de telemóvel desconcentram os atores e perturbam a plateia.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 312,
                    tipo: "cidadania",
                    pergunta: "Deixar a torneira a correr nos balneários da piscina municipal sem necessidade.",
                    audio: "audios/cid_12.mp3",
                    dica: "A água é um bem precioso que não deve ser desperdiçado.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 313,
                    tipo: "cidadania",
                    pergunta: "Pedir ajuda com educação a um agente da PSP ou GNR se te sentires perdido.",
                    audio: "audios/cid_13.mp3",
                    dica: "Os agentes de autoridade estão lá para nos apoiar e proteger.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 314,
                    tipo: "cidadania",
                    pergunta: "Riscar ou rasgar as páginas dos livros requisitados na biblioteca.",
                    audio: "audios/cid_14.mp3",
                    dica: "Os livros da biblioteca vão ser lidos por muitas outras crianças.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 315,
                    tipo: "cidadania",
                    pergunta: "Respeitar as indicações de segurança dos bombeiros em situações de emergência.",
                    audio: "audios/cid_15.mp3",
                    dica: "Seguir as orientações dos bombeiros garante a nossa segurança.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 316,
                    tipo: "cidadania",
                    pergunta: "Fazer barulho excessivo na sala de espera das consultas de saúde.",
                    audio: "audios/cid_16.mp3",
                    dica: "As pessoas que estão à espera de consulta podem estar maldispostas.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 317,
                    tipo: "cidadania",
                    pergunta: "Separar as embalagens nos ecopontos para manter a cidade limpa.",
                    audio: "audios/cid_17.mp3",
                    dica: "Reciclar ajuda a proteger o meio ambiente do nosso município.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 318,
                    tipo: "cidadania",
                    pergunta: "Arrancar plantas e estragar os canteiros dos jardins públicos.",
                    audio: "audios/cid_18.mp3",
                    dica: "As plantas enfeitam a cidade e devem ser preservadas.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 319,
                    tipo: "cidadania",
                    pergunta: "Cumprimentar com bom dia ou boa tarde os funcionários dos serviços públicos.",
                    audio: "audios/cid_19.mp3",
                    dica: "A simpatia e a educação tornam a convivência na comunidade melhor.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 320,
                    tipo: "cidadania",
                    pergunta: "Escribilhar ou desenhar nas paredes dos edifícios e serviços da comunidade.",
                    audio: "audios/cid_20.mp3",
                    dica: "Devemos manter os edifícios públicos limpos e bem cuidados.",
                    imagemPergunta: "img/cidadania.jpg",
					opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                }
            ]
        },
        {
            id: 4,
            titulo: "Desafio Geral",
            subtitulo: "Todas as categorias misturadas",
            icone: "img/icone_desafio.jpg",
            corClasse: "bg-laranja",
            numQuestoes: 15,
            misturarModos: true,
            perguntas: []
        }
    ]
};