import ListeProduits from "components/site/produit/listeProduits/ListeProduits";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import produitService from "services/produit.service";
import Produit from "services/types/produit";

export default function Recherche() {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [produits, setProduits] = useState<Produit[]>([]);
  
    useEffect(() => {
        const critere = new URLSearchParams(window.location.search).get("critere")
        produitService.search(critere).then(produits => {
        setProduits(produits);
        setIsLoading(false);
      })
    }, [])
  
    return (
      <main className="gap-8 py-8 px-12">
        <section className="flex flex-col gap-8">
          {(!isLoading && produits.length != 0)&& 
            <ListeProduits produits={produits}></ListeProduits>
          }
          {produits.length == 0 && 
            <span>Aucun produit n'a été trouvé</span>
          }
        </section>
      </main>
    );
  }
  