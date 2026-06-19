// Supabase Configuration
const SUPABASE_CONFIG = {
  url: 'https://dixparntguicqukyrkyz.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeHBhcm50Z3VpY3F1a3lya3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MTg4OTEsImV4cCI6MjA5NzM5NDg5MX0.FePmSzeRkdGvUtPTFfvK6ZApo3THTQlVs6pMzbWPpmw',
  storageBucket: 'product-images'
};

// Initialisation du client Supabase avec vérification détaillée
var supabase = null;

console.log('Début initialisation Supabase...');
console.log('window.supabase existe?', typeof window.supabase !== 'undefined');
console.log('window.supabase:', window.supabase);

if (typeof window.supabase === 'undefined') {
  console.error('ERREUR: La librairie Supabase n\'est pas chargée. Vérifiez que le script CDN est correct.');
  console.error('Vérifiez l\'onglet Network pour voir si le CDN charge correctement.');
} else if (typeof window.supabase.createClient !== 'function') {
  console.error('ERREUR: window.supabase.createClient n\'est pas une fonction');
  console.error('window.supabase.createClient:', window.supabase.createClient);
} else {
  try {
    console.log('Tentative de création du client Supabase...');
    console.log('URL:', SUPABASE_CONFIG.url);
    console.log('Anon key:', SUPABASE_CONFIG.anonKey.substring(0, 20) + '...');
    
    supabase = window.supabase.createClient(
      SUPABASE_CONFIG.url,
      SUPABASE_CONFIG.anonKey
    );
    
    console.log('Supabase client initialisé avec succès');
    console.log('supabase.from existe?', typeof supabase.from === 'function');
  } catch (error) {
    console.error('ERREUR lors de l\'initialisation Supabase:', error);
    console.error('Stack trace:', error.stack);
  }
}
