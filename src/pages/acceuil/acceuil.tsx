import React from "react";
import ListeProduits from "components/site/produit/listeProduits/ListeProduits";
import ListeCategories from "components/site/categorie/listeCategories/listeCategories";
import acceuilFixtureData from "fixture/acceuilFixture";

export default function Acceuil() {
  const { produits, categories } = acceuilFixtureData;

  return (
    <main className="gap-8 py-8 px-12">
      <section>
        <ListeCategories categories={categories}></ListeCategories>
      </section>
      <section>
        <h2 className="titre-section">Les Highlanders du moment</h2>
        <ListeProduits produits={produits}></ListeProduits>
      </section>
    </main>
  );
}
