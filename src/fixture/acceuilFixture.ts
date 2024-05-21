import Categorie from "services/types/categorie";
import ProduitType from "services/types/produit";

const acceuilFixtureData = {
  produits: [
    new ProduitType(
      "0",
      "Commode",
      "pas très commode",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      100
    ),
    new ProduitType(
      "2",
      "Commode",
      "pas très commode",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      100
    ),
    new ProduitType(
      "4",
      "Commode",
      "pas très commode",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      100
    ),
    new ProduitType(
      "5",
      "Commode",
      "pas très commode",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      100
    ),
  ],
  categories: [
    new Categorie(
      "0",
      "Chambre",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    ),
    new Categorie(
      "2",
      "Cuisine",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    ),
    new Categorie(
      "3",
      "Salon",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    ),
  ],
};

export default acceuilFixtureData;
