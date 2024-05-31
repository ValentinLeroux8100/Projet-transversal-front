import React from "react";
import CarteProduitPanier from "components/site/panier/carteProduitPanier/carteProduitPanier";
import Produit from "services/types/produit";

export default function ListeProduitPanier(props: {produits: Produit[]}) {


  return (
    <div className="flex flex-col gap-8">
      {props.produits.map((produit) => {
        return <CarteProduitPanier produit={produit}/>
      })}
    </div>
  );
}
