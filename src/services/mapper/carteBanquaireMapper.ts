import CarteBanquaire from "services/types/carteBanquaire"

const carteBanquaireRestToCarteBanquaire = (carteRest) => {
    const carte = new CarteBanquaire()
    carte.numero = carteRest.numeroCarte
    carte.nom = carteRest.nomCarte
    carte.mois = carteRest.dateExpiration.split("/")[0]
    carte.annee = carteRest.dateExpiration.split("/")[1]
    carte.ccv = carteRest.codeSecurite
    carte.estParDefaut = carteRest.estParDefaut
    return carte
}

export default carteBanquaireRestToCarteBanquaire