import ListeProduitCheckout from "components/site/checkout/listeProduitCheckout/listeProduitCheckout";
import TotalPanier from "components/site/panier/totalPanier/totalPanier";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import commandeService from "services/commande.service";
import produitService from "services/produit.service";

export default function DetailCommande(){
    const [produits, setProduits] = useState([]);
    const location = useLocation()
    const commandeId = location.pathname.match("compte/commande/(.*)")[1]

    const call = async () => {
        await commandeService.get().then(async commandes => {
            const commandeId = location.pathname.match("compte/commande/(.*)")[1]
            const commandeSelected = commandes.find(commande => commande.id == commandeId)

            for(const produitIndex in commandeSelected.produits){
                const quantite = commandeSelected.produits[produitIndex].quantite
                commandeSelected.produits[produitIndex] = await produitService.getById(
                    commandeSelected.produits[produitIndex].id
                )
                commandeSelected.produits[produitIndex].quantite = quantite
                console.log(commandeSelected.produits[produitIndex])
            }

            setProduits(commandeSelected.produits)
        })
    }

    useEffect(() => {
        call();
    }, [])

  return (
    <main className="gap-8 py-8 px-4 md:px-12">
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
        <h2 className="titre-section">Commande</h2>
        <h3 className="text-center text-black font-semibold font-body capitalize text-xl">{commandeId}</h3>
        </div>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[50%_40%] w-full justify-between">
          <ListeProduitCheckout produits={produits}/>
          <TotalPanier produits={produits}/>
        </div>
      </section>
    </main>
  );
}

