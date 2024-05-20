import Categorie from "services/types/categorie";
import Produit from "services/types/produit";

const acceuilFixtureData = {
  produits: [
    new Produit(
      "0",
      "Commode",
      "pas très commode",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      100
    ),
    new Produit(
      "2",
      "Commode",
      "pas très commode",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      100
    ),
    new Produit(
      "4",
      "Commode",
      "pas très commode",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      100
    ),
    new Produit(
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
