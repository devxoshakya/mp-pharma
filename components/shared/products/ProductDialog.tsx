import { DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Phone, MessageSquare } from "lucide-react";
import type { Product } from "@/types/product";

export const ProductDialog = ({ image, name, quantity, ingredients }: Product) => {
  return (
    <DialogContent 
      className="sm:max-w-[600px] border border-black"
      hideTitle={true}
      title={name} // Add the title prop for accessibility
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-md">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain object-center"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          <div className="mt-2">
            <h3 className="text-sm font-medium text-gray-500">Available in:</h3>
            <div className="mt-1">
              <span className="block text-sm text-gray-900">
                {quantity}
              </span>
            </div>
          </div>
          <div className="mt-4 flex-1">
            <h3 className="text-sm font-medium text-gray-5</span>00">Ingredients:</h3>
            <ScrollArea className="h-[120px] mt-1 rounded-md border p-2">
              <p className="text-sm text-gray-600">{ingredients}</p>
            </ScrollArea>
          </div>
          <div className="mt-6 flex gap-4">
            <Button className="flex-1 gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <MessageSquare className="h-4 w-4" />
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};