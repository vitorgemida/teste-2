(function () {
  'use strict';

  var ROUTES_DATA = {
    grecia: {
      title: 'Cíclades Ocidentais & Mar Egeu',
      summary: 'Uma travessia calibrada para o início do outono mediterrâneo, quando o vento Meltemi suaviza e a água mantém 24 °C em enseadas calcárias acessíveis apenas por mar.',
      window: 'Maio a Outubro',
      vessel: 'Catamarã 58\' & Vilas',
      distance: '145 milhas náuticas',
      pace: 'Navegação calma (3h/dia)',
      destinoLabel: 'Ilhas Gregas',
      epocaLabel: 'Setembro a Outubro',
      estiloLabel: 'Veleiro & Vilas Costeiras',
      stages: [
        {
          title: 'Paros & Antiparos — Embarque e Enseada de Despotiko',
          days: 'Dias 1–2 · 18 mn',
          desc: 'Recepção privada no porto de Parikia, ajuste de aprovisionamento com chef de bordo e primeira navegação até o santuário arqueológico insular de Despotiko para pernoite em águas abrigadas.'
        },
        {
          title: 'Sifnos & Falésias Brancas de Kleftiko (Milos)',
          days: 'Dias 3–5 · 46 mn',
          desc: 'Travessia matinal para a baía de Vathy em Sifnos com jantar em olaria costeira tradicional, seguida de dois dias explorando as formações rochosas e cavernas marinhas de Kleftiko e Sarakiniko.'
        },
        {
          title: 'Folegandros & Sikinos — Chora Suspensa e Trilhas Costeiras',
          days: 'Dias 6–7 · 38 mn',
          desc: 'Ancoragem em Karavostasis e subida ao entardecer para a Chora histórica erguida 200 metros acima do azul profundo do Egeu, com caminhada guiada até a enseada intocada de Katergo.'
        },
        {
          title: 'Caldeira de Santorini por Mar & Desembarque em Oia',
          days: 'Dias 8–9 · 43 mn',
          desc: 'Entrada silenciosa pela boca norte da caldeira vulcânica ao amanhecer, ancoragem privada sob as falésias de basalto e estadia final em residência escavada na rocha com vista aberta para o mar.'
        }
      ]
    },
    noruega: {
      title: 'Fiordes da Noruega & Arquipélago de Lofoten',
      summary: 'Expedição desenhada para os longos dias luminosos do verão ártico, navegando por canais glaciais profundos onde cachoeiras deságuam diretamente sobre o fiorde silencioso.',
      window: 'Junho a Agosto',
      vessel: 'Iate Expedicionário & Cabanas',
      distance: '210 milhas náuticas',
      pace: 'Exploração ativa (4h/dia)',
      destinoLabel: 'Fiordes da Noruega',
      epocaLabel: 'Junho a Agosto',
      estiloLabel: 'Expedição Ártica & Cabanas',
      stages: [
        {
          title: 'Ålesund & Entrada no Hjørundfjord',
          days: 'Dias 1–3 · 42 mn',
          desc: 'Embarque na cidade costeira de Ålesund e navegação pelos braços menos visitados dos Alpes de Sunnmøre, com caminhada guiada aos mirantes glaciais e jantar de frutos do mar árticos.'
        },
        {
          title: 'Geirangerfjord & Passagem das Sete Irmãs',
          days: 'Dias 4–6 · 54 mn',
          desc: 'Travessia matinal antes das embarcações regulares, ancoragem próxima às fazendas históricas de encosta e pernoite em cabana de madeira e vidro debruçada sobre a água azul-escura.'
        },
        {
          title: 'Voo Costeiro para Svolvær & Canal de Trollfjord',
          days: 'Dias 7–9 · 68 mn',
          desc: 'Conexão panorâmica até o arquipélago de Lofoten para embarcar em veleiro aquecido rumo à garganta estreita de Trollfjord e às praias de águas cristalinas de Reine.'
        },
        {
          title: 'Henningsvær & Desembarque sob o Sol da Meia-Noite',
          days: 'Dias 10–11 · 46 mn',
          desc: 'Exploração das ilhotas pesqueiras de Henningsvær, sauna flutuante com mergulho no Mar da Noruega e encerramento da expedição.'
        }
      ]
    },
    amalfi: {
      title: 'Costa Amalfitana, Capri & Ilhas Pontinas',
      summary: 'Uma leitura serena e exclusiva da costa tirrena: navegamos cedo entre falésias cultivadas com limoeiros e reservamos as tardes para vilas históricas e grutas marinhas.',
      window: 'Maio a Setembro',
      vessel: 'Goleta Clássica & Palazzos',
      distance: '115 milhas náuticas',
      pace: 'Contemplativo (2,5h/dia)',
      destinoLabel: 'Costa Amalfitana',
      epocaLabel: 'Maio a Setembro',
      estiloLabel: 'Iate Clássico & Palazzos',
      stages: [
        {
          title: 'Cetara & Jardins Suspensos de Ravello',
          days: 'Dias 1–2 · 22 mn',
          desc: 'Saída da vila pesqueira de Cetara ao amanhecer, ancoragem sob os terraços de Amalfi e subida privativa aos jardins históricos de Villa Cimbrone em Ravello.'
        },
        {
          title: 'Conca dei Marini, Furore & Positano por Mar',
          days: 'Dias 3–4 · 28 mn',
          desc: 'Mergulho matinal no fiorde de Furore e almoço à beira d\'água em Nerano, seguidos de ancoragem ao pôr do sol diante da pirâmide colorida de Positano.'
        },
        {
          title: 'Punta Campanella & Faraglioni de Capri',
          days: 'Dias 5–6 · 31 mn',
          desc: 'Travessia pela reserva marinha de Punta Campanella até o lado sul de Capri, explorando enseadas calcárias em barco de madeira antes de subir para Anacapri.'
        },
        {
          title: 'Ilha de Ponza & Enseada de Chiaia di Luna',
          days: 'Dias 7–8 · 34 mn',
          desc: 'Navegação final até o arquipélago pontino para conhecer os portos romanos escavados na rocha e as águas azul-safira de Palmarola.'
        }
      ]
    }
  };

  var DESTINO_OPTIONS = ['Ilhas Gregas', 'Fiordes da Noruega', 'Costa Amalfitana', 'Arquipélago dos Açores'];
  var EPOCA_OPTIONS = ['Maio a Junho', 'Junho a Agosto', 'Setembro a Outubro', 'Maio a Setembro'];
  var ESTILO_OPTIONS = ['Veleiro & Vilas Costeiras', 'Iate Clássico & Palazzos', 'Expedição Ártica & Cabanas', 'Travessia Naturalista & Vulcões'];

  var destinoIdx = -1;
  var epocaIdx = -1;
  var estiloIdx = -1;

  var inputDestino = document.getElementById('input-destino');
  var inputEpoca = document.getElementById('input-epoca');
  var inputEstilo = document.getElementById('input-estilo');
  var inputDuracao = document.getElementById('input-duracao');

  var summaryDestino = document.getElementById('summary-destino');
  var summaryEpoca = document.getElementById('summary-epoca');
  var summaryEstilo = document.getElementById('summary-estilo');
  var summaryDuracao = document.getElementById('summary-duracao');

  function updateSummaryPanel() {
    if (summaryDestino && inputDestino) summaryDestino.textContent = inputDestino.value;
    if (summaryEpoca && inputEpoca) summaryEpoca.textContent = inputEpoca.value;
    if (summaryEstilo && inputEstilo) summaryEstilo.textContent = inputEstilo.value;
    if (summaryDuracao && inputDuracao) summaryDuracao.textContent = inputDuracao.value;
  }

  function selectRoute(routeKey, scrollIntoView) {
    var data = ROUTES_DATA[routeKey];
    if (!data) return;

    var titleEl = document.getElementById('active-route-title');
    var summaryEl = document.getElementById('active-route-summary');
    var windowEl = document.getElementById('spec-window');
    var vesselEl = document.getElementById('spec-vessel');
    var distanceEl = document.getElementById('spec-distance');
    var paceEl = document.getElementById('spec-pace');
    var stagesContainer = document.getElementById('itinerary-stages-container');

    if (titleEl) titleEl.textContent = data.title;
    if (summaryEl) summaryEl.textContent = data.summary;
    if (windowEl) windowEl.textContent = data.window;
    if (vesselEl) vesselEl.textContent = data.vessel;
    if (distanceEl) distanceEl.textContent = data.distance;
    if (paceEl) paceEl.textContent = data.pace;

    if (stagesContainer) {
      stagesContainer.innerHTML = '';
      data.stages.forEach(function (st) {
        var row = document.createElement('div');
        row.className = 'stage-row';

        var top = document.createElement('div');
        top.className = 'stage-row-top';

        var h4 = document.createElement('h4');
        h4.textContent = st.title;

        var span = document.createElement('span');
        span.className = 'stage-days';
        span.textContent = st.days;

        top.appendChild(h4);
        top.appendChild(span);

        var p = document.createElement('p');
        p.textContent = st.desc;

        row.appendChild(top);
        row.appendChild(p);
        stagesContainer.appendChild(row);
      });
    }

    document.querySelectorAll('[data-route-tab]').forEach(function (btn) {
      var isSelected = btn.getAttribute('data-route-tab') === routeKey;
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    document.querySelectorAll('[data-select-route]').forEach(function (btn) {
      var isSelected = btn.getAttribute('data-select-route') === routeKey;
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });

    document.querySelectorAll('[data-card-panel]').forEach(function (panel) {
      if (panel.getAttribute('data-card-panel') === routeKey) {
        panel.classList.add('is-highlighted');
      } else {
        panel.classList.remove('is-highlighted');
      }
    });

    if (inputDestino) inputDestino.value = data.destinoLabel;
    if (inputEpoca) inputEpoca.value = data.epocaLabel;
    if (inputEstilo) inputEstilo.value = data.estiloLabel;
    updateSummaryPanel();

    if (scrollIntoView) {
      var targetSec = document.getElementById('roteiros');
      if (targetSec) targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Hero search controls interactive cycling (preserves initial comp words on load)
  var heroBtnDestino = document.getElementById('hero-btn-destino');
  var heroLabelDestino = document.getElementById('hero-label-destino');
  if (heroBtnDestino && heroLabelDestino) {
    heroBtnDestino.addEventListener('click', function () {
      destinoIdx = (destinoIdx + 1) % DESTINO_OPTIONS.length;
      var chosen = DESTINO_OPTIONS[destinoIdx];
      heroLabelDestino.textContent = chosen;
      if (inputDestino) inputDestino.value = chosen;
      updateSummaryPanel();
    });
  }

  var heroBtnEpoca = document.getElementById('hero-btn-epoca');
  var heroLabelEpoca = document.getElementById('hero-label-epoca');
  if (heroBtnEpoca && heroLabelEpoca) {
    heroBtnEpoca.addEventListener('click', function () {
      epocaIdx = (epocaIdx + 1) % EPOCA_OPTIONS.length;
      var chosen = EPOCA_OPTIONS[epocaIdx];
      heroLabelEpoca.textContent = chosen;
      if (inputEpoca) inputEpoca.value = chosen;
      updateSummaryPanel();
    });
  }

  var heroBtnEstilo = document.getElementById('hero-btn-estilo');
  var heroLabelEstilo = document.getElementById('hero-label-estilo');
  if (heroBtnEstilo && heroLabelEstilo) {
    heroBtnEstilo.addEventListener('click', function () {
      estiloIdx = (estiloIdx + 1) % ESTILO_OPTIONS.length;
      var chosen = ESTILO_OPTIONS[estiloIdx];
      heroLabelEstilo.textContent = chosen;
      if (inputEstilo) inputEstilo.value = chosen;
      updateSummaryPanel();
    });
  }

  var heroSubmit = document.getElementById('hero-search-submit');
  if (heroSubmit) {
    heroSubmit.addEventListener('click', function () {
      var currentVal = inputDestino ? inputDestino.value : 'Ilhas Gregas';
      if (currentVal.indexOf('Noruega') !== -1) {
        selectRoute('noruega', true);
      } else if (currentVal.indexOf('Amalfitana') !== -1) {
        selectRoute('amalfi', true);
      } else {
        selectRoute('grecia', true);
      }
    });
  }

  // Destination card clicks & route selector buttons
  document.querySelectorAll('[data-route-target]').forEach(function (fig) {
    fig.addEventListener('click', function () {
      selectRoute(fig.getAttribute('data-route-target'), true);
    });
  });

  document.querySelectorAll('[data-select-route]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      selectRoute(btn.getAttribute('data-select-route'), true);
    });
  });

  document.querySelectorAll('[data-route-tab]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      selectRoute(btn.getAttribute('data-route-tab'), false);
    });
  });

  // Seasonal table row click prefill
  document.querySelectorAll('[data-prefill-destino]').forEach(function (row) {
    row.addEventListener('click', function () {
      var dest = row.getAttribute('data-prefill-destino');
      var epoca = row.getAttribute('data-prefill-epoca');
      var estilo = row.getAttribute('data-prefill-estilo');
      if (inputDestino && dest) inputDestino.value = dest;
      if (inputEpoca && epoca) inputEpoca.value = epoca;
      if (inputEstilo && estilo) inputEstilo.value = estilo;
      updateSummaryPanel();
      var plannerSection = document.getElementById('planejar');
      if (plannerSection) plannerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  [inputDestino, inputEpoca, inputEstilo, inputDuracao].forEach(function (el) {
    if (el) el.addEventListener('change', updateSummaryPanel);
  });

  var form = document.getElementById('bespoke-planner-form');
  var statusEl = document.getElementById('planner-status');
  if (form && statusEl) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nomeInput = document.getElementById('input-nome');
      var emailInput = document.getElementById('input-email');
      var nome = nomeInput ? nomeInput.value.trim() : '';
      var email = emailInput ? emailInput.value.trim() : '';

      if (!nome) {
        statusEl.textContent = 'Informe seu nome para personalizar o dossiê de viagem.';
        statusEl.classList.add('is-error');
        if (nomeInput) nomeInput.focus();
        return;
      }

      if (!email || email.indexOf('@') === -1) {
        statusEl.textContent = 'Informe um endereço de e-mail válido (ex.: voce@dominio.com).';
        statusEl.classList.add('is-error');
        if (emailInput) emailInput.focus();
        return;
      }

      statusEl.classList.remove('is-error');
      statusEl.textContent = 'Briefing registrado para ' + nome + ' (' + inputDestino.value + ' · ' + inputEpoca.value + '). Nossa curadoria enviará a proposta para ' + email + '.';
    });
  }
})();
