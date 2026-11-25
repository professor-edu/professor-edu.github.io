// =========================================================================
// COORDENADAS PARTILHADAS DAS PLANTAS (Ajustar 1 vez após gerar as imagens)
// x, y -> versão 16:9 (PC/Tablet) | xMobile, yMobile -> versão 4:3 (Telemóvel)
// =========================================================================

const PONTOS_BAIRRO = [
    { id: "casa", label: "Casa", x: 24, y: 74, xMobile: 25, yMobile: 74, mostrarLabel: true },
    { id: "bombeiros", label: "Bombeiros", x: 18, y: 30, xMobile: 20, yMobile: 30, mostrarLabel: true },
    { id: "escola", label: "Escola", x: 40, y: 22, xMobile: 40, yMobile: 22, mostrarLabel: true },
    { id: "jardim", label: "Jardim", x: 50, y: 48, xMobile: 50, yMobile: 48, mostrarLabel: true },
    { id: "padaria", label: "Padaria", x: 75, y: 25, xMobile: 74, yMobile: 25, mostrarLabel: true },
    { id: "parque", label: "Parque", x: 78, y: 70, xMobile: 76, yMobile: 70, mostrarLabel: true },
    { id: "supermercado", label: "Supermercado", x: 52, y: 78, xMobile: 52, yMobile: 78, mostrarLabel: true }
];

const PONTOS_CIDADE = [
    { id: "hotel", label: "Hotel", x: 38, y: 24, xMobile: 34, yMobile: 34, mostrarLabel: true },
    { id: "hospital", label: "Hospital", x: 22, y: 54, xMobile: 24, yMobile: 54, mostrarLabel: true },
    { id: "restaurante", label: "Restaurante", x: 26, y: 80, xMobile: 28, yMobile: 80, mostrarLabel: true },
    { id: "farmacia", label: "Farmácia", x: 50, y: 46, xMobile: 50, yMobile: 46, mostrarLabel: true },
    { id: "estacao", label: "Estação", x: 76, y: 26, xMobile: 74, yMobile: 26, mostrarLabel: true },
    { id: "jardim", label: "Jardim", x: 76, y: 74, xMobile: 74, yMobile: 74, mostrarLabel: true }
];

const PONTOS_ESCOLA = [
    { id: "portao", label: "Portão", x: 20, y: 76, xMobile: 22, yMobile: 76, mostrarLabel: true },
    { id: "sala", label: "Sala de Aula", x: 22, y: 28, xMobile: 24, yMobile: 28, mostrarLabel: true },
    { id: "biblioteca", label: "Biblioteca", x: 50, y: 22, xMobile: 50, yMobile: 22, mostrarLabel: true },
    { id: "cantina", label: "Cantina", x: 78, y: 28, xMobile: 76, yMobile: 28, mostrarLabel: true },
    { id: "recreio", label: "Recreio", x: 50, y: 74, xMobile: 50, yMobile: 74, mostrarLabel: true },
    { id: "ginasio", label: "Ginásio", x: 78, y: 74, xMobile: 76, yMobile: 74, mostrarLabel: true }
];

const CONFIG_JOGO = {
    titulo: "Mapas e Itinerários",
    subtitulo: "Aprende a orientar-te e a traçar caminhos!",
    niveis: [
        // =====================================================================
        // NÍVEL 1: O MEU BAIRRO E OS LUGARES DO QUOTIDIANO (20 perguntas)
        // =====================================================================
        {
            id: 1,
            titulo: "O Meu Bairro",
            subtitulo: "Conhece os espaços da tua localidade",
            icone: "img/icon_nivel1.svg",
			corClasse: "bg-turquesa",
            cor: "#0091ff",
            perguntas: [
                {
                    tipo: "opcoes-texto",
                    pergunta: "Observa a planta do bairro.\nOnde vamos comprar pão fresco de manhã?",
                    audio: "audios/n1_q01.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["Padaria", "Bombeiros", "Parque infantil", "Escola"],
                    correta: "Padaria",
                    dica: { tipo: "50-50", texto: "Procura o edifício com um croissant no telhado!" }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Para onde vamos estudar, ler e aprender com a professora e os colegas?",
                    audio: "audios/n1_q02.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["Escola", "Supermercado", "Bombeiros", "Padaria"],
                    correta: "Escola",
                    dica: { tipo: "highlight", texto: "É o edifício amarelo com um relógio." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Se houver um incêndio ou alguém precisar de socorro urgente, quem chamamos para ajudar?",
                    audio: "audios/n1_q03.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["Bombeiros", "Padaria", "Supermercado", "Parque infantil"],
                    correta: "Bombeiros",
                    dica: { tipo: "50-50", texto: "Tem um camião vermelho estacionado à porta!" }
                },
                {
                    tipo: "cidadania",
                    pergunta: "A <span class='destaque-amarelo'>planta</span> é um desenho visto de cima que mostra onde ficam os lugares de um espaço.",
                    audio: "audios/n1_q04.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["Verdade", "Mentira"],
                    correta: "Verdade",
                    dica: { tipo: "texto", texto: "Imagina que és um pombo a voar lá no alto e a olhar para baixo!" }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Onde podemos andar de baloiço, escorrega e brincar ao ar livre no bairro?",
                    audio: "audios/n1_q05.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["Parque infantil", "Hospital", "Estação", "Farmácia"],
                    correta: "Parque infantil",
                    dica: { tipo: "highlight", texto: "Fica no canto inferior direito do bairro." }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Para comprar fruta, leite e legumes para casa vamos ao ________.",
                    audio: "audios/n1_q06.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["supermercado", "quartel", "baloiço", "estádio"],
                    correta: "supermercado",
                    dica: { tipo: "50-50", texto: "Tem um carrinho de compras no telhado." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Observa a planta da cidade.\nOnde vamos quando estamos doentes e precisamos de um médico?",
                    audio: "audios/n1_q07.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    opcoes: ["Hospital", "Hotel", "Restaurante", "Estação"],
                    correta: "Hospital",
                    dica: { tipo: "highlight", texto: "Tem uma cruz vermelha na fachada." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Onde compramos os medicamentos que o médico receitou?",
                    audio: "audios/n1_q08.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    opcoes: ["Farmácia", "Padaria", "Parque", "Estação"],
                    correta: "Farmácia",
                    dica: { tipo: "50-50", texto: "Tem uma cruz verde luminosa à entrada." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Na planta do bairro do Afonso existe uma escola e um parque infantil.",
                    audio: "audios/n1_q09.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["Sim", "Não"],
                    correta: "Sim",
                    dica: { tipo: "texto", texto: "Observa bem a parte de cima e o canto direito da planta." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Onde apanhamos o comboio para fazer uma viagem para outra cidade?",
                    audio: "audios/n1_q10.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    opcoes: ["Estação de comboios", "Farmácia", "Supermercado", "Bombeiros"],
                    correta: "Estação de comboios",
                    dica: { tipo: "highlight", texto: "Procura os carris no canto superior direito." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Observa a planta da escola.\nOnde almoçamos e lanchamos na hora da refeição?",
                    audio: "audios/n1_q11.mp3",
                    imagemPergunta: "img/planta_escola_16x9.jpg",
                    opcoes: ["Cantina", "Biblioteca", "Ginásio", "Portão"],
                    correta: "Cantina",
                    dica: { tipo: "50-50", texto: "É o edifício com uma maçã no telhado." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Onde podemos requisitar livros e ouvir histórias em silêncio na escola?",
                    audio: "audios/n1_q12.mp3",
                    imagemPergunta: "img/planta_escola_16x9.jpg",
                    opcoes: ["Biblioteca", "Recreio", "Ginásio", "Cantina"],
                    correta: "Biblioteca",
                    dica: { tipo: "highlight", texto: "Tem um livro aberto desenhado no telhado." }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Na escola, brincamos com os colegas durante o intervalo no ________.",
                    audio: "audios/n1_q13.mp3",
                    imagemPergunta: "img/planta_escola_16x9.jpg",
                    opcoes: ["recreio", "telhado", "autocarro", "armário"],
                    correta: "recreio",
                    dica: { tipo: "50-50", texto: "Fica ao ar livre, com baloiços e jogo da macaca." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Todas as ruas e localidades são exatamente iguais e têm os mesmos edifícios.",
                    audio: "audios/n1_q14.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    opcoes: ["Verdade", "Mentira"],
                    correta: "Mentira",
                    dica: { tipo: "texto", texto: "Cada aldeia, vila ou cidade tem lugares diferentes." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Onde dormem os turistas e viajantes quando visitam uma cidade?",
                    audio: "audios/n1_q15.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    opcoes: ["Hotel", "Hospital", "Escola", "Supermercado"],
                    correta: "Hotel",
                    dica: { tipo: "50-50", texto: "É um edifício alto com o símbolo de uma cama." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Na planta da escola, onde fazemos aulas de Educação Física quando está a chover?",
                    audio: "audios/n1_q16.mp3",
                    imagemPergunta: "img/planta_escola_16x9.jpg",
                    opcoes: ["Ginásio", "Biblioteca", "Cantina", "Portão"],
                    correta: "Ginásio",
                    dica: { tipo: "highlight", texto: "Tem o símbolo de um cesto de basquetebol." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Na planta da cidade existe um jardim com uma fonte para passear.",
                    audio: "audios/n1_q17.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    opcoes: ["Sim", "Não"],
                    correta: "Sim",
                    dica: { tipo: "texto", texto: "Olha para o canto inferior direito da planta da cidade." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "O que serve para ajudar os peões a atravessar a rua em segurança?",
                    audio: "audios/n1_q18.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["As passadeiras", "Os telhados", "As árvores", "As fontes"],
                    correta: "As passadeiras",
                    dica: { tipo: "50-50", texto: "São as riscas brancas pintadas no chão das estradas." }
                },
                {
                    tipo: "lacuna",
                    pergunta: "O desenho simplificado de um bairro ou cidade visto de cima chama-se ________.",
                    audio: "audios/n1_q19.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["planta", "retrato", "bilhete", "canção"],
                    correta: "planta",
                    dica: { tipo: "highlight", texto: "Começa por 'p' e ajuda-nos a localizar edifícios." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Toca na <span class='destaque-fundo'>Casa do Afonso</span> e depois na <span class='destaque-fundo'>Escola</span>.",
                    audio: "audios/n1_q20.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    pontos: PONTOS_BAIRRO,
                    correta: "casa | escola",
                    dica: { tipo: "highlight", texto: "Começa na casa de telhado vermelho!" }
                }
            ]
        },

        // =====================================================================
        // NÍVEL 2: SINAIS DE INFORMAÇÃO (20 perguntas)
        // =====================================================================
        {
            id: 2,
            titulo: "Sinais de Informação",
            subtitulo: "Descobre o que indica cada sinal azul",
            icone: "img/icon_nivel2.svg",
			corClasse: "bg-laranja",
            cor: "#20c997",
            perguntas: [
                {
                    tipo: "opcoes-texto",
                    pergunta: "Que local indica este sinal azul com a letra H?",
                    audio: "audios/n2_q01.mp3",
                    imagemPergunta: "img/sinal_hospital.svg",
                    opcoes: ["Hospital", "Hotel", "Escola", "Estação"],
                    correta: "Hospital",
                    dica: { tipo: "50-50", texto: "É onde vamos quando precisamos de cuidados médicos." }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destes sinais indica onde fica uma <span class='destaque-badge'>Farmácia</span>?",
                    audio: "audios/n2_q02.mp3",
                    categoriaDistratores: "sinais",
					mostrarLegenda: false,
                    correta: "Farmácia",
                    dica: { tipo: "highlight", texto: "Tem uma cruz verde sobre um quadrado branco." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Observa o sinal.\nQue transporte podemos apanhar neste local?",
                    audio: "audios/n2_q03.mp3",
                    imagemPergunta: "img/sinal_comboios.svg",
                    opcoes: ["Comboio", "Avião", "Barco", "Bicicleta"],
                    correta: "Comboio",
                    dica: { tipo: "50-50", texto: "O desenho mostra um veículo a sair de um túnel sobre carris." }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Toca no sinal que indica uma <span class='destaque-amarelo'>Estação de Autocarros</span>.",
                    audio: "audios/n2_q04.mp3",
                    categoriaDistratores: "sinais",
					mostrarLegenda: false,
                    correta: "Estação de autocarros",
                    dica: { tipo: "highlight", texto: "Procura o veículo grande com rodas e várias janelas." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "O que significa este sinal com um garfo e uma faca cruzados?",
                    audio: "audios/n2_q05.mp3",
                    imagemPergunta: "img/sinal_restaurante.svg",
                    opcoes: ["Restaurante", "Oficina", "Biblioteca", "Parque"],
                    correta: "Restaurante",
                    dica: { tipo: "50-50", texto: "É o lugar onde vamos almoçar ou jantar fora." }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destes sinais indica um <span class='destaque-amarelo'>Café</span>?",
                    audio: "audios/n2_q06.mp3",
                    categoriaDistratores: "sinais",
					mostrarLegenda: false,
                    correta: "Café",
                    dica: { tipo: "highlight", texto: "Tem o desenho de uma chávena sobre um pires." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Para onde nos orienta este sinal com o desenho de uma cama?",
                    audio: "audios/n2_q07.mp3",
                    imagemPergunta: "img/sinal_hotel.svg",
                    opcoes: ["Hotel", "Hospital", "Escola", "Supermercado"],
                    correta: "Hotel",
                    dica: { tipo: "50-50", texto: "Serve para dormir e descansar durante uma viagem." }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "O carro ficou sem combustível! Qual é o sinal da <span class='destaque-fundo'>Bomba de Gasolina</span>?",
                    audio: "audios/n2_q08.mp3",
                    categoriaDistratores: "sinais",
					mostrarLegenda: false,
                    correta: "Bomba de gasolina",
                    dica: { tipo: "highlight", texto: "Procura o desenho de uma bomba com mangueira." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Que local indica este sinal com o desenho de um avião?",
                    audio: "audios/n2_q09.mp3",
                    imagemPergunta: "img/sinal_aeroporto.svg",
                    opcoes: ["Aeroporto", "Estação de comboios", "Parque infantil", "Padaria"],
                    correta: "Aeroporto",
                    dica: { tipo: "50-50", texto: "É de onde descolam e aterram os aviões." }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destes sinais indica onde podemos estacionar o carro?",
                    audio: "audios/n2_q10.mp3",
                    categoriaDistratores: "sinais",
					mostrarLegenda: false,
                    correta: "Estacionamento",
                    dica: { tipo: "highlight", texto: "Tem a letra P branca sobre fundo azul." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "O carro avariou!\nQue local indica este sinal com uma chave de ferramentas?",
                    audio: "audios/n2_q11.mp3",
                    imagemPergunta: "img/sinal_oficina.svg",
                    opcoes: ["Oficina", "Restaurante", "Farmácia", "Hotel"],
                    correta: "Oficina",
                    dica: { tipo: "50-50", texto: "É onde os mecânicos reparam os automóveis." }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Estamos perdidos numa cidade!\nQual é o sinal do <span class='destaque-fundo'>Posto de Informações</span>?",
                    audio: "audios/n2_q12.mp3",
                    categoriaDistratores: "sinais",
					mostrarLegenda: false,
                    correta: "Posto de informações",
                    dica: { tipo: "highlight", texto: "Tem a letra 'i' no centro da placa." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Os sinais azuis quadrados ou retangulares servem para dar informações úteis sobre locais e serviços.",
                    audio: "audios/n2_q13.mp3",
                    imagemPergunta: "img/sinal_informacoes.svg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo",
                    dica: { tipo: "texto", texto: "Por isso se chamam sinais de informação!" }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Este sinal indica que estamos perto de uma pastelaria ou padaria.",
                    audio: "audios/n2_q14.mp3",
                    imagemPergunta: "img/sinal_hospital.svg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado",
                    dica: { tipo: "texto", texto: "A letra H significa Hospital." }
                },
                {
                    tipo: "lacuna",
                    pergunta: "Quando vemos um sinal azul com um garfo e uma faca, sabemos que há um ________ por perto.",
                    audio: "audios/n2_q15.mp3",
                    imagemPergunta: "img/sinal_restaurante.svg",
                    opcoes: ["restaurante", "aeroporto", "parque", "quartel"],
                    correta: "restaurante",
                    dica: { tipo: "50-50", texto: "Serve para fazer refeições." }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destes sinais devemos procurar se alguém ficar doente na rua?",
                    audio: "audios/n2_q16.mp3",
                    categoriaDistratores: "sinais",
					mostrarLegenda: false,
                    correta: "Hospital",
                    dica: { tipo: "highlight", texto: "Procura o sinal com a letra H." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Qual é a cor principal dos sinais de informação que vimos neste nível?",
                    audio: "audios/n2_q17.mp3",
                    imagemPergunta: "img/sinal_estacionamento.svg",
                    opcoes: ["Azul", "Vermelho", "Amarelo", "Roxo"],
                    correta: "Azul",
                    dica: { tipo: "50-50", texto: "Observa a cor de fundo da placa na imagem." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "O sinal com uma chave de bocas indica um lugar onde podemos comprar livros.",
                    audio: "audios/n2_q18.mp3",
                    imagemPergunta: "img/sinal_oficina.svg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado",
                    dica: { tipo: "texto", texto: "A chave serve para reparar carros numa oficina." }
                },
                {
                    tipo: "lacuna",
                    pergunta: "O sinal azul com a <span class='destaque-fundo'>letra P</span> indica um parque de ________.",
                    audio: "audios/n2_q19.mp3",
                    imagemPergunta: "img/sinal_estacionamento.svg",
                    opcoes: ["estacionamento", "diversões", "bombeiros", "campismo"],
                    correta: "estacionamento",
                    dica: { tipo: "highlight", texto: "É onde os condutores deixam os carros estacionados." }
                },
                {
                    tipo: "opcoes-imagem",
                    pergunta: "Vamos viajar de avião!\nToca no sinal que nos indica o Aeroporto.",
                    audio: "audios/n2_q20.mp3",
                    categoriaDistratores: "sinais",
					mostrarLegenda: false,
                    correta: "Aeroporto",
                    dica: { tipo: "highlight", texto: "Procura o desenho do avião." }
                }
            ]
        },

        // =====================================================================
        // NÍVEL 3: O QUE É UM ITINERÁRIO? (20 perguntas)
        // =====================================================================
        {
            id: 3,
            titulo: "O que é um Itinerário?",
            subtitulo: "Partida, paragens e ponto de chegada",
            icone: "img/icon_nivel3.svg",
			corClasse: "bg-azul",
            cor: "#ff922b",
            perguntas: [
                {
                    tipo: "lacuna",
                    pergunta: "Ao caminho percorrido entre um ponto de partida e um ponto de chegada chama-se ________.",
                    audio: "audios/n3_q01.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["itinerário", "semáforo", "edifício", "calendário"],
                    correta: "itinerário",
                    dica: { tipo: "50-50", texto: "É o nome do percurso que fazemos de um lugar para outro." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "O Afonso sai de <span class='destaque-fundo'>Casa</span> e vai até à <span class='destaque-fundo'>Escola</span>.\nQual é o seu ponto de partida?",
                    audio: "audios/n3_q02.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["Casa", "Escola", "Padaria", "Parque"],
                    correta: "Casa",
                    dica: { tipo: "highlight", texto: "Ponto de partida é o lugar onde o caminho começa." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "No mesmo percurso de <span class='destaque-fundo'>Casa</span> até à <span class='destaque-fundo'>Escola</span>, qual é o ponto de chegada?",
                    audio: "audios/n3_q03.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["Escola", "Casa", "Hospital", "Estação"],
                    correta: "Escola",
                    dica: { tipo: "50-50", texto: "Ponto de chegada é o destino final do caminho." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Observa a planta.\nO caminho tracejado azul é mais curto do que o caminho tracejado vermelho.",
                    audio: "audios/n3_q04.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo",
                    dica: { tipo: "texto", texto: "O caminho azul vai direto, enquanto o vermelho dá uma volta maior." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Observa os dois caminhos entre a <span class='destaque-fundo'>Casa</span> e a <span class='destaque-fundo'>Escola</span>.\nQual é o itinerário mais longo?",
                    audio: "audios/n3_q05.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["O caminho vermelho", "O caminho azul", "São iguais", "Nenhum chega à escola"],
                    correta: "O caminho vermelho",
                    dica: { tipo: "50-50", texto: "É o percurso que passa à volta do parque e da padaria." }
                },
                {
                    tipo: "ordenar",
                    pergunta: "<span class='destaque-fundo'>A Maria sai da Escola, vai à Farmácia e depois chega a Casa.</span>\nOrdena o itinerário.",
                    audio: "audios/n3_q06.mp3",
                    itens: [
                        { texto: "Escola" },
                        { texto: "Farmácia" },
                        { texto: "Casa" }
                    ],
                    correta: "Escola | Farmácia | Casa",
                    dica: { tipo: "highlight", texto: "Onde começa o percurso da Maria? Na Escola!" }
                },
                {
                    tipo: "ordenar",
                    pergunta: "Ordena o percurso da manhã.\n<span class='destaque-fundo'>Acordar em Casa, passar na Padaria e chegar à Escola.</span>",
                    audio: "audios/n3_q07.mp3",
                    itens: [
                        { texto: "Casa" },
                        { texto: "Padaria" },
                        { texto: "Escola" }
                    ],
                    correta: "Casa | Padaria | Escola",
                    dica: { tipo: "50-50", texto: "O último lugar onde chega é a Escola." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Para ir de um lugar a outro numa localidade só existe sempre um único caminho possível.",
                    audio: "audios/n3_q08.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["verdade", "Mentira"],
                    correta: "Mentira",
                    dica: { tipo: "texto", texto: "Como vês na planta, podemos escolher caminhos mais curtos ou mais longos!" }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Traça o caminho do Afonso.\nParte de <span class='destaque-badge'>Casa</span> e vai até ao <span class='destaque-badge'>Parque infantil</span>.",
                    audio: "audios/n3_q09.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    pontos: PONTOS_BAIRRO,
                    correta: "casa | parque",
                    dica: { tipo: "highlight", texto: "Toca primeiro na Casa e depois no Parque!" }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Traça o percurso na escola.\nVai do Portão até à Sala de Aula.",
                    audio: "audios/n3_q10.mp3",
                    imagemPergunta: "img/planta_escola_16x9.jpg",
                    pontos: PONTOS_ESCOLA,
                    correta: "portao | sala",
                    dica: { tipo: "highlight", texto: "Começa no Portão onde está o autocarro amarelo." }
                },
                {
                    tipo: "ordenar",
                    pergunta: "Ordena o percurso na cidade.\n'Sair do <span class='destaque-fundo'>Hotel</span>, almoçar no <span class='destaque-fundo'>Restaurante</span> e passear no <span class='destaque-fundo'>Jardim</span>.'",
                    audio: "audios/n3_q11.mp3",
                    itens: [
                        { texto: "Hotel" },
                        { texto: "Restaurante" },
                        { texto: "Jardim" }
                    ],
                    correta: "Hotel | Restaurante | Jardim",
                    dica: { tipo: "highlight", texto: "O primeiro passo é sair do Hotel." }
                },
                {
                    tipo: "lacuna",
                    pergunta: "O local onde <span class='destaque-texto-verde'>iniciamos</span> um itinerário chama-se ponto de ________.",
                    audio: "audios/n3_q12.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["partida", "chegada", "paragem", "descanso"],
                    correta: "partida",
                    dica: { tipo: "50-50", texto: "É de onde partimos para começar o caminho." }
                },
                {
                    tipo: "lacuna",
                    pergunta: "O <span class='destaque-fundo'>destino final</span> onde termina um itinerário chama-se ponto de ________.",
                    audio: "audios/n3_q13.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["chegada", "partida", "saída", "início"],
                    correta: "chegada",
                    dica: { tipo: "50-50", texto: "É o lugar onde chegamos no fim." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Na cidade, vai do <span class='destaque-fundo'>Hospital</span> até à <span class='destaque-fundo'>Farmácia</span>.",
                    audio: "audios/n3_q14.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    pontos: PONTOS_CIDADE,
                    correta: "hospital | farmacia",
                    dica: { tipo: "highlight", texto: "Começa no Hospital (cruz vermelha) e toca na Farmácia (cruz verde)." }
                },
                {
                    tipo: "ordenar",
                    pergunta: "Ordena a rotina na escola.\n<span class='destaque-fundo'>Entrar pelo Portão, ir à Sala de Aula e brincar no Recreio.</span>",
                    audio: "audios/n3_q15.mp3",
                    itens: [
                        { texto: "Portão" },
                        { texto: "Sala de Aula" },
                        { texto: "Recreio" }
                    ],
                    correta: "Portão | Sala de Aula | Recreio",
                    dica: { tipo: "50-50", texto: "Primeiro entras pelo Portão da escola." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Na planta dos dois itinerários, o caminho azul passa por cima de uma passadeira.",
                    audio: "audios/n3_q16.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["Sim", "Não"],
                    correta: "Sim",
                    dica: { tipo: "texto", texto: "Repara nas riscas brancas na rua por onde passa a linha azul." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Se o Pedro está na <span class='destaque-badge'>Biblioteca</span> e vai para a <span class='destaque-badge'>Cantina</span>, qual é o ponto de partida?",
                    audio: "audios/n3_q17.mp3",
                    imagemPergunta: "img/planta_escola_16x9.jpg",
                    opcoes: ["Biblioteca", "Cantina", "Recreio", "Ginásio"],
                    correta: "Biblioteca",
                    dica: { tipo: "50-50", texto: "É o local onde o Pedro já se encontra antes de começar a andar." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Ajuda o Afonso a ir da <span class='destaque-fundo'>Escola</span> até ao <span class='destaque-fundo'>Supermercado</span>.",
                    audio: "audios/n3_q18.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    pontos: PONTOS_BAIRRO,
                    correta: "escola | supermercado",
                    dica: { tipo: "highlight", texto: "Parte da Escola e toca no Supermercado." }
                },
                {
                    tipo: "ordenar",
                    pergunta: "Ordena o percurso.\n<span class='destaque-fundo'>Partir da Estação, passar na Farmácia e chegar ao Hospital.</span>",
                    audio: "audios/n3_q19.mp3",
                    itens: [
                        { texto: "Estação" },
                        { texto: "Farmácia" },
                        { texto: "Hospital" }
                    ],
                    correta: "Estação | Farmácia | Hospital",
                    dica: { tipo: "highlight", texto: "O ponto de partida é a Estação." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Um itinerário tem <span class='destaque-texto-verde'>sempre</span> um ponto de partida e um ponto de chegada.",
                    audio: "audios/n3_q20.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["Verdadeiro", "Falso"],
                    correta: "Verdadeiro",
                    dica: { tipo: "texto", texto: "Todo o caminho começa num sítio e termina noutro." }
                }
            ]
        },

        // =====================================================================
        // NÍVEL 4: SEGUIR E TRAÇAR CAMINHOS COMPLETOS (20 perguntas)
        // =====================================================================
        {
            id: 4,
            titulo: "Mestre dos Mapas",
            subtitulo: "Traça percursos completos com várias paragens",
            icone: "img/icon_nivel4.svg",
			corClasse: "bg-roxo",
            cor: "#f06595",
            perguntas: [
                {
                    tipo: "mapa-cliques",
                    pergunta: "<span class='destaque-fundo'>Traça o itinerário do Afonso: sai de Casa, passa na Padaria e chega à Escola.</span>",
                    audio: "audios/n4_q01.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    pontos: PONTOS_BAIRRO,
                    correta: "casa | padaria | escola",
                    dica: { tipo: "highlight", texto: "Segue esta ordem: Casa → Padaria → Escola." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "<span class='destaque-fundo'>Depois das aulas, vai da Escola até ao Parque infantil, <span class='destaque-texto-vermelho'>passando</span> pelo Jardim.</span>",
                    audio: "audios/n4_q02.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    pontos: PONTOS_BAIRRO,
                    correta: "escola | jardim | parque",
                    dica: { tipo: "50-50", texto: "Começa na Escola, passa no Jardim central e termina no Parque." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Na cidade, ajuda a mãe a ir do Hotel ao Hospital e depois à Farmácia.",
                    audio: "audios/n4_q03.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    pontos: PONTOS_CIDADE,
                    correta: "hotel | hospital | farmacia",
                    dica: { tipo: "highlight", texto: "Parte do Hotel, vai ao Hospital e termina na Farmácia." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Na escola, vai da Sala de Aula até à Cantina, <span class='destaque-texto-verde'>passando primeiro</span> pela Biblioteca.",
                    audio: "audios/n4_q04.mp3",
                    imagemPergunta: "img/planta_escola_16x9.jpg",
                    pontos: PONTOS_ESCOLA,
                    correta: "sala | biblioteca | cantina",
                    dica: { tipo: "highlight", texto: "Sala de Aula → Biblioteca → Cantina." }
                },
                {
                    tipo: "ordenar",
                    pergunta: "Ordena o itinerário da Maria.\n<span class='destaque-fundo'>Sai da Escola, vai à Farmácia, brinca no Parque e volta a Casa.</span>",
                    audio: "audios/n4_q05.mp3",
                    itens: [
                        { texto: "Escola" },
                        { texto: "Farmácia" },
                        { texto: "Parque" },
                        { texto: "Casa" }
                    ],
                    correta: "Escola | Farmácia | Parque | Casa",
                    dica: { tipo: "50-50", texto: "A Maria começa na Escola e termina em Casa." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Faz o percurso.\nParte do Supermercado, passa pelo Jardim e vai até aos Bombeiros.",
                    audio: "audios/n4_q06.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    pontos: PONTOS_BAIRRO,
                    correta: "supermercado | jardim | bombeiros",
                    dica: { tipo: "highlight", texto: "Começa no Supermercado, passa no meio (Jardim) e sobe até aos Bombeiros." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Ao seguir um itinerário a pé na rua, devemos atravessar sempre nas passadeiras e andar pelo passeio.",
                    audio: "audios/n4_q07.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["Sim", "Não"],
                    correta: "Sim",
                    dica: { tipo: "texto", texto: "A segurança na rua faz parte de qualquer bom itinerário!" }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Traça este passeio na cidade.\n<span class='destaque-fundo'>Sai da Estação, passa pelo Jardim e almoça no Restaurante.</span>",
                    audio: "audios/n4_q08.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    pontos: PONTOS_CIDADE,
                    correta: "estacao | jardim | restaurante",
                    dica: { tipo: "50-50", texto: "Estação → Jardim → Restaurante." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "No fim do dia de escola, vai do Recreio até ao Portão, <span class='destaque-texto-verde'>passando primeiro</span> pelo Ginásio.",
                    audio: "audios/n4_q09.mp3",
                    imagemPergunta: "img/planta_escola_16x9.jpg",
                    pontos: PONTOS_ESCOLA,
                    correta: "recreio | ginasio | portao",
                    dica: { tipo: "highlight", texto: "Começa no Recreio, passa pelo Ginásio e sai no Portão." }
                },
                {
                    tipo: "ordenar",
                    pergunta: "Ordena o percurso do carteiro.\n<span class='destaque-fundo'>Sai dos Bombeiros, entrega carta na Escola, passa na Padaria e chega ao Parque.</span>",
                    audio: "audios/n4_q10.mp3",
                    itens: [
                        { texto: "Bombeiros" },
                        { texto: "Escola" },
                        { texto: "Padaria" },
                        { texto: "Parque" }
                    ],
                    correta: "Bombeiros | Escola | Padaria | Parque",
                    dica: { tipo: "highlight", texto: "O primeiro ponto é nos Bombeiros." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Observa a planta do bairro.\nQual destes lugares fica mais perto da casa do Afonso?",
                    audio: "audios/n4_q11.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["O Supermercado", "A Padaria", "O Parque infantil", "Os Bombeiros"],
                    correta: "Os Bombeiros",
                    dica: { tipo: "50-50", texto: "Olha para os edifícios na parte de baixo da planta." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Faz o caminho completo.\n<span class='destaque-fundo'>Casa → Supermercado → Parque infantil</span>",
                    audio: "audios/n4_q12.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    pontos: PONTOS_BAIRRO,
                    correta: "casa | supermercado | parque",
                    dica: { tipo: "highlight", texto: "Segue pela parte de baixo do bairro da esquerda para a direita." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Na cidade, vai do Restaurante até à Estação, <span class='destaque-texto-verde'>passando</span> pela Farmácia.",
                    audio: "audios/n4_q13.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    pontos: PONTOS_CIDADE,
                    correta: "restaurante | farmacia | estacao",
                    dica: { tipo: "50-50", texto: "Restaurante (em baixo à esquerda) → Farmácia (centro) → Estação (em cima à direita)." }
                },
                {
                    tipo: "cidadania",
                    pergunta: "Numa planta, se trocarmos o ponto de partida com o ponto de chegada, fazemos o caminho de regresso.",
                    audio: "audios/n4_q14.mp3",
                    imagemPergunta: "img/planta_percursos_16x9.jpg",
                    opcoes: ["Verdadeiro", "Falso"],
                    correta: "Verdadeiro",
                    dica: { tipo: "texto", texto: "Ir de Casa para a Escola e depois da Escola para Casa é o caminho de volta!" }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "Na escola, faz o itinerário.\n<span class='destaque-fundo'>Portão → Biblioteca → Recreio</span>",
                    audio: "audios/n4_q15.mp3",
                    imagemPergunta: "img/planta_escola_16x9.jpg",
                    pontos: PONTOS_ESCOLA,
                    correta: "portao | biblioteca | recreio",
                    dica: { tipo: "highlight", texto: "Entra no Portão, sobe à Biblioteca e desce até ao Recreio." }
                },
                {
                    tipo: "ordenar",
                    pergunta: "Ordena o percurso de volta a casa.\n<span class='destaque-fundo'>Sair do Parque, comprar pão na Padaria, passar no Jardim e chegar a Casa</span>",
                    audio: "audios/n4_q16.mp3",
                    itens: [
                        { texto: "Parque" },
                        { texto: "Padaria" },
                        { texto: "Jardim" },
                        { texto: "Casa" }
                    ],
                    correta: "Parque | Padaria | Jardim | Casa",
                    dica: { tipo: "50-50", texto: "O último destino é chegar a Casa." }
                },
                {
                    tipo: "opcoes-texto",
                    pergunta: "Se o Afonso está no Parque Infantil e quer ir para a Padaria, para que lado da planta deve ir?",
                    audio: "audios/n4_q17.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    opcoes: ["Para cima", "Para baixo", "Para fora do mapa", "Não precisa de andar"],
                    correta: "Para cima",
                    dica: { tipo: "50-50", texto: "O Parque está em baixo à direita e a Padaria está logo acima." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "<span class='destaque-amarelo'>Super desafio!</span> Traça o itinerário com 4 pontos:\nCasa → Escola → Jardim → Parque",
                    audio: "audios/n4_q18.mp3",
                    imagemPergunta: "img/planta_bairro_16x9.jpg",
                    pontos: PONTOS_BAIRRO,
                    correta: "casa | escola | jardim | parque",
                    dica: { tipo: "highlight", texto: "Começa na Casa, sobe à Escola, passa no Jardim e termina no Parque!" }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "<span class='destaque-amarelo'>Super desafio na cidade!</span>\nHotel → Hospital → Farmácia → Jardim",
                    audio: "audios/n4_q19.mp3",
                    imagemPergunta: "img/planta_cidade_16x9.jpg",
                    pontos: PONTOS_CIDADE,
                    correta: "hotel | hospital | farmacia | jardim",
                    dica: { tipo: "highlight", texto: "Começa no Hotel, desce ao Hospital, vai ao centro (Farmácia) e termina no Jardim." }
                },
                {
                    tipo: "mapa-cliques",
                    pergunta: "<span class='destaque-amarelo'>Missão final do Pombo-Correio!</span>\nPortão → Sala de Aula → Cantina → Recreio",
                    audio: "audios/n4_q20.mp3",
                    imagemPergunta: "img/planta_escola_16x9.jpg",
                    pontos: PONTOS_ESCOLA,
                    correta: "portao | sala | cantina | recreio",
                    dica: { tipo: "highlight", texto: "Entra no Portão, vai à Sala de Aula, almoça na Cantina e brinca no Recreio!" }
                }
            ]
        }
    ]
};