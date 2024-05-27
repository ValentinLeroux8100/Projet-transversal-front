import React, { useEffect, useState } from "react";
import ListeProduits from "components/site/produit/listeProduits/ListeProduits";
import categorieService from "services/categorie.service";
import CategorieType from "services/types/categorie";
import { useLocation } from "react-router-dom";

export default function Categorie() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [categorie, setCategorie] = useState<CategorieType>();

  useEffect(() => {
    const call = async () => {
      const categorieId = location.pathname.match("categories/(.*)")[1]
      console.log(location.pathname)
      const data = await categorieService.getById(categorieId);
      setCategorie(data);
      setIsLoading(false);
    }

    call();
  }, [])

  return (
    <main className="gap-8 py-8 px-12">
      <section className="flex flex-col gap-8">
        {!isLoading && <><h2 className="titre-section">{categorie.nom}</h2>
        <ListeProduits produits={categorie.produit}></ListeProduits></>}
      </section>
    </main>
  );
}
