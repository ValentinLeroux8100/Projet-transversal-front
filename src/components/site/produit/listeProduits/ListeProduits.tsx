import React from "react";
import Produit from "services/types/produit";
import CarteProduit from "components/site/produit/carteProduit/carteProduit";

interface ListeProduitsProps {
  produits: Produit[];
}

export default function ListeProduits(props: ListeProduitsProps) {
  const produits = props.produits;
  return (
    <div className="flex flex-row flex-wrap place-content-evently justify-center gap-8 p-4">
      {produits.map((produit) => {
        return <CarteProduit produit={produit}></CarteProduit>;
      })}
    </div>
  );
}
