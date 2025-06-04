export interface Product {
    // id: string;
    name: string;
    image: string ;
    quantity: string;
    ingredients: string;
}

export enum ProductCategory {
  BabyCare = "baby care",
  ColorCosmetics = "color cosmetics",
  FaceCare = "face care",
  LipCare = "lip care",
  MenCare = "men care",
  NutraProduct = "nutra product",
  EssentialOil = "essential oil",
  PersonalCare = "personal care"
}

export enum ProductType {
  FaceCare = "Face Care",
  BodyCare = "Body Care",
  HairCare = "Hair Care",
  BabyCare = "Baby Care",
  MensCare = "Men's Care",
  EssentialOils = "Essential Oils",
  ScrubsAndSerums = "Scrubs & Serums",
  Specialized = "special product range"
}