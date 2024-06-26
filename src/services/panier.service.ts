import Adresse from "./types/adresse";
import CarteBanquaire from "./types/carteBanquaire";
import Produit from "./types/produit";
import utilisateurService from "./utilisateur.service";

class PanierService{
    async add(produitId: string, quantite: number){
        if(!utilisateurService.getToken())return
        return fetch("http://localhost:8080/api/utilisateur/panier?" + new URLSearchParams({
            idArticle: produitId,
            quantite: quantite.toString()
        }), {
            method: 'PUT',
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
            }),
        })
    }

    async delete(produitId: string){
        return fetch("http://localhost:8080/api/utilisateur/panier/article?" + new URLSearchParams({
            idArticle: produitId,
        }), {
            method: 'DELETE',
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
            }),
        })
    }

    async patch(produits: Produit[]){
        return fetch("http://localhost:8080/api/utilisateur/panier", {
            method: "PATCH",
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "produits": produits.map(produit => {return {id: produit.id, quantite: produit.quantite}})
            })
        })
    }


    async validCommand(adresse: Adresse, moyenDePaiement: any){
        adresse.informations = "blabla"

        return fetch("http://localhost:8080/api/utilisateur/panier/commander/", {
            method: "PATCH",
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "adresse": adresse,
                "moyenDePaiement": moyenDePaiement
                })
            })
        }
    

    async get(){
        return fetch("http://localhost:8080/api/utilisateur/me" , {
            method: 'GET',
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
            }),
        })
        .then(response => response.json())
        .then(json => json.panierActuel)
    }
}

export default new PanierService();