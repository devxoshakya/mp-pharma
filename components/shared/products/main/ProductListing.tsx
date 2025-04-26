import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductShowcase from "../ProductShowcase";

export default function ProductsList({defaultTab}:any) {
  return (
    <>
     
    <Tabs defaultValue={defaultTab} className="px-1 my-4 max-w-7xl mx-auto min-h-screen">
      <TabsList className="bg-transparent max-w-[1150px] px-1 mx-auto gap-1 rounded-lg flex flex-wrap justify-center">
        <TabsTrigger
          value="tab-1"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Baby Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Lip Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Personal Care
        </TabsTrigger>
        <TabsTrigger
          value="tab-4"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Men Grooming
        </TabsTrigger>
        <TabsTrigger
          value="tab-5"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Color Cosmetics
        </TabsTrigger>
        <TabsTrigger
          value="tab-6"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Derma Products
        </TabsTrigger>
        <TabsTrigger
          value="tab-7"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Nutra Products
        </TabsTrigger>
        <TabsTrigger
          value="tab-8"
          className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
        >
          Essential Oil
        </TabsTrigger>
      </TabsList>
      {/* TabsContent sections remain unchanged */}
      <TabsContent value="tab-1">
        <ProductShowcase quantity={50} filter="50ML TO 100ML" />
      </TabsContent>
      <TabsContent value="tab-2">
        <ProductShowcase quantity={50} filter="30 GM TO 100 GM" />
      </TabsContent>
      <TabsContent value="tab-3">
        <ProductShowcase quantity={50} filter="50 GM TO 100 GM" />
      </TabsContent>
      <TabsContent value="tab-4">
        <ProductShowcase quantity={50} filter="30 ML TO 100 ML" />
      </TabsContent>
      <TabsContent value="tab-5">
      <ProductShowcase quantity={50} filter="50ML TO 100ML" />
      </TabsContent>
      <TabsContent value="tab-6">
      <ProductShowcase quantity={50} filter="100 ML TO 200 ML" />
      </TabsContent>
      <TabsContent value="tab-7">
      <ProductShowcase quantity={50} filter="50ML TO 100ML" />
      </TabsContent>
      <TabsContent value="tab-8">
      <ProductShowcase quantity={50} filter="50ML TO 100ML" />
      </TabsContent>
    </Tabs>
    </>
  );
}
