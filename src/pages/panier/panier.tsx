import React, { useEffect, useState } from "react";
import ListeProduitPanier from "components/site/panier/listeProduitPanier/listeProduitPanier";
import TotalPanier from "components/site/panier/totalPanier/totalPanier";
import panierService from "services/panier.service";

export default function Panier() {

  const [produits, setProduits] = useState([])
  
  useEffect(() => {
    const call = async () => {
      const panier = (await panierService.get())
      setProduits(panier.produits)
    }

    call();
  }, [])

  return (
    <main className="gap-8 py-8 px-12">
      <section className="flex flex-col gap-8">
        <h2 className="titre-section">Panier</h2>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-[50%_40%] w-full justify-between">
          <ListeProduitPanier produits={produits} />
          <TotalPanier />
        </div>
      </section>
    </main>
  );
}
