import React from "react";
import styles from "./carteCategorie.module.css";
import meubleImage from "assets/images/mocks/meuble.jpg";

export default function CarteCategorie() {
  return (
    <div className={styles["carte-categorie"]}>
      <img src={meubleImage} alt="" />
      <div className={styles["description"]}>
        <h2>Salon</h2>
      </div>
    </div>
  );
}
