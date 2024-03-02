
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth()
  console.log(session)
  return (
    <div className=" h-screen bg-gray-500/10 ">
    <p>{JSON.stringify(session?.user)}</p>
    </div>
  );
}
