import Adresse from "./adresse";
import CarteBanquaire from "./carteBanquaire";
import Produit from "./produit";

export default class Commande{
    adresseLivraison: Adresse
    adresseFacturation : Adresse
    produits: Produit[]
    carteBanquaire: CarteBanquaire
    dateCommande : number
    dateArrive : number
}