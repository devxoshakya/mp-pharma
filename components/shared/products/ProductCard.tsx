import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProductDialog } from "./ProductDialog";
import type { Product } from "@/types/product";
import { Beaker } from "lucide-react";
import Image from "next/image";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";

export const ProductCard = ({
  image,
  name,
  quantity,
  ingredients,
}: Product) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full md:w-56 sm:w-60 cursor-pointer group">
          <div className="rounded-lg bg-white border border-neutral-200 p-4 transition-shadow hover:shadow-xl">
            <div className="aspect-square w-full overflow-hidden rounded-md relative bg-[url('/bg-leaf.png')] bg-[length:700px_700px]">
            <BorderBeam duration={8} size={400} />
              <Image
                src={image}
                alt={name}
               fill
                
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-2">
              <h3 className="line-clamp-2 min-h-[42px] text-sm font-semibold text-gray-900 text-left">
                {name}
              </h3>
              <div className="mt-0">
                <span className="text-xs text-gray-500 font-medium flex">
                  <Beaker className="w-4 pb-2 mr-1"/>
                  {quantity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <ProductDialog
        image={image}
        name={name}
        quantity={quantity}
        ingredients={ingredients}
        
      />
    </Dialog>
  );
};
