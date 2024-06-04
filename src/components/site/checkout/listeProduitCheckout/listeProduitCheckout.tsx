import React from "react";
import CarteProduitPanier from "components/site/panier/carteProduitPanier/carteProduitPanier";
import Produit from "services/types/produit";
import CarteProduitCheckout from "../carteProduitCheckout/carteProduitCheckout";

export default function ListeProduitCheckout(props: {
  produits: Produit[]
}) {
  return (
    <div className="flex flex-col gap-8">
      {props.produits.map((produit) => {
        return <CarteProduitCheckout produit={produit}/>
      })}
    </div>
  );
}
