import React from "react";
import ProduitType from "services/types/produit";

export default function DescriptionProduit(props: { produit: ProduitType }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row place-content-between ">
        <div className="gap-2">
          <h2 className="text-xl">{props.produit.nom}</h2>
          <p className="text-zinc-400">en stock</p>
        </div>
        <span className="py-2 px-3 h-fit rounded-full bg-valid">
          {props.produit.prix} €
        </span>
      </div>

      <p className="text-justify">{props.produit.description}</p>
    </div>
  );
}
