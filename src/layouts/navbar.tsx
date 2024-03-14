import React from "react";
import burgerIcon from "assets/iconeBurgerMenu.svg";
import UiAirneisInputText from "components/ui/form/inputText";
import IconePanier from "components/site/iconePanier/iconePanier";

export default function Navbar() {
  return (
    <nav>
      <img src={burgerIcon} alt="icone menu burger" />
      <span>Airneis</span>
      <UiAirneisInputText>Rechercher un produit</UiAirneisInputText>
      <IconePanier nombreObjetsPanier={3}></IconePanier>
    </nav>
  );
}
