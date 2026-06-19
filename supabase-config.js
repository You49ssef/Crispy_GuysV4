// Supabase Configuration
const SUPABASE_CONFIG = {
  url: 'https://dixparntguicqukyrkyz.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeHBhcm50Z3VpY3F1a3lya3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MTg4OTEsImV4cCI6MjA5NzM5NDg5MX0.FePmSzeRkdGvUtPTFfvK6ZApo3THTQlVs6pMzbWPpmw',
  storageBucket: 'product-images'
};

// Lazy initialization - créer le client seulement quand on en a besoin
var supabase = null;

function getSupabaseClient() {
  if (supabase === null) {
    if (typeof window.supabase === 'undefined') {
      throw new Error('La librairie Supabase n\'est pas chargée');
    }
    if (typeof window.supabase.createClient !== 'function') {
      throw new Error('window.supabase.createClient n\'est pas disponible');
    }
    supabase = window.supabase.createClient(
      SUPABASE_CONFIG.url,
      SUPABASE_CONFIG.anonKey
    );
    console.log('Supabase client créé');
  }
  return supabase;
}
