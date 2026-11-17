/* ---------- 1. DADOS DO PADDOCK ARCHIVE ---------- */
const ARQUIVO = [
  // ===== EQUIPES =====
  { titulo: 'McLaren', categoria: 'equipes', tag: 'Equipe', cor: '#FF8000', layout: 'a-wide',
    foto: 'imagens/equipes/mclaren.png', alt: 'Carro de Fórmula 1 da equipe McLaren',
    descricao: 'Fundada por Bruce McLaren, estreou na Fórmula 1 em 1966. A equipe de Woking chega a 2026 como campeã de construtores de 2025 e com motor Mercedes.',
    detalhes: [['Sede', 'Woking, Reino Unido'], ['Motor 2026', 'Mercedes'], ['Estreia na F1', '1966']] },
  { titulo: 'Ferrari', categoria: 'equipes', tag: 'Equipe', cor: '#E8002D', layout: 'a-tall',
    foto: 'imagens/equipes/ferrari.png', alt: 'Carro de Fórmula 1 da Scuderia Ferrari',
    descricao: 'A Scuderia é a única equipe que disputou todas as temporadas do campeonato desde 1950. Em Maranello ela projeta o próprio motor, que também move Haas e Cadillac em 2026.',
    detalhes: [['Sede', 'Maranello, Itália'], ['Motor 2026', 'Ferrari'], ['Presença', 'Todas as temporadas desde 1950']] },
  { titulo: 'Mercedes', categoria: 'equipes', tag: 'Equipe', cor: '#27F4D2', layout: '',
    foto: 'imagens/equipes/mercedes.png', alt: 'Carro de Fórmula 1 da equipe Mercedes',
    descricao: 'Chassi em Brackley e motor em Brixworth, ambos no Reino Unido. Em 2026 a unidade de potência Mercedes equipa quatro das onze equipes do grid, contando a própria.',
    detalhes: [['Sede', 'Brackley, Reino Unido'], ['Motor 2026', 'Mercedes'], ['Equipes com motor Mercedes', '4 de 11']] },
  { titulo: 'Red Bull Racing', categoria: 'equipes', tag: 'Equipe', cor: '#3671C6', layout: '',
    foto: 'imagens/equipes/redbull.png', alt: 'Carro de Fórmula 1 da equipe Red Bull Racing',
    descricao: 'De Milton Keynes, a equipe estreia em 2026 a sua própria unidade de potência, a Red Bull Ford Powertrains, desenvolvida em parceria com a Ford.',
    detalhes: [['Sede', 'Milton Keynes, Reino Unido'], ['Motor 2026', 'Red Bull Ford'], ['Novidade', 'Unidade de potência própria']] },
  { titulo: 'Racing Bulls', categoria: 'equipes', tag: 'Equipe', cor: '#6692FF', layout: '',
    foto: 'imagens/equipes/racingbulls.png', alt: 'Carro de Fórmula 1 da equipe Racing Bulls',
    descricao: 'Com base em Faenza, na Itália, é a equipe irmã da Red Bull e uma tradicional porta de entrada para jovens pilotos no grid.',
    detalhes: [['Sede', 'Faenza, Itália'], ['Ligação', 'Equipe irmã da Red Bull']] },
  { titulo: 'Aston Martin', categoria: 'equipes', tag: 'Equipe', cor: '#229971', layout: 'a-wide',
    foto: 'imagens/equipes/astonmartin.png', alt: 'Carro de Fórmula 1 da equipe Aston Martin',
    descricao: 'Sediada em Silverstone, a equipe verde começa 2026 em parceria de fábrica com a Honda, juntando chassi e motor sob a mesma estratégia.',
    detalhes: [['Sede', 'Silverstone, Reino Unido'], ['Motor 2026', 'Honda']] },
  { titulo: 'Alpine', categoria: 'equipes', tag: 'Equipe', cor: '#FF87BC', layout: '',
    foto: 'imagens/equipes/alpine.png', alt: 'Carro de Fórmula 1 da equipe Alpine',
    descricao: 'Equipe franco-britânica, com o chassi construído em Enstone, na Inglaterra. Em 2026 passa a usar motor Mercedes e tem Pierre Gasly e Franco Colapinto como pilotos.',
    detalhes: [['Sede', 'Enstone, Reino Unido'], ['Motor 2026', 'Mercedes'], ['Pilotos', 'Pierre Gasly e Franco Colapinto']] },
  { titulo: 'Williams', categoria: 'equipes', tag: 'Equipe', cor: '#64C4FF', layout: '',
    foto: 'imagens/equipes/williams.png', alt: 'Carro de Fórmula 1 da equipe Williams',
    descricao: 'Fundada por Frank Williams, tem sede em Grove, na Inglaterra, e soma nove títulos de construtores. Corre com motor Mercedes em 2026.',
    detalhes: [['Sede', 'Grove, Reino Unido'], ['Motor 2026', 'Mercedes'], ['Títulos de construtores', '9']] },
  { titulo: 'Haas', categoria: 'equipes', tag: 'Equipe', cor: '#B6BABD', layout: '',
    foto: 'imagens/equipes/haas.png', alt: 'Carro de Fórmula 1 da equipe Haas',
    descricao: 'Estreou em 2016 e começa em 2026 a sua 11ª temporada, com Esteban Ocon e Oliver Bearman. O motor é Ferrari.',
    detalhes: [['Sede', 'Kannapolis, Estados Unidos'], ['Motor 2026', 'Ferrari'], ['Pilotos', 'Esteban Ocon e Oliver Bearman']] },
  { titulo: 'Audi', categoria: 'equipes', tag: 'Equipe', cor: '#F50537', layout: 'a-tall',
    foto: 'imagens/equipes/audi.png', alt: 'Carro de Fórmula 1 da equipe Audi, antiga Sauber',
    descricao: 'A montadora alemã assume a estrutura da antiga Sauber, em Hinwil, na Suíça, e compete como Audi Revolut F1 Team com unidade de potência própria. O brasileiro Gabriel Bortoleto está no grid.',
    detalhes: [['Sede', 'Hinwil, Suíça'], ['Motor 2026', 'Audi'], ['Nome na lista da FIA', 'Sauber Motorsport AG (nome jurídico)']] },
  { titulo: 'Cadillac', categoria: 'equipes', tag: 'Equipe', cor: '#C0C4C8', layout: 'a-wide',
    foto: 'imagens/equipes/cadillac.png', alt: 'Carro de Fórmula 1 da equipe Cadillac',
    descricao: 'A 11ª equipe do grid e a primeira nova desde a Haas, em 2016. Estreia com motor Ferrari e a dupla experiente formada por Sergio Pérez e Valtteri Bottas.',
    detalhes: [['Estreia', '2026'], ['Motor 2026', 'Ferrari'], ['Pilotos', 'Sergio Pérez e Valtteri Bottas']] },

  // ===== CIRCUITOS =====
  { titulo: 'Interlagos', categoria: 'circuitos', tag: 'Circuito', cor: '#c9ff1f', layout: 'a-wide',
    foto: 'imagens/circuitos/interlagos.png', alt: 'Autódromo José Carlos Pace, em Interlagos, São Paulo',
    descricao: 'O Autódromo José Carlos Pace tem 4,3 km no sentido anti-horário e trechos encadeados, como o Senna S. Todo ano vira festa para a torcida brasileira.',
    detalhes: [['Local', 'São Paulo, Brasil'], ['Extensão', '4,309 km'], ['Sentido', 'Anti-horário']] },
  { titulo: 'Mônaco', categoria: 'circuitos', tag: 'Circuito', cor: '#c9ff1f', layout: '',
    foto: 'imagens/circuitos/monaco.png', alt: 'Circuito de rua de Mônaco em Monte Carlo',
    descricao: 'Um circuito de rua de 3,3 km por Monte Carlo, com muros por todo lado. Ultrapassar é raro, e largar na frente vale quase tudo.',
    detalhes: [['Local', 'Monte Carlo, Mônaco'], ['Extensão', '3,337 km'], ['Voltas', '78']] },
  { titulo: 'Silverstone', categoria: 'circuitos', tag: 'Circuito', cor: '#c9ff1f', layout: '',
    foto: 'imagens/circuitos/silverstone.png', alt: 'Circuito de Silverstone, no Reino Unido',
    descricao: 'Palco da primeira corrida do campeonato mundial, em 1950, e casa de várias equipes. Curvas de alta velocidade como Maggotts e Becketts testam o carro inteiro.',
    detalhes: [['Local', 'Reino Unido'], ['Primeiro GP do mundial', '1950']] },
  { titulo: 'Spa-Francorchamps', categoria: 'circuitos', tag: 'Circuito', cor: '#c9ff1f', layout: 'a-tall',
    foto: 'imagens/circuitos/spa.png', alt: 'Circuito de Spa-Francorchamps, na Bélgica',
    descricao: 'O mais longo do calendário, com cerca de 7 km, atravessa a floresta belga e tem a famosa subida de Eau Rouge e Raidillon.',
    detalhes: [['Local', 'Stavelot, Bélgica'], ['Extensão', '7,004 km']] },
  { titulo: 'Monza', categoria: 'circuitos', tag: 'Circuito', cor: '#c9ff1f', layout: '',
    foto: 'imagens/circuitos/monza.png', alt: 'Autódromo de Monza, na Itália',
    descricao: 'O "Templo da Velocidade" fica dentro de um parque, perto de Milão. Retas longas e freadas fortes fazem dele um dos circuitos mais rápidos do campeonato.',
    detalhes: [['Local', 'Monza, Itália'], ['Extensão', '5,793 km']] },
  { titulo: 'Suzuka', categoria: 'circuitos', tag: 'Circuito', cor: '#c9ff1f', layout: '',
    foto: 'imagens/circuitos/suzuka.png', alt: 'Circuito de Suzuka, no Japão',
    descricao: 'Um dos poucos circuitos em forma de oito, com um trecho que passa por cima do outro. A sequência de curvas conhecida como Esses exige muito equilíbrio do carro.',
    detalhes: [['Local', 'Suzuka, Japão'], ['Extensão', '5,807 km'], ['Formato', 'Em oito, com cruzamento']] },

  // ===== TECNOLOGIA =====
  { titulo: 'Asas ativas', categoria: 'tecnologia', tag: 'Tecnologia', cor: '#c9ff1f', layout: 'a-wide',
    foto: 'imagens/tecnologia/asa-traseira.png', alt: 'Asa traseira de um carro de Fórmula 1',
    descricao: 'Em 2026 as asas dianteira e traseira se movem. Nas retas elas abrem para reduzir o arrasto; nas curvas fecham para gerar aderência. O sistema substitui o DRS.',
    detalhes: [['Modo reta', 'Asas abertas, menos arrasto'], ['Modo curva', 'Asas fechadas, mais downforce'], ['Substitui', 'DRS']] },
  { titulo: 'Unidade de potência 2026', categoria: 'tecnologia', tag: 'Tecnologia', cor: '#c9ff1f', layout: 'a-tall',
    foto: 'imagens/tecnologia/motor.png', alt: 'Unidade de potência de um carro de Fórmula 1',
    descricao: 'O V6 1.6 turbo continua, o MGU-H sai de cena e a parte elétrica cresce: o MGU-K chega a 350 kW. A divisão de potência fica perto de 50% para cada lado, com combustível sustentável.',
    detalhes: [['Motor a combustão', 'V6 1.6 turbo'], ['MGU-K', 'Até 350 kW'], ['MGU-H', 'Removido']] },
  { titulo: 'Pneus Pirelli', categoria: 'tecnologia', tag: 'Tecnologia', cor: '#c9ff1f', layout: '',
    foto: 'imagens/tecnologia/pneus.png', alt: 'Pneus Pirelli de Fórmula 1',
    descricao: 'A Pirelli leva três compostos secos a cada corrida, e no seco o piloto precisa usar dois tipos diferentes. Em 2026 os pneus ficam mais estreitos: 25 mm na frente e 30 mm atrás.',
    detalhes: [['Secos', 'Duro, médio e macio'], ['Chuva', 'Intermediário e chuva extrema'], ['Regra', 'Dois compostos secos na corrida']] },
  { titulo: 'Halo', categoria: 'tecnologia', tag: 'Tecnologia', cor: '#c9ff1f', layout: '',
    foto: 'imagens/tecnologia/halo.png', alt: 'Estrutura Halo sobre o cockpit de um carro de Fórmula 1',
    descricao: 'Estrutura de titânio sobre o cockpit, obrigatória desde 2018. Ela protege a cabeça do piloto contra detritos e impactos.',
    detalhes: [['Desde', '2018'], ['Material', 'Titânio']] },

  // ===== CAPACETES =====
  { titulo: 'O amarelo de Senna', categoria: 'capacetes', tag: 'Capacete', cor: '#FFD500', layout: 'a-tall',
    foto: 'imagens/capacetes/capacete-senna.png', alt: 'Capacete amarelo de Ayrton Senna',
    descricao: 'O capacete amarelo, com faixas verde e azul, virou símbolo do piloto brasileiro e uma das identidades visuais mais reconhecidas do esporte.',
    detalhes: [['Piloto', 'Ayrton Senna'], ['Títulos', '1988, 1990 e 1991']] },
  { titulo: 'Anatomia de um capacete', categoria: 'capacetes', tag: 'Capacete', cor: '#c9ff1f', layout: '',
    foto: 'imagens/capacetes/capacete-piloto.png', alt: 'Capacete de piloto de Fórmula 1',
    descricao: 'Casco de fibra de carbono, viseira com películas descartáveis e fixação ao dispositivo HANS, que reduz o movimento da cabeça em uma batida.',
    detalhes: [['Casco', 'Fibra de carbono'], ['Viseira', 'Com películas removíveis'], ['Proteção do pescoço', 'Dispositivo HANS']] },
  { titulo: 'Capacetes especiais', categoria: 'capacetes', tag: 'Capacete', cor: '#c9ff1f', layout: 'a-wide',
    foto: 'imagens/capacetes/capacete-especial.png', alt: 'Capacete de Fórmula 1 com pintura especial',
    descricao: 'Em corridas de casa ou datas especiais, muitos pilotos trocam o desenho do capacete. Ele vira um cartão de visita do piloto e objeto de colecionador.',
    detalhes: [['Quando muda', 'GPs de casa e homenagens'], ['Regra', 'A pintura precisa respeitar as normas de segurança']] },

  // ===== HISTÓRIA =====
  { titulo: '1950: a primeira temporada', categoria: 'historia', tag: 'História', cor: '#c9ff1f', layout: '',
    foto: 'imagens/bastidores/arquivo-1950.png', alt: 'Carro histórico de Fórmula 1 dos anos 1950',
    descricao: 'O campeonato mundial de pilotos começou em 1950, em Silverstone. Desde então, a Ferrari é a única equipe presente em todas as edições.',
    detalhes: [['Primeira corrida', 'GP da Grã-Bretanha, Silverstone'], ['Ano', '1950']] },
  { titulo: 'A era turbo', categoria: 'historia', tag: 'História', cor: '#c9ff1f', layout: 'a-wide',
    foto: 'imagens/bastidores/arquivo-turbo.png', alt: 'Carro de Fórmula 1 da era turbo, anos 1980',
    descricao: 'Entre 1977 e 1988 os motores turboalimentados dominaram a categoria, com carros muito potentes e difíceis de guiar. Eles foram proibidos em 1989.',
    detalhes: [['Período', '1977 a 1988'], ['Fim', 'Proibidos a partir de 1989']] },
  { titulo: 'O Brasil na Fórmula 1', categoria: 'historia', tag: 'História', cor: '#009C3B', layout: '',
    foto: 'imagens/bastidores/arquivo-brasil.png', alt: 'Carro de piloto brasileiro campeão de Fórmula 1',
    descricao: 'Emerson Fittipaldi, Nelson Piquet e Ayrton Senna conquistaram juntos oito títulos mundiais de pilotos, e Interlagos virou casa de grandes corridas.',
    detalhes: [['Fittipaldi', '1972 e 1974'], ['Piquet', '1981, 1983 e 1987'], ['Senna', '1988, 1990 e 1991']] },

  // ===== CORRIDAS =====
  { titulo: 'O fim de semana de GP', categoria: 'corridas', tag: 'Corrida', cor: '#c9ff1f', layout: '',
    foto: 'imagens/bastidores/garagem.png', alt: 'Garagem de uma equipe de Fórmula 1 durante um Grande Prêmio',
    descricao: 'Normalmente são três treinos livres, a classificação e a corrida. Nos fins de semana sprint o formato muda e entra uma corrida curta no sábado.',
    detalhes: [['Formato padrão', '3 treinos, classificação e corrida'], ['Distância da corrida', 'Cerca de 305 km (Mônaco é menor)']] },
  { titulo: 'A largada', categoria: 'corridas', tag: 'Corrida', cor: '#c9ff1f', layout: 'a-wide',
    foto: 'imagens/bastidores/largada.png', alt: 'Largada de um Grande Prêmio de Fórmula 1',
    descricao: 'Em 2026, 22 carros alinham no grid. A largada acontece quando as cinco luzes vermelhas se apagam, e as primeiras curvas costumam decidir muita coisa.',
    detalhes: [['Carros no grid', '22'], ['Sinal de largada', 'Cinco luzes vermelhas']] },
  { titulo: 'Pit stop', categoria: 'corridas', tag: 'Corrida', cor: '#c9ff1f', layout: '',
    foto: 'imagens/bastidores/pitstop.png', alt: 'Mecânicos trocando os pneus de um carro durante um pit stop',
    descricao: 'Em poucos segundos a equipe troca as quatro rodas. O recorde é da McLaren: 1,80 s no GP do Catar de 2023.',
    detalhes: [['Recorde', '1,80 s (McLaren, Catar 2023)'], ['No box', 'Velocidade limitada no pit lane']] }
];

/* ---------- 2. EFEITO DE ENTRADA E COR DO CABEÇALHO ---------- */

function iniciarEntrada() {
  const itens = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window)) {
    itens.forEach(function (item) {
      item.classList.add('is-visible');
    });
    return;
  }

  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('is-visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.1 });

  itens.forEach(function (item) {
    observador.observe(item);
  });
}

function atualizarCabecalho() {
  const cabecalho = document.querySelector('.site-header');
  if (!cabecalho || cabecalho.classList.contains('is-menu-open')) return;

  const ponto = cabecalho.offsetHeight / 2;
  const secoes = document.querySelectorAll('.tone-light, .tone-paper, .tone-lime, .tone-dark, .tone-graphite');
  let fundoClaro = false;

  secoes.forEach(function (secao) {
    const caixa = secao.getBoundingClientRect();
    if (caixa.top <= ponto && caixa.bottom >= ponto) {
      fundoClaro = secao.classList.contains('tone-light') ||
                   secao.classList.contains('tone-paper') ||
                   secao.classList.contains('tone-lime');
    }
  });

  cabecalho.dataset.on = fundoClaro ? 'light' : 'dark';
}

function iniciarCabecalho() {
  window.addEventListener('scroll', atualizarCabecalho);
  window.addEventListener('resize', atualizarCabecalho);
  atualizarCabecalho();
}

/* ---------- 3. FOTOS AUSENTES ---------- */
function verificarFoto(imagem) {
  const caixa = imagem.closest('.foto');
  if (!caixa) return;

  function marcarAusente() {
    caixa.classList.add('sem-foto');
    let aviso = caixa.querySelector('.foto__ph');
    if (!aviso) {
      aviso = document.createElement('div');
      aviso.className = 'foto__ph';
      aviso.setAttribute('aria-hidden', 'true');
      aviso.innerHTML = '<b>Foto pendente</b><span></span>';
      caixa.appendChild(aviso);
    }
    aviso.querySelector('span').textContent = imagem.getAttribute('src');
  }

  function marcarPresente() {
    caixa.classList.remove('sem-foto');
    const aviso = caixa.querySelector('.foto__ph');
    if (aviso) aviso.remove();
  }

  imagem.addEventListener('error', marcarAusente);
  imagem.addEventListener('load', marcarPresente);

  if (imagem.complete) {
    if (imagem.naturalWidth === 0 && imagem.getAttribute('src')) {
      marcarAusente();
    } else if (imagem.naturalWidth > 0) {
      marcarPresente();
    }
  }
}

function iniciarFotos() {
  document.querySelectorAll('.foto img').forEach(verificarFoto);
}

/* ---------- 4. MENU ---------- */
function iniciarMenu() {
  const botao = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const cabecalho = document.querySelector('.site-header');
  if (!botao || !menu || !cabecalho) return;

  const textoDoBotao = botao.querySelector('.menu-btn__text');

  function abrir() {
    menu.classList.add('is-open');
    cabecalho.classList.add('is-menu-open');
    document.body.classList.add('menu-open');
    botao.setAttribute('aria-expanded', 'true');
    botao.setAttribute('aria-label', 'Fechar menu');
    if (textoDoBotao) textoDoBotao.textContent = 'Fechar';
    const primeiro = menu.querySelector('a');
    if (primeiro) primeiro.focus();
  }

  function fechar() {
    menu.classList.remove('is-open');
    cabecalho.classList.remove('is-menu-open');
    document.body.classList.remove('menu-open');
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
    if (textoDoBotao) textoDoBotao.textContent = 'Menu';
    atualizarCabecalho();
  }

  function estaAberto() {
    return menu.classList.contains('is-open');
  }

  botao.addEventListener('click', function () {
    if (estaAberto()) {
      fechar();
    } else {
      abrir();
    }
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (evento) {
      if (link.getAttribute('aria-current') === 'page') {
        evento.preventDefault();
        fechar();
        botao.focus();
      }
    });
  });

  document.addEventListener('keydown', function (evento) {
    if (!estaAberto()) return;

    if (evento.key === 'Escape') {
      fechar();
      botao.focus();
      return;
    }

    if (evento.key === 'Tab') {
      const focaveis = [botao].concat(Array.from(menu.querySelectorAll('a')));
      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      if (evento.shiftKey && document.activeElement === primeiro) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primeiro.focus();
      }
    }
  });
}

/* ---------- 5. HOME: LISTA DE CIRCUITOS ---------- */
function iniciarCircuitos() {
  const lista = document.querySelector('.circuit-list');
  const palco = document.querySelector('.circuit-stage');
  if (!lista || !palco) return;

  const imagem = palco.querySelector('img');
  const nome = palco.querySelector('[data-circuit-name]');
  const info = palco.querySelector('[data-circuit-info]');
  const botoes = lista.querySelectorAll('.circuit-btn');

  function mostrar(botao) {
    if (botao.getAttribute('aria-pressed') === 'true') return;

    botoes.forEach(function (b) {
      b.setAttribute('aria-pressed', b === botao ? 'true' : 'false');
    });

    imagem.src = botao.dataset.img;
    imagem.alt = botao.dataset.alt;
    nome.textContent = botao.dataset.name;
    info.textContent = botao.dataset.info;
  }

  botoes.forEach(function (botao) {
    botao.addEventListener('click', function () { mostrar(botao); });
    botao.addEventListener('mouseenter', function () { mostrar(botao); });
    botao.addEventListener('focus', function () { mostrar(botao); });
  });
}

/* ---------- 6. EXPLORE: FILTRO, BUSCA E LIGHTBOX ---------- */

function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function criarCartao(item, numero) {
  const cartao = document.createElement('button');
  cartao.type = 'button';
  cartao.className = 'card ' + item.layout;
  cartao.style.setProperty('--c', item.cor);
  cartao.dataset.cursor = 'ABRIR';
  cartao.setAttribute('aria-label', item.titulo + ' — ' + item.tag + '. Abrir detalhes');

  cartao.innerHTML =
    '<figure class="foto"><img loading="lazy" decoding="async"></figure>' +
    '<div class="card__top"><span class="tag"></span><span class="mono"></span></div>' +
    '<div class="card__body"><h3 class="card__title"><span></span></h3><p class="card__desc"></p></div>' +
    '<span class="card__bar" aria-hidden="true"></span>';

  const imagem = cartao.querySelector('img');
  imagem.src = item.foto;
  imagem.alt = '';
  cartao.querySelector('.tag').textContent = item.tag;
  cartao.querySelector('.card__top .mono').textContent = String(numero + 1).padStart(2, '0');
  cartao.querySelector('.card__title span').textContent = item.titulo;
  cartao.querySelector('.card__desc').textContent = item.descricao;
  verificarFoto(imagem);
  return cartao;
}

function iniciarArquivo() {
  const grade = document.querySelector('#archive-grid');
  if (!grade) return;

  const campoBusca = document.querySelector('#busca');
  const chips = document.querySelectorAll('.chip');
  const botaoLimpar = document.querySelector('#limpar');
  const contador = document.querySelector('#contador');
  const semResultados = document.querySelector('#sem-resultados');
  const botaoLimparVazio = document.querySelector('#limpar-vazio');
  const caixa = document.querySelector('#lightbox');

  let categoriaAtual = 'todos';
  let termoAtual = '';
  const cartoes = [];

  ARQUIVO.forEach(function (item) {
    item.textoBusca = normalizar([item.titulo, item.tag, item.descricao,
      item.detalhes.map(function (d) { return d.join(' '); }).join(' ')].join(' '));
  });

  ARQUIVO.forEach(function (item, indice) {
    const cartao = criarCartao(item, indice);
    cartao.addEventListener('click', function () { abrirLightbox(indice); });
    grade.appendChild(cartao);
    cartoes.push(cartao);
  });

  function filtrar() {
    let visiveis = 0;

    cartoes.forEach(function (cartao, indice) {
      const item = ARQUIVO[indice];
      const passaCategoria = categoriaAtual === 'todos' || item.categoria === categoriaAtual;
      const passaBusca = termoAtual === '' || item.textoBusca.indexOf(termoAtual) !== -1;
      const mostrar = passaCategoria && passaBusca;

      cartao.hidden = !mostrar;
      if (mostrar) visiveis++;
    });

    contador.textContent = visiveis + (visiveis === 1 ? ' item' : ' itens');
    semResultados.classList.toggle('is-on', visiveis === 0);
    botaoLimpar.hidden = (categoriaAtual === 'todos' && termoAtual === '');
  }

  function definirCategoria(categoria) {
    categoriaAtual = categoria;
    chips.forEach(function (chip) {
      chip.setAttribute('aria-pressed', chip.dataset.categoria === categoria ? 'true' : 'false');
    });
    filtrar();
  }

  function limparFiltros() {
    campoBusca.value = '';
    termoAtual = '';
    definirCategoria('todos');
    campoBusca.focus();
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () { definirCategoria(chip.dataset.categoria); });
  });
  campoBusca.addEventListener('input', function () {
    termoAtual = normalizar(campoBusca.value.trim());
    filtrar();
  });
  botaoLimpar.addEventListener('click', limparFiltros);
  botaoLimparVazio.addEventListener('click', limparFiltros);

  const lbFoto = caixa.querySelector('.lightbox__photo');
  const lbImagem = lbFoto.querySelector('img');
  const lbTag = caixa.querySelector('#lb-tag');
  const lbTitulo = caixa.querySelector('#lb-titulo');
  const lbDescricao = caixa.querySelector('#lb-descricao');
  const lbDetalhes = caixa.querySelector('#lb-detalhes');
  const lbPosicao = caixa.querySelector('#lb-posicao');
  let indiceAberto = -1;

  verificarFoto(lbImagem);

  function indicesVisiveis() {
    const lista = [];
    cartoes.forEach(function (cartao, indice) { if (!cartao.hidden) lista.push(indice); });
    return lista;
  }

  function preencher(indice) {
    const item = ARQUIVO[indice];
    indiceAberto = indice;
    lbImagem.src = item.foto;
    lbImagem.alt = item.alt;
    lbTag.textContent = item.tag;
    lbTag.style.borderColor = item.cor;
    lbTitulo.textContent = item.titulo;
    lbDescricao.textContent = item.descricao;

    lbDetalhes.innerHTML = '';
    item.detalhes.forEach(function (par) {
      const linha = document.createElement('div');
      const rotulo = document.createElement('dt');
      const valor = document.createElement('dd');
      rotulo.textContent = par[0];
      valor.textContent = par[1];
      linha.appendChild(rotulo);
      linha.appendChild(valor);
      lbDetalhes.appendChild(linha);
    });

    const visiveis = indicesVisiveis();
    lbPosicao.textContent = String(visiveis.indexOf(indice) + 1).padStart(2, '0') +
      ' / ' + String(visiveis.length).padStart(2, '0');
  }

  function abrirLightbox(indice) {
    preencher(indice);
    if (typeof caixa.showModal === 'function') {
      caixa.showModal();
    } else {
      caixa.setAttribute('open', '');
    }
  }

  function navegar(direcao) {
    const visiveis = indicesVisiveis();
    if (visiveis.length < 2) return;
    const posicao = visiveis.indexOf(indiceAberto);
    const proximo = visiveis[(posicao + direcao + visiveis.length) % visiveis.length];
    preencher(proximo);
  }

  caixa.querySelector('#lb-anterior').addEventListener('click', function () { navegar(-1); });
  caixa.querySelector('#lb-proximo').addEventListener('click', function () { navegar(1); });
  caixa.querySelector('#lb-fechar').addEventListener('click', function () { caixa.close(); });

  caixa.addEventListener('click', function (evento) {
    if (evento.target === caixa) caixa.close();
  });
  caixa.addEventListener('keydown', function (evento) {
    if (evento.key === 'ArrowLeft') navegar(-1);
    if (evento.key === 'ArrowRight') navegar(1);
  });

  const hash = window.location.hash.replace('#', '');
  const categoriasValidas = Array.from(chips).map(function (c) { return c.dataset.categoria; });
  definirCategoria(categoriasValidas.indexOf(hash) !== -1 ? hash : 'todos');
}

/* ---------- 7. CONTATO: VALIDAÇÃO E FAQ ---------- */
function iniciarFormulario() {
  const formulario = document.querySelector('#form-contato');
  if (!formulario) return;

  const status = document.querySelector('#form-status');
  const contadorMensagem = document.querySelector('#contador-mensagem');
  const campos = Array.from(formulario.querySelectorAll('input, select, textarea'));
  const regraEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const MINIMO_MENSAGEM = 20;
  const MAXIMO_MENSAGEM = 500;

  function mensagemDeErro(campo) {
    const valor = campo.value.trim();

    if (campo.name === 'nome') {
      if (valor === '') return 'Digite o seu nome.';
      if (valor.length < 3) return 'O nome precisa ter pelo menos 3 letras.';
      if (!/^[A-Za-zÀ-ÿ' .-]+$/.test(valor)) return 'Use apenas letras no nome.';
    }
    if (campo.name === 'email') {
      if (valor === '') return 'Digite o seu e-mail.';
      if (!regraEmail.test(valor)) return 'Esse e-mail parece incompleto. Exemplo: nome@dominio.com';
    }
    if (campo.name === 'assunto') {
      if (valor === '') return 'Escolha um assunto na lista.';
    }
    if (campo.name === 'mensagem') {
      if (valor.length < MINIMO_MENSAGEM) {
        return 'Escreva pelo menos ' + MINIMO_MENSAGEM + ' caracteres (faltam ' + (MINIMO_MENSAGEM - valor.length) + ').';
      }
      if (valor.length > MAXIMO_MENSAGEM) return 'A mensagem passou de ' + MAXIMO_MENSAGEM + ' caracteres.';
    }
    return '';
  }

  function validarCampo(campo) {
    const erro = mensagemDeErro(campo);
    const areaDoErro = document.querySelector('#erro-' + campo.name);
    areaDoErro.textContent = erro;
    if (erro) {
      campo.setAttribute('aria-invalid', 'true');
    } else {
      campo.removeAttribute('aria-invalid');
    }
    return erro === '';
  }

  function mostrarStatus(texto, ehErro) {
    status.textContent = texto;
    status.classList.add('is-on');
    status.classList.toggle('is-error', ehErro);
  }

  campos.forEach(function (campo) {
    campo.addEventListener('blur', function () { validarCampo(campo); });
    campo.addEventListener('input', function () {
      if (campo.getAttribute('aria-invalid') === 'true') validarCampo(campo);
      if (campo.name === 'mensagem') {
        contadorMensagem.textContent = campo.value.length + ' / ' + MAXIMO_MENSAGEM;
      }
    });
  });

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    status.classList.remove('is-on');

    let primeiroComErro = null;
    campos.forEach(function (campo) {
      const valido = validarCampo(campo);
      if (!valido && primeiroComErro === null) primeiroComErro = campo;
    });

    if (primeiroComErro) {
      mostrarStatus('Encontramos campos para corrigir. Confira as mensagens em vermelho.', true);
      primeiroComErro.focus();
      return;
    }

    const nome = formulario.elements.nome.value.trim().split(' ')[0];
    mostrarStatus('Tudo certo, ' + nome + '! Os dados foram validados, mas não foram enviados.', false);
    formulario.reset();
    contadorMensagem.textContent = '0 / ' + MAXIMO_MENSAGEM;
  });
}

function iniciarFAQ() {
  const itens = document.querySelectorAll('.faq__item');
  if (!itens.length) return;

  function definirEstado(item, abrir) {
    item.classList.toggle('is-open', abrir);
    item.querySelector('.faq__q').setAttribute('aria-expanded', abrir ? 'true' : 'false');
  }

  itens.forEach(function (item) {
    item.querySelector('.faq__q').addEventListener('click', function () {
      definirEstado(item, !item.classList.contains('is-open'));
    });
  });

  const abrirTodas = document.querySelector('#faq-abrir');
  const fecharTodas = document.querySelector('#faq-fechar');
  if (abrirTodas) abrirTodas.addEventListener('click', function () { itens.forEach(function (i) { definirEstado(i, true); }); });
  if (fecharTodas) fecharTodas.addEventListener('click', function () { itens.forEach(function (i) { definirEstado(i, false); }); });
}

/* ---------- 8. INÍCIO ---------- */
function iniciar() {
  const ano = document.querySelector('#ano');
  if (ano) ano.textContent = new Date().getFullYear();

  iniciarFotos();
  iniciarEntrada();
  iniciarCabecalho();
  iniciarMenu();
  iniciarCircuitos();
  iniciarArquivo();
  iniciarFormulario();
  iniciarFAQ();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciar);
} else {
  iniciar();
}
