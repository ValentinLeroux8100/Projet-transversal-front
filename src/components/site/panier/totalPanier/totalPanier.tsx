import React from "react";
import UiAirneisButton from "components/ui/form/button/button";
import Produit from "services/types/produit";

export default function TotalPanier(props: {produits: Produit[], onValidate?: any}) {
  const total = props.produits.reduce(
    (accumulator, produit)=> (accumulator += produit.quantite * produit.prix)
    , 0)

  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <div className="flex flex-row justify-between font-bold text-xl">
          <h2>Total</h2>
          <h2>{total.toFixed(2)}€</h2>
        </div>
        <div className="flex flex-row justify-between text-lg">
          <h3>TVA</h3>
          <h3>{(total * 0.2).toFixed(2)}€</h3>
        </div>
      </div>
      {props.onValidate && 
      <UiAirneisButton className="w-full" onClick={props.onValidate}>Passer la commande</UiAirneisButton>}
    </div>
  );
}
