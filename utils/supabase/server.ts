import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

/**
 * Server-side Supabase client factory.
 * IMPORTANT: This file imports `next/headers` and MUST NOT be imported into a `"use client"` file.
 * Exports `createClient` (server-only) as required.
 */
export function createClient() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Missing SUPABASE env variables on server (NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY)');
  }

  // createServerClient expects server keys and cookie helpers for SSR auth
  return createServerClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    cookies
  });
}
