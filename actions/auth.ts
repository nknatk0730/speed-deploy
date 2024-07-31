'use server';

import { currentUser } from "@/data/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const signIn = async () => {
  const supabase = createClient();

  const {data, error} = await supabase.auth.signInAnonymously();

  console.log(data, error);
  
}

export const deleteAccount = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error('user undefined');
  }

  const id = user.id;

  const supabase = createAdminClient();

  const {error} = await supabase.auth.admin.deleteUser(id);

  console.log(error);

  await supabase.auth.signOut();

  redirect('/');
}
export const signOut = async () => {

  const supabase = createClient();

  const {error} = await supabase.auth.signOut();

  console.log(error);

  redirect('/');
}