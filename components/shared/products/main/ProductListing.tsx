import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductShowcase from "../ProductShowcase";
import { ProductType } from "@/types/product";

export default function ProductsList({defaultTab}:any) {
  return (
    <>
     
    <Tabs defaultValue={defaultTab} className="px-1 my-4 max-w-7xl mx-auto min-h-screen">
      <TabsList className="bg-transparent max-w-[1150px] px-1 mx-auto gap-1 rounded-lg flex flex-wrap justify-center">
        <TabsTrigger
          value="tab-1"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Face Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Body Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Hair Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-4"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Baby Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-5"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Men's Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-6"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Essential Oils
        </TabsTrigger>
        <TabsTrigger
          value="tab-7"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Scrubs & Serums
        </TabsTrigger>
        <TabsTrigger
          value="tab-8"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Specialized
        </TabsTrigger>
      </TabsList>
      {/* TabsContent sections remain unchanged */}
      <TabsContent value="tab-1">
        <ProductShowcase quantity={50} filter={ProductType.FaceCare} />
      </TabsContent>
      <TabsContent value="tab-2">
        <ProductShowcase quantity={50} filter={ProductType.BodyCare} />
      </TabsContent>
      <TabsContent value="tab-3">
        <ProductShowcase quantity={50} filter={ProductType.HairCare} />
      </TabsContent>
      <TabsContent value="tab-4">
        <ProductShowcase quantity={50} filter={ProductType.BabyCare} />
      </TabsContent>
      <TabsContent value="tab-5">
        <ProductShowcase quantity={50} filter={ProductType.MensCare} />
      </TabsContent>
      <TabsContent value="tab-6">
        <ProductShowcase quantity={50} filter={ProductType.EssentialOils} />
      </TabsContent>
      <TabsContent value="tab-7">
        <ProductShowcase quantity={50} filter={ProductType.ScrubsAndSerums} />
      </TabsContent>
      <TabsContent value="tab-8">
        <ProductShowcase quantity={50} filter={ProductType.Specialized} />
      </TabsContent>
    </Tabs>
    </>
  );
}
