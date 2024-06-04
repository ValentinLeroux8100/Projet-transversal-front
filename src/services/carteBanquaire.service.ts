import CarteBanquaire from "./types/carteBanquaire";
import utilisateurService from "./utilisateur.service";

class CarteBanquaireService{
    async add(carteBanquaire: CarteBanquaire){
        return fetch("http://localhost:8080/api/utilisateur/moyens-de-paiements", {
            method: 'PATCH',
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
            }),
            body: JSON.stringify(carteBanquaire)
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