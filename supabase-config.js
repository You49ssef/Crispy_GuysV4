// Supabase Configuration
const SUPABASE_CONFIG = {
  url: 'https://dixparntguicqukyrkyz.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeHBhcm50Z3VpY3F1a3lya3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MTg4OTEsImV4cCI6MjA5NzM5NDg5MX0.FePmSzeRkdGvUtPTFfvK6ZApo3THTQlVs6pMzbWPpmw',
  storageBucket: 'product-images'
};

// Lazy initialization - créer le client seulement quand on en a besoin
var supabase = null;

function getSupabaseClient() {
  console.log('getSupabaseClient appelé, supabase actuel:', supabase);
  
  if (supabase === null) {
    console.log('Création du client Supabase...');
    console.log('window.supabase existe?', typeof window.supabase !== 'undefined');
    
    if (typeof window.supabase === 'undefined') {
      console.error('window.supabase est undefined!');
      throw new Error('La librairie Supabase n\'est pas chargée');
    }
    
    console.log('window.supabase.createClient existe?', typeof window.supabase.createClient === 'function');
    
    if (typeof window.supabase.createClient !== 'function') {
      console.error('window.supabase.createClient n\'est pas une fonction!');
      console.error('window.supabase:', window.supabase);
      throw new Error('window.supabase.createClient n\'est pas disponible');
    }
    
    try {
      supabase = window.supabase.createClient(
        SUPABASE_CONFIG.url,
        SUPABASE_CONFIG.anonKey
      );
      console.log('Supabase client créé avec succès:', supabase);
      console.log('supabase.from existe?', typeof supabase.from === 'function');
    } catch (error) {
      console.error('Erreur lors de la création du client:', error);
      throw error;
    }
  }
  
  if (supabase === null) {
    console.error('supabase est toujours null après création!');
    throw new Error('Impossible de créer le client Supabase');
  }
  
  return supabase;
}
