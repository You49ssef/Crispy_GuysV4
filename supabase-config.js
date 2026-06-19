// Supabase Configuration
// Remplacez ces valeurs par vos vraies clés Supabase
const SUPABASE_CONFIG = {
  url: 'https://dixparntguicqukyrkyz.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeHBhcm50Z3VpY3F1a3lya3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MTg4OTEsImV4cCI6MjA5NzM5NDg5MX0.FePmSzeRkdGvUtPTFfvK6ZApo3THTQlVs6pMzbWPpmw',
  storageBucket: 'product-images'
};

// Initialisation du client Supabase
var supabase = null;

// Attendre que la librairie soit chargée
function initSupabaseClient() {
  if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
    supabase = window.supabase.createClient(
      SUPABASE_CONFIG.url,
      SUPABASE_CONFIG.anonKey
    );
    console.log('Supabase client initialized successfully');
  } else {
    console.error('Supabase library not available');
    setTimeout(initSupabaseClient, 100);
  }
}

// Essayer d'initialiser immédiatement, sinon attendre
if (document.readyState === 'complete') {
  initSupabaseClient();
} else {
  window.addEventListener('load', initSupabaseClient);
}
