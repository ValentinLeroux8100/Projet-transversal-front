import React from "react";
import styles from "./navbar.module.css";

import iconeMenu from "assets/images/svgs/iconeBurgerMenu.svg";
import iconeRecherche from "assets/images/svgs/iconeRecherche.svg";

import UiAirneisInputText from "components/ui/form/inputText/inputText";
import IconePanier from "components/site/iconePanier/iconePanier";

export default function Navbar() {
  return (
    <nav>
      <div className={styles["left-side"]}>
        <img src={iconeMenu} alt="icone menu burger" />
        <span className={styles["logo"]}>Airneis</span>
      </div>
      <div className={styles["center-side"]}>
        <UiAirneisInputText icon={iconeRecherche}>
          Rechercher un produit
        </UiAirneisInputText>
      </div>
      <div className={styles["right-side"]}>
        <IconePanier nombreObjetsPanier={2}></IconePanier>
      </div>
    </nav>
  );
}
