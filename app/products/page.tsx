"use client";
import ProductsList from "@/components/shared/products/main/ProductListing";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { useSearchParams } from "next/navigation";

const ProductsPage = () => {
    const searchParams = useSearchParams();
    const queryTab = searchParams.get("q");
    
    // Default to 'tab-1' if no query param or invalid value
    const activeTab = queryTab && ["2", "3","4","1"].includes(queryTab) ? `tab-${queryTab}` : "tab-1";

    return (
        <div className="p-4 text-center mx-auto">
                <h1 className="text-4xl font-light text-muted-foreground mt-8">
                        Your <AnimatedTextCycle 
                                words={[
                                        "business",
                                        "team",
                                        "customers",
                                        "health",
                                        "family",
                                        "friends",
                                        "loved ones",
                                        "community",
                                ]}
                                interval={3000}
                                className={"text-emerald-700 font-semi-bold"} 
                        /> deserves better products.
                </h1>
                <ProductsList defaultTab={activeTab} />
        </div>
    );
}

export default ProductsPage;