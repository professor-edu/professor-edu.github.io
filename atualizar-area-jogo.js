const fs = require('fs');
const path = require('path');

const pastaRaiz = './'; // Varre a partir da raiz

// Configurações de cada disciplina
const temasDisciplinas = {
  em: {
    background: `radial-gradient(
    ellipse at center,
    #ffffff 30%,
    color-mix(in srgb, var(--cor-em) 4%, #ffffff) 70%,
    color-mix(in srgb, var(--cor-em) 10%, #ffffff) 100%
  )`,
    boxShadow: `inset 0 0 12px 2px rgba(81, 207, 102, 0.40), inset 0 0 25px 6px rgba(81, 207, 102, 0.15)`,
    color: `#2b8a3e`,
    afterCSS: `.area-jogo-custom::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='16' viewBox='0 0 64 16' fill='none' stroke='%232b8a3e' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' opacity='0.45'%3E%3C!-- Planta 🌱 --%3E%3Cg%3E%3Cpath d='M7 14 Q7 9 9 5'/%3E%3Cpath d='M8 10 C4 9 4 5 8 6 C8 8 8 9 8 10'/%3E%3Cpath d='M9 8 C13 7 13 3 9 4 C9 6 9 7 9 8'/%3E%3C/g%3E%3C!-- Onda ≈ --%3E%3Cg%3E%3Cpath d='M25 5 C27 3 30 3 32 5 C34 7 37 7 39 5'/%3E%3Cpath d='M25 10 C27 8 30 8 32 10 C34 12 37 12 39 10'/%3E%3C/g%3E%3C!-- Sol 𖤓 --%3E%3Cg%3E%3Ccircle cx='55' cy='8' r='3'/%3E%3Cpath d='M55 1v2.5M55 12.5V15M48 8h2.5M59.5 8H62M50 3l2 2M60 3l-2 2M50 13l2-2M60 13l-2 2'/%3E%3C/g%3E%3C/svg%3E");
  position: absolute;
  top: 14px;
  right: 16px;
  pointer-events: none;
  z-index: 5;
}`
  },

  mat: {
    background: `radial-gradient(
    ellipse at center,
    #ffffff 30%,
    color-mix(in srgb, var(--cor-mat) 4%, #ffffff) 70%,
    color-mix(in srgb, var(--cor-mat) 10%, #ffffff) 100%
  )`,
    boxShadow: `inset 0 0 12px 2px rgba(77, 171, 247, 0.40), inset 0 0 25px 6px rgba(77, 171, 247, 0.15)`,
    color: `#1971c2`,
    afterCSS: `.area-jogo-custom::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='16' viewBox='0 0 64 16' fill='none' stroke='%231971c2' stroke-width='2' stroke-linecap='round' opacity='0.45'%3E%3C!-- Mais --%3E%3Cline x1='8' y1='4' x2='8' y2='12'/%3E%3Cline x1='4' y1='8' x2='12' y2='8'/%3E%3C!-- Menos --%3E%3Cline x1='20' y1='8' x2='28' y2='8'/%3E%3C!-- Multiplicação --%3E%3Cline x1='36' y1='4' x2='44' y2='12'/%3E%3Cline x1='44' y1='4' x2='36' y2='12'/%3E%3C!-- Divisão --%3E%3Cline x1='52' y1='8' x2='60' y2='8'/%3E%3Ccircle cx='56' cy='4' r='1' fill='%231971c2'/%3E%3Ccircle cx='56' cy='12' r='1' fill='%231971c2'/%3E%3C/svg%3E");
  position: absolute;
  top: 14px;
  right: 16px;
  pointer-events: none;
  z-index: 5;
}`
  },

  pt: {
    background: `radial-gradient(
    ellipse at center,
    #ffffff 30%,
    color-mix(in srgb, var(--cor-pt) 2%, #ffffff) 70%,
    color-mix(in srgb, var(--cor-pt) 6%, #ffffff) 100%
  )`,
    boxShadow: `inset 0 0 12px 2px rgba(255, 107, 107, 0.40), inset 0 0 25px 6px rgba(255, 107, 107, 0.15)`,
    color: `#e03131`,
    afterCSS: `.area-jogo-custom::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='62' height='16' viewBox='0 0 62 16' fill='none' stroke='%23e03131' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' opacity='0.45'%3E%3C!-- Livro Aberto --%3E%3Cg transform='translate(0, 1)'%3E%3Cpath d='M2 3c2-1 4-1 6 0s4 1 6 0v10c-2 1-4 1-6 0s-4-1-6 0Z'/%3E%3Cline x1='8' y1='3' x2='8' y2='13'/%3E%3C/g%3E%3C!-- Caneta --%3E%3Cg transform='translate(22, 1)'%3E%3Cpath d='M11 1l3 3-8 8H3v-3Z'/%3E%3Cline x1='9' y1='3' x2='12' y2='6'/%3E%3C/g%3E%3C!-- Teclado --%3E%3Cg transform='translate(42, 2)'%3E%3Crect x='1' y='2' width='16' height='10' rx='2'/%3E%3Ccircle cx='4' cy='5' r='0.6' fill='%23e03131'/%3E%3Ccircle cx='7' cy='5' r='0.6' fill='%23e03131'/%3E%3Ccircle cx='10' cy='5' r='0.6' fill='%23e03131'/%3E%3Ccircle cx='13' cy='5' r='0.6' fill='%23e03131'/%3E%3Cline x1='5' y1='9' x2='12' y2='9'/%3E%3C/g%3E%3C/svg%3E");
  position: absolute;
  top: 14px;
  right: 16px;
  pointer-events: none;
  z-index: 5;
}`
  }
};

// Identifica a disciplina pelo caminho da pasta
function obterDisciplina(caminhoFicheiro) {
  const norm = caminhoFicheiro.replace(/\\/g, '/');
  if (norm.includes('/em/')) return 'em';
  if (norm.includes('/mat/')) return 'mat';
  if (norm.includes('/pt/')) return 'pt';
  return null;
}

function processarConteudo(conteudo, disciplina) {
  // Se o ficheiro nem sequer tem a classe .area-jogo-custom, ignora
  if (!conteudo.includes('.area-jogo-custom')) {
    return { novoConteudo: conteudo, alterado: false };
  }

  const config = temasDisciplinas[disciplina];
  if (!config) return { novoConteudo: conteudo, alterado: false };

  const regexArea = /\.area-jogo-custom\s*\{([^}]+)\}/g;
  let alterado = false;

  let novoConteudo = conteudo.replace(regexArea, (match, corpo) => {
    alterado = true;

    // Converte as propriedades num objeto
    let linhas = corpo.split(';').map(l => l.trim()).filter(Boolean);
    let props = {};

    linhas.forEach(linha => {
      let partes = linha.split(':');
      if (partes.length >= 2) {
        let chave = partes[0].trim();
        let valor = partes.slice(1).join(':').trim();
        props[chave] = valor;
      }
    });

    // 1. Remove a borda antiga
    delete props['border'];

    // 2. Atualiza apenas os estilos visuais pretendidos
    props['background'] = config.background;
    props['box-shadow'] = config.boxShadow;
    props['color'] = config.color;
    props['user-select'] = 'none';
    props['-webkit-user-select'] = 'none';
    props['touch-action'] = 'manipulation';

    // Reconstrói o CSS mantendo flex-direction, overflow, padding, etc.
    let novoCorpo = '\n';
    Object.keys(props).forEach(k => {
      novoCorpo += `  ${k}: ${props[k]};\n`;
    });

    return `.area-jogo-custom {${novoCorpo}}`;
  });

  // Atualiza ou insere a regra ::after
  if (alterado) {
    if (novoConteudo.includes('.area-jogo-custom::after')) {
      novoConteudo = novoConteudo.replace(/\.area-jogo-custom::after\s*\{[^}]*\}/g, config.afterCSS.trim());
    } else {
      novoConteudo = novoConteudo.replace(/(\.area-jogo-custom\s*\{[^}]*\})/g, `$1\n\n${config.afterCSS}`);
    }
  }

  return { novoConteudo, alterado };
}

function varrer(dir) {
  const itens = fs.readdirSync(dir);

  itens.forEach(item => {
    const caminho = path.join(dir, item);
    const stat = fs.statSync(caminho);

    if (stat.isDirectory()) {
      varrer(caminho);
    } else if (caminho.endsWith('.html') || caminho.endsWith('.css')) {
      const disciplina = obterDisciplina(caminho);
      if (!disciplina) return;

      const original = fs.readFileSync(caminho, 'utf8');
      const { novoConteudo, alterado } = processarConteudo(original, disciplina);

      if (alterado && original !== novoConteudo) {
        fs.writeFileSync(caminho, novoConteudo, 'utf8');
        console.log(`✅ [${disciplina.toUpperCase()}] Atualizado: ${caminho}`);
      }
    }
  });
}

console.log("🚀 A iniciar a atualização em massa dos ficheiros...");
varrer(pastaRaiz);
console.log("🎉 Processo concluído com sucesso!");