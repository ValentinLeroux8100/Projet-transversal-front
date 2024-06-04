import React, { useEffect, useState } from "react";
import FormulaireAdresse from "components/site/adresse/formulaireAdresse";
import UiAirneisButton from "components/ui/form/button/button";
import UiAirneisSelect from "components/ui/form/select/select";
import UiAirneisCheckbox from "components/ui/form/checkbox/checkbox";
import ListeProduitPanier from "components/site/panier/listeProduitPanier/listeProduitPanier";
import panierService from "services/panier.service";
import produitService from "services/produit.service";
import ListeProduitCheckout from "components/site/checkout/listeProduitCheckout/listeProduitCheckout";
import utilisateurService from "services/utilisateur.service";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const [produits, setProduits] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const call = async () => {
      const panier = (await panierService.get())
      const produitsEnBase = await Promise.all(panier.produits.map(async (produit) => {
        const produitEnBase = await produitService.getById(produit.id);
        produitEnBase.quantite = produit.quantite;
        return produitEnBase
      }))

      setProduits(produitsEnBase)
    }

    if(utilisateurService.getToken() == null) 
      navigate("/connection")
    else
      call();
  }, [])

  return (
    <main className="lg:grid lg:grid-cols-2">
      <section className="bg-thirdy py-8 px-32">
        <form className="flex flex-col gap-4">
          <h2 className="titre-section pb-4">Adresse Livraison</h2>
          <UiAirneisSelect values={[""]} />
          <FormulaireAdresse />
          <label className="flex flex-row gap-4 items-center">
            <UiAirneisCheckbox />
            Utiliser la même adresse pour la facturation
          </label>
          <div className="flex flex-row gap-4 w-full">
            <UiAirneisButton className="w-full">Précédent</UiAirneisButton>
            <UiAirneisButton className="w-full">Suivant</UiAirneisButton>
          </div>
        </form>
      </section>

      <aside>
        <h2 className="titre-section py-8">Résumé de la Commande</h2>
        <ListeProduitCheckout produits={produits}></ListeProduitCheckout>
      </aside>
    </main>
  );
}
