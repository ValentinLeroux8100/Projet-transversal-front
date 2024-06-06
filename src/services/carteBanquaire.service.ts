import CarteBanquaire from "./types/carteBanquaire";
import utilisateurService from "./utilisateur.service";
import { carteBanquaireToCarteBanquaireRest } from "services/mapper/carteBanquaireMapper";

class CarteBanquaireService{
    async add(carteBanquaire: any[]){
        return fetch("http://localhost:8080/api/utilisateur/moyens-de-paiements", {
            method: 'PATCH',
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                cartes: carteBanquaire
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
        .then(json => json.paiements)
    }
}

export default new CarteBanquaireService();