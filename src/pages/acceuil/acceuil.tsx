import React, { useEffect, useState } from "react";
import ListeProduits from "components/site/produit/listeProduits/ListeProduits";
import ListeCategories from "components/site/categorie/listeCategories/listeCategories";
import acceuilFixtureData from "fixture/acceuilFixture";
import categorieService from "services/categorie.service";

export default function Acceuil() {
  const [categories, setCategories] = useState([])
  const [produits, setProduits] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const call = async () => {
    const categoriesEnBase = await categorieService.getAll()
    const produitsEnBase =  categoriesEnBase[0].produits.map(produit => {
      produit.images = [produit.image]
      return produit
    });
    console.log(produitsEnBase)
    setCategories(categoriesEnBase)
    setProduits(produitsEnBase)
    setIsLoading(false)
  }

  useEffect(() => {
    call()
  } , [])


  return (
    <main className="gap-8">
      <div className="grid place-content-center w-full h-64 bg-cover bg-center mb-8 bg-hero-pattern">
        <h2 className="text-center font-logo text-primary text-8xl font-semibold font-body capitalize drop-shadow-md">
          Airness
        </h2>
      </div>
      <section className="px-12">
        {!isLoading && <ListeCategories categories={categories} /> }
      </section>
      <section className="px-12">
        <h2 className="titre-section">Les Highlanders du moment</h2>
        <ListeProduits produits={produits}></ListeProduits>
      </section>
    </main>
  );
}
