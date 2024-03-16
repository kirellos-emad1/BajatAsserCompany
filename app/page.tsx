import Nav from "@/components/Nav";
import Image from "next/image";
import styles from "./Home.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimationButton } from "@/components/AnimationButton";
import { AnimationInformative } from "@/components/AnimationInformative";

export default async function Home() {
  return (
    <main>
      <Nav />
      <section className="w-full ">
        <div className=" relative">
          <div
            dir="rtl"
            className="absolute z-20 font-serif font-bold lg:text-4xl md:text-3xl text-lg  text-center transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
          >
            <h1 className="text-white text-[15px] lg:text-4xl md:text-3xl">
              ٥٠ عامًا من الخبرة في عالم السيارات
            </h1>
            <h1 className="text-white text-base lg:text-4xl md:text-3xl">
              شركاء في رحلتك
            </h1>
            <AnimationButton>
              <Link href="/cars">اكتشف سيارة الأحلام</Link>
            </AnimationButton>
          </div>
          <div className={styles.imageContainer}>
            {/* Apply blue fade overlay using CSS */}
            <div className={styles.blueOverlay}></div>
            <Image
              src="/car.jpg"
              layout="responsive"
              width={100}
              height={100}
              priority
              alt="car image"
            />
          </div>
        </div>
      </section>
      <section >
      </section>
    </main>
  );
}
