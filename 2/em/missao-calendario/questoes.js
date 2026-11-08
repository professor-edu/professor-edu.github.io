/* =========================================================
   CONFIGURAÇÃO E CONTEÚDO DO JOGO (questoes.js)
   ========================================================= */
const CONFIG_JOGO = {
    // 1. Identificação do Jogo
    tituloModulo: "ESTUDO DO MEIO - 2.º ANO",
    subtituloMenu: "Escolhe um minijogo para começar!",

    // 2. Cores do Tema
    tema: {
        corPrimaria: "#2ed573",     /* Verde para Estudo do Meio */
        corSecundaria: "#26af5f",   /* Sombra / Bordas */
        corFundoCartao: "#f1fbf5"   /* Fundo suave */
    },

    // 3. Os Minijogos (4 Categorias com 20 questões cada)
    niveis: [
        {
            id: 1,
            titulo: "Dias da Semana",
            subtitulo: "Ordem dos 7 dias",
            corClasse: "bg-verde",
            icone: "img/dias_generico.png",
            numQuestoes: 10,
            perguntas: [
                {
                    pergunta: "Qual é o <span class='destaque-amarelo'>primeiro</span> dia da semana de aulas?",
                    audio: "audio/dias_q1.mp3",
                    imagemPergunta: "img/mochila_escola.png",
                    opcoes: ["Segunda-feira", "Domingo", "Sexta-feira", "Sábado"],
                    correta: "Segunda-feira",
                    dica: { 
                        texto: "Vem logo a seguir ao fim de semana, quando voltas à escola!",
                        imagem: "img/linha_tempo_ontem_hoje.png"
                    }
                },
                {
                    pergunta: "Qual é o dia que fica entre <span class='destaque-amarelo'>Terça-feira</span> e <span class='destaque-amarelo'>Quinta-feira</span>?",
                    audio: "audio/dias_q2.mp3",
                    imagemPergunta: "img/calendario_semana.png",
                    opcoes: ["Quarta-feira", "Sábado", "Segunda-feira", "Domingo"],
                    correta: "Quarta-feira",
                    dica: { 
                        tipo: "50-50",
                        texto: "Eliminámos duas opções incorretas para te ajudar!"
                    }
                },
                {
                    pergunta: "Quais são os dois dias que formam o <span class='destaque-fundo'>Fim de Semana</span>?",
                    audio: "audio/dias_q3.mp3",
                    imagemPergunta: "img/dias_generico.jpg",
                    opcoes: ["Sábado e Domingo", "Quinta e Sexta", "Segunda e Terça", "Quarta e Quinta"],
                    correta: "Sábado e Domingo",
                    dica: { 
                        tipo: "highlight",
                        texto: "Repara no botão que ficou destacado a verde!"
                    }
                },
                {
                    pergunta: "Qual é o <span class='destaque-amarelo'>último</span> dia da semana de aulas?",
                    audio: "audio/dias_q4.mp3",
                    imagemPergunta: "img/crianca_alegre_fim_aulas.png",
                    opcoes: ["Sexta-feira", "Quarta-feira", "Domingo", "Segunda-feira"],
                    correta: "Sexta-feira",
                    dica: { texto: "É o dia em que terminam as aulas e começa o descanso!" }
                },
                {
                    pergunta: "Qual é o dia que vem imediatamente <span class='destaque-texto-verde'>a seguir</span> à <span class='destaque-badge'>Quinta-feira</span>?",
                    audio: "audio/dias_q5.mp3",
                    imagemPergunta: "img/dias_generico.jpg",
                    opcoes: ["Sexta-feira", "Quarta-feira", "Sábado", "Terça-feira"],
                    correta: "Sexta-feira",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Qual é o dia que vem logo <span class='destaque-texto-vermelho'>antes</span> do <span class='destaque-badge'>Domingo</span>?",
                    audio: "audio/dias_q6.mp3",
                    imagemPergunta: "img/dias_generico.jpg",
                    opcoes: ["Sábado", "Sexta-feira", "Segunda-feira", "Quinta-feira"],
                    correta: "Sábado",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Quantos dias tem uma <span class='destaque-fundo'>semana inteira</span>?",
                    audio: "audio/dias_q7.mp3",
                    imagemPergunta: "img/dias_generico.png",
                    opcoes: ["7 dias", "5 dias", "10 dias", "12 dias"],
                    correta: "7 dias",
                    dica: { texto: "Conta todos os dias de Segunda a Domingo!" }
                },
                {
                    pergunta: "Quantos dias tem a <span class='destaque-amarelo'>semana de aulas</span> (dias úteis)?",
                    audio: "audio/dias_q8.mp3",
                    imagemPergunta: "img/brincar_aprender.jpg",
                    opcoes: ["5 dias", "7 dias", "2 dias", "6 dias"],
                    correta: "5 dias",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Se a semana no calendário começa no Domingo, qual é o <span class='destaque-texto-verde'>segundo</span> dia da semana?",
                    audio: "audio/dias_q9.mp3",
                    imagemPergunta: "img/dias_generico.png",
					opcoes: ["Segunda-feira", "Terça-feira", "Sábado", "Domingo"],
                    correta: "Segunda-feira",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Qual é o dia que fica entre a <span class='destaque-amarelo'>Segunda-feira</span> e a <span class='destaque-amarelo'>Quarta-feira</span>?",
                    audio: "audio/dias_q10.mp3",
                    imagemPergunta: "img/dias_generico.jpg",
                    opcoes: ["Terça-feira", "Quinta-feira", "Sábado", "Sexta-feira"],
                    correta: "Terça-feira",
                    dica: { texto: "É o 2.º dia da semana de aulas!" }
                },
                {
                    pergunta: "Em que dias da semana habitualmente <span class='destaque-amarelo'>não</span> vais à escola?",
                    audio: "audio/dias_q11.mp3",
                    imagemPergunta: "img/brincar_aprender.jpg",
					opcoes: ["Sábado e Domingo", "Segunda e Terça", "Quarta e Quinta", "Sexta e Sábado"],
                    correta: "Sábado e Domingo",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Qual é o dia da semana que vem a <span class='destaque-texto-verde'>seguir</span> ao <span class='destaque-amarelo'>Sábado</span>?",
                    audio: "audio/dias_q12.mp3",
                    imagemPergunta: "img/dias_generico.jpg",
                    opcoes: ["Domingo", "Segunda-feira", "Sexta-feira", "Quarta-feira"],
                    correta: "Domingo",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Se hoje é <span class='destaque-badge'>Quinta-feira</span>, qual é o dia de aulas que vem <span class='destaque-texto-verde'>a seguir</span>?",
                    audio: "audio/dias_q13.mp3",
                    imagemPergunta: "img/brincar_aprender.jpg",
					opcoes: ["Sexta-feira", "Sábado", "Quarta-feira", "Segunda-feira"],
                    correta: "Sexta-feira",
                    dica: { texto: "É o último dia de aulas da semana!" }
                },
                {
                    pergunta: "Qual é o meio da semana de aulas, ou seja, o <span class='destaque-amarelo'>3.º dia de aulas</span>?",
                    audio: "audio/dias_q14.mp3",
                    imagemPergunta: "img/brincar_aprender.jpg",
					opcoes: ["Quarta-feira", "Terça-feira", "Quinta-feira", "Sexta-feira"],
                    correta: "Quarta-feira",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Qual é o 4.º dia da semana de aulas?",
                    audio: "audio/dias_q15.mp3",
                    imagemPergunta: "img/dias_generico.jpg",
                    opcoes: ["Quinta-feira", "Quarta-feira", "Terça-feira", "Sexta-feira"],
                    correta: "Quinta-feira",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Uma <span class='destaque-texto-verde'>semana tem 7 dias</span>.</br>Se tirarmos o fim de semana, com quantos dias ficamos?",
                    audio: "audio/dias_q16.mp3",
                    opcoes: ["5 dias", "4 dias", "6 dias", "2 dias"],
                    correta: "5 dias",
                    dica: { texto: "Faz a conta: 7 menos 2!" }
                },
                {
                    pergunta: "Qual é o dia que vem imediatamente <span class='destaque-texto-vermelho'>antes</span> da <span class='destaque-amarelo'>Terça-feira</span>?",
                    audio: "audio/dias_q17.mp3",
                    imagemPergunta: "img/brincar_aprender.jpg",
					opcoes: ["Segunda-feira", "Domingo", "Quarta-feira", "Sábado"],
                    correta: "Segunda-feira",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Qual é o dia que fica entre <span class='destaque-amarelo'>Sexta-feira</span> e <span class='destaque-amarelo'>Domingo</span>?",
                    audio: "audio/dias_q18.mp3",
                    imagemPergunta: "img/praia_descanso.png",
                    opcoes: ["Sábado", "Quinta-feira", "Segunda-feira", "Terça-feira"],
                    correta: "Sábado",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Que dia da semana vem a seguir ao <span class='destaque-badge'>Domingo</span>?",
                    audio: "audio/dias_q19.mp3",
                    imagemPergunta: "img/mochila_escola.png",
                    opcoes: ["Segunda-feira", "Sábado", "Sexta-feira", "Terça-feira"],
                    correta: "Segunda-feira",
                    dica: { texto: "É o dia em que recomeça a semana de aulas!" }
                },
                {
                    pergunta: "Quantos dias de descanso temos no <span class='destaque-badge'>fim de semana</span>?",
                    audio: "audio/dias_q20.mp3",
                    imagemPergunta: "img/praia_descanso.png",
                    opcoes: ["2 dias", "1 dia", "3 dias", "5 dias"],
                    correta: "2 dias",
                    dica: { tipo: "50-50" }
                }
            ]
        },
        {
            id: 2,
            titulo: "Ontem, Hoje e Amanhã",
            subtitulo: "Noção do tempo",
            corClasse: "bg-azul",
            icone: "img/tempo_generico.png",
            numQuestoes: 10,
            perguntas: [
                {
                    pergunta: "Se HOJE é <span class='destaque-amarelo'>Quarta-feira</span>, que dia foi ONTEM?",
                    audio: "audio/tempo_q1.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Terça-feira", "Quinta-feira", "Sexta-feira", "Segunda-feira"],
                    correta: "Terça-feira",
                    dica: { texto: "Ontem é o dia que ficou para trás!" }
                },
                {
                    pergunta: "Se HOJE é <span class='destaque-amarelo'>Sexta-feira</span>, que dia será AMANHÃ?",
                    audio: "audio/tempo_q2.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Sábado", "Quinta-feira", "Domingo", "Quarta-feira"],
                    correta: "Sábado",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Se ONTEM foi <span class='destaque-amarelo'>Segunda-feira</span>, que dia é HOJE?",
                    audio: "audio/tempo_q3.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Terça-feira", "Domingo", "Quarta-feira", "Sexta-feira"],
                    correta: "Terça-feira",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Se AMANHÃ for <span class='destaque-amarelo'>Sábado</span>, que dia é HOJE?",
                    audio: "audio/tempo_q4.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Sexta-feira", "Domingo", "Quinta-feira", "Segunda-feira"],
                    correta: "Sexta-feira",
                    dica: { texto: "Hoje é o último dia de aulas antes do fim de semana!" }
                },
                {
                    pergunta: "Se HOJE é <span class='destaque-amarelo'>Domingo</span>, que dia será AMANHÃ?",
                    audio: "audio/tempo_q5.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Segunda-feira", "Sábado", "Sexta-feira", "Terça-feira"],
                    correta: "Segunda-feira",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Se HOJE é <span class='destaque-amarelo'>Terça-feira</span>, que dia foi ONTEM?",
                    audio: "audio/tempo_q6.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Segunda-feira", "Quarta-feira", "Domingo", "Quinta-feira"],
                    correta: "Segunda-feira",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Se ONTEM foi <span class='destaque-amarelo'>Sábado</span>, que dia é HOJE?",
                    audio: "audio/tempo_q7.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Domingo", "Sexta-feira", "Segunda-feira", "Quarta-feira"],
                    correta: "Domingo",
                    dica: { texto: "Hoje é o segundo dia do fim de semana!" }
                },
                {
                    pergunta: "Se AMANHÃ for <span class='destaque-badge'>Terça-feira</span>, que dia é HOJE?",
                    audio: "audio/tempo_q8.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Segunda-feira", "Quarta-feira", "Domingo", "Sábado"],
                    correta: "Segunda-feira",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Se HOJE é <span class='destaque-badge'>Quinta-feira</span>, que dia será AMANHÃ?",
                    audio: "audio/tempo_q9.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Sexta-feira", "Quarta-feira", "Sábado", "Terça-feira"],
                    correta: "Sexta-feira",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Se ONTEM foi <span class='destaque-badge'>Quarta-feira</span>, que dia é HOJE?",
                    audio: "audio/tempo_q10.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Quinta-feira", "Terça-feira", "Sexta-feira", "Sábado"],
                    correta: "Quinta-feira",
                    dica: { texto: "Pensa no dia que vem a seguir à Quarta-feira!" }
                },
                {
                    pergunta: "Se AMANHÃ é <span class='destaque-amarelo'>Segunda-feira</span>, que dia é HOJE?",
                    audio: "audio/tempo_q11.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Domingo", "Sábado", "Sexta-feira", "Terça-feira"],
                    correta: "Domingo",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Se HOJE é <span class='destaque-badge'>Sábado</span>, que dia foi ONTEM?",
                    audio: "audio/tempo_q12.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Sexta-feira", "Domingo", "Quinta-feira", "Quarta-feira"],
                    correta: "Sexta-feira",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Se ONTEM foi <span class='destaque-badge'>Domingo</span>, que dia será AMANHÃ?",
                    audio: "audio/tempo_q13.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Terça-feira", "Segunda-feira", "Quarta-feira", "Sábado"],
                    correta: "Terça-feira",
                    dica: { texto: "Se ontem foi Domingo, hoje é Segunda. Amanhã é..." }
                },
                {
                    pergunta: "Se HOJE é <span class='destaque-amarelo'>Segunda-feira</span>, que dia será AMANHÃ?",
                    audio: "audio/tempo_q14.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Terça-feira", "Domingo", "Quarta-feira", "Sexta-feira"],
                    correta: "Terça-feira",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Se AMANHÃ for <span class='destaque-badge'>Sexta-feira</span>, que dia foi ONTEM?",
                    audio: "audio/tempo_q15.mp3",
                    imagemPergunta: "img/tempo_generico.jpg",
                    opcoes: ["Quarta-feira", "Quinta-feira", "Terça-feira", "Sábado"],
                    correta: "Quarta-feira",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "O dia que <span class='destaque-texto-vermelho'>já passou</span> chama-se...",
                    audio: "audio/tempo_q16.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Ontem", "Amanhã", "Hoje", "Hoje à noite"],
                    correta: "Ontem",
                    dica: { texto: "Refere-se ao dia anterior!" }
                },
                {
                    pergunta: "O dia em que estamos a <span class='destaque-amarelo'>viver agora</span> chama-se...",
                    audio: "audio/tempo_q17.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Hoje", "Ontem", "Amanhã", "Anteontem"],
                    correta: "Hoje",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "O dia que <span class='destaque-texto-verde'>vai chegar a seguir</span> chama-se...",
                    audio: "audio/tempo_q18.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Amanhã", "Ontem", "Hoje", "Passado"],
                    correta: "Amanhã",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Se HOJE é <span class='destaque-badge'>Sexta-feira</span>, que dia foi ONTEM?",
                    audio: "audio/tempo_q19.mp3",
                    imagemPergunta: "img/linha_tempo_ontem_hoje.png",
                    opcoes: ["Quinta-feira", "Sábado", "Quarta-feira", "Domingo"],
                    correta: "Quinta-feira",
                    dica: { texto: "Pensa no dia antes de Sexta-feira!" }
                },
                {
                    pergunta: "Se ONTEM foi <span class='destaque-amarelo'>Quinta-feira</span>, que dia será AMANHÃ?",
                    audio: "audio/tempo_q20.mp3",
                    imagemPergunta: "img/tempo_generico.jpg",
                    opcoes: ["Sábado", "Sexta-feira", "Domingo", "Quarta-feira"],
                    correta: "Sábado",
                    dica: { tipo: "50-50" }
                }
            ]
        },
        {
            id: 3,
            titulo: "Meses do Ano",
            subtitulo: "A sequência",
            corClasse: "bg-turquesa",
            icone: "img/meses_generico.png",
            numQuestoes: 10,
            perguntas: [
                {
                    pergunta: "Qual é o <span class='destaque-amarelo'>primeiro</span> mês do ano?",
                    audio: "audio/meses_q1.mp3",
                    imagemPergunta: "img/ano_novo_janeiro.jpg",
                    opcoes: ["Janeiro", "Dezembro", "Março", "Agosto"],
                    correta: "Janeiro",
                    dica: { texto: "É o mês em que celebramos o Ano Novo!" }
                },
                {
                    pergunta: "Qual é o <span class='destaque-amarelo'>último</span> mês do ano?",
                    audio: "audio/meses_q2.mp3",
                    imagemPergunta: "img/natal_dezembro.jpg",
                    opcoes: ["Dezembro", "Janeiro", "Novembro", "Outubro"],
                    correta: "Dezembro",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Quantos meses tem um <span class='destaque-fundo'>ano inteiro</span>?",
                    audio: "audio/meses_q3.mp3",
                    imagemPergunta: "img/roda_12_meses.jpg",
                    opcoes: ["12 meses", "7 meses", "10 meses", "30 meses"],
                    correta: "12 meses",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Em que mês celebramos a época do <span class='destaque-texto-vermelho'>Natal</span>?",
                    audio: "audio/meses_q4.mp3",
                    imagemPergunta: "img/natal_dezembro.jpg",
                    opcoes: ["Dezembro", "Julho", "Maio", "Setembro"],
                    correta: "Dezembro",
                    dica: { texto: "É o 12.º e último mês do ano!" }
                },
                {
                    pergunta: "Qual é o mês que fica entre <span class='destaque-amarelo'>Janeiro</span> e <span class='destaque-amarelo'>Março</span>?",
                    audio: "audio/meses_q5.mp3",
                    imagemPergunta: "img/meses_generico.jpg",
                    opcoes: ["Fevereiro", "Abril", "Maio", "Junho"],
                    correta: "Fevereiro",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Qual é o mês conhecido por ser o mais <span class='destaque-fundo'>curto</span> do ano?",
                    audio: "audio/meses_q6.mp3",
                    imagemPergunta: "img/calendario_fevereiro.jpg",
                    opcoes: ["Fevereiro", "Agosto", "Janeiro", "Dezembro"],
                    correta: "Fevereiro",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Qual é o mês que vem imediatamente a seguir a <span class='destaque-texto-verde'>Abril</span>?",
                    audio: "audio/meses_q7.mp3",
                    imagemPergunta: "img/meses_generico.jpg",
                    opcoes: ["Maio", "Março", "Junho", "Julho"],
                    correta: "Maio",
                    dica: { texto: "É o 5.º mês do ano!" }
                },
                {
                    pergunta: "Em Portugal, em que mês costumam começar as <span class='destaque-amarelo'>férias grandes de Verão</span>?",
                    audio: "audio/meses_q8.mp3",
                    imagemPergunta: "img/praia_descanso.png",
                    opcoes: ["Julho", "Janeiro", "Novembro", "Fevereiro"],
                    correta: "Julho",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Qual é o <span class='destaque-texto-vermelho'>6.º mês</span> do ano (metade do ano)?",
                    audio: "audio/meses_q9.mp3",
                    imagemPergunta: "img/roda_12_meses.jpg",
                    opcoes: ["Junho", "Julho", "Maio", "Agosto"],
                    correta: "Junho",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Qual é o mês que vem imediatamente antes de <span class='destaque-texto-verde'>Outubro</span>?",
                    audio: "audio/meses_q10.mp3",
                    imagemPergunta: "img/meses_generico.jpg",
                    opcoes: ["Setembro", "Novembro", "Agosto", "Julho"],
                    correta: "Setembro",
                    dica: { texto: "É o mês do regresso às aulas!" }
                },
                {
                    pergunta: "Se o ano começa em Janeiro, qual é o <span class='destaque-amarelo'>segundo</span> mês?",
                    audio: "audio/meses_q11.mp3",
                    imagemPergunta: "img/meses_generico.jpg",
                    opcoes: ["Fevereiro", "Março", "Abril", "Maio"],
                    correta: "Fevereiro",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Em que mês recomeçam normalmente as <span class='destaque-fundo'>aulas</span> em Portugal?",
                    audio: "audio/meses_q12.mp3",
                    imagemPergunta: "img/mochila_escola.png",
                    opcoes: ["Setembro", "Janeiro", "Agosto", "Maio"],
                    correta: "Setembro",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Qual é o mês que fica entre <span class='destaque-texto-verde'>Outubro</span> e <span class='destaque-texto-verde'>Dezembro</span>?",
                    audio: "audio/meses_q13.mp3",
                    imagemPergunta: "img/meses_generico.jpg",
                    opcoes: ["Novembro", "Setembro", "Agosto", "Janeiro"],
                    correta: "Novembro",
                    dica: { texto: "É o 11.º mês do ano!" }
                },
                {
                    pergunta: "Qual é o mês do ano em que se festeja o <span class='destaque-badge'>Carnaval</span> em muitos anos?",
                    audio: "audio/meses_q14.mp3",
                    imagemPergunta: "img/brincar_aprender.jpg",
                    opcoes: ["Fevereiro", "Julho", "Outubro", "Dezembro"],
                    correta: "Fevereiro",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Qual é o mês que vem a seguir a <span class='destaque-fundo'>Agosto</span>?",
                    audio: "audio/meses_q15.mp3",
                    imagemPergunta: "img/meses_generico.jpg",
                    opcoes: ["Setembro", "Julho", "Outubro", "Novembro"],
                    correta: "Setembro",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Qual é o <span class='destaque-texto-vermelho'>3.º mês</span> do ano?",
                    audio: "audio/meses_q16.mp3",
                    imagemPergunta: "img/roda_12_meses.jpg",
                    opcoes: ["Março", "Fevereiro", "Abril", "Maio"],
                    correta: "Março",
                    dica: { texto: "Vem logo a seguir a Fevereiro!" }
                },
                {
                    pergunta: "Qual é o mês do ano em que se celebra o Dia da Liberdade (25 de Abril)?",
                    audio: "audio/meses_q17.mp3",
                    imagemPergunta: "img/brincar_aprender.jpg",
                    opcoes: ["Abril", "Maio", "Março", "Junho"],
                    correta: "Abril",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Qual é o mês que fica entre <span class='destaque-amarelo'>Maio</span> e <span class='destaque-amarelo'>Julho</span>?",
                    audio: "audio/meses_q18.mp3",
                    imagemPergunta: "img/roda_12_meses.jpg",
                    opcoes: ["Junho", "Agosto", "Abril", "Setembro"],
                    correta: "Junho",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Que mês vem imediatamente antes de <span class='destaque-texto-vermelho'>Janeiro</span>?",
                    audio: "audio/meses_q19.mp3",
                    imagemPergunta: "img/meses_generico.jpg",
                    opcoes: ["Dezembro", "Novembro", "Fevereiro", "Outubro"],
                    correta: "Dezembro",
                    dica: { texto: "É o último mês do ano anterior!" }
                },
                {
                    pergunta: "Quantos meses faltam para terminar o ano quando estamos em <span class='destaque-texto-verde'>Novembro</span>?",
                    audio: "audio/meses_q20.mp3",
                    imagemPergunta: "img/natal_dezembro.jpg",
                    opcoes: ["1 mês", "2 meses", "3 meses", "5 meses"],
                    correta: "1 mês",
                    dica: { tipo: "50-50" }
                }
            ]
        },
        {
            id: 4,
            titulo: "Estações do Ano e Calendário",
            subtitulo: "Estações do ano e datas",
            corClasse: "bg-roxo",
            icone: "img/calendario_pagina.png",
            numQuestoes: 10,
            perguntas: [
                {
                    pergunta: "Em que estação do ano faz mais <span class='destaque-amarelo'>calor</span> e vamos à praia?",
                    audio: "audio/estacoes_q1.mp3",
                    imagemPergunta: "img/estacao_verao.jpg",
                    opcoes: ["Verão", "Inverno", "Outono", "Primavera"],
                    correta: "Verão",
                    dica: { texto: "É a estação do sol brilhante e das férias grandes!" }
                },
                {
                    pergunta: "Em que estação do ano faz mais <span class='destaque-texto-vermelho'>frio</span> e vestimos casacos grossos?",
                    audio: "audio/estacoes_q2.mp3",
                    imagemPergunta: "img/estacao_inverno.jpg",
                    opcoes: ["Inverno", "Verão", "Primavera", "Outono"],
                    correta: "Inverno",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Em que estação do ano caem as <span class='destaque-fundo'>folhas secas das árvores</span>?",
                    audio: "audio/estacoes_q3.mp3",
                    imagemPergunta: "img/estacao_outono.jpg",
                    opcoes: ["Outono", "Primavera", "Verão", "Inverno"],
                    correta: "Outono",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Em que estação do ano nascem muitas <span class='destaque-texto-verde'>flores</span> e os campos ficam coloridos?",
                    audio: "audio/estacoes_q4.mp3",
                    imagemPergunta: "img/estacao_primavera.jpg",
                    opcoes: ["Primavera", "Inverno", "Outono", "Verão"],
                    correta: "Primavera",
                    dica: { texto: "É a estação da natureza a florir!" }
                },
                {
                    pergunta: "Quantas <span class='destaque-amarelo'>estações</span> tem um ano?",
                    audio: "audio/estacoes_q5.mp3",
                    imagemPergunta: "img/roda_4_estacoes.png",
                    opcoes: ["4 estações", "2 estações", "12 estações", "7 estações"],
                    correta: "4 estações",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Se no calendário olharmos para um mês, o que indicam os números de <span class='destaque-texto'>1 a 31</span>?",
                    audio: "audio/estacoes_q6.mp3",
                    imagemPergunta: "img/calendario_pagina.jpg",
                    opcoes: ["Os dias do mês", "Os meses do ano", "As horas do dia", "Os anos"],
                    correta: "Os dias do mês",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Quantos dias tem o mês de <span class='destaque-fundo'>Fevereiro</span>?",
                    audio: "audio/estacoes_q7.mp3",
                    imagemPergunta: "img/calendario_fevereiro.jpg",
                    opcoes: ["28 ou 29 dias", "31 dias", "30 dias", "24 dias"],
                    correta: "28 ou 29 dias",
                    dica: { texto: "É o único mês com menos de 30 dias!" }
                },
                {
                    pergunta: "Num ano bissexto, o mês de Fevereiro ganha mais 1 dia. Com quantos dias fica?",
                    audio: "audio/estacoes_q8.mp3",
                    imagemPergunta: "img/calendario_fevereiro.jpg",
                    opcoes: ["29 dias", "28 dias", "30 dias", "31 dias"],
                    correta: "29 dias",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Se o dia 1 do mês é uma Segunda-feira, que dia do mês será a <span class='destaque-texto-verde'>Terça-feira</span> a seguir?",
                    audio: "audio/estacoes_q9.mp3",
                    imagemPergunta: "img/calendario_pagina.jpg",
                    opcoes: ["Dia 2", "Dia 3", "Dia 7", "Dia 10"],
                    correta: "Dia 2",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "O que nos ajuda a organizar os dias, semanas e meses durante o ano?",
                    audio: "audio/estacoes_q10.mp3",
                    imagemPergunta: "img/calendario_pagina.jpg",
                    opcoes: ["O Calendário", "O Relógio", "A Régua", "A Calculadora"],
                    correta: "O Calendário",
                    dica: { texto: "Está pendurado na parede com as folhas de todos os meses!" }
                },
                {
                    pergunta: "O Verão vem logo a seguir a que <span class='destaque-fundo'>estação do ano</span>?",
                    audio: "audio/estacoes_q11.mp3",
                    imagemPergunta: "img/roda_4_estacoes.png",
                    opcoes: ["Primavera", "Inverno", "Outono", "Ano Novo"],
                    correta: "Primavera",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "O Inverno vem logo a seguir a que <span class='destaque-fundo'>estação do ano</span>?",
                    audio: "audio/estacoes_q12.mp3",
                    imagemPergunta: "img/roda_4_estacoes.png",
                    opcoes: ["Outono", "Verão", "Primavera", "Janeiro"],
                    correta: "Outono",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Em que estação do ano ocorre o <span class='destaque-badge'>Magusto</span>?",
                    audio: "audio/estacoes_q13.mp3",
                    imagemPergunta: "img/estacao_outono.jpg",
                    opcoes: ["Outono", "Primavera", "Inverno", "Verão"],
                    correta: "Outono",
                    dica: { texto: "É a estação em que as folhas começam a cair!" }
                },
                {
                    pergunta: "No calendário, a que corresponde cada linha horizontal de 7 dias?",
                    audio: "audio/estacoes_q14.mp3",
                    imagemPergunta: "img/calendario_pagina.jpg",
                    opcoes: ["Uma Semana", "Um Mês", "Um Ano", "Um Dia"],
                    correta: "Uma Semana",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "A maioria dos meses do ano tem 30 ou...",
                    audio: "audio/estacoes_q15.mp3",
                    imagemPergunta: "img/calendario_pagina.jpg",
                    opcoes: ["31 dias", "28 dias", "40 dias", "15 dias"],
                    correta: "31 dias",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Em que estação do ano as noites são mais <span class='destaque-amarelo'>longas e frias</span>?",
                    audio: "audio/estacoes_q16.mp3",
                    imagemPergunta: "img/estacao_inverno.jpg",
                    opcoes: ["Inverno", "Verão", "Primavera", "Outono"],
                    correta: "Inverno",
                    dica: { texto: "É a estação em que anoitece mais cedo!" }
                },
                {
                    pergunta: "Em que estação do ano os dias são mais <span class='destaque-fundo'>longos e soalheiros</span>?",
                    audio: "audio/estacoes_q17.mp3",
                    imagemPergunta: "img/estacao_verao.jpg",
                    opcoes: ["Verão", "Inverno", "Outono", "Primavera"],
                    correta: "Verão",
                    dica: { tipo: "50-50" }
                },
                {
                    pergunta: "Se hoje é dia 10 do mês, que dia do mês foi <span class='destaque-texto-vermelho'>ontem</span>?",
                    audio: "audio/estacoes_q18.mp3",
                    imagemPergunta: "img/calendario_pagina.jpg",
                    opcoes: ["Dia 9", "Dia 11", "Dia 8", "Dia 12"],
                    correta: "Dia 9",
                    dica: { tipo: "highlight" }
                },
                {
                    pergunta: "Se hoje é dia 20 do mês, que dia do mês será <span class='destaque-texto-verde'>amanhã</span>?",
                    audio: "audio/estacoes_q19.mp3",
                    imagemPergunta: "img/calendario_pagina.jpg",
                    opcoes: ["Dia 21", "Dia 19", "Dia 22", "Dia 20"],
                    correta: "Dia 21",
                    dica: { texto: "Faz a conta: 20 mais 1!" }
                },
                {
                    pergunta: "Quantas semanas completas de 7 dias tem um mês de 28 dias?",
                    audio: "audio/estacoes_q20.mp3",
                    imagemPergunta: "img/calendario_fevereiro.jpg",
                    opcoes: ["4 semanas", "2 semanas", "5 semanas", "3 semanas"],
                    correta: "4 semanas",
                    dica: { tipo: "50-50" }
                }
            ]
        }
    ]
};