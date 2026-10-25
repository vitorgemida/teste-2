/**
 * VÉRTICE AZUL — Configuração de Banco de Dados em Nuvem (Firebase / Supabase)
 *
 * Você pode preencher suas chaves diretamente neste arquivo OU configurar pelo
 * Painel de Administração dentro do próprio site (botão "Banco em Nuvem" no painel Admin).
 *
 * Opção 1: SUPABASE (Recomendado pela simplicidade SQL)
 *   - Crie um projeto gratuito em https://supabase.com
 *   - Em Project Settings > API, copie a "Project URL" e a chave "anon public"
 *   - No SQL Editor do Supabase, execute o comando SQL exibido no Painel Admin do site.
 *
 * Opção 2: FIREBASE (Firestore + Firebase Auth)
 *   - Crie um projeto gratuito em https://console.firebase.google.com
 *   - Ative o Authentication ( provedor E-mail/Senha ) e o Cloud Firestore
 *   - Copie o apiKey e o projectId nas configurações do seu app Web.
 */
window.VERTICE_CLOUD_CONFIG = {
  // Provedor ativo: 'auto' (detecta automaticamente se as chaves abaixo ou do Painel Admin estão preenchidas), 'supabase', 'firebase' ou 'local'
  provider: 'auto',

  supabase: {
    url: '',      // Ex: 'https://seu-projeto.supabase.co'
    anonKey: ''   // Ex: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  },

  firebase: {
    apiKey: '',    // Ex: 'AIzaSyD...'
    projectId: ''  // Ex: 'vertice-azul-viagens'
  }
};
