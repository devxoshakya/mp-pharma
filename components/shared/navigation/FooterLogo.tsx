import React from "react";
import  Link  from "next/link";
import Image from "next/image";

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-md bg-neutral-100 text-white p-1 flex items-center justify-center font-bold text-xl">
            <Image src="/logo.svg" width={100} height={100} alt="logo"/>
        </div>
        <div className="ml-2">
          <h2 className="font-bold text-neutral-800 text-xl">PharmaBrand</h2>
          <p className="text-neutral-500 text-xs">Pharmaceutical Excellence</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
        <Link href="/about" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">About</Link>
        <Link href="/products" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">Products</Link>
        <Link href="/contact" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">Contact</Link>
      </div>
      <p className="text-neutral-600 mt-2 text-sm">
        Leading pharmaceutical manufacturing solutions with cutting-edge technology and unwavering commitment href quality and innovation.
      </p>
    </div>
  );
};

export default FooterLogo;
