import React from "react";
import { Link } from "react-router-dom";

import iconeMenu from "assets/images/svgs/iconeBurgerMenu.svg";
import iconeRecherche from "assets/images/svgs/iconeRecherche.svg";
import iconeCompte from "assets/images/svgs/iconeProfil.svg";

import UiAirneisInputText from "components/ui/form/inputText/inputText";
import IconePanier from "components/site/panier/iconePanier/iconePanier";

export default function Navbar() {
  return (
    <nav >
      <div className="flex gap-4 w-max">
        <Link
          to="/"
          className="font-bold text-4xl font-logo text-primary"
        >
          A<span className="hidden lg:inline font-bold text-4xl font-logo text-primary">irneis</span>
        </Link>
      </div>
      <form action="/recherche" className="lg:w-full w-48">
        <UiAirneisInputText
          name="critere"
          placeholder="Rechercher un produit"
          icon={iconeRecherche}
        ></UiAirneisInputText>
      </form>
      <div className="flex flex-row gap-4">
        <Link to="connection" className="flex justify-end w-max">
          <img className="size-8" src={iconeCompte} alt="icone compte" />
        </Link>
        <Link to="panier" className="flex justify-end w-max">
          <IconePanier></IconePanier>
        </Link>
      </div>
    </nav>
  );
}
