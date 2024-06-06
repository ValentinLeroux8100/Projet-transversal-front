import categorieRestToCategorie from "./mapper/categorieMapper";
import Categorie from "./types/categorie";

class CategorieService{
    async getAll() {
        return fetch("http://localhost:8080/api/airneis/categorie", {
            method: 'GET'
        })
        .then(result => result.json());
    }


    async getById(id: String) : Promise<Categorie>{
        return fetch(`http://localhost:8080/api/airneis/categorie/${id}`, {
            method: 'GET',  
        })
        .then(result => result.json())  
        .then(json => categorieRestToCategorie(json));
    }
}

export default new CategorieService();