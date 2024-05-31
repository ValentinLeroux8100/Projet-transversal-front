import produitRestToProduit from "./mapper/produitMapper";
import Produit from "./types/produit";
import utilisateurService from "./utilisateur.service";

class PanierService{
    async add(produitId: string, quantite: number){
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