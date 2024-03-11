import { FundForm } from "@/components/requestFund/FundForm";
const FundingRequest = () => {
  return (
    <main
      dir="rtl"
      className="flex flex-col items-center justify-center w-full h-full py-10 bg-gray-300/20 "
    >
      <header>
        <h1 className=" font-bold font-serif text-5xl text-blue-900/90">
          ٥٠ عام خبره في عالم السيارات
        </h1>
      </header>
      <section className="p-10">
      <FundForm />
      </section>
    </main>
  );
};

export default FundingRequest;
