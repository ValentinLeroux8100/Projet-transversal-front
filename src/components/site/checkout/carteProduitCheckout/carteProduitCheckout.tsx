import React from "react";
import Produit from "services/types/produit";

export default function CarteProduitCheckout(props: {produit: Produit}) {
  return (

    <div className="flex flex-row p-8 gap-4 max-w-full w-full">
        <img
        className="size-48 rounded-lg"
        src={props.produit.images[0].url}
        alt={props.produit.images[0].description}
        />
        <div className="flex flex-col gap-2  w-full h-48 overflow-hidden">
            <div className="flex flex-rows ">
                <h2 className="flex text-2xl capitalize font-bold w-full text-clip overflow-hidden max-h-8">
                    {props.produit.nom}
                </h2>
                <div className="flex flex-row gap-4 items-center">
                <span>{props.produit.quantite}x</span> 
                <span className="flex flex-row bg-green-400 w-auto m-auto py-1 px-3 rounded-full">{props.produit.prix}€</span>
                </div>
            </div>
            <div className="flex flex-rows w-full justify-between">
                <p className="text-justify text-clip overflow-hidden h-full">
                    {props.produit.description}
                </p>
            </div>
        </div>
    </div>
  );
}
