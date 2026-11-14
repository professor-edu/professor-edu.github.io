// Base de dados completa do jogo Missão TIC (3.º Ano - Estudo do Meio)
// 60 questões (20 por módulo) + Nível 4 (Desafio Final de Mestre)

const CONFIG_JOGO = {
    "titulo": "Missão TIC",
    "subtitulo": "Tecnologia e Segurança Digital",
    "subtituloMenu": "Tecnologia e Segurança Digital",
    "tema": {
        "corPrimaria": "#51cf66",
        "corSecundaria": "#27ae60"
    },
    "mascote": {
        "normal": "img/mascote_normal.png",
        "acerto": "img/mascote_acerto.png",
        "erro": "img/mascote_erro.png"
    },
    "cooldownDica": 3,
    "niveis": [
        {
            "id": 1,
            "titulo": "Símbolos e Emojis",
            "subtitulo": "Descobre o significado dos ícones, botões e emojis.",
            "icone": "img/icone_wifi.svg",
            "corClasse": "bg-verde",
            "numQuestoes": 10,
            "perguntas": [
                {
                    "id": 101,
                    "tipo": "padrao",
                    "pergunta": "O que é um <span class='destaque-fundo'>símbolo</span> na nossa comunicação do dia a dia?",
                    "opcoes": [
                        "A representação gráfica de um objeto, ideia ou ação",
                        "Um texto muito longo para explicar uma regra",
                        "Uma fotografia tirada apenas com telemóvel"
                    ],
                    "correta": "A representação gráfica de um objeto, ideia ou ação",
                    "mostrarLegenda": false,
					"dica": "Os símbolos são desenhos simples que facilitam a comunicação entre todas as pessoas."
                },
                {
                    "id": 102,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_embalagem",
                    "pergunta": "Qual destes símbolos numa embalagem indica\n <span class='destaque-texto-vermelho'>perigo</span> ou <span class='destaque-texto-vermelho'>atenção</span>?",
                    "correta": "Aviso de perigo",
					"mostrarLegenda": false,
                    "dica": "Procura o triângulo amarelo com um ponto de exclamação no centro."
                },
                {
                    "id": 103,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_embalagem",
                    "pergunta": "Qual destes símbolos avisa que um brinquedo é\n <span class='destaque-texto-vermelho'>proibido</span> a crianças com menos de 3 anos?",
                    "correta": "Proibido a menores de 3 anos",
                    "mostrarLegenda": false,
					"dica": { "tipo": "highlight" }
                },
                {
                    "id": 104,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_embalagem",
                    "pergunta": "Qual destes símbolos indica que o jogo é\n <span class='destaque-texto-verde'>recomendado</span> para maiores de 8 anos?",
                    "correta": "Maiores de 8 anos",
                    "mostrarLegenda": false,
					"dica": "Procura o quadrado com o sinal de mais e o número 8."
                },
                {
                    "id": 105,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_embalagem",
                    "pergunta": "Seleciona o símbolo do <span class='destaque-amarelo'>ecoponto amarelo</span> que indica onde colocar a embalagem.",
                    "correta": "Reciclar no ecoponto amarelo",
                    "mostrarLegenda": false,
					"dica": "É o contentor amarelo com o símbolo da reciclagem."
                },
                {
                    "id": 106,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_telemovel",
                    "pergunta": "Qual símbolo mostra que o aparelho está ligado à\n <span class='destaque-badge'>Internet</span> por rede sem fios (Wi-Fi)?",
                    "correta": "Wi-Fi",
                    "mostrarLegenda": false,
					"dica": "Parece um leque formado por ondas curvas sobre um ponto."
                },
                {
                    "id": 107,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_telemovel",
                    "pergunta": "Qual destes símbolos representa o <span class='destaque-fundo'>Bluetooth</span> \nusado para enviar dados entre aparelhos?",
                    "correta": "Bluetooth",
                    "mostrarLegenda": false,
					"dica": "É um símbolo azul com uma figura parecida com a letra B angulosa."
                },
                {
                    "id": 108,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_telemovel",
                    "pergunta": "Qual destes símbolos indica que o telemóvel está ao alcance da rede móvel?",
                    "correta": "Rede móvel",
                    "mostrarLegenda": false,
					"dica": "São barras verticais que vão aumentando de tamanho da esquerda para a direita."
                },
                {
                    "id": 109,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_telemovel",
                    "pergunta": "Qual destes símbolos mostra o nível de carga da bateria do telemóvel?",
                    "correta": "Bateria",
                    "mostrarLegenda": false,
					"dica": "Tem o formato de uma pilha retangular com carga verde no interior."
                },
                {
                    "id": 110,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_telemovel",
                    "pergunta": "Qual símbolo indica que existe um alarme ou despertador ativo no telemóvel?",
                    "correta": "Alarme",
                    "mostrarLegenda": false,
					"dica": "É um pequeno relógio despertador com dois sinos no topo."
                },
                {
                    "id": 111,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_telemovel",
                    "pergunta": "Qual destes símbolos apresenta informações sobre a meteorologia (estado do tempo)?",
                    "correta": "Meteorologia",
                    "mostrarLegenda": false,
					"dica": "Mostra um sol parcialmente coberto por uma nuvem."
                },
                {
                    "id": 112,
                    "tipo": "padrao",
                    "pergunta": "Observa o topo do ecrã do telemóvel. \nQual letra aponta para o símbolo do <span class='destaque-badge'>Wi-Fi</span>?",
                    "imagemPergunta": "img/sit_ecra_telemovel_abc.jpg",
                    "opcoes": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correta": "A",
                    "ordemFixa": true,
                    "dica": "Procura a seta que aponta para o ícone com ondas de sinal sem fios."
                },
                {
                    "id": 113,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_comandos",
                    "pergunta": "Qual botão deves pressionar para começar a ver um vídeo no tablet (Play)?",
                    "correta": "Reproduzir (Play)",
                    "mostrarLegenda": false,
					"dica": { "tipo": "highlight" }
                },
                {
                    "id": 114,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_comandos",
                    "pergunta": "Qual botão serve para fazer uma pausa temporária num vídeo ou música?",
                    "correta": "Pausa",
                    "mostrarLegenda": false,
					"dica": "Tem dois traços verticais paralelos."
                },
                {
                    "id": 115,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_comandos",
                    "pergunta": "Qual destes botões serve para parar completamente a reprodução (Stop)?",
                    "correta": "Parar (Stop)",
                    "mostrarLegenda": false,
					"dica": "É representado por um quadrado sólido no centro."
                },
                {
                    "id": 116,
                    "tipo": "padrao",
                    "pergunta": "Observa o comando de televisão. \nQual letra aponta para o botão de ligar e desligar?",
                    "imagemPergunta": "img/sit_comando_power_abc.jpg",
                    "opcoes": [
                        "A",
                        "B",
                        "C"
                    ],
                    "correta": "B",
                    "ordemFixa": true,
                    "dica": "O botão de ligar/desligar costuma ficar no topo do comando e tem um círculo aberto com um traço."
                },
                {
                    "id": 117,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_comandos",
                    "pergunta": "Quando recebes uma chamada no telemóvel, que botão deves tocar para atender?",
                    "correta": "Atender chamada",
                    "mostrarLegenda": false,
					"dica": "É o botão verde com o desenho de um auscultador."
                },
                {
                    "id": 118,
                    "tipo": "situacao",
                    "categoriaDistratores": "simbolos_comandos",
                    "pergunta": "Qual símbolo usamos nos endereços de correio eletrónico (e-mail)\n e chamamos de <span class='destaque-badge'>arroba</span>?",
                    "correta": "Arroba (@)",
                    "mostrarLegenda": false,
					"dica": { "tipo": "highlight" }
                },
                {
                    "id": 119,
                    "tipo": "situacao",
                    "categoriaDistratores": "emojis_emocoes",
                    "pergunta": "Nos meios digitais usamos emojis para expressar emoções.\nClica no emoji que significa <span class='destaque-amarelo'>Adoro</span>",
                    "correta": "Adoro",
                    "mostrarLegenda": false,
					"dica": "É o rosto sorridente com dois corações vermelhos nos olhos."
                },
                {
                    "id": 120,
                    "tipo": "situacao",
                    "categoriaDistratores": "emojis_emocoes",
                    "pergunta": "Clica no emoji que expressa a emoção\n<span class='destaque-amarelo'>Gargalhada</span>",
                    "correta": "Gargalhada",
                    "mostrarLegenda": false,
					"dica": "É o rosto a rir muito com lágrimas de alegria nos olhos."
                }
            ]
        },
        {
            "id": 2,
            "titulo": "Equipamentos e Internet",
            "subtitulo": "Explora as ferramentas das TIC e como ajudam no dia a dia.",
            "icone": "img/equip_portatil.png",
            "corClasse": "bg-laranja",
            "numQuestoes": 10,
            "perguntas": [
                {
                    "id": 201,
                    "tipo": "padrao",
                    "pergunta": "O que significa a sigla <span class='destaque-badge'>TIC</span>?",
                    "opcoes": [
                        "Tecnologias de Informação e Comunicação",
                        "Televisões Internacionais e Computadores",
                        "Técnicas de Impressão e Correio"
                    ],
                    "correta": "Tecnologias de Informação e Comunicação",
                    "mostrarLegenda": false,
					"dica": "As três letras referem-se a Tecnologias, Informação e Comunicação."
                },
                {
                    "id": 202,
                    "tipo": "padrao",
                    "pergunta": "Qual é o principal objetivo das <span class='destaque-fundo'>Tecnologias de Informação e Comunicação</span>?",
                    "opcoes": [
                        "Tratar, armazenar, divulgar e transmitir informação",
                        "Substituir todos os professores nas escolas",
                        "Apenas servir para jogar videojogos"
                    ],
                    "correta": "Tratar, armazenar, divulgar e transmitir informação",
                    "mostrarLegenda": false,
					"dica": "As TIC ajudam-nos a guardar dados e a comunicar com outras pessoas."
                },
                {
                    "id": 203,
                    "tipo": "situacao",
                    "categoriaDistratores": "equipamentos_tic",
                    "pergunta": "Qual destes equipamentos tecnológicos é um <span class='destaque-fundo'>computador portátil</span>?",
                    "correta": "Computador portátil",
                    "mostrarLegenda": false,
					"dica": "Tem ecrã e teclado integrados numa peça que abre e fecha."
                },
                {
                    "id": 204,
                    "tipo": "situacao",
                    "categoriaDistratores": "equipamentos_tic",
                    "pergunta": "Qual destes equipamentos <span class='destaque-fundo'>orbita no espaço</span> \ne ajuda a transmitir comunicações à distância?",
                    "correta": "Satélite",
                    "mostrarLegenda": false,
					"dica": "Tem painéis solares azuis abertos como asas e uma antena parabólica."
                },
                {
                    "id": 205,
                    "tipo": "situacao",
                    "categoriaDistratores": "equipamentos_tic",
                    "pergunta": "Qual destes equipamentos é um <span class='destaque-badge'>quadro interativo</span> utilizado nas salas de aula?",
                    "correta": "Quadro interativo",
                    "mostrarLegenda": false,
					"dica": "Parece uma tela grande retangular onde se pode projetar e tocar."
                },
                {
                    "id": 206,
                    "tipo": "situacao",
                    "categoriaDistratores": "equipamentos_tic",
                    "pergunta": "Qual destes equipamentos cabe no bolso e permite fazer chamadas e aceder à Internet?",
                    "correta": "Telemóvel",
                    "mostrarLegenda": false,
					"dica": "É o telefone móvel que usamos no dia a dia."
                },
                {
                    "id": 207,
                    "tipo": "situacao",
                    "categoriaDistratores": "setores_tic",
                    "pergunta": "Em qual destas imagens vemos as TIC aplicadas no setor da <span class='destaque-badge'>Saúde</span>?",
                    "correta": "Saúde",
					"mostrarLegenda": false,
                    "dica": "Procura o equipamento hospitalar de exames médicos com uma médica."
                },
                {
                    "id": 208,
                    "tipo": "situacao",
                    "categoriaDistratores": "setores_tic",
                    "pergunta": "Em qual destas imagens vemos as TIC aplicadas na <span class='destaque-badge'>Ciência</span>?",
                    "correta": "Ciência",
					"mostrarLegenda": false,
                    "dica": "Mostra uma cientista a usar um microscópio ligado ao computador."
                },
                {
                    "id": 209,
                    "tipo": "situacao",
                    "categoriaDistratores": "setores_tic",
                    "pergunta": "Em qual destas imagens vemos a tecnologia aplicada nos <span class='destaque-badge'>Transportes</span>?",
                    "correta": "Transportes",
					"mostrarLegenda": false,
                    "dica": "Mostra um comboio moderno e cancelas automáticas de bilhetes."
                },
                {
                    "id": 210,
                    "tipo": "situacao",
                    "categoriaDistratores": "setores_tic",
                    "pergunta": "Em qual destas imagens vemos as TIC aplicadas na <span class='destaque-badge'>Educação</span>?",
                    "correta": "Educação",
					"mostrarLegenda": false,
                    "dica": "Procura a sala de informática com alunos a aprender no computador."
                },
                {
                    "id": 211,
                    "tipo": "situacao",
                    "categoriaDistratores": "setores_tic",
                    "pergunta": "Em qual destas imagens vemos as TIC e robôs aplicados na <span class='destaque-badge'>Indústria</span>?",
                    "correta": "Indústria",
					"mostrarLegenda": false,
                    "dica": "Mostra um braço robótico numa linha de montagem de automóveis."
                },
                {
                    "id": 212,
                    "tipo": "situacao",
                    "categoriaDistratores": "setores_tic",
                    "pergunta": "Em qual destas imagens vemos a tecnologia aplicada no <span class='destaque-badge'>Comércio</span>?",
                    "correta": "Comércio",
					"mostrarLegenda": false,
                    "dica": "Mostra uma caixa registadora digital e um terminal de pagamento."
                },
                {
                    "id": 213,
                    "tipo": "situacao",
                    "categoriaDistratores": "setores_tic",
                    "pergunta": "Em qual destas imagens vemos a tecnologia aplicada na <span class='destaque-badge'>Construção</span>?",
                    "correta": "Construção",
					"mostrarLegenda": false,
                    "dica": "Procura a máquina escavadora e o engenheiro com capacete na obra."
                },
                {
                    "id": 214,
                    "tipo": "situacao",
                    "categoriaDistratores": "setores_tic",
                    "pergunta": "Em qual destas imagens vemos as TIC aplicadas na <span class='destaque-badge'>Comunicação social</span>?",
                    "correta": "Comunicação social",
					"mostrarLegenda": false,
                    "dica": "Mostra um estúdio de notícias com câmara de televisão e ecrã."
                },
                {
                    "id": 215,
                    "tipo": "padrao",
                    "pergunta": "O que é a <span class='destaque-badge'>Internet</span>?",
                    "opcoes": [
                        "Uma rede mundial que interliga equipamentos tecnológicos e fornece informações",
                        "Um cabo elétrico que liga apenas a televisão à tomada",
                        "Uma loja onde se vendem computadores e telemóveis"
                    ],
                    "correta": "Uma rede mundial que interliga equipamentos tecnológicos e fornece informações",
                    "dica": "A Internet liga computadores, tablets e telemóveis em todo o mundo."
                },
                {
                    "id": 216,
                    "tipo": "padrao",
                    "pergunta": "O que permite utilizar a Internet em movimento, na rua ou em viagens?",
                    "opcoes": [
                        "Os equipamentos móveis, como telemóveis e tablets",
                        "Os computadores fixos sem bateria",
                        "Os quadros de ardósia das salas antigas"
                    ],
                    "correta": "Os equipamentos móveis, como telemóveis e tablets",
                    "dica": "São equipamentos leves que podemos transportar connosco."
                },
                {
                    "id": 217,
                    "tipo": "padrao",
                    "pergunta": "Qual destas ações é uma <span class='destaque-fundo'>potencialidade</span> da Internet para o estudo?",
                    "opcoes": [
                        "Pesquisar, recolher e enviar informação para aprender mais",
                        "Deixar de fazer os trabalhos de casa todos os dias",
                        "Copiar textos sem ler o que está escrito"
                    ],
                    "correta": "Pesquisar, recolher e enviar informação para aprender mais",
                    "dica": "A Internet ajuda a aprofundar e promover o estudo."
                },
                {
                    "id": 218,
                    "tipo": "padrao",
                    "pergunta": "Observa a menina a estudar no computador portátil em videochamada.\nQue vantagem da Internet está a usar?",
                    "imagemPergunta": "img/sit_videochamada_estudo.jpg",
                    "opcoes": [
                        "Comunicar e estudar à distância",
                        "Ver televisão sem Internet",
                        "Ver televisão sem Internet"
                    ],
                    "correta": "Comunicar e estudar à distância",
                    "dica": "No ecrã do portátil vemos várias pessoas ligadas ao mesmo tempo."
                },
                {
                    "id": 219,
                    "tipo": "texto",
                    "pergunta": "Completa a frase:\n«Comprar e vender produtos através da Internet chama-se <span class='destaque-badge'>________</span>.»",
                    "opcoes": [
                        "comércio online",
                        "correio postal",
                        "jogo offline"
                    ],
                    "correta": "comércio online",
                    "dica": "Quando fazemos compras na Internet estamos a usar o comércio digital."
                },
                {
                    "id": 220,
                    "tipo": "padrao",
                    "pergunta": "Que serviço da Internet utilizamos para\nenviar mensagens eletrónicas escritas com o símbolo <span class='destaque-amarelo'>@</span>?",
                    "opcoes": [
                        "Correio eletrónico (e-mail)",
                        "Rádio portátil",
                        "Calculadora digital"
                    ],
                    "correta": "Correio eletrónico (e-mail)",
                    "dica": "É a versão digital das antigas cartas enviadas pelo correio."
                }
            ]
        },
        {
            "id": 3,
            "titulo": "Segurança e Cidadania",
            "subtitulo": "Aprende a navegar com segurança, respeito e responsabilidade.",
            "icone": "img/seg_antivirus.svg",
            "corClasse": "bg-azul",
            "numQuestoes": 10,
            "perguntas": [
                {
                    "id": 301,
                    "tipo": "situacao",
                    "categoriaDistratores": "seguranca_digital",
                    "pergunta": "Qual destas imagens representa ter um <span class='destaque-badge'>perfil privado</span> nas redes sociais?",
                    "correta": "Perfil privado",
					"mostrarLegenda": false,
                    "dica": "Mostra o ícone de um utilizador protegido por um cadeado dourado."
                },
                {
                    "id": 302,
                    "tipo": "situacao",
                    "categoriaDistratores": "seguranca_digital",
                    "pergunta": "Qual destas imagens representa manter o <span class='destaque-badge'>antivírus atualizado</span> no computador?",
                    "correta": "Antivírus atualizado",
					"mostrarLegenda": false,
                    "dica": "É um escudo verde com um sinal de visto branco."
                },
                {
                    "id": 303,
                    "tipo": "situacao",
                    "categoriaDistratores": "seguranca_digital",
                    "pergunta": "Qual destas imagens representa manter a tua <span class='destaque-badge'>password secreta</span> e segura?",
                    "correta": "Password secreta",
					"mostrarLegenda": false,
                    "dica": "Mostra uma caixa de código secreto acompanhada de uma chave dourada."
                },
                {
                    "id": 304,
                    "tipo": "situacao",
                    "categoriaDistratores": "seguranca_digital",
                    "pergunta": "Qual destas imagens representa <span class='destaque-badge'>pedir autorização aos pais</span> antes de instalar jogos?",
                    "correta": "Autorização dos pais",
					"mostrarLegenda": false,
                    "dica": "Mostra um adulto junto de uma criança com um símbolo verde de aprovação."
                },
                {
                    "id": 305,
                    "tipo": "texto",
                    "pergunta": "Completa a regra de segurança:\n«Os meus dados pessoais e passwords não são para <span class='destaque-badge'>________</span>.»",
                    "opcoes": [
                        "partilhar",
                        "proteger",
                        "guardar"
                    ],
                    "correta": "partilhar",
                    "dica": "As tuas palavras-passe devem ficar apenas em segredo contigo e com os teus pais."
                },
                {
                    "id": 306,
                    "tipo": "texto",
                    "pergunta": "Completa a regra:\n«As pessoas das redes sociais podem não ser quem dizem. Não marcarei <span class='destaque-badge'>________</span> com ninguém.»",
                    "opcoes": [
                        "encontros",
                        "trabalhos",
                        "desenhos"
                    ],
                    "correta": "encontros",
                    "dica": "Nunca deves combinar encontrar-te pessoalmente com alguém que conheceste online."
                },
                {
                    "id": 307,
                    "tipo": "texto",
                    "pergunta": "Completa a regra de cidadania:\n«Devo <span class='destaque-badge'>________</span> os outros e não fazer comentários maldosos.»",
                    "opcoes": [
                        "respeitar",
                        "ignorar",
                        "humilhar"
                    ],
                    "correta": "respeitar",
                    "dica": "Na Internet devemos tratar os outros com a mesma educação que usamos pessoalmente."
                },
                {
                    "id": 308,
                    "tipo": "padrao",
                    "pergunta": "A Ana recebeu um e-mail de um desconhecido com o assunto\n «Jogos online muito fixes» e um anexo. O que deve fazer?",
                    "imagemPergunta": "img/sit_ana_email_suspeito.jpg",
                    "opcoes": [
                        "Não abrir o anexo e avisar um adulto",
                        "Abrir logo o ficheiro para instalar o jogo",
                        "Responder ao desconhecido com a sua morada"
                    ],
                    "correta": "Não abrir o anexo e avisar um adulto",
                    "dica": "E-mails e links duvidosos podem conter vírus ou perigos para o computador."
                },
                {
                    "id": 309,
                    "tipo": "cidadania",
                    "pergunta": "Um desconhecido num clube de fãs online sugeriu um encontro à Ana.\nAceitar este encontro seria <span class='destaque-texto-verde'>seguro</span> ou <span class='destaque-texto-vermelho'>perigoso</span>?",
                    "imagemPergunta": "img/sit_ana_encontro_online.jpg",
                    "opcoes": [
                        "Seguro",
                        "Perigoso"
                    ],
                    "correta": "Perigoso",
                    "dica": "Na Internet, qualquer pessoa pode fingir ser quem não é."
                },
                {
                    "id": 310,
                    "tipo": "cidadania",
                    "pergunta": "A amiga da Ana quer preencher um perfil público com o seu nome completo e a localidade onde vive.\nEsta atitude está <span class='destaque-texto-verde'>certa</span> ou <span class='destaque-texto-vermelho'>errada</span>?",
                    "imagemPergunta": "img/sit_ana_perfil_publico.jpg",
                    "opcoes": [
                        "Certo",
                        "Errado"
                    ],
                    "correta": "Errado",
                    "dica": "Não devemos expor dados pessoais nem a nossa morada na Internet."
                },
                {
                    "id": 311,
                    "tipo": "padrao",
                    "pergunta": "Por que razão devemos manter as nossas informações pessoais em sigilo (segredo) na Internet?",
                    "opcoes": [
                        "Para proteger a nossa privacidade e segurança contra desconhecidos",
                        "Porque os computadores não aceitam nomes verdadeiros",
                        "Para que os nossos pais não saibam o que fazemos"
                    ],
                    "correta": "Para proteger a nossa privacidade e segurança contra desconhecidos",
                    "dica": "Manter os dados em sigilo evita que estranhos saibam onde vivemos ou estudamos."
                },
                {
                    "id": 312,
                    "tipo": "padrao",
                    "pergunta": "O que acontece quando publicamos fotografias e vídeos na Internet?",
                    "opcoes": [
                        "Podem ser guardados e partilhados por outras pessoas para sempre",
                        "Desaparecem automaticamente ao fim de cinco minutos",
                        "Apenas nós os conseguimos ver no mundo inteiro"
                    ],
                    "correta": "Podem ser guardados e partilhados por outras pessoas para sempre",
                    "dica": "Depois de colocarmos uma imagem online, perdemos o controlo sobre quem a guarda."
                },
                {
                    "id": 313,
                    "tipo": "padrao",
                    "pergunta": "Que informações perigosas uma fotografia publicada online pode revelar sem querermos?",
                    "opcoes": [
                        "A escola onde estudamos, os locais que frequentamos ou onde passamos férias",
                        "A cor preferida do nosso melhor amigo",
                        "A temperatura da água do mar"
                    ],
                    "correta": "A escola onde estudamos, os locais que frequentamos ou onde passamos férias",
                    "dica": "O fundo de uma fotografia pode mostrar sinais da nossa rotina diária."
                },
                {
                    "id": 314,
                    "tipo": "padrao",
                    "pergunta": "O que nos lembra a expressão <span class='destaque-badge'>Há vida offline</span>?",
                    "opcoes": [
                        "Que devemos brincar, conviver e aproveitar o tempo longe dos ecrãs",
                        "Que a Internet só funciona durante a noite",
                        "Que os telemóveis não precisam de bateria"
                    ],
                    "correta": "Que devemos brincar, conviver e aproveitar o tempo longe dos ecrãs",
                    "dica": "Estar 'offline' significa estar desligado da Internet a aproveitar o mundo real."
                },
                {
                    "id": 315,
                    "tipo": "padrao",
                    "pergunta": "O que devemos fazer com as nossas <span class='destaque-badge'>passwords</span> de vez em quando para manter as contas protegidas?",
                    "opcoes": [
                        "Mudar as passwords com alguma regularidade",
                        "Escrevê-las num papel colado no ecrã",
                        "Usar sempre o número 1234 em todas as contas"
                    ],
                    "correta": "Mudar as passwords com alguma regularidade",
                    "dica": "Alterar a palavra-passe periodicamente dificulta o acesso de estranhos."
                },
                {
                    "id": 316,
                    "tipo": "padrao",
                    "pergunta": "O que pode acontecer quando usamos jogos online e redes sociais em excesso?",
                    "opcoes": [
                        "Pode provocar vícios, problemas de saúde e de socialização",
                        "Melhora automaticamente a visão e o sono",
                        "Aumenta a energia física sem precisar de descansar"
                    ],
                    "correta": "Pode provocar vícios, problemas de saúde e de socialização",
                    "dica": "Tudo o que é usado em demasia prejudica o bem-estar e o convívio."
                },
                {
                    "id": 317,
                    "tipo": "padrao",
                    "pergunta": "Observa as três amigas juntas no banco, mas cada uma isolada a olhar só para o telemóvel.\nQue problema se vê?",
                    "imagemPergunta": "img/sit_excesso_ecras.jpg",
                    "opcoes": [
                        "Falta de convívio por excesso de ecrãs",
                        "Falta de bateria nos três aparelhos",
                        "Uma aula de informática ao ar livre"
                    ],
                    "correta": "Falta de convívio por excesso de ecrãs",
                    "dica": "Estão lado a lado, mas não estão a conversar umas com as outras."
                },
                {
                    "id": 318,
                    "tipo": "padrao",
                    "pergunta": "O que é o <span class='destaque-badge'>cyberbullying</span>?",
                    "opcoes": [
                        "O comportamento repetido para assustar, magoar ou envergonhar alguém pela Internet",
                        "Aprender a programar jogos educativos na escola",
                        "Enviar mensagens de parabéns no aniversário de um colega"
                    ],
                    "correta": "O comportamento repetido para assustar, magoar ou envergonhar alguém pela Internet",
                    "dica": "É uma forma de agressão e humilhação feita através das tecnologias digitais."
                },
                {
                    "id": 319,
                    "tipo": "cidadania",
                    "pergunta": "Um aluno está a filmar um colega a chorar para publicar o vídeo nas redes sociais.\nEsta atitude está <span class='destaque-texto-verde'>certa</span> ou <span class='destaque-texto-vermelho'>errada</span>?",
                    "imagemPergunta": "img/sit_cyberbullying.jpg",
                    "opcoes": [
                        "Certo",
                        "Errado"
                    ],
                    "correta": "Errado",
                    "dica": "Filmar e partilhar imagens para envergonhar alguém é cyberbullying."
                },
                {
                    "id": 320,
                    "tipo": "padrao",
                    "pergunta": "Na indústria, as novas máquinas e robôs facilitam o trabalho,\nmas o seu uso crescente também pode provocar...",
                    "opcoes": [
                        "Desemprego em algumas tarefas substituídas por máquinas",
                        "O fim de todas as fábricas no mundo",
                        "A proibição de usar computadores"
                    ],
                    "correta": "Desemprego em algumas tarefas substituídas por máquinas",
                    "dica": "Quando uma máquina faz o trabalho de várias pessoas, alguns postos de trabalho desaparecem."
                }
            ]
        },
        {
            "id": 4,
            "titulo": "Desafio Final de Mestre",
            "subtitulo": "Mistura de todas as missões TIC para verdadeiros mestres!",
            "icone": "img/mascote_acerto.png",
            "corClasse": "bg-roxo",
            "numQuestoes": 10,
            "misturarModos": true,
            "perguntas": []
        }
    ]
};