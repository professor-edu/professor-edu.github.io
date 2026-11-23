/* ==========================================================================
   CONFIGURAÇÃO DO JOGO: SAÚDE E SEGURANÇA (1.º ANO - ESTUDO DO MEIO)
   ========================================================================== */

const CONFIG_JOGO = {
    titulo: "Saúde e Segurança",
    subtituloMenu: "Escolhe um desafio para cuidares de ti e dos outros!",
    cooldownDica: 2, // No 1.º ano, a dica recarrega mais depressa (a cada 2 rondas)

    tema: {
        corPrimaria: "#51cf66",    // Verde (Estudo do Meio)
        corSecundaria: "#2b8a3e",  // Verde escuro para bordas e pílulas
        corAno: "#ff6b6b",         // Cor destaque do 1.º Ano
        corAnoDark: "#e03131",
        bgHeader: "#e3f2fd"
    },

    niveis: [
        /* ==================================================================
           NÍVEL 1: CORPO SÃO E VIDA SAUDÁVEL (20 QUESTÕES)
           ================================================================== */
        {
            id: 1,
            titulo: "Corpo São e Vida Saudável",
            subtitulo: "Higiene, alimentação e vestuário",
            corClasse: "bg-verde",
            icone: "img/icon_nivel1.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 101,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destes alimentos deves consumir todos os dias?",
                    audio: "audios/n1_q01.mp3",
                    dica: { tipo: "50-50", texto: "Escolhe um alimento natural e rico em vitaminas!" },
                    opcoesImagem: [
                        { img: "img/fruta_variada.jpg", alt: "Fruta variada", valor: "Fruta variada" },
                        { img: "img/pizza.jpg", alt: "Pizza", valor: "Pizza" },
                        { img: "img/bolos_doces.jpg", alt: "Bolos e doces", valor: "Bolos e doces" },
                        { img: "img/batatas_fritas.jpg", alt: "Batatas fritas", valor: "Batatas fritas" }
                    ],
                    correta: "Fruta variada"
                },
                {
                    id: 102,
                    tipo: "opcoes-imagem",
                    pergunta: "O que deves beber com regularidade ao longo do dia?",
                    audio: "audios/n1_q02.mp3",
                    dica: { tipo: "highlight", texto: "É transparente, fresca e mata a sede sem açúcar!" },
                    opcoesImagem: [
                        { img: "img/garrafa_agua.jpg", alt: "Água", valor: "Água" },
                        { img: "img/sumo_pacote.jpg", alt: "Sumo açucarado", valor: "Sumo açucarado" },
                        { img: "img/refrigerante.jpg", alt: "Refrigerante", valor: "Refrigerante" }
                    ],
                    correta: "Água"
                },
                {
                    id: 103,
                    tipo: "dupla-opcao",
                    pergunta: "Observa a imagem.\n Este hábito ajuda a manter os dentes saudáveis?",
                    audio: "audios/n1_q03.mp3",
                    imagemPergunta: "img/escovar_dentes.jpg",
                    dica: { tipo: "highlight", texto: "Devemos escovar os dentes depois das refeições!" },
                    opcoes: ["Sim", "Não"],
                    correta: "Sim"
                },
                {
                    id: 104,
                    tipo: "dupla-opcao",
                    pergunta: "A menina saiu à rua num dia de chuva só de t-shirt e calções.\n O vestuário está adequado?",
                    audio: "audios/n1_q04.mp3",
                    imagemPergunta: "img/chuva_roupa_verao.jpg",
                    dica: "Quando chove e está frio, precisamos de impermeável e roupa quente.",
                    opcoes: ["Sim", "Não"],
                    correta: "Não"
                },
                {
                    id: 105,
                    tipo: "ordenar",
                    pergunta: "Ordena os momentos da refeição do 1.º ao 3.º passo.",
                    audio: "audios/n1_q05.mp3",
                    dica: { tipo: "highlight", texto: "Primeiro lavamos as mãos e só no fim lavamos os dentes!" },
                    itens: [
                        { texto: "Lavar as mãos", img: "img/lavar_maos.jpg" },
                        { texto: "Jantar", img: "img/jantar_saudavel.jpg" },
                        { texto: "Lavar as mãos e os dentes", img: "img/lavar_maos_dentes.jpg" }
                    ],
                    correta: "Lavar as mãos | Jantar | Lavar as mãos e os dentes"
                },
                {
                    id: 106,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destes objetos <span class='destaque-amarelo'>NÃO</span> pertence à tua higiene pessoal?",
                    audio: "audios/n1_q06.mp3",
                    dica: { tipo: "50-50", texto: "Procura o objeto que serve para comer e não para limpar o corpo." },
                    opcoesImagem: [
                        { img: "img/maca.jpg", alt: "Maçã", valor: "Maçã" },
                        { img: "img/sabonete.jpg", alt: "Sabonete", valor: "Sabonete" },
                        { img: "img/papel_higienico.jpg", alt: "Papel higiénico", valor: "Papel higiénico" },
                        { img: "img/escova_pasta_dentes.jpg", alt: "Escova e pasta de dentes", valor: "Escova e pasta" }
                    ],
                    correta: "Maçã"
                },
                {
                    id: 107,
                    tipo: "opcoes-texto",
                    pergunta: "Hoje é dia <span class='destaque-fundo'>20 de novembro</span>.\nQual destes iogurtes podes comer ao lanche?",
                    audio: "audios/n1_q07.mp3",
                    imagemPergunta: "img/iogurtes_validade.jpg",
                    dica: { tipo: "50-50", texto: "A data de validade tem de ser depois do dia de hoje!" },
                    opcoes: [
                        "O iogurte com validade até 28/12",
                        "O iogurte com validade até 15/10",
                        "Qualquer um dos dois iogurtes"
                    ],
                    correta: "O iogurte com validade até 28/12"
                },
                {
                    id: 108,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual é o lanche <span class='destaque-fundo'>mais saudável</span> para levares para a escola?",
                    audio: "audios/n1_q08.mp3",
                    dica: { tipo: "highlight", texto: "Um bom lanche tem pão escuro, fruta fresca e água!" },
                    opcoesImagem: [
                        { img: "img/lanche_saudavel.jpg", alt: "Sandes, fruta e água", valor: "Sandes, fruta e água" },
                        { img: "img/lanche_doces.jpg", alt: "Chocolates, bolachas e sumo", valor: "Chocolates e sumo" },
                        { img: "img/lanche_batatas.jpg", alt: "Batatas fritas e refrigerante", valor: "Fritos e refrigerante" }
                    ],
                    correta: "Sandes, fruta e água"
                },
                {
                    id: 109,
                    tipo: "lacuna",
                    pergunta: "Depois de usar a sanita devo usar papel higiénico e descarregar o ___.",
                    audio: "audios/n1_q09.mp3",
                    dica: { tipo: "50-50", texto: "É o botão ou puxador que liberta a água na sanita." },
                    opcoes: ["autoclismo", "lavatório", "chuveiro", "espelho"],
                    correta: "autoclismo"
                },
                {
                    id: 110,
                    tipo: "opcoes-imagem",
                    pergunta: "O que deves levar na mochila para as aulas de natação?",
                    audio: "audios/n1_q10.mp3",
                    dica: { tipo: "50-50", texto: "Serve para proteger os olhos dentro de água!" },
                    opcoesImagem: [
                        { img: "img/oculos_natacao.jpg", alt: "Óculos de natação", valor: "Óculos de natação" },
                        { img: "img/pantufas_quarto.jpg", alt: "Pantufas de quarto", valor: "Pantufas de quarto" },
                        { img: "img/chapeu_pano.jpg", alt: "Chapéu de sol", valor: "Chapéu de sol" },
                        { img: "img/botas_neve.jpg", alt: "Botas de inverno", valor: "Botas de inverno" }
                    ],
                    correta: "Óculos de natação"
                },
                {
                    id: 111,
                    tipo: "dupla-opcao",
                    pergunta: "O menino está a passar muito frio junto ao mar sem casaco.\nEsta situação é saudável?",
                    audio: "audios/n1_q11.mp3",
                    imagemPergunta: "img/menino_com_frio.jpg",
                    dica: { tipo: "highlight", texto: "Não proteger o corpo do frio pode deixar-nos doentes!" },
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 112,
                    tipo: "opcoes-texto",
                    pergunta: "O que deves comer só de <span class='destaque-fundo'>vez em quando</span> para manteres os dentes saudáveis?",
                    audio: "audios/n1_q12.mp3",
                    dica: { tipo: "50-50", texto: "Alimentos com muito açúcar provocam cáries nos dentes." },
                    opcoes: ["Bolos e rebuçados", "Maçãs e peras", "Sopa de legumes", "Pão e queijo"],
                    correta: "Bolos e rebuçados"
                },
                {
                    id: 113,
                    tipo: "ordenar",
                    pergunta: "Ordena a rotina de higiene da manhã antes de ir para a escola.",
                    audio: "audios/n1_q13.mp3",
                    dica: { tipo: "highlight", texto: "Primeiro vestimos a roupa lavada, tomamos o pequeno-almoço e no fim lavamos os dentes!" },
                    itens: [
                        { texto: "Vestir roupa lavada", img: "img/vestir_roupa_lavada.jpg" },
                        { texto: "Tomar o pequeno-almoço", img: "img/pequeno_almoco.jpg" },
                        { texto: "Escovar os dentes", img: "img/escovar_dentes.jpg" }
                    ],
                    correta: "Vestir roupa lavada | Tomar o pequeno-almoço | Escovar os dentes"
                },
                {
                    id: 114,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas imagens mostra um hábito de higiene diário?",
                    audio: "audios/n1_q14.mp3",
                    dica: { tipo: "50-50", texto: "Manter o corpo limpo ajuda a evitar doenças." },
                    opcoesImagem: [
                        { img: "img/tomar_banho.jpg", alt: "Tomar banho", valor: "Tomar banho" },
                        { img: "img/ver_televisao.jpg", alt: "Ver televisão", valor: "Ver televisão" },
                        { img: "img/jogar_videojogos.jpg", alt: "Jogar consola", valor: "Jogar consola" }
                    ],
                    correta: "Tomar banho"
                },
                {
                    id: 115,
                    tipo: "dupla-opcao",
                    pergunta: "A menina vai dormir vestida com um pijama limpo e confortável.\nEstá certo?",
                    audio: "audios/n1_q15.mp3",
                    imagemPergunta: "img/menina_pijama.jpg",
                    dica: { tipo: "highlight", texto: "O pijama é a roupa ideal para descansar bem durante a noite!" },
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 116,
                    tipo: "lacuna",
                    pergunta: "Para seres saudável deves fazer uma alimentação completa, equilibrada e ___.",
                    audio: "audios/n1_q16.mp3",
                    dica: { tipo: "50-50", texto: "Significa comer vários tipos de alimentos diferentes." },
                    opcoes: ["variada", "açucarada", "salgada", "repetida"],
                    correta: "variada"
                },
                {
                    id: 117,
                    tipo: "opcoes-imagem",
                    pergunta: "Que vestuário deves usar na aula de Educação Física?",
                    audio: "audios/n1_q17.mp3",
                    dica: { tipo: "50-50", texto: "Precisas de roupa leve e sapatilhas para correr e saltar!" },
                    opcoesImagem: [
                        { img: "img/roupa_desporto.jpg", alt: "Fato de treino e sapatilhas", valor: "Fato de treino" },
                        { img: "img/pijama_dormir.jpg", alt: "Pijama", valor: "Pijama" },
                        { img: "img/casaco_inverno_pesado.jpg", alt: "Casaco pesado e cachecol", valor: "Casaco de neve" }
                    ],
                    correta: "Fato de treino"
                },
                {
                    id: 118,
                    tipo: "opcoes-texto",
                    pergunta: "Quando deves lavar sempre as mãos com água e sabão?",
                    audio: "audios/n1_q18.mp3",
                    dica: { tipo: "highlight", texto: "As mãos tocam em muitos objetos e podem ter micróbios invisíveis!" },
                    opcoes: [
                        "Antes de comer e depois de ir à casa de banho",
                        "Apenas ao domingo antes de dormir",
                        "Só quando as mãos têm tinta"
                    ],
                    correta: "Antes de comer e depois de ir à casa de banho"
                },
                {
                    id: 119,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas crianças está a cuidar do seu cabelo?",
                    audio: "audios/n1_q19.mp3",
                    dica: { tipo: "highlight", texto: "Pentear o cabelo todos os dias faz parte da higiene pessoal!" },
                    opcoesImagem: [
                        { img: "img/pentear_cabelo.jpg", alt: "Pentear o cabelo", valor: "Pentear o cabelo" },
                        { img: "img/cortar_unhas.jpg", alt: "Cortar as unhas", valor: "Cortar as unhas" },
                        { img: "img/lavar_maos.jpg", alt: "Lavar as mãos", valor: "Lavar as mãos" }
                    ],
                    correta: "Pentear o cabelo"
                },
                {
                    id: 120,
                    tipo: "dupla-opcao",
                    pergunta: "Cortar e manter as unhas limpas ajuda a evitar a acumulação de sujidade.",
                    audio: "audios/n1_q20.mp3",
                    imagemPergunta: "img/cortar_unhas.jpg",
                    dica: "Debaixo das unhas compridas acumulam-se micróbios.",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                }
            ]
        },

        /* ==================================================================
           NÍVEL 2: CUIDAR DE MIM E DOS OUTROS (20 QUESTÕES)
           ================================================================== */
        {
            id: 2,
            titulo: "Cuidar de Mim e dos Outros",
            subtitulo: "Convivência, saúde e ambiente",
            corClasse: "bg-azul",
            icone: "img/icon_nivel2.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 201,
                    tipo: "dupla-opcao",
                    pergunta: "O menino ajudou o colega em cadeira de rodas a apanhar o lápis do chão.\nEsta atitude está certa ou errada?",
                    audio: "audios/n2_q01.mp3",
                    imagemPergunta: "img/ajudar_colega_cadeira.jpg",
                    dica: { tipo: "highlight", texto: "Ajudar os colegas torna a escola melhor para todos!" },
                    opcoes: ["Certa", "Errada"],
                    correta: "Certa"
                },
                {
                    id: 202,
                    tipo: "dupla-opcao",
                    pergunta: "O rapaz pôs o pé à frente da colega e fê-la cair no corredor.\nEsta atitude está certa ou errada?",
                    audio: "audios/n2_q02.mp3",
                    imagemPergunta: "img/fazer_cair_colega.jpg",
                    dica: { tipo: "highlight", texto: "Magoar os outros nunca é brincadeira!" },
                    opcoes: ["Certa", "Errada"],
                    correta: "Errada"
                },
                {
                    id: 203,
                    tipo: "opcoes-imagem",
                    pergunta: "O que deves fazer quando estás com febre e doente?",
                    audio: "audios/n2_q03.mp3",
                    dica: { tipo: "50-50", texto: "Assim recuperas mais depressa e não contagias os teus colegas!" },
                    opcoesImagem: [
                        { img: "img/ficar_casa_doente.jpg", alt: "Ficar em casa a descansar", valor: "Ficar em casa" },
                        { img: "img/ir_escola_doente.jpg", alt: "Ir para a escola com febre", valor: "Ir para a escola" },
                        { img: "img/correr_chuva.jpg", alt: "Ir brincar à chuva", valor: "Brincar à chuva" }
                    ],
                    correta: "Ficar em casa"
                },
                {
                    id: 204,
                    tipo: "opcoes-imagem",
                    pergunta: "Como deves agir na sala de aula quando queres falar?",
                    audio: "audios/n2_q04.mp3",
                    dica: { tipo: "50-50", texto: "É uma regra importante para todos se ouvirem!" },
                    opcoesImagem: [
                        { img: "img/levantar_dedo_aula.jpg", alt: "Levantar o dedo e esperar", valor: "Levantar o dedo" },
                        { img: "img/gritar_aula.jpg", alt: "Gritar por cima dos colegas", valor: "Gritar na sala" },
                        { img: "img/correr_sala.jpg", alt: "Correr entre as mesas", valor: "Correr na sala" }
                    ],
                    correta: "Levantar o dedo"
                },
                {
                    id: 205,
                    tipo: "lacuna",
                    pergunta: "Para nos protegermos de doenças graves devemos ter em dia as nossas ___.",
                    audio: "audios/n2_q05.mp3",
                    dica: { tipo: "50-50", texto: "São dadas no centro de saúde pelo enfermeiro ou médico." },
                    opcoes: ["vacinas", "brincadeiras", "sapatilhas", "mochilas"],
                    correta: "vacinas"
                },
                {
                    id: 206,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas imagens mostra crianças a ajudar a manter o planeta limpo?",
                    audio: "audios/n2_q06.mp3",
                    dica: { tipo: "50-50", texto: "Separar o lixo nos ecopontos protege a natureza!" },
                    opcoesImagem: [
                        { img: "img/separar_lixo_ecoponto.jpg", alt: "Colocar lixo no ecoponto", valor: "Usar os ecopontos" },
                        { img: "img/lixo_chao_parque.jpg", alt: "Deitar lixo para o chão", valor: "Deitar lixo no chão" },
                        { img: "img/lixo_praia.jpg", alt: "Deixar garrafas na areia", valor: "Sujar a praia" },
                        { img: "img/estragar_plantas.jpg", alt: "Arrancar flores do jardim", valor: "Estragar plantas" }
                    ],
                    correta: "Usar os ecopontos"
                },
                {
                    id: 207,
                    tipo: "dupla-opcao",
                    pergunta: "As duas meninas estão a partilhar os seus brinquedos no recreio.\nEsta atitude contribui para o bem-estar de todos?",
                    audio: "audios/n2_q07.mp3",
                    imagemPergunta: "img/partilhar_brinquedos.jpg",
                    dica: { tipo: "highlight", texto: "Partilhar e respeitar os amigos faz todos mais felizes!" },
                    opcoes: ["Sim", "Não"],
                    correta: "Sim"
                },
                {
                    id: 208,
                    tipo: "ordenar",
                    pergunta: "Ordena os passos para reciclar uma garrafa de plástico vazia.",
                    audio: "audios/n2_q08.mp3",
                    dica: { tipo: "highlight", texto: "Primeiro esvaziamos e espalmamos a garrafa, depois procuramos o ecoponto amarelo!" },
                    itens: [
                        { texto: "Esvaziar e espalmar a garrafa", img: "img/espalmar_garrafa.jpg" },
                        { texto: "Ir até aos ecopontos", img: "img/ir_ecopontos.jpg" },
                        { texto: "Colocar no ecoponto amarelo", img: "img/ecoponto_amarelo.jpg" }
                    ],
                    correta: "Esvaziar e espalmar a garrafa | Ir até aos ecopontos | Colocar no ecoponto amarelo"
                },
                {
                    id: 209,
                    tipo: "opcoes-texto",
                    pergunta: "Por que é importante ter as vacinas em dia?",
                    audio: "audios/n2_q09.mp3",
                    imagemPergunta: "img/tomar_vacina.jpg",
                    dica: { tipo: "50-50", texto: "As vacinas protegem a nossa saúde e a das pessoas à nossa volta." },
                    opcoes: [
                        "Para evitar doenças e proteger todos",
                        "Para não precisar de tomar banho",
                        "Para poder comer muitos doces"
                    ],
                    correta: "Para evitar doenças e proteger todos"
                },
                {
                    id: 210,
                    tipo: "opcoes-imagem",
                    pergunta: "Vês lixo espalhado na areia da praia.\nQual é a atitude correta?",
                    audio: "audios/n2_q10.mp3",
                    dica: { tipo: "highlight", texto: "Recolher o lixo evita que vá parar ao mar e magoe os animais!" },
                    opcoesImagem: [
                        { img: "img/limpar_lixo_praia.jpg", alt: "Apanhar o lixo para um saco", valor: "Apanhar o lixo" },
                        { img: "img/enterrar_lixo_areia.jpg", alt: "Esconder o lixo na areia", valor: "Esconder na areia" },
                        { img: "img/atirar_lixo_mar.jpg", alt: "Atirar o lixo para o mar", valor: "Atirar para o mar" }
                    ],
                    correta: "Apanhar o lixo"
                },
                {
                    id: 211,
                    tipo: "lacuna",
                    pergunta: "O bem-estar dos outros também depende de ti, por isso deves respeitar e ___.",
                    audio: "audios/n2_q11.mp3",
                    dica: { tipo: "50-50", texto: "Significa dividir brinquedos e materiais com os colegas." },
                    opcoes: ["partilhar", "empurrar", "gritar", "esconder"],
                    correta: "partilhar"
                },
                {
                    id: 212,
                    tipo: "dupla-opcao",
                    pergunta: "Deixar um colega sozinho e triste no recreio sem o deixar brincar é uma boa atitude?",
                    audio: "audios/n2_q12.mp3",
                    imagemPergunta: "img/colega_excluido.jpg",
                    dica: "Devemos incluir todos nas brincadeiras!",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 213,
                    tipo: "opcoes-texto",
                    pergunta: "Em que ecoponto deves colocar um jornal velho ou uma caixa de cartão?",
                    audio: "audios/n2_q13.mp3",
                    dica: { tipo: "50-50", texto: "O ecoponto do papel tem a cor do céu e do mar!" },
                    opcoes: ["Ecoponto azul", "Ecoponto verde", "Ecoponto amarelo", "Ecoponto vermelho"],
                    correta: "Ecoponto azul"
                },
                {
                    id: 214,
                    tipo: "opcoes-imagem",
                    pergunta: "Um colega caiu no recreio e magoou-se.\nO que deves fazer?",
                    audio: "audios/n2_q14.mp3",
                    dica: { tipo: "50-50", texto: "Ajudar o colega e avisar um adulto da escola é o mais seguro!" },
                    opcoesImagem: [
                        { img: "img/ajudar_colega_caiu.jpg", alt: "Ajudar e chamar um adulto", valor: "Ajudar e chamar um adulto" },
                        { img: "img/rir_colega_caiu.jpg", alt: "Rir do colega", valor: "Rir do colega" },
                        { img: "img/ignorar_colega.jpg", alt: "Fingir que não viu", valor: "Fingir que não viu" }
                    ],
                    correta: "Ajudar e chamar um adulto"
                },
                {
                    id: 215,
                    tipo: "ordenar",
                    pergunta: "Ordena o que acontece quando ficas doente em casa.",
                    audio: "audios/n2_q15.mp3",
                    dica: { tipo: "highlight", texto: "Primeiro avisamos os pais, depois vamos ao médico ou descansamos e só voltamos à escola quando estivermos bem!" },
                    itens: [
                        { texto: "Avisar os pais que te sentes mal", img: "img/avisar_pais_doente.jpg" },
                        { texto: "Descansar e tomar os medicamentos", img: "img/ficar_casa_doente.jpg" },
                        { texto: "Regressar à escola já curado", img: "img/regressar_escola_bem.jpg" }
                    ],
                    correta: "Avisar os pais que te sentes mal | Descansar e tomar os medicamentos | Regressar à escola já curado"
                },
                {
                    id: 216,
                    tipo: "dupla-opcao",
                    pergunta: "Cumprimentar os professores, funcionários e colegas com educação melhora o ambiente da escola.",
                    audio: "audios/n2_q16.mp3",
                    imagemPergunta: "img/cumprimentar_escola.jpg",
                    dica: { tipo: "highlight", texto: "Dizer 'Bom dia' e 'Obrigado' mostra respeito pelos outros!" },
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 217,
                    tipo: "opcoes-texto",
                    pergunta: "Qual destas ações ajuda a poupar água em casa e na escola?",
                    audio: "audios/n2_q17.mp3",
                    dica: { tipo: "50-50", texto: "Não precisamos da água a correr enquanto ensaboamos as mãos ou escovamos os dentes." },
                    opcoes: [
                        "Fechar a torneira enquanto escovo os dentes",
                        "Deixar a torneira aberta enquanto brinco",
                        "Puxar o autoclismo várias vezes sem precisar"
                    ],
                    correta: "Fechar a torneira enquanto escovo os dentes"
                },
                {
                    id: 218,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas atitudes mostra respeito pelas regras da sala de aula?",
                    audio: "audios/n2_q18.mp3",
                    dica: { tipo: "highlight", texto: "Ouvir com atenção quando o professor explica ajuda todos a aprender!" },
                    opcoesImagem: [
                        { img: "img/ouvir_professora.jpg", alt: "Ouvir a professora com atenção", valor: "Ouvir com atenção" },
                        { img: "img/atirar_avioes_papel.jpg", alt: "Atirar aviões de papel na aula", valor: "Atirar papéis" },
                        { img: "img/riscar_mesa.jpg", alt: "Riscar a mesa da escola", valor: "Riscar a mesa" }
                    ],
                    correta: "Ouvir com atenção"
                },
                {
                    id: 219,
                    tipo: "lacuna",
                    pergunta: "Na escola, na rua e em casa devemos respeitar as ___ de convivência.",
                    audio: "audios/n2_q19.mp3",
                    dica: { tipo: "50-50", texto: "São combinados que ajudam todos a viver em harmonia." },
                    opcoes: ["regras", "paredes", "nuvens", "pedras"],
                    correta: "regras"
                },
                {
                    id: 220,
                    tipo: "dupla-opcao",
                    pergunta: "Arrumar os materiais e os brinquedos depois de os usar ajuda os outros e mantém o espaço organizado.",
                    audio: "audios/n2_q20.mp3",
                    imagemPergunta: "img/arrumar_brinquedos.jpg",
                    dica: "Cada coisa no seu lugar evita quedas e facilita a próxima brincadeira!",
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                }
            ]
        },

        /* ==================================================================
           NÍVEL 3: SEMPRE EM SEGURANÇA! (20 QUESTÕES)
           ================================================================== */
        {
            id: 3,
            titulo: "Sempre em Segurança!",
            subtitulo: "Em casa, na rua e na escola",
            corClasse: "bg-laranja",
            icone: "img/icon_nivel3.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 301,
                    tipo: "lacuna",
                    pergunta: "Em caso de acidente ou emergência médica devemos ligar para o ___.",
                    audio: "audios/n3_q01.mp3",
                    dica: { tipo: "50-50", texto: "É o número europeu de emergência médica: tem três algarismos e começa por 11..." },
                    opcoes: ["112", "115", "118", "100"],
                    correta: "112"
                },
                {
                    id: 302,
                    tipo: "opcoes-texto",
                    pergunta: "Observa o semáforo dos peões (boneco vermelho). Para quem é seguro avançar?",
                    audio: "audios/n3_q02.mp3",
                    imagemPergunta: "img/semaforo_peoes_vermelho.jpg",
                    dica: { tipo: "50-50", texto: "Quando o boneco está vermelho, os peões têm de esperar no passeio!" },
                    opcoes: ["Para o carro", "Para os peões", "Para ambos ao mesmo tempo"],
                    correta: "Para o carro"
                },
                {
                    id: 303,
                    tipo: "dupla-opcao",
                    pergunta: "O menino está a tentar meter os dedos numa tomada elétrica.\nEste comportamento é seguro?",
                    audio: "audios/n3_q03.mp3",
                    imagemPergunta: "img/mexer_tomada.jpg",
                    dica: { tipo: "highlight", texto: "Nunca se mexe nas tomadas! Podes apanhar um choque elétrico muito perigoso." },
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 304,
                    tipo: "dupla-opcao",
                    pergunta: "O menino viaja no banco de trás do carro com o cinto de segurança bem apertado.\nEstá a cumprir as regras?",
                    audio: "audios/n3_q04.mp3",
                    imagemPergunta: "img/cinto_seguranca_carro.jpg",
                    dica: { tipo: "highlight", texto: "O cinto de segurança protege-nos em todas as viagens de carro!" },
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 305,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas imagens mostra uma atitude segura em casa?",
                    audio: "audios/n3_q05.mp3",
                    dica: { tipo: "50-50", texto: "As crianças devem manter distância do forno quente enquanto o adulto cozinha." },
                    opcoesImagem: [
                        { img: "img/longe_forno_quente.jpg", alt: "Ficar longe do forno quente", valor: "Ficar longe do forno" },
                        { img: "img/trepar_moveis_cozinha.jpg", alt: "Trepar aos armários da cozinha", valor: "Trepar aos armários" },
                        { img: "img/brincar_fosforos.jpg", alt: "Brincar com fósforos", valor: "Brincar com fósforos" },
                        { img: "img/saltar_sofa_janela.jpg", alt: "Subir para o sofá junto à janela", valor: "Subir junto à janela" }
                    ],
                    correta: "Ficar longe do forno"
                },
                {
                    id: 306,
                    tipo: "ordenar",
                    pergunta: "Ordena os passos para atravessar a rua em segurança na passadeira.",
                    audio: "audios/n3_q06.mp3",
                    dica: { tipo: "highlight", texto: "Primeiro paramos no passeio, depois olhamos para os dois lados e só atravessamos quando não vêm carros!" },
                    itens: [
                        { texto: "Parar junto à passadeira", img: "img/parar_passadeira.jpg" },
                        { texto: "Olhar para a esquerda e para a direita", img: "img/olhar_dois_lados.jpg" },
                        { texto: "Atravessar de mão dada sem correr", img: "img/atravessar_mao_dada.jpg" }
                    ],
                    correta: "Parar junto à passadeira | Olhar para a esquerda e para a direita | Atravessar de mão dada sem correr"
                },
                {
                    id: 307,
                    tipo: "opcoes-texto",
                    pergunta: "O que pode acontecer se uma criança brincar com fósforos ou isqueiros?",
                    audio: "audios/n3_q07.mp3",
                    imagemPergunta: "img/menina_fosforos.jpg",
                    dica: { tipo: "50-50", texto: "O fogo é muito perigoso e nunca é um brinquedo." },
                    opcoes: [
                        "Pode queimar-se ou provocar um incêndio",
                        "Pode apanhar uma constipação",
                        "Não acontece nada de mal"
                    ],
                    correta: "Pode queimar-se ou provocar um incêndio"
                },
                {
                    id: 308,
                    tipo: "dupla-opcao",
                    pergunta: "Os dois meninos estão a atravessar a passadeira a olhar para o telemóvel sem atenção à estrada.\nEstá certo?",
                    audio: "audios/n3_q08.mp3",
                    imagemPergunta: "img/passadeira_telemovel.jpg",
                    dica: { tipo: "highlight", texto: "Ao atravessar a rua devemos olhar sempre para a estrada e nunca para ecrãs!" },
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 309,
                    tipo: "opcoes-imagem",
                    pergunta: "Como deves circular de bicicleta na rua?",
                    audio: "audios/n3_q09.mp3",
                    dica: { tipo: "50-50", texto: "Usa sempre capacete e circula na ciclovia quando existir!" },
                    opcoesImagem: [
                        { img: "img/bicicleta_ciclovia_capacete.jpg", alt: "Na ciclovia e com capacete", valor: "Na ciclovia com capacete" },
                        { img: "img/bicicleta_sem_capacete_estrada.jpg", alt: "No meio dos carros sem capacete", valor: "No meio dos carros" },
                        { img: "img/bicicleta_sem_maos.jpg", alt: "A andar sem mãos no guiador", valor: "Sem mãos no guiador" }
                    ],
                    correta: "Na ciclovia com capacete"
                },
                {
                    id: 310,
                    tipo: "opcoes-texto",
                    pergunta: "Na escola, o que pode acontecer se correres ou saltares nas escadas?",
                    audio: "audios/n3_q10.mp3",
                    imagemPergunta: "img/correr_escadas_escola.jpg",
                    dica: { tipo: "highlight", texto: "As escadas devem ser descidas devagar e a segurar no corrimão!" },
                    opcoes: [
                        "Tropeçar, cair e magoar-se",
                        "Chegar mais depressa sem perigo",
                        "Ganhar uma medalha"
                    ],
                    correta: "Tropeçar, cair e magoar-se"
                },
                {
                    id: 311,
                    tipo: "dupla-opcao",
                    pergunta: "A menina anda de trotinete no passeio com o capacete bem colocado. Está a cumprir as regras de segurança?",
                    audio: "audios/n3_q11.mp3",
                    imagemPergunta: "img/trotinete_capacete.jpg",
                    dica: "O capacete protege a cabeça em caso de queda.",
                    opcoes: ["Sim", "Não"],
                    correta: "Sim"
                },
                {
                    id: 312,
                    tipo: "opcoes-imagem",
                    pergunta: "Onde deves caminhar quando vais a pé numa estrada sem passeio?",
                    audio: "audios/n3_q12.mp3",
                    dica: { tipo: "50-50", texto: "Caminha sempre pela berma, em fila e de frente para os carros que vêm!" },
                    opcoesImagem: [
                        { img: "img/caminhar_berma_fila.jpg", alt: "Pela berma em fila", valor: "Pela berma em fila" },
                        { img: "img/caminhar_meio_estrada.jpg", alt: "No meio da estrada", valor: "No meio da estrada" },
                        { img: "img/brincar_bola_estrada.jpg", alt: "A jogar à bola na estrada", valor: "A jogar na estrada" }
                    ],
                    correta: "Pela berma em fila"
                },
                {
                    id: 313,
                    tipo: "lacuna",
                    pergunta: "Na escola devemos evitar comportamentos ___ que podem provocar acidentes.",
                    audio: "audios/n3_q13.mp3",
                    dica: { tipo: "50-50", texto: "São atitudes arriscadas como empurrar ou correr nas escadas." },
                    opcoes: ["perigosos", "seguros", "calmos", "divertidos"],
                    correta: "perigosos"
                },
                {
                    id: 314,
                    tipo: "dupla-opcao",
                    pergunta: "Lutar e empurrar os colegas no recreio da escola é um comportamento certo ou errado?",
                    audio: "audios/n3_q14.mp3",
                    imagemPergunta: "img/lutar_recreio.jpg",
                    dica: { tipo: "highlight", texto: "Empurrar pode provocar quedas graves e partir um braço ou uma perna!" },
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 315,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual é a maneira mais segura de uma criança pequena atravessar a rua?",
                    audio: "audios/n3_q15.mp3",
                    dica: { tipo: "highlight", texto: "Na passadeira e sempre de mão dada com um adulto!" },
                    opcoesImagem: [
                        { img: "img/atravessar_mao_dada.jpg", alt: "Na passadeira de mão dada com adultos", valor: "De mão dada na passadeira" },
                        { img: "img/correr_entre_carros.jpg", alt: "A correr entre os carros estacionados", valor: "Correr entre os carros" },
                        { img: "img/atravessar_fora_passadeira.jpg", alt: "Fora da passadeira a correr", valor: "Fora da passadeira" }
                    ],
                    correta: "De mão dada na passadeira"
                },
                {
                    id: 316,
                    tipo: "opcoes-texto",
                    pergunta: "O que significa o símbolo amarelo com um raio junto a um quadro elétrico?",
                    audio: "audios/n3_q16.mp3",
                    imagemPergunta: "img/sinal_perigo_eletricidade.jpg",
                    dica: { tipo: "50-50", texto: "Avisa que há eletricidade e risco de choque!" },
                    opcoes: [
                        "Perigo de choque elétrico",
                        "Proibido comer aqui",
                        "Zona de brincadeira"
                    ],
                    correta: "Perigo de choque elétrico"
                },
                {
                    id: 317,
                    tipo: "ordenar",
                    pergunta: "Ordena o que deves fazer se assistires a um acidente em casa.",
                    audio: "audios/n3_q17.mp3",
                    dica: { tipo: "highlight", texto: "Primeiro mantém a calma e chama um adulto; se for preciso, liga-se para o 112!" },
                    itens: [
                        { texto: "Manter a calma e não mexer no perigo", img: "img/manter_calma.jpg" },
                        { texto: "Chamar logo um adulto", img: "img/chamar_adulto.jpg" },
                        { texto: "Ligar para o 112 se houver feridos", img: "img/telemovel_112.jpg" }
                    ],
                    correta: "Manter a calma e não mexer no perigo | Chamar logo um adulto | Ligar para o 112 se houver feridos"
                },
                {
                    id: 318,
                    tipo: "dupla-opcao",
                    pergunta: "Brincar com a bola mesmo junto à estrada onde passam carros é uma atitude perigosa.",
                    audio: "audios/n3_q18.mp3",
                    imagemPergunta: "img/bola_junto_estrada.jpg",
                    dica: "A bola pode rolar para a estrada e a criança correr atrás dela sem ver os carros!",
                    opcoes: ["Sim", "Não"],
                    correta: "Sim"
                },
                {
                    id: 319,
                    tipo: "opcoes-texto",
                    pergunta: "Como deves sentar-te na cadeira da sala de aula para proteger as tuas costas?",
                    audio: "audios/n3_q19.mp3",
                    dica: { tipo: "50-50", texto: "Não te baloices na cadeira e apoia bem as costas no encosto." },
                    opcoes: [
                        "Com as costas direitas e os pés no chão",
                        "A baloiçar a cadeira para trás",
                        "De joelhos em cima da cadeira"
                    ],
                    correta: "Com as costas direitas e os pés no chão"
                },
                {
                    id: 320,
                    tipo: "opcoes-imagem",
                    pergunta: "Para que número deves ligar em caso de emergência médica?",
                    audio: "audios/n3_q20.mp3",
                    dica: { tipo: "highlight", texto: "Procura o telemóvel que mostra o número 112!" },
                    opcoesImagem: [
                        { img: "img/telemovel_112.jpg", alt: "Telemóvel com 112", valor: "112" },
                        { img: "img/telemovel_115.jpg", alt: "Telemóvel com 115", valor: "115" },
                        { img: "img/telemovel_118.jpg", alt: "Telemóvel com 118", valor: "118" }
                    ],
                    correta: "112"
                }
            ]
        },

        /* ==================================================================
           NÍVEL 4: PRAIA E PISCINA SEGURAS (20 QUESTÕES)
           ================================================================== */
        {
            id: 4,
            titulo: "Praia e Piscina Seguras",
            subtitulo: "Bandeiras e símbolos aquáticos",
            corClasse: "bg-turquesa",
            icone: "img/icon_nivel4.svg",
            numQuestoes: 10,
            perguntas: [
                {
                    id: 401,
                    tipo: "opcoes-imagem",
                    pergunta: "O mar está calmo e o banho é permitido. Qual é a bandeira que deve estar hasteada?",
                    audio: "audios/n4_q01.mp3",
                    dica: { tipo: "50-50", texto: "Tal como nos semáforos, esta cor significa que podes avançar com segurança!" },
                    opcoesImagem: [
                        { img: "img/bandeira_verde.jpg", alt: "Bandeira verde", valor: "Bandeira verde" },
                        { img: "img/bandeira_amarela.jpg", alt: "Bandeira amarela", valor: "Bandeira amarela" },
                        { img: "img/bandeira_vermelha.jpg", alt: "Bandeira vermelha", valor: "Bandeira vermelha" },
                        { img: "img/bandeira_xadrez.jpg", alt: "Bandeira axadrezada", valor: "Bandeira axadrezada" }
                    ],
                    correta: "Bandeira verde"
                },
                {
                    id: 402,
                    tipo: "opcoes-imagem",
                    pergunta: "O mar tem ondas gigantes e muito perigosas. Qual é a bandeira que proíbe entrar na água?",
                    audio: "audios/n4_q02.mp3",
                    dica: { tipo: "highlight", texto: "É a cor do perigo e de parar!" },
                    opcoesImagem: [
                        { img: "img/bandeira_vermelha.jpg", alt: "Bandeira vermelha", valor: "Bandeira vermelha" },
                        { img: "img/bandeira_verde.jpg", alt: "Bandeira verde", valor: "Bandeira verde" },
                        { img: "img/bandeira_amarela.jpg", alt: "Bandeira amarela", valor: "Bandeira amarela" }
                    ],
                    correta: "Bandeira vermelha"
                },
                {
                    id: 403,
                    tipo: "opcoes-texto",
                    pergunta: "O que significa este símbolo que encontramos nas praias e piscinas?",
                    audio: "audios/n4_q03.mp3",
                    imagemPergunta: "img/simbolo_proibido_mergulhar.jpg",
                    dica: { tipo: "50-50", texto: "O círculo vermelho com um traço indica uma proibição: não saltes de cabeça!" },
                    opcoes: ["Proibido mergulhar", "Obrigatório mergulhar", "Proibido correr"],
                    correta: "Proibido mergulhar"
                },
                {
                    id: 404,
                    tipo: "opcoes-texto",
                    pergunta: "O que indica este símbolo azul à entrada da piscina?",
                    audio: "audios/n4_q04.mp3",
                    imagemPergunta: "img/simbolo_tomar_duche.jpg",
                    dica: { tipo: "highlight", texto: "Os sinais azuis redondos indicam uma obrigação para manter a água limpa!" },
                    opcoes: [
                        "Obrigatório tomar duche antes de entrar",
                        "Proibido tomar banho",
                        "Proibido nadar"
                    ],
                    correta: "Obrigatório tomar duche antes de entrar"
                },
                {
                    id: 405,
                    tipo: "dupla-opcao",
                    pergunta: "O menino está a correr à volta da piscina atrás de uma bola. Este comportamento é seguro?",
                    audio: "audios/n4_q05.mp3",
                    imagemPergunta: "img/correr_piscina_bola.jpg",
                    dica: { tipo: "highlight", texto: "O chão à volta da piscina está molhado e escorregadio: podes cair!" },
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 406,
                    tipo: "opcoes-imagem",
                    pergunta: "Que símbolo indica que é PROIBIDO correr junto à piscina?",
                    audio: "audios/n4_q06.mp3",
                    dica: { tipo: "50-50", texto: "Procura o círculo vermelho com uma pessoa a correr riscada." },
                    opcoesImagem: [
                        { img: "img/simbolo_proibido_correr.jpg", alt: "Proibido correr", valor: "Proibido correr" },
                        { img: "img/simbolo_proibido_nadar.jpg", alt: "Proibido nadar", valor: "Proibido nadar" },
                        { img: "img/simbolo_proibido_mergulhar.jpg", alt: "Proibido mergulhar", valor: "Proibido mergulhar" },
                        { img: "img/simbolo_tomar_duche.jpg", alt: "Tomar duche", valor: "Tomar duche" }
                    ],
                    correta: "Proibido correr"
                },
                {
                    id: 407,
                    tipo: "opcoes-texto",
                    pergunta: "Quando está hasteada a bandeira AMARELA na praia, o que podes fazer?",
                    audio: "audios/n4_q07.mp3",
                    imagemPergunta: "img/bandeira_amarela.jpg",
                    dica: { tipo: "50-50", texto: "Com bandeira amarela não se pode nadar, mas podes molhar os pés junto à areia." },
                    opcoes: [
                        "Andar à beira-mar sem nadar",
                        "Nadar para longe da areia",
                        "Mergulhar nas ondas grandes"
                    ],
                    correta: "Andar à beira-mar sem nadar"
                },
                {
                    id: 408,
                    tipo: "opcoes-texto",
                    pergunta: "O que significa a bandeira axadrezada (aos quadrados pretos e brancos) na praia?",
                    audio: "audios/n4_q08.mp3",
                    imagemPergunta: "img/bandeira_xadrez.jpg",
                    dica: { tipo: "50-50", texto: "Indica que o nadador-salvador se ausentou temporariamente do posto." },
                    opcoes: [
                        "Praia temporariamente sem vigilância",
                        "Corrida de barcos na praia",
                        "Mar completamente seguro"
                    ],
                    correta: "Praia temporariamente sem vigilância"
                },
                {
                    id: 409,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas bandeiras delimita a zona reservada apenas a banhistas?",
                    audio: "audios/n4_q09.mp3",
                    dica: { tipo: "highlight", texto: "Tem duas cores: vermelha em cima e amarela em baixo!" },
                    opcoesImagem: [
                        { img: "img/bandeira_vermelha_amarela.jpg", alt: "Bandeira vermelha e amarela", valor: "Bandeira vermelha e amarela" },
                        { img: "img/bandeira_verde.jpg", alt: "Bandeira verde", valor: "Bandeira verde" },
                        { img: "img/bandeira_xadrez.jpg", alt: "Bandeira axadrezada", valor: "Bandeira axadrezada" }
                    ],
                    correta: "Bandeira vermelha e amarela"
                },
                {
                    id: 410,
                    tipo: "ordenar",
                    pergunta: "Ordena os cuidados a ter quando chegas à piscina:",
                    audio: "audios/n4_q10.mp3",
                    dica: { tipo: "highlight", texto: "Antes de entrar na água tomamos duche e entramos sempre pelas escadas sem correr!" },
                    itens: [
                        { texto: "Tomar duche antes de entrar", img: "img/tomar_duche_piscina.jpg" },
                        { texto: "Caminhar devagar sem correr", img: "img/caminhar_piscina.jpg" },
                        { texto: "Entrar na água pelas escadas", img: "img/entrar_escadas_piscina.jpg" }
                    ],
                    correta: "Tomar duche antes de entrar | Caminhar devagar sem correr | Entrar na água pelas escadas"
                },
                {
                    id: 411,
                    tipo: "opcoes-imagem",
                    pergunta: "Que símbolo significa que é PROIBIDO nadar naquele local?",
                    audio: "audios/n4_q11.mp3",
                    dica: { tipo: "50-50", texto: "Procura o círculo vermelho com uma pessoa a nadar riscada." },
                    opcoesImagem: [
                        { img: "img/simbolo_proibido_nadar.jpg", alt: "Proibido nadar", valor: "Proibido nadar" },
                        { img: "img/simbolo_proibido_correr.jpg", alt: "Proibido correr", valor: "Proibido correr" },
                        { img: "img/simbolo_tomar_duche.jpg", alt: "Tomar duche", valor: "Tomar duche" }
                    ],
                    correta: "Proibido nadar"
                },
                {
                    id: 412,
                    tipo: "dupla-opcao",
                    pergunta: "As crianças estão a brincar na água com bóia, perto da praia vigiada e com bandeira verde. Está seguro?",
                    audio: "audios/n4_q12.mp3",
                    imagemPergunta: "img/criancas_praia_bandeira_verde.jpg",
                    dica: { tipo: "highlight", texto: "Com bandeira verde e sempre vigiadas por adultos, as crianças brincam em segurança!" },
                    opcoes: ["Certo", "Errado"],
                    correta: "Certo"
                },
                {
                    id: 413,
                    tipo: "lacuna",
                    pergunta: "Na praia devemos escolher sempre zonas vigiadas pelo ___.",
                    audio: "audios/n4_q13.mp3",
                    dica: { tipo: "50-50", texto: "É o profissional que vigia os banhistas na praia." },
                    opcoes: ["nadador-salvador", "carteiro", "bombeiro", "polícia"],
                    correta: "nadador-salvador"
                },
                {
                    id: 414,
                    tipo: "dupla-opcao",
                    pergunta: "Mergulhar de cabeça numa piscina onde está o sinal de 'Proibido mergulhar' é seguro?",
                    audio: "audios/n4_q14.mp3",
                    imagemPergunta: "img/simbolo_proibido_mergulhar.jpg",
                    dica: "A água pode ser pouco profunda e podes bater com a cabeça no fundo!",
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 415,
                    tipo: "opcoes-texto",
                    pergunta: "Para te protegeres do sol na praia, o que deves fazer?",
                    audio: "audios/n4_q15.mp3",
                    dica: { tipo: "50-50", texto: "O sol nas horas de maior calor pode provocar queimaduras." },
                    opcoes: [
                        "Pôr protetor solar, usar chapéu e beber água",
                        "Ficar ao sol ao meio-dia sem chapéu",
                        "Não pôr protetor solar"
                    ],
                    correta: "Pôr protetor solar, usar chapéu e beber água"
                },
                {
                    id: 416,
                    tipo: "opcoes-imagem",
                    pergunta: "Qual destas imagens mostra uma praia com bandeira vermelha?",
                    audio: "audios/n4_q16.mp3",
                    dica: { tipo: "highlight", texto: "Com bandeira vermelha ninguém entra na água e as ondas são muito fortes!" },
                    opcoesImagem: [
                        { img: "img/praia_ondas_vermelha.jpg", alt: "Mar agitado e bandeira vermelha", valor: "Mar agitado" },
                        { img: "img/criancas_praia_bandeira_verde.jpg", alt: "Mar calmo e bandeira verde", valor: "Mar calmo" },
                        { img: "img/menina_beira_mar_amarela.jpg", alt: "À beira-mar com bandeira amarela", valor: "À beira-mar" }
                    ],
                    correta: "Mar agitado"
                },
                {
                    id: 417,
                    tipo: "lacuna",
                    pergunta: "Nas praias e nas piscinas há ___ que deves respeitar para te divertires em segurança.",
                    audio: "audios/n4_q17.mp3",
                    dica: { tipo: "50-50", texto: "São os sinais e as bandeiras que vemos junto à água." },
                    opcoes: ["símbolos", "brinquedos", "gelados", "baldes"],
                    correta: "símbolos"
                },
                {
                    id: 418,
                    tipo: "ordenar",
                    pergunta: "Ordena as bandeiras da praia da MAIS SEGURA para a MAIS PERIGOSA:",
                    audio: "audios/n4_q18.mp3",
                    dica: { tipo: "highlight", texto: "Começa na bandeira verde (banho permitido) e termina na vermelha (banho proibido)!" },
                    itens: [
                        { texto: "Bandeira verde", img: "img/bandeira_verde.jpg" },
                        { texto: "Bandeira amarela", img: "img/bandeira_amarela.jpg" },
                        { texto: "Bandeira vermelha", img: "img/bandeira_vermelha.jpg" }
                    ],
                    correta: "Bandeira verde | Bandeira amarela | Bandeira vermelha"
                },
                {
                    id: 419,
                    tipo: "dupla-opcao",
                    pergunta: "Uma criança que não sabe nadar deve entrar no mar sozinha sem adultos por perto.",
                    audio: "audios/n4_q19.mp3",
                    imagemPergunta: "img/crianca_sozinha_mar.jpg",
                    dica: { tipo: "highlight", texto: "As crianças devem estar sempre acompanhadas por um adulto junto à água!" },
                    opcoes: ["Certo", "Errado"],
                    correta: "Errado"
                },
                {
                    id: 420,
                    tipo: "opcoes-texto",
                    pergunta: "Por que razão não se deve correr na borda da piscina?",
                    audio: "audios/n4_q20.mp3",
                    dica: { tipo: "50-50", texto: "A água salpicada deixa o pavimento escorregadio." },
                    opcoes: [
                        "Porque o chão está molhado e podemos escorregar",
                        "Porque estraga a água da piscina",
                        "Porque faz barulho demais"
                    ],
                    correta: "Porque o chão está molhado e podemos escorregar"
                }
            ]
        }
    ]
};