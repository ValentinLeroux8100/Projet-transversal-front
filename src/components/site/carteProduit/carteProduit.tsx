import React from "react";
import styles from "./carteProduit.module.css";
import meubleImage from "assets/images/mocks/meuble.jpg";

export default function CarteProduit() {
  return (
    <div className={styles["carte-produit"]}>
      <img src={meubleImage} alt="" />
      <div className={styles["description"]}>
        <div>
          <h2>IKEA</h2>
          <h3>Commode pas très commode</h3>
        </div>
        <span>103€</span>
      </div>
    </div>
  );
}
