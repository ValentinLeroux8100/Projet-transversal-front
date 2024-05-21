import React, { useEffect, useState, Suspense, lazy } from "react";
import LoadingAnimation from "assets/images/gifs/loadingAnimation.gif";
import ListeProduits from "components/site/produit/listeProduits/ListeProduits";
import produitFixtureData from "fixture/produitFixture";
import UiAirneisButton from "components/ui/form/button/button";
import ProduitService from "services/produit.service";
import ProduitType from "services/types/produit";
import DescriptionProduit from "components/site/produit/descriptionProduit/descriptionProduit";

export default function Produit() {
  const data = produitFixtureData;

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [produit, setProduit] = useState<ProduitType>();

  useEffect(() => {
    const call = async () => {
      const data = await ProduitService.getById("66475336fe24636ccfeda58d");
      await new Promise(r => setTimeout(r, 2000));
      setProduit(data);
      setIsLoading(false);
    }

    call();
  }, [])


  return (
    <main className="gap-8 py-8 px-12">
      <section className="produit-description">
          <div>
            {
              isLoading?
              <div className="rounded-lg grid place-content-center aspect-[15/8] w-full object-cover bg-gray-300">
                <img className="size-8"src={LoadingAnimation} alt="chargement"/>
              </div>:
              
            <img
              src={produit.image}
              alt={produit.nom}
              className="rounded-lg aspect-[15/8] w-full object-cover"
          />
            }
          </div>
          <div className="flex flex-col gap-4 md:place-content-between">
            {
              isLoading ? 
              <div>loading</div> :
              <DescriptionProduit produit={produit}></DescriptionProduit>
              
            }
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
