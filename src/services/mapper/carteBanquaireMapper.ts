import CarteBanquaire from "services/types/carteBanquaire"

const carteBanquaireRestToCarteBanquaire = (carteRest) => {
    const carte = new CarteBanquaire()
    carte.numero = carteRest.numeroCarte
    carte.nom = carteRest.nomCarte
    carte.mois = carteRest.dateExpiration.split("/")[0]
    carte.annee = carteRest.dateExpiration.split("/")[1]
    carte.ccv = parseInt(carteRest.codeSecurite)
    carte.estParDefaut = carteRest.estParDefaut
    return carte
}

const carteBanquaireToCarteBanquaireRest = (carte) => {
    return {
        numeroCarte: carte.numero,
        nomCarte: carte.nom,
        dateExpiration: `${carte.mois}/${carte.annee}`,
        codeSecurite: carte.ccv,
        estParDefaut: false
    }
}
export { carteBanquaireRestToCarteBanquaire, carteBanquaireToCarteBanquaireRest }