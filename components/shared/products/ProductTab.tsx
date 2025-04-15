import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductShowcase from "./ProductShowcase";

export default function ProductsTab() {
  return (
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
        <ProductShowcase filter="200g" />
      </TabsContent>
      <TabsContent value="tab-2">
        <ProductShowcase filter="200g" />
      </TabsContent>
      <TabsContent value="tab-3">
        <ProductShowcase filter="200g" />
      </TabsContent>
      <TabsContent value="tab-4">
        <ProductShowcase filter="200g" />
      </TabsContent>
      <TabsContent value="tab-5">
      <ProductShowcase filter="200g" />
      </TabsContent>
      <TabsContent value="tab-6">
      <ProductShowcase filter="200g" />
      </TabsContent>
      <TabsContent value="tab-7">
      <ProductShowcase filter="200g" />
      </TabsContent>
      <TabsContent value="tab-8">
      <ProductShowcase filter="200g" />
      </TabsContent>
    </Tabs>
  );
}
