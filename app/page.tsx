import Card from "@/app/components/card";
// import { ScanFace } from "lucide-react";
import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog de Carina",
  },
};
export default function Blog() {
  const longPath = "/placeholder/default/photo-coming-soon.jpg";
  const pathStrSplit = longPath.split("/");
  const fileName = pathStrSplit.pop();
  const directoryName = pathStrSplit.join("/");

  console.log(fileName, directoryName);
  return (
    <>
      <div className=" w-full max-w-7xl flex flex-col mx-auto  bg-gradient-to-br from-[#aa4588] to-[#7116bb] text-white">
        {/* Navigation */}
        <nav className="w-full flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/trophy.png"
              alt="Quiz Up Logo"
              width={70}
              height={70}
              className="hover:opacity-90 transition-opacity"
            />
            <h1 className="hidden sm:flex text-white text-4xl font-bold font-jersey10">
              CE2-2025
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            {/* <Link
              href="#"
              className="py-2 px-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] hover:bg-[#FFD700] hover:text-primary transition-all duration-300"
            >
              Connexion
            </Link> */}
            <Link
              href="/renforcement/inscription"
              className="py-2 px-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] hover:bg-[#FFD700] hover:text-primary transition-all duration-300"
            >
              Incription au cours de renforcement
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-around  space-y-8 md:space-y-0 px-4">
          {/* Text Content */}
          <div className="flex flex-col items-center px-2 justify-center sm:items-start max-w-lg space-y-4">
            <div className="flex flex-col justify-center text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                {" "}
              </h1>
              <div className="flex items-center justify-center sm:justify-start space-x-1">
                <h2 className="text-[#b5aebeb6] font-jersey10 text-8xl ">
                  Kis@rr
                </h2>
                <span className="text-[#00ff22d2] font-jersey10 text-8xl animate-bounce duration-1000">
                  Web
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed text-center sm:text-left">
              Bignona, Ziguinchor.
            </p>
            <Link
              href="/articles"
              className="px-8 py-3 bg-[#FFD700] text-primary font-semibold rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              Explorez quelques cours
            </Link>
          </div>

          {/* Image */}
          <div className="w-1/2 md:w-1/2 lg:w-1/2 flex justify-center">
            <Image
              src="/good.png"
              alt="good image"
              className="object-cover"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="bg-white mt-4 w-full px-4 py-2 sm:p-6 flex flex-col md:flex-row items-center sm:items-center justify-between gap-6">
          {/* Left - Modes */}
          <div className="grid grid-cols-2 gap-4 flex-1 h-auto px-12 py-6 relative mt-8">
            <div className="transform rotate-[10deg] scale-105 col-span-2 sm:col-span-1 ">
              <Card>
                <div className="flex flex-col items-center justify-around p-5 rounded-lg text-white shadow-lg bg-gradient-to-br from-[#d6db3d] to-[#f9ac38]">
                  <h2 className="text-xl font-bold">Réussite</h2>
                  <h3 className="font-bold text-8xl font-jersey10">3X</h3>
                  <p className="text-sm text-center sm:text-left text-gray-900 leading-relaxed">
                    Nous travaillons à améliorer nos compétences et nos
                    aptitudes. Si vous avez des idées ou des suggestions,
                    n&apos;hésitez pas à nous rejoindre.
                  </p>
                </div>
              </Card>
            </div>

            <div className="transform rotate-[-4deg] scale-100 col-span-2 sm:col-span-1">
              <Card>
                <div className="flex flex-col items-center justify-around p-5 rounded-lg text-white shadow-lg bg-gradient-to-br from-[#b6e4f1] to-[#6043af]">
                  <h2 className="text-xl font-bold">Travail</h2>
                  <h3 className="font-bold text-8xl font-jersey10">2X</h3>
                  <p className="text-sm text-center">
                    Assiduité et travail acharné sont les clés du succès.
                  </p>
                </div>
              </Card>
            </div>

            <div className="absolute top-36 sm:relative sm:top-0 transform rotate-[-10deg]  sm:col-span-2">
              <Card>
                <div className="flex flex-col items-center justify-around p-5 rounded-lg text-white shadow-lg bg-gradient-to-br from-[#43e97b] to-[#38f9d7]">
                  <h2 className="text-xl font-bold">Discipline</h2>
                  <h3 className="font-bold text-8xl font-jersey10">4X</h3>
                  <p className="text-sm text-center">
                    La discipline est l&apos;essentiel de la réussite.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Right - Message */}
          <div className="flex-1 flex flex-col px-4 py-2 max-w-[90%] lg:max-w-lg space-y-6 text-center lg:text-left mt-10">
            <div className="flex flex-col space-y-2">
              <h2 className="text-slate-800 font-bold text-3xl lg:text-4xl">
                Sciences
              </h2>

              <p className="text-slate-600 text-lg leading-7">
                Testez vos connaissances en mathématiques et améliorez vos
                aptitudes.
              </p>
            </div>
            <div>
              <Link
                href="/qcm/maths"
                className="bg-gradient-to-br from-primary to-[#7116bb] text-white py-3 px-8 rounded-lg shadow-md hover:opacity-90 transition"
              >
                Testez vos connaissances
              </Link>
            </div>
          </div>
        </div>

        <footer className="bg-[#1c1c1c] text-white py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Left: Quick Links */}
              <div className="items-center">
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/sign-in" className="hover:text-[#ff5858]">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link href="/sign-up" className="hover:text-[#ff5858]">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-[#ff5858]">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Middle: Social Media */}
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4"></div>
              </div>

              {/* Right: Contact */}
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <Link
                  href="mailto:kisarrweb@gmail.com"
                  className="text-sm hover:text-[#ff5858]"
                >
                  <div className="flex items-center justify-center sm:justify-start space-x-1">
                    <span className="text-[#ff5858]">Email : </span>

                    <span>kisarrweb@gmail.com</span>
                  </div>
                </Link>
                <br />

                <Link
                  href="tel:+221775544191"
                  className="text-sm hover:text-[#ff5858]"
                >
                  <div className="flex items-center justify-center sm:justify-start space-x-1">
                    <span className="text-[#ff5858]">Whatsapp </span>
                    <span>+221 77 554 41 91</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center py-4 border-t border-[#333] mt-8">
            <p className="text-sm">
              &copy; 2025 Kis@rrWeb. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
