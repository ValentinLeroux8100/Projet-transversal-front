import Categorie from "services/types/categorie";
import produitService from "services/produit.service";

const categorieRestToCategorie = async (categorieRest: Object) => {
    let produitsListFetched = [];

    for(const produit of categorieRest["produits"]){
        produitsListFetched.push(await fetchProduit(produit))
    }

    console.log(categorieRest)
    return new Categorie(
        categorieRest["id"],
        categorieRest["nom"],
        categorieRest["image"].url,
        produitsListFetched
    )
}

const fetchProduit = async (produitRest) => 
    await produitService.getById(produitRest.id)   

export default categorieRestToCategorie