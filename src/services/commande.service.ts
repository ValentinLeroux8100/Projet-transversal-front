import utilisateurService from "./utilisateur.service";

class CommandeService{
    async get(){
        return fetch("http://localhost:8080/api/utilisateur/me" , {
            method: 'GET',
            headers: new Headers({
                Authorization: `Bearer ${utilisateurService.getToken()}`,
            }),
        })
        .then(response => response.json())
        .then(json => json.commandes)
    }
}

export default new CommandeService();