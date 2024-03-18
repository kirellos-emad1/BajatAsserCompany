import Nav from "@/components/Nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeaderSection from "@/components/home/HeaderSection";
import { IoPerson, IoCarSport } from "react-icons/io5";
import { BsBuildingFill } from "react-icons/bs";
import Link from "next/link";
import Cars from "@/components/home/Cars";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getAllCars } from "@/data-access/cars";


export default async function Home() {
  const cars: any = await getAllCars();

  return (
    <main>
      <Nav />
      <HeaderSection />
      <section dir="rtl" className="w-full py-5 lg:px-44  px-10 bg-regal-blue ">
        <div className=" grid lg:grid-cols-3 my-10  md:grid-cols-2 gap-y-3 justify-items-center place-content-center">
          <Link href="/funding_request">
            <Card className=" flex flex-col items-center justify-center bg-sky-400  text-white border-sky-400 shadow-2xl w-[350px] p-0 h-[300px]">
              <CardHeader className="flex items-center p-2">
                <IoPerson className=" size-10" />
              </CardHeader>
              <CardContent className="text-center font-sans space-y-4 ">
                <CardTitle className=" text-[28px] ">تمويل الافراد</CardTitle>
                <p className=" text-[22px]">
                  امتلك سيارة احلامك من خلالنا في اقل من 48 ساعة واستمتع
                  بقيادتها
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/funding_request">
            <Card className=" flex flex-col items-center justify-center bg-sky-400  text-white border-sky-400 shadow-2xl w-[350px] p-0 h-[300px]">
              <CardHeader className="flex items-center p-2">
                <BsBuildingFill className="  size-10" />
              </CardHeader>
              <CardContent className="text-center font-sans space-y-4 ">
                <CardTitle className=" text-[28px] ">
                  تمويل الشركات و المؤسسات
                </CardTitle>
                <p className=" text-[18px]">
                  السيارات بمعظم انوعها سيارات سيدان و دفع رباعي و تجارية
                  والحفلات
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/cars">
            <Card className=" flex flex-col items-center justify-center bg-sky-400  text-white border-sky-400 shadow-2xl w-[350px] p-0 h-[300px]">
              <CardHeader className="flex items-center p-2">
                <IoCarSport className=" size-10" />
              </CardHeader>
              <CardContent className="text-center font-sans space-y-4 ">
                <CardTitle className=" text-[28px] ">اطلب سيارتك</CardTitle>
                <p className=" text-[18px]">
                  امتلك سيارتك من خلالنا بافضل الاسعار و اسهل الطرق
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
        <article className="w-full">
          <h1 className="text-[28px] text-white font-sans font-semibold  ">
            عن شركتنا
          </h1>
          <p className=" text-white font-sans  text-[20px]">
            يعتبر موقعنا من المواقع المختصة في مجال السيارات ،حيث تضع شركائها
            محور أولوياتها وتقدم لهم أحدث عروض السيارات ، وتركز بدقة على تقديم
            افضل الخدمات المتطورة والحلول التمويلية الإسلامية
          </p>
          <Button className="text-base    font-bold  font-sans rounded-3xl p-7 my-5">
            <Link href="/about_us">اكشف اكثر عنا</Link>
          </Button>
        </article>
      </section>
      <section dir="rtl" className=" py-10 lg:px-44  px-10">
        <div className="">
          <article className="w-full flex items-center justify-between">
            <h1 className="text-[28px] py-5  text-black font-sans font-semibold  ">
              السيارات
            </h1>

            <Button variant="link">
              <Link
                href="/cars"
                className=" text-lg text-blue-800 hover:text-black"
              >
                المزيد من السيارات
              </Link>
            </Button>
          </article>
          <hr />
          <Cars cars={cars} />
        </div>
      </section>
      <section dir="rtl" className=" py-10 lg:px-44  px-10">
        <div className="">
          <article className="w-full flex items-center justify-between">
            <h1 className="text-[28px] py-5  text-black font-sans font-semibold  ">
              الشركاء
            </h1>

            <Button variant="link">
              <Link
                href="/about_us"
                className=" text-lg text-blue-800 hover:text-black"
              >
                المزيد
              </Link>
            </Button>
          </article>
          <hr />
          <div className="my-2 grid grid-cols-4 gap-3 place-content-center justify-items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/SABB_Bank_Logo.png"
                alt="SABB_Bank_Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/saudi-hollandi-bank.png"
                alt="saudi-hollandi-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/The_Saudi_Investment_Bank_Logo.png"
                alt="The_Saudi_Investment_Bank_Logo"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/fransi-saudi-bank.webp"
                alt="fransi-saudi-bank"
                width={250}
                height={250}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/emirates_NBD-bank.jpg"
                alt="emirates_NBD-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/alriad-bank.png"
                alt="alriad-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/aljazira-bank.png"
                alt="aljazira-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/alinma-bank.png"
                alt="alinma-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/albilad-bank.png"
                alt="albilad-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/alawal-bank.png"
                alt="alawal-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/al-rajhi-bank.jpg"
                alt="al-rajhi-bank"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/al-ahly-bank.webp"
                alt="al-ahly-bank"
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
