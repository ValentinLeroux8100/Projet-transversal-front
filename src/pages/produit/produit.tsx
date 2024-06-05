import React, { useEffect, useState, Suspense, lazy } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingAnimation from "assets/images/gifs/loadingAnimation.gif";
import ListeProduits from "components/site/produit/listeProduits/ListeProduits";
import produitFixtureData from "fixture/produitFixture";
import UiAirneisButton from "components/ui/form/button/button";
import ProduitService from "services/produit.service";
import ProduitType from "services/types/produit";
import DescriptionProduit from "components/site/produit/descriptionProduit/descriptionProduit";
import panierService from "services/panier.service";
import utilisateurService from "services/utilisateur.service";

export default function Produit() {
  const data = produitFixtureData;

  const location = useLocation()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [produit, setProduit] = useState<ProduitType>();

  useEffect(() => {
    const call = async () => {
      const produitId = location.pathname.match("produits/(.*)")[1]
      const data = await ProduitService.getById(produitId);
      setProduit(data);
      setIsLoading(false);
    }
    call();
  }, [])


  const addToPanier = () => {
    if(utilisateurService.getToken() == null) 
      navigate("/connection")
    else
      panierService.add(produit.id, 1)
  }

  const goToChecktout = () => {
    addToPanier()
    navigate("/checkout")
  }

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
              src={produit.images[0].url}
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
              <UiAirneisButton className="w-full" onClick={addToPanier}>
                Ajouter au panier
              </UiAirneisButton>
              <UiAirneisButton className="w-full" onClick={goToChecktout}>Acheter</UiAirneisButton>
            </div>
          </div>
      </section>

    </main>
  );
}
