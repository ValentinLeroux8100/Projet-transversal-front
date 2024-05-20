import React from "react";
import CarteProduitPanier from "components/site/panier/carteProduitPanier/carteProduitPanier";

export default function ListeProduitPanier() {
  return (
    <div className="flex flex-col gap-8">
      <CarteProduitPanier />
      <CarteProduitPanier />
      <CarteProduitPanier />
      <CarteProduitPanier />
    </div>
  );
}
