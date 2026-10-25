---
name: "VÉRTICE AZUL"
description: "Curadoria autoral de viagens oceânicas, insulares e costeiras desenhadas sob medida."
colors:
  bg-page: "#f6f7f8"
  bg-surface: "#ffffff"
  bg-elevated: "#eef3f8"
  ink-primary: "#0f152d"
  ink-navy: "#0a182e"
  ink-secondary: "#334760"
  ink-muted: "#5a6d85"
  accent-blue: "#2667e5"
  accent-blue-hover: "#1d54c4"
  accent-ocean: "#093554"
  accent-teal: "#0b617a"
  border-subtle: "#dbe4ee"
typography:
  display:
    fontFamily: "VerticeSans, sans-serif"
    fontSize: "4.56rem"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "VerticeSans, sans-serif"
    fontSize: "clamp(32px, 3.2vw, 46px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "VerticeSans, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "VerticeSans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "VerticeSans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  sm: "10px"
  md: "16px"
  lg: "22px"
  xl: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.bg-surface}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent-blue-hover}"
  button-navy:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.bg-page}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  card-surface:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: VÉRTICE AZUL

## Overview

**Creative North Star: "Atlas Costeiro Contemporâneo"**

A identidade visual da **VÉRTICE AZUL** combina a precisão cartográfica da navegação marítima com a serenidade arquitetônica de casas de viagem contemporâneas como Airbnb Luxe, Black Tomato e Aman. O sistema rejeita o visual saturado de portais de pacotes turísticos em favor de um campo luminoso branco-gelo (`#f6f7f8`), fotografia aérea costeira em grande escala e tipografia neo-grotesca de alto contraste.

Cada superfície equilibra imersão fotográfica e clareza funcional: o primeiro viewport opera como uma janela panorâmica sobre enseadas de calcário e águas azul-cobalto, enquanto as seções subsequentes revelam a anatomia técnica das travessias — coordenadas geográficas, milhas náuticas, temperaturas da água e janelas sazonais — com rigor editorial e respiro generoso.

**Key Characteristics:**
- **Campo Luminoso Costeiro**: Fundo principal em branco-gelo frio (`#f6f7f8`) combinado a cartões de superfície branca pura (`#ffffff`) e blocos de imersão em azul-abissal (`#0a182e`).
- **Fotografia Aérea como Arquitetura**: Placas fotográficas costeiras emolduradas com cantos arredondados suaves (`16px` a `22px`) que ancoram a composição sem competir com a leitura.
- **Tipografia Neo-Grotesca Unificada**: Família `VerticeSans` aplicada com pesos contrastados (`400`, `600`, `700`) e `tabular-nums` obrigatório para coordenadas, distâncias em milhas náuticas e janelas de calendário.
- **Coreografia com Propósito**: Transições exponenciais suaves (`cubic-bezier(0.16, 1, 0.3, 1)`) que acompanham a troca de roteiros e a entrada do palco principal, respeitando integralmente `prefers-reduced-motion: reduce`.

## Colors

A paleta cromática extrai seus tons diretamente da transição batimétrica entre a espuma costeira, as enseadas azul-turquesa e o mar aberto profundo.

### Primary
- **Azul Atlântico Vivo** (`#2667e5`): Cor de ação primária reservada para botões de conversão (`Planejar Viagem`, `Solicitar Proposta de Roteiro`), indicadores de etapa ativa e estados selecionados.
- **Azul Atlântico Profundo** (`#1d54c4`): Estado de hover e foco ativo para elementos de ação primária.

### Secondary
- **Azul Oceânico Profundo** (`#093554`): Tom estrutural marítimo usado em telemetria geográfica, barras de rolagem e destaques informativos.
- **Turquesa de Enseada** (`#0b617a`): Acento secundário derivado das águas rasas sobre calcário na fotografia principal.

### Neutral
- **Branco-Gelo Costeiro** (`#f6f7f8`): Plano de fundo principal da página (`--bg-page`), mantendo temperatura fria e luminosa.
- **Superfície Alabastro** (`#ffffff`): Fundo de cartões de destino, bancada de roteiros e tabela sazonal (`--bg-surface`).
- **Branco Marítimo Elevado** (`#eef3f8`): Fundo de seções alternadas e botões secundários em repouso (`--bg-elevated`).
- **Tinta Marinho Noite** (`#0f152d`): Cor principal de texto e títulos sobre fundos claros (`--ink-primary`).
- **Azul Abissal de Popa** (`#0a182e`): Superfície escura de alto contraste para o botão de busca do hero, abas selecionadas e seção do planejador sob medida (`--ink-navy`).
- **Ardósia Costeira** (`#334760`): Corpo de texto secundário e descrições de etapas (`--ink-secondary`).
- **Cinza Náutico Suave** (`#5a6d85`): Metadados, coordenadas secundárias e legendas (`--ink-muted`).
- **Borda Horizonte** (`#dbe4ee`): Linhas divisórias sutis de `1px` em tabelas, cartões e campos (`--border-subtle`).

### Named Rules
**The Bathymetric Contrast Rule.** Superfícies claras nunca usam cinzas quentes ou amarelados; todo neutro carrega subtom azul-frio (`#f6f7f8`, `#eef3f8`, `#dbe4ee`), preservando a harmonia com as fotografias oceânicas.

**The Single Beacon Rule.** O Azul Atlântico Vivo (`#2667e5`) atua como farol de conversão e orientação: nunca o utilize como fundo de grandes seções estruturais; reserve grandes áreas escuras exclusivamente para o Azul Abissal (`#0a182e`).

## Typography

**Display Font:** `VerticeSans` (com fallback `sans-serif`)
**Body Font:** `VerticeSans` (com fallback `sans-serif`)

**Character:** Uma única família neo-grotesca contemporânea que transita entre títulos monumentais de `73px` com tracking fechado (`-0.025em`) e tabelas técnicas de navegação com alinhamento numérico tabular.

### Hierarchy
- **Display** (`700`, `calc(73 * (100vw / 1376))` / `4.56rem` no desktop, `34px` no mobile, `line-height: 1.06`): Título focal de duas linhas sobre a fotografia oceânica do hero.
- **Headline** (`700`, `clamp(32px, 3.2vw, 46px)`, `line-height: 1.12`, `letter-spacing: -0.025em`): Títulos de seção (`Anatomia de uma Travessia Sob Medida`, `Calendário Oceânico e Janelas de Mar Calmo`).
- **Title** (`700`, `26px` a `29px`, `line-height: 1.05`–`1.15`, `letter-spacing: -0.02em`): Títulos dos cartões de destino (`Ilhas Gregas`, `Fiordes da Noruega`, `Costa Amalfitana`) e cabeçalho do roteiro ativo.
- **Body** (`400`, `15.5px` a `18px`, `line-height: 1.55`–`1.6`, largura máxima de `65ch`–`68ch`): Descrições de etapas, introduções de seção e resumos de curadoria.
- **Label & Telemetry** (`600`, `13.5px` a `14px`, `font-variant-numeric: tabular-nums`): Coordenadas geográficas (`36°44'N · 24°25'E`), distâncias em milhas náuticas (`18 mn`, `145 milhas náuticas`) e rótulos de formulário.

### Named Rules
**The Tabular Nautical Rule.** Qualquer elemento que exiba latitudes, longitudes, milhas náuticas, temperaturas da água ou durações em dias deve declarar `font-variant-numeric: tabular-nums`.

**The No-Kicker Rule.** Títulos de seção e de cartões sustentam sua hierarquia por escala e peso, sem pequenos rótulos em caixa-alta (*eyebrows/kickers*) empilhados acima do título.

## Layout

O sistema espacial combina um primeiro viewport proporcionalmente ancorado (`aspect-ratio: 1376 / 768` em telas amplas) com um fluxo editorial estruturado em contêineres de `1200px` (`padding: 96px 24px`) para as seções analíticas abaixo da dobra.

- **First Viewport Stage (`1376:768`)**: Barra de navegação superior limpa, quadro fotográfico oceânico ocupando `94.77%` da largura com margem respirável, barra de busca flutuante centralizada (`74.71%` de largura) e três cartões fotográficos (`26.31%` de largura cada) que emergem na base do hero e se conectam aos painéis de metadados logo abaixo.
- **Bancada Assimétrica de Roteiros (`5fr 7fr`)**: Na seção `#roteiros`, a coluna esquerda (`5fr`) concentra o seletor de corredores oceânicos e especificações técnicas em grade `2x2`, enquanto a coluna direita (`7fr`) lista o diário cronológico de navegação etapa por etapa.
- **Planejador Sob Medida (`7fr 5fr`)**: Na seção `#planejar`, o formulário interativo ocupa `7fr` com grade interna de duas colunas, acompanhado por um painel de resumo em tempo real (`5fr`).
- **Refluxo Responsivo (`<= 860px`)**: O palco inicial desfaz o posicionamento absoluto para empilhar navegação, fotografia principal (`240px` de altura), controles de busca e cartões de destino em coluna única com espaçamento de `16px` a `20px`, eliminando qualquer rolagem horizontal aos `390px`.

## Elevation & Depth

A profundidade é construída pela sobreposição arquitetônica entre o quadro oceânico e os cartões brancos que cruzam sua borda inferior, apoiada por sombras ambientes neutras de baixa opacidade.

### Shadow Vocabulary
- **Ambient Soft** (`box-shadow: 0 18px 42px rgba(10, 24, 46, 0.08)`): Elevação padrão para os painéis de destino, a bancada de roteiros e o contêiner da tabela sazonal.
- **Ambient Hover** (`box-shadow: 0 24px 52px rgba(10, 24, 46, 0.14)`): Elevação expandida quando um cartão de destino está destacado ou sob interação.
- **Search Bar Float** (`box-shadow: 0 16px 38px rgba(0, 0, 0, 0.16)`): Sombra de ancoragem da barra de busca sobre a fotografia do hero, combinada a uma borda translúcida de `6px` (`rgba(255, 255, 255, 0.35)`).

### Named Rules
**The Neutral Shadow Rule.** Sombras de texto e de elevação utilizam exclusivamente preto neutro ou marinho profundo em baixa opacidade — nunca brilhos coloridos (*neon glows*) sobre superfícies escuras.

## Shapes

A geometria combina retângulos arquitetônicos de cantos generosamente arredondados para contêineres de conteúdo com pílulas completas (`999px`) para chamadas de ação primárias e selos sazonais.

- **Hero Ocean Frame**: Cantos arredondados proporcionais (`calc(16 * (100vw / 1376))` no desktop, `18px` no mobile).
- **Destination Showcase Cards**: Moldura superior branca no hero (`border-radius: 22px 22px 0 0`) que se funde perfeitamente ao painel inferior de metadados (`border-radius: 0 0 22px 22px`).
- **Section Containers & Workbenches**: Cantos arredondados de `22px` a `24px` com borda estrutural de `1px solid #dbe4ee`.
- **Interactive Controls & Inputs**: Botões internos de busca com `10px` de raio, campos de formulário com `12px` e abas de roteiro com `14px`.

## Components

### Buttons
- **Shape:** Pílula completa (`999px`) para CTAs primários e seletores de cartão; retângulo técnico suave (`10px`) para o botão de submissão integrado à barra de busca.
- **Primary (`Planejar Viagem` / `Solicitar Proposta`):** Fundo `#2667e5`, texto `#ffffff`, peso `600`, preenchimento `16px 32px`.
- **Hover / Focus:** Transição em `180ms cubic-bezier(0.16, 1, 0.3, 1)` para `#1d54c4` com deslocamento vertical sutil (`translateY(-1px)`) e anel `:focus-visible` de `2px solid #2667e5` (`outline-offset: 3px`).
- **Search Submit (`Buscar Roteiros`):** Fundo `#0a182e`, texto `#f6f6f7`, hover `#132a4a`.

### Cards / Containers
- **Corner Style:** `22px` nos cartões de destino e `24px` nos contêineres de bancada (`#roteiros` e `#planejar`).
- **Background:** `#ffffff` para superfícies analíticas claras e `#0a182e` (com subpainel `#112440`) para o planejador sob medida.
- **Shadow Strategy:** `var(--shadow-soft)` em repouso, elevando para `var(--shadow-hover)` com `translateY(-4px)` quando a rota correspondente está selecionada.
- **Border:** `1px solid #dbe4ee` em superfícies claras; `1px solid #264269` no painel de briefing escuro.
- **Internal Padding:** `20px 24px 26px` nos cartões de destino; `44px` a `52px` nos contêineres de bancada no desktop (`24px 20px` no mobile).

### Inputs / Fields
- **Style:** No planejador escuro, fundo `#132744`, borda `1px solid #2b476e`, texto `#ffffff`, raio de `12px` e preenchimento de `14px 16px`.
- **Focus:** Borda muda para `#60a5fa` e fundo para `#173054` em `160ms`.
- **Error / Validation:** Mensagens de validação inline em `#fca5a5` com foco automático no campo pendente.

### Navigation
- **Style:** Wordmark `VÉRTICE AZUL` em `VerticeSans` `700` (`#0f152d`, `letter-spacing: -0.02em`), três links âncora (`Destinos`, `Roteiros Sob Medida`, `Experiências`) em peso `400` com hover em `#2667e5`, e botão pílula `Planejar Viagem` à direita.

### Interactive Route Workbench & Search Bar (Signature Components)
- **Floating Search Bar Shell:** Cápsula branca (`#f8f8f8`) com halo translúcido (`6px solid rgba(255, 255, 255, 0.35)`), dividida em três seletores interativos (`Destino Costeiro`, `Época do Ano`, `Estilo de Travessia`) separados por linhas verticais de `1px solid #e2e5ea` e acompanhada pelo botão `Buscar Roteiros`.
- **Synchronized Itinerary Workbench:** Selecionar qualquer cartão de destino, aba de corredor oceânico ou linha da tabela sazonal atualiza instantaneamente o diário cronológico de etapas (com animação escalonada `stageSlideIn`) e sincroniza os parâmetros no resumo do briefing ao final da página.

## Do's and Don'ts

### Do:
- **Do** manter o fundo principal da página em branco-gelo frio (`#f6f7f8`) e reservar o azul-abissal (`#0a182e`) para contrastes intencionais de ancoragem (botão de busca, aba ativa e seção do planejador).
- **Do** aplicar `font-variant-numeric: tabular-nums` em todas as coordenadas náuticas, durações, temperaturas e distâncias.
- **Do** preservar a continuidade visual entre as molduras fotográficas superiores no primeiro viewport e seus respectivos painéis de telemetria logo abaixo.
- **Do** desativar durações de animação e transição sob `@media (prefers-reduced-motion: reduce)`.

### Don't:
- **Don't** adicionar *kickers* ou *eyebrows* em caixa-alta acima dos títulos de seção ou de cartões.
- **Don't** usar selos promocionais de desconto, contadores de escassez artificial, carrosséis automáticos ou widgets de chat flutuantes.
- **Don't** aplicar sombras coloridas (*colored text-shadow glow*) ou texto com gradiente CSS.
- **Don't** substituir fotografias costeiras reais por gradientes decorativos ou ilustrações vetoriais genéricas.
