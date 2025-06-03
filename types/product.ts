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
