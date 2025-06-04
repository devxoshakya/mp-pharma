import { ShoppingCart, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ImageComp from "./Logo3D";

function Hero() {
  return (
    <div className="w-full pb-20 lg:pb-40 pt-8 max-w-7xl mx-auto px-1">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">We&apos;re live!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                MP Pharmaceuticals Group of Companies.
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                M.P Pharmaceuticals, established in 2016, is a premium
                third-party manufacturer specializing in pharmaceuticals,
                nutraceuticals, herbal, and cosmetic products. We are committed
                to delivering superior quality, innovative development, and
                world-class packaging to meet diverse healthcare needs.
              </p>
            </div>
            <div className="flex flex-row gap-4">
            
              <Button size="lg" className="gap-4" variant="outline" asChild>
                <Link href="tel:+918687868783">
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" className="gap-4" asChild>
                <Link href="/products">
                  See Products <ShoppingCart className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          <ImageComp/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
