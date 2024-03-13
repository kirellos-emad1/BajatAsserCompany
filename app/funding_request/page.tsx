import { FundForm } from "@/components/requestFund/FundForm";
import Nav from "@/components/Nav";
const FundingRequest = () => {
  return (
    <main>
      <Nav />
      <section
        className="flex flex-col items-center justify-center w-full h-full py-10 bg-gray-300/20 "
        dir="ltr"
      >
        <header>
          <h1 className=" font-bold font-serif text-2xl m-2 lg:text-5xl md:text-3xl  text-blue-900/90">
            ٥٠ عام خبره في عالم السيارات
          </h1>
        </header>
        <section className="p-10">
          <FundForm />
        </section>
      </section>
    </main>
  );
};

export default FundingRequest;
