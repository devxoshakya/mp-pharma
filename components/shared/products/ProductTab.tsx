import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductShowcase from "./ProductShowcase";
import Image from "next/image";

export default function ProductsTab() {
  return (
    <>
     <div className="flex items-center justify-center flex-col">
        <div className="relative z-20 mr-4 flex items-center space-x-2 px-0 my-1 py-1 text-sm font-normal text-black group">
          <Image
            src="/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="transition-transform duration-1000 group-hover:animate-spin"
            style={{ animationDuration: "0.75s" }}
          />
          <span className="font-semibold text-black dark:text-white">
            MP Pharmaceuticals'
          </span>
        </div>
        <div className="font-medium text-3xl mb-8">Featured Products</div>
      </div>
    <Tabs defaultValue="tab-1" className="px-1 max-w-[950px] mx-auto">
      <TabsList className="bg-transparent px-1 mx-auto gap-1 rounded-lg  border-2 border-muted flex flex-wrap justify-center">
        <TabsTrigger
          value="tab-1"
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none my-1"
        >
          Baby Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none my-1"
        >
          Lip Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none my-1"
        >
          Personal Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-4"
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none my-1"
        >
          Men Grooming
        </TabsTrigger>
        <TabsTrigger
          value="tab-5"
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none my-1"
        >
          Color Cosmetics
        </TabsTrigger>
        <TabsTrigger
          value="tab-6"
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none my-1"
        >
          Derma Products
        </TabsTrigger>
        <TabsTrigger
          value="tab-7"
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none my-1"
        >
          Nutra Products
        </TabsTrigger>
        <TabsTrigger
          value="tab-8"
          className="data-[state=active]:bg-muted data-[state=active]:shadow-none my-1"
        >
          Essential Oil
        </TabsTrigger>
      </TabsList>
      {/* TabsContent sections remain unchanged */}
      <TabsContent value="tab-1">
        <ProductShowcase filter="50ML TO 100ML" />
      </TabsContent>
      <TabsContent value="tab-2">
        <ProductShowcase filter="50ML TO 100ML" />
      </TabsContent>
      <TabsContent value="tab-3">
        <ProductShowcase filter="50ML TO 100ML" />
      </TabsContent>
      <TabsContent value="tab-4">
        <ProductShowcase filter="50ML TO 100ML" />
      </TabsContent>
      <TabsContent value="tab-5">
      <ProductShowcase filter="50ML TO 100ML" />
      </TabsContent>
      <TabsContent value="tab-6">
      <ProductShowcase filter="50ML TO 100ML" />
      </TabsContent>
      <TabsContent value="tab-7">
      <ProductShowcase filter="50ML TO 100ML" />
      </TabsContent>
      <TabsContent value="tab-8">
      <ProductShowcase filter="50ML TO 100ML" />
      </TabsContent>
    </Tabs>
    </>
  );
}
