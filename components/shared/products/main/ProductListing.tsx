import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductShowcase from "../ProductShowcase";
import { ProductType } from "@/types/product";
import { memo, useMemo, Suspense } from "react";
import { ProductGridSkeleton } from "@/components/ui/skeleton";
import { useProductStore } from "@/lib/stores/product-store";

const ProductsList = memo(function ProductsList({defaultTab}:any) {
  const { isLoadingProducts } = useProductStore();
  
  const tabsConfig = useMemo(() => [
    { value: "tab-1", label: "Face Care", type: ProductType.FaceCare },
    { value: "tab-2", label: "Body Care", type: ProductType.BodyCare },
    { value: "tab-3", label: "Hair Care", type: ProductType.HairCare },
    { value: "tab-4", label: "Baby Care", type: ProductType.BabyCare },
    { value: "tab-5", label: "Men's Care", type: ProductType.MensCare },
    { value: "tab-6", label: "Essential Oils", type: ProductType.EssentialOils },
    { value: "tab-7", label: "Scrubs & Serums", type: ProductType.ScrubsAndSerums },
    { value: "tab-8", label: "Specialized", type: ProductType.Specialized },
  ], []);
  return (
    <>
     
    <Tabs defaultValue={defaultTab} className="px-1 my-4 max-w-7xl mx-auto min-h-screen">
      <TabsList className="bg-transparent max-w-[1150px] px-1 mx-auto gap-1 rounded-lg flex flex-wrap justify-center">
        {tabsConfig.map(({ value, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="data-[state=active]:bg-emerald-700 w-auto h-10 px-4 border-amber-100 border-2 text-md data-[state=active]:text-white bg-green-100 text-black data-[state=active]:shadow-none my-1"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabsConfig.map(({ value, type }) => (
        <TabsContent key={value} value={value}>
          <Suspense fallback={<ProductGridSkeleton count={12} />}>
            <ProductShowcase quantity={50} filter={type} />
          </Suspense>
        </TabsContent>
      ))}
    </Tabs>
    </>
  );
});

export default ProductsList;
