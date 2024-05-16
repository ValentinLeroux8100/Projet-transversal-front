import React from "react";
import ListeProduits from "components/site/produit/listeProduits/ListeProduits";
import ListeCategories from "components/site/categorie/listeCategories/listeCategories";
import acceuilFixtureData from "fixture/acceuilFixture";

export default function Acceuil() {
  const { produits, categories } = acceuilFixtureData;

  return (
    <>
      <section>
        <ListeCategories categories={categories}></ListeCategories>
      </section>
      <section>
        <h2 className="titre-section">Les Highlanders du moment</h2>
        <ListeProduits produits={produits}></ListeProduits>
      </section>
    </>
  );
}
