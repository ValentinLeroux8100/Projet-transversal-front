import React from "react";
import iconePanier from "assets/iconePanier.svg";
import styles from "./iconePanier.module.css";

export default function IconePanier({
  nombreObjetsPanier,
}: {
  nombreObjetsPanier: number;
}) {
  return (
    <div className={styles.panier}>
      <img src={iconePanier} alt="icone panier" />
      {nombreObjetsPanier}
    </div>
  );
}
