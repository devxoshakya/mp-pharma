"use client";
import HeroGeometric from "@/components/hero/AnimatedHero";
import ProductsList from "@/components/shared/products/main/ProductListing";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { useSearchParams } from "next/navigation";
import { BlurFade } from "@/components/magicui/blur-fade";

const ProductsPage = () => {
    const searchParams = useSearchParams();
    const queryTab = searchParams.get("q");
    
    // Default to 'tab-1' if no query param or invalid value
    const activeTab = queryTab && ["2", "3","4","1"].includes(queryTab) ? `tab-${queryTab}` : "tab-1";

    // Structured data for products page
    const productsSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "MP Pharmaceuticals Products",
        "description": "Comprehensive range of high-quality pharmaceutical products, medicines, and healthcare solutions manufactured by MP Pharmaceuticals.",
        "url": "https://www.mppharmaceuticals.com/products",
        "mainEntity": {
            "@type": "ItemList",
            "name": "Pharmaceutical Products",
            "numberOfItems": "1000+",
            "itemListElement": [
                {
                    "@type": "Product",
                    "category": "Pharmaceutical",
                    "manufacturer": {
                        "@type": "Organization",
                        "name": "MP Pharmaceuticals"
                    }
                }
            ]
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.mppharmaceuticals.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Products",
                    "item": "https://www.mppharmaceuticals.com/products"
                }
            ]
        }
    };

    return (
        <>
        {/* Structured Data for SEO */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(productsSchema),
            }}
        />
        
        <BlurFade key="hero-geometric" delay={0.25} inView>
            <HeroGeometric/> 
        </BlurFade>
        <div className="p-4 text-center mx-auto">
            <BlurFade key="products-title" delay={0.3} inView>
                <h1 className="text-4xl font-light text-muted-foreground min-h-16 mt-8">
                        Your <AnimatedTextCycle 
                                words={[
                                        "business",
                                        "team",
                                        "customers",
                                        "health",
                                        "family",
                                        "friends",
                                        "community",
                                ]}
                                interval={3000}
                                className={"text-emerald-700 font-semi-bold"} 
                        /> deserves better products.
                </h1>
            </BlurFade>
            <BlurFade key="products-list" delay={0.35} inView>
                <ProductsList defaultTab={activeTab} />
            </BlurFade>
        </div>
        </>
    );
}

export default ProductsPage;