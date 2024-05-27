import Produit from "./produit";

export default class Categorie {
  id: string;
  nom: string;
  image: string;
  produit: Produit[];

  constructor(id: string, nom: string, image: string, produits: Produit[]) {
    this.id = id;
    this.nom = nom;
    this.image = image;
    this.produit = produits;
  }
}
