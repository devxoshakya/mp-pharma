import React from 'react';
import SpecialProductCard from './specialized-card';

const FeaturedCards = () => {
  // Sample product data
  const products = [
    {
      image: "https://pub-268d91b15a844bf9a2745dc91c4b5ad5.r2.dev/images/Goat%20Milk%20SOap%20mp-Recovered.jpg",
      category: "FACE CREAM RANGE",
      name: "DE-TAN FACE CREAM",
      ingredients:
        "Dm Water, Cetyl Alcohol, Glyceryl Mono Stearate Light Liquid Paraffin Kolic Acid Dipalmitate, Niacinamide, Honey, Ammonium Lactate, Titanium Dioxide Glycerin, Acerola Cherry Extract, Propylene Glycol, Stearic Acid, Triethanolamine, Tocopherol (natural Vitamine Oil) almond Oil Olive Oil Perfume, Dmdm Hydantoin And Methylchloroisothiazolinone And Methylisothiazolinone, Clove Oil, Camphor Oil",
      quantity: "30 GM TO 100 GM",
    },
    {
      image: "https://pub-268d91b15a844bf9a2745dc91c4b5ad5.r2.dev/assets/24K%20GOLD%20FACE%20CREAM.png",
      category: "FACE CREAM RANGE",
      name: "24K GOLD FACE CREAM",
      ingredients:
        "Purfied Water, Sunflower Oil (Helianthus Annus), Shea Butter (Butyrospermum Parkii), Rose ext (Rosa Centifolia), Olive oil (Olea Europe Koku Garcinia indical, Wheat germ oil (Triticum Vulgare), Almond oil (Prunus Amygdalus Dulcis), Aloe Vera ext (Aloe Barbadensis), Licorice ext (Glycys Sex (Cera Alba), Apple ext (Pyrus Malus), Chamomile ext (Matricaria recutita), Mulberry ext (Morus Alba Leaf), Gingko biloba ext (Ginkgo bilobal, Rosemary exc Romanus officinalis) Jojoba oil (Simmondsia Chinensis), Grapeseed oil (Vitis Vinifera). Sandalwood oil (Santalum Album), Swarna Bhasma (Gold) Base 05",
      quantity: "30 GM TO 100 GM",
    },
    {
      image: "https://mp-pharma-cdn-worker.devxoshakya.workers.dev/assets/vitamin%20C%20Cream.png",
      category: "FACE CREAM RANGE",
      name: "VITAMIN C FACE CREAM",
      ingredients:
        "Vitamin C, Vitamin A, Vitamin E, Niacinamide (vb3), Glycolic Acid, Grape Seed Extract, green Tea Extract, Salicylic Acid, Sheabutter, Allantoin, Lactic Acid, Glycerin, butylene Glycol, Palmitoyl Oligopeptide, Palmitoyl Tetrapeptide",
      quantity: "30 GM TO 100 GM",
    },
    {
      image: "https://pub-268d91b15a844bf9a2745dc91c4b5ad5.r2.dev/assets/anti-wrinkle%20cream.png",
      category: "FACE CREAM RANGE",
      name: "ANTI-WRINKLE CREAM",
      ingredients:
        "Glycolic Acid, Lactic Acid, Vitamin-A, C, E & Dpanthanol (vitamin-b5), Aloe Vera Extract, Salicylic Acid, Fragrance & DM Water",
      quantity: "30 GM TO 100 GM",
    },
    {
      image: "https://mp-pharma-cdn-worker.devxoshakya.workers.dev/assets/skin-whiting%20cream.png",
      category: "FACE CREAM RANGE",
      name: "SKIN WHITENING CREAM",
      ingredients:
        "L-glutathione 0.50%, Bearberry Extract, Liquorice Extract, Vitamin C & E, Glycolicacid 2%, Niacinamide 2% & Glycerin. Fragrance and DM Water",
      quantity: "30 GM TO 100 GM",
    },
    {
      image: "https://mp-pharma-cdn-worker.devxoshakya.workers.dev/assets/skin%20hydarting%20cream.png",
      category: "FACE CREAM RANGE",
      name: "HYDRATING FACE CREAM",
      ingredients:
        "Aqua, Pentylene Glycol, Glycerin, Fructose, Urea, Citric Acid, Sodium Hydroxide. Maltose, Sodium PCA, Sodium Chloride, Sodium Lactate, Trehalose, Allantoin, Sodium Hyaluronate Glucose, Carbomer, Betaine, Phenoxyethanol, Triethanolamine Polysorbate 20. Cellulose, Laminaria digitata (Seaweed) Extract, Menthyl Lactate, Sodium Gluconate, Ethylhexylglycerin, CI 42090, Parfum",
      quantity: "30 GM TO 100 GM",
    },
    {
      image: "https://pub-268d91b15a844bf9a2745dc91c4b5ad5.r2.dev/assets/spf50plus%20cream.png",
      category: "FACE CREAM RANGE",
      name: "SPF 50 PA+++ SUNSCREEN",
      ingredients:
        "Zinc Oxide Topical 0.20%, Octyl Methoxy Cinnamate 1%, Avobenzone Topical 0.05%, Carbomer, Hydroxy Ethyl Cellulose, Hyaluronic Acid, Aloevera Extract, Glycerin, Carrot seed Extract, Ascorbic Acid, Xanthan Gum, EDTA, Methyl Paraben Sodium, Propyl Paraben Sodium, Sodium Benzoate, Sodium Hydroxide, Perfume, Approved Colour as per schedule Q will be used, Purified water",
      quantity: "50 GM TO 100 GM",
    },
    {
      image: "https://pub-268d91b15a844bf9a2745dc91c4b5ad5.r2.dev/assets/bb%20cream.png",
      category: "FACE CREAM RANGE",
      name: "ALL IN ONE (BB) FACE CREAM",
      ingredients:
        "Water, Niacinamide, Glycerin, Cyclopentasiloxane, Ethylhexyl Methoxycinnamate, Titanium Dioxide, Zinc Oxide, Dimethicone Crosspolymer, Potassium Chloride, PEG-10 Dimethicone. Dicaprylyl Carbonate, Magnesium Sulfate, Triethoxycaprylylsilane, Disteardimonium Hectorite, Stearic Acid, Palmitic Acid, Cholesterol, Bisabolol, Perfume, DMDM Hydantoin, Dimethicone, Sucrose Distearate, Allantoin, Tocopheryl Acetate, Disodium EDTA, Butylene Glycol, BHT, Iodopropynyl Butylcarbamate, Zingiber Officinale (Ginger) Root Extract, CI 77491, CI 77492, CI 77499",
      quantity: "50 GM TO 100 GM",
    }
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="max-w-8xl mx-auto px-4">
       
        
        {/* Desktop view: 8 cards in 2 rows of 4 */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <SpecialProductCard
              key={index}
              image={product.image}
              category={product.category}
              name={product.name}
              ingredients={product.ingredients}
              quantity={product.quantity}
            />
          ))}
        </div>
        
        {/* Mobile view: 4 cards in vertical column */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {products.slice(0, 4).map((product, index) => (
            <SpecialProductCard
              key={index}
              image={product.image}
              category={product.category}
              name={product.name}
              ingredients={product.ingredients}
              quantity={product.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;