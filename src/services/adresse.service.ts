import Adresse from "./types/adresse";
import utilisateurService from "./utilisateur.service";

class AdresseService{
    async add(adresse: any){
        return fetch("http://localhost:8080/api/utilisateur/moyens-de-paiements", {
            method: 'PATCH',
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
            }),
            body: JSON.stringify(adresse)
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
        .then(json => json.adresse)
    }
}

export default new AdresseService();