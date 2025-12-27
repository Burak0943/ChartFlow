import { createClient as createBrowserSupabaseClient } from '@supabase/supabase-js';

/**
 * Client-side Supabase factory.
 * DO NOT import `next/headers` here. This runs in the browser.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_* env variables for client');
  }

  return createBrowserSupabaseClient(url, key, {
    auth: {
      persistSession: true,
      // client-side config
    }
  });
}
