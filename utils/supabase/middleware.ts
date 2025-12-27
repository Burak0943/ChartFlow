import type { Request } from 'next/server';
import { createClient } from './server';

/**
 * Middleware helper to refresh the user's session server-side.
 * This can be called from server routes or server components that need up-to-date sessions.
 */
export async function refreshSessionServerSide() {
  const supabase = createClient();

  try {
    const { data } = await supabase.auth.getSession();
    // If there is a session, you could call refresh if needed depending on your policy.
    // This is a placeholder showing where to implement session refresh logic.
    return data.session ?? null;
  } catch (err) {
    // Swallow errors here; return null and let callers handle redirect if needed
    return null;
  }
}
