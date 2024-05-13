import React from "react";
import ListeProduits from "components/site/listeProduits/ListeProduits";
import DescriptionProduit from "components/site/descriptionProduit/descriptionProduit";
import produitFixtureData from "fixture/produitFixture";
import UiAirneisButton from "components/ui/form/button/button";

export default function Produit() {
  const data = produitFixtureData;

  return (
    <main className="flex flex-col gap-8 py-8 px-12">
      <section className="produit-description">
        <div>
          <img
            src={data.produit.image}
            alt={data.produit.nom}
            className="rounded-lg aspect-[15/8] w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 md:place-content-between">
          <DescriptionProduit produit={data.produit}></DescriptionProduit>
          <div className="flex gap-2 w-full">
            <UiAirneisButton className="w-full">
              Ajouter au panier
            </UiAirneisButton>
            <UiAirneisButton className="w-full">Acheter</UiAirneisButton>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="titre-section">Produit similaire</h2>
        <ListeProduits produits={data.produitsRecommandes}></ListeProduits>
      </section>
    </main>
  );
}
