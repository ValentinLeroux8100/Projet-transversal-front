export default class ProduitRest{
    id: string
    prix: number
    nom: string
    description: string
    dimension: {
        hauteur: number
        largeur: number
        profondeur: number
    }
    categorie: {
        id: string
        nom: string
    }
    images: {
        url: string
        description: string
      }[]
    materiaux: {
        id: string
        nom: string
      }[]
      
    toString() {
        return this.id
    }
}