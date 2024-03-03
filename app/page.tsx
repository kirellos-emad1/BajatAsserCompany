
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    <main className=" h-screen bg-gray-500/10 ">
    <p>{JSON.stringify(session?.user)}</p>
    </main>
  );
}
