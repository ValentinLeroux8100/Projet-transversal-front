import React from "react";
import CategorieFixture from "fixture/categorieFixture";
import ListeProduits from "components/site/produit/listeProduits/ListeProduits";

export default function Categorie() {
  const data = CategorieFixture;

  return (
    <main className="flex flex-col gap-8 py-8 px-12">
      <section className="flex flex-col gap-8">
        <h2 className="titre-section">{data.categorie.nom}</h2>
        <ListeProduits produits={data.produits}></ListeProduits>
      </section>
    </main>
  );
}
