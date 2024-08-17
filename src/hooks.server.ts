import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
} from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  });

  /**
   * a little helper that is written for convenience so that instead
   * of calling `const { data: { session } } = await supabase.auth.getSession()`
   * you just call this `await getSession()`
   */
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession();
    return session;
  };

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range';
    },
  });
};

console.log('https://uycsfxoytzapbjrkvsck.supabase.co', PUBLIC_SUPABASE_URL);
console.log('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5Y3NmeG95dHphcGJqcmt2c2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MDg0NDcsImV4cCI6MjAzOTM4NDQ0N30.dtBxOUlk8ZDbYKNCfk1IfD89HILlw-PGWMcxfTI12Zk', PUBLIC_SUPABASE_ANON_KEY);


