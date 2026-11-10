import { createClient } from "@supabase/supabase-js";

// createClient throws if URL/key are empty — use placeholders so `next build` succeeds
// without `.env.local` (CI / fresh clone). Set real values at runtime.
const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
    "https://build-placeholder.supabase.invalid";
const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY?.trim() ||
    "build-placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
