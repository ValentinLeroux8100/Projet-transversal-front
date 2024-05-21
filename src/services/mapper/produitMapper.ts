import ProduitType from "services/types/produit"

function produitRestToProduit(produitRest: Object){
    return new ProduitType(
        produitRest["id"],
        produitRest["nom"],
        produitRest["description"],
        produitRest["images"][0].url,
        produitRest["prix"]
    )
}

export default produitRestToProduit