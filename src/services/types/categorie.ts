export default class Categorie {
  id: string;
  nom: string;
  image: string;

  constructor(id: string, nom: string, image: string) {
    this.id = id;
    this.nom = nom;
    this.image = image;
  }
}
