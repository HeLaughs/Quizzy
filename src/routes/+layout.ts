import {
    PUBLIC_SUPABASE_ANON_KEY,
    PUBLIC_SUPABASE_URL,
  } from '$env/static/public';
  import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
  import type { Database } from '../DatabaseDefinitions';
  
  export const load = async ({ fetch, data, depends }) => {

console.log("PUBLIC_SUPABASE_URL", PUBLIC_SUPABASE_URL)

    depends('supabase:auth');
// or createSupabaseLoadClient
    const supabase = createSupabaseServerClient<Database>({
      supabaseUrl: "https://uycsfxoytzapbjrkvsck.supabase.co",
      supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5Y3NmeG95dHphcGJqcmt2c2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MDg0NDcsImV4cCI6MjAzOTM4NDQ0N30.dtBxOUlk8ZDbYKNCfk1IfD89HILlw-PGWMcxfTI12Zk",
      event: { fetch },
      serverSession: data.session,
    });
  
    const {
      data: { session },
    } = await supabase.auth.getSession();
  
    return { supabase, session };
  };
  