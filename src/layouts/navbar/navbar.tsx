import React from "react";
import { Link } from "react-router-dom";

import iconeMenu from "assets/images/svgs/iconeBurgerMenu.svg";
import iconeRecherche from "assets/images/svgs/iconeRecherche.svg";

import UiAirneisInputText from "components/ui/form/inputText/inputText";
import IconePanier from "components/site/panier/iconePanier/iconePanier";

export default function Navbar() {
  return (
    <nav>
      <div className="flex gap-4 w-max">
        <img src={iconeMenu} alt="icone menu burger" className="h-[1.1em]" />
        <Link
          to="/"
          className="font-bold text-4xl hidden lg:block font-logo text-primary"
        >
          Airneis
        </Link>
      </div>
      <div>
        <UiAirneisInputText
          placeholder="Rechercher un produit"
          icon={iconeRecherche}
        ></UiAirneisInputText>
      </div>
      <div className="flex justify-end w-max">
        <IconePanier nombreObjetsPanier={2}></IconePanier>
      </div>
    </nav>
  );
}
