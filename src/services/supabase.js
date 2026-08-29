import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pjjvarhiwnocbnkavkxd.supabase.co";
export const supabaseStoragePath = `${supabaseUrl}/storage/v1/object/public`;

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
