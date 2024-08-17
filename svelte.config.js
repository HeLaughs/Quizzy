import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { SupabaseClient } from '@supabase/supabase-js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
/*
 supabase: {
    url: 'https://uycsfxoytzapbjrkvsck.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5Y3NmeG95dHphcGJqcmt2c2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MDg0NDcsImV4cCI6MjAzOTM4NDQ0N30.dtBxOUlk8ZDbYKNCfk1IfD89HILlw-PGWMcxfTI12Zk',
  },
}); */