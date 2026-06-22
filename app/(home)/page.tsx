// "use client"

import { getCurrentUser } from "@/src/lib/auth/getCurrentUser";


// import { useRouter } from "next/navigation";

export default async function Home() {
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // const router = useRouter()
  const user = await getCurrentUser();
  console.log("User", user);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px- dark:bg-black sm:items-start">
        dashboard
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {/* <div onClick={()=>router.replace("/login") }>login </div> */}
      </main>
    </div>
  );
}
