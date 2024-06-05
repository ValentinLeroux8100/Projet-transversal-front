import React, { useEffect, useState } from "react";
import ListeProduits from "components/site/produit/listeProduits/ListeProduits";
import ListeCategories from "components/site/categorie/listeCategories/listeCategories";
import acceuilFixtureData from "fixture/acceuilFixture";

export default function Acceuil() {
  const { produits, categories } = acceuilFixtureData;

  return (
    <main className="gap-8">
      <div className="grid place-content-center w-full h-64 bg-cover bg-center mb-8 bg-hero-pattern">
        <h2 className="text-center font-logo text-primary text-8xl font-semibold font-body capitalize drop-shadow-md">
          Airness
        </h2>
      </div>
      <section className="px-12">
        <ListeCategories categories={categories}></ListeCategories>
      </section>
      <section className="px-12">
        <h2 className="titre-section">Les Highlanders du moment</h2>
        <ListeProduits produits={produits}></ListeProduits>
      </section>
    </main>
  );
}
