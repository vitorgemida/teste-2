(function () {
  'use strict';

  /* ==========================================================================
     1. INITIAL DATA: ROUTES & EDITORIAL SUBPAGE POSTS
     ========================================================================== */
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

  var INITIAL_POSTS = [
    {
      id: 'post-caruaru',
      title: 'São João de Caruaru: Festa Junina, Guia Completo e Dicas',
      category: 'brasil',
      slug: 'sao-joao-de-caruaru-festa-junina-guia-dicas',
      excerpt: 'Como planejar sua viagem para a maior festa junina do Brasil no Agreste Pernambucano: polos culturais, gastronomia típica do Alto do Moura, logística a partir do Recife e roteiro dia a dia.',
      coverKey: 'hero-ocean-photo',
      coverUrl: '',
      season: 'Junho a Julho',
      duration: '4 a 5 dias',
      style: 'Cultura, Gastronomia & Tradição',
      readingTime: '7 min de leitura',
      tip: 'Reserve sua hospedagem com pelo menos 60 dias de antecedência e dedique uma tarde inteira aos ateliês de cerâmica figurativa do Mestre Vitalino no Alto do Moura.',
      author: 'Curadoria VÉRTICE AZUL',
      createdAt: '2026-10-24T12:00:00Z',
      content: [
        '## Por que conhecer o São João de Caruaru',
        'Reconhecido em todo o país pela autenticidade e grandiosidade de sua programação, o São João de Caruaru transforma o Agreste de Pernambuco a cada mês de junho. Ao longo de mais de trinta dias de celebração, a cidade articula dezenas de polos culturais que vão muito além dos grandes palcos: há quadrilhas estilizadas, bacamarteiros, bandas de pífanos e feiras gastronômicas que preservam a memória nordestina.',
        '> Dica prática: Combine os shows noturnos do Pátio de Eventos Luiz Gonzaga com manhãs culturais na Estação Ferroviária e almoços regionais no Alto do Moura.',
        '## Principais Polos que Você Precisa Visitar',
        '- Pátio de Eventos Luiz Gonzaga: O coração noturno da festa, com programação de forró tradicional, xote, baião e grandes nomes da música nordestina.',
        '- Alto do Moura: Berço da arte figurativa em barro deixada por Mestre Vitalino, onde os ateliês permanecem abertos durante o dia com forró pé-de-serra ao vivo e restaurantes de carne de sol e bode assado.',
        '- Polo da Estação Ferroviária: Espaço charmoso dedicado ao forró raiz, repente, embolada, exposição de carros antigos de linha férrea e apresentações de quadrilhas juninas.',
        '- Feira de Caruaru (Parque 18 de Maio): Patrimônio cultural imaterial brasileiro, ideal para conhecer o artesanato em couro, renda renascença, cordel e especiarias.',
        '## Roteiro Sugerido de 4 Dias em Caruaru',
        'No primeiro dia, chegue pelo Recife (cerca de 130 km pela BR-232 duplicada), faça o check-in no meio da tarde e caminhe pela Estação Ferroviária antes de seguir ao Pátio de Eventos. No segundo dia, reserve a manhã para a Feira de Artesanato e passe a tarde no Alto do Moura visitando a Casa-Museu Mestre Vitalino.',
        'No terceiro dia, acompanhe o desfile das quadrilhas juninas e experimente as comidas gigantes e quitutes de milho (pamonha, canjica, bolo de milho assado na palha). No quarto dia, aproveite um café da manhã regional com cuscuz, queijo coalho na brasa e bolo Souza Leão antes do retorno ao litoral pernambucano.'
      ].join('\n\n')
    },
    {
      id: 'post-ciclades',
      title: 'Cíclades Ocidentais: Roteiro de Veleiro e Vilas nas Ilhas Gregas',
      category: 'grecia',
      slug: 'ciclades-ocidentais-roteiro-ilhas-gregas',
      excerpt: 'Um guia detalhado para navegar entre Paros, Sifnos, Milos, Folegandros e Santorini fugindo das rotas de cruzeiro convencionais na melhor janela do Mar Egeu.',
      coverKey: 'card-1-photo',
      coverUrl: '',
      season: 'Maio a Junho · Setembro a Outubro',
      duration: '8 a 9 dias',
      style: 'Veleiro & Vilas Costeiras',
      readingTime: '8 min de leitura',
      tip: 'Prefira setembro e início de outubro: o mar mantém 24 °C após o verão, mas o vento Meltemi perde força e as enseadas de Milos ficam silenciosas.',
      author: 'Curadoria VÉRTICE AZUL',
      createdAt: '2026-10-23T15:30:00Z',
      content: [
        '## A Arte de Navegar pelas Cíclades Ocidentais',
        'Enquanto os grandes transatlânticos concentram visitantes em poucas horas nas mesmas docas, navegar em catamarã ou veleiro pelas Cíclades Ocidentais revela outra Grécia: enseadas de calcário branco acessíveis apenas pela água, tabernas familiares à beira-mar em Sifnos e vilarejos suspensos na falésia em Folegandros.',
        '> Dica prática: Embarque em Paros em vez de Atenas para economizar um dia inteiro de travessia aberta e já começar o roteiro em águas abrigadas.',
        '## Destaques Imperdíveis do Roteiro',
        '- Enseada de Despotiko (Antiparos): Ancoradouro de águas azul-turquesa rasas em frente a um santuário arqueológico insular desabitado.',
        '- Baía de Vathy e Kamares (Sifnos): A ilha mais gastronômica das Cíclades, famosa pela cerâmica tradicional e pelo cozido lento em panelas de barro.',
        '- Falésias de Kleftiko e Sarakiniko (Milos): Formações vulcânicas brancas esculpidas pelo vento e arcos marinhos onde o barco ancora para mergulho matinal.',
        '- Chora de Folegandros: Praças sombreadas por buganvílias a 200 metros acima do Mar Egeu, perfeitas para caminhar ao pôr do sol.',
        '## Logística e Melhor Janela Climática',
        'A janela ouro compreende o final da primavera (maio e junho) e o início do outono (setembro e primeira quinzena de outubro). Nesses meses, as travessias diárias duram entre 2h30 e 4h de navegação tranquila.'
      ].join('\n\n')
    },
    {
      id: 'post-fiordes',
      title: 'Fiordes da Noruega e Lofoten: Guia de Expedição no Verão Ártico',
      category: 'noruega',
      slug: 'fiordes-da-noruega-lofoten-guia-dicas',
      excerpt: 'De Ålesund e Geirangerfjord às praias cristalinas do arquipélago de Lofoten: como organizar uma expedição costeira sob a luz dourada do sol da meia-noite.',
      coverKey: 'card-2-photo',
      coverUrl: '',
      season: 'Junho a Agosto',
      duration: '10 a 11 dias',
      style: 'Expedição Ártica & Cabanas',
      readingTime: '6 min de leitura',
      tip: 'Navegue pelo Geirangerfjord antes das 8h30 da manhã para contemplar as cachoeiras das Sete Irmãs com a lâmina d\'água completamente espelhada.',
      author: 'Curadoria VÉRTICE AZUL',
      createdAt: '2026-10-22T10:15:00Z',
      content: [
        '## Onde os Paredões Glaciais Encontram o Oceano',
        'A costa oeste da Noruega e o arquipélago de Lofoten, acima do Círculo Polar Ártico, oferecem uma das geografias costeiras mais dramáticas do planeta. Durante o verão boreal, a luz contínua permite navegar e caminhar pelas cristas montanhosas sem pressa.',
        '> Dica prática: Combine pernoites a bordo de embarcações expedicionárias com estadias nas tradicionais Rorbuer — cabanas históricas de pescadores restauradas com arquitetura nórdica contemporânea.',
        '## Etapas Essenciais da Travessia',
        '- Ålesund e Hjørundfjord: Arquitetura Art Nouveau costeira seguida por um dos fiordes mais preservados e silenciosos dos Alpes de Sunnmøre.',
        '- Geirangerfjord: Patrimônio Mundial da UNESCO com fazendas históricas empoleiradas em penhascos verticais.',
        '- Trollfjord e Reine (Lofoten): Gargantas marinhas estreitas emolduradas por picos graníticos e lagoas de água transparente.',
        '- Henningsvær: Ilhotas pesqueiras conectadas por pontes cênicas, saunas flutuantes e gastronomia ártica baseada em bacalhau fresco.'
      ].join('\n\n')
    },
    {
      id: 'post-amalfi',
      title: 'Costa Amalfitana, Capri e Ilhas Pontinas: Roteiro Completo por Mar',
      category: 'italia',
      slug: 'costa-amalfitana-capri-roteiro-completo',
      excerpt: 'Navegando pelo Golfo de Salerno, Ravello, Positano, Capri e a secreta ilha de Ponza: como viver a costa italiana longe do trânsito das estradas costeiras.',
      coverKey: 'card-3-photo',
      coverUrl: '',
      season: 'Maio a Setembro',
      duration: '8 dias',
      style: 'Iate Clássico & Palazzos',
      readingTime: '7 min de leitura',
      tip: 'Aproxime-se de Positano e Capri pelo mar no início da manhã ou após as 17h30, quando os barcos de passeio diurno deixam as enseadas.',
      author: 'Curadoria VÉRTICE AZUL',
      createdAt: '2026-10-21T09:00:00Z',
      content: [
        '## A Costa Tirrena Vista do Convés',
        'Percorrer a Costa Amalfitana por mar muda completamente a percepção da viagem: em vez das curvas engarrafadas da estrada SS163, você desliza entre falésias perfumadas por limoeiros, atraca diretamente em pequenos píeres familiares para almoçar em Nerano e sobe a Ravello no horário mais sereno.',
        '> Dica prática: Estenda o roteiro além de Capri até o Arquipélago Pontino (Ponza e Palmarola), o refúgio marítimo favorito dos navegadores italianos.',
        '## Paradas Inesquecíveis na Rota',
        '- Cetara e Ravello: Comece pela autêntica vila pesqueira de Cetara e suba aos terraços panorâmicos de Villa Cimbrone em Ravello.',
        '- Fiorde de Furore e Conca dei Marini: Mergulho matinal em águas azul-cobalto antes de ancorar diante da pirâmide colorida de Positano.',
        '- Faraglioni de Capri e Anacapri: Contorno completo da ilha em barco clássico de madeira com tarde livre nos caminhos floridos de Anacapri.',
        '- Ponza e Palmarola: Falésias brancas, grutas romanas e enseadas de água cristalina no Mar Tirreno.'
      ].join('\n\n')
    }
  ];

  /* ==========================================================================
     2. STORAGE KEYS, DEFAULT ADMIN ACCOUNT & CLOUD HYBRID ADAPTER
     ========================================================================== */
  var STORAGE_POSTS_KEY = 'vertice_azul_posts_v1';
  var STORAGE_USERS_KEY = 'vertice_azul_users_v1';
  var STORAGE_SESSION_KEY = 'vertice_azul_session_v1';
  var STORAGE_CLOUD_KEY = 'vertice_azul_cloud_cfg_v1';
  var STORAGE_BOOKMARKS_KEY = 'vertice_azul_bookmarks_v1';

  var DEFAULT_ADMIN_USER = {
    id: 'admin-default',
    name: 'Administrador VÉRTICE AZUL',
    email: atob('YWRtaW5AdmVydGljZWF6dWwuY29t'),
    passwordHash: atob('QWRtaW5AMTIz'),
    role: 'admin',
    createdAt: '2026-10-24T00:00:00Z'
  };

  function getCloudSettings() {
    var defaultSupabaseUrl = 'https://tgwfmaqpwedudrqspuip.supabase.co';
    var defaultSupabaseKey = 'sb_publishable_SUywLSqh13CxM3EC2WtvZw_ysAyXt7b';
    var base = window.VERTICE_CLOUD_CONFIG || {
      provider: 'supabase',
      supabase: { url: defaultSupabaseUrl, anonKey: defaultSupabaseKey },
      firebase: { apiKey: '', projectId: '' }
    };
    try {
      var saved = localStorage.getItem(STORAGE_CLOUD_KEY);
      if (saved) {
        var parsed = JSON.parse(saved);
        return {
          provider: parsed.provider || base.provider || 'supabase',
          supabase: {
            url: (parsed.supabase && parsed.supabase.url) || (base.supabase && base.supabase.url) || defaultSupabaseUrl,
            anonKey: (parsed.supabase && parsed.supabase.anonKey) || (base.supabase && base.supabase.anonKey) || defaultSupabaseKey
          },
          firebase: {
            apiKey: (parsed.firebase && parsed.firebase.apiKey) || (base.firebase && base.firebase.apiKey) || '',
            projectId: (parsed.firebase && parsed.firebase.projectId) || (base.firebase && base.firebase.projectId) || ''
          }
        };
      }
    } catch (e) {}
    return {
      provider: base.provider || 'supabase',
      supabase: {
        url: (base.supabase && base.supabase.url) || defaultSupabaseUrl,
        anonKey: (base.supabase && base.supabase.anonKey) || defaultSupabaseKey
      },
      firebase: {
        apiKey: (base.firebase && base.firebase.apiKey) || '',
        projectId: (base.firebase && base.firebase.projectId) || ''
      }
    };
  }

  function getActiveCloudMode() {
    var cfg = getCloudSettings();
    if (cfg.provider === 'local') return 'local';
    if (cfg.provider === 'supabase' && cfg.supabase.url && cfg.supabase.anonKey) return 'supabase';
    if (cfg.provider === 'firebase' && cfg.firebase.projectId && cfg.firebase.apiKey) return 'firebase';
    if (cfg.supabase && cfg.supabase.url && cfg.supabase.anonKey) return 'supabase';
    if (cfg.firebase && cfg.firebase.projectId && cfg.firebase.apiKey) return 'firebase';
    return 'local';
  }

  function loadLocalPosts() {
    try {
      var raw = localStorage.getItem(STORAGE_POSTS_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    try {
      localStorage.setItem(STORAGE_POSTS_KEY, JSON.stringify(INITIAL_POSTS));
    } catch (e) {}
    return INITIAL_POSTS.slice();
  }

  function saveLocalPosts(postsList) {
    try {
      localStorage.setItem(STORAGE_POSTS_KEY, JSON.stringify(postsList));
    } catch (e) {}
  }

  function loadLocalUsers() {
    var users = [DEFAULT_ADMIN_USER];
    try {
      var raw = localStorage.getItem(STORAGE_USERS_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          users = parsed;
        }
      }
    } catch (e) {}
    var hasAdmin = users.some(function (u) {
      return u.email.toLowerCase() === DEFAULT_ADMIN_USER.email.toLowerCase();
    });
    if (!hasAdmin) {
      users.unshift(DEFAULT_ADMIN_USER);
    }
    try {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
    } catch (e) {}
    return users;
  }

  function saveLocalUsers(usersList) {
    try {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(usersList));
    } catch (e) {}
  }

  /* Cloud Sync Functions (Supabase & Firebase REST) */
  function syncPostToCloud(post) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode === 'supabase') {
      var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/posts';
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': cfg.supabase.anonKey,
          'Authorization': 'Bearer ' + cfg.supabase.anonKey,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          id: post.id,
          title: post.title,
          category: post.category,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          cover_key: post.coverKey || 'hero-ocean-photo',
          cover_url: post.coverUrl || '',
          season: post.season || '',
          duration: post.duration || '',
          style: post.style || '',
          reading_time: post.readingTime || '6 min de leitura',
          tip: post.tip || '',
          author: post.author || 'Curadoria VÉRTICE AZUL',
          created_at: post.createdAt || new Date().toISOString()
        })
      }).catch(function () {});
    }
    if (mode === 'firebase') {
      var fbUrl = 'https://firestore.googleapis.com/v1/projects/' + encodeURIComponent(cfg.firebase.projectId) + '/databases/(default)/documents/posts/' + encodeURIComponent(post.id) + '?key=' + encodeURIComponent(cfg.firebase.apiKey);
      var fields = {
        id: { stringValue: String(post.id) },
        title: { stringValue: String(post.title) },
        category: { stringValue: String(post.category) },
        slug: { stringValue: String(post.slug) },
        excerpt: { stringValue: String(post.excerpt || '') },
        content: { stringValue: String(post.content || '') },
        coverKey: { stringValue: String(post.coverKey || 'hero-ocean-photo') },
        coverUrl: { stringValue: String(post.coverUrl || '') },
        season: { stringValue: String(post.season || '') },
        duration: { stringValue: String(post.duration || '') },
        style: { stringValue: String(post.style || '') },
        readingTime: { stringValue: String(post.readingTime || '6 min de leitura') },
        tip: { stringValue: String(post.tip || '') },
        author: { stringValue: String(post.author || 'Curadoria VÉRTICE AZUL') },
        createdAt: { stringValue: String(post.createdAt || new Date().toISOString()) }
      };
      return fetch(fbUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: fields })
      }).catch(function () {});
    }
    return Promise.resolve();
  }

  function deletePostFromCloud(postId) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode === 'supabase') {
      var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/posts?id=eq.' + encodeURIComponent(postId);
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'apikey': cfg.supabase.anonKey,
          'Authorization': 'Bearer ' + cfg.supabase.anonKey
        }
      }).catch(function () {});
    }
    if (mode === 'firebase') {
      var fbUrl = 'https://firestore.googleapis.com/v1/projects/' + encodeURIComponent(cfg.firebase.projectId) + '/databases/(default)/documents/posts/' + encodeURIComponent(postId) + '?key=' + encodeURIComponent(cfg.firebase.apiKey);
      return fetch(fbUrl, { method: 'DELETE' }).catch(function () {});
    }
    return Promise.resolve();
  }

  function syncUserToCloud(userObj) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode === 'supabase' && userObj && userObj.email) {
      var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/accounts';
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': cfg.supabase.anonKey,
          'Authorization': 'Bearer ' + cfg.supabase.anonKey,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          id: userObj.id || ('user-' + Date.now()),
          name: userObj.name,
          email: userObj.email.toLowerCase(),
          password_hash: userObj.passwordHash,
          role: userObj.role || 'user',
          created_at: userObj.createdAt || new Date().toISOString()
        })
      }).catch(function () {});
    }
    return Promise.resolve();
  }

  function fetchUsersFromCloud(callback) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode === 'supabase') {
      var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/accounts?select=*&order=created_at.asc';
      fetch(url, {
        headers: {
          'apikey': cfg.supabase.anonKey,
          'Authorization': 'Bearer ' + cfg.supabase.anonKey
        }
      })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (rows) {
          if (!Array.isArray(rows)) return;
          if (rows.length === 0) {
            var localUsers = loadLocalUsers();
            localUsers.forEach(function (u) { syncUserToCloud(u); });
            return;
          }
          var mapped = rows.map(function (r) {
            return {
              id: r.id,
              name: r.name,
              email: r.email,
              passwordHash: r.password_hash,
              role: r.role || 'user',
              createdAt: r.created_at || new Date().toISOString()
            };
          });
          var hasDefaultAdmin = mapped.some(function (u) {
            return u.email.toLowerCase() === DEFAULT_ADMIN_USER.email.toLowerCase();
          });
          if (!hasDefaultAdmin) {
            mapped.unshift(DEFAULT_ADMIN_USER);
            syncUserToCloud(DEFAULT_ADMIN_USER);
          }
          saveLocalUsers(mapped);
          if (callback) callback(mapped);
        })
        .catch(function () {});
    }
  }

  function fetchPostsFromCloud(callback) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode === 'supabase') {
      var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/posts?select=*&order=created_at.desc';
      fetch(url, {
        headers: {
          'apikey': cfg.supabase.anonKey,
          'Authorization': 'Bearer ' + cfg.supabase.anonKey
        }
      })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (rows) {
          if (!Array.isArray(rows)) return;
          if (rows.length === 0) {
            var seedPosts = loadLocalPosts();
            seedPosts.forEach(function (p) { syncPostToCloud(p); });
            return;
          }
          var mapped = rows.map(function (r) {
            return {
              id: r.id,
              title: r.title,
              category: r.category,
              slug: r.slug,
              excerpt: r.excerpt || '',
              content: r.content || '',
              coverKey: r.cover_key || 'hero-ocean-photo',
              coverUrl: r.cover_url || '',
              season: r.season || '',
              duration: r.duration || '',
              style: r.style || '',
              readingTime: r.reading_time || '6 min de leitura',
              tip: r.tip || '',
              author: r.author || 'Curadoria VÉRTICE AZUL',
              createdAt: r.created_at || new Date().toISOString()
            };
          });
          saveLocalPosts(mapped);
          if (callback) callback(mapped);
        })
        .catch(function () {});
    } else if (mode === 'firebase') {
      var fbUrl = 'https://firestore.googleapis.com/v1/projects/' + encodeURIComponent(cfg.firebase.projectId) + '/databases/(default)/documents/posts?key=' + encodeURIComponent(cfg.firebase.apiKey);
      fetch(fbUrl)
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (data && Array.isArray(data.documents) && data.documents.length > 0) {
            var mapped = data.documents.map(function (doc) {
              var f = doc.fields || {};
              function s(k, d) { return (f[k] && f[k].stringValue) || d || ''; }
              return {
                id: s('id', 'post-' + Date.now()),
                title: s('title'),
                category: s('category', 'brasil'),
                slug: s('slug'),
                excerpt: s('excerpt'),
                content: s('content'),
                coverKey: s('coverKey', 'hero-ocean-photo'),
                coverUrl: s('coverUrl'),
                season: s('season'),
                duration: s('duration'),
                style: s('style'),
                readingTime: s('readingTime', '6 min de leitura'),
                tip: s('tip'),
                author: s('author', 'Curadoria VÉRTICE AZUL'),
                createdAt: s('createdAt', new Date().toISOString())
              };
            });
            saveLocalPosts(mapped);
            if (callback) callback(mapped);
          }
        })
        .catch(function () {});
    }
  }

  /* ==========================================================================
     3. SESSION & AUTHENTICATION WITH "REMEMBER ME"
     ========================================================================== */
  function getActiveSession() {
    try {
      var persistent = localStorage.getItem(STORAGE_SESSION_KEY);
      if (persistent) {
        var parsedP = JSON.parse(persistent);
        if (parsedP && parsedP.email) return parsedP;
      }
    } catch (e) {}
    try {
      var temp = sessionStorage.getItem(STORAGE_SESSION_KEY);
      if (temp) {
        var parsedT = JSON.parse(temp);
        if (parsedT && parsedT.email) return parsedT;
      }
    } catch (e) {}
    return null;
  }

  function saveActiveSession(userObj, rememberMe) {
    var payload = JSON.stringify({
      id: userObj.id,
      name: userObj.name,
      email: userObj.email,
      role: userObj.role || 'user',
      remember: !!rememberMe,
      loggedAt: new Date().toISOString()
    });
    try {
      if (rememberMe) {
        localStorage.setItem(STORAGE_SESSION_KEY, payload);
        sessionStorage.removeItem(STORAGE_SESSION_KEY);
      } else {
        sessionStorage.setItem(STORAGE_SESSION_KEY, payload);
        localStorage.removeItem(STORAGE_SESSION_KEY);
      }
    } catch (e) {}
  }

  function clearActiveSession() {
    try {
      localStorage.removeItem(STORAGE_SESSION_KEY);
      sessionStorage.removeItem(STORAGE_SESSION_KEY);
    } catch (e) {}
  }

  function getSavedBookmarks() {
    var session = getActiveSession();
    var suffix = session ? session.email.toLowerCase() : 'guest';
    try {
      var raw = localStorage.getItem(STORAGE_BOOKMARKS_KEY + '_' + suffix);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [];
  }

  function toggleBookmark(postId) {
    var session = getActiveSession();
    var suffix = session ? session.email.toLowerCase() : 'guest';
    var list = getSavedBookmarks();
    var idx = list.indexOf(postId);
    if (idx === -1) {
      list.push(postId);
    } else {
      list.splice(idx, 1);
    }
    try {
      localStorage.setItem(STORAGE_BOOKMARKS_KEY + '_' + suffix, JSON.stringify(list));
    } catch (e) {}
    return idx === -1;
  }

  /* ==========================================================================
     4. UTILITIES: SLUGIFY, COVER RESOLUTION & MARKDOWN RENDERING
     ========================================================================== */
  function slugify(text) {
    return String(text || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function formatCategoryDisplay(catSlug) {
    var map = {
      brasil: 'Brasil',
      grecia: 'Grécia',
      noruega: 'Noruega',
      italia: 'Itália',
      portugal: 'Portugal',
      espanha: 'Espanha',
      franca: 'França'
    };
    var clean = slugify(catSlug || 'destino');
    if (map[clean]) return map[clean];
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  }

  function resolvePostCoverSrc(post) {
    if (post.coverUrl && post.coverUrl.trim() !== '') {
      return post.coverUrl.trim();
    }
    var key = post.coverKey || 'hero-ocean-photo';
    if (window.__PLATE_FALLBACKS && window.__PLATE_FALLBACKS[key]) {
      return window.__PLATE_FALLBACKS[key];
    }
    return 'assets/plates/' + key + '.png';
  }

  function formatDatePt(isoStr) {
    try {
      var d = new Date(isoStr);
      if (isNaN(d.getTime())) return '24 Out 2026';
      var months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
    } catch (e) {
      return '24 Out 2026';
    }
  }

  function renderArticleProse(container, rawContent) {
    if (!container) return;
    container.innerHTML = '';
    var blocks = String(rawContent || '').split(/\n\s*\n/);
    blocks.forEach(function (block) {
      var trimmed = block.trim();
      if (!trimmed) return;

      if (trimmed.indexOf('## ') === 0) {
        var h2 = document.createElement('h2');
        h2.textContent = trimmed.replace(/^##\s+/, '');
        container.appendChild(h2);
        return;
      }

      if (trimmed.indexOf('> ') === 0) {
        var bq = document.createElement('blockquote');
        bq.textContent = trimmed.replace(/^>\s+/, '');
        container.appendChild(bq);
        return;
      }

      var lines = trimmed.split('\n');
      var isList = lines.every(function (l) { return l.trim().indexOf('- ') === 0; });
      if (isList) {
        var ul = document.createElement('ul');
        lines.forEach(function (l) {
          var li = document.createElement('li');
          li.textContent = l.trim().replace(/^-\s+/, '');
          ul.appendChild(li);
        });
        container.appendChild(ul);
        return;
      }

      var p = document.createElement('p');
      p.textContent = trimmed;
      container.appendChild(p);
    });
  }

  /* ==========================================================================
     5. SUBPAGE ROUTING (/categoria/slug-do-post) FOR GITHUB PAGES & LOCAL
     ========================================================================== */
  function detectSiteBasePath() {
    if (window.__VERTICE_BASE_PATH) return window.__VERTICE_BASE_PATH;
    var path = window.location.pathname || '/';
    var posts = loadLocalPosts();
    for (var i = 0; i < posts.length; i++) {
      var sub = '/' + posts[i].category + '/' + posts[i].slug;
      var idx = path.indexOf(sub);
      if (idx !== -1) {
        return path.slice(0, idx) || '';
      }
    }
    var dir = path.replace(/\/index\.html$/i, '').replace(/\/+$/, '');
    return dir;
  }

  var SITE_BASE_PATH = detectSiteBasePath();

  function buildSubpagePrettyUrl(category, slug) {
    var cleanCat = slugify(category || 'brasil');
    var cleanSlug = slugify(slug || 'guia');
    var origin = window.location.origin && window.location.origin !== 'null'
      ? window.location.origin
      : 'https://seusite.github.io';
    return origin + SITE_BASE_PATH + '/' + cleanCat + '/' + cleanSlug;
  }

  function buildSubpageRelativePath(category, slug) {
    return '/' + slugify(category || 'brasil') + '/' + slugify(slug || 'guia');
  }

  var activeFilterCategory = 'all';
  var activeSearchQuery = '';
  var currentOpenPost = null;

  /* ==========================================================================
     6. UI RENDERING: ACCOUNT BAR, POSTS PORTAL, SUBPAGE VIEW & ADMIN TABLE
     ========================================================================== */
  function updateAccountUI() {
    var session = getActiveSession();
    var mode = getActiveCloudMode();
    var dotEl = document.getElementById('cloud-status-dot');
    var titleEl = document.getElementById('user-greeting-title');
    var subEl = document.getElementById('user-greeting-sub');
    var loggedOutActions = document.getElementById('logged-out-actions');
    var loggedInActions = document.getElementById('logged-in-actions');
    var roleBadge = document.getElementById('user-role-badge');
    var btnAdminPanel = document.getElementById('btn-toggle-admin-panel');
    var btnCloudCfg = document.getElementById('btn-open-cloud-config');
    var btnNewPostCta = document.getElementById('btn-new-post-cta');
    var adminSection = document.getElementById('painel-admin');
    var subpageAdminActions = document.getElementById('subpage-admin-actions');
    var savedPill = document.getElementById('filter-saved-pill');

    if (dotEl) {
      if (mode !== 'local') {
        dotEl.classList.add('is-cloud');
      } else {
        dotEl.classList.remove('is-cloud');
      }
    }

    if (!session) {
      if (titleEl) titleEl.textContent = 'Visitante · Conta Desconectada';
      if (subEl) subEl.textContent = 'Entre na sua conta ou cadastre-se gratuitamente para salvar seus guias e roteiros favoritos.';
      if (loggedOutActions) loggedOutActions.hidden = false;
      if (loggedInActions) loggedInActions.hidden = true;
      if (btnNewPostCta) btnNewPostCta.hidden = true;
      if (adminSection) adminSection.hidden = true;
      if (subpageAdminActions) subpageAdminActions.hidden = true;
      if (savedPill) savedPill.hidden = true;
    } else {
      var isAdmin = session.role === 'admin';
      var rememberText = session.remember ? 'Login lembrado neste dispositivo' : 'Sessão temporária';
      if (titleEl) titleEl.textContent = 'Olá, ' + session.name + ' (' + session.email + ')';
      if (subEl) subEl.textContent = rememberText;
      if (loggedOutActions) loggedOutActions.hidden = true;
      if (loggedInActions) loggedInActions.hidden = false;
      if (savedPill) savedPill.hidden = false;

      if (roleBadge) {
        roleBadge.textContent = isAdmin ? 'Administrador' : 'Conta Viajante';
        if (isAdmin) {
          roleBadge.classList.add('is-admin');
        } else {
          roleBadge.classList.remove('is-admin');
        }
      }

      if (btnAdminPanel) btnAdminPanel.hidden = !isAdmin;
      if (btnCloudCfg) btnCloudCfg.hidden = !isAdmin;
      if (btnNewPostCta) btnNewPostCta.hidden = !isAdmin;
      if (subpageAdminActions) subpageAdminActions.hidden = !isAdmin;
      if (!isAdmin && adminSection) adminSection.hidden = true;
    }

    renderPostsGrid();
    renderAdminTables();
  }

  function syncCategoryFilterPills(posts) {
    var container = document.getElementById('posts-category-filters');
    if (!container) return;
    var existingCats = ['brasil', 'grecia', 'noruega', 'italia'];
    posts.forEach(function (p) {
      var c = slugify(p.category);
      if (c && existingCats.indexOf(c) === -1) {
        existingCats.push(c);
      }
    });

    var savedPill = document.getElementById('filter-saved-pill');
    container.innerHTML = '';

    var allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = 'category-filter-pill' + (activeFilterCategory === 'all' ? ' is-active' : '');
    allBtn.setAttribute('data-filter-cat', 'all');
    allBtn.textContent = 'Todos os Destinos';
    container.appendChild(allBtn);

    existingCats.forEach(function (cat) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'category-filter-pill' + (activeFilterCategory === cat ? ' is-active' : '');
      btn.setAttribute('data-filter-cat', cat);
      btn.textContent = formatCategoryDisplay(cat);
      container.appendChild(btn);
    });

    if (savedPill) {
      savedPill.className = 'category-filter-pill' + (activeFilterCategory === 'saved' ? ' is-active' : '');
      container.appendChild(savedPill);
    }

    container.querySelectorAll('[data-filter-cat]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeFilterCategory = btn.getAttribute('data-filter-cat') || 'all';
        syncCategoryFilterPills(loadLocalPosts());
        renderPostsGrid();
      });
    });
  }

  function createPostCardElement(post) {
    var session = getActiveSession();
    var isAdmin = session && session.role === 'admin';
    var subpagePath = buildSubpageRelativePath(post.category, post.slug);

    var article = document.createElement('article');
    article.className = 'post-card';

    var fig = document.createElement('figure');
    fig.className = 'post-card-cover';
    var img = document.createElement('img');
    img.src = resolvePostCoverSrc(post);
    img.alt = post.title;
    fig.appendChild(img);
    fig.addEventListener('click', function () {
      openSubpage(post.category, post.slug, true);
    });

    var body = document.createElement('div');
    body.className = 'post-card-body';

    var metaTop = document.createElement('div');
    metaTop.className = 'post-meta-top';

    var catPill = document.createElement('span');
    catPill.className = 'post-category-pill';
    catPill.textContent = formatCategoryDisplay(post.category);

    var dateLabel = document.createElement('span');
    dateLabel.className = 'post-date-label';
    dateLabel.textContent = formatDatePt(post.createdAt) + ' · ' + (post.readingTime || '6 min de leitura');

    metaTop.appendChild(catPill);
    metaTop.appendChild(dateLabel);

    var h3 = document.createElement('h3');
    h3.className = 'post-card-title';
    var titleLink = document.createElement('a');
    titleLink.href = subpagePath.slice(1);
    titleLink.textContent = post.title;
    titleLink.addEventListener('click', function (e) {
      e.preventDefault();
      openSubpage(post.category, post.slug, true);
    });
    h3.appendChild(titleLink);

    var urlChip = document.createElement('span');
    urlChip.className = 'post-url-chip';
    urlChip.textContent = subpagePath;

    var excerpt = document.createElement('p');
    excerpt.className = 'post-card-excerpt';
    excerpt.textContent = post.excerpt;

    var footer = document.createElement('div');
    footer.className = 'post-card-footer';

    var readBtn = document.createElement('a');
    readBtn.href = subpagePath.slice(1);
    readBtn.className = 'post-read-link';
    readBtn.textContent = 'Ler Subpágina do Guia →';
    readBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openSubpage(post.category, post.slug, true);
    });
    footer.appendChild(readBtn);

    if (isAdmin) {
      var adminControls = document.createElement('div');
      adminControls.className = 'post-admin-controls';

      var editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.className = 'btn-card-admin';
      editBtn.textContent = 'Editar';
      editBtn.addEventListener('click', function () {
        loadPostIntoEditor(post);
      });

      var delBtn = document.createElement('button');
      delBtn.type = 'button';
      delBtn.className = 'btn-card-admin is-danger';
      delBtn.textContent = 'Excluir';
      delBtn.addEventListener('click', function () {
        deletePostById(post.id);
      });

      adminControls.appendChild(editBtn);
      adminControls.appendChild(delBtn);
      footer.appendChild(adminControls);
    }

    body.appendChild(metaTop);
    body.appendChild(h3);
    body.appendChild(urlChip);
    body.appendChild(excerpt);
    body.appendChild(footer);

    article.appendChild(fig);
    article.appendChild(body);
    return article;
  }

  function renderPostsGrid() {
    var grid = document.getElementById('main-posts-grid');
    if (!grid) return;
    var posts = loadLocalPosts();
    var bookmarks = getSavedBookmarks();
    var q = activeSearchQuery.trim().toLowerCase();

    var filtered = posts.filter(function (p) {
      if (activeFilterCategory === 'saved') {
        if (bookmarks.indexOf(p.id) === -1) return false;
      } else if (activeFilterCategory !== 'all') {
        if (slugify(p.category) !== activeFilterCategory) return false;
      }
      if (q) {
        var hay = (p.title + ' ' + p.category + ' ' + p.slug + ' ' + p.excerpt + ' ' + p.content).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    grid.innerHTML = '';
    if (filtered.length === 0) {
      var empty = document.createElement('p');
      empty.textContent = 'Nenhuma publicação encontrada para este filtro.';
      grid.appendChild(empty);
      return;
    }

    filtered.forEach(function (post) {
      grid.appendChild(createPostCardElement(post));
    });
  }

  /* ==========================================================================
     7. SUBPAGE VIEW CONTROLLER
     ========================================================================== */
  function openSubpage(category, slug, pushHistory) {
    var cleanCat = slugify(category);
    var cleanSlug = slugify(slug);
    var posts = loadLocalPosts();
    var found = null;

    for (var i = 0; i < posts.length; i++) {
      if (slugify(posts[i].category) === cleanCat && slugify(posts[i].slug) === cleanSlug) {
        found = posts[i];
        break;
      }
    }
    if (!found) {
      for (var j = 0; j < posts.length; j++) {
        if (slugify(posts[j].slug) === cleanSlug) {
          found = posts[j];
          break;
        }
      }
    }
    if (!found) return false;

    currentOpenPost = found;
    var relPath = buildSubpageRelativePath(found.category, found.slug);

    if (pushHistory) {
      try {
        if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
          var targetUrl = SITE_BASE_PATH + relPath;
          window.history.pushState({ subpage: relPath }, found.title, targetUrl);
        } else {
          window.location.hash = '#!' + relPath;
        }
      } catch (e) {
        window.location.hash = '#!' + relPath;
      }
    }

    document.title = found.title + ' — VÉRTICE AZUL';

    var subpageView = document.getElementById('subpage-view');
    var breadCat = document.getElementById('breadcrumb-category');
    var breadSlug = document.getElementById('breadcrumb-slug');
    var urlCode = document.getElementById('subpage-full-url');
    var catPill = document.getElementById('subpage-category-pill');
    var dateRead = document.getElementById('subpage-date-read');
    var authorEl = document.getElementById('subpage-author');
    var titleEl = document.getElementById('subpage-title');
    var excerptEl = document.getElementById('subpage-excerpt');
    var coverImg = document.getElementById('subpage-cover-img');
    var contentBody = document.getElementById('subpage-content-body');
    var factCat = document.getElementById('fact-category');
    var factSeason = document.getElementById('fact-season');
    var factDuration = document.getElementById('fact-duration');
    var factStyle = document.getElementById('fact-style');
    var factTip = document.getElementById('fact-tip');
    var bookmarkBtn = document.getElementById('btn-bookmark-subpage');
    var relatedGrid = document.getElementById('subpage-related-grid');

    if (breadCat) breadCat.textContent = slugify(found.category);
    if (breadSlug) breadSlug.textContent = slugify(found.slug);
    if (urlCode) urlCode.textContent = relPath;
    if (catPill) catPill.textContent = formatCategoryDisplay(found.category);
    if (dateRead) dateRead.textContent = 'Publicado em ' + formatDatePt(found.createdAt) + ' · ' + (found.readingTime || '6 min de leitura');
    if (authorEl) authorEl.textContent = 'Por ' + (found.author || 'Curadoria VÉRTICE AZUL');
    if (titleEl) titleEl.textContent = found.title;
    if (excerptEl) excerptEl.textContent = found.excerpt;
    if (coverImg) {
      coverImg.src = resolvePostCoverSrc(found);
      coverImg.alt = found.title;
    }

    renderArticleProse(contentBody, found.content);

    if (factCat) factCat.textContent = formatCategoryDisplay(found.category);
    if (factSeason) factSeason.textContent = found.season || 'Ano todo';
    if (factDuration) factDuration.textContent = found.duration || '4 a 7 dias';
    if (factStyle) factStyle.textContent = found.style || 'Roteiro Cultural & Costeiro';
    if (factTip) factTip.textContent = found.tip || 'Planeje os deslocamentos com antecedência para aproveitar os horários mais tranquilos.';

    if (bookmarkBtn) {
      var isSaved = getSavedBookmarks().indexOf(found.id) !== -1;
      bookmarkBtn.textContent = isSaved ? '✓ Guia Salvo na Conta' : 'Salvar Guia na Minha Conta';
      if (isSaved) {
        bookmarkBtn.classList.add('is-saved');
      } else {
        bookmarkBtn.classList.remove('is-saved');
      }
    }

    if (relatedGrid) {
      relatedGrid.innerHTML = '';
      posts
        .filter(function (p) { return p.id !== found.id; })
        .slice(0, 2)
        .forEach(function (rel) {
          relatedGrid.appendChild(createPostCardElement(rel));
        });
    }

    if (subpageView) {
      subpageView.hidden = false;
      subpageView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return true;
  }

  function closeSubpageView(pushHistory) {
    currentOpenPost = null;
    var subpageView = document.getElementById('subpage-view');
    if (subpageView) subpageView.hidden = true;
    document.title = 'VÉRTICE AZUL — Viagens Oceânicas Desenhadas Sob Medida';

    if (pushHistory) {
      try {
        if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
          window.history.pushState({}, document.title, (SITE_BASE_PATH || '/') + (SITE_BASE_PATH ? '/' : ''));
        } else {
          window.location.hash = '';
        }
      } catch (e) {}
    }
  }

  function inspectUrlForSubpage() {
    var hash = window.location.hash || '';
    if (hash.indexOf('#!/') === 0) {
      var hParts = hash.slice(3).split('/').filter(Boolean);
      if (hParts.length >= 2) {
        if (openSubpage(hParts[0], hParts[1], false)) return;
      }
    }

    var params = new URLSearchParams(window.location.search || '');
    var pParam = params.get('p') || params.get('subpage');
    if (pParam) {
      var qParts = pParam.replace(/^\/+|\/+$/g, '').split('/');
      if (qParts.length >= 2) {
        if (openSubpage(qParts[0], qParts[1], false)) return;
      }
    }

    var path = (window.location.pathname || '').replace(/\/index\.html$/i, '').replace(/\/+$/, '');
    var segments = path.split('/').filter(Boolean);
    if (segments.length >= 2) {
      var lastTwoCat = segments[segments.length - 2];
      var lastTwoSlug = segments[segments.length - 1];
      if (openSubpage(lastTwoCat, lastTwoSlug, false)) return;
    }

    closeSubpageView(false);
  }

  window.addEventListener('popstate', function () {
    inspectUrlForSubpage();
  });

  window.addEventListener('hashchange', function () {
    if ((window.location.hash || '').indexOf('#!/') === 0) {
      inspectUrlForSubpage();
    }
  });

  /* ==========================================================================
     8. STANDALONE SUBPAGE HTML EXPORTER
     ========================================================================== */
  function downloadSubpageHtmlFile(post) {
    if (!post) return;
    var relPath = buildSubpageRelativePath(post.category, post.slug);
    var html = [
      '<!DOCTYPE html>',
      '<html lang="pt-BR">',
      '<head>',
      '  <meta charset="UTF-8">',
      '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '  <title>' + post.title + ' — VÉRTICE AZUL</title>',
      '  <script>',
      '    (function() {',
      '      var loc = window.location.pathname;',
      '      var sub = ' + JSON.stringify(relPath) + ';',
      '      var idx = loc.indexOf(sub);',
      '      var base = idx !== -1 ? loc.slice(0, idx) : "";',
      '      window.location.replace((base || "") + "/?p=" + encodeURIComponent(sub.slice(1)));',
      '    })();',
      '  <\/script>',
      '</head>',
      '<body>',
      '  <p>Carregando guia <a href="../../?p=' + encodeURIComponent(post.category + '/' + post.slug) + '">' + post.title + '</a>...</p>',
      '</body>',
      '</html>'
    ].join('\n');

    var blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = slugify(post.slug) + '-index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /* ==========================================================================
     9. ADMIN DASHBOARD: POST CRUD, ACCOUNTS & CLOUD CONFIG
     ========================================================================== */
  var postTitleInput = document.getElementById('post-title-input');
  var postCategoryInput = document.getElementById('post-category-input');
  var postSlugInput = document.getElementById('post-slug-input');
  var liveUrlPreview = document.getElementById('live-subpage-url-preview');
  var slugManuallyEdited = false;

  function updateLiveUrlPreview() {
    var cat = slugify(postCategoryInput ? postCategoryInput.value : 'brasil') || 'brasil';
    var slg = slugify(postSlugInput ? postSlugInput.value : '') || 'nome-da-postagem';
    if (liveUrlPreview) {
      liveUrlPreview.textContent = buildSubpagePrettyUrl(cat, slg);
    }
  }

  if (postTitleInput) {
    postTitleInput.addEventListener('input', function () {
      if (!slugManuallyEdited && postSlugInput) {
        postSlugInput.value = slugify(postTitleInput.value);
      }
      updateLiveUrlPreview();
    });
  }

  if (postCategoryInput) {
    postCategoryInput.addEventListener('input', updateLiveUrlPreview);
  }

  if (postSlugInput) {
    postSlugInput.addEventListener('input', function () {
      slugManuallyEdited = postSlugInput.value.trim() !== '';
      updateLiveUrlPreview();
    });
  }

  var postCoverFile = document.getElementById('post-cover-file');
  var postCoverUrl = document.getElementById('post-cover-url');
  var postCoverPreset = document.getElementById('post-cover-preset');

  if (postCoverFile) {
    postCoverFile.addEventListener('change', function () {
      var file = postCoverFile.files && postCoverFile.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev) {
        if (postCoverUrl) postCoverUrl.value = ev.target.result;
        if (postCoverPreset) postCoverPreset.value = 'custom';
      };
      reader.readAsDataURL(file);
    });
  }

  document.querySelectorAll('[data-insert-md]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var textarea = document.getElementById('post-content-input');
      if (!textarea) return;
      var snippet = btn.getAttribute('data-insert-md') || '';
      var start = textarea.selectionStart || 0;
      var end = textarea.selectionEnd || 0;
      var val = textarea.value;
      textarea.value = val.slice(0, start) + '\n\n' + snippet + val.slice(end);
      textarea.focus();
    });
  });

  function loadPostIntoEditor(post) {
    var adminSection = document.getElementById('painel-admin');
    if (adminSection) {
      adminSection.hidden = false;
      adminSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    var editId = document.getElementById('post-edit-id');
    if (editId) editId.value = post.id;
    if (postTitleInput) postTitleInput.value = post.title;
    if (postCategoryInput) postCategoryInput.value = slugify(post.category);
    if (postSlugInput) postSlugInput.value = slugify(post.slug);
    slugManuallyEdited = true;
    if (postCoverPreset) postCoverPreset.value = post.coverUrl ? 'custom' : (post.coverKey || 'hero-ocean-photo');
    if (postCoverUrl) postCoverUrl.value = post.coverUrl || '';

    var seasonIn = document.getElementById('post-season-input');
    var durIn = document.getElementById('post-duration-input');
    var styleIn = document.getElementById('post-style-input');
    var readIn = document.getElementById('post-reading-input');
    var excIn = document.getElementById('post-excerpt-input');
    var tipIn = document.getElementById('post-tip-input');
    var contIn = document.getElementById('post-content-input');
    var saveBtn = document.getElementById('btn-save-post');

    if (seasonIn) seasonIn.value = post.season || '';
    if (durIn) durIn.value = post.duration || '';
    if (styleIn) styleIn.value = post.style || '';
    if (readIn) readIn.value = post.readingTime || '6 min de leitura';
    if (excIn) excIn.value = post.excerpt || '';
    if (tipIn) tipIn.value = post.tip || '';
    if (contIn) contIn.value = post.content || '';
    if (saveBtn) saveBtn.textContent = 'Salvar Alterações na Subpágina';

    updateLiveUrlPreview();
  }

  function resetPostEditor() {
    var form = document.getElementById('admin-post-form');
    if (form) form.reset();
    var editId = document.getElementById('post-edit-id');
    if (editId) editId.value = '';
    slugManuallyEdited = false;
    var saveBtn = document.getElementById('btn-save-post');
    if (saveBtn) saveBtn.textContent = 'Publicar Subpágina';
    updateLiveUrlPreview();
  }

  function deletePostById(postId) {
    var posts = loadLocalPosts().filter(function (p) { return p.id !== postId; });
    saveLocalPosts(posts);
    deletePostFromCloud(postId);
    if (currentOpenPost && currentOpenPost.id === postId) {
      closeSubpageView(true);
    }
    syncCategoryFilterPills(posts);
    renderPostsGrid();
    renderAdminTables();
  }

  var adminPostForm = document.getElementById('admin-post-form');
  var adminPostStatus = document.getElementById('admin-post-status');

  if (adminPostForm) {
    adminPostForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var session = getActiveSession();
      if (!session || session.role !== 'admin') {
        if (adminPostStatus) {
          adminPostStatus.textContent = 'Apenas administradores podem publicar ou editar postagens.';
          adminPostStatus.classList.add('is-error');
        }
        return;
      }

      var title = postTitleInput ? postTitleInput.value.trim() : '';
      var category = slugify(postCategoryInput ? postCategoryInput.value : 'brasil') || 'brasil';
      var slug = slugify(postSlugInput ? postSlugInput.value : title);
      var excerpt = (document.getElementById('post-excerpt-input') || {}).value || '';
      var content = (document.getElementById('post-content-input') || {}).value || '';

      if (!title || !slug || !excerpt.trim() || !content.trim()) {
        if (adminPostStatus) {
          adminPostStatus.textContent = 'Preencha o título, o resumo e o conteúdo completo da subpágina.';
          adminPostStatus.classList.add('is-error');
        }
        return;
      }

      var editIdVal = (document.getElementById('post-edit-id') || {}).value || '';
      var presetVal = postCoverPreset ? postCoverPreset.value : 'hero-ocean-photo';
      var customUrlVal = postCoverUrl ? postCoverUrl.value.trim() : '';

      var newPost = {
        id: editIdVal || ('post-' + Date.now()),
        title: title,
        category: category,
        slug: slug,
        excerpt: excerpt.trim(),
        content: content.trim(),
        coverKey: presetVal === 'custom' ? 'hero-ocean-photo' : presetVal,
        coverUrl: presetVal === 'custom' ? customUrlVal : customUrlVal,
        season: ((document.getElementById('post-season-input') || {}).value || 'Ano todo').trim(),
        duration: ((document.getElementById('post-duration-input') || {}).value || '4 a 6 dias').trim(),
        style: ((document.getElementById('post-style-input') || {}).value || 'Cultura & Roteiro Sob Medida').trim(),
        readingTime: ((document.getElementById('post-reading-input') || {}).value || '6 min de leitura').trim(),
        tip: ((document.getElementById('post-tip-input') || {}).value || '').trim(),
        author: session.name || 'Administrador VÉRTICE AZUL',
        createdAt: new Date().toISOString()
      };

      var posts = loadLocalPosts();
      var existingIdx = -1;
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === newPost.id) {
          existingIdx = i;
          break;
        }
      }
      if (existingIdx !== -1) {
        posts[existingIdx] = newPost;
      } else {
        posts.unshift(newPost);
      }

      saveLocalPosts(posts);
      syncPostToCloud(newPost);
      syncCategoryFilterPills(posts);
      renderPostsGrid();
      renderAdminTables();
      resetPostEditor();

      if (adminPostStatus) {
        adminPostStatus.classList.remove('is-error');
        adminPostStatus.textContent = 'Subpágina publicada com sucesso em /' + newPost.category + '/' + newPost.slug + '! Abrindo visualização...';
      }

      setTimeout(function () {
        openSubpage(newPost.category, newPost.slug, true);
      }, 350);
    });
  }

  var btnResetPost = document.getElementById('btn-reset-post-form');
  if (btnResetPost) {
    btnResetPost.addEventListener('click', resetPostEditor);
  }

  function renderAdminTables() {
    var postsTbody = document.getElementById('admin-posts-tbody');
    if (postsTbody) {
      postsTbody.innerHTML = '';
      var posts = loadLocalPosts();
      posts.forEach(function (post) {
        var tr = document.createElement('tr');

        var tdTitle = document.createElement('td');
        tdTitle.className = 'corridor-name';
        tdTitle.textContent = post.title;

        var tdUrl = document.createElement('td');
        var code = document.createElement('code');
        code.textContent = '/' + slugify(post.category) + '/' + slugify(post.slug);
        tdUrl.appendChild(code);

        var tdDate = document.createElement('td');
        tdDate.textContent = formatDatePt(post.createdAt);

        var tdActions = document.createElement('td');
        var actionsWrap = document.createElement('div');
        actionsWrap.className = 'post-admin-controls';

        var viewBtn = document.createElement('button');
        viewBtn.type = 'button';
        viewBtn.className = 'btn-card-admin';
        viewBtn.textContent = 'Abrir Subpágina';
        viewBtn.addEventListener('click', function () {
          openSubpage(post.category, post.slug, true);
        });

        var editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'btn-card-admin';
        editBtn.textContent = 'Editar';
        editBtn.addEventListener('click', function () {
          loadPostIntoEditor(post);
        });

        var delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'btn-card-admin is-danger';
        delBtn.textContent = 'Excluir';
        delBtn.addEventListener('click', function () {
          deletePostById(post.id);
        });

        actionsWrap.appendChild(viewBtn);
        actionsWrap.appendChild(editBtn);
        actionsWrap.appendChild(delBtn);
        tdActions.appendChild(actionsWrap);

        tr.appendChild(tdTitle);
        tr.appendChild(tdUrl);
        tr.appendChild(tdDate);
        tr.appendChild(tdActions);
        postsTbody.appendChild(tr);
      });
    }

    var usersTbody = document.getElementById('admin-users-tbody');
    if (usersTbody) {
      usersTbody.innerHTML = '';
      var users = loadLocalUsers();
      users.forEach(function (u) {
        var tr = document.createElement('tr');

        var tdName = document.createElement('td');
        tdName.className = 'corridor-name';
        tdName.textContent = u.name;

        var tdEmail = document.createElement('td');
        tdEmail.textContent = u.email;

        var tdRole = document.createElement('td');
        var pill = document.createElement('span');
        pill.className = 'season-pill';
        pill.textContent = u.role === 'admin' ? 'Administrador' : 'Viajante';
        tdRole.appendChild(pill);

        var tdAct = document.createElement('td');
        if (u.email.toLowerCase() !== DEFAULT_ADMIN_USER.email.toLowerCase()) {
          var toggleRoleBtn = document.createElement('button');
          toggleRoleBtn.type = 'button';
          toggleRoleBtn.className = 'btn-card-admin';
          toggleRoleBtn.textContent = u.role === 'admin' ? 'Tornar Viajante' : 'Tornar Admin';
          toggleRoleBtn.addEventListener('click', function () {
            u.role = u.role === 'admin' ? 'user' : 'admin';
            saveLocalUsers(users);
            syncUserToCloud(u);
            renderAdminTables();
          });
          tdAct.appendChild(toggleRoleBtn);
        } else {
          tdAct.textContent = 'Admin Principal';
        }

        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdRole);
        tr.appendChild(tdAct);
        usersTbody.appendChild(tr);
      });
    }
  }

  /* Admin Tabs Navigation */
  document.querySelectorAll('[data-admin-tab]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-admin-tab');
      document.querySelectorAll('[data-admin-tab]').forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      var paneEditor = document.getElementById('admin-tab-editor');
      var paneAccounts = document.getElementById('admin-tab-accounts');
      var paneCloud = document.getElementById('admin-tab-cloud');
      if (paneEditor) paneEditor.hidden = target !== 'editor';
      if (paneAccounts) paneAccounts.hidden = target !== 'accounts';
      if (paneCloud) paneCloud.hidden = target !== 'cloud';
    });
  });

  /* Cloud Config Form inside Admin */
  var cloudProviderSelect = document.getElementById('cloud-provider-select');
  function updateCloudProviderFields() {
    var val = cloudProviderSelect ? cloudProviderSelect.value : 'supabase';
    var fSupUrl = document.getElementById('field-supabase-url');
    var fSupKey = document.getElementById('field-supabase-key');
    var fFbProj = document.getElementById('field-firebase-project');
    var fFbKey = document.getElementById('field-firebase-key');
    if (fSupUrl) fSupUrl.hidden = val !== 'supabase';
    if (fSupKey) fSupKey.hidden = val !== 'supabase';
    if (fFbProj) fFbProj.hidden = val !== 'firebase';
    if (fFbKey) fFbKey.hidden = val !== 'firebase';
  }
  if (cloudProviderSelect) {
    cloudProviderSelect.addEventListener('change', updateCloudProviderFields);
  }

  var cloudConfigForm = document.getElementById('cloud-config-form');
  var cloudConfigStatus = document.getElementById('cloud-config-status');
  if (cloudConfigForm) {
    var currentCfg = getCloudSettings();
    var inSupUrl = document.getElementById('input-supabase-url');
    var inSupKey = document.getElementById('input-supabase-key');
    var inFbProj = document.getElementById('input-firebase-project');
    var inFbKey = document.getElementById('input-firebase-key');
    if (inSupUrl && currentCfg.supabase) inSupUrl.value = currentCfg.supabase.url || '';
    if (inSupKey && currentCfg.supabase) inSupKey.value = currentCfg.supabase.anonKey || '';
    if (inFbProj && currentCfg.firebase) inFbProj.value = currentCfg.firebase.projectId || '';
    if (inFbKey && currentCfg.firebase) inFbKey.value = currentCfg.firebase.apiKey || '';

    cloudConfigForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var newCfg = {
        provider: cloudProviderSelect ? cloudProviderSelect.value : 'supabase',
        supabase: {
          url: inSupUrl ? inSupUrl.value.trim() : '',
          anonKey: inSupKey ? inSupKey.value.trim() : ''
        },
        firebase: {
          projectId: inFbProj ? inFbProj.value.trim() : '',
          apiKey: inFbKey ? inFbKey.value.trim() : ''
        }
      };
      try {
        localStorage.setItem(STORAGE_CLOUD_KEY, JSON.stringify(newCfg));
      } catch (err) {}

      var posts = loadLocalPosts();
      posts.forEach(function (p) { syncPostToCloud(p); });
      fetchPostsFromCloud(function () {
        renderPostsGrid();
        renderAdminTables();
      });
      updateAccountUI();

      if (cloudConfigStatus) {
        cloudConfigStatus.textContent = 'Configuração salva! Postagens sincronizadas com ' + getActiveCloudMode().toUpperCase() + '.';
      }
    });
  }

  /* ==========================================================================
     10. AUTH MODAL & ACCOUNT EVENT LISTENERS
     ========================================================================== */
  var authModal = document.getElementById('auth-modal');
  var loginForm = document.getElementById('login-form');
  var registerForm = document.getElementById('register-form');
  var tabBtnLogin = document.getElementById('tab-btn-login');
  var tabBtnRegister = document.getElementById('tab-btn-register');

  function openAuthModal(mode) {
    if (!authModal) return;
    authModal.hidden = false;
    var isLogin = mode !== 'register';
    if (loginForm) loginForm.hidden = !isLogin;
    if (registerForm) registerForm.hidden = isLogin;
    if (tabBtnLogin) tabBtnLogin.classList.toggle('is-active', isLogin);
    if (tabBtnRegister) tabBtnRegister.classList.toggle('is-active', !isLogin);
  }

  function closeAuthModal() {
    if (authModal) authModal.hidden = true;
  }

  if (tabBtnLogin) tabBtnLogin.addEventListener('click', function () { openAuthModal('login'); });
  if (tabBtnRegister) tabBtnRegister.addEventListener('click', function () { openAuthModal('register'); });

  var btnCloseAuth = document.getElementById('btn-close-auth-modal');
  if (btnCloseAuth) btnCloseAuth.addEventListener('click', closeAuthModal);

  var btnOpenLogin = document.getElementById('btn-open-login');
  if (btnOpenLogin) btnOpenLogin.addEventListener('click', function () { openAuthModal('login'); });

  var btnOpenRegister = document.getElementById('btn-open-register');
  if (btnOpenRegister) btnOpenRegister.addEventListener('click', function () { openAuthModal('register'); });

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailIn = document.getElementById('login-email');
      var passIn = document.getElementById('login-password');
      var remIn = document.getElementById('login-remember');
      var statusEl = document.getElementById('login-status-msg');

      var email = emailIn ? emailIn.value.trim().toLowerCase() : '';
      var password = passIn ? passIn.value : '';
      var remember = remIn ? remIn.checked : true;

      if (!email || !password) {
        if (statusEl) {
          statusEl.textContent = 'Informe seu e-mail e sua senha para entrar.';
          statusEl.classList.add('is-error');
        }
        return;
      }

      var users = loadLocalUsers();
      var matched = null;
      for (var i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() === email && users[i].passwordHash === password) {
          matched = users[i];
          break;
        }
      }

      if (!matched) {
        if (statusEl) {
          statusEl.textContent = 'E-mail ou senha incorretos. Verifique seus dados e tente novamente.';
          statusEl.classList.add('is-error');
        }
        return;
      }

      saveActiveSession(matched, remember);
      if (statusEl) {
        statusEl.classList.remove('is-error');
        statusEl.textContent = 'Login efetuado com sucesso!';
      }
      closeAuthModal();
      updateAccountUI();
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameIn = document.getElementById('register-name');
      var emailIn = document.getElementById('register-email');
      var passIn = document.getElementById('register-password');
      var confIn = document.getElementById('register-confirm');
      var remIn = document.getElementById('register-remember');
      var statusEl = document.getElementById('register-status-msg');

      var name = nameIn ? nameIn.value.trim() : '';
      var email = emailIn ? emailIn.value.trim().toLowerCase() : '';
      var password = passIn ? passIn.value : '';
      var confirm = confIn ? confIn.value : '';
      var remember = remIn ? remIn.checked : true;

      if (!name || !email || email.indexOf('@') === -1) {
        if (statusEl) {
          statusEl.textContent = 'Informe seu nome completo e um e-mail válido.';
          statusEl.classList.add('is-error');
        }
        return;
      }

      if (password.length < 6) {
        if (statusEl) {
          statusEl.textContent = 'A senha deve ter pelo menos 6 caracteres.';
          statusEl.classList.add('is-error');
        }
        return;
      }

      if (password !== confirm) {
        if (statusEl) {
          statusEl.textContent = 'As senhas informadas não coincidem.';
          statusEl.classList.add('is-error');
        }
        return;
      }

      var users = loadLocalUsers();
      var exists = users.some(function (u) { return u.email.toLowerCase() === email; });
      if (exists) {
        if (statusEl) {
          statusEl.textContent = 'Este e-mail já está registrado. Use a aba "Entrar na Conta".';
          statusEl.classList.add('is-error');
        }
        return;
      }

      var newUser = {
        id: 'user-' + Date.now(),
        name: name,
        email: email,
        passwordHash: password,
        role: 'user',
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      saveLocalUsers(users);
      syncUserToCloud(newUser);
      saveActiveSession(newUser, remember);

      if (statusEl) {
        statusEl.classList.remove('is-error');
        statusEl.textContent = 'Conta criada e conectada com sucesso!';
      }
      closeAuthModal();
      updateAccountUI();
    });
  }

  var btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', function () {
      clearActiveSession();
      updateAccountUI();
    });
  }

  var btnToggleAdmin = document.getElementById('btn-toggle-admin-panel');
  if (btnToggleAdmin) {
    btnToggleAdmin.addEventListener('click', function () {
      var adminSec = document.getElementById('painel-admin');
      if (!adminSec) return;
      adminSec.hidden = !adminSec.hidden;
      if (!adminSec.hidden) {
        adminSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  var btnOpenCloudCfg = document.getElementById('btn-open-cloud-config');
  if (btnOpenCloudCfg) {
    btnOpenCloudCfg.addEventListener('click', function () {
      var adminSec = document.getElementById('painel-admin');
      if (adminSec) {
        adminSec.hidden = false;
        var cloudTabBtn = document.querySelector('[data-admin-tab="cloud"]');
        if (cloudTabBtn) cloudTabBtn.click();
        adminSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  var btnNewPostCta = document.getElementById('btn-new-post-cta');
  if (btnNewPostCta) {
    btnNewPostCta.addEventListener('click', function () {
      var session = getActiveSession();
      if (!session || session.role !== 'admin') {
        openAuthModal('login');
        return;
      }
      var adminSec = document.getElementById('painel-admin');
      if (adminSec) {
        adminSec.hidden = false;
        var editorTabBtn = document.querySelector('[data-admin-tab="editor"]');
        if (editorTabBtn) editorTabBtn.click();
        resetPostEditor();
        adminSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  /* Subpage Bar Actions */
  var btnSubpageBack = document.getElementById('btn-subpage-back');
  if (btnSubpageBack) {
    btnSubpageBack.addEventListener('click', function () {
      closeSubpageView(true);
      var pubSec = document.getElementById('publicacoes');
      if (pubSec) pubSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  var breadHome = document.getElementById('breadcrumb-home');
  if (breadHome) {
    breadHome.addEventListener('click', function (e) {
      e.preventDefault();
      closeSubpageView(true);
    });
  }

  var btnCopyUrl = document.getElementById('btn-copy-subpage-url');
  if (btnCopyUrl) {
    btnCopyUrl.addEventListener('click', function () {
      if (!currentOpenPost) return;
      var full = buildSubpagePrettyUrl(currentOpenPost.category, currentOpenPost.slug);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(full);
      }
      btnCopyUrl.textContent = 'Copiado!';
      setTimeout(function () { btnCopyUrl.textContent = 'Copiar URL'; }, 1800);
    });
  }

  var btnSubpageEdit = document.getElementById('btn-subpage-edit');
  if (btnSubpageEdit) {
    btnSubpageEdit.addEventListener('click', function () {
      if (currentOpenPost) loadPostIntoEditor(currentOpenPost);
    });
  }

  var btnSubpageDownload = document.getElementById('btn-subpage-download-html');
  if (btnSubpageDownload) {
    btnSubpageDownload.addEventListener('click', function () {
      if (currentOpenPost) downloadSubpageHtmlFile(currentOpenPost);
    });
  }

  var btnSubpageDelete = document.getElementById('btn-subpage-delete');
  if (btnSubpageDelete) {
    btnSubpageDelete.addEventListener('click', function () {
      if (currentOpenPost) deletePostById(currentOpenPost.id);
    });
  }

  var btnBookmarkSubpage = document.getElementById('btn-bookmark-subpage');
  if (btnBookmarkSubpage) {
    btnBookmarkSubpage.addEventListener('click', function () {
      if (!currentOpenPost) return;
      var saved = toggleBookmark(currentOpenPost.id);
      btnBookmarkSubpage.textContent = saved ? '✓ Guia Salvo na Conta' : 'Salvar Guia na Minha Conta';
      btnBookmarkSubpage.classList.toggle('is-saved', saved);
      renderPostsGrid();
    });
  }

  var postsSearchInput = document.getElementById('posts-search-input');
  if (postsSearchInput) {
    postsSearchInput.addEventListener('input', function () {
      activeSearchQuery = postsSearchInput.value || '';
      renderPostsGrid();
    });
  }

  document.querySelectorAll('[data-open-subpage]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = (link.getAttribute('data-open-subpage') || '').split('/');
      if (target.length >= 2) {
        openSubpage(target[0], target[1], true);
      }
    });
  });

  /* ==========================================================================
     11. HERO SEARCH BAR, ITINERARY WORKBENCH & PLANNER INTERACTIONS
     ========================================================================== */
  var DESTINO_OPTIONS = ['Ilhas Gregas', 'Fiordes da Noruega', 'Costa Amalfitana', 'São João de Caruaru (Brasil)'];
  var EPOCA_OPTIONS = ['Maio a Junho', 'Junho a Agosto', 'Setembro a Outubro', 'Maio a Setembro'];
  var ESTILO_OPTIONS = ['Veleiro & Vilas Costeiras', 'Iate Clássico & Palazzos', 'Expedição Ártica & Cabanas', 'Cultura & Gastronomia'];

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

  var heroBtnDestino = document.getElementById('hero-btn-destino');
  var heroLabelDestino = document.getElementById('hero-label-destino');
  if (heroBtnDestino && heroLabelDestino) {
    heroBtnDestino.addEventListener('click', function () {
      destinoIdx = (destinoIdx + 1) % DESTINO_OPTIONS.length;
      var chosen = DESTINO_OPTIONS[destinoIdx];
      heroLabelDestino.textContent = chosen;
      if (inputDestino && chosen.indexOf('Caruaru') === -1) inputDestino.value = chosen;
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
      if (inputEstilo && chosen !== 'Cultura & Gastronomia') inputEstilo.value = chosen;
      updateSummaryPanel();
    });
  }

  var heroSubmit = document.getElementById('hero-search-submit');
  if (heroSubmit) {
    heroSubmit.addEventListener('click', function () {
      var labelVal = heroLabelDestino ? heroLabelDestino.textContent : '';
      if (labelVal.indexOf('Caruaru') !== -1) {
        openSubpage('brasil', 'sao-joao-de-caruaru-festa-junina-guia-dicas', true);
      } else if (labelVal.indexOf('Noruega') !== -1) {
        openSubpage('noruega', 'fiordes-da-noruega-lofoten-guia-dicas', true);
      } else if (labelVal.indexOf('Amalfitana') !== -1) {
        openSubpage('italia', 'costa-amalfitana-capri-roteiro-completo', true);
      } else {
        var pubSec = document.getElementById('publicacoes');
        if (pubSec) pubSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  document.querySelectorAll('[data-route-target]').forEach(function (fig) {
    fig.addEventListener('click', function () {
      var key = fig.getAttribute('data-route-target');
      if (key === 'grecia') {
        openSubpage('grecia', 'ciclades-ocidentais-roteiro-ilhas-gregas', true);
      } else if (key === 'noruega') {
        openSubpage('noruega', 'fiordes-da-noruega-lofoten-guia-dicas', true);
      } else if (key === 'amalfi') {
        openSubpage('italia', 'costa-amalfitana-capri-roteiro-completo', true);
      }
    });
  });

  document.querySelectorAll('[data-route-tab]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      selectRoute(btn.getAttribute('data-route-tab'), false);
    });
  });

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

  /* ==========================================================================
     12. BOOTSTRAP ON LOAD
     ========================================================================== */
  var initialPosts = loadLocalPosts();
  syncCategoryFilterPills(initialPosts);
  updateLiveUrlPreview();
  updateAccountUI();
  inspectUrlForSubpage();
  fetchUsersFromCloud(function () {
    renderAdminTables();
  });
  fetchPostsFromCloud(function (cloudPosts) {
    syncCategoryFilterPills(cloudPosts);
    renderPostsGrid();
    renderAdminTables();
    inspectUrlForSubpage();
  });
})();
