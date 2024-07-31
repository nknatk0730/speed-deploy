import 'server-only';

import { createClient } from "@/lib/supabase/server";
import { currentUser } from "./auth"

export const currentProfile = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  const supabase = createClient();

  const {data, error} = await supabase.from('profiel').select('*').eq('id', user.id).single();

  return data;
}