(function () {
  'use strict';

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

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
  var STORAGE_COOKIE_CONSENT_KEY = 'vertice_azul_cookies_consent_v1';
  var STORAGE_COMMENTS_KEY = 'vertice_azul_comments_v1';
  var INTERNAL_COMMENTS_STORE_EMAIL = '__comments_store__@verticeazul.internal';
  var STORAGE_ROUTE_REQUESTS_KEY = 'vertice_azul_route_requests_v1';
  var INTERNAL_REQUESTS_STORE_EMAIL = '__requests_store__@verticeazul.internal';

  var INITIAL_ROUTE_REQUESTS = [
    {
      id: 'req-init-1',
      travelerId: 'usr-helena',
      travelerName: 'Helena Vasconcelos',
      travelerEmail: 'helena@verticeazul.com.br',
      destino: 'Ilhas Gregas',
      epoca: 'Maio a Junho',
      estilo: 'Veleiro & Vilas Costeiras',
      duracao: '8 a 9 dias',
      status: 'Em Análise',
      createdAt: '2026-10-25T14:30:00Z'
    },
    {
      id: 'req-init-2',
      travelerId: 'usr-marcos',
      travelerName: 'Marcos Aurélio Silveira',
      travelerEmail: 'marcos.viajante@gmail.com',
      destino: 'Fiordes da Noruega',
      epoca: 'Junho a Agosto',
      estilo: 'Expedição Ártica & Cabanas',
      duracao: '10 a 12 dias',
      status: 'Pendente',
      createdAt: '2026-10-26T09:15:00Z'
    }
  ];

  var INITIAL_COMMENTS = [
    {
      id: 'cmt-caruaru-1',
      postId: 'post-caruaru',
      parentId: null,
      authorId: 'user-seed-1',
      authorName: 'Lucas Mendonça',
      authorEmail: 'lucas@exemplo.com',
      authorRole: 'user',
      content: 'Fui no São João de Caruaru seguindo a dica de passar a tarde no Alto do Moura e foi a melhor parte da viagem! Os ateliês de cerâmica e o forró pé-de-serra durante o dia são imperdíveis.',
      likedBy: ['helena@exemplo.com', 'marina@exemplo.com'],
      dislikedBy: [],
      createdAt: '2026-10-24T16:20:00Z'
    },
    {
      id: 'cmt-caruaru-2',
      postId: 'post-caruaru',
      parentId: 'cmt-caruaru-1',
      authorId: 'admin-default',
      authorName: 'Administrador VÉRTICE AZUL',
      authorEmail: 'admin@verticeazul.com',
      authorRole: 'admin',
      content: 'Que ótimo relato, Lucas! Chegar cedo ao Alto do Moura faz toda a diferença para conversar com os artesãos com calma antes do movimento do fim da tarde.',
      likedBy: ['lucas@exemplo.com'],
      dislikedBy: [],
      createdAt: '2026-10-24T17:05:00Z'
    },
    {
      id: 'cmt-ciclades-1',
      postId: 'post-ciclades',
      parentId: null,
      authorId: 'user-seed-2',
      authorName: 'Helena Vasconcelos',
      authorEmail: 'helena@exemplo.com',
      authorRole: 'user',
      content: 'Embarcar em Paros em vez de Atenas realmente economiza muito tempo de navegação. As falésias de Kleftiko em Milos têm a água mais transparente que já vi!',
      likedBy: ['lucas@exemplo.com'],
      dislikedBy: [],
      createdAt: '2026-10-23T19:10:00Z'
    },
    {
      id: 'cmt-fiordes-1',
      postId: 'post-fiordes',
      parentId: null,
      authorId: 'user-seed-3',
      authorName: 'Rafael Nogueira',
      authorEmail: 'rafael@exemplo.com',
      authorRole: 'user',
      content: 'Alguém que já fez a rota de Lofoten em julho sabe dizer se precisa reservar as cabanas Rorbuer com muita antecedência?',
      likedBy: [],
      dislikedBy: [],
      createdAt: '2026-10-22T14:40:00Z'
    },
    {
      id: 'cmt-fiordes-2',
      postId: 'post-fiordes',
      parentId: 'cmt-fiordes-1',
      authorId: 'admin-default',
      authorName: 'Administrador VÉRTICE AZUL',
      authorEmail: 'admin@verticeazul.com',
      authorRole: 'admin',
      content: 'Olá, Rafael! Sim, para julho em Reine e Henningsvær recomendamos reservar com pelo menos 3 a 4 meses de antecedência, pois as cabanas históricas à beira d\'água são poucas e muito disputadas.',
      likedBy: ['rafael@exemplo.com'],
      dislikedBy: [],
      createdAt: '2026-10-22T15:15:00Z'
    },
    {
      id: 'cmt-amalfi-1',
      postId: 'post-amalfi',
      parentId: null,
      authorId: 'user-seed-4',
      authorName: 'Carolina Tavares',
      authorEmail: 'carolina@exemplo.com',
      authorRole: 'user',
      content: 'Conhecer a Costa Amalfitana pelo mar muda tudo. Evitamos todo o trânsito da estrada costeira e ainda estendemos até a Ilha de Ponza.',
      likedBy: ['helena@exemplo.com'],
      dislikedBy: [],
      createdAt: '2026-10-21T18:00:00Z'
    }
  ];

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

  var memoryPostsCache = null;

  function loadLocalPosts() {
    if (Array.isArray(memoryPostsCache) && memoryPostsCache.length > 0) {
      return memoryPostsCache.slice();
    }
    try {
      var raw = localStorage.getItem(STORAGE_POSTS_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          memoryPostsCache = parsed.slice();
          return parsed;
        }
      }
    } catch (e) {}
    memoryPostsCache = INITIAL_POSTS.slice();
    try {
      localStorage.setItem(STORAGE_POSTS_KEY, JSON.stringify(INITIAL_POSTS));
    } catch (e) {}
    return INITIAL_POSTS.slice();
  }

  function saveLocalPosts(postsList) {
    if (!Array.isArray(postsList)) return;
    memoryPostsCache = postsList.slice();
    try {
      localStorage.setItem(STORAGE_POSTS_KEY, JSON.stringify(postsList));
    } catch (e) {
      try {
        localStorage.removeItem(STORAGE_POSTS_KEY);
        localStorage.setItem(STORAGE_POSTS_KEY, JSON.stringify(postsList));
      } catch (err2) {}
    }
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
    users = users.filter(function (u) {
      return u && u.email && u.email.toLowerCase() !== INTERNAL_COMMENTS_STORE_EMAIL;
    });
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
    var clean = (usersList || []).filter(function (u) {
      return u && u.email && u.email.toLowerCase() !== INTERNAL_COMMENTS_STORE_EMAIL;
    });
    try {
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(clean));
    } catch (e) {}
  }

  function loadLocalComments() {
    try {
      var raw = localStorage.getItem(STORAGE_COMMENTS_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {}
    try {
      localStorage.setItem(STORAGE_COMMENTS_KEY, JSON.stringify(INITIAL_COMMENTS));
    } catch (e) {}
    return INITIAL_COMMENTS.slice();
  }

  function saveLocalComments(commentsList) {
    try {
      localStorage.setItem(STORAGE_COMMENTS_KEY, JSON.stringify(commentsList));
    } catch (e) {}
  }

  function syncCommentsBundleFallbackToSupabase(allComments) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode !== 'supabase') return Promise.resolve();
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
        id: 'sys-comments-store-v1',
        name: 'COMMENTS_STORAGE',
        email: INTERNAL_COMMENTS_STORE_EMAIL,
        password_hash: JSON.stringify(allComments || []),
        role: 'system',
        created_at: new Date().toISOString()
      })
    }).catch(function () {});
  }

  function syncCommentToCloud(commentObj, allComments) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode === 'supabase') {
      syncCommentsBundleFallbackToSupabase(allComments || loadLocalComments());
      var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/comments';
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': cfg.supabase.anonKey,
          'Authorization': 'Bearer ' + cfg.supabase.anonKey,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          id: commentObj.id,
          post_id: commentObj.postId,
          parent_id: commentObj.parentId || null,
          author_id: commentObj.authorId || '',
          author_name: commentObj.authorName,
          author_email: commentObj.authorEmail,
          author_role: commentObj.authorRole || 'user',
          content: commentObj.content,
          liked_by: Array.isArray(commentObj.likedBy) ? commentObj.likedBy : [],
          disliked_by: Array.isArray(commentObj.dislikedBy) ? commentObj.dislikedBy : [],
          created_at: commentObj.createdAt || new Date().toISOString()
        })
      }).catch(function () {});
    }
    return Promise.resolve();
  }

  function deleteCommentFromCloud(commentId, allComments) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode === 'supabase') {
      syncCommentsBundleFallbackToSupabase(allComments || loadLocalComments());
      var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/comments?id=eq.' + encodeURIComponent(commentId);
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'apikey': cfg.supabase.anonKey,
          'Authorization': 'Bearer ' + cfg.supabase.anonKey
        }
      }).catch(function () {});
    }
    return Promise.resolve();
  }

  function fetchCommentsFromCloud(callback) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode !== 'supabase') return;

    var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/comments?select=*&order=created_at.asc';
    fetch(url, {
      headers: {
        'apikey': cfg.supabase.anonKey,
        'Authorization': 'Bearer ' + cfg.supabase.anonKey
      }
    })
      .then(function (r) {
        if (r.ok) return r.json();
        throw new Error('comments_table_unavailable');
      })
      .then(function (rows) {
        if (!Array.isArray(rows)) return;
        if (rows.length === 0) {
          var seed = loadLocalComments();
          seed.forEach(function (c) { syncCommentToCloud(c, seed); });
          return;
        }
        var mapped = rows.map(function (r) {
          return {
            id: r.id,
            postId: r.post_id,
            parentId: r.parent_id || null,
            authorId: r.author_id || '',
            authorName: r.author_name || 'Viajante',
            authorEmail: r.author_email || '',
            authorRole: r.author_role || 'user',
            content: r.content || '',
            likedBy: Array.isArray(r.liked_by) ? r.liked_by : [],
            dislikedBy: Array.isArray(r.disliked_by) ? r.disliked_by : [],
            createdAt: r.created_at || new Date().toISOString()
          };
        });
        saveLocalComments(mapped);
        if (callback) callback(mapped);
      })
      .catch(function () {
        var fallbackUrl = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/accounts?id=eq.sys-comments-store-v1&select=*';
        fetch(fallbackUrl, {
          headers: {
            'apikey': cfg.supabase.anonKey,
            'Authorization': 'Bearer ' + cfg.supabase.anonKey
          }
        })
          .then(function (r) { return r.ok ? r.json() : null; })
          .then(function (rows) {
            if (Array.isArray(rows) && rows.length > 0 && rows[0].password_hash) {
              try {
                var parsed = JSON.parse(rows[0].password_hash);
                if (Array.isArray(parsed) && parsed.length > 0) {
                  saveLocalComments(parsed);
                  if (callback) callback(parsed);
                  return;
                }
              } catch (e) {}
            }
            var localSeed = loadLocalComments();
            syncCommentsBundleFallbackToSupabase(localSeed);
          })
          .catch(function () {});
      });
  }

  function loadLocalRouteRequests() {
    try {
      var raw = localStorage.getItem(STORAGE_ROUTE_REQUESTS_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {}
    try {
      localStorage.setItem(STORAGE_ROUTE_REQUESTS_KEY, JSON.stringify(INITIAL_ROUTE_REQUESTS));
    } catch (e) {}
    return INITIAL_ROUTE_REQUESTS.slice();
  }

  function saveLocalRouteRequests(reqList) {
    try {
      localStorage.setItem(STORAGE_ROUTE_REQUESTS_KEY, JSON.stringify(reqList || []));
    } catch (e) {}
  }

  function syncRequestsBundleFallbackToSupabase(allReqs) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode !== 'supabase') return Promise.resolve();
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
        id: 'sys-requests-store-v1',
        name: 'ROUTE_REQUESTS_STORAGE',
        email: INTERNAL_REQUESTS_STORE_EMAIL,
        password_hash: JSON.stringify(allReqs || []),
        role: 'system',
        created_at: new Date().toISOString()
      })
    }).catch(function () {});
  }

  function syncRouteRequestToCloud(reqObj, allReqs) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode === 'supabase') {
      syncRequestsBundleFallbackToSupabase(allReqs || loadLocalRouteRequests());
      var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/route_requests';
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': cfg.supabase.anonKey,
          'Authorization': 'Bearer ' + cfg.supabase.anonKey,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          id: reqObj.id,
          traveler_id: reqObj.travelerId || '',
          traveler_name: reqObj.travelerName,
          traveler_email: reqObj.travelerEmail,
          destino: reqObj.destino,
          epoca: reqObj.epoca || '',
          estilo: reqObj.estilo || '',
          duracao: reqObj.duracao || '',
          status: reqObj.status || 'Pendente',
          created_at: reqObj.createdAt || new Date().toISOString()
        })
      }).catch(function () {});
    }
    return Promise.resolve();
  }

  function deleteRouteRequestCloud(reqId, allReqs) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode === 'supabase') {
      syncRequestsBundleFallbackToSupabase(allReqs || loadLocalRouteRequests());
      var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/route_requests?id=eq.' + encodeURIComponent(reqId);
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'apikey': cfg.supabase.anonKey,
          'Authorization': 'Bearer ' + cfg.supabase.anonKey
        }
      }).catch(function () {});
    }
    return Promise.resolve();
  }

  function fetchRouteRequestsFromCloud(callback) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode !== 'supabase') {
      if (callback) callback(loadLocalRouteRequests());
      return;
    }

    var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/route_requests?select=*&order=created_at.desc';
    fetch(url, {
      headers: {
        'apikey': cfg.supabase.anonKey,
        'Authorization': 'Bearer ' + cfg.supabase.anonKey
      }
    })
      .then(function (r) {
        if (r.ok) return r.json();
        throw new Error('route_requests_table_unavailable');
      })
      .then(function (rows) {
        if (Array.isArray(rows) && rows.length > 0) {
          var mapped = rows.map(function (row) {
            return {
              id: row.id,
              travelerId: row.traveler_id,
              travelerName: row.traveler_name,
              travelerEmail: row.traveler_email,
              destino: row.destino,
              epoca: row.epoca,
              estilo: row.estilo,
              duracao: row.duracao,
              status: row.status || 'Pendente',
              createdAt: row.created_at
            };
          });
          saveLocalRouteRequests(mapped);
          if (callback) callback(mapped);
          return;
        }
        throw new Error('no_route_requests');
      })
      .catch(function () {
        var fallbackUrl = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/accounts?email=eq.' + encodeURIComponent(INTERNAL_REQUESTS_STORE_EMAIL) + '&select=*';
        fetch(fallbackUrl, {
          headers: {
            'apikey': cfg.supabase.anonKey,
            'Authorization': 'Bearer ' + cfg.supabase.anonKey
          }
        })
          .then(function (res) {
            if (res.ok) return res.json();
            throw new Error('fallback_unavailable');
          })
          .then(function (accounts) {
            if (Array.isArray(accounts) && accounts.length > 0 && accounts[0].password_hash) {
              try {
                var stored = JSON.parse(accounts[0].password_hash);
                if (Array.isArray(stored) && stored.length > 0) {
                  saveLocalRouteRequests(stored);
                  if (callback) callback(stored);
                  return;
                }
              } catch (e) {}
            }
            var localSeed = loadLocalRouteRequests();
            syncRequestsBundleFallbackToSupabase(localSeed);
            if (callback) callback(localSeed);
          })
          .catch(function () {
            if (callback) callback(loadLocalRouteRequests());
          });
      });
  }

  /* Cloud Sync Functions (Supabase & Firebase REST) */
  function syncPostToCloud(post) {
    var mode = getActiveCloudMode();
    var cfg = getCloudSettings();
    if (mode === 'supabase') {
      var url = cfg.supabase.url.replace(/\/$/, '') + '/rest/v1/posts?on_conflict=id';
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': cfg.supabase.anonKey,
          'Authorization': 'Bearer ' + cfg.supabase.anonKey,
          'Prefer': 'resolution=merge-duplicates,return=minimal'
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
          var userRows = rows.filter(function (r) {
            return r && r.email && r.email.toLowerCase() !== INTERNAL_COMMENTS_STORE_EMAIL && r.id !== 'sys-comments-store-v1';
          });
          if (userRows.length === 0) {
            var localUsers = loadLocalUsers();
            localUsers.forEach(function (u) { syncUserToCloud(u); });
            return;
          }
          var mapped = userRows.map(function (r) {
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

  function resolveCatalogCoverByKey(coverKey) {
    var key = (coverKey && coverKey !== 'custom') ? coverKey : 'hero-ocean-photo';
    if (window.__PLATE_FALLBACKS && window.__PLATE_FALLBACKS[key]) {
      return window.__PLATE_FALLBACKS[key];
    }
    return 'assets/plates/' + key + '.png';
  }

  function resolvePostCoverSrc(post) {
    if (post && post.coverUrl && String(post.coverUrl).trim() !== '') {
      return String(post.coverUrl).trim();
    }
    var key = (post && post.coverKey) ? post.coverKey : 'hero-ocean-photo';
    return resolveCatalogCoverByKey(key);
  }

  function bindCoverImgFallback(imgEl, post) {
    if (!imgEl) return;
    var fallbackKey = (post && post.coverKey && post.coverKey !== 'custom') ? post.coverKey : 'hero-ocean-photo';
    imgEl.onerror = function () {
      imgEl.onerror = null;
      imgEl.src = resolveCatalogCoverByKey(fallbackKey);
    };
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

    var plannerAuthGate = document.getElementById('planner-auth-gate');
    var plannerLoggedBanner = document.getElementById('planner-logged-banner');
    var plannerLoggedName = document.getElementById('planner-logged-name');
    var plannerLoggedEmail = document.getElementById('planner-logged-email');
    var plannerLoggedAvatar = document.getElementById('planner-logged-avatar');
    var inputNome = document.getElementById('input-nome');
    var inputEmail = document.getElementById('input-email');

    if (session && session.email) {
      if (plannerAuthGate) plannerAuthGate.hidden = true;
      if (plannerLoggedBanner) plannerLoggedBanner.hidden = false;
      if (plannerLoggedName) plannerLoggedName.textContent = session.name;
      if (plannerLoggedEmail) plannerLoggedEmail.textContent = session.email;
      if (plannerLoggedAvatar) plannerLoggedAvatar.textContent = getInitialsFromName(session.name);
      if (inputNome && (!inputNome.value || inputNome.getAttribute('data-autofilled') === 'true')) {
        inputNome.value = session.name;
        inputNome.setAttribute('data-autofilled', 'true');
      }
      if (inputEmail && (!inputEmail.value || inputEmail.getAttribute('data-autofilled') === 'true')) {
        inputEmail.value = session.email;
        inputEmail.setAttribute('data-autofilled', 'true');
      }
    } else {
      if (plannerAuthGate) plannerAuthGate.hidden = false;
      if (plannerLoggedBanner) plannerLoggedBanner.hidden = true;
      if (inputNome && inputNome.getAttribute('data-autofilled') === 'true') {
        inputNome.value = '';
        inputNome.removeAttribute('data-autofilled');
      }
      if (inputEmail && inputEmail.getAttribute('data-autofilled') === 'true') {
        inputEmail.value = '';
        inputEmail.removeAttribute('data-autofilled');
      }
    }

    renderPostsGrid();
    renderAdminTables();
    checkAndSubmitPendingRouteRequest();
    if (currentOpenPost) {
      renderSubpageComments(currentOpenPost.id);
    }
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

  function normalizeSearchText(str) {
    return String(str || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function stemSearchWord(word) {
    var w = String(word || '').trim();
    if (w.length <= 3) return w;
    return w
      .replace(/(oes|aes|ais|eis|ois|uis)$/, '')
      .replace(/(mente|amento|imento|acao|icoes)$/, '')
      .replace(/(es|os|as|is|s|a|o)$/, '');
  }

  function isOneEditApart(a, b) {
    if (Math.abs(a.length - b.length) > 1) return false;
    var i = 0;
    var j = 0;
    var edits = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) {
        i++;
        j++;
      } else {
        edits++;
        if (edits > 1) return false;
        if (a.length > b.length) i++;
        else if (b.length > a.length) j++;
        else {
          i++;
          j++;
        }
      }
    }
    if (i < a.length || j < b.length) edits++;
    return edits <= 1;
  }

  function countSubstringOccurrences(haystack, needle) {
    if (!needle || !haystack) return 0;
    var count = 0;
    var pos = 0;
    while (true) {
      var idx = haystack.indexOf(needle, pos);
      if (idx === -1) break;
      count++;
      pos = idx + needle.length;
    }
    return count;
  }

  function computePostRelevance(post, rawQuery) {
    var normQuery = normalizeSearchText(rawQuery);
    if (!normQuery) return 0;

    var stopWords = {
      de: 1, da: 1, do: 1, das: 1, dos: 1, em: 1, na: 1, no: 1, nas: 1, nos: 1,
      para: 1, por: 1, com: 1, sem: 1, um: 1, uma: 1, uns: 1, umas: 1,
      o: 1, a: 1, os: 1, as: 1, e: 1, ou: 1, que: 1, como: 1, onde: 1, pelo: 1, pela: 1
    };

    var allWords = normQuery.split(' ').filter(Boolean);
    var meaningfulWords = allWords.filter(function (w) { return !stopWords[w]; });
    var tokens = meaningfulWords.length > 0 ? meaningfulWords : allWords;

    var titleNorm = normalizeSearchText(post.title);
    var catNorm = normalizeSearchText(post.category + ' ' + formatCategoryDisplay(post.category) + ' ' + post.slug);
    var metaNorm = normalizeSearchText((post.season || '') + ' ' + (post.style || '') + ' ' + (post.duration || '') + ' ' + (post.author || ''));
    var excerptNorm = normalizeSearchText((post.excerpt || '') + ' ' + (post.tip || ''));
    var contentNorm = normalizeSearchText(post.content || '');

    var score = 0;

    if (titleNorm.indexOf(normQuery) !== -1) score += 120;
    if (catNorm.indexOf(normQuery) !== -1) score += 90;
    if (metaNorm.indexOf(normQuery) !== -1) score += 65;
    if (excerptNorm.indexOf(normQuery) !== -1) score += 55;
    if (contentNorm.indexOf(normQuery) !== -1) score += 35;

    var titleWords = titleNorm.split(' ').filter(Boolean);
    var catWords = catNorm.split(' ').filter(Boolean);
    var excerptWords = excerptNorm.split(' ').filter(Boolean);
    var matchedTokens = 0;

    tokens.forEach(function (tk) {
      var tokenScore = 0;
      var stem = stemSearchWord(tk);
      var hasStem = stem.length >= 3;

      if (titleWords.indexOf(tk) !== -1) {
        tokenScore += 50;
      } else if (titleNorm.indexOf(tk) !== -1 || (hasStem && titleNorm.indexOf(stem) !== -1)) {
        tokenScore += 35;
      }

      if (catWords.indexOf(tk) !== -1) {
        tokenScore += 45;
      } else if (catNorm.indexOf(tk) !== -1 || (hasStem && catNorm.indexOf(stem) !== -1)) {
        tokenScore += 30;
      }

      if (metaNorm.indexOf(tk) !== -1 || (hasStem && metaNorm.indexOf(stem) !== -1)) {
        tokenScore += 25;
      }

      if (excerptNorm.indexOf(tk) !== -1 || (hasStem && excerptNorm.indexOf(stem) !== -1)) {
        tokenScore += 22;
      }

      var contentHits = countSubstringOccurrences(contentNorm, tk);
      if (contentHits === 0 && hasStem) {
        contentHits = countSubstringOccurrences(contentNorm, stem);
      }
      if (contentHits > 0) {
        tokenScore += 12 + Math.min(contentHits * 3, 18);
      }

      if (tokenScore === 0 && tk.length >= 4) {
        var fuzzyHit = titleWords.concat(catWords).concat(excerptWords).some(function (w) {
          return w.length >= 4 && isOneEditApart(tk, w);
        });
        if (fuzzyHit) {
          tokenScore += 15;
        }
      }

      if (tokenScore > 0) {
        matchedTokens++;
        score += tokenScore;
      }
    });

    if (tokens.length > 1 && matchedTokens > 1) {
      score += matchedTokens * 30;
    }

    return score;
  }

  function createPostCardElement(post, relevanceMeta) {
    var session = getActiveSession();
    var isAdmin = session && session.role === 'admin';
    var subpagePath = buildSubpageRelativePath(post.category, post.slug);

    var article = document.createElement('article');
    article.className = 'post-card';

    var fig = document.createElement('figure');
    fig.className = 'post-card-cover';
    var img = document.createElement('img');
    bindCoverImgFallback(img, post);
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
    if (relevanceMeta && relevanceMeta.label) {
      var relBadge = document.createElement('span');
      relBadge.className = 'post-relevance-badge';
      relBadge.textContent = relevanceMeta.label;
      metaTop.appendChild(relBadge);
    }
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
    var rawQ = activeSearchQuery.trim();
    var hasQuery = rawQ.length > 0;

    var clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) clearBtn.hidden = !hasQuery;

    var relevanceBar = document.getElementById('search-relevance-bar');
    var relevanceText = document.getElementById('search-relevance-text');

    var scoredList = [];
    posts.forEach(function (p) {
      if (activeFilterCategory === 'saved') {
        if (bookmarks.indexOf(p.id) === -1) return;
      } else if (!hasQuery && activeFilterCategory !== 'all') {
        if (slugify(p.category) !== activeFilterCategory) return;
      }

      if (hasQuery) {
        var relScore = computePostRelevance(p, rawQ);
        if (relScore > 0) {
          scoredList.push({ post: p, score: relScore });
        }
      } else {
        scoredList.push({ post: p, score: 0 });
      }
    });

    if (hasQuery) {
      scoredList.sort(function (a, b) {
        return b.score - a.score;
      });
    }

    if (relevanceBar && relevanceText) {
      if (hasQuery) {
        relevanceBar.hidden = false;
        relevanceText.textContent = 'Pesquisa por «' + rawQ + '»: ' + scoredList.length + (scoredList.length === 1 ? ' postagem encontrada (ordenada por relevância)' : ' postagens encontradas (ordenadas por relevância)');
      } else {
        relevanceBar.hidden = true;
      }
    }

    grid.innerHTML = '';
    if (scoredList.length === 0) {
      var empty = document.createElement('p');
      empty.textContent = hasQuery
        ? 'Nenhuma postagem encontrada para «' + rawQ + '». Tente outra palavra-chave ou clique em "Mostrar todas as postagens".'
        : 'Nenhuma publicação encontrada para este filtro.';
      grid.appendChild(empty);
      return;
    }

    var topScore = hasQuery && scoredList.length > 0 ? scoredList[0].score : 1;
    scoredList.forEach(function (item, idx) {
      var relMeta = null;
      if (hasQuery) {
        var pct = Math.max(65, Math.min(99, Math.round((item.score / Math.max(topScore, 1)) * 98)));
        relMeta = {
          label: (idx === 0 && scoredList.length > 1)
            ? 'Mais Relevante (' + pct + '%)'
            : 'Relevância: ' + pct + '%'
        };
      }
      grid.appendChild(createPostCardElement(item.post, relMeta));
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
      bindCoverImgFallback(coverImg, found);
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

    renderSubpageComments(found.id);

    if (subpageView) {
      var heroDrop = document.getElementById('hero-search-results-dropdown');
      if (heroDrop) heroDrop.hidden = true;
      document.body.classList.add('is-subpage-active');
      subpageView.hidden = false;
      window.scrollTo(0, 0);
    }
    return true;
  }

  /* ==========================================================================
     7B. PER-POST COMMENTS SYSTEM (ACCOUNT-GATED, LIKES/DISLIKES, REPLIES & SUPABASE)
     ========================================================================== */
  function getInitialsFromName(nameStr) {
    var parts = String(nameStr || 'Viajante').trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return 'VA';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  function addCommentToPost(postId, parentId, contentText) {
    var session = getActiveSession();
    if (!session || !session.email) {
      openAuthModal('login');
      return false;
    }
    var trimmed = String(contentText || '').trim();
    if (!trimmed) return false;

    var allComments = loadLocalComments();
    var newComment = {
      id: 'cmt-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      postId: postId,
      parentId: parentId || null,
      authorId: session.id || ('user-' + Date.now()),
      authorName: session.name || 'Viajante',
      authorEmail: session.email.toLowerCase(),
      authorRole: session.role || 'user',
      content: trimmed,
      likedBy: [],
      dislikedBy: [],
      createdAt: new Date().toISOString()
    };

    allComments.push(newComment);
    saveLocalComments(allComments);
    syncCommentToCloud(newComment, allComments);
    renderSubpageComments(postId);
    return true;
  }

  function toggleCommentVote(commentId, voteType) {
    var session = getActiveSession();
    if (!session || !session.email) {
      openAuthModal('login');
      return;
    }
    var userEmail = session.email.toLowerCase();
    var allComments = loadLocalComments();
    var target = null;

    for (var i = 0; i < allComments.length; i++) {
      if (allComments[i].id === commentId) {
        target = allComments[i];
        break;
      }
    }
    if (!target) return;

    if (!Array.isArray(target.likedBy)) target.likedBy = [];
    if (!Array.isArray(target.dislikedBy)) target.dislikedBy = [];

    var likeIdx = target.likedBy.indexOf(userEmail);
    var dislikeIdx = target.dislikedBy.indexOf(userEmail);

    if (voteType === 'like') {
      if (likeIdx !== -1) {
        target.likedBy.splice(likeIdx, 1);
      } else {
        target.likedBy.push(userEmail);
        if (dislikeIdx !== -1) target.dislikedBy.splice(dislikeIdx, 1);
      }
    } else if (voteType === 'dislike') {
      if (dislikeIdx !== -1) {
        target.dislikedBy.splice(dislikeIdx, 1);
      } else {
        target.dislikedBy.push(userEmail);
        if (likeIdx !== -1) target.likedBy.splice(likeIdx, 1);
      }
    }

    saveLocalComments(allComments);
    syncCommentToCloud(target, allComments);
    if (currentOpenPost) {
      renderSubpageComments(currentOpenPost.id);
    }
  }

  function deleteCommentById(commentId) {
    var session = getActiveSession();
    if (!session) return;
    var allComments = loadLocalComments();
    var target = null;
    for (var i = 0; i < allComments.length; i++) {
      if (allComments[i].id === commentId) {
        target = allComments[i];
        break;
      }
    }
    if (!target) return;
    var canDelete = session.role === 'admin' || (target.authorEmail && target.authorEmail.toLowerCase() === session.email.toLowerCase());
    if (!canDelete) return;

    var remaining = allComments.filter(function (c) {
      return c.id !== commentId && c.parentId !== commentId;
    });
    saveLocalComments(remaining);
    deleteCommentFromCloud(commentId, remaining);
    if (currentOpenPost) {
      renderSubpageComments(currentOpenPost.id);
    }
  }

  function createCommentCardElement(commentObj, allPostComments, isReplyCard) {
    var session = getActiveSession();
    var userEmail = session && session.email ? session.email.toLowerCase() : '';
    var likedBy = Array.isArray(commentObj.likedBy) ? commentObj.likedBy : [];
    var dislikedBy = Array.isArray(commentObj.dislikedBy) ? commentObj.dislikedBy : [];
    var hasLiked = userEmail && likedBy.indexOf(userEmail) !== -1;
    var hasDisliked = userEmail && dislikedBy.indexOf(userEmail) !== -1;

    var card = document.createElement('div');
    card.className = 'comment-card' + (isReplyCard ? ' is-reply' : '');

    var header = document.createElement('div');
    header.className = 'comment-card-header';

    var authorWrap = document.createElement('div');
    authorWrap.className = 'comment-author-wrap';

    var avatar = document.createElement('span');
    avatar.className = 'comment-user-avatar';
    avatar.textContent = getInitialsFromName(commentObj.authorName);

    var nameStrong = document.createElement('strong');
    nameStrong.className = 'comment-author-name';
    nameStrong.textContent = commentObj.authorName || 'Viajante';

    var rolePill = document.createElement('span');
    var isCommentAdmin = commentObj.authorRole === 'admin';
    rolePill.className = 'comment-role-pill' + (isCommentAdmin ? ' is-admin' : '');
    rolePill.textContent = isCommentAdmin ? 'Administrador' : 'Conta Viajante';

    authorWrap.appendChild(avatar);
    authorWrap.appendChild(nameStrong);
    authorWrap.appendChild(rolePill);

    var dateSpan = document.createElement('span');
    dateSpan.className = 'comment-date-label';
    dateSpan.textContent = formatDatePt(commentObj.createdAt);

    header.appendChild(authorWrap);
    header.appendChild(dateSpan);

    var bodyP = document.createElement('p');
    bodyP.className = 'comment-body-text';
    bodyP.textContent = commentObj.content;

    var actionsRow = document.createElement('div');
    actionsRow.className = 'comment-actions-row';

    var btnLike = document.createElement('button');
    btnLike.type = 'button';
    btnLike.className = 'btn-comment-vote is-like' + (hasLiked ? ' is-active' : '');
    btnLike.innerHTML = '👍 Legal <span>(' + likedBy.length + ')</span>';
    btnLike.addEventListener('click', function () {
      toggleCommentVote(commentObj.id, 'like');
    });

    var btnDislike = document.createElement('button');
    btnDislike.type = 'button';
    btnDislike.className = 'btn-comment-vote is-dislike' + (hasDisliked ? ' is-active' : '');
    btnDislike.innerHTML = '👎 Chato <span>(' + dislikedBy.length + ')</span>';
    btnDislike.addEventListener('click', function () {
      toggleCommentVote(commentObj.id, 'dislike');
    });

    var btnReply = document.createElement('button');
    btnReply.type = 'button';
    btnReply.className = 'btn-comment-reply';
    btnReply.textContent = '↩ Responder';

    actionsRow.appendChild(btnLike);
    actionsRow.appendChild(btnDislike);
    actionsRow.appendChild(btnReply);

    if (session && (session.role === 'admin' || (commentObj.authorEmail && commentObj.authorEmail.toLowerCase() === userEmail))) {
      var btnDel = document.createElement('button');
      btnDel.type = 'button';
      btnDel.className = 'btn-comment-delete';
      btnDel.textContent = 'Excluir';
      btnDel.addEventListener('click', function () {
        deleteCommentById(commentObj.id);
      });
      actionsRow.appendChild(btnDel);
    }

    var replyFormWrap = document.createElement('form');
    replyFormWrap.className = 'comment-reply-form';
    replyFormWrap.hidden = true;

    var replyTextarea = document.createElement('textarea');
    replyTextarea.rows = 2;
    replyTextarea.placeholder = 'Respondendo ao comentário de ' + (commentObj.authorName || 'Viajante') + '...';
    replyTextarea.required = true;

    var replyActions = document.createElement('div');
    replyActions.className = 'comment-reply-actions';

    var btnCancelReply = document.createElement('button');
    btnCancelReply.type = 'button';
    btnCancelReply.className = 'btn-card-admin';
    btnCancelReply.textContent = 'Cancelar';
    btnCancelReply.addEventListener('click', function () {
      replyFormWrap.hidden = true;
      replyTextarea.value = '';
    });

    var btnSendReply = document.createElement('button');
    btnSendReply.type = 'submit';
    btnSendReply.className = 'btn-account-solid';
    btnSendReply.textContent = 'Publicar Resposta';

    replyActions.appendChild(btnCancelReply);
    replyActions.appendChild(btnSendReply);
    replyFormWrap.appendChild(replyTextarea);
    replyFormWrap.appendChild(replyActions);

    btnReply.addEventListener('click', function () {
      if (!getActiveSession()) {
        openAuthModal('login');
        return;
      }
      replyFormWrap.hidden = !replyFormWrap.hidden;
      if (!replyFormWrap.hidden) {
        replyTextarea.focus();
      }
    });

    replyFormWrap.addEventListener('submit', function (e) {
      e.preventDefault();
      var targetParentId = isReplyCard && commentObj.parentId ? commentObj.parentId : commentObj.id;
      var textVal = replyTextarea.value.trim();
      if (!textVal) return;
      if (isReplyCard) {
        textVal = '@' + commentObj.authorName + ' ' + textVal;
      }
      addCommentToPost(commentObj.postId, targetParentId, textVal);
    });

    card.appendChild(header);
    card.appendChild(bodyP);
    card.appendChild(actionsRow);
    card.appendChild(replyFormWrap);

    if (!isReplyCard) {
      var childReplies = allPostComments.filter(function (c) {
        return c.parentId === commentObj.id;
      });
      if (childReplies.length > 0) {
        var repliesBox = document.createElement('div');
        repliesBox.className = 'comment-replies-container';
        childReplies.forEach(function (rep) {
          repliesBox.appendChild(createCommentCardElement(rep, allPostComments, true));
        });
        card.appendChild(repliesBox);
      }
    }

    return card;
  }

  function renderSubpageComments(postId) {
    var countEl = document.getElementById('subpage-comments-count');
    var authGate = document.getElementById('comments-auth-gate');
    var composeForm = document.getElementById('comment-compose-form');
    var composeAvatar = document.getElementById('comment-compose-avatar');
    var authorDisplay = document.getElementById('comment-author-display');
    var threadList = document.getElementById('comments-thread-list');
    if (!threadList) return;

    var session = getActiveSession();
    if (session && session.email) {
      if (authGate) authGate.hidden = true;
      if (composeForm) composeForm.hidden = false;
      if (composeAvatar) composeAvatar.textContent = getInitialsFromName(session.name);
      if (authorDisplay) authorDisplay.textContent = session.name + ' (' + session.email + ')';
    } else {
      if (authGate) authGate.hidden = false;
      if (composeForm) composeForm.hidden = true;
    }

    var allComments = loadLocalComments();
    var postComments = allComments.filter(function (c) {
      return c.postId === postId;
    });

    if (countEl) {
      countEl.textContent = postComments.length + (postComments.length === 1 ? ' comentário' : ' comentários');
    }

    threadList.innerHTML = '';
    var topLevel = postComments.filter(function (c) {
      return !c.parentId;
    });

    if (topLevel.length === 0) {
      var emptyP = document.createElement('p');
      emptyP.className = 'hero-search-empty';
      emptyP.textContent = 'Ainda não há comentários nesta postagem. Entre na sua conta e seja o primeiro a comentar!';
      threadList.appendChild(emptyP);
      return;
    }

    topLevel.forEach(function (cmt) {
      threadList.appendChild(createCommentCardElement(cmt, postComments, false));
    });
  }

  function closeSubpageView(pushHistory) {
    currentOpenPost = null;
    document.body.classList.remove('is-subpage-active');
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
      window.scrollTo(0, 0);
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
  var coverPreviewImg = document.getElementById('post-cover-preview-img');
  var coverSourceBadge = document.getElementById('post-cover-source-badge');
  var coverSourceLabel = document.getElementById('post-cover-source-label');
  var coverSourceHint = document.getElementById('post-cover-source-hint');
  var btnClearCoverCustom = document.getElementById('btn-clear-cover-custom');

  var pendingUploadedDataUrl = '';
  var pendingUploadedFileName = '';
  var isCompressingCover = false;

  var CATALOG_COVER_LABELS = {
    'hero-ocean-photo': 'Enseada Turquesa & Falésias (Catálogo)',
    'card-1-photo': 'Ilhas Gregas & Mar Egeu (Catálogo)',
    'card-2-photo': 'Fiordes da Noruega (Catálogo)',
    'card-3-photo': 'Costa Amalfitana (Catálogo)'
  };

  function compressImageDataUrl(rawDataUrl, maxWidth, maxHeight, quality, callback) {
    var img = new Image();
    img.onload = function () {
      try {
        var w = img.naturalWidth || img.width || 1200;
        var h = img.naturalHeight || img.height || 800;
        var scale = Math.min(1, maxWidth / Math.max(w, 1), maxHeight / Math.max(h, 1));
        var targetW = Math.max(1, Math.round(w * scale));
        var targetH = Math.max(1, Math.round(h * scale));
        var canvas = document.createElement('canvas');
        canvas.width = targetW;
        canvas.height = targetH;
        var ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#0c192c';
          ctx.fillRect(0, 0, targetW, targetH);
          ctx.drawImage(img, 0, 0, targetW, targetH);
          var compressed = canvas.toDataURL('image/jpeg', quality || 0.82);
          callback(compressed);
          return;
        }
      } catch (e) {}
      callback(rawDataUrl);
    };
    img.onerror = function () {
      callback(rawDataUrl);
    };
    img.src = rawDataUrl;
  }

  function updateCoverPreviewUI() {
    var presetVal = postCoverPreset ? postCoverPreset.value : 'hero-ocean-photo';
    var typedUrl = postCoverUrl ? postCoverUrl.value.trim() : '';
    var activeSrc = '';
    var isCustom = false;
    var badgeText = 'Catálogo VÉRTICE AZUL';
    var labelText = CATALOG_COVER_LABELS[presetVal] || 'Enseada Turquesa & Falésias (Catálogo)';
    var hintText = 'Escolha uma foto do catálogo acima, cole um link de imagem ou clique em «Enviar Foto».';

    if (presetVal === 'custom' && (typedUrl || pendingUploadedDataUrl)) {
      isCustom = true;
      if (typedUrl) {
        activeSrc = typedUrl;
        badgeText = 'URL Externa Personalizada';
        labelText = typedUrl;
        hintText = 'Usando imagem de link externo. Para trocar, cole outro link, envie uma foto ou escolha uma opção do catálogo.';
      } else {
        activeSrc = pendingUploadedDataUrl;
        badgeText = 'Foto Enviada (Otimizada)';
        var kbSize = Math.max(1, Math.round((pendingUploadedDataUrl.length * 0.75) / 1024));
        labelText = (pendingUploadedFileName || 'Imagem personalizada') + ' (~' + kbSize + ' KB)';
        hintText = 'Imagem comprimida e pronta para publicação instantânea na subpágina e na nuvem.';
      }
    } else if (presetVal === 'custom') {
      activeSrc = resolveCatalogCoverByKey('hero-ocean-photo');
      badgeText = 'Aguardando Imagem';
      labelText = 'Cole um link no campo acima ou clique em «Enviar Foto»';
      hintText = 'Se nenhum link ou arquivo for informado, a capa padrão do catálogo será utilizada.';
    } else {
      activeSrc = resolveCatalogCoverByKey(presetVal);
    }

    if (coverPreviewImg) {
      coverPreviewImg.onerror = function () {
        coverPreviewImg.onerror = null;
        coverPreviewImg.src = resolveCatalogCoverByKey('hero-ocean-photo');
        if (coverSourceHint) {
          coverSourceHint.textContent = 'Aviso: não foi possível carregar a prévia deste link. Verifique se é um link direto de imagem (.jpg, .png, .webp).';
        }
      };
      coverPreviewImg.src = activeSrc;
    }
    if (coverSourceBadge) {
      coverSourceBadge.textContent = badgeText;
      coverSourceBadge.classList.toggle('is-custom', isCustom);
    }
    if (coverSourceLabel) coverSourceLabel.textContent = labelText;
    if (coverSourceHint) coverSourceHint.textContent = hintText;
    if (btnClearCoverCustom) btnClearCoverCustom.hidden = !isCustom;
  }

  if (postCoverFile) {
    postCoverFile.addEventListener('change', function () {
      var file = postCoverFile.files && postCoverFile.files[0];
      if (!file) return;
      var fileName = file.name || 'foto-computador.jpg';
      postCoverFile.value = '';
      isCompressingCover = true;
      var saveBtn = document.getElementById('btn-save-post');
      if (saveBtn) saveBtn.disabled = true;
      if (coverSourceLabel) coverSourceLabel.textContent = 'Otimizando imagem «' + fileName + '»...';

      var reader = new FileReader();
      reader.onload = function (ev) {
        var rawResult = ev.target && ev.target.result ? String(ev.target.result) : '';
        compressImageDataUrl(rawResult, 1200, 850, 0.82, function (compressedDataUrl) {
          pendingUploadedDataUrl = compressedDataUrl;
          pendingUploadedFileName = fileName;
          isCompressingCover = false;
          if (saveBtn) saveBtn.disabled = false;
          if (postCoverUrl) {
            postCoverUrl.value = '';
            postCoverUrl.placeholder = 'Foto enviada (' + fileName + ') — ou cole um link https://...';
          }
          if (postCoverPreset) postCoverPreset.value = 'custom';
          updateCoverPreviewUI();
        });
      };
      reader.onerror = function () {
        isCompressingCover = false;
        if (saveBtn) saveBtn.disabled = false;
      };
      reader.readAsDataURL(file);
    });
  }

  if (postCoverPreset) {
    postCoverPreset.addEventListener('change', function () {
      if (postCoverPreset.value !== 'custom') {
        pendingUploadedDataUrl = '';
        pendingUploadedFileName = '';
        if (postCoverUrl) {
          postCoverUrl.value = '';
          postCoverUrl.placeholder = 'https://exemplo.com/foto.jpg';
        }
      }
      updateCoverPreviewUI();
    });
  }

  if (postCoverUrl) {
    postCoverUrl.addEventListener('input', function () {
      var val = postCoverUrl.value.trim();
      if (val !== '') {
        if (postCoverPreset && postCoverPreset.value !== 'custom') {
          postCoverPreset.value = 'custom';
        }
      }
      updateCoverPreviewUI();
    });
  }

  if (btnClearCoverCustom) {
    btnClearCoverCustom.addEventListener('click', function () {
      pendingUploadedDataUrl = '';
      pendingUploadedFileName = '';
      if (postCoverUrl) {
        postCoverUrl.value = '';
        postCoverUrl.placeholder = 'https://exemplo.com/foto.jpg';
      }
      if (postCoverPreset) {
        postCoverPreset.value = 'hero-ocean-photo';
      }
      updateCoverPreviewUI();
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
    var editorTabBtn = document.querySelector('[data-admin-tab="editor"]');
    if (editorTabBtn) editorTabBtn.click();
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

    var rawCoverUrl = (post.coverUrl && String(post.coverUrl).trim()) || '';
    if (rawCoverUrl.indexOf('data:image/') === 0) {
      pendingUploadedDataUrl = rawCoverUrl;
      pendingUploadedFileName = 'Capa personalizada atual';
      if (postCoverUrl) {
        postCoverUrl.value = '';
        postCoverUrl.placeholder = 'Capa enviada ativa (envie outra foto ou cole um link para trocar)';
      }
      if (postCoverPreset) postCoverPreset.value = 'custom';
      if (rawCoverUrl.length > 450000) {
        compressImageDataUrl(rawCoverUrl, 1200, 850, 0.82, function (compressed) {
          pendingUploadedDataUrl = compressed;
          updateCoverPreviewUI();
        });
      }
    } else if (rawCoverUrl !== '') {
      pendingUploadedDataUrl = '';
      pendingUploadedFileName = '';
      if (postCoverUrl) {
        postCoverUrl.value = rawCoverUrl;
        postCoverUrl.placeholder = 'https://exemplo.com/foto.jpg';
      }
      if (postCoverPreset) postCoverPreset.value = 'custom';
    } else {
      pendingUploadedDataUrl = '';
      pendingUploadedFileName = '';
      if (postCoverUrl) {
        postCoverUrl.value = '';
        postCoverUrl.placeholder = 'https://exemplo.com/foto.jpg';
      }
      if (postCoverPreset) {
        postCoverPreset.value = (post.coverKey && post.coverKey !== 'custom') ? post.coverKey : 'hero-ocean-photo';
      }
    }

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
    updateCoverPreviewUI();
  }

  function resetPostEditor() {
    var form = document.getElementById('admin-post-form');
    if (form) form.reset();
    var editId = document.getElementById('post-edit-id');
    if (editId) editId.value = '';
    slugManuallyEdited = false;
    pendingUploadedDataUrl = '';
    pendingUploadedFileName = '';
    isCompressingCover = false;
    if (postCoverUrl) {
      postCoverUrl.value = '';
      postCoverUrl.placeholder = 'https://exemplo.com/foto.jpg';
    }
    if (postCoverPreset) {
      postCoverPreset.value = 'hero-ocean-photo';
    }
    var saveBtn = document.getElementById('btn-save-post');
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.textContent = 'Publicar Subpágina';
    }
    updateLiveUrlPreview();
    updateCoverPreviewUI();
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
    checkAndSubmitPendingRouteRequest();
    if (currentOpenPost) {
      renderSubpageComments(currentOpenPost.id);
    }
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

      if (isCompressingCover) {
        if (adminPostStatus) {
          adminPostStatus.textContent = 'Aguarde um instante: otimizando a imagem selecionada...';
          adminPostStatus.classList.remove('is-error');
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
      var posts = loadLocalPosts();
      var existingIdx = -1;
      var existingPost = null;
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === editIdVal) {
          existingIdx = i;
          existingPost = posts[i];
          break;
        }
      }

      var presetVal = postCoverPreset ? postCoverPreset.value : 'hero-ocean-photo';
      var typedUrlVal = postCoverUrl ? postCoverUrl.value.trim() : '';
      var resolvedCoverKey = 'hero-ocean-photo';
      var resolvedCoverUrl = '';

      if (presetVal === 'custom') {
        resolvedCoverUrl = typedUrlVal || pendingUploadedDataUrl || '';
        resolvedCoverKey = (existingPost && existingPost.coverKey && existingPost.coverKey !== 'custom')
          ? existingPost.coverKey
          : 'hero-ocean-photo';
      } else {
        resolvedCoverKey = presetVal || 'hero-ocean-photo';
        resolvedCoverUrl = '';
      }

      var newPost = {
        id: editIdVal || ('post-' + Date.now()),
        title: title,
        category: category,
        slug: slug,
        excerpt: excerpt.trim(),
        content: content.trim(),
        coverKey: resolvedCoverKey,
        coverUrl: resolvedCoverUrl,
        season: ((document.getElementById('post-season-input') || {}).value || 'Ano todo').trim(),
        duration: ((document.getElementById('post-duration-input') || {}).value || '4 a 6 dias').trim(),
        style: ((document.getElementById('post-style-input') || {}).value || 'Cultura & Roteiro Sob Medida').trim(),
        readingTime: ((document.getElementById('post-reading-input') || {}).value || '6 min de leitura').trim(),
        tip: ((document.getElementById('post-tip-input') || {}).value || '').trim(),
        author: (existingPost && existingPost.author) || session.name || 'Administrador VÉRTICE AZUL',
        createdAt: (existingPost && existingPost.createdAt) || new Date().toISOString()
      };

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
        adminPostStatus.textContent = 'Subpágina salva com sucesso em /' + newPost.category + '/' + newPost.slug + '!';
      }

      var adminSection = document.getElementById('painel-admin');
      if (adminSection) {
        adminSection.hidden = true;
      }

      openSubpage(newPost.category, newPost.slug, true);
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

    var reqsTbody = document.getElementById('admin-requests-tbody');
    var statTotal = document.getElementById('stat-req-total');
    var statPending = document.getElementById('stat-req-pending');
    var statAnalyzing = document.getElementById('stat-req-analyzing');
    var statDone = document.getElementById('stat-req-done');
    var tabCounter = document.getElementById('admin-req-tab-counter');

    if (reqsTbody) {
      reqsTbody.innerHTML = '';
      var requests = loadLocalRouteRequests();
      var pendingCount = 0;
      var analyzingCount = 0;
      var doneCount = 0;

      requests.forEach(function (r) {
        if (r.status === 'Atendido') doneCount++;
        else if (r.status === 'Em Análise') analyzingCount++;
        else pendingCount++;
      });

      if (statTotal) statTotal.innerHTML = 'Total: <strong>' + requests.length + '</strong>';
      if (statPending) statPending.innerHTML = 'Pendentes: <strong>' + pendingCount + '</strong>';
      if (statAnalyzing) statAnalyzing.innerHTML = 'Em Análise: <strong>' + analyzingCount + '</strong>';
      if (statDone) statDone.innerHTML = 'Atendidos: <strong>' + doneCount + '</strong>';
      if (tabCounter) {
        if (pendingCount > 0) {
          tabCounter.textContent = pendingCount;
          tabCounter.hidden = false;
        } else {
          tabCounter.hidden = true;
        }
      }

      if (requests.length === 0) {
        var trEmpty = document.createElement('tr');
        var tdEmpty = document.createElement('td');
        tdEmpty.colSpan = 7;
        tdEmpty.style.textAlign = 'center';
        tdEmpty.style.padding = '24px';
        tdEmpty.style.color = '#64748b';
        tdEmpty.textContent = 'Nenhuma solicitação de roteiro registrada no momento.';
        trEmpty.appendChild(tdEmpty);
        reqsTbody.appendChild(trEmpty);
      } else {
        requests.forEach(function (req) {
          var tr = document.createElement('tr');

          // 1. Data/Hora
          var tdDate = document.createElement('td');
          var dateObj = new Date(req.createdAt || Date.now());
          var formattedDate = isNaN(dateObj.getTime()) ? (req.createdAt || '') : dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
          tdDate.innerHTML = '<span style="font-size:12.5px;color:#475569;white-space:nowrap;">' + escapeHtml(formattedDate) + '</span>';

          // 2. Viajante
          var tdTraveler = document.createElement('td');
          tdTraveler.className = 'corridor-name';
          tdTraveler.innerHTML = '<strong>' + escapeHtml(req.travelerName) + '</strong><br><small style="color:#64748b;font-size:12px;">' + escapeHtml(req.travelerEmail) + '</small>';

          // 3. Destino
          var tdDestino = document.createElement('td');
          tdDestino.innerHTML = '<strong>' + escapeHtml(req.destino) + '</strong>';

          // 4. Época & Duração
          var tdPeriodo = document.createElement('td');
          tdPeriodo.innerHTML = escapeHtml(req.epoca) + '<br><small style="color:#64748b;font-size:12px;">' + escapeHtml(req.duracao) + '</small>';

          // 5. Estilo
          var tdEstilo = document.createElement('td');
          tdEstilo.style.fontSize = '13px';
          tdEstilo.textContent = req.estilo;

          // 6. Status
          var tdStatus = document.createElement('td');
          var pill = document.createElement('span');
          var st = req.status || 'Pendente';
          pill.className = 'req-status-pill ' + (st === 'Atendido' ? 'is-completed' : (st === 'Em Análise' ? 'is-analyzing' : 'is-pending'));
          pill.textContent = st;
          tdStatus.appendChild(pill);

          // 7. Ações
          var tdActions = document.createElement('td');
          var actionsWrap = document.createElement('div');
          actionsWrap.className = 'admin-req-actions-cell';

          var selectStatus = document.createElement('select');
          selectStatus.className = 'admin-req-status-select';
          selectStatus.setAttribute('aria-label', 'Alterar status da solicitação');
          ['Pendente', 'Em Análise', 'Atendido'].forEach(function (optVal) {
            var opt = document.createElement('option');
            opt.value = optVal;
            opt.textContent = optVal;
            if (optVal === st) opt.selected = true;
            selectStatus.appendChild(opt);
          });

          selectStatus.addEventListener('change', function () {
            req.status = selectStatus.value;
            saveLocalRouteRequests(requests);
            syncRouteRequestToCloud(req, requests);
            renderAdminTables();
          });

          var delBtn = document.createElement('button');
          delBtn.type = 'button';
          delBtn.className = 'btn-card-admin is-danger';
          delBtn.textContent = 'Excluir';
          delBtn.addEventListener('click', function () {
            if (confirm('Deseja excluir a solicitação de roteiro de ' + req.travelerName + '?')) {
              var remaining = requests.filter(function (item) {
                return item.id !== req.id;
              });
              saveLocalRouteRequests(remaining);
              deleteRouteRequestCloud(req.id, remaining);
              renderAdminTables();
            }
          });

          actionsWrap.appendChild(selectStatus);
          actionsWrap.appendChild(delBtn);
          tdActions.appendChild(actionsWrap);

          tr.appendChild(tdDate);
          tr.appendChild(tdTraveler);
          tr.appendChild(tdDestino);
          tr.appendChild(tdPeriodo);
          tr.appendChild(tdEstilo);
          tr.appendChild(tdStatus);
          tr.appendChild(tdActions);
          reqsTbody.appendChild(tr);
        });
      }
    }
  }

  /* Admin Tabs Navigation */
  document.querySelectorAll('[data-admin-tab]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-admin-tab');
      document.querySelectorAll('[data-admin-tab]').forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      document.querySelectorAll('.admin-tab-pane').forEach(function (pane) {
        pane.hidden = pane.id !== ('admin-tab-' + target);
      });
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
    });
  }

  var subpageBrandHome = document.getElementById('subpage-brand-home');
  if (subpageBrandHome) {
    subpageBrandHome.addEventListener('click', function (e) {
      e.preventDefault();
      closeSubpageView(true);
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

  /* Comments Section Event Listeners */
  var btnCommentGateLogin = document.getElementById('btn-comment-gate-login');
  if (btnCommentGateLogin) {
    btnCommentGateLogin.addEventListener('click', function () {
      openAuthModal('login');
    });
  }

  var btnCommentGateRegister = document.getElementById('btn-comment-gate-register');
  if (btnCommentGateRegister) {
    btnCommentGateRegister.addEventListener('click', function () {
      openAuthModal('register');
    });
  }

  var commentComposeForm = document.getElementById('comment-compose-form');
  var commentInputText = document.getElementById('comment-input-text');
  var commentStatusMsg = document.getElementById('comment-status-msg');
  if (commentComposeForm) {
    commentComposeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!currentOpenPost) return;
      if (!getActiveSession()) {
        openAuthModal('login');
        return;
      }
      var textVal = commentInputText ? commentInputText.value.trim() : '';
      if (!textVal) {
        if (commentStatusMsg) {
          commentStatusMsg.textContent = 'Escreva uma mensagem antes de publicar seu comentário.';
          commentStatusMsg.classList.add('is-error');
        }
        return;
      }
      var ok = addCommentToPost(currentOpenPost.id, null, textVal);
      if (ok) {
        if (commentInputText) commentInputText.value = '';
        if (commentStatusMsg) {
          commentStatusMsg.classList.remove('is-error');
          commentStatusMsg.textContent = 'Comentário publicado e sincronizado com sucesso!';
          setTimeout(function () {
            if (commentStatusMsg) commentStatusMsg.textContent = '';
          }, 3000);
        }
      }
    });
  }

  var postsSearchInput = document.getElementById('posts-search-input');
  var heroSearchInput = document.getElementById('hero-search-input');
  var heroResultsDropdown = document.getElementById('hero-search-results-dropdown');
  var heroResultsList = document.getElementById('hero-search-results-list');
  var heroResultsCount = document.getElementById('hero-search-results-count');
  var btnCloseHeroSearch = document.getElementById('btn-close-hero-search');
  var btnClearSearch = document.getElementById('btn-clear-search');
  var btnResetRelevance = document.getElementById('btn-reset-relevance');

  function renderHeroSearchDropdown(queryValue, forceShowAllIfEmpty) {
    if (!heroResultsDropdown || !heroResultsList) return;
    var rawQ = String(queryValue || '').trim();
    if (!rawQ && !forceShowAllIfEmpty) {
      heroResultsDropdown.hidden = true;
      return;
    }

    var posts = loadLocalPosts();
    var scored = [];

    if (rawQ) {
      posts.forEach(function (p) {
        var sc = computePostRelevance(p, rawQ);
        if (sc > 0) {
          scored.push({ post: p, score: sc });
        }
      });
      scored.sort(function (a, b) {
        return b.score - a.score;
      });
    } else {
      posts.forEach(function (p) {
        scored.push({ post: p, score: 100 });
      });
    }

    if (heroResultsCount) {
      if (rawQ) {
        heroResultsCount.textContent = 'Resultados por relevância para «' + rawQ + '» (' + scored.length + ')';
      } else {
        heroResultsCount.textContent = 'Todas as postagens publicadas (' + scored.length + ')';
      }
    }

    heroResultsList.innerHTML = '';

    if (scored.length === 0) {
      var emptyMsg = document.createElement('p');
      emptyMsg.className = 'hero-search-empty';
      emptyMsg.textContent = 'Nenhuma postagem encontrada para «' + rawQ + '». Tente outra palavra-chave.';
      heroResultsList.appendChild(emptyMsg);
      heroResultsDropdown.hidden = false;
      return;
    }

    var topScore = scored[0].score || 1;
    scored.forEach(function (item, idx) {
      var post = item.post;
      var subpagePath = buildSubpageRelativePath(post.category, post.slug);
      var pct = rawQ ? Math.max(65, Math.min(99, Math.round((item.score / Math.max(topScore, 1)) * 98))) : 100;

      var cardLink = document.createElement('a');
      cardLink.href = subpagePath.slice(1);
      cardLink.className = 'hero-search-result-card';
      cardLink.addEventListener('click', function (e) {
        e.preventDefault();
        heroResultsDropdown.hidden = true;
        openSubpage(post.category, post.slug, true);
      });

      var thumb = document.createElement('img');
      thumb.className = 'hero-search-result-thumb';
      bindCoverImgFallback(thumb, post);
      thumb.src = resolvePostCoverSrc(post);
      thumb.alt = post.title;

      var body = document.createElement('div');
      body.className = 'hero-search-result-body';

      var meta = document.createElement('div');
      meta.className = 'hero-search-result-meta';

      var catBadge = document.createElement('span');
      catBadge.className = 'post-category-pill';
      catBadge.textContent = formatCategoryDisplay(post.category);
      meta.appendChild(catBadge);

      if (rawQ) {
        var relBadge = document.createElement('span');
        relBadge.className = 'post-relevance-badge';
        relBadge.textContent = (idx === 0 && scored.length > 1)
          ? 'Mais Relevante (' + pct + '%)'
          : 'Relevância: ' + pct + '%';
        meta.appendChild(relBadge);
      }

      var urlCode = document.createElement('span');
      urlCode.className = 'post-url-chip';
      urlCode.textContent = subpagePath;
      meta.appendChild(urlCode);

      var titleH4 = document.createElement('h4');
      titleH4.className = 'hero-search-result-title';
      titleH4.textContent = post.title;

      var excP = document.createElement('p');
      excP.className = 'hero-search-result-excerpt';
      excP.textContent = post.excerpt;

      body.appendChild(meta);
      body.appendChild(titleH4);
      body.appendChild(excP);

      var ctaSpan = document.createElement('span');
      ctaSpan.className = 'hero-search-result-cta';
      ctaSpan.textContent = 'Abrir Subpágina →';

      cardLink.appendChild(thumb);
      cardLink.appendChild(body);
      cardLink.appendChild(ctaSpan);
      heroResultsList.appendChild(cardLink);
    });

    heroResultsDropdown.hidden = false;
  }

  function applyFreeSearchQuery(queryValue, showHeroDropdown, forceDropdownIfEmpty) {
    activeSearchQuery = String(queryValue || '');
    if (postsSearchInput && postsSearchInput.value !== activeSearchQuery) {
      postsSearchInput.value = activeSearchQuery;
    }
    if (heroSearchInput && heroSearchInput.value !== activeSearchQuery) {
      heroSearchInput.value = activeSearchQuery;
    }
    if (activeSearchQuery.trim() !== '' && activeFilterCategory !== 'all') {
      activeFilterCategory = 'all';
      syncCategoryFilterPills(loadLocalPosts());
    }
    renderPostsGrid();
    if (showHeroDropdown) {
      renderHeroSearchDropdown(activeSearchQuery, !!forceDropdownIfEmpty);
    } else if (!activeSearchQuery.trim() && heroResultsDropdown) {
      heroResultsDropdown.hidden = true;
    }
  }

  if (postsSearchInput) {
    postsSearchInput.addEventListener('input', function () {
      applyFreeSearchQuery(postsSearchInput.value || '', false, false);
    });
  }

  if (heroSearchInput) {
    heroSearchInput.addEventListener('input', function () {
      applyFreeSearchQuery(heroSearchInput.value || '', true, false);
    });
    heroSearchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyFreeSearchQuery(heroSearchInput.value || '', true, true);
      }
    });
  }

  if (btnCloseHeroSearch && heroResultsDropdown) {
    btnCloseHeroSearch.addEventListener('click', function () {
      heroResultsDropdown.hidden = true;
    });
  }

  if (btnClearSearch) {
    btnClearSearch.addEventListener('click', function () {
      applyFreeSearchQuery('', false, false);
    });
  }

  if (btnResetRelevance) {
    btnResetRelevance.addEventListener('click', function () {
      applyFreeSearchQuery('', false, false);
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
  var inputDestino = document.getElementById('input-destino');
  var inputEpoca = document.getElementById('input-epoca');
  var inputEstilo = document.getElementById('input-estilo');
  var inputDuracao = document.getElementById('input-duracao');

  var summaryDestino = document.getElementById('summary-destino');
  var summaryEpoca = document.getElementById('summary-epoca');
  var summaryEstilo = document.getElementById('summary-estilo');
  var summaryDuracao = document.getElementById('summary-duracao');

  function updateSummaryPanel() {
    if (summaryDestino && inputDestino) summaryDestino.textContent = inputDestino.value || 'Personalizado';
    if (summaryEpoca && inputEpoca) summaryEpoca.textContent = inputEpoca.value || 'Livre';
    if (summaryEstilo && inputEstilo) summaryEstilo.textContent = inputEstilo.value || 'Sob Medida';
    if (summaryDuracao && inputDuracao) summaryDuracao.textContent = inputDuracao.value || 'A definir';
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

  var heroSubmit = document.getElementById('hero-search-submit');
  if (heroSubmit) {
    heroSubmit.addEventListener('click', function () {
      var qVal = heroSearchInput ? heroSearchInput.value : '';
      applyFreeSearchQuery(qVal, true, true);
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
    if (el) {
      el.addEventListener('change', updateSummaryPanel);
      el.addEventListener('input', updateSummaryPanel);
    }
  });

  /* Institutional & Legal Modal (Sobre Nós, Política de Privacidade, Termos de Uso) */
  var institutionalModal = document.getElementById('institutional-modal');
  var btnCloseInstitutional = document.getElementById('btn-close-institutional-modal');

  function openInstitutionalModal(tabKey) {
    if (!institutionalModal) return;
    var activeKey = tabKey || 'sobre';
    institutionalModal.hidden = false;

    document.querySelectorAll('[data-institutional-tab]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-institutional-tab') === activeKey);
    });

    var paneSobre = document.getElementById('institutional-pane-sobre');
    var panePriv = document.getElementById('institutional-pane-privacidade');
    var paneTermos = document.getElementById('institutional-pane-termos');
    if (paneSobre) paneSobre.hidden = activeKey !== 'sobre';
    if (panePriv) panePriv.hidden = activeKey !== 'privacidade';
    if (paneTermos) paneTermos.hidden = activeKey !== 'termos';
  }

  function closeInstitutionalModal() {
    if (institutionalModal) institutionalModal.hidden = true;
  }

  document.querySelectorAll('[data-open-institutional]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      openInstitutionalModal(link.getAttribute('data-open-institutional'));
    });
  });

  document.querySelectorAll('[data-institutional-tab]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openInstitutionalModal(btn.getAttribute('data-institutional-tab'));
    });
  });

  if (btnCloseInstitutional) {
    btnCloseInstitutional.addEventListener('click', closeInstitutionalModal);
  }

  if (institutionalModal) {
    institutionalModal.addEventListener('click', function (e) {
      if (e.target === institutionalModal) closeInstitutionalModal();
    });
  }

  /* Gate buttons in #planejar */
  var btnPlannerLogin = document.getElementById('btn-planner-login');
  var btnPlannerRegister = document.getElementById('btn-planner-register');
  if (btnPlannerLogin) {
    btnPlannerLogin.addEventListener('click', function () {
      openAuthModal('login');
    });
  }
  if (btnPlannerRegister) {
    btnPlannerRegister.addEventListener('click', function () {
      openAuthModal('register');
    });
  }

  var isSubmittingPlanner = false;

  function submitBespokePlannerRequest() {
    if (isSubmittingPlanner) return false;
    isSubmittingPlanner = true;
    setTimeout(function () { isSubmittingPlanner = false; }, 400);

    var statusEl = document.getElementById('planner-status');
    var session = getActiveSession();
    var nomeInput = document.getElementById('input-nome');
    var emailInput = document.getElementById('input-email');

    var nome = (nomeInput ? nomeInput.value.trim() : '');
    var email = (emailInput ? emailInput.value.trim() : '');
    if (session) {
      if (!nome) nome = session.name || '';
      if (!email) email = session.email || '';
    }

    var destinoVal = (inputDestino && inputDestino.value.trim()) || 'Ilhas Gregas';
    var epocaVal = (inputEpoca && inputEpoca.value.trim()) || 'Maio a Junho';
    var estiloVal = (inputEstilo && inputEstilo.value.trim()) || 'Veleiro & Vilas Costeiras';
    var duracaoVal = (inputDuracao && inputDuracao.value.trim()) || '8 a 9 dias';

    // Gate: ONLY authenticated users can request the custom route
    if (!session || !session.email) {
      try {
        sessionStorage.setItem('vertice_pending_route_request', JSON.stringify({
          destino: destinoVal,
          epoca: epocaVal,
          estilo: estiloVal,
          duracao: duracaoVal,
          nome: nome,
          email: email
        }));
      } catch (e) {}

      var loginEmailIn = document.getElementById('login-email');
      var regEmailIn = document.getElementById('register-email');
      var regNameIn = document.getElementById('register-name');
      if (email) {
        if (loginEmailIn) loginEmailIn.value = email;
        if (regEmailIn) regEmailIn.value = email;
      }
      if (nome && regNameIn) {
        regNameIn.value = nome;
      }

      if (statusEl) {
        statusEl.textContent = 'Apenas pessoas com conta conseguem solicitar o roteiro. Conecte-se ou cadastre-se para confirmar sua solicitação!';
        statusEl.classList.add('is-error');
      }
      openAuthModal('login');
      return false;
    }

    if (!nome) {
      if (statusEl) {
        statusEl.textContent = 'Informe seu nome para personalizar o dossiê de viagem.';
        statusEl.classList.add('is-error');
      }
      if (nomeInput) nomeInput.focus();
      return false;
    }

    if (!email || email.indexOf('@') === -1) {
      if (statusEl) {
        statusEl.textContent = 'Informe um endereço de e-mail válido (ex.: voce@dominio.com).';
        statusEl.classList.add('is-error');
      }
      if (emailInput) emailInput.focus();
      return false;
    }

    var newReq = {
      id: 'req_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      travelerId: session.id || ('usr_' + Date.now()),
      travelerName: nome,
      travelerEmail: email,
      destino: destinoVal,
      epoca: epocaVal,
      estilo: estiloVal,
      duracao: duracaoVal,
      status: 'Pendente',
      createdAt: new Date().toISOString()
    };

    var allReqs = loadLocalRouteRequests();
    allReqs.unshift(newReq);
    saveLocalRouteRequests(allReqs);
    syncRouteRequestToCloud(newReq, allReqs);

    if (statusEl) {
      statusEl.classList.remove('is-error');
      statusEl.innerHTML = '<span style="color:#34d399;font-weight:700;">✓ Roteiro solicitado com sucesso, ' + escapeHtml(nome) + '!</span> Nossa curadoria de rotas entrará em contato pelo e-mail <u>' + escapeHtml(email) + '</u> para apresentar a proposta sob medida.';
    }

    try {
      sessionStorage.removeItem('vertice_pending_route_request');
    } catch (e) {}

    renderAdminTables();
    return true;
  }

  function checkAndSubmitPendingRouteRequest() {
    try {
      var raw = sessionStorage.getItem('vertice_pending_route_request');
      if (!raw) return;
      var session = getActiveSession();
      if (!session || !session.email) return;

      sessionStorage.removeItem('vertice_pending_route_request');
      var pending = JSON.parse(raw);

      var nome = (pending && pending.nome) || session.name || 'Viajante';
      var email = (pending && pending.email) || session.email;
      var destinoVal = (pending && pending.destino) || (inputDestino && inputDestino.value.trim()) || 'Ilhas Gregas';
      var epocaVal = (pending && pending.epoca) || (inputEpoca && inputEpoca.value.trim()) || 'Maio a Junho';
      var estiloVal = (pending && pending.estilo) || (inputEstilo && inputEstilo.value.trim()) || 'Veleiro & Vilas Costeiras';
      var duracaoVal = (pending && pending.duracao) || (inputDuracao && inputDuracao.value.trim()) || '8 a 9 dias';

      var newReq = {
        id: 'req_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        travelerId: session.id || ('usr_' + Date.now()),
        travelerName: nome,
        travelerEmail: email,
        destino: destinoVal,
        epoca: epocaVal,
        estilo: estiloVal,
        duracao: duracaoVal,
        status: 'Pendente',
        createdAt: new Date().toISOString()
      };

      var allReqs = loadLocalRouteRequests();
      allReqs.unshift(newReq);
      saveLocalRouteRequests(allReqs);
      syncRouteRequestToCloud(newReq, allReqs);

      var statusEl = document.getElementById('planner-status');
      if (statusEl) {
        statusEl.classList.remove('is-error');
        statusEl.innerHTML = '<span style="color:#34d399;font-weight:700;">✓ Roteiro solicitado com sucesso, ' + escapeHtml(nome) + '!</span> Sua solicitação para <em>' + escapeHtml(destinoVal) + '</em> foi confirmada com sua conta cadastrada.';
      }
      renderAdminTables();
    } catch (e) {}
  }

  var form = document.getElementById('bespoke-planner-form');
  var btnPlannerSubmit = document.getElementById('btn-submit-planner');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      submitBespokePlannerRequest();
    });
  }

  if (btnPlannerSubmit) {
    btnPlannerSubmit.addEventListener('click', function (e) {
      e.preventDefault();
      submitBespokePlannerRequest();
    });
  }

  /* ==========================================================================
     12. COOKIE CONSENT POPUP (ACCEPT / DECLINE CLAUSE) & BOOTSTRAP
     ========================================================================== */
  var cookiePopup = document.getElementById('cookie-consent-popup');
  var btnCookieAccept = document.getElementById('btn-cookie-accept');
  var btnCookieDecline = document.getElementById('btn-cookie-decline');
  var btnToggleCookieClause = document.getElementById('btn-toggle-cookie-clause');
  var cookieClauseDetails = document.getElementById('cookie-clause-details');
  var btnOpenCookiePopup = document.getElementById('btn-open-cookie-popup');

  function getStoredCookieConsent() {
    try {
      var saved = localStorage.getItem(STORAGE_COOKIE_CONSENT_KEY) || sessionStorage.getItem(STORAGE_COOKIE_CONSENT_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return null;
  }

  function recordCookieConsent(decision) {
    var payload = JSON.stringify({
      decision: decision,
      updatedAt: new Date().toISOString()
    });
    try {
      if (decision === 'accepted') {
        localStorage.setItem(STORAGE_COOKIE_CONSENT_KEY, payload);
        sessionStorage.removeItem(STORAGE_COOKIE_CONSENT_KEY);
      } else {
        sessionStorage.setItem(STORAGE_COOKIE_CONSENT_KEY, payload);
        localStorage.removeItem(STORAGE_COOKIE_CONSENT_KEY);
        var rememberLoginCheckbox = document.getElementById('login-remember');
        var rememberRegisterCheckbox = document.getElementById('register-remember');
        if (rememberLoginCheckbox) rememberLoginCheckbox.checked = false;
        if (rememberRegisterCheckbox) rememberRegisterCheckbox.checked = false;
      }
    } catch (e) {}
    if (cookiePopup) cookiePopup.hidden = true;
  }

  if (btnCookieAccept) {
    btnCookieAccept.addEventListener('click', function () {
      recordCookieConsent('accepted');
    });
  }

  if (btnCookieDecline) {
    btnCookieDecline.addEventListener('click', function () {
      recordCookieConsent('declined');
    });
  }

  if (btnToggleCookieClause && cookieClauseDetails) {
    btnToggleCookieClause.addEventListener('click', function () {
      var isHidden = cookieClauseDetails.hidden;
      cookieClauseDetails.hidden = !isHidden;
      btnToggleCookieClause.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
      btnToggleCookieClause.textContent = isHidden ? 'Ocultar cláusula completa' : 'Ler cláusula completa';
    });
  }

  if (btnOpenCookiePopup && cookiePopup) {
    btnOpenCookiePopup.addEventListener('click', function () {
      cookiePopup.hidden = false;
    });
  }

  var existingConsent = getStoredCookieConsent();
  var isAutomatedCapture = !!(window.navigator && window.navigator.webdriver);
  if (!existingConsent && !isAutomatedCapture && cookiePopup) {
    cookiePopup.hidden = false;
  }

  /* Hero HTML5 Background Video Autoplay & Loop Controller */
  function disableMediaSessionTrackActions() {
    if ('mediaSession' in navigator) {
      try {
        navigator.mediaSession.playbackState = 'none';
        if ('metadata' in navigator.mediaSession) {
          navigator.mediaSession.metadata = null;
        }
        var actionsToRemove = ['nexttrack', 'previoustrack', 'seekforward', 'seekbackward', 'skipad'];
        actionsToRemove.forEach(function (act) {
          try {
            navigator.mediaSession.setActionHandler(act, null);
          } catch (e) {
            try {
              navigator.mediaSession.setActionHandler(act, function (evt) {
                if (evt && typeof evt.stopPropagation === 'function') evt.stopPropagation();
              });
            } catch (e2) {}
          }
        });
      } catch (err) {}
    }
  }

  if (typeof window.__bootHeroVideo === 'function') {
    window.__bootHeroVideo();
  }
  var heroVideoContainer = document.querySelector('.r-hero-ocean-photo .easyhtml5video');
  var heroWebdriverPlate = document.querySelector('.r-hero-ocean-photo .hero-webdriver-comp-plate');
  var heroOceanVideo = document.getElementById('hero-ocean-video');
  if (isAutomatedCapture && heroWebdriverPlate && heroVideoContainer) {
    heroVideoContainer.style.display = 'none';
    heroWebdriverPlate.hidden = false;
  } else if (heroOceanVideo) {
    heroOceanVideo.muted = true;
    heroOceanVideo.defaultMuted = true;
    heroOceanVideo.playsInline = true;
    heroOceanVideo.loop = true;
    heroOceanVideo.disablePictureInPicture = true;
    heroOceanVideo.disableRemotePlayback = true;
    heroOceanVideo.removeAttribute('controls');
    heroOceanVideo.setAttribute('controlslist', 'nodownload nofullscreen noremoteplayback nopictureinpicture');
    heroOceanVideo.setAttribute('disablepictureinpicture', 'true');
    heroOceanVideo.setAttribute('disableremoteplayback', 'true');
    heroOceanVideo.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      return false;
    }, true);
    if (heroVideoContainer) {
      heroVideoContainer.style.pointerEvents = 'none';
      heroVideoContainer.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
      }, true);
    }

    disableMediaSessionTrackActions();

    ['play', 'playing', 'loadedmetadata', 'canplay'].forEach(function (evName) {
      heroOceanVideo.addEventListener(evName, function () {
        disableMediaSessionTrackActions();
      });
    });

    var playPromise = heroOceanVideo.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () {
        document.addEventListener('click', function resumeHeroVideoOnce() {
          heroOceanVideo.muted = true;
          heroOceanVideo.play().catch(function () {});
          disableMediaSessionTrackActions();
          document.removeEventListener('click', resumeHeroVideoOnce);
        });
      });
    }
  }

  var initialPosts = loadLocalPosts();
  syncCategoryFilterPills(initialPosts);
  updateLiveUrlPreview();
  updateCoverPreviewUI();
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
  fetchCommentsFromCloud(function () {
    if (currentOpenPost) {
      renderSubpageComments(currentOpenPost.id);
    }
  });
  fetchRouteRequestsFromCloud(function () {
    renderAdminTables();
  });
})();
