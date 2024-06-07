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
    const output = {
        numeroCarte: carte.numero,
        nomCarte: carte.nom,
        dateExpiration: `${carte.mois}/${carte.annee}`,
        codeSecurite: carte.ccv,
        estParDefaut: false
    }
    output.dateExpiration = (carte.mois < 10)?`0${carte.mois}/`:`${carte.mois}/`
    output.dateExpiration += (carte.annee < 10)?`0${carte.annee}`:`${carte.annee}`
    return output
}
export { carteBanquaireRestToCarteBanquaire, carteBanquaireToCarteBanquaireRest }