import { createSupabaseServerClient } from "../supabase/server";

export async function getCurrentUser() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
console.log(user)
  if (!user) return null;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

    console.log(user.id, user.email, profile?.first_name)
  if (error) {
    console.error(error);
    return null;
  }
  return {
    id: user.id,
    email: user.email,
    first_name: profile.first_name,
    last_name: profile.last_name,
    role: profile.role,
  };
}
