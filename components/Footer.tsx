import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-center lg:text-left bg-white/30 text-black ">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className=" w-24  "
            priority
          />
          <div>
            <p className="mb-4">
              <Link href="/terms_of_service" className="text-black/80">
                الشروط و الاحكام
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/privacy_policy" className="text-black/80">
                الخصوصية
              </Link>
            </p>
            <p>
              <Link href="/contact_us" className="text-black/80">
                اتصل بنا
              </Link>
            </p>
          </div>
          <div>
            <p className="mb-4">
              <Link href="/" className="text-black/80">
                الرئيسية
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/about_us" className="text-black/80">
                عن الشركة
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/cars" className="text-black/80">
                السيارات
              </Link>
            </p>
          </div>
          <div className="">
            <Link
              href="mailto:asser4cars@gmail.com"
              className="flex items-center justify-center md:justify-start mb-4 text-black/80"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
              asser4cars@gmail.com
            </Link>
            <Link
              href="tel:+9660557109911"
              className="flex items-center justify-center md:justify-start mb-4 text-black/80"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              +966 0557109911
            </Link>
            <div className=" flex gap-3 items-center justify-center md:justify-start">
              <Link
                href="https://www.facebook.com/profile.php?id=100087448772006"
                target="_blank"
              >
                <FaFacebook className="h-8 w-8 text-blue-600" />
              </Link>

              <Link
                href="https://api.whatsapp.com/send/?phone=9660557109911&text=لدل+استفسار&type=phone_number&app_absent=0"
                target="_blank"
              >
                <FaWhatsapp className=" w-8 h-8 text-green-500" />
              </Link>
              <Link
                href="https://haraj.com.sa/users/%D9%85%D8%B9%D8%B1%D8%B6%20%D8%A8%D9%87%D8%AC%D8%A9%20%D8%B9%D8%B3%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                target="_blank"
              >
                <Image
                  src="/haraj.jpg"
                  width={100}
                  height={100}
                  className=" w-8 h-8 rounded-full"
                  alt="haraj"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-white/30">
        <span>© 2023 Copyright:</span>
        <Link className="text-black/80 font-semibold" href="/">
          {" Bahjat Asser"}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
