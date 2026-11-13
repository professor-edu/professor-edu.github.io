const CONFIG_JOGO = {
    id: "estudo-meio-primeiros-socorros",
    titulo: "Primeiros Socorros",
    subtituloMenu: "Escolhe um minijogo para começar!",
    tema: {
        corPrimaria: "#51cf66",
        corSecundaria: "#27ae60"
    },
    cooldownDica: 3,
    niveis: [
        /* =========================================================
           NÍVEL 1: EMERGÊNCIA E CAIXA DE SOCORROS (20 QUESTÕES)
        ========================================================= */
        {
            id: 1,
            titulo: "Emergência e Caixa",
            subtitulo: "Ligar 112 e materiais",
            icone: "img/caixa_socorros.png",
            corClasse: "bg-azul",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 101,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Pedido de Socorro</span>",
                    audio: "audios/101.mp3", // Áudio: "Perante um acidente grave sem adultos por perto, que número europeu de emergência deves marcar no telefone?"
                    dica: "É um número gratuito com três algarismos válido em toda a União Europeia.",
                    categoriaDistratores: "emergencia_apoio",
                    correta: "Ligar 112"
                },
                {
                    id: 102,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>O que são os Primeiros Socorros?</span>",
                    audio: "audios/102.mp3", // Áudio: "Qual é o principal objetivo dos primeiros socorros prestados logo após um acidente?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Diminuir o sofrimento e evitar o agravamento",
                        "Substituir para sempre a ida ao hospital",
                        "Dar medicamentos fortes sem receita médica",
                        "Transportar a vítima a correr para casa"
                    ],
                    correta: "Diminuir o sofrimento e evitar o agravamento"
                },
                {
                    id: 103,
                    tipo: "categoria",
                    pergunta: "Ao ligar para o <span class='destaque-badge'>112</span> numa situação de emergência, o que <span class='destaque-amarelo'>NÃO</span> se deve fazer?",
                    audio: "audios/103.mp3",
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Desligar a chamada antes do operador terminar",
                        "Manter a calma e falar com clareza",
                        "Responder a todas as perguntas feitas",
                        "Acalmar a vítima enquanto se espera"
                    ],
                    correta: "Desligar a chamada antes do operador terminar"
                },
                {
                    id: 104,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> manter a calma e tranquilizar a vítima enquanto se aguarda pela chegada dos socorristas?",
                    audio: "audios/104.mp3",
                    dica: "A calma ajuda a dar informações corretas e reduz o medo de quem está magoado.",
                    imagemPergunta: "img/acalmar_vitima.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 105,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Combater Infeções</span>",
                    audio: "audios/105.mp3", // Áudio: "Qual destes produtos da caixa de primeiros socorros serve para desinfetar feridas e combater micróbios?"
                    dica: "É uma substância desinfetante que previne infeções na pele.",
                    categoriaDistratores: "caixa_socorros",
                    correta: "Antissético"
                },
                {
                    id: 106,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Soro Fisiológico</span>",
                    audio: "audios/106.mp3", // Áudio: "Para que serve o soro fisiológico na caixa de primeiros socorros?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Lavar feridas, picadas ou os olhos sem arder",
                        "Colar pensos rápidos na pele",
                        "Medir a temperatura do corpo",
                        "Cortar ligaduras e adesivos"
                    ],
                    correta: "Lavar feridas, picadas ou os olhos sem arder"
                },
                {
                    id: 107,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Febre</span>",
                    audio: "audios/107.mp3", // Áudio: "O Tiago sente-se muito quente e com arrepios. Que instrumento usamos para medir a temperatura do corpo?"
                    dica: "Indica em graus Celsius se a pessoa tem febre.",
                    categoriaDistratores: "caixa_socorros",
                    correta: "Termómetro"
                },
                {
                    id: 108,
                    tipo: "categoria",
                    pergunta: "Qual destes objetos <span class='destaque-amarelo'>NÃO</span> deve estar dentro da <span class='destaque-badge'>Caixa de Socorros</span>?",
                    audio: "audios/108.mp3",
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Medicamentos fora de validade",
                        "Compressas esterilizadas",
                        "Luvas descartáveis",
                        "Ligadura e adesivo"
                    ],
                    correta: "Medicamentos fora de validade"
                },
                {
                    id: 109,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> guardar a caixa de primeiros socorros num local húmido e ao alcance de crianças pequenas?",
                    audio: "audios/109.mp3",
                    dica: "A caixa deve ficar num local seco, fresco, visível para adultos e seguro.",
                    imagemPergunta: "img/caixa_socorros.png",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 110,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Proteção no Socorro</span>",
                    audio: "audios/110.mp3", // Áudio: "Porque devemos calçar luvas descartáveis antes de tratar uma ferida com sangue?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Para proteger quem ajuda e evitar infeções na ferida",
                        "Para não sujar as unhas com tinta",
                        "Para aquecer as mãos no inverno",
                        "Para substituir as compressas esterilizadas"
                    ],
                    correta: "Para proteger quem ajuda e evitar infeções na ferida"
                },
                {
                    id: 111,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Higiene das Mãos</span>",
                    audio: "audios/111.mp3", // Áudio: "Antes de tocar numa ferida com sangue, o que deves colocar para proteger as tuas mãos?"
                    dica: "São descartáveis e evitam o contacto direto com o sangue.",
                    categoriaDistratores: "caixa_socorros",
                    correta: "Luvas Descartáveis"
                },
                {
                    id: 112,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Antissético</span>",
                    audio: "audios/112.mp3", // Áudio: "O que é um antissético na área da saúde e dos primeiros socorros?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Substância que previne infeções destruindo micro-organismos",
                        "Um aparelho para ouvir o batimento do coração",
                        "Uma tala rígida para imobilizar pernas partidas",
                        "Um xarope doce para aliviar a dor de garganta"
                    ],
                    correta: "Substância que previne infeções destruindo micro-organismos"
                },
                {
                    id: 113,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Compressas</span>",
                    audio: "audios/113.mp3", // Áudio: "Que rolo de tecido elástico usamos para enrolar e segurar uma compressa num braço ou numa perna?"
                    dica: "Enrola-se à volta do membro sem apertar demasiado.",
                    categoriaDistratores: "caixa_socorros",
                    correta: "Ligadura"
                },
                {
                    id: 114,
                    tipo: "categoria",
                    pergunta: "Perante uma emergência sem adultos, que atitudes deves tomar ao ligar para o <span class='destaque-badge'>112</span>?",
                    audio: "audios/114.mp3", // Áudio: "Perante uma emergência sem adultos, que atitudes deves tomar ao ligar para o 112?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Responder às questões, acalmar a vítima e prestar socorro",
                        "Gritar ao telefone e desligar rapidamente",
                        "Esconder-se e esperar que alguém apareça",
                        "Dar água e comida à vítima inconsciente"
                    ],
                    correta: "Responder às questões, acalmar a vítima e prestar socorro"
                },
                {
                    id: 115,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> fazer chamadas falsas ou a brincar para o número 112?",
                    audio: "audios/115.mp3", // Áudio: "É certo ou errado fazer chamadas falsas ou a brincar para o número 112?"
                    dica: "Ocupar as linhas de emergência pode atrasar o socorro de alguém em perigo real.",
                    imagemPergunta: "img/telefone_112.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 116,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Caixa de Primeiros Socorros</span>",
                    audio: "audios/116.mp3", // Áudio: "Quais são as condições ideais para guardar a caixa de primeiros socorros em casa ou na escola?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Num local seco, fresco e fora do alcance de crianças pequenas",
                        "Debaixo do lava-loiça junto aos produtos de limpeza",
                        "Ao sol na varanda para manter os materiais quentes",
                        "Misturada com os brinquedos no quarto"
                    ],
                    correta: "Num local seco, fresco e fora do alcance de crianças pequenas"
                },
                {
                    id: 117,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Cortar Materiais</span>",
                    audio: "audios/117.mp3", // Áudio: "Que instrumento da caixa de primeiros socorros tem pontas arredondadas para cortar ligaduras ou roupa com segurança?"
                    dica: "Tem lâminas de metal e pontas redondas para não magoar a pele.",
                    categoriaDistratores: "caixa_socorros",
                    correta: "Tesoura"
                },
                {
                    id: 118,
                    tipo: "categoria",
                    pergunta: "Qual destas atitudes ajuda a <span class='destaque-amarelo'>Prevenir Acidentes</span> domésticos?",
                    audio: "audios/118.mp3",
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Manter medicamentos e produtos tóxicos fechados e arrumados",
                        "Correr com objetos pontiagudos nas mãos",
                        "Mexer em tomadas elétricas com as mãos molhadas",
                        "Deixar brinquedos espalhados nas escadas"
                    ],
                    correta: "Manter medicamentos e produtos tóxicos fechados e arrumados"
                },
                {
                    id: 119,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> verificar regularmente a validade e repor os materiais usados na caixa de primeiros socorros?",
                    audio: "audios/119.mp3",
                    dica: "Assim garantimos que está tudo pronto quando ocorrer um imprevisto.",
                    imagemPergunta: "img/caixa_socorros.png",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 120,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Saber Informar</span>",
                    audio: "audios/120.mp3", // Áudio: "Por que se diz que 'Saber informar pode salvar vidas' numa emergência?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Porque explicar bem o local e o estado da vítima acelera o socorro",
                        "Porque assim os socorristas não precisam de vir ao local",
                        "Porque permite adivinhar o nome de todos os médicos",
                        "Porque evita ter de falar com adultos"
                    ],
                    correta: "Porque explicar bem o local e o estado da vítima acelera o socorro"
                }
            ]
        },

        /* =========================================================
           NÍVEL 2: FERIDAS, HEMORRAGIAS E MORDEDURAS (20 QUESTÕES)
        ========================================================= */
        {
            id: 2,
            titulo: "Feridas e Hemorragias",
            subtitulo: "Cortes, nariz e mordeduras",
            icone: "img/penso_rapido.png",
            corClasse: "bg-vermelho",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 201,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Sangrar do Nariz</span>",
                    audio: "audios/201.mp3", // Áudio: "A Inês começou a sangrar do nariz no recreio. Qual é a posição correta para a sentar?"
                    dica: "Inclina ligeiramente para a frente para não engolir sangue.",
                    categoriaDistratores: "atuacao_socorro",
                    correta: "Cabeça para a frente"
                },
                {
                    id: 202,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Limpar uma Ferida</span>",
                    audio: "audios/202.mp3", // Áudio: "Usando água ou soro fisiológico, como devemos lavar uma ferida na pele?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Do centro para fora, para arrastar a sujidade",
                        "De fora para o centro da ferida",
                        "Esfregando com força usando um pano seco",
                        "Apenas soprando para secar rápido"
                    ],
                    correta: "Do centro para fora, para arrastar a sujidade"
                },
                {
                    id: 203,
                    tipo: "categoria",
                    pergunta: "Em caso de <span class='destaque-badge'>hemorragia nasal</span> o que se <span class='destaque-amarelo'>NÃO</span> deve fazer?",
                    audio: "audios/203.mp3",
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Inclinar a cabeça para trás",
                        "Pressionar a narina durante alguns segundos",
                        "Aplicar gelo na zona do nariz",
                        "Colocar um tampão feito com compressa"
                    ],
                    correta: "Inclinar a cabeça para trás"
                },
                {
                    id: 204,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> pressionar uma ferida que sangra muito usando uma compressa limpa sem a retirar?",
                    audio: "audios/204.mp3",
                    dica: "A pressão firme ajuda o sangue a estancar.",
                    imagemPergunta: "img/compressa_pressao.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 205,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Mordedura de Animal</span>",
                    audio: "audios/205.mp3", // Áudio: "Depois de lavar a mordedura de um cão, que documento importante se deve levar ao hospital?"
                    dica: "Serve para o médico verificar se a vacina do tétano está em dia.",
                    categoriaDistratores: "emergencia_apoio",
                    correta: "Boletim de Vacinas"
                },
                {
                    id: 206,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Perigo nas Mordeduras</span>",
                    audio: "audios/206.mp3", // Áudio: "Por que é obrigatório lavar muito bem uma mordedura de animal, mesmo que não tenha sangrado?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Para remover bactérias que podem causar doenças graves",
                        "Para acalmar o animal que mordeu",
                        "Porque a água fria fecha logo a pele",
                        "Para não precisar de ir ao médico"
                    ],
                    correta: "Para remover bactérias que podem causar doenças graves"
                },
                {
                    id: 207,
                    tipo: "categoria",
                    pergunta: "O que caracteriza uma <span class='destaque-badge'>Hemorragia Interna</span>?",
                    audio: "audios/207.mp3",
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "O sangue perde-se no interior do corpo e não é visível",
                        "O sangue sai por um pequeno arranhão no joelho",
                        "Acontece apenas quando sangramos do nariz",
                        "Cura-se apenas com um penso rápido"
                    ],
                    correta: "O sangue perde-se no interior do corpo e não é visível"
                },
                {
                    id: 208,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Proteger a Ferida</span>",
                    audio: "audios/208.mp3", // Áudio: "Depois de lavar e desinfetar uma ferida na pele, com que material a devemos cobrir?"
                    dica: "É um tecido esterilizado que não deixa pelos na ferida.",
                    categoriaDistratores: "caixa_socorros",
                    correta: "Compressa Esterilizada"
                },
                {
                    id: 209,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> ligar para o 112 se uma hemorragia nasal resultar de uma pancada forte na cabeça?",
                    audio: "audios/209.mp3",
                    dica: "Pancadas na cabeça seguidas de sangramento exigem avaliação médica urgente.",
                    imagemPergunta: "img/telefone_112.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 210,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Vacina Importante</span>",
                    audio: "audios/210.mp3", // Áudio: "Que doença grave provocada por bactérias pode ser evitada com a vacina em dia após uma ferida suja ou mordedura?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Tétano",
                        "Gripe",
                        "Varicela",
                        "Constipação"
                    ],
                    correta: "Tétano"
                },
                {
                    id: 211,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Cuidado após Mordedura</span>",
                    audio: "audios/211.mp3", // Áudio: "O cão do vizinho mordeu a mão do João, mas não sangrou. Qual é o cuidado imediato a fazer no local com água ou soro?"
                    dica: "Ajuda a eliminar os micróbios da saliva do animal.",
                    categoriaDistratores: "atuacao_socorro",
                    correta: "Lavar a Ferida"
                },
                {
                    id: 212,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Hemorragia Externa</span>",
                    audio: "audios/212.mp3", // Áudio: "Quando dizemos que ocorre uma hemorragia externa?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Quando há lesão dos vasos sanguíneos e o sangue sai para fora do corpo",
                        "Quando nos constipamos e ficamos com febre alta",
                        "Quando um músculo fica dorido depois de correr",
                        "Quando apanhamos escaldão na praia"
                    ],
                    correta: "Quando há lesão dos vasos sanguíneos e o sangue sai para fora do corpo"
                },
                {
                    id: 213,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Estancar Sangramento</span>",
                    audio: "audios/213.mp3", // Áudio: "Um corte fundo no braço não para de sangrar facilmente. O que deves fazer sobre a compressa?"
                    dica: "Faz força suave e constante sobre o local sem levantar a compressa.",
                    categoriaDistratores: "atuacao_socorro",
                    correta: "Pressionar a Ferida"
                },
                {
                    id: 214,
                    tipo: "categoria",
                    pergunta: "Qual é a ordem correta para tratar uma <span class='destaque-badge'>Ferida na Pele</span>?",
                    audio: "audios/214.mp3", 
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Lavar com água ou soro, desinfetar e cobrir com compressa",
                        "Pôr antissético na terra, tapar com penso e não lavar",
                        "Esfregar com álcool e furar a pele à volta",
                        "Cobrir logo com fita-cola sem limpar a sujidade"
                    ],
                    correta: "Lavar com água ou soro, desinfetar e cobrir com compressa"
                },
                {
                    id: 215,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> usar algodão solto diretamente em cima de uma ferida aberta?",
                    audio: "audios/215.mp3",
                    dica: "O algodão deixa fios colados na ferida; devem usar-se compressas esterilizadas.",
                    imagemPergunta: "img/compressa.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 216,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Tampão Nasal</span>",
                    audio: "audios/216.mp3", // Áudio: "Se precisares de colocar um tampão na narina numa hemorragia nasal, que material deves usar?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Uma compressa esterilizada enrolada",
                        "Um pedaço de papel de jornal",
                        "Uma folha de árvore",
                        "Algodão desfiado com perfume"
                    ],
                    correta: "Uma compressa esterilizada enrolada"
                },
                {
                    id: 217,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Hemorragia Grave</span>",
                    audio: "audios/217.mp3", // Áudio: "Se alguém sofrer uma hemorragia muito grande, além de tentar estancá-la, que ação urgente deves tomar?"
                    dica: "É indispensável pedir ajuda médica imediata pelo telefone.",
                    categoriaDistratores: "emergencia_apoio",
                    correta: "Ligar 112"
                },
                {
                    id: 218,
                    tipo: "categoria",
                    pergunta: "Numa <span class='destaque-badge'>Hemorragia Nasal</span>, além de inclinar a cabeça para a frente e pressionar a narina, o que ajuda a parar o sangue?",
                    audio: "audios/218.mp3",
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Aplicar gelo e colocar um tampão de compressa",
                        "Correr à volta do recreio para aquecer",
                        "Assoar o nariz com muita força",
                        "Deitar-se com os pés encostados à parede"
                    ],
                    correta: "Aplicar gelo e colocar um tampão de compressa"
                },
                {
                    id: 219,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> deixar uma pequena ferida já limpa e desinfetada respirar sem penso quando está num local protegido?",
                    audio: "audios/219.mp3", 
                    dica: "Deixar a ferida preferencialmente sem penso ajuda na cicatrização quando não há risco de sujidade.",
                    imagemPergunta: "img/penso_rapido.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 220,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Mordedura a Sangrar</span>",
                    audio: "audios/220.mp3", // Áudio: "Se a mordedura de um animal estiver a sangrar, o que deves fazer durante alguns minutos antes de lavar?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Parar o sangramento fazendo pressão com uma compressa",
                        "Soprar para cima do sangue",
                        "Esfregar a ferida com areia",
                        "Apertar o pescoço do animal"
                    ],
                    correta: "Parar o sangramento fazendo pressão com uma compressa"
                }
            ]
        },

        /* =========================================================
           NÍVEL 3: QUEIMADURAS, PICADAS E TRAUMATISMOS (20 QUESTÕES)
        ========================================================= */
        {
            id: 3,
            titulo: "Queimaduras e Lesões",
            subtitulo: "Calor, picadas, ossos e músculos",
            icone: "img/gelo.png",
            corClasse: "bg-turquesa",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 301,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Queimadura pelo Calor</span>",
                    audio: "audios/301.mp3", // Áudio: "O Pedro encostou o braço numa panela quente e a pele ficou vermelha. O que deve aplicar imediatamente?"
                    dica: "Ajuda a arrefecer a pele e a aliviar a dor.",
                    categoriaDistratores: "atuacao_socorro",
                    correta: "Água Fria"
                },
                {
                    id: 302,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Choque Elétrico</span>",
                    audio: "audios/302.mp3", // Áudio: "Se alguém sofrer uma queimadura por contacto com a eletricidade, qual é a primeira coisa a fazer?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Desligar o quadro elétrico antes de tocar na vítima",
                        "Agarrar logo a vítima pelas mãos",
                        "Atirar água para cima da tomada",
                        "Puxar o fio elétrico com uma tesoura de metal"
                    ],
                    correta: "Desligar o quadro elétrico antes de tocar na vítima"
                },
                {
                    id: 303,
                    tipo: "categoria",
                    pergunta: "Numa queimadura na pele, o que <span class='destaque-amarelo'>NÃO</span> se deve fazer se surgirem <span class='destaque-badge'>bolhas</span>?",
                    audio: "audios/303.mp3",
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Furar ou rebentar as bolhas",
                        "Molhar com água fria até aliviar",
                        "Aplicar pomada ou loção adequada",
                        "Proteger a zona do sol"
                    ],
                    correta: "Furar ou rebentar as bolhas"
                },
                {
                    id: 304,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> tocar numa pessoa que está a apanhar um choque elétrico sem ter a certeza de que a corrente foi desligada?",
                    audio: "audios/304.mp3",
                    dica: "A eletricidade passa pelo corpo e pode eletrocutar quem tenta ajudar.",
                    imagemPergunta: "img/quadro_eletrico.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 305,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Picada de Abelha</span>",
                    audio: "audios/305.mp3", // Áudio: "Uma abelha picou a mão da Sofia e deixou o ferrão espetado. Que instrumento usamos para o retirar com cuidado?"
                    dica: "Permite agarrar o ferrão sem apertar o saco de veneno.",
                    categoriaDistratores: "caixa_socorros",
                    correta: "Pinça"
                },
                {
                    id: 306,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Reação Alérgica</span>",
                    audio: "audios/306.mp3", // Áudio: "Como se chama o medicamento utilizado para aliviar a comichão e tratar reações alérgicas nas picadas?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Anti-histamínico",
                        "Xarope para a tosse",
                        "Termómetro digital",
                        "Soro fisiológico"
                    ],
                    correta: "Anti-histamínico"
                },
                {
                    id: 307,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Nódoa Negra e Inchaço</span>",
                    audio: "audios/307.mp3", // Áudio: "O Rui bateu com o joelho na mesa e ficou com um hematoma inchado e escuro. O que deve aplicar no local?"
                    dica: "O frio reduz o inchaço dos vasos sanguíneos atingidos.",
                    categoriaDistratores: "atuacao_socorro",
                    correta: "Aplicar Gelo"
                },
                {
                    id: 308,
                    tipo: "categoria",
                    pergunta: "Qual é a sequência correta de procedimentos numa <span class='destaque-badge'>Picada de Inseto</span>?",
                    audio: "audios/308.mp3",
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Retirar o ferrão, lavar e aplicar gelo",
                        "Aplicar gelo, coçar com força e tapar com terra",
                        "Furar a pele com uma agulha e pôr perfume",
                        "Lavar com água a ferver e correr"
                    ],
                    correta: "Retirar o ferrão, lavar e aplicar gelo"
                },
                {
                    id: 309,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> consultar o médico se surgirem hematomas no corpo sem sabermos qual foi a sua origem?",
                    audio: "audios/309.mp3",
                    dica: "Nódoas negras sem pancada conhecida devem ser avaliadas pelo médico.",
                    imagemPergunta: "img/hematoma_joelho.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 310,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Hematomas</span>",
                    audio: "audios/310.mp3", // Áudio: "Como se forma um hematoma, também conhecido por nódoa negra?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Pelo rompimento de vasos sanguíneos após uma pancada",
                        "Quando um osso do braço se parte ao meio",
                        "Pelo contacto direto com um fio elétrico",
                        "Quando apanhamos muito sol sem chapéu"
                    ],
                    correta: "Pelo rompimento de vasos sanguíneos após uma pancada"
                },
                {
                    id: 311,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Imobilizar Fratura</span>",
                    audio: "audios/311.mp3", // Áudio: "Para imobilizar um braço partido antes de ir ao hospital, que objetos rígidos podemos colocar de cada lado?"
                    dica: "Mantêm as articulações imóveis para não agravar a fratura.",
                    categoriaDistratores: "atuacao_socorro",
                    correta: "Talas"
                },
                {
                    id: 312,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Distensão Muscular</span>",
                    audio: "audios/312.mp3", // Áudio: "O que acontece no corpo quando sofremos uma distensão muscular?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Um músculo é esticado demais e ocorre uma rutura",
                        "Um inseto deixa o ferrão na pele",
                        "Um dente de leite cai ao mastigar",
                        "A pele fica vermelha por causa do frio"
                    ],
                    correta: "Um músculo é esticado demais e ocorre uma rutura"
                },
                {
                    id: 313,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Recuperar o Músculo</span>",
                    audio: "audios/313.mp3", // Áudio: "A Marta esticou demais um músculo da perna na aula de Educação Física. Além de aplicar gelo, o que deve fazer?"
                    dica: "O músculo precisa de parar e descansar para recuperar.",
                    categoriaDistratores: "atuacao_socorro",
                    correta: "Repousar"
                },
                {
                    id: 314,
                    tipo: "categoria",
                    pergunta: "Em caso de suspeita de <span class='destaque-badge'>Fratura</span> o que <span class='destaque-amarelo'>NÃO</span> se deve fazer?",
                    audio: "audios/314.mp3",
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Forçar o membro a mexer-se ou tentar endireitar o osso",
                        "Expor a zona da lesão desapertando a roupa",
                        "Imobilizar as articulações acima e abaixo da lesão",
                        "Levar a vítima para o hospital"
                    ],
                    correta: "Forçar o membro a mexer-se ou tentar endireitar o osso"
                },
                {
                    id: 315,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> desapertar ou cortar a roupa na zona de uma fratura para verificar se existem ferimentos?",
                    audio: "audios/315.mp3",
                    dica: "Expor a lesão evita apertar a zona inchada e permite ver se há feridas.",
                    imagemPergunta: "img/tesoura_socorros.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 316,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Fraturas</span>",
                    audio: "audios/316.mp3", // Áudio: "O que acontece ao osso quando ocorre uma fratura?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Um osso parte-se ou fissura devido a um forte impacto",
                        "Apenas a pele fica arranhada superficialmente",
                        "O nariz começa a sangrar por causa do calor",
                        "Surge uma bolha de água no calcanhar"
                    ],
                    correta: "Um osso parte-se ou fissura devido a um forte impacto"
                },
                {
                    id: 317,
                    tipo: "situacao",
                    pergunta: "<span class='destaque-badge'>Segurança Elétrica</span>",
                    audio: "audios/317.mp3", // Áudio: "Se alguém sofrer um choque elétrico em casa, onde devemos ir interromper a passagem da corrente?"
                    dica: "É a caixa onde se desligam os disjuntores da casa.",
                    categoriaDistratores: "emergencia_apoio",
                    correta: "Desligar Quadro Elétrico"
                },
                {
                    id: 318,
                    tipo: "categoria",
                    pergunta: "Onde se devem colocar as <span class='destaque-badge'>Talas</span> para imobilizar corretamente uma fratura?",
                    audio: "audios/318.mp3",
                    dica: { tipo: "highlight" },
                    imagemPergunta: "img/fratura_osso.jpg",
                    opcoes: [
                        "Nas articulações acima e abaixo do membro lesionado",
                        "Apenas na ponta dos dedos das mãos",
                        "Em cima da cabeça e dos ombros",
                        "Apenas no lado que não está magoado"
                    ],
                    correta: "Nas articulações acima e abaixo do membro lesionado"
                },
                {
                    id: 319,
                    tipo: "cidadania",
                    pergunta: "É <span class='destaque-texto-verde'>certo</span> ou <span class='destaque-texto-vermelho'>errado</span> colocar manteiga, óleo ou pasta de dentes sobre uma queimadura?",
                    audio: "audios/319.mp3",
                    dica: "Esses produtos retêm o calor na pele e podem infetar a queimadura.",
                    imagemPergunta: "img/agua_fria.jpg",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 320,
                    tipo: "padrao",
                    pergunta: "<span class='destaque-badge'>Cuidados na Distensão</span>",
                    audio: "audios/320.mp3", // Áudio: "Numa distensão muscular, além de aplicar gelo e repousar, que pomada se pode aplicar se necessário?"
                    dica: { tipo: "highlight" },
                    opcoes: [
                        "Pomada anti-inflamatória",
                        "Pasta de dentes mentolada",
                        "Protetor solar hidratante",
                        "Creme para sapatos"
                    ],
                    correta: "Pomada anti-inflamatória"
                }
            ]
        },

        /* =========================================================
           NÍVEL 4: DESAFIO FINAL DE MESTRE (MISTURA AS 60 QUESTÕES)
        ========================================================= */
        {
            id: 4,
            titulo: "Desafio Final de Mestre",
            subtitulo: "Mistura de todos os temas",
            icone: "img/trofeu_mestre.png",
            corClasse: "bg-roxo",
            misturarModos: true,
            numQuestoes: 10
        }
    ]
};