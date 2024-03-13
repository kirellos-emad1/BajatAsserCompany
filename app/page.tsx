import Nav from "@/components/Nav";
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <main>
      <Nav />
      <section
        className="flex flex-col  justify-center  w-full h-full gap-10 bg-gray-300/20 "
      >
        <p>{JSON.stringify(session?.user)}</p>
      </section>
    </main>
  );
}
