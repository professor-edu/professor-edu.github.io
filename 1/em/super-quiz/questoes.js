const CONFIG_JOGO = {
    id: "estudo-meio-1ano-global",
    titulo: "Estudo do Meio 1º Ano",
    subtituloMenu: "Super Quiz!",
    tema: {
        corPrimaria: "#51cf66",
        corSecundaria: "#27ae60"
    },
    cooldownDica: 3,
    niveis: [
        {
            id: "quiz-global",
            titulo: "Desafio Global",
            subtitulo: "50 Perguntas sobre todo o ano letivo",
            icone: "img/mascote_normal.png",
            corClasse: "bg-turquesa",
            numQuestoes: 10,
            perguntas: [
                /* =========================================================
                   EIXO 1: IDENTIDADE, FAMÍLIA E CRESCIMENTO (10 Perguntas)
                   ========================================================= */
                {
                    id: 101,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Etapas da Vida</span>",
                    audio: "audios/e1_01.mp3", // Áudio: "Quem é a pessoa mais velha da família, com muita sabedoria e cabelo branquinho?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/idoso.png", alt: "Idoso", valor: "Idoso" },
                        { img: "img/bebe.png", alt: "Bebé", valor: "Bebé" },
                        { img: "img/crianca.png", alt: "Criança", valor: "Criança" }
                    ],
                    correta: "Idoso"
                },
                {
                    id: 102,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> guardar os brinquedos no quarto depois de brincar?",
                    audio: "audios/e1_02.mp3",
                    dica: "Manter a casa arrumada ajuda toda a família.",
                    imagemPergunta: "img/arrumar_quarto.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 103,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Relações de Parentesco</span>",
                    audio: "audios/e1_03.mp3", // Áudio: "Como chamamos aos pais dos nossos pais?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/avos.png", alt: "Avós", valor: "Avós" },
                        { img: "img/irmaos.png", alt: "Irmãos", valor: "Irmãos" },
                        { img: "img/primas.png", alt: "Primas", valor: "Primas" }
                    ],
                    correta: "Avós"
                },
                {
                    id: 104,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> responder mal aos pais e avós quando estamos chateados?",
                    audio: "audios/e1_04.mp3",
                    dica: "Devemos falar sempre com respeito e carinho com a nossa família.",
                    imagemPergunta: "img/respeito_familia.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 105,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>História Pessoal</span>",
                    audio: "audios/e1_05.mp3", // Áudio: "Onde guardamos as fotografias com as recordações da nossa vida?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/album_fotos.png", alt: "Álbum de Fotos", valor: "Álbum de Fotos" },
                        { img: "img/mochila.png", alt: "Mochila", valor: "Mochila" },
                        { img: "img/estojo.png", alt: "Estojo", valor: "Estojo" }
                    ],
                    correta: "Álbum de Fotos"
                },
                {
                    id: 106,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> ajudar nas tarefas simples de casa, como ajudar a lavar a loiça?",
                    audio: "audios/e1_06.mp3",
                    dica: "A colaboração torna a vida em família mais feliz.",
                    imagemPergunta: "img/ajudar_casa.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 107,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Localização no espaço</span>",
                    audio: "audios/e1_07.mp3", // Áudio: "Qual é a divisão da casa onde dormes e descansas à noite?"
                    dica: "Divisão da casa destinada a dormir e descansar.",
                    opcoesImagem: [
                        { img: "img/quarto.png", alt: "Quarto", valor: "Quarto" },
                        { img: "img/cozinha.png", alt: "Cozinha", valor: "Cozinha" },
                        { img: "img/garagem.png", alt: "Garagem", valor: "Garagem" }
                    ],
                    correta: "Quarto"
                },
                {
                    id: 108,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> celebrar o aniversário partilhando o bolo com os amigos e família?",
                    audio: "audios/e1_08.mp3",
                    dica: "Partilhar momentos felizes fortalece a amizade.",
                    imagemPergunta: "img/aniversario.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 109,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Crescimento</span>",
                    audio: "audios/e1_09.mp3", // Áudio: "Nesta etapa da vida ainda não sabemos andar e precisamos de colo. Quem é?"
                    dica: "Fase em que ainda não sabemos andar e precisamos de colo.",
                    opcoesImagem: [
                        { img: "img/bebe.png", alt: "Bebé", valor: "Bebé" },
                        { img: "img/adulto.png", alt: "Adulto", valor: "Adulto" },
                        { img: "img/idoso.png", alt: "Idoso", valor: "Idoso" }
                    ],
                    correta: "Bebé"
                },
                {
                    id: 110,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> deixar as roupas espalhadas pelo chão do quarto?",
                    audio: "audios/e1_10.mp3",
                    dica: "Cada coisa deve ter o seu lugar arrumado.",
                    imagemPergunta: "img/roupa_chao.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },

                /* =========================================================
                   EIXO 2: SAÚDE, HIGIENE E SEGURANÇA (10 Perguntas)
                   ========================================================= */
                {
                    id: 201,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Órgãos dos Sentidos</span>",
                    audio: "audios/e2_01.mp3", // Áudio: "Qual é o órgão do corpo que usamos para cheirar as flores e os alimentos?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/nariz.png", alt: "Nariz", valor: "Nariz" },
                        { img: "img/olho.png", alt: "Olho", valor: "Olho" },
                        { img: "img/orelha.png", alt: "Orelha", valor: "Orelha" }
                    ],
                    correta: "Nariz"
                },
                {
                    id: 202,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> lavar muito bem as mãos com sabão antes de comer?",
                    audio: "audios/e2_02.mp3",
                    dica: "Lavar as mãos elimina os germes e evita doenças.",
                    imagemPergunta: "img/lavar_maos.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 203,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Alimentação Saudável</span>",
                    audio: "audios/e2_03.mp3", // Áudio: "Qual destes alimentos é muito saudável e ótimo para comer ao lanche?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/maca.png", alt: "Maçã", valor: "Maçã" },
                        { img: "img/refrigerante.png", alt: "Refrigerante", valor: "Refrigerante" },
                        { img: "img/batatas_fritas.png", alt: "Batatas Fritas", valor: "Batatas Fritas" }
                    ],
                    correta: "Maçã"
                },
                {
                    id: 204,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> escovar os dentes após as refeições e antes de dormir?",
                    audio: "audios/e2_04.mp3",
                    dica: "Escovar os dentes evita o aparecimento de cáries.",
                    imagemPergunta: "img/escovar_dentes.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 205,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Vestuário e Clima</span>",
                    audio: "audios/e2_05.mp3", // Áudio: "Está um dia muito frio de Inverno! O que deves vestir para sair de casa?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/casaco_inverno.png", alt: "Casaco Quente", valor: "Casaco Quente" },
                        { img: "img/fato_banho.png", alt: "Fato de Banho", valor: "Fato de Banho" },
                        { img: "img/tshirt.png", alt: "T-shirt", valor: "T-shirt" }
                    ],
                    correta: "Casaco Quente"
                },
                {
                    id: 206,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> mexer nas tomadas elétricas ou puxar fios de luz?",
                    audio: "audios/e2_06.mp3",
                    dica: "A eletricidade é perigosa e pode provocar choques elétricos graves.",
                    imagemPergunta: "img/tomada_perigo.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 207,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Prevenção e Saúde</span>",
                    audio: "audios/e2_07.mp3", // Áudio: "Quando ficamos doentes, onde vamos comprar os medicamentos e o xarope?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/farmacia.png", alt: "Farmácia", valor: "Farmácia" },
                        { img: "img/padaria.png", alt: "Padaria", valor: "Padaria" },
                        { img: "img/biblioteca.png", alt: "Biblioteca", valor: "Biblioteca" }
                    ],
                    correta: "Farmácia"
                },
                {
                    id: 208,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> atravessar a estrada na passadeira e olhar para os dois lados?",
                    audio: "audios/e2_08.mp3",
                    dica: "Garantir que os carros pararam previne acidentes.",
                    imagemPergunta: "img/passada_peoes.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 209,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Proteção Solar</span>",
                    audio: "audios/e2_09.mp3", // Áudio: "O que deves pôr na cabeça para te protegeres do sol forte no Verão?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/chapeu.png", alt: "Boné", valor: "Boné" },
                        { img: "img/gorro.png", alt: "Gorro de Lã", valor: "Gorro de Lã" },
                        { img: "img/guarda_chuva.png", alt: "Guarda-chuva", valor: "Guarda-chuva" }
                    ],
                    correta: "Boné"
                },
                {
                    id: 210,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> correr com tesouras ou objetos cortantes na mão?",
                    audio: "audios/e2_10.mp3",
                    dica: { tipo: "highlight" },
                    imagemPergunta: "img/tesoura_perigo.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },

                /* =========================================================
                   EIXO 3: CIÊNCIA DOS MATERIAIS E NATUREZA (10 Perguntas)
                   ========================================================= */
                {
                    id: 301,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Materiais</span>",
                    audio: "audios/e3_01.mp3", // Áudio: "Qual destes objetos é feito de cortiça leve e flutua na água?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/rolha.png", alt: "Rolha de Cortiça", valor: "Rolha de Cortiça" },
                        { img: "img/pedra.png", alt: "Pedra de Ferro", valor: "Pedra de Ferro" },
                        { img: "img/chave.png", alt: "Chave de Metal", valor: "Chave de Metal" }
                    ],
                    correta: "Rolha de Cortiça"
                },
                {
                    id: 302,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> fechar a torneira enquanto se lavam os dentes?",
                    audio: "audios/e3_02.mp3",
                    dica: "Poupar água protege o nosso planeta.",
                    imagemPergunta: "img/fechar_torneira.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 303,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Reciclagem</span>",
                    audio: "audios/e3_03.mp3", // Áudio: "Em qual destes ecopontos devemos colocar as garrafas e pacotes de plástico?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/ecoponto_amarelo.png", alt: "Ecoponto Amarelo", valor: "Ecoponto Amarelo" },
                        { img: "img/ecoponto_azul.png", alt: "Ecoponto Azul", valor: "Ecoponto Azul" },
                        { img: "img/ecoponto_verde.png", alt: "Ecoponto Verde", valor: "Ecoponto Verde" }
                    ],
                    correta: "Ecoponto Amarelo"
                },
                {
                    id: 304,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> arrancar plantas e flores nos jardins públicos?",
                    audio: "audios/e3_04.mp3",
                    dica: "Devemos cuidar da natureza e deixar as plantas crescerem.",
                    imagemPergunta: "img/arrancar_flores.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 305,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Seres Vivos</span>",
                    audio: "audios/e3_05.mp3", // Áudio: "De que precisam as plantas e os animais para beber e continuar vivos?"
                    dica: "Elemento indispensável para as plantas e animais viverem.",
                    opcoesImagem: [
                        { img: "img/agua_gota.png", alt: "Água", valor: "Água" },
                        { img: "img/pedra.png", alt: "Pedra", valor: "Pedra" },
                        { img: "img/plastico.png", alt: "Plástico", valor: "Plástico" }
                    ],
                    correta: "Água"
                },
                {
                    id: 306,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> dar água fresca e comida aos animais de estimação?",
                    audio: "audios/e3_06.mp3",
                    dica: "Os animais precisam de cuidados diários para crescerem saudáveis.",
                    imagemPergunta: "img/cuidar_cao.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 307,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Estações do Ano</span>",
                    audio: "audios/e3_07.mp3", // Áudio: "Em que estação do ano os jardins ficam cheios de flores coloridas?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/primavera.png", alt: "Primavera", valor: "Primavera" },
                        { img: "img/inverno.png", alt: "Inverno", valor: "Inverno" },
                        { img: "img/outono.png", alt: "Outono", valor: "Outono" }
                    ],
                    correta: "Primavera"
                },
                {
                    id: 308,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> apagar a luz ao sair do quarto para poupar energia?",
                    audio: "audios/e3_08.mp3",
                    dica: "Evitar o desperdício de energia elétrica ajuda o ambiente.",
                    imagemPergunta: "img/apagar_luz.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 309,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Textura dos Materiais</span>",
                    audio: "audios/e3_09.mp3", // Áudio: "Qual destes materiais é muito macio e fofinho ao toque e serve para fazer roupas fresquinhas?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/algodao.png", alt: "Algodão", valor: "Algodão" },
                        { img: "img/vidro.png", alt: "Vidro", valor: "Vidro" },
                        { img: "img/metal.png", alt: "Metal", valor: "Metal" }
                    ],
                    correta: "Algodão"
                },
                {
                    id: 310,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> deitar embalagens de plástico no ecoponto azul?",
                    audio: "audios/e3_10.mp3",
                    dica: "O ecoponto azul destina-se apenas a papel e cartão.",
                    imagemPergunta: "img/ecoponto_erro.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },

                /* =========================================================
                   EIXO 4: SOCIEDADE, CIDADANIA E PROFISSÕES (10 Perguntas)
                   ========================================================= */
                {
                    id: 401,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Profissões e Serviços</span>",
                    audio: "audios/e4_01.mp3", // Áudio: "Quem é o profissional responsável por apagar os fogos e prestar socorro a quem precisa?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/bombeiro.png", alt: "Bombeiro", valor: "Bombeiro" },
                        { img: "img/padeiro.png", alt: "Padeiro", valor: "Padeiro" },
                        { img: "img/jardineiro.png", alt: "Jardineiro", valor: "Jardineiro" }
                    ],
                    correta: "Bombeiro"
                },
                {
                    id: 402,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> aguardar pacientemente a sua vez na fila sem passar à frente?",
                    audio: "audios/e4_02.mp3",
                    dica: "Respeitar a ordem de chegada é um dever de boa convivência.",
                    imagemPergunta: "img/esperar_fila.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 403,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Segurança Pública</span>",
                    audio: "audios/e4_03.mp3", // Áudio: "Quem ajuda a manter a ordem nas ruas e a proteger a segurança das pessoas?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/policia.png", alt: "Polícia", valor: "Polícia" },
                        { img: "img/cozinheiro.png", alt: "Cozinheiro", valor: "Cozinheiro" },
                        { img: "img/pintor.png", alt: "Pintor", valor: "Pintor" }
                    ],
                    correta: "Polícia"
                },
                {
                    id: 404,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> dizer 'Por favor' e 'Obrigado' ao pedir ajuda?",
                    audio: "audios/e4_04.mp3",
                    dica: "As palavras simpáticas demonstram boa educação.",
                    imagemPergunta: "img/palavras_magicas.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 405,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Espaços Escolares</span>",
                    audio: "audios/e4_05.mp3", // Áudio: "Quem nos ensina a ler, a escrever e a aprender coisas novas na escola?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/professora.png", alt: "Professora", valor: "Professora" },
                        { img: "img/mecanico.png", alt: "Mecânico", valor: "Mecânico" },
                        { img: "img/carpinteiro.png", alt: "Carpinteiro", valor: "Carpinteiro" }
                    ],
                    correta: "Professora"
                },
                {
                    id: 406,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> fazer barulho e correr dentro da biblioteca?",
                    audio: "audios/e4_06.mp3",
                    dica: "A biblioteca exige silêncio para que todos consigam ler.",
                    imagemPergunta: "img/silencio_biblioteca.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 407,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Tecnologia no Quotidiano</span>",
                    audio: "audios/e4_07.mp3", // Áudio: "Qual é o objeto escolar de pontas redondas que usas para recortar papel?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/tesoura_escolar.png", alt: "Tesoura", valor: "Tesoura" },
                        { img: "img/martelo.png", alt: "Martelo", valor: "Martelo" },
                        { img: "img/serrote.png", alt: "Serrote", valor: "Serrote" }
                    ],
                    correta: "Tesoura"
                },
                {
                    id: 408,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> ajudar a levantar um amigo que caiu no recreio?",
                    audio: "audios/e4_08.mp3",
                    dica: "Ajudar quem precisa é uma atitude de grande amizade.",
                    imagemPergunta: "img/ajudar_colega.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 409,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Serviços de Saúde</span>",
                    audio: "audios/e4_09.mp3", // Áudio: "Quem nos examina e cuida da nossa saúde quando vamos ao hospital?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/medico.png", alt: "Médico", valor: "Médico" },
                        { img: "img/carteiro.png", alt: "Carteiro", valor: "Carteiro" },
                        { img: "img/piloto.png", alt: "Piloto", valor: "Piloto" }
                    ],
                    correta: "Médico"
                },
                {
                    id: 410,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> riscar as carteiras e paredes da sala de aula?",
                    audio: "audios/e4_10.mp3",
                    dica: "Devemos estimar o material da escola que pertence a todos.",
                    imagemPergunta: "img/riscar_carteira.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },

                /* =========================================================
                   EIXO 5: ESPAÇO, PAISAGEM E SÍMBOLOS (10 Perguntas)
                   ========================================================= */
                {
                    id: 501,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Símbolos Nacionais</span>",
                    audio: "audios/e5_01.mp3", // Áudio: "Qual é a bandeira oficial do nosso país, Portugal?"
                    dica: "Símbolo de Portugal com as cores verde e vermelha.",
                    opcoesImagem: [
                        { img: "img/bandeira_pt.png", alt: "Bandeira de Portugal", valor: "Bandeira de Portugal" },
                        { img: "img/bandeira_es.png", alt: "Bandeira de Espanha", valor: "Bandeira de Espanha" },
                        { img: "img/bandeira_fr.png", alt: "Bandeira de França", valor: "Bandeira de França" }
                    ],
                    correta: "Bandeira de Portugal"
                },
                {
                    id: 502,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> escutar o Hino Nacional em silêncio e com respeito?",
                    audio: "audios/e5_02.mp3",
                    dica: "O Hino é um símbolo do nosso país e merece respeito.",
                    imagemPergunta: "img/hino_nacional.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 503,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Elementos da Paisagem</span>",
                    audio: "audios/e5_03.mp3", // Áudio: "Qual destes elementos é natural e foi criado pela natureza?"
                    dica: "Elemento natural criado pela natureza numa paisagem.",
                    opcoesImagem: [
                        { img: "img/rio.png", alt: "Rio", valor: "Rio" },
                        { img: "img/predio.png", alt: "Prédio", valor: "Prédio" },
                        { img: "img/estrada.png", alt: "Estrada", valor: "Estrada" }
                    ],
                    correta: "Rio"
                },
                {
                    id: 504,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> deitar lixo na areia quando vamos à praia?",
                    audio: "audios/e5_04.mp3",
                    dica: "O lixo na praia polui o mar e magoa os animais marinhos.",
                    imagemPergunta: "img/lixo_praia.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 505,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Elementos Construídos</span>",
                    audio: "audios/e5_05.mp3", // Áudio: "Qual é a construção que nos permite atravessar um rio com segurança?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/ponte.png", alt: "Ponte", valor: "Ponte" },
                        { img: "img/floresta.png", alt: "Floresta", valor: "Floresta" },
                        { img: "img/montanha.png", alt: "Montanha", valor: "Montanha" }
                    ],
                    correta: "Ponte"
                },
                {
                    id: 506,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> andar sempre no passeio e de mão dada com um adulto na rua?",
                    audio: "audios/e5_06.mp3",
                    dica: "O passeio protege-nos dos carros que passam na estrada.",
                    imagemPergunta: "img/andar_passeio.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 507,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Mapas e Orientação</span>",
                    audio: "audios/e5_07.mp3", // Áudio: "Que instrumento nos ajuda a encontrar o caminho certo para um lugar?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/mapa.png", alt: "Mapa", valor: "Mapa" },
                        { img: "img/relogio.png", alt: "Relógio", valor: "Relógio" },
                        { img: "img/livro.png", alt: "Livro", valor: "Livro" }
                    ],
                    correta: "Mapa"
                },
				{
                    id: 508,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> estragar os baloiços e equipamentos do parque infantil?",
                    audio: "audios/e5_08.mp3",
                    dica: "Os equipamentos do parque pertencem a todas as crianças.",
                    imagemPergunta: "img/parque_estragado.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 509,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>A Importância do Sol</span>",
                    audio: "audios/e5_09.mp3", // Áudio: "Qual é o grande astro luminoso que nos dá luz e calor durante o dia?"
                    dica: { tipo: "highlight" },
                    opcoesImagem: [
                        { img: "img/sol.png", alt: "Sol", valor: "Sol" },
                        { img: "img/lua.png", alt: "Lua", valor: "Lua" },
                        { img: "img/estrela.png", alt: "Estrela", valor: "Estrela" }
                    ],
                    correta: "Sol"
                },
                {
                    id: 510,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> apanhar uma garrafa de plástico do chão do jardim e colocá-la no caixote?",
                    audio: "audios/e5_10.mp3",
                    dica: "Manter os espaços públicos limpos é um dever de todos.",
                    imagemPergunta: "img/apanhar_lixo.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                }
            ]
        }
    ]
};