"use client"

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Error",
};

export default function Error() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-semibold ">
          Error
        </h2>
        <Image
          className="m-0 rounded-xl"
          src="/bad.png"
          width={300}
          height={300}
          sizes="300px"
          alt="Page Not Found"
          priority={true}
          title="Page Not Found"
        />
        <Link href="/" className="text-center hover:underline">
          <h3 className="text-2xl p-2 bg-red-500 text-white rounded-xl">Retour à l&apos;accueil</h3>
        </Link>
      </div>
    </div>
  );
}
