import React from "react";
import  Link  from "next/link";
import Image from "next/image";

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="h-20 w-56 rounded-md border border-emerald-600 text-white p-1 flex items-center justify-center font-bold text-xl">
            <Image src="/logo-footer.png" className="w-50 left-1" width={100} height={100} alt="logo"/>

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
