// "use client"
import { supabase } from "@/public/src/lib/supabase/client";
// import { useRouter } from "next/navigation";


export default async function Home() {
const {data: {session}} = await supabase.auth.getSession()
  // const router = useRouter()
  console.log(session)
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px- dark:bg-black sm:items-start">
        dashboard

        {/* <div onClick={()=>router.replace("/login") }>login </div> */}
      </main>
    </div>
  );
}
