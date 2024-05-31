import categorieRestToCategorie from "./mapper/categorieMapper";
import Categorie from "./types/categorie";

class CategorieService{
    async getAll() : Promise<Categorie[]>{
        return fetch("http://localhost:8080/api/airneis/categories", {
            method: 'GET'
        })
        .then(result => result.json())
        .then(json => json._embedded.categorieRestRessourceList.map(
            categorieRest =>
            categorieRestToCategorie(categorieRest)
        ));
    }


    async getById(id: String) : Promise<Categorie>{
        return fetch(`http://localhost:8080/api/airneis/categories/${id}`, {
            method: 'GET',  
        })
        .then(result => result.json())  
        .then(json => categorieRestToCategorie(json));
    }é
}

export default new CategorieService();