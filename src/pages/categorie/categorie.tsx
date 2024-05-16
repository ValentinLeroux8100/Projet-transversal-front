import React from "react";
import CategorieFixture from "fixture/categorieFixture";
import ListeProduits from "components/site/produit/listeProduits/ListeProduits";

export default function Categorie() {
  const data = CategorieFixture;

  return (
    <>
      <section className="flex flex-col gap-8">
        <h2 className="titre-section">{data.categorie.nom}</h2>
        <ListeProduits produits={data.produits}></ListeProduits>
      </section>
    </>
  );
}
