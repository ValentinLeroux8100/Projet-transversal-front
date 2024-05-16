import React from "react";
import ListeProduitPanier from "components/site/panier/listeProduitPanier/listeProduitPanier";
import TotalPanier from "components/site/panier/totalPanier/totalPanier";

export default function Panier() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="titre-section">Panier</h2>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-[50%_40%] w-full justify-between">
        <ListeProduitPanier />
        <TotalPanier />
      </div>
    </section>
  );
}
