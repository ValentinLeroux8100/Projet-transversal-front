import React from "react";
import UiAirneisButton from "components/ui/form/button/button";
import IconeCorbeille from "assets/images/svgs/iconeCorbeille.svg";
import UiAirneisSelect from "components/ui/form/select/select";
import Produit from "services/types/produit";

export default function CarteProduitPanier(props: {produit: Produit, onChange?: any}) {
  const handleChange = (event) => {
    props.onChange({
      produit: props.produit,
      newQuantite: event.target.value
    })
  }

  return (
    <div className="flex flex-row gap-4 max-w-full w-full">
      <img
        className="size-48 rounded-lg"
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
        alt=""
      />
      <div className="flex flex-col gap-2 w-full h-48 overflow-hidden">
        <h2 className="shrink-0 flex text-2xl capitalize font-bold w-full text-clip overflow-hidden max-h-8">
          {props.produit.nom}
        </h2>
        <p className="text-justify text-clip overflow-hidden h-full">
          {props.produit.description}
        </p>
        <div className="grid grid-cols-3 text-center items-center justify-evently w-full">
          <UiAirneisSelect 
            values={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} 
            selectionnedValue={props.produit.quantite}
            onChange={handleChange}
          ></UiAirneisSelect>
          <span className="bg-green-400 m-auto py-1 px-3 rounded-full">{props.produit.prix} €</span>
          <UiAirneisButton icon={IconeCorbeille} />
        </div>
      </div>
    </div>
  );
}
