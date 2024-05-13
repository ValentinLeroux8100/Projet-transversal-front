import React from "react";
import ListeProduits from "components/site/listeProduits/ListeProduits";
import ListeCategories from "components/site/listeCategories/listeCategories";
import acceuilFixtureData from "fixture/acceuilFixture";

export default function Acceuil() {
  const { produits, categories } = acceuilFixtureData;

  return (
    <main className="flex flex-col gap-8 py-8 px-12">
      <section className="flex flex-col gap-8 ">
        <ListeCategories categories={categories}></ListeCategories>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="titre-section">Les Highlanders du moment</h2>
        <ListeProduits produits={produits}></ListeProduits>
      </section>
    </main>
  );
}
