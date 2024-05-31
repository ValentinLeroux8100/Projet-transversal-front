import React from "react";
import UiAirneisButton from "components/ui/form/button/button";
import IconeCorbeille from "assets/images/svgs/iconeCorbeille.svg";
import UiAirneisSelect from "components/ui/form/select/select";
import Produit from "services/types/produit";

export default function CarteProduitPanier(props: {produit: Produit}) {
  console.log(props)
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          quidem magni nisi maiores? Sunt, velit sit alias voluptates ex labore
          nulla cupiditate eum laboriosam laudantium quam cumque. Aliquid, modi
          officiis!lla cupiditate eum lalla cupiditate eum lalla cupiditate eum
          la
        </p>
        <div className="grid grid-cols-3 text-center items-center justify-evently w-full">
          <UiAirneisSelect values={["a", "b"]}></UiAirneisSelect>
          <span>10 €</span>
          <UiAirneisButton icon={IconeCorbeille} />
        </div>
      </div>
    </div>
  );
}
