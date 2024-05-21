import produitRestToProduit from "./mapper/produitMapper";
import ProduitType from "./types/produit";

class ProduitService{
    async getAll() : Promise<ProduitType[]>{
        return fetch("http://localhost:8080/api/airneis/produits", {
            method: 'GET'
        })
        .then(result => result.json())
        .then(json => json._embedded.produitRestRessourceList.map(
            produitRest =>
            produitRestToProduit(produitRest)
        ));
    }


    async getById(id: String) : Promise<ProduitType>{
        return fetch(`http://localhost:8080/api/airneis/produits/${id}`, {
            method: 'GET'
        })
        .then(result => result.json())
        .then(json => produitRestToProduit(json));
    }
}

export default new ProduitService();