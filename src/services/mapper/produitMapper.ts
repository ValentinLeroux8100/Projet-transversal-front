import Produit from "services/types/produit"

function produitRestToProduit(produitRest: Object) {
    const output = new Produit();
    output.nom = produitRest["nom"];
    output.description = produitRest["description"];

    output.id = produitRest["id"]
    output.prix = produitRest["prix"]
    output.nom = produitRest["nom"]
    output.description = produitRest["description"]

    output.dimension = {
        hauteur: produitRest["dimension"].hauteur,
        largeur: produitRest["dimension"].largeur,
        profondeur: produitRest["dimension"].profondeur
    }

    output.categorie = {
        id: produitRest["categorie"].id,
        nom: produitRest["categorie"].nom
    };
    output.images = produitRest["images"].map(image => {
        return {
            url: image.url,
            description: image.description
        }
    })

    output.materiaux = produitRest["materiaux"].map(materiau => {
        return {
            id: materiau.id,
            nom: materiau.nom
        }
    })
    return output
}

export default produitRestToProduit