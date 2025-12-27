import type { NextRequest } from 'next/server';
import { createClient } from './server';

/**
 * Middleware helper to refresh the user's session server-side.
 * Accepts a `NextRequest` when called from middleware/edge contexts.
 */
export async function refreshSessionServerSide(request: NextRequest) {
  const supabase = await createClient();

  try {
    // You may leverage `request` here in future (e.g. to read cookies/headers)
    const { data } = await supabase.auth.getSession();
    // If there is a session, you could call refresh if needed depending on your policy.
    // This is a placeholder showing where to implement session refresh logic.
    return data.session ?? null;
  } catch (err) {
    // Swallow errors here; return null and let callers handle redirect if needed
    return null;
  }
}
