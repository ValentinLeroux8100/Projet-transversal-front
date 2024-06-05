import Adresse from "./types/adresse";
import utilisateurService from "./utilisateur.service";

class AdresseService{
    async add(adresse: Adresse){
        return fetch("http://localhost:8080/api/utilisateur/adresse", {
            method: 'POST',
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
                "Content-Type": "application/json",   
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

    async delete(adresse: Adresse){
        return fetch("http://localhost:8080/api/utilisateur/adresse", {
            method: 'DELETE',
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
                "Content-Type": "application/json",   
            }),
            body: JSON.stringify(adresse)
        })
    }
}

export default new AdresseService();