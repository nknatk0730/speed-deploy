'use server'
import { currentUser } from "@/data/auth";
import { createClient } from "@/lib/supabase/server";
import { TablesInsert } from "@/types/db";

export const createProfile = async (data: Omit<TablesInsert<'profiel'>, 'id'>) => {
  const user = currentUser();
  const supabase = createClient();

  if (!user) {
    throw new Error('users undefined');
  }

  const { data: profile, error } = await supabase
    .from("profiel")
    .insert([{ ...data, id: user.id },]);

  console.log(profile, error);
  
}