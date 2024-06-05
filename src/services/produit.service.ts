import produitRestToProduit from "./mapper/produitMapper";
import Produit from "./types/produit";

class ProduitService {
    async getAll(): Promise<Produit[]> {
        return fetch("http://localhost:8080/api/airneis/produits", {
            method: 'GET'
        })
            .then(result => result.json())
            .then(json => json._embedded.produitRestRessourceList.map(
                produitRest =>
                    produitRestToProduit(produitRest)
            ));
    }

    async search(searchParam): Promise<Produit[]> {
        return fetch("http://localhost:8080/api/airneis/produits?" + new URLSearchParams({
            critereDeRecherche: searchParam,
        }), {
            method: 'GET'
        })
            .then(result => result.json())
            .then(json => {
                if(json._embedded)
                    return json._embedded.produitRestRessourceList.map(
                        produitRest =>
                            produitRestToProduit(produitRest)
                    )
                else
                    return []
            }
            );
    }


    async getById(id: String): Promise<Produit> {
        return fetch(`http://localhost:8080/api/airneis/produits/${id}`, {
            method: 'GET'
        })
            .then(result => result.json())
            .then(json => produitRestToProduit(json));
    }
}

export default new ProduitService();