import Categorie from "services/types/categorie";
import Produit from "services/types/produit";

const categorieFixtureData = {
  categorie: new Categorie(
    "1",
    "table",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
  ),
  produits: [
    new Produit(),
  ],
};

export default categorieFixtureData;
