import React from "react";
import CarteProduitPanier from "components/site/panier/carteProduitPanier/carteProduitPanier";
import Produit from "services/types/produit";

export default function ListeProduitPanier(props: {
  produits: Produit[],
  onChange?: any
}) {
  return (
    <div className="flex flex-col gap-8">
      {props.produits.map((produit) => {
        return <CarteProduitPanier produit={produit} onChange={props.onChange}/>
      })}
    </div>
  );
}
